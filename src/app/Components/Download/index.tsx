'use client'
import InputUrl from "./Components/InputUrl";
//Hooks
import {useEffect, useState} from 'react';
//Components next js
import {useRouter} from 'next/navigation';

export default function ContainerDownload({itemDownload, error} : {itemDownload: string, error: string}) {
    const [url ,  setUrl] = useState("");
    const [urlValid, setUrlValid] = useState(false);

    const router = useRouter();

    useEffect(()=>setUrl(""),[error]);
    useEffect(()=>{if(urlValid) router.push(`/download?url=${url}`) },[url])
    
    const message = <p className="text-[red] text-[18px] mt-2">URL inserida é inválida!</p>;

    return (
        <section className="w-[50%] h-[50%] text-center">
            <h2 className="font-bold text-4xl mb-10 text-insta-basic">Download <span className="py-1 px-2 rounded-2xl opacity-90 bg-insta-basic text-amber-50 animate-videos">{itemDownload}</span> do instagram</h2>
            <div>
                <InputUrl  setUrl={setUrl} authenticateUrl={setUrlValid} />
            </div>
            {(error === "url_download" && url.length === 0) && message }
            {(!urlValid && url.length > 0) && message}
        </section>
    )
}
