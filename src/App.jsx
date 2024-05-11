import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Home from './components/Home'
import About from './components/About'
import CreatePlan from './components/CreatePlan'
import ErrorPage from './components/ErrorPage'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/about_us',
        element:<About/>
      },
      {
        path:'/create_your_own_plan',
        element:<CreatePlan/>
      }
    ]
  }
])
function App() {


  return (
  <RouterProvider router={router}/>
  )
}

export default App
