import React, { } from 'react'
import Navbar from './navbar'
const Top = () => {
    const Style = {
        container: {
            width: "100%",

            height: "100vh",
        } as React.CSSProperties
    }
    return (
        <div style={Style.container}>
            <Navbar />
        </div>
    )
}

export default Top