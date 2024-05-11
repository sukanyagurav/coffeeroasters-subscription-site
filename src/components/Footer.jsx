import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
const Footer = () => {
  return (
    <footer className="bg-[#2C343E] items-center h-[300px] lg:h-auto justify-between flex-col gap-9 lg:flex-row flex p-8 my-[4rem]">
      <img src={logo} alt="coffee logo" />
      <nav>
        <ul className='flex gap-5 text-gray-400 text-lg'>
            <li><NavLink to="/" className='hover:text-white transition-all duration-300'>Home</NavLink></li>
            <li><NavLink to="/about_us" className='hover:text-white transition-all duration-300'>About us</NavLink></li>
            <li><NavLink to="/create_your_own_plan" className='hover:text-white transition-all duration-300'>Create your plan</NavLink></li>
        </ul>
      </nav>
      <nav>
        <ul className='flex gap-5'>
            <li><NavLink><i className="fa-brands fa-facebook text-white text-lg"></i></NavLink></li>
            <li><NavLink><i className="fa-brands fa-twitter text-white text-lg"></i></NavLink></li>
            <li><NavLink><i className="fa-brands fa-instagram text-white text-lg" ></i></NavLink></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
