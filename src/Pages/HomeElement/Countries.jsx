import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch("https://server-site-zeta-ten.vercel.app/country")
          .then(res => res.json())
          .then(data => {
            setCountry(data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    return (
        <div>
 <div className="hero-content text-center ml-10">
    <div className="max-w-md">
      <h1 className="text-5xl font-semibold "> Let's Explore<span className='text-orange-500'><br></br>Southeast Asia</span></h1>
      
    </div>
  </div>

            <div className="ml-20 mb-5 grid grid-cols-1 gap:3 lg:grid-cols-3 grid-rows-2 ml-7 ">
           {country.map(con =>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="h-96 w-69 p-5" src={con.
image} alt="" /></figure>
  <div className="card-body p-2">
    <h2 className="card-title text-2xl"> {con.name}</h2>
     <p className="text-xl">{ con.special_places.map((place, index) => (
              <li key={index} className="badge badge-error badge-outline gap-3 p-2">{place}</li>
            ))}</p> 
    
   
  </div>
</div>)}
           </div>
        </div>
    );
};

export default Countries;