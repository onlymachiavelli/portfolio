import styles from './../../styles/Home.module.css'
import { Logo } from "./svg"
import Link from "next/link"
import {motion} from 'framer-motion'
const Navbar = () =>{
    return (
        <header className='flex overflow-hidden w-full'>
                <Link href={"/"}>
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}>
                        <Logo Width={"150"}/>
                    </motion.div>
                </Link>
            <nav className={`${styles.nav} pl-10 p-1 pb-3 inline `}>
                <Link href={""}className={`hover:font-bold ${styles.current_page}`}>HOME</Link>
                <Link href={""} className={"hover:font-bold"}>SERVICES</Link>
                <Link href={""}className={"hover:font-bold"}>PORTFOLIO</Link>
                <Link href={""}className={"hover:font-bold"}>MY WORKS</Link>
                <Link href={""}className={"hover:font-bold"}>CONTACT</Link>
                <Link href={""}className={"hover:font-bold"}>ABOUT</Link> 
            </nav>
                <div className='flex-1'>
                </div>
                <button className={`text-white text-xs px-1`}>ENG</button>
                <button className='text-white text-xs px-1'>FR</button>
                <button className='text-white text-xs px-1'>DE</button>
                 
            
        </header>
    )
}

export default Navbar