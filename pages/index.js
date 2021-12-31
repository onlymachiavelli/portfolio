import React, { useState, useEffect } from "react"
import styles from "./../styles/Home.module.css"
import Home from "./../src/useFront/home"
import Head from "next/head"
const App = () => {
  return (
    <div>
      <Head>
        <title>ME</title>
      </Head>
      <Home />
    </div>
  )
}

export default App
