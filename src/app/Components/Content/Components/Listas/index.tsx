interface ChildrenType{
    children: React.ReactNode
}

export function Ul({children}: ChildrenType) {
  return (
    <ul className="list-disc pl-5 space-y-2">{children}</ul>
  )
}
export function Ol({children}: ChildrenType) {
    return (
        <ol className="list-decimal pl-5 space-y-2">{children}</ol>
    )
}  
export function Li({children}: ChildrenType) {
    return (
        <li className="text-sm my-3 md:text-base">{children}</li>
    )
} 