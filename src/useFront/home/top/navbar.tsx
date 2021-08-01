import React, { useState } from 'react'
import { Logo, Machiavelli, GoldLinkedin, GoldTwitter, GolgInsta } from './../../icons'
import Link from 'next/link'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo" >
                    <Logo />
                    <Machiavelli />
                </div>
                <nav className="nav">
                    <Link href="#">Home</Link>
                    <Link href="#">Skills</Link>
                    <Link href="#">Projects</Link>
                    <Link href="#">Works</Link>
                    <Link href="#">GetHelped</Link>
                </nav>
                <div className="scl" >
                    <Link href="#"><GolgInsta /></Link>
                    &nbsp;
                    <Link href="#"><GoldTwitter /></Link>
                    &nbsp;
                    <Link href="#"><GoldLinkedin /></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar