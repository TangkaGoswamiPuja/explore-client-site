import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AllSpot from "../Pages/AllSpot";
import AddSpot from "../Pages/AddSpot";
import Mylist from "../Pages/Mylist";
import Login from "../Log&Reg/Login";
import Register from "../Log&Reg/Register";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
             path:'/all',
             element: <AllSpot></AllSpot>
                
            },
            {
                path:'/add',
                element:<AddSpot></AddSpot>
                   
               },
               {
                path:'/mylist',
                element:<Mylist></Mylist>
                   
               },
               {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
        
    }
  ]);



export default router;