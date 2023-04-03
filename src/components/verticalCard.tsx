
import * as React from 'react'

const CardV = ({...props}:any) =>{
    return (
        
        <div className={`bg-[#292929] duration-500 hover:bg-red ${props.Width ? props.Width : "w-auto"} ${props.Hide? "hidden" : ""} h-10 pl-5 o pb-2 rounded py-2`}>
            {props.children}
        </div>
    )       
}

export default CardV