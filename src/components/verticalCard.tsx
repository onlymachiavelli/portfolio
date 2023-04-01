
import * as React from 'react'

const CardV = ({...props}:any) =>{
    return (
        
        <div className={`bg-[#292929] ${props.Width ? props.Width : "w-auto"} ${props.Hide? "hidden" : ""} h-10 pl-2 overflow-hidden rounded py-2`}>
            {props.children}
        </div>
    )       
}

export default CardV