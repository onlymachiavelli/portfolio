import * as React from 'react'
import mE from './../../public/img/me.jpg'
import Image from 'next/image'
import Link from 'next/link'
import {Github, Linkedin, Instagram, Twitter} from './svg'
const Me = () =>{

    return(
        <section className='w-full h-screen flex  justify-center items-center'>
            <aside className='w-2/5 h-full flex items-center justify-center '>
                <div className='flex flex-col w-auto h-auto m-auto'>
                    
                        
                            <div className='w-80 h-72 bg-red ro '>
                                <Image src={mE} className={"w-80 h-72 ml-2.5 pr-2.5 pb-2.5 mt-2.5 bor rotate-12 bg-red"}  alt="ME"/>
                            </div>

                            <Link href={""} className="text-white bg-red mt-10 w-64 text-center py-3 m-auto">REQUEST A SERVICE</Link>

                            <div className='flex  space-x-1 items-center justify-center pt-7'>
                                <a href="https://github.com/onlymachiavelli" target="_blank"><Github Width="20" Height="20" /></a>
                                <a href="https://twitter.com/onlymachiavelli" target="_blank"><Twitter Width="20" Height="20" /></a>
                                <a href="https://www.instagram.com/onlymachiavelli/" target="_blank"><Instagram Width="20" Height="20" /></a>
                                <a href="https://www.linkedin.com/in/alaa-barka-472a651b9/" target="_blank"><Linkedin Width="20" Height="20" /></a>
                            </div>
                            

                </div>
            </aside>
            <aside className='w-2/5 h-full flex  justify-center flex-col '>
            <p className='text-red font-bold text-xl'>
            --ABOUT ME
            </p>

                    <p className='font-bold text-white pt-10 '>
                    Hello there! My name is Alaa Barka, and I am a Full Stack Web Developer and Cross Platform Developer. 
                    <br/><br/>
                    I am interested in exploring the fields of Blockchain, Cybersecurity, AI, and Machine Learning.
                    <br/><br/>
                    With my experience and passion for technology, I am committed to staying up-to-date with the latest developments and applying my skills to create innovative solutions.
                </p>
            </aside>
        </section>
    )
}

export default Me