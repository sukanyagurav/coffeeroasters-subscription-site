import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({headingText,description,buttonText='',classes=''}) => {
  return (
    <div className={`banner ${classes} `}>
    <div className="banner__content flex flex-col justify-center items-center text-center gap-4 md:text-left md:items-start md:max-w[600px] p-[2rem] md:p-[4rem] ">

      <h1 className='text-5xl md:text-6xl  mb-3 mt-[100px]'>{headingText}</h1>
      <p className='text-gray-300'>{description}</p>
      {buttonText && <Link to="/create_your_own_plan">
        <button className='bg-[#0E8784] p-4 rounded-lg mt-3 w-[190px] cursor-pointer font-bold transition-all duration-700 hover:bg-transparent border-[1px] border-[#0E8784]'>{buttonText}</button>
      </Link> }
    </div>
    </div>
  )
}

export default Banner
