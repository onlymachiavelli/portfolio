import * as React from 'react'
import Card from './TechCards'
import {Tailwind, Express,React as ReactJS} from './svg'
const Technologies = () =>{

    const [skills, setSkills] = React.useState([
        {
            name : "Tailwind CSS" , 
            svg : <Tailwind Width="30" Height="30"/>
        },
        {
            name : "" , 
            svg : <Express Width="100" Height="30"/>
        },
        {
            name : "react" , 
            svg : <ReactJS Width="30" Height="30"/>
        },
        {
            name : "react" , 
            svg : <ReactJS Width="30" Height="30"/>
        },
    ])
    return (
        <div className='w-full h-auto bg-dark pb-10'>
            <p className='text-red font-bold text-xl block m-auto w-full text-center pb-10'>
                --SKILLED IN
            </p>

            <p className='text-red font-bold text-xl pt-5 tablet:pt-0 pl-10'>
                --Languages
            </p>

            <div className='grid items-center justify-center w-full px-20 pt-10 h-auto grid-cols-3  gap-4'>
            {

                skills.map((skill, index) => {
                    return <Card  Title={skill.name} SVG={skill.svg} />
                })
            }
            </div>
        </div>
    )
}

export default Technologies