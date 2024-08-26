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
import Update from "../Pages/Update";

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
            
               
              
            {
             path:'/all',
             element: <AllSpot></AllSpot>,
             loader: ()=>fetch('https://server-site-zeta-ten.vercel.app/travel')
                
            },
            {
                path: '/details/:_id',
                element: <Private> <Viewdetails></Viewdetails></Private>,
                loader: ()=>fetch('https://server-site-zeta-ten.vercel.app/travel')
            },
            {
                path:'/add',
                element: <Private><AddSpot></AddSpot> </Private>
                   
               },
               {
                path:'/mylist',
                element: <Private><Mylist></Mylist></Private>,
                loader:()=>fetch('https://server-site-zeta-ten.vercel.app/travel')

                   
               },
               {
                path: '/updatelist/:id',
                 element : <Private><Update></Update></Private>,
            loader: ({params})=>fetch(`https://server-site-zeta-ten.vercel.app/travel/${params.id}`)
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