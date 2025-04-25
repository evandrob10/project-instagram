'use client'
import Link from "next/link";
//hooks
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  // Efeito para capturar a rolagem
  useEffect(() => {
    // Função para atualizar o estado com a posição do scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Adiciona o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpa o evento ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio significa que o efeito será executado uma única vez (ao montar o componente)
  return (
    <header className={`flex items-center h-[8vh] justify-center landscape:static pt-5 w-full`}>
      <Link href={"/"}>
        <h1 className="bg-insta-basic text-center text-[#fff] text-[20pt] xl:text-2xl 2xl:text-3xl font-bold p-1"><span className="bg-[#FFFF] text-insta-basic p-1">INSTASAVER</span> HUB</h1>
      </Link>
    </header>
  )
}
