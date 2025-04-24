import type { Metadata } from "next";

interface MetaType{
  title : string | null
  description : string | null
  keywords : string[] | null
}



export default function GenerateMetadata({title, description, keywords} : MetaType) {
  const Metadata : Metadata = {
    title : title ? `InstaSave Hub - ${title} -Dowloads de Vídeos do Instagram` : "InstaSave Hub - Dowloads de Vídeos do Instagram",
    description : description ? description : 'InstaSave Hub é uma plataforma online simples e eficiente que permite baixar vídeos do Instagram de forma rápida e segura, direto do seu navegador.',  
    keywords: keywords ? keywords : [
      "baixar vídeos do Instagram",
      "download Instagram",
      "salvar vídeos Instagram",
      "InstaSave",
      "baixar Reels Instagram",
      "Instagram downloader",
      "vídeos Instagram online",
      "baixar conteúdo Instagram",
      "ferramenta Instagram download",
      "plataforma para baixar vídeos"
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    viewport: "width=device-width, initial-scale=1"
  }
  return Metadata;
}
