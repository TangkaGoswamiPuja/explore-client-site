import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tourists = () => {
    const [tour, setTour] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/tour")
          .then(res => res.json())
          .then(data => {
            setTour(data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    return (
        <div>
   <div className="hero-content text-center ml-10">
    <div className="max-w-md">
      <h1 className="text-4xl font-semibold "> <span className='text-orange-500'>BEST </span>Place For YOU</h1>
      <p className=" text-2xl font-semibold ">We are ready to go with your<br></br> dream place</p>
      
    </div>
  </div>

          

<div className="ml-20 mb-5 grid grid-cols-1 gap:3 lg:grid-cols-3 grid-rows-2 ml-7 ">
           {tour.map(to=>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="h-96 w-69 p-5" src={to.
image} alt="" /></figure>
  <div className="card-body p-2">
    <h2 className="card-title text-2xl"> {to.tourists_spot_name}</h2>
    <p className="text-xl">{to.country_name}</p>
    <p >{to.
short_description}</p>
    <div className="card-actions justify-end">
    <Link to={"/no"}> <button className="btn btn-error btn-outline">View Details</button></Link>
    </div>
  </div>
</div>)}
           </div>
            
        
        </div>
    );
};

export default Tourists;