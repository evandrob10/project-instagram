'use client'
//Components
import { H2, H3 } from "../Titles"
import Paragrafo from "../Paragrafo"
//Hooks
import { useState } from 'react'
import Links from "../Links"
import { Li, Ol } from "../Listas"


type QuestType = {
    quest: string,
    response: string
    _url?: {
        title: string,
        link: string
    }[]
}

export default function Quests() {
    const [clickId, setClickId] = useState("");

    const quests: QuestType[] = [
        {
            quest: "1. O InstaSave Hub é gratuito?",
            response: "Sim, o InstaSave Hub é 100% gratuito e não exige assinatura ou pagamento."
        },
        {
            quest: "2. Preciso instalar algum aplicativo?",
            response: "Não, o InstaSave Hub é uma ferramenta baseada na web, acessível diretamente pelo navegador."
        },
        {
            quest: "3. Posso baixar vídeos de contas privadas?",
            response: "Não, o InstaSave Hub só permite baixar vídeos de contas públicas. Para contas privadas, você precisa de permissão do proprietário."
        },
        {
            quest: "4. Os vídeos baixados têm marca d’água?",
            response: "Os vídeos baixados com o InstaSave Hub não incluem marcas d’água adicionais, mantendo a qualidade original."
        },
        {
            quest: "5. É legal baixar vídeos do Instagram?",
            response: `Baixar vídeos para uso pessoal é geralmente aceitável, mas redistribuir ou usar o conteúdo sem permissão pode violar os termos de uso do Instagram ou leis de direitos autorais.`,
            _url: [
                {
                    title: "termos de uso do Instagram",
                    link: "https://help.instagram.com/581066165581870/?locale=pt_PT&hl=pt"
                },
                {
                    title: "leis de direitos autorais",
                    link: "https://www.planalto.gov.br/ccivil_03/leis/l9610.htm"
                }
            ]
        },
    ]

    function handlerClickId(p1: string) {
        setClickId((prevState) => {
            if (prevState !== p1) return p1
            return "";
        })
    }

    return (
        <>
            <H2 text="Perguntas Frequentes sobre o InstaSave Hub" />
            {quests.map((element, index) => (
                <div key={index}>
                    <H3 text={element.quest} p1={'p' + index} onClickId={handlerClickId} />
                    <Paragrafo p1={'p' + index} clickId={clickId}>{element.response}</Paragrafo>
                    <Paragrafo key={index} p1={'p' + index} clickId={clickId}>
                        <Ol>
                            {element._url && element._url.map((element, index) => (
                               <Li key={index}><Links text={element.title} url={element.link} /></Li>
                            ))}
                        </Ol>
                    </Paragrafo>
                </div>
            ))}
        </>

    )
}
