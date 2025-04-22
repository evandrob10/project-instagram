"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackTop() {
  const [scrollY, setScrollY] = useState(0);
  // Função que vai rolar a página para o topo ao clicar
  const handleClick = () => {
    window.scrollTo(0, 0); // Rola para a posição (0, 0), ou seja, o topo da página
  };


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
    <Image
      width={50}
      height={50}
      src={"./icons/back-top1.svg"}
      alt="Botão para voltar ao topo"
      onClick={handleClick}
      className={`cursor-pointer fixed bottom-20 right-5 z-40 ${(scrollY < 400) ? "hidden" : ""}`}
    />
  )
}
