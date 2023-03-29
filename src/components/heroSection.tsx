import * as React from 'react'
import {Doggo, Bottom} from './svg'
import { AnimatePresence , motion } from 'framer-motion'
import Link from 'next/link'
const Random = (min:any, max:any) : any =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const HeroSection = () =>{
    const [quotes, setQuotes] : any = React.useState(["Hello Universe not only world !", "Fuck Feminism", "FREE TOP G", "Tourne dans le vide"])

    return (
        <section className='w-full tablet:h-5/6 h-auto flex align-center tablet:justify-center tablet:items-center flex-col-reverse tablet:flex-row'>


            <aside className='tablet:w-1/2 w-full pl-20 tablet:pl-20 '>

              <div className='block  tablet:pl-20'>
                <p className='text-red font-bold text-xl '>
                        --HELLO THERE
                    </p>
                    <p className='text-red font-bold text-4xl py-10'>IM ALAA BARKA</p>
                    <p className=' text-white font-bold w-full'>
                        My name is <b className='text-red inline font-bold'>Alaa Barka</b>, CS Student @ ESSTHS. I am a Full-Stack Web Developer. Scroll down to learn more about me.
                    </p>   

                    <div className='pt-10 space-x-0 tablet:space-x-2 grid gird-cols tablet:block'>

                        <Link href="" className='bg-red text-white px-14 w-1/2 py-3 mt-10'>Download my CV</Link>
                        <Link href="" className='bg-auto text-white px-14 w-1/2 py-3 mt-10 border duration-1000 hover:bg-[#ffffff70]'>Explore more</Link>
                    </div> 
              </div>
            </aside>
            <aside className='tablet:w-1/2 text-center w-full'>
                

            <AnimatePresence >
                <motion.div
                    className='flex flex-col items-center justify-center'
                    
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                <Doggo
                    Width="250"
                    Height="250"
                />  

                <p className='text-white font-bold w-1/2'>
                I know a man who gave up smoking, drinking, s3x, and rich food. He was healthy right up to the day he killed himself.
                </p>
                </motion.div>
            </AnimatePresence>
            </aside>

            <div>

                
            </div>
            
        </section>
    )
}

export default HeroSection