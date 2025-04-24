'use client'

import { usePathname, useSearchParams } from 'next/navigation'

//COMPONENTS:
import ContainerDownload from "../Download";

export default function Pagination() {
    
    const pathname = usePathname();

    const error = useSearchParams().get("error");
    
    function getNamePage(){   
        let path = pathname.replace("/","");
        if(path === "carrosseis") path = "carroséis"; 
        return path;
    }

    return (
        <>
            <ContainerDownload itemDownload={pathname == "/" ? "vídeos" :  getNamePage()} error={error} />
        </>
    );
}
