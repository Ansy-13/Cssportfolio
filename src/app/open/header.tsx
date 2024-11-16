import Image from "next/image"
import Link from "next/link"
import header from "@/app/style/header.module.css"
import Icon from "./icons/logo"
import { Menu } from "lucide-react"
function Header(){
    return(
        <main className={header.main}>
            <section>
                <div className={header.icon}>
                   <Icon />
                </div>
            </section>
            <section className={header.link}>
                <Link href="/"className={header.link}>Home</Link>
                <Link href="/about"className={header.link}>About</Link>
                <Link href="/contact"className={header.link}>Contact</Link>
                </section>
            <Menu className={header.icon1}/>
            
        </main>
    )
}

export default Header