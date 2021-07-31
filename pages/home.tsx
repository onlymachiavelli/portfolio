import React, { useRef } from 'react'
import Top from './../src/useFront/home/top/top'

const Home = () => {

    const Style = {
        root: {
            width: "100%",
            height: "auto",
            backgroundColor: "#2D2D2D",
        } as React.CSSProperties
    }
    return (
        <main style={Style.root}>
            <Top />
        </main>
    )
}

export default Home