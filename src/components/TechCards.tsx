

const Card = ({...props}) =>{
    return (
        <div className="w-full h-auto bg-[#292929] flex items-center space-x-2 p-3 rounded ">
            {props.SVG} <p className="text-white text-sm tablet:font-bold">{props.Title.toUpperCase()}</p>
        </div>
    )
}

export default Card