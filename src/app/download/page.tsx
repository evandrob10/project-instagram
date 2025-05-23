import Image from "next/image";
import { redirect } from 'next/navigation'
import { instagramGetUrl } from "../../utils/instagram-url-direct";

//Components
import Button from "../Components/Download/Components/Button";

type PropsType = Promise<{
    page: string
    url: string
}>

export default async function download({searchParams} : { searchParams : PropsType}) {
  const params = await searchParams;
  const page = params.page.replace(" ","-");
  const urlBack = (params.page != "videos") ? "/" + page : "/";
  try {
    const data = await instagramGetUrl(params.url);

    if (data.url_list.length == 1) {
      return (
        <section className="min-h-[84vh] xl:h-[80vh] 2xl:min-h-[84vh] flex flex-col justify-center items-center">
          <figure className="overflow-hidden flex justify-center items-center h-[80%]">
            <Image
              alt=""
              width={300}
              height={650}
              src={data.media_details[0].thumbnail && data.media_details[0].type !== "image" ? data.media_details[0].thumbnail : data.media_details[0].url}
              className="h-[25rem] sm:h-[20rem] 2xl:h-[32rem]"
              style={{
                objectFit: "contain",
                transform: "scale(1.1)",
              }}
            />
          </figure>
          <div className="mt-2 w-3xs flex justify-evenly h-[20%]">
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
    redirect(`/${urlBack}?error=url_download&url=${params.url}`);
  }
}
