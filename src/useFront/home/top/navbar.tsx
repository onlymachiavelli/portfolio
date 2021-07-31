import React, { useState } from 'react'
import { } from './../../icons'
const Navbar = () => {
    const style = {
        nv: {
            width: "100%",
            height: "auto",
            display: "flex",
        } as React.CSSProperties,
        logo: {
            marginLeft: 20,
        } as React.CSSProperties

    }
    return (
        <>
            <nav>
                <div style={style.logo} >

                </div>
            </nav>
        </>
    )
}

export default Navbar