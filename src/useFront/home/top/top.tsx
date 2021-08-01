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
            <div className="inf">
                <div className="desc">
                    <p id="tit">{'>'}_ Hi Im Machiavelli</p>
                    <p id="i">
                        Self taught Programmer,
                        Who’s hoping to go to space
                        one day
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Top