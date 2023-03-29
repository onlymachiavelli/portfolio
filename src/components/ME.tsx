import * as React from 'react'
import mE from './../../public/img/me.jpg'
import Image from 'next/image'
const Me = () =>{

    return(
        <section className='w-full h-screen flex  justify-center items-center'>
            <aside className='w-2/5 h-full flex items-center justify-center '>
                <div className='flex w-auto h-auto m-auto'>
                    
                        
                            <div className='w-80 h-72 bg-red '>
                                <Image src={mE} className={"w-80 h-72 ml-2.5 pr-2.5 pb-2.5 mt-2.5 bor"}  alt="ME"/>
                            </div>


                </div>
            </aside>
            <aside className='w-2/5 h-full flex items-center justify-center flex-col '>
            <p className='text-red font-bold text-xl '>
            --HELLO THERE
            </p>

                    <p className='font-bold text-white '>
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