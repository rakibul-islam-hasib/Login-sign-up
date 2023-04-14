import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Register from './Components/Register'
import Login from './Components/Login'
const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout/>,
    children:[
      {path : '/' , element: <App/> }, 
      {path:'/register' , element:<Register/>}, 
      {path: 'login' , element: <Login/>}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
