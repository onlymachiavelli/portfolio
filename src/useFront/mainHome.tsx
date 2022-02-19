import React,{} from 'react'
import styles from './../../styles/Home.module.css'
import {MainLogo, Rocket} from './icons'
const HomeContainer = () =>{
    return(
        <main className={styles.homeContainer}>
            <div className={styles.homeTxt}>
                <p id={styles.name}>{">"}_HI Im AlaaDdin</p>
                <p id={styles.description}>
                Self taught Programmer, 
                Who’s hoping to go to space 
                one day
                </p>
                <button className={styles.hireBtn}>Hire Me</button>
            </div>
            <div className={styles.homeSvg}>
                <Rocket Width="350" Height="auto" />
            </div>
        </main>
    )
}

export default HomeContainer