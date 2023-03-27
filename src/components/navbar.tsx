import styles from './../../styles/Home.module.css'
import { Logo } from "./svg"
import Link from "next/link"
import {motion} from 'framer-motion'
const Navbar = () =>{
    return (
        <header className='flex overflow-hidden w-full'>
            <nav>
                <Link href={"/"}>
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}>
                        <Logo Width={"150"}/>
                    </motion.div>
                </Link>
            </nav>
            

            <nav className={`${styles.nav} m-1.5 ml-10 pb-5 overflow-hidden `}>
                <Link href={""}className={`hover:font-bold ${styles.current_page}`}>HOME</Link>
                <Link href={""} className={"hover:font-bold"}>SERVICES</Link>
                <Link href={""}className={"hover:font-bold"}>PORTFOLIO</Link>
                <Link href={""}className={"hover:font-bold"}>MY WORKS</Link>
                <Link href={""}className={"hover:font-bold"}>CONTACT</Link>
                <Link href={""}className={"hover:font-bold"}>ABOUT</Link>
            </nav>
        </header>
    )
}

export default Navbar