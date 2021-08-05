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
                    <Link href="/">Home</Link>
                    <Link href="#">Skills</Link>
                    <Link href="#">Projects</Link>
                    <Link href="#">Works</Link>
                    <Link href="#">GetHelped</Link>
                </nav>
                <div className="scl" >
                    <Link href="https://instagram.com/onlymachiavelli"><GolgInsta /></Link>
                    &nbsp;
                    <Link href="https://twitter.com/onlymachiavelli"><GoldTwitter /></Link>
                    &nbsp;
                    <Link href="https://www.linkedin.com/in/alaa-ddin-472a651b9/"><GoldLinkedin /></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar