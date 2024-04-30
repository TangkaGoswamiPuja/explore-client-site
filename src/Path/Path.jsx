import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AllSpot from "../Pages/AllSpot";
import AddSpot from "../Pages/AddSpot";
import Mylist from "../Pages/Mylist";
import Login from "../Log&Reg/Login";
import Register from "../Log&Reg/Register";
import Viewdetails from "../Pages/Viewdetails";
import Tourists from "../Pages/HomeElement/Tourists";
import Private from "../AuthFile/Private";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
               
            },
            
                // {  path:'/best',
                //   element: <Tourists></Tourists>,
                //   loader: ()=>fetch('http://localhost:5000/tour')},
              
            {
             path:'/all',
             element: <AllSpot></AllSpot>,
             loader: ()=>fetch('http://localhost:5000/travel')
                
            },
            {
                path: '/details/:_id',
                element: <Private> <Viewdetails></Viewdetails></Private>,
                loader: ()=>fetch('http://localhost:5000/travel')
            },
            {
                path:'/add',
                element: <Private><AddSpot></AddSpot> </Private>
                   
               },
               {
                path:'/mylist',
                element: <Private><Mylist></Mylist></Private>,
                loader:()=>fetch('http://localhost:5000/user')

                   
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