import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

const Root = () => {
    return (
        <div>
            <div >
                <Navbar ></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
       
    );
};

export default Root;