import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import kermit from './../../img/frog.png'
const Info = () =>{
    let sym = ">"
    return (
        <div className= "info" style={{textAlign:"center"}}>
            <div className="cntt">
                <div className="image">
                    <Image src={kermit} alt="kermit"  width={"200"} height={"300"}/>
                </div>
                <div className="inf">
                    <p id="title">{sym}_ Hi ! My name is @MACHIAVELLI</p>
                    <p id="desc">
                    My real name is Alaaddin, I’am self taught programmer and future software engineer, Im intrested in Space, Fly me to the mo... hahah, I play Guitar but I don't Sing lmao , 
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Info