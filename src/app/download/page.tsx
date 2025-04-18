import Image from "next/image";
import { redirect } from 'next/navigation'
import { instagramGetUrl } from "instagram-url-direct";

//Components
import Button from "../Components/Download/Components/Button";

interface PropsType {
  searchParams: {
    page: string
    url: string
  }
}

export default async function download({ searchParams }: PropsType) {

  try {
    const data = await instagramGetUrl(searchParams.url);

    if (data.url_list.length == 1) {
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
                transform: "scale(1.1)",
              }}
            />
          </figure>
          <div className="mt-5 w-3xs flex justify-between">
            <Button url={(searchParams.page != "videos") ? "/" + searchParams.page : "/"} bgCor="bg-gray-500" text="VOLTAR" opacity="opacity-50" />
            <Button url={data.url_list[0]} bgCor="bg-insta-buttons" text="BAIXAR" target="_blank" />
          </div>
        </section>
      )
    } else {
      return (
        <section className="flex flex-col justify-center items-center py-5 mb-5">
          <div className="flex flex-wrap justify-center items-center mb-5">
            {data.url_list.map((element, index) => (
              <div key={index} className="m-1">
                <figure className="overflow-hidden">
                  <Image
                    alt=""
                    width={300}
                    height={650}
                    src={data.media_details[index].thumbnail && data.media_details[index].type !== "image" ? data.media_details[index].thumbnail : data.media_details[index].url}
                    style={{
                      objectFit: "cover",
                      transform: "scale(1.1)",
                    }}
                  />
                </figure>
                <div className="my-2 w-3xs flex justify-center">
                  <Button url={element} bgCor="bg-insta-buttons" text="BAIXAR" target="_blank" />
                </div>
              </div>
            ))}
          </div>
          <Button url={(searchParams.page != "videos") ? "/" + searchParams.page : "/"} bgCor="bg-gray-500" text="VOLTAR" width="w-[50vw] sm:w-[10vw]" />
        </section>
      )
    }
  } catch {
    redirect(`/?error=url_download`);
  }

}
