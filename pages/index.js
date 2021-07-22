import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './../public/FrontEnd/home/navbar'
export default function Home() {
  return (
    
  <main className="home">
    <div className="first" >
      <div className ="full ops">
        <Navbar/>
      </div>
    </div>
  </main>
  )
}
