import React, {useState,} from 'react'
import {Rocket, Machiavelli, Logo, Instagram, Twitter, Linkedin, Menu} from './../icons'
import Link from 'next/link'

const Top = () =>{
    const [Res, setRes] = useState("none")
    const Nav = () => (Res === "none" ? setRes("block") :setRes("none"))
    return(
        <main className="slide">
            <header>
                <nav className="navbar">
                    <Link href="/">
                        <div className="logo">
                            <Logo/>
                            <Machiavelli/>
                        </div>
                    </Link>
                    <nav className="nav">
                        <Link href="#">
                            <a className="current_page">Home</a>
                        </Link>
                        <Link href="#">Skills</Link>
                        <Link href="#">Projects</Link>
                        <Link href="#">Works</Link>
                        <Link href="#">GetHelped</Link>
                    </nav>
                    <div className="scl">
                        <Link href="https://instagram.com/onlymachiavelli">
                            <i aria-hidden="true">
                                <Instagram/>
                            </i>
                        </Link>
                        &nbsp;&nbsp;
                        <Link href="https://twitter.com/onlymachiavelli">
                            <i aria-hidden="true">
                                <Twitter/>
                            </i>
                        </Link>
                        &nbsp;&nbsp;
                        <Link href="https://www.linkedin.com/in/alaa-ddin-472a651b9/">
                            <i aria-hidden="true">
                                <Linkedin/>
                            </i>
                        </Link>
                    </div>
                    <div className="btnres">
                        <button onClick={Nav}>
                            <Menu/>
                        </button>
                    </div>
                </nav>
            </header>
        </main>
    )

}
export default Top