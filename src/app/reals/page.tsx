import Image from "next/image";
//COMPONENTS:
import Pagination from "../Components/Pagination";
//Components tag:
import Content from '../Components/Content';
import { H1, H2, H3 } from '../Components/Content/Components/Titles';
import Header from '../Components/Content/Components/Header';
import Paragrafo from '../Components/Content/Components/Paragrafo';
import Section from '../Components/Content/Components/Section';
import { Li, Ol, Ul } from '../Components/Content/Components/Listas';
import Links from '../Components/Content/Components/Links';
import Quests from '../Components/Content/Components/Quests';

import { Metadata } from 'next';
import GenerateMetadata from '../Metadata';


interface MetaType {
  title: string | null
  description: string | null
  keywords: string [] | null
}

const metas: MetaType = {
  title: "Reals",
  description: null,
  keywords : [
    "baixar Reels do Instagram",
    "download Reels Instagram",
    "salvar Reels Instagram",
    "baixar vídeos Reels Instagram",
    "baixar Reels Instagram grátis",
    "baixar Reels Instagram sem aplicativo",
    "baixar Reels Instagram com link",
    "baixar Reels Instagram para Android",
    "baixar Reels Instagram para iPhone",
    "baixar Reels Instagram para PC",
    "baixar Reels Instagram com áudio",
    "baixar Reels Instagram em MP4",
    "baixar Reels Instagram sem marca d'água",
    "baixar Reels Instagram online",
    "baixar Reels Instagram sem login"
  ]
}

export const metadata: Metadata = GenerateMetadata(metas);

export default function page() {
  return (
    <>
      <Pagination />
      <Content>
        <Header>
          <div className="mx-auto px-3">
            <H1 text="Como Baixar Reels com o InstaSave Hub" />
            <Paragrafo text="Guia Completo para Download de Reels do Instagram" />
          </div>
        </Header>
        <Section>
          <Paragrafo>
            Os <Links text="Reels do Instagram" url='https://about.instagram.com/pt-br/features/reels' target='_blank' /> são vídeos curtos e envolventes que conquistaram milhões de usuários globalmente. No entanto, o Instagram não permite baixar Reels diretamente pela plataforma. O <strong>InstaSave Hub</strong> é uma ferramenta online que resolve esse problema, permitindo downloads rápidos, seguros e gratuitos. Neste guia exploraremos como usar o InstaSave Hub para baixar Reels, seus benefícios, dicas de uso e estratégias para maximizar sua experiência.
          </Paragrafo>
        </Section>
        <Section>
          <H2 text="O que é o InstaSave Hub?" />
          <Paragrafo>O <strong>InstaSave Hub</strong> é uma plataforma online que facilita o download de conteúdos do Instagram. Com uma interface simples, basta copiar a <Links text="URL do Reel" url="https://www.facebook.com/help/instagram/887370848459462?locale=pt_BR#como-criar-anuncios-com-link-para-reels-ou-videos-do-instagram" /> desejado e colá-la no campo de input do site para iniciar o download em poucos segundos.</Paragrafo>
        </Section>
        <Section>
          <H2 text="Como Baixar Reels do Instagram com o InstaSave Hub" />
          <Paragrafo>Baixar Reels com o InstaSave Hub é um processo fácil e rápido. Siga os passos abaixo para salvar seus vídeos favoritos:</Paragrafo>
          <H3 text="Passo 1: Encontre o Reel no Instagram" />
          <Ol>
            <Li>Acesse o Instagram pelo <Links text="aplicativo" url='https://play.google.com/store/apps/details?id=com.instagram.android&pcampaignid=web_share' target='_blank' /> ou <Links text="site" url='https://www.instagram.com/' target='_blank' />.</Li>
            <Li>Localize o Reel que deseja baixar.</Li>
            <Li>Clique nos três pontos no canto superior direito e selecione <strong>Copiar Link</strong>.</Li>
          </Ol>
          <H3 text="Passo 2: Insira a URL do Reel" />
          <Ol>
            <Li>Cole a URL do Reel no campo de input.</Li>
            <Li>Verifique se o link está correto.</Li>
          </Ol>
          <H3 text="Passo 3: Salve o Reel" />
          <Ol>
            <Li>O InstaSave Hub processará o link rapidamente.</Li>
            <Li>Uma prévia do Reel aparecerá com um botão de download.</Li>
            <Li>Clique em <strong>Baixar</strong>.</Li>
          </Ol>
          <H3 text='Passo 4: Salvando video:' />
          <Ol>
            <Li>Na pagina de download click nos trés pontinhos do video, conforme imagem abaixo:</Li>
            <Image
              height={400}
              width={300}
              src={"/imagens/page-video/pagina-download-tutorial.png"}
              alt='pagina de download, trés pontos.'
              className='mb-2'
            />
            <Li>E por fim click em baixar, conforme imagem abaixo:</Li>
            <Image
              height={400}
              width={300}
              src={"/imagens/page-video/pagina-download-baixando-tutorial.png"}
              alt='botao baixar video'
              className='mb-2'
            />
          </Ol>
          <H3 text="Passo 4: Aproveite Offline" />
          <Ul>
            <Li>O Reel será salvo em MP4, compatível com a maioria dos dispositivos.</Li>
            <Li>Assista offline, edite ou compartilhe como preferir.</Li>
          </Ul>
        </Section>

        <Section>
          <H2 text="Vantagens de Usar o InstaSave Hub para Reels" />
          <Paragrafo>O InstaSave Hub é uma ferramenta versátil que oferece benefícios únicos para usuários que desejam baixar Reels:</Paragrafo>
          <Ol>
            <Li><strong>Qualidade Preservada</strong>: Os Reels são baixados na resolução original, garantindo a melhor experiência visual.</Li>
            <Li><strong>Interface Intuitiva</strong>: O design simples do InstaSave Hub torna o processo acessível até para iniciantes.</Li>
            <Li><strong>Versatilidade</strong>: Além de Reels, a ferramenta suporta outros formatos, como stories e IGTVs.</Li>
            <Li><strong>Privacidade Garantida</strong>: O InstaSave Hub não armazena vídeos ou dados pessoais, protegendo sua privacidade.</Li>
          </Ol>
        </Section>

        <Section>
          <H2 text="Por que Baixar Reels do Instagram?" />
          <Paragrafo>Baixar Reels pode ser útil para diversos fins. Veja alguns exemplos:</Paragrafo>
          <Ol>
            <Li><strong>Visualização Offline</strong>: Assista Reels sem depender de internet.</Li>
            <Li><strong>Arquivamento</strong>: Salve Reels para referência futura.</Li>
            <Li><strong>Criação de Conteúdo</strong>: Reutilize Reels em projetos criativos, como montagens ou tutoriais.</Li>
            <Li><strong>Compartilhamento</strong>: Envie Reels para amigos sem precisar de uma conta no Instagram.</Li>
          </Ol>
        </Section>
        <Section>
          <H2 text="Segurança no InstaSave Hub" />
          <Paragrafo>O InstaSave Hub prioriza a segurança com:</Paragrafo>
          <Ul>
            <Li><strong>Sem armazenamento</strong>: Vídeos não ficam salvos nos servidores.</Li>
            <Li><strong>HTTPS</strong>: Conexão segura para proteger dados.</Li>
            <Li><strong>Sem login</strong>: Não é necessário informar dados pessoais.</Li>
          </Ul>
        </Section>

        <Section>
          <Paragrafo>O <strong>InstaSave Hub</strong> é a melhor escolha para baixar Reels do Instagram de forma prática e segura. Com este guia, você está pronto para salvar seus vídeos favoritos e usá-los como quiser. </Paragrafo>
          <Links text='Veja como baixar uma imagem do Instagram.' url='/imagens'/>
        </Section>
        <Section>
          <Quests />
        </Section>
      </Content>
    </>
  );
}
