import styles from './../../styles/Home.module.css'
import { Logo } from "./svg"
import Link from "next/link"
const Navbar = () =>{
    return (
        <header className='flex'>
            <nav>
                <Link href={"/"}>
                    <a><Logo Width={"150"}/></a>
                </Link>
            </nav>

            <nav className={`${styles.nav} m-1.5 ml-10 `}>
                <Link href={""}><a href="">HOME</a></Link>
                <Link href={""}><a href="">SERVICES</a></Link>
                <Link href={""}><a href="">PORTFOLIO</a></Link>
                <Link href={""}><a href="">MY WORKS</a></Link>
                <Link href={""}><a href="">CONTACT</a></Link>
                <Link href={""}><a href="">ABOUT</a></Link>
            </nav>
        </header>
    )
}

export default Navbar