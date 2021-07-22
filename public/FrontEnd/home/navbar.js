import React, {useState} from 'react'
import Link from 'next/link'
import {Menu} from './../../packs/icons'
const Navbar = () =>{
    const [Nav, setNav] = useState("block");

    return (
        <nav className="navbar">
            <Link href="/">
                <p className="logo">@MACHIAVELLI</p>
            </Link>

            <nav className="nav" style={{display:Nav}}>
                <div className="cnt">
                    <Link href="#">Home</Link>
                    <Link href="#">Skills</Link>
                    <Link href="#">Projects</Link>
                    <Link href="#">Works</Link>
                    <Link href="#">GetHelp </Link>
                </div>
            </nav>

           <button className="resbtn" onClick={() => {
               if (Nav == "block") setNav("none")
               else setNav("block")
           }}>
               <Menu/>
            </button> 
        </nav>
    )
}

export default Navbar