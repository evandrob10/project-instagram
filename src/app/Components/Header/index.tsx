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
    <header className={`flex items-center justify-center py-3 mt-2 fixed w-full ${scrollY < 1 ? "" : "hidden"} z-50`}>
      <Link href={"/"}>
        <h1 className="bg-insta-basic text-center text-[#fff] text-2xl xl:text-3xl font-bold p-1"><span className="bg-[#FFFF] text-insta-basic p-1">INSTASAVER</span> HUB</h1>
      </Link>
    </header>
  )
}
