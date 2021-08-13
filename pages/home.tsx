import React, { useRef, useEffect } from 'react'
import Top from './../src/useFront/home/slide'
const Home = () => {

    const Style = {
        root: {
            width: "100%",
            height: "auto",
            backgroundColor: "#2D2D2D",
            overflow: "hidden"
        } as React.CSSProperties
    }
    return (
        <main style={Style.root}>
            <Top />
        </main>
    )
}

export default Home