import Image from "next/image";
import { redirect } from 'next/navigation'
import { instagramGetUrl } from "instagram-url-direct";

//Components
import ButtonDownload from "../Components/Download/Components/ButtonDownload";

interface PropsType {
  searchParams: {
    url: string
  }
}

export default async function download({ searchParams }: PropsType) {

  try{
    const data = await instagramGetUrl(searchParams.url);

    return (
      <section className="flex flex-col justify-center items-center py-5">
  
        <figure className="overflow-hidden">
          <Image
            alt=""
            width={300}
            height={650}
            src={data.media_details[0].thumbnail && data.media_details[0].type !== "image" ? data.media_details[0].thumbnail : data.media_details[0].url}
            style={{
              objectFit: "cover",
              transform: "scale(1.1)"
            }}
          />
        </figure>
        <ButtonDownload url={data.url_list[0]} />
      </section>
    )
  }catch{
    redirect(`/?error=url_download`);
  }

}
