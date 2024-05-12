import AOS from 'aos';
import 'aos/dist/aos.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Home from './components/Home'
import About from './components/About'
import CreatePlan from './components/CreatePlan'
import ErrorPage from './components/ErrorPage'
import { useEffect } from 'react';
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
  useEffect(() => {
    AOS.init();
  }, [])

  return (
  <RouterProvider router={router}/>
  )
}

export default App
