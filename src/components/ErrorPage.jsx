import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center text-center items-center min-h-[100vh] error_page text-white'>
    <div className="error_page_bg"></div>
    <div className="error_content relative z-30">

      <h1 className='text-9xl mt-20 mb-9 '>404</h1>
      <p className='text-3xl mb-4'>Page not found</p>
      <Link to="/">Go to home page</Link>
    </div>
    </div>
  )
}

export default ErrorPage
