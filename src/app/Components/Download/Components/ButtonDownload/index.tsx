import Link from "next/link";

export default function ButtonDownload({url} : {url : string} ) {
  return (
    <Link href={url} target="_blank">
          <button type="button" className="m-3 font-bold bg-insta-buttons py-2 px-3 rounded-[.2em] text-amber-50 cursor-pointer">BAIXAR</button>
    </Link>
  )
}
