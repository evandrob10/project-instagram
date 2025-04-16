import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-center py-2 bg-[#424E60] text-[#ffffff] w-full">
        <p>© 2025 <Link href={"/"} className="underline">InstaSaver Hub</Link>. Todos os direitos reservados. </p>
        <p>Desenvolvido por <Link href={"https://www.linkedin.com/in/evandro-barros-251026160/"} target="_blank" className="underline">Evandro Barros</Link>.</p>
    </footer>
  )
}
