import React, {useState,useEffect} from 'react'
import {Rocket, Machiavelli, Logo, Instagram, Twitter, Linkedin, Menu, MainLogo} from './../icons'
import Link from 'next/link'

const Top = () =>{
    const [Res, setRes] = useState("block")
    const Nav = () => setRes(Res === "none" ? "block" :"none")

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
                    <nav className="nav" style={{display:Res}}>
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

            <div className="main_info">
                <article>
                    <p id="title_info">
                        {">_"} HI Im Machiavelli
                    </p>
                    <p id="desc_info">
                        Self taught Programmer, Mern stack developer
                        Who’s hoping to go to space 
                        one day, and beat the bustard Jeff & Elon
                    </p>
                    <button className="hirebtn">HireMe !</button>
                </article>
                <aside>
                    <div className="Rocket_container">
                        <Rocket/>
                    </div>
                </aside>
            </div>
        </main>
    )

}
export default Top