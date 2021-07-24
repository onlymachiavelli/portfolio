import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './../public/FrontEnd/home/navbar'
import Info from './../public/FrontEnd/home/info'
import Link from 'next/link'
import { MainLogo, Instagram, Facebook, Twitter, Linkedin, Github, Gmail, Pinterest, Youtube, } from './../public/packs/icons'
import Stuffs from './../public/packs/colors'
export default function Home() {
  return (
    <main className="home">
      <Head>
        <title>@Machiavelli Building In Progress !  </title>
      </Head>
      <p id="title">My Social Media</p>

      <div className="container" >
        <div className="line">
          <Link href="https://facebook.com">
            <a target="_blank" >
              <div className="link" style={{ backgroundColor: Stuffs.facebook.color }}>
                <div className="y">
                  <Facebook />
                </div>
              </div>
            </a>
          </Link>

          <Link href="https://instagram.com/onlymachiavelli">
            <a target="_blank" >
              <div className="link" style={{ backgroundColor: Stuffs.instagram.color }}>
                <div className="y">
                  <Instagram />
                </div>
              </div>
            </a>
          </Link>

          <Link href="https://twitter.com/onlymachiavelli">
            <a target="_blank" >
              <div className="link" style={{ backgroundColor: Stuffs.twitter.color }}>
                <div className="y">
                  <Twitter />
                </div>
              </div>
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/alaa-ddin-472a651b9/">
            <a target="_blank" >
              <div className="link" style={{ backgroundColor: Stuffs.linkedin.color }}>
                <div className="y">
                  <Linkedin />
                </div>
              </div>
            </a>
          </Link>


        </div>

        <br />
        <div className="line">
          <Link href="https://www.youtube.com/channel/UC_Kkwi_uUrVsyC1trHBMOaQ">
            <a target="_blank" >
              <div className="link" style={{ backgroundColor: Stuffs.youtube.color }}>
                <div className="y">
                  <Youtube />
                </div>
              </div>
            </a>
          </Link>

          <Link href="https://www.pinterest.com/onlymachiavelli">
            <a target="_blank" >
              <div className="link" style={{ backgroundColor: Stuffs.pinterest.color }}>
                <div className="y">
                  <Pinterest />
                </div>
              </div>
            </a>
          </Link>

          <Link href="mailto:tmakaveli643@gmail.com">
            <a target="_blank" >
              <div className="link" style={{ backgroundColor: Stuffs.gmail.color }}>
                <div className="y">
                  <Gmail />
                </div>
              </div>
            </a>
          </Link>

          <Link href="https://github.com/onlymachiavelli">
            <a target="_blank" >
              <div className="link" style={{ backgroundColor: Stuffs.github.color }}>
                <div className="y">
                  <Github />
                </div>
              </div>
            </a>
          </Link>


        </div>
      </div>
    </main>
  )
}
