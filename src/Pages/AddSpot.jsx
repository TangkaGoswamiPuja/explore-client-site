import React from 'react';
import { useForm } from 'react-hook-form';

const AddSpot = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // For demonstration, log the form data
        // You can send this data to your server using fetch or any other method
    };
    return (
        <div>



            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control" >

                                <h1 className='text-3xl'>Add Tourists Spot</h1>
                                <div className='grid gap-3 grid-cols-2 lg:grid-cols-3 grid-rows-3'>



                                    <div> <label htmlFor="image">Image URL:</label><br />
                                        <input className="input input-bordered input-secondary w-full max-w-xs" type="text" id="image" {...register("image", { required: true })} /> </div>

                                    <div> <label htmlFor="tourists_spot_name">Tourists Spot Name:</label><br />
                                        <input className="input input-bordered input-secondary w-full max-w-xs" type="text" id="tourists_spot_name" {...register("tourists_spot_name", { required: true })} /></div>

                                    <div>
                                        <label htmlFor="country_name">Country Name:</label><br />
                                        <input className="input input-bordered input-secondary w-full max-w-xs" type="text" id="country_name" {...register("country_name", { required: true })} /></div>


                                    <div>
                                        <label htmlFor="location">Location:</label><br />
                                        <input className="input input-bordered input-secondary w-full max-w-xs" type="text" id="location" {...register("location", { required: true })} /></div>

                                    <div>  <label htmlFor="description">Short Description:</label><br />
                                        <textarea className="textarea textarea-secondary" id="description" {...register("description", { required: true })}></textarea>
                                    </div>

                                    <div><label htmlFor="average_cost">Average Cost:</label><br />
                                        <input className="input input-bordered input-secondary w-full max-w-xs" type="text" id="average_cost" {...register("average_cost", { required: true })} /></div>

                                    <div><label htmlFor="seasonality">Seasonality:</label><br />
                                        <input className="input input-bordered input-secondary w-full max-w-xs" type="text" id="seasonality" {...register("seasonality", { required: true })} /></div>

                                    <div><label htmlFor="travel_time">Travel Time:</label><br />
                                        <input className="input input-bordered input-secondary w-full max-w-xs" type="text" id="travel_time" {...register("travel_time", { required: true })} /></div>

                                    <div><label htmlFor="total_visitors_per_year">Total Visitors Per Year:</label><br />
                                        <input className="input input-bordered input-secondary w-full max-w-xs" type="number" id="total_visitors_per_year" {...register("total_visitors_per_year", { required: true })} /></div>

                                    <div><label htmlFor="user_email">User Email:</label><br />
                                        <input className="input input-bordered input-secondary w-full max-w-xs" type="email" id="user_email" {...register("user_email", { required: true })} /></div>

                                    <div><label htmlFor="user_name">User Name:</label><br />
                                        <input className="input input-bordered input-secondary w-full max-w-xs" type="text" id="user_name" {...register("user_name", { required: true })} /></div>

                                    </div>
                                    
                                    <div> {errors && <p>Please fill out all required fields.</p>}</div>

                                    <div> <button className='btn btn-secondary' type="submit">Add</button></div>

                              


                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSpot;