import * as React from 'react';
import Card from './Card';
import { Pen, Brackets, Inf } from './svg';

const Expert = () => {
    return (
        <div className='w-full h-auto tablet:h-screen bg-dark tablet:p-20'>
            <p className='text-red font-bold text-xl block m-auto w-full text-center '>
                --EXPER INT
            </p>
            <p className='text-white text-sm m-auto w-auto text-center py-10'>I&apos;VE BEEN TRYING NEW THINGS IN MY LIFE, AND I&apos;M USED TO LEARN AND TRY NEW AWESOME THINGS, SO I CAN DEVELOP MY PERSONALITY AND ESCAPE THE MATRIX</p>


            <div className='w-full h-auto tablet:flex  tablet:space-x-8  items-center justify-center'>

                <Card Logo={<Pen Width="50" />} Color="[#292929]" >
                    <p className='text-white font-bold py-2 text-center pb-4'>UI-UX DESIGN</p>
                    <p className='text-white w-full block px-2 '>
                        I&apos;VE BEEN PROTOTYPING 
                        AND DESIGNING WEBSITES AND LOGOS 
                        AND MAKING AWESOME VIDEO EDITS
                        6 YEARS PLUS.
                    </p>
                </Card>

                <Card Logo={<Brackets Width="50" />} Color="red" Margin={true}>
                    <p className='text-white font-bold py-2 text-center pb-4'>WEB DEVELOPMENT</p>
                    <p className='text-white w-full block px-2 '>
                        I&apos;VE BEEN CREATING WEBSITES SINCE 
                        2016 USING HTML CSS JS PHP, 
                        NOW I&apos;M FULL STACK, FRONT, BACKEND
                        USING MULTIPLE FRAMEWORKS AND
                        LIBRARIES SUCH AS EXPRESS, GIN, DJANGO
                        REACT...
                    </p>
                </Card>

                <Card Logo={<Inf Width="50" />} Color="[#292929]">
                    <p className='text-white font-bold py-2 text-center pb-4'>DevOps</p>
                    <p className='text-white w-full block px-2 uppercase '>
                        I&apos;m currently exploring the world of DevOps, merging software development and IT operations for efficient software delivery.
                    </p>
                </Card>
            </div>
        </div>
    );
}

export default Expert;
