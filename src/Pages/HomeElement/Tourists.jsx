import { Link, useLoaderData } from "react-router-dom";

const Tourists = () => {
  
const tour = useLoaderData();
// const {_id}=tour;
// console.log(_id)
    return (
        <div>
   <div className="hero-content text-center ml-10">
    <div className="max-w-md">
      <h1 className="text-4xl font-semibold "> <span className='text-orange-500'>BEST </span>Place For YOU</h1>
      <p className=" text-2xl font-semibold ">We are ready to go with your<br></br> dream place</p>
      
    </div>
  </div>


            
         <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/WfW8ZCF/pexels-pixabay-531602.jpg" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title"> Bokor National Park</h2>
    <p>Kampot Province, Cambodia</p>
    <div className="card-actions justify-end">
    <Link to={"/details"}> <button className="btn btn-error btn-outline">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Tourists;