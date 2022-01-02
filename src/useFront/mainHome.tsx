import React,{} from 'react'
import styles from './../../styles/Home.module.css'
import {MainLogo} from './icons'
const HomeContainer = () =>{
    return(
        <main className={styles.homeContainer}>
            <div className={styles.homeTxt}>

            </div>
            <div className={styles.homeSvg}>
                <MainLogo/>
            </div>
        </main>
    )
}

export default HomeContainer