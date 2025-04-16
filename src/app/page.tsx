//COMPONENTS:
import ContainerDownload from "./Components/Download";

interface searchParamsType{
  searchParams:{
    error: string
  }
}

export default function Home({searchParams} : searchParamsType) {
  const params = searchParams.error;

  return (
    <main className="flex flex-col justify-center items-center w-full">
      <ContainerDownload itemDownload="videos" error={params}/>
    </main>
  );
}
