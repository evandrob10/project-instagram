'use client'
import Nav from "./Components/Nav";
import InputUrl from "./Components/InputUrl";
//Hooks
import { useEffect, useState } from 'react';
//Components next js
import { useRouter } from 'next/navigation';



export default function ContainerDownload({ itemDownload, error }: { itemDownload: string, error: string | null}) {
    const [url, setUrl] = useState("");
    const [urlValid, setUrlValid] = useState(false);
    const [controlError, setControlError] = useState(error === "url_download" && true);

    const router = useRouter();

    useEffect(() => { if (url.length > 0) setControlError(false); }, [url])
    useEffect(() => { if (urlValid) router.push(`/download?page=${itemDownload}&url=${url}`) }, [url])

    const message = <p className="text-[red] text-[18px] mt-3">URL inserida é inválida!</p>;

    return (
        <section className="w-[90%] md:w-[60%] xl:w-[50%] min-h-screen flex flex-col justify-center items-center text-center">
            <h2 className="font-bold text-4xl xl:text-5xl mb-10 text-insta-basic w-full">Download <span className="py-1 px-2 rounded-2xl opacity-90 bg-insta-basic text-amber-50 animate-videos">{itemDownload}</span> do instagram</h2>
            <div className="mb-2 w-full">
                <InputUrl setUrl={setUrl} authenticateUrl={setUrlValid}/>
            </div>
            <Nav />
            {(controlError) && message}
            {(!urlValid && url.length > 26) && message}
        </section>
    )
}
