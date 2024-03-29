import * as React from 'react'
import {Doggo, Bottom} from './svg'
import { AnimatePresence , motion } from 'framer-motion'
import Link from 'next/link'
import Meme from './../../public/img/meme.gif'
import Image from 'next/image'

const Random = (min:any, max:any) : any =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const HeroSection = () =>{
    const [quotes, setQuotes] : any = React.useState(["Hello Universe not only world !", "Fuck Feminism", "FREE TOP G", "Tourne dans le vide"])

    return (
        <section className='w-full  tablet:h-5/6 h-auto tablet:overflow-hidden flex align-center tablet:justify-center tablet:items-center flex-col-reverse tablet:flex-row pb-60 tablet:pb-0'>


            <aside className='tablet:w-1/2 w-full pl-4 tablet:pl-20 '>

              <div className='block  tablet:pl-20 pt-10 tablet:pt-0'>
                <p className='text-red font-bold tablet:text-xl text-sm '>
                        --HELLO THERE
                    </p>
                    <p className='text-red font-bold tablet:text-4xl text-2xl py-10'>IM ALAA BARKA</p>
                    <p className=' text-white font-bold w-full text-sm tablet:text-lg'>
                        My name is <b className='text-red inline font-bold'>Alaa Barka</b>, CS Student @ ESSTHS. I am a Full-Stack Web Developer. Scroll down to learn more about me.
                    </p>   

                    <div className='pt-10 space-x-0 tablet:space-x-2 grid gird-cols tablet:block '>

                        <Link href={"/CV.pdf"}  rel="noopener noreferrer" target='_blank' className='bg-red text-white tablet:inline  w-1/2 flex tablet:py-3 tablet:px-14 items-center justify-center py-2  tablet:mt-10 mt-5 text-sm bl'>Download my CV</Link>
                        <Link href="" className='bg-auto text-white tablet:inline tablet:py-3 tablet:px-14  w-1/2 flex items-center justify-center py-2  tablet:mt-10 mt-5 border duration-1000 hover:bg-[#ffffff70] text-sm'>Explore more</Link>
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
                
                <Image src={Meme} alt="meme image" width={"200"} height={"200"} /> 

                <p className='text-white font-bold w-1/2 text-sm tablet:text-lg'>
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