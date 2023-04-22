import * as React from 'react'
import { Logo } from './svg'
import Link from 'next/link'

const Footer = () =>{
    return (
        <footer className='w-full h-auto bg-[#030303] py-4'>
            <div className='w-full h-auto flex items-center justify-center'>
                <Logo Width="150" />
            </div>
            <div className='flex flex-col pl-10 pt-10'>
            <Link href={"mailto:tmakaveli643@gmail.com"} className='text-sm text-red'>tmakaveli643@gmail.com</Link>
            <Link href={""} className='text-sm text-red'>+216 00 000 000</Link>
            </div>
            <div>
                <p className='text-sm text-white text-center pt-5'>ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    )
}

export default Footer