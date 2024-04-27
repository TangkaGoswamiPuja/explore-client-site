import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Path/Path.jsx'
import Auth from './AuthFile/Auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Auth>   
     <RouterProvider router={router} ></RouterProvider>

  
</Auth>
  </React.StrictMode>,
)
