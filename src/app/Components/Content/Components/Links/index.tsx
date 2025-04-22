import Link from "next/link";

export default function Links({text, url, target} : {text: string, url: string, target?: string} ) {
  return (
    <Link href={url} className="text-blue-600 hover:underline" target={target}>{text}</Link >
  )
}
