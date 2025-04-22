'use client'
//Components
import { H3 } from "../Titles"
import Paragrafo from "../Paragrafo"
//Hooks
import { useState } from 'react'


type QuestType = {
    quest: string,
    response: string
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
            response: "Baixar vídeos para uso pessoal é geralmente aceitável, mas redistribuir ou usar o conteúdo sem permissão pode violar os termos de uso do Instagram ou leis de direitos autorais."
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
            {quests.map((element, index) => (
                <div key={index}>
                    <H3 text={element.quest} p1={'p' + index} onClickId={handlerClickId} />
                    <Paragrafo p1={'p' + index} clickId={clickId}>{element.response}</Paragrafo>
                </div>
            ))}
        </>

    )
}
