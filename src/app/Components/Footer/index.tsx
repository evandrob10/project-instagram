import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-center text-[14px] xl:text-[14px] 2xl:text-[18px] py-2 bg-[#424E60] text-[#ffffff] w-full h-[8vh] sm:h-[10vh] 2xl:h-[8vh]">
        <p>© 2025 <Link href={"/"} className="underline">InstaSaver Hub</Link>. Todos os direitos reservados. </p>
        <p>Desenvolvido por <Link href={"https://www.linkedin.com/in/evandro-barros-251026160/"} target="_blank" className="underline">Evandro Barros</Link>.</p>
    </footer>
  )
}
