import * as React from 'react'
import Card from './TechCards'
import {Mongodb, Express,React as ReactJS, NodeJS, Postgres, Gin, TailwindCSS, HTML , CSS, JS, PHP, GOLANG, C, CPP, Python, TS, SQL} from './svg'
const Technologies = () =>{

    const [skills, setSkills] = React.useState([
        {
            name : "mongodb" , 
            svg : <Mongodb Width="30" Height="30"/>
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
            name : "nodejs" , 
            svg : <NodeJS Width="30" Height="30"/>
        },
        {
            name : "postgres" , 
            svg : <Postgres Width="30" Height="30"/>
        },
        {
            name : "gogin" , 
            svg : <Gin Width="30" Height="30"/>
        },
        {
            name : "tailwind" , 
            svg : <TailwindCSS Width="30" Height="30"/>
        },
    ])  

    const [lang, setLang] = React.useState([
        {
            name : "html" , 
            svg : <HTML Width="30" Height="30"/>
        },
        {
            name : "css" , 
            svg : <CSS Width="30" Height="30"/>
        },
        {
            name : "javascript" , 
            svg : <JS Width="30" Height="30"/>
        },
        {
            name : "php" , 
            svg : <PHP Width="30" Height="30"/>
        },
        {
            name : "golang" , 
            svg : <GOLANG Width="30" Height="30"/>
        },
        {
            name : "c language" , 
            svg : <C Width="30" Height="30"/>
        },
        {
            name : "c plus plus" , 
            svg : <CPP Width="30" Height="30"/>
        },
        {
            name : "python" , 
            svg : <Python Width="30" Height="30"/>
        },
        {
            name : "typescript" , 
            svg : <TS Width="30" Height="30"/>
        },
        {
            name : "sql" , 
            svg : <SQL Width="30" Height="30"/>
        }
    ])
    return (
        <div className='w-full h-auto bg-dark pb-10 mt-10'>
            <p className='text-red font-bold text-xl block m-auto w-full text-center pb-10'>
                --SKILLED IN
            </p>

            <p className='text-red font-bold text-xl pt-5 tablet:pt-0 pl-10'>
                --LANGUAGES
            </p>

            <div className='grid items-center justify-center w-full tablet:px-20 px-2 pt-10 h-auto grid-cols-3  gap-4 pb-10'>
            {

                lang.map((skill, index) => {
                    return <Card  Title={skill.name} SVG={skill.svg} key={index} />
                })
            }
            </div>
            <p className='text-red font-bold text-xl pt-5 tablet:pt-0 pl-10'>
                --TECHNOLOGIES
            </p>
            <div className='grid items-center justify-center w-full tablet:px-20 px-2 pt-10 h-auto grid-cols-3  gap-4 pb-10'>
            {

                skills.map((skill, index) => {
                    return <Card  Title={skill.name} SVG={skill.svg} key={index} />
                })
            }
            </div>
        </div>
    )
}

export default Technologies