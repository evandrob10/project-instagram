export default function Paragrafo({ text, p1, children }: { text?: string, p1?: string ,children?: React.ReactNode }) {
    if (text) {
        if(!p1) return <p className="my-3" > {text}</p>
        return  <p className="my-3 hidden" > {text}</p>
    }
    if(children){
        if(!p1) return <p className="my-3" > {children}</p>
        return  <p className="my-3 hidden" > {children}</p>
    }
}
