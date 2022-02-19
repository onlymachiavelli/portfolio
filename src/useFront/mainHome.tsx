import React,{} from 'react'
import styles from './../../styles/Home.module.css'
import {MainLogo, Rocket} from './icons'
const HomeContainer = () =>{
    return(
        <main className={styles.homeContainer}>
            <div className={styles.homeTxt}>

            </div>
            <div className={styles.homeSvg}>
                <Rocket Width="350" Height="auto" />
            </div>
        </main>
    )
}

export default HomeContainer