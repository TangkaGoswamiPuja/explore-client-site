import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const loadUpdateList = useLoaderData();
    const{_id,image, 
        tourists_spot_name, 
        average_cost, 
        total_visitors_per_year, travel_time , user_email,user_name, country_name, location, description,
        seasonality} = loadUpdateList;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data); 
         // server
         fetch(`https://server-site-zeta-ten.vercel.app/travel/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'U P D A T E',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                     reset();
                }
            })

    };  
        
        return (
         
          <div>
<div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col">
        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control" >

                    <h2 className='text-3xl font-bold bg-orange-200 rounded-lg p-3 mt-3 mb-3'>Update:{ tourists_spot_name}</h2>
                    <div className='grid gap-3 grid-cols-2 lg:grid-cols-3 grid-rows-3'>



                        <div> <label htmlFor="image">Image URL:</label><br />
                            <input className="input input-bordered input-error w-full max-w-xs" type="text" id="image" defaultValue={image} {...register("image", { required: true })} /> </div>

                        <div> <label htmlFor="tourists_spot_name">Tourists Spot Name:</label><br />
                            <input className="input input-bordered input-error w-full max-w-xs" type="text" id="tourists_spot_name" defaultValue={ tourists_spot_name} {...register("tourists_spot_name", { required: true })} /></div>

                        <div>
                            <label htmlFor="country_name">Country Name:</label><br />
                           
                            <select className="select select-error w-full max-w-xs" id="country_name"  defaultValue={country_name} {...register("country_name", { required: true })}>
                                <option disabled selected>Pick a country</option>
                                <option>Bangladesh</option>
                                <option>Thailand</option>
                                <option>Indonesia</option>
                                <option>Malaysia</option>
                                <option>Vietnam</option>
                                <option>Cambodia</option>

                            </select></div>


                        <div>
                            <label htmlFor="location">Location:</label><br />
                            <input className="input input-bordered input-error w-full max-w-xs" type="text" id="location"  defaultValue={location} {...register("location", { required: true })} /></div>

                        <div>  <label htmlFor="description">Short Description:</label><br />
                            <textarea className="textarea textarea-error" id="description" defaultValue={description}{...register("description", { required: true })}></textarea>
                        </div>

                        <div><label htmlFor="average_cost">Average Cost:</label><br />
                            <input className="input input-bordered input-error w-full max-w-xs" type="text" id="average_cost"  defaultValue={average_cost} {...register("average_cost", { required: true })} /></div>

                        <div><label htmlFor="seasonality">Seasonality:</label><br />
                            <input className="input input-bordered input-error w-full max-w-xs" type="text" id="seasonality"  defaultValue={seasonality} {...register("seasonality", { required: true })} /></div>

                        <div><label htmlFor="travel_time">Travel Time:</label><br />
                            <input className="input input-bordered input-error w-full max-w-xs" type="text" id="travel_time"  defaultValue={travel_time} {...register("travel_time", { required: true })} /></div>

                        <div><label htmlFor="total_visitors_per_year">Total Visitors Per Year:</label><br />
                            <input className="input input-bordered input-error w-full max-w-xs" type="number" id="total_visitors_per_year"  defaultValue={total_visitors_per_year} {...register("total_visitors_per_year", { required: true })} /></div>

                        <div><label htmlFor="user_email">User Email:</label><br />
                            <input className="input input-bordered input-error w-full max-w-xs" type="email" id="user_email"  defaultValue={user_email} {...register("user_email", { required: true })} /></div>

                        <div><label htmlFor="user_name">User Name:</label><br />
                            <input className="input input-bordered input-error w-full max-w-xs" type="text" id="user_name"   defaultValue={user_name}{...register("user_name", { required: true })} /></div>

                    </div>



                    <div className='mt-3'> <button className='btn btn-error btn-outline' type="submit">Update</button></div>




                </div>

            </form>
        </div>
    </div>
</div>
</div>
       
    );
};

export default Update;