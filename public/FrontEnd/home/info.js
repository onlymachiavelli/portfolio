import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import kermit from './../../img/frog.png'
const Info = () =>{
    let sym = ">"
    return (
        <div className= "info">
            <div className="cntt">
                <div className="image">
                    <Image src={kermit} alt="kermit"  width={"200"} height={"300"}/>
                </div>
                <div className="inf">
                    <p id="title">{sym}_</p>
                </div>
            </div>
        </div>
    )
}
export default Info