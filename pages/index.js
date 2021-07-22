import React, {useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './../public/FrontEnd/home/navbar'
import Info from './../public/FrontEnd/home/info'
export default function Home() {
  useEffect(() =>{
    alert("Website Building In Progress !")
  })
  return (
    
  <main className="home">
    <div className="first" >
      <div className ="full ops">
        <Navbar/>
        <Info/>
      </div>
    </div>
  </main>
  )
}
