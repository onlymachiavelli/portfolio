import Link from 'next/link'
import * as React from 'react'
import { Logo } from './svg'

const Card = ({...props}) => {
    return (
        <div className='bg-[#1C1B1B] h-80 tablet:w-1/4 w-3/4 m-auto tablet:m-0 mt-5 border rounded-sm shadow-red shadow-sm duration-100 hover:shadow-xl overflow-hidden border-red' title={props.Title}>
            <div className="w-full flex items-center justify-center h-4/5 bg-cover bg-center" style={{ 
                backgroundImage:props.Img
                }}>
                

                <div className='w-full h-full flex items-center justify-center bg-[#00000080]'>
                
                
                <p className='bg-[#bd2f2fc1] px-5 py-3 rounded shadow-xl'>{
                    props.Logo
                }
                </p>
                </div>
            </div> 
            <div className='w-full flex justify-between px-4 h-auto pt-2.5'>
                <Link href={

                    props.pageURL
                } target="_blank" className='bg-red w-1/2 text-center py-3 text-white text-sm duration-200 hover:bg-[#e56f6f]'>VISIT</Link>
                <Link href={

                    props.Link
                }target="_blank" className='text-white  text-sm w-1/2 text-center'><i className=" text-white  text-4xl pt-1 fa fa-github" aria-hidden="true"></i>

                </Link>
            </div>
        </div>
    )
}

export default Card;
