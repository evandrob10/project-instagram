'use client'

import { usePathname, useSearchParams } from 'next/navigation'

//COMPONENTS:
import ContainerDownload from "../Download";

export default function Pagination() {
    
    const pathname = usePathname();

    const error = useSearchParams().get("error");
    
    function getNamePage(){
        return pathname.replace("/","");
    }

    return (
        <>
            <ContainerDownload itemDownload={pathname == "/" ? "videos" :  getNamePage()} error={error} />
        </>
    );
}
