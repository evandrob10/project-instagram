//COMPONENTS:
import ContainerDownload from "../Components/Download";

interface searchParamsType{
  searchParams:{
    error: string
  }
}

export default function page({searchParams} : searchParamsType) {
  const {error} = searchParams;
  return (
    <>
      <ContainerDownload itemDownload="reals" error={error} />
    </>
  );
}

