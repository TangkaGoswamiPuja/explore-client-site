import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Viewdetails = () => {
    const details = useLoaderData();
 const {_id } = useParams()
    
    const detail = details.find(detail => detail._id === _id)
    const { image, 
        tourists_spot_name, 
        average_cost, 
        total_visitors_per_year, travel_time , 
        seasonality}= detail
    return (
        <div>
           <div className="card card-side bg-base-100 shadow-xl p-5">
  <figure ><img className='w-60' src={image} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{tourists_spot_name}</h2>
    <p className='text-2xl '><span className='font-bold '> Total Visitors Per Year:</span>{ total_visitors_per_year}</p>
    <p className='text-2xl '><span className='font-bold'>Average Cost:</span>{average_cost}</p>
     <p className='text-2xl '><span className='font-bold'>Travel Time</span>{travel_time}</p>
     <p className='text-2xl '><span className='font-bold'>Seasonality</span>{seasonality}</p>
   
  </div>
</div>
        </div>
    );
};

export default Viewdetails;