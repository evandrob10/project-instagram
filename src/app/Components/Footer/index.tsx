import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-center text-[14px] xl:text-[18px] py-2 bg-[#424E60] text-[#ffffff] w-full xl:h-[8vh] h-[10vh]">
        <p>© 2025 <Link href={"/"} className="underline">InstaSaver Hub</Link>. Todos os direitos reservados. </p>
        <p>Desenvolvido por <Link href={"https://www.linkedin.com/in/evandro-barros-251026160/"} target="_blank" className="underline">Evandro Barros</Link>.</p>
    </footer>
  )
}
