import * as React from 'react'

const Card = ({...props}) => {
    return (
        <div className={`tablet:w-2/6 w-full block   h-80 p-5  bg-${props.Color}`}>

            <div  className='m-auto w-full h-auto text-center flex align-center justify-center py-5'>
                {props.Logo}
            </div>
            {
                props.children
            }
        </div>
    )
}

export default Card