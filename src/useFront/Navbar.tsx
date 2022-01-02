import React, {useState, useEffect} from "react"
import Link from 'next/link'
import styles from './../../styles/Home.module.css'
import {Machiavelli, Logo, GoldLinkedin, GoldTwitter, GoldInsta, Menu} from './icons'
export const useNavbar = () =>{
    const [menu, setMenu] = useState("block")
    useEffect(()=>{

    }, [])
    return {menu, setMenu} 
}


const Navbar = ({...props}) =>{
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>
                        <Logo Width="40" Height="40" />
                        <Machiavelli Width="150" Height="40" />
                    </a>
                </Link>
            </div>
            <div className={styles.ResBtn}>
                <button type="button" onClick={()=>{
                    
                }} >
                    <Menu Width="20" Height="20" />
                </button>
            </div>
            <nav className={styles.nav}>
                <Link href="/">
                    <a  className={styles.current_page}>
                        Home
                    </a>
                </Link>
                <Link href="/">skills</Link>
                <Link href="/">Projects</Link>
                <Link href="/">Works</Link>
                <Link href="/">GetHelped</Link>
            </nav>
            <div className={styles.socialMedia}>
                <a href="https://www.instagram.com/onlymachiavelli/"><GoldInsta Width="21" Heght="21" /></a>
                <a href="https://www.twitter.com/onlymachiavelli/"><GoldTwitter Width="21" Height = "21" /></a>
                <a href="https://www.linkedin.com/in/alaa-ddin-472a651b9/"><GoldLinkedin Width="21" Height="21" /></a>
            </div>
            
        </nav>  
    )
}

export default Navbar