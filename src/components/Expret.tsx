import * as React from 'react'
import Card from './Card'
import { Pen, Brackets } from './svg'

const Expert = () => {
    return (
        <div className='w-full h-auto tablet:h-screen bg-dark tablet:p-20'>
            <p className='text-red font-bold text-xl block m-auto w-full text-center '>
                --EXPER INT
                </p>
            <p className='text-white text-sm m-auto w-auto text-center py-10'>I’VE BEEN TRYING NEW THINGS IN MY LIFE, AND IM USED TO LEARN AND TRY NEW AWESOME THINGS , SO I CAN 
DEVELOP MY PERSONALITY AND ESPACE THE FUCKING MATRIX</p>


               <div className='w-full h-auto tablet:flex  tablet:space-x-8  items-center justify-center'>

                    <Card Logo={<Pen Width="50" />} Color="[#292929]" >
                        <p className='text-white font-bold py-2 text-center pb-4'>UI-UX DESIGN</p>
                        <p className='text-white w-full block px-2 '>
                            I’VE BEEN PROTOTYPING 
                            AND DESIGNING WEBSITES AND LOGOS 
                            AND MAKING AWESOME VIDEO EDITS
                            6 YEARS PLUS.
                        </p>
                    </Card>

                    <Card Logo={<Brackets Width="50" />} Color="red" Margin={true}>
                        <p className='text-white font-bold py-2 text-center pb-4'>WEB DEVELOPEMENT</p>
                        <p className='text-white w-full block px-2 '>
                            I’VE BEEN CREATING WEBSITES SINCE 
                            2016 USING HTML CSS JS PHP, 
                            NOW IM FULL STACK, FRONT, BACKEND
                            USING MULTIPLE FRAMEWORKS AND
                            LIBRARIES SUCH AS EXPRESS, GIN, DJANGO
                            REACT...
                        </p>
                    </Card>
                    
                    <Card Logo={<Pen Width="50" />} Color="[#292929]">
                        <p className='text-white font-bold py-2 text-center pb-4'>UI-UX DESIGN</p>
                        <p className='text-white w-full block px-2 '>
                            I’VE BEEN PROTOTYPING 
                            AND DESIGNING WEBSITES AND LOGOS 
                            AND MAKING AWESOME VIDEO EDITS
                            6 YEARS PLUS.
                        </p>
                    </Card>
               </div>
        </div>
    )
}


export default Expert