interface DivType{
    text: string,
    DivClassExtra?: string
}

export default function Div({text, DivClassExtra} : DivType) {
  return <div className={`max-w-5xl mx-auto px-4 ${DivClassExtra}`} >{text}</div>
}
