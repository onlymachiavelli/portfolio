import React, { useState, useEffect} from 'react'


import styles from './../../styles/Home.module.css'
import Navbar from './Navbar'
import HomeContainer from './mainHome'
const Home = ({...props}) =>{
    return (
        <main className={styles.main_container}>
            <Navbar/>
            <HomeContainer/>
        </main>
    )
}


export default Home