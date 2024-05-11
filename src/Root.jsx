import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const Root = () => {
  return (
    <>
        <NavBar/>
        <main className='p-4 lg:p-0'>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Root
