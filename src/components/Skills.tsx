import * as React from 'react'
import CardV from './verticalCard'

const Skills = () =>{

    const [skills, setSkills] = React.useState([
        "first",
        "Communication Skills", 
        "Team Work",
        "Leadership",
        "Problem Solving",
        "Time Management",
        "Creativity",
        "Adaptability",
        "Flexibility",
        "Self Motivation",
        "Self Discipline",
        "Self Confidence",
        "Self Awareness",
        "Self Control",
        "Self Reliance",
        "Self Esteem",
        "Self Respect",
        "Self Reliance",
        
    ])
    return (
        <div className='w-full m-auto  h-screen'>
            <p className='text-red font-bold text-xl pt-5 tablet:pt-0 pl-10'>
            --My Skills
            </p>

            <div className='w-full h-auto grid grid-cols-2 space-x-2 space-y-2 px-2'>
                
                {
                    skills.map((skill, index) => {
                        
                        return (
                            
                            <CardV key={index}  Hide={skill==skills[0] ? true : false}>
                                <p className='text-white text-sm'>{skill}</p>
                            </CardV>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default Skills