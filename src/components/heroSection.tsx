import * as React from 'react'
import {Doggo} from './svg'
import { AnimatePresence , motion } from 'framer-motion'
const HeroSection = () =>{

    return (
        <section className='w-full h-5/6  flex align-center tablet:justify-center tablet:items-center flex-col-reverse tablet:flex-row'>


            <aside className='tablet:w-1/2 w-full pl-20 tablet:pl-20 '>

              <div className='block  tablet:pl-20'>
                <p className='text-red font-bold text-xl '>
                        --HELLO THERE
                    </p>
                    <p className='text-red font-bold text-4xl py-10'>IM ALAA BARKA</p>
                    <p className=' text-white font-bold w-full'>
                        My name is <b className='text-red inline font-bold'>Alaa Barka</b>, CS Student @ ESSTHS. I am a Full-Stack Web Developer. Scroll down to learn more about me.
                    </p>    
              </div>
            </aside>
            <aside className='tablet:w-1/2 text-center w-full'>
                

            <AnimatePresence >
                <motion.div
                    className='flex items-center justify-center'
                    
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