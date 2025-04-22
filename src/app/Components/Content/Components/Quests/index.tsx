'use client'
//Components
import { H3 } from "../Titles"
import Paragrafo from "../Paragrafo"
//Hooks
import { useState } from 'react'


type QuestType = {
    quests: {
        quest: string,
        response: string
    }[]
}

export default function Quests({ quests }: QuestType) {
    const [clickId, setClickId] = useState("");

    function handlerClickId(p1 : string){
        setClickId((prevState)=>{
            if(prevState !== p1) return p1
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
