import Link from 'next/link'
import * as React from 'react'
import { Frog } from './svg'

const Per = () =>{
    return (
        <div className='w-full tablet:h-screen flex items-center justify-center  flex-col-reverse tablet:flex-row pb-10'>
            <aside className='tablet:w-1/2 w-full h-auto  tablet:h-full items-center justify-center flex flex-col pt-10 tablet:pt-0'>
                <p className='text-xl text-red font-bold pb-10 w-2/3'>
                BY THE WAY, FORGOT TO TELL YOU THAT I CAN PLAY GUITAR. 
                AND IM TERRIBLE AT IT
                </p>

                <Link href={""} className='text-sm text-white bg-red py-3 px-16 rounded '>CHECK OUT MORE ...</Link>
            </aside>
            <aside className='tablet:w-1/2 w-full  flex justify-center '>
                <Frog Width="200" />
            </aside>
        </div>
    )
}

export default Per