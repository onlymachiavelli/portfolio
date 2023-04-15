import * as React from 'react'
import Card from './worksCard'
const Works = () =>{

    //fake datas 
    return (
        <section className='w-full h-auto pb-10'>
            <p className='text-red font-bold text-xl block m-auto w-full text-center pb-10'>
                --MY WORKS
            </p>

           <div className='tablet:flex tablet:items-center tablet:justify-center gap-4  grid-cols-3 flex-wrap'>
           <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
           </div>
        </section>
    )
}

export default Works