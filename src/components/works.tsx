import * as React from 'react'
import Card from './worksCard'
const Works = () =>{

    //fake datas 
    return (
        <section className='w-full h-auto pb-10'>
            <p className='text-red font-bold text-xl block m-auto w-full text-center '>
                --MY WORKS
            </p>

            <Card/>
        </section>
    )
}

export default Works