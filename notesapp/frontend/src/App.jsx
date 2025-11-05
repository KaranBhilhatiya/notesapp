import React from 'react'
import Login from './components/login'
import Signup from './components/signup'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Intro from './components/intro'
import Home from './components/home'


const App = () => {

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element: <Intro/>
    },
    {
      path: '/home',
      element: <Home/>
    },
    {
      path:'/login',
      element: <Login/>
    },
    {
      path:'/signup',
      element: <Signup/>
    }
  ])

  return (
    <div className='flex bg-gray-600 justify-center' >
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App