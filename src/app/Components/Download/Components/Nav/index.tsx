'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next/link";

type NavTypes = {
    url: string, 
    text: string
}[]

export default function Nav() {

    const pathname = usePathname()

    const itemsNav : NavTypes = [
        {
            url: "/",
            text: "VIDEOS"
        },
        {
            url: "/imagens",
            text: "IMAGENS"
        },
        {
            url: "/reals",
            text: "REALS"
        },
        {
            url: "/multi-videos",
            text: "MULTI VIDEOS"
        },
        {
            url: "/multi-imagens",
            text: "MULTI IMAGENS"
        }
    ]

    return (
        <nav className='w-full'>
            <ul className="flex flex-wrap justify-evenly">
                {itemsNav.map(({url,text}, index) => (
                    <Link key={index} href={url}>
                        <li className={`${(pathname === url) ? "border-b-3 opacity-100 font-bold" : "opacity-70"} m-1 sm:m-0 text-insta-basic transform duration-100 hover:border-b-3 hover:scale-110`}>{text}</li>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}
