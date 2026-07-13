import React from 'react'
import { createBrowserRouter, RouterProvider     } from 'react-router-dom'
import Login from './Components/Login'
import Browse from './Components/Browse'


const Layout = () => {

  const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <Login/>
    },
    {
        path: "/browse",

        element : <Browse/>
    }
  ])
 
  return (
    <div>
        <RouterProvider  router={appRouter} />
    </div>
  )
}

export default Layout