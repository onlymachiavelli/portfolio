import React, { useState, useEffect } from "react"
import styles from "./../styles/Home.module.css"
import TST from "../src/useFront/home"
import Head from "next/head"
import Navbar from "../src/components/navbar"
const App = () => {
  return (
    <main className="tablet:w-11/12 w-full h-auto overflow-auto bg-dark m-auto pt-5">
      <Head>
        <title>MR Machiavelli</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" / >
      </Head>

      <Navbar/>

      
    </main>
  )
}

export default App
