import * as React from 'react'
import { Duck } from './svg'

const Contact = () => {
    return (
        <div className='flex  align-center justify-center'>
            <aside className='text-center w-1/3'>
                <Duck Width="250" Height="auto" />
                <p className='text-red font-bold text-xl text-center'>SEND DUDES</p>
            </aside>

            <aside className=' text-center w-1/2 '>
            <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-2">

    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline bg-[#1C1B1B] text-white text-sm " id="password" type="text" placeholder="FULL NAME"/>
    </div>
    <div className="mb-2">

    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline bg-[#1C1B1B] text-white text-sm " id="password" type="text" placeholder="EMAIL ADDRESS"/>
    </div>
    <div className="mb-2">

    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline bg-[#1C1B1B] text-white text-sm " id="password" type="text" placeholder="PHONE NUMBER"/>
    </div>

    <div className="mb-2">

      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline bg-[#1C1B1B] text-white text-sm" id="password" type="text" placeholder="SUBJECT"/>
    </div>
    <div className="mb-2">

    <textarea className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline bg-[#1C1B1B] text-white text-sm h-64 resize-none" id="password"  placeholder="YOU MESSAGE" ></textarea>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-red hover:bg-[#e56f6f] duration-300 text-white text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        SEND MESSAGE
      </button>
      
    </div>
  </form>
            </aside>
        </div>
    )
}

export default Contact
