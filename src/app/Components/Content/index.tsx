import { ReactNode } from "react";

export default function Content({children} : {children : ReactNode}) {
  return (
    <article className="container mx-auto px-4 min-h-[80vh] text-base md:text-lg xl:text-[20px] leading-relaxed">
        {children}
    </article>
  )
}


