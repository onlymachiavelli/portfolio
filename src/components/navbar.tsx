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
                        

                        <a href='#' >
                        <Logo Width={"150"}/></a>
                    </motion.div>
                </Link>
            </nav>
            

            <nav className={`${styles.nav} m-1.5 ml-10 pb-5 overflow-hidden `}>
                <Link href={""}><a href="" className={`font-semiBold ${styles.current_page}`}>HOME</a></Link>
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