import React, { useState, useEffect} from 'react'


import styles from './../../styles/Home.module.css'
import Navbar from './Navbar'

const Home = ({...props}) =>{
    return (
        <main className={styles.main_container}>
            <Navbar/>
        </main>
    )
}


export default Home