import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-center py-3 mt-2 relative w-full">
      <Link href={"/"}>
        <h1 className="bg-insta-basic text-center text-[#fff] text-2xl xl:text-3xl font-bold p-1"><span className="bg-[#FFFF] text-insta-basic p-1">INSTASAVER</span> HUB</h1>
      </Link>
    </header>
  )
}
