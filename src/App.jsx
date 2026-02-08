import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import AboutPage from './Pages/About'
import ServicesPage from './Pages/Services'
import IndustriesPage from './Pages/Industries'
import ProductsPage from './Pages/Products'
import ContactPage from './Pages/Contact'
import TermsConditions from './Pages/Terms'
import PrivacyPolicy from './Pages/Privacy'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<AboutPage/>
        },
        {
          path:"/services",
          element:<ServicesPage/>
        },
        {
          path:"/industries",
          element:<IndustriesPage/>
        },
        {
          path:"/products",
          element:<ProductsPage/>
        },
        {
          path:"/contact",
          element:<ContactPage/>
        },
        {
          path:"/privacy-policy",
          element:<PrivacyPolicy/>
        },
        {
          path:"/terms-conditions",
          element:<TermsConditions/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App