import Link from "next/link";

interface ButtonType{
  url: string
  text: string
  bgCor: string
  opacity?:string
  target?:string
  width?: string
}

export default function Button({url , text , bgCor, opacity, target = "_parent", width=""} : ButtonType ) {
  return (
    <Link href={url} target={`${target}`}>
          <button type="button" className={`m-3 font-bold ${bgCor} ${opacity} ${width} py-2 px-3 rounded-[.2em] text-amber-50 cursor-pointer transform duration-300 hover:scale-110`}>{text}</button>
    </Link>
  )
}
