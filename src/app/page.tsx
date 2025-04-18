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
    <main className="flex flex-col justify-center items-center w-full">
      <ContainerDownload itemDownload="videos" error={error}/>
    </main>
  );
}

