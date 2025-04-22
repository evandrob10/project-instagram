export default function Paragrafo({ text, p1, clickId ,children }: { text?: string, p1?: string , clickId?: string, children?: React.ReactNode }) {
    if (text) {
        if(!p1) return <p className="my-3" > {text}</p>
        return  <p className="my-3 hidden" > {text}</p>
    }
    if(children){
        if(!p1) return <p className="my-3" > {children}</p>
        return  <p className={`my-3 ${clickId !== p1 ? "hidden" : "" } `} > {children}</p>
    }
}
