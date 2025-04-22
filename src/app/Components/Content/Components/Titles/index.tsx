'use client'

export function H1({ text }: { text: string }) {
    return <h1 className="text-2xl mb-3 md:text-3xl xl:text-4xl font-bold">{text}</h1>
}
export function H2({ text }: { text: string }) {
    return <h2 className="text-xl mb-3 md:text-2xl xl:text-4xl font-semibold">{text}</h2>
}
export function H3({ text, p1, onClickId}: { text: string, p1?: string, onClickId: (string: string)=>void})  {
    if(!p1) return <h3 className="text-lg mb-3 md:text-xl xl:text-3xl font-medium">{text}</h3>
    return <h3 onClick={()=>onClickId(p1)} className="text-lg mb-3 border-b-3 border-insta-basic rounded-[.2em] pl-1 py-2 md:text-xl xl:text-3xl font-medium cursor-pointer">{text}</h3>
}