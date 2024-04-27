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
                   
               }
        ]
        
    }
  ]);



export default router;