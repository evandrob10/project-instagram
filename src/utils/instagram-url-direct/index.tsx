import axios from "axios";
import qs from "qs";

// Tipos
interface PostInfo {
    owner_username: string;
    owner_fullname: string;
    is_verified: boolean;
    is_private: boolean;
    likes: number;
    is_ad: boolean;
    caption: string;
}

interface MediaDetails {
    type: "video" | "image";
    dimensions: { width: number; height: number };
    video_view_count?: number;
    url: string;
    thumbnail?: string;
}

interface OutputData {
    results_number: number;
    url_list: string[];
    post_info: PostInfo;
    media_details: MediaDetails[];
}

// Tipos para requestData
interface Owner {
    username: string;
    full_name: string;
    is_verified: boolean;
    is_private: boolean;
}

interface MediaEdge {
    node: {
        text: string;
    };
}

interface Media {
    is_video: boolean;
    dimensions: { width: number; height: number };
    video_view_count?: number;
    video_url?: string;
    display_url: string;
}

interface XDTGraphMedia {
    owner: Owner;
    edge_media_to_caption: { edges: MediaEdge[] };
    edge_media_preview_like: { count: number };
    is_ad: boolean;
    is_video: boolean;
    video_url?: string;
    display_url: string;
    dimensions: { width: number; height: number };
    __typename: string;
    edge_sidecar_to_children?: { edges: { node: Media }[] };
}

// Função principal
export async function instagramGetUrl(url_media: string): Promise<OutputData> {
    try {
        // Verifica redirecionamento, se houver
        url_media = await checkRedirect(url_media);
        const shortcode = getShortcode(url_media);

        // Realiza a requisição do Instagram
        const instagramRequestData = await instagramRequest(shortcode);

        // Cria os dados de saída
        const outputData = createOutputData(instagramRequestData);

        return outputData;
    } catch (err: unknown) {
        if (err instanceof Error) {
            // Agora você pode acessar as propriedades de Error, como message
            throw new Error(err.message);
        } else {
            // O erro não é uma instância de Error, pode ser outro tipo
            throw new Error("Erro desconhecido");
        }
    }
}

// Utilitários

// Verifica se o URL foi redirecionado
async function checkRedirect(url: string): Promise<string> {
    const split_url = url.split("/");
    if (split_url.includes("share")) {
        const res = await axios.get(url);
        return res.request.path;
    }
    return url;
}

// Formata as informações do post
function formatPostInfo(requestData: XDTGraphMedia): PostInfo {
    try {
        const mediaCapt = requestData.edge_media_to_caption.edges;
        const caption = mediaCapt.length === 0 ? "" : mediaCapt[0].node.text;
        return {
            owner_username: requestData.owner.username,
            owner_fullname: requestData.owner.full_name,
            is_verified: requestData.owner.is_verified,
            is_private: requestData.owner.is_private,
            likes: requestData.edge_media_preview_like.count,
            is_ad: requestData.is_ad,
            caption,
        };
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new Error(`Erro ao formatar informações do post: ${err.message}`);
        }
        throw new Error("Erro desconhecido ao formatar informações do post");
    }
}

// Formata os detalhes da mídia (vídeo ou imagem)
function formatMediaDetails(mediaData: Media): MediaDetails {
    try {
        if (mediaData.is_video) {
            return {
                type: "video",
                dimensions: mediaData.dimensions,
                video_view_count: mediaData.video_view_count,
                url: mediaData.video_url!,
                thumbnail: mediaData.display_url,
            };
        } else {
            return {
                type: "image",
                dimensions: mediaData.dimensions,
                url: mediaData.display_url,
            };
        }
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new Error(`Erro ao formatar detalhes da mídia: ${err.message}`);
        }
        throw new Error("Erro desconhecido ao formatar detalhes da mídia");
    }
}

// Extrai o shortcode da URL
function getShortcode(url: string): string {
    try {
        const split_url = url.split("/");
        const postTags = ["p", "reel", "tv", "reels"];
        const indexShortcode = split_url.findIndex(item => postTags.includes(item)) + 1;
        return split_url[indexShortcode];
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new Error(`Erro ao obter o shortcode: ${err.message}`);
        }
        throw new Error("Erro desconhecido ao obter o shortcode");
    }
}

// Verifica se o conteúdo é um "sidecar" (carrossel de imagens)
function isSidecar(requestData: XDTGraphMedia): boolean {
    try {
        return requestData["__typename"] === "XDTGraphSidecar";
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new Error(`Erro ao verificar sidecar: ${err.message}`);
        }
        throw new Error("Erro desconhecido ao verificar sidecar");
    }
}

// Realiza a requisição GraphQL para o Instagram
async function instagramRequest(shortcode: string): Promise<XDTGraphMedia> {
    try {
        const BASE_URL = "https://www.instagram.com/graphql/query";
        const INSTAGRAM_DOCUMENT_ID = "8845758582119845";

        const dataBody = qs.stringify({
            variables: JSON.stringify({
                shortcode,
                fetch_tagged_user_count: null,
                hoisted_comment_id: null,
                hoisted_reply_id: null,
            }),
            doc_id: INSTAGRAM_DOCUMENT_ID,
        });

        const config = {
            method: "post",
            maxBodyLength: Infinity,
            url: BASE_URL,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRFToken': '<KbLT5jTOHKE70Bdrt1aup27JuzyApFFN>',
                'Cookie': 'sessionid=<43961951392%3AMgWxV49fiBpzKI%3A8%3AAYcMjHNFYLK7pnNsHdQGWXRnHvjQdxSiHxRoEmZHzg>; csrftoken=<KbLT5jTOHKE70Bdrt1aup27JuzyApFfN>; ds_user_id=<43961951392>'
            },
            data: dataBody,
        };

        const { data } = await axios.request(config);
        if (!data?.data?.xdt_shortcode_media) {
            throw new Error("Somente posts/reels são suportados. Verifique se o link é válido.");
        }

        return data.data.xdt_shortcode_media;
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new Error(`Erro na requisição ao Instagram: ${err.message}`);
        }
        throw new Error("Erro desconhecido na requisição ao Instagram");
    }
}

// Cria os dados de saída
function createOutputData(requestData: XDTGraphMedia): OutputData {
    try {
        const url_list: string[] = [];
        const media_details: MediaDetails[] = [];

        const isSidecarPost = isSidecar(requestData);

        if (isSidecarPost) {
            requestData.edge_sidecar_to_children?.edges.forEach((media: { node: Media }) => {
                media_details.push(formatMediaDetails(media.node));
                if (media.node.is_video) {
                    url_list.push(media.node.video_url!);
                } else {
                    url_list.push(media.node.display_url);
                }
            });
        } else {
            media_details.push(formatMediaDetails(requestData));
            if (requestData.is_video) {
                url_list.push(requestData.video_url!);
            } else {
                url_list.push(requestData.display_url);
            }
        }

        return {
            results_number: url_list.length,
            url_list,
            post_info: formatPostInfo(requestData),
            media_details,
        };
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new Error(`Erro ao criar dados de saída: ${err.message}`);
        }
        throw new Error("Erro desconhecido ao criar dados de saída");
    }
}
