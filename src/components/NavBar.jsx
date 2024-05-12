import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoSrc from '../assets/logo.svg'
import { Link } from 'react-router-dom'
const NavBar = () => {
  const [hamburger,setHamburger] = useState(false)
 
  return (
    <header className='py-9 px-4 md:p-9 flex justify-between items-center flex-wrap'>
      <Link to='/'>
      <img src={logoSrc}  alt="logo for coffee roasters"/>
      </Link>
      
      <nav>
        <ul className={`hidden md:flex gap-6 content-center items-center `}>
            <li><NavLink to="/"  className='hover:border-b-2 duration-300 border-[#0E8784] hover:text-[#0E8784]'>Home</NavLink></li>
            <li><NavLink to="/about_us"  className={({isActive})=> isActive ? 'border-[#0E8784] border-b-2 text-[#0E8784] ' : 'hover:border-b-2 duration-300 border-[#0E8784] hover:text-[#0E8784]'}>About us</NavLink></li>
            <li><NavLink to="/create_your_own_plan" className={({isActive})=> isActive ? 'border-[#0E8784] border-b-2 text-[#0E8784] ' : 'hover:border-b-2 duration-300 border-[#0E8784] hover:text-[#0E8784]'}>create your plan</NavLink></li>
        </ul>
      </nav>
      <button className='md:hidden text-2xl cursor-pointer' onClick={()=> setHamburger(true)} ><i className="fa-solid fa-bars"></i></button>
      {/* mobile menu  */}
      { hamburger &&
        <>
        <button onClick={()=>setHamburger(false)} className=' fixed text-gray-400 bg-white text-2xl z-[99] top-[2.5rem] right-[2.5rem]'> <i className="fa-solid fa-x" ></i></button>
        <div className="backdrop w-full h-full bg-[rgba(0,0,0,0.7)]  fixed top-0 left-0 z-20" onClick={()=>setHamburger(false)}></div>
        <nav className={`fixed top-0 right-0 transition-all ease-in-out duration-400 z-[40] ${hamburger ?  'translate-x-[0]' : 'translate-x-[990px]'} h-full p-[1.4rem] bg-white`}>
      
        <ul className={`flex flex-col gap-[2rem]`}>
          <li className='mt-[8rem]'><NavLink to="/"  className='hover:border-b-2 duration-300 border-[#0E8784] hover:text-[#0E8784]' onClick={()=>setHamburger(false)}>Home</NavLink></li>
          <li><NavLink to="/about_us" onClick={()=>setHamburger(false)}  className={({isActive})=> isActive && 'border-[#0E8784] border-b-2 text-[#0E8784]'}>About us</NavLink></li>
          <li><NavLink to="/create_your_own_plan" onClick={()=>setHamburger(false)} className={({isActive})=> isActive && 'border-[#0E8784] border-b-2 text-[#0E8784]'}>create your plan</NavLink></li>
        </ul>
    </nav>
        </>
      }
    </header>
  )
}

export default NavBar
