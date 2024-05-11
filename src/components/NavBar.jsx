import React from 'react'
import { NavLink } from 'react-router-dom'
import logoSrc from '../assets/logo.svg'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <header className='p-9 flex justify-between items-center flex-wrap'>
      <Link to='/'>
      <img src={logoSrc}  alt="logo for coffee roasters"/>
      </Link>
      
      <nav>
        <ul className='flex gap-6 content-center items-center '>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about_us">About us</NavLink></li>
            <li><NavLink to="/create_your_own_plan">create your plan</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
