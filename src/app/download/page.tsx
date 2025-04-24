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
  const page = searchParams.page.replace(" ","-");
  const urlBack = (searchParams.page != "videos") ? "/" + page : "/";
  try {
    const data = await instagramGetUrl(searchParams.url);

    if (data.url_list.length == 1) {
      return (
        <section className="min-h-[92vh] mt-[10vh] sm:mt-[0] flex flex-col justify-center items-center py-5">

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
            <Button url={urlBack} bgCor="bg-gray-500" text="VOLTAR" opacity="opacity-50" />
            <Button url={data.url_list[0]} bgCor="bg-insta-buttons" text="BAIXAR" target="_blank" />
          </div>
        </section>
      )
    } else {
      return (
        <section className="min-h-[92vh] mt-[10vh] flex flex-col justify-around items-center p-5 mb-5">
          <div className="flex flex-wrap items-center justify-center xl:justify-start mb-5">
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
                    }}
                  />
                </figure>
                <div className="my-2 w-full flex justify-center">
                  <Button url={element} bgCor="bg-insta-buttons" text="BAIXAR" target="_blank" />
                </div>
              </div>
            ))}
          </div>
          <Button url={urlBack} bgCor="bg-gray-500" text="VOLTAR" width="w-[50vw] sm:w-[10vw]" />
        </section>
      )
    }
  } catch {
    redirect(`/${urlBack}?error=url_download&url=${searchParams.url}`);
  }
}
