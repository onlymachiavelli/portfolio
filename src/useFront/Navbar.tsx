import React, {useState, useEffect} from "react"
import Link from 'next/link'
import styles from './../../styles/Home.module.css'
import {Machiavelli, Logo, Rust} from './icons'
const Navbar = ({...props}) =>{
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <a> <Logo Width="40" Height="40" />
                        
                        <Machiavelli Width="150" Height="40" /></a>
                </Link>
            </div>

        </nav>
    )
}

export default Navbar