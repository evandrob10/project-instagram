import Link from "next/link";

export default function Header() {
  return (
    <header className={`flex items-center h-[8vh] justify-center landscape:static pt-5 w-full`}>
      <Link href={"/"}>
        <h1 className="bg-insta-basic text-center text-[#fff] text-[20pt] xl:text-2xl 2xl:text-3xl font-bold p-1"><span className="bg-[#FFFF] text-insta-basic p-1">INSTASAVER</span> HUB</h1>
      </Link>
    </header>
  )
}
