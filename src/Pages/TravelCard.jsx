import React from 'react';
import { Link } from 'react-router-dom';

const TravelCard = ({travel}) => {
    const{_id,image, 
        tourists_spot_name, 
        average_cost, 
        total_visitors_per_year, travel_time , 
        seasonality} = travel;
    return (
        <div className='mt-7 mr-7 ml-7 '>
            <div className="card card-side bg-base-100 shadow-xl p-5">
  <figure ><img className='w-60' src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl">{tourists_spot_name}</h2>
    <p className='text-2xl'><span className='font-bold'> Total Visitors Per Year:</span>{ total_visitors_per_year}</p>
    <p className='text-2xl'><span className='font-bold'>Average Cost:</span>{average_cost}</p>
     <p className='text-2xl'><span className='font-bold'>Travel Time:</span>{travel_time}</p>
     <p className='text-2xl'><span className='font-bold'>Seasonality:</span>{seasonality}</p>
    <div className="card-actions justify-end">
     <Link to={`/details/${_id}`}> <button className="btn btn-secondary">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default TravelCard;