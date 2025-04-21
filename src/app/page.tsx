//COMPONENTS:
import ContainerDownload from "./Components/Download";

interface searchParamsType{
  searchParams:{
    error: string,
    url : string
  }
}

export default function page({searchParams} : searchParamsType) {
  const {error} = searchParams;
  return (
    <>
      <ContainerDownload itemDownload="videos" error={error}/>
    </>
  );
}

