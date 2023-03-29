import * as React from 'react'
import {Doggo} from './svg'
import { AnimatePresence , motion } from 'framer-motion'
const HeroSection = () =>{

    return (
        <section className='w-full h-5/6  tablet:flex align-center justify-center items-center'>


            <aside className='w-8/12 pl-20 '>

                <p className='text-red font-bold text-xl '>
                    --HELLO THERE
                </p>
                <p className='text-red font-bold text-4xl py-10'>IM ALAA BARKA</p>
                <p className='w-1/2 text-white font-bold'>
                    My name is <b className='text-red inline font-bold'>Alaa Barka</b>, CS Student @ ESSTHS. I am a Full-Stack Web Developer. Scroll down to learn more about me.
                </p>
            </aside>
            <aside className='w-3/12'>
                

            <AnimatePresence >
                <motion.div
                    
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                <Doggo
                    Width="250"
                    Height="250"
                />  
                </motion.div>
            </AnimatePresence>
            </aside>

            <div></div>
        </section>
    )
}

export default HeroSection