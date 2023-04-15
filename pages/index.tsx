import React, { useState, useEffect } from "react"
import styles from "./../styles/Home.module.css"
import TST from "../src/useFront/home"
import Head from "next/head"
import Navbar from "../src/components/navbar"
import HeroSection from "../src/components/heroSection"
import Me from "../src/components/ME"
import Skills from "../src/components/Skills"
import Expert from "../src/components/Expret"
import Technologies from "../src/components/Technologies"
import Works from "../src/components/works"
import Contact from "../src/components/Contact"
import Per from "../src/components/Guitar"
const App = () => {
  return (
    <main className=" w-full h-auto  bg-dark m-auto pt-5">
      <Head>
        <title>MR Machiavelli</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" / >
          <meta name="description" content="My name is Alaa Barka, CS Student @ ESSTHS. I am a Full-Stack Web Developer. Scroll down to learn more about me." />
      </Head>

      <section className="w-full h-screen">
        <Navbar />
        <HeroSection/>
        <Me/>
        <Skills/>
        <Expert/>
        <Technologies/>
        <Works/>
        <Contact/>
        <Per/>
      </section>
      
    </main>
  )
}

export default App
