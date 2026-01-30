import React from 'react'

const Card = ({image,title, description, tech=[]}) => {
  return (
    <div className="card group font-roboto bg-gray-300/10 flex flex-col items-center justify-start w-fit h-fit shadow-md rounded-xl shadow-gray-500 lg:w-fit lg:h-60 lg:relative lg:overflow-hidden ">
    
              <div className="image w-80 lg:w-100 lg:h-full flex justify-center">
              <img src={image} className="h-50 w-full mb-3 opacity-75 lg:rounded-xl lg:h-full lg:opacity-50 lg:group-hover:opacity-100 lg:transition-opacity duration-300 ease-in-out"></img>
              </div>
    
            <div className="lg:absolute lg:rounded-xl lg:opacity-0 lg:bottom-0 lg:w-100 lg:bg-black/40 lg:backdrop-blur-md lg:translate-y-full lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:transition-all lg:duration-300 ">
                <div className="title text-sm lg:text-base w-80 lg:w-full px-4 lg:px-4 lg:pt-4 lg:pb-2 lg:border-b lg:border-gray-600/20 lg:shadow-sm lg:shadow-gray-600/20 ">
                <span>{title}</span>
                </div>
    
                <div className="description text-white/50 text-sm lg:text-sm w-80 lg:w-full px-4 py-2">
                <span>{description}</span>  
                </div>
                <div className="used flex flex-wrap justify-start gap-2 md:flex md:flex-wrap lg:flex lg:flex-nowrap text-xs px-2 pb-4 w-70 font-bitcount ">
                  {tech.map((item, index) =>(
                    <span key = {index} className='w-fit h-fit shadow-sm bg-black/50 py-2 rounded-lg px-2 cursor-pointer lg:hover:bg-black/70 lg:opacity-40 lg:hover:opacity-100 lg:transition-colors lg:duration-300'>
                  {item}
                  </span>
                  ))}
                </div>
            </div>
    </div>
  )
}
export default Card;