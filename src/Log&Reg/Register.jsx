import React, { useContext, useState } from 'react';
import { FaEye,FaEyeSlash} from "react-icons/fa";

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthFile/Auth';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'

import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
const Register = () => {
    const [regError,setRegError]= useState('')
    const [regS,setRegS]= useState('')
    const [show,setShow]= useState(false)
    
   const {createUser}= useContext(AuthContext)

    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const on2Submit = data => {console.log(data);
    console.log(errors);
  
    setRegError('')
  
    createUser(data.email,data.password )
    .then(result =>{
        console.log(result.user)
        toast("Registration successful !")
        const time = result.user.metadata?.
            creationTime
        const user = {email:data.email,time:time}
        fetch("https://server-site-zeta-ten.vercel.app/user",{
  method:"POST",
  headers: {
    "content-type":"application/json"
  },
  body: JSON.stringify(user)
})
.then(res=>res.json())
.then(data=>{
  console.log(data);
  if(data.insertedId){
    Swal.fire({
        title: 'Success!',
        text: 'Added in the Database  Successfully',
        icon: 'success',
        confirmButtonText: 'Done'
      })
    reset();
  }
})
 })
    .catch(error=>{console.error(error)
        setRegError(error.message)
    })}
    return (
        <div className='mt-16 mb-10'>
            <Helmet>
                <title>
                    Register
                </title>
            </Helmet>
             <div className="hero min-h-screen bg-base-200">

<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form onSubmit={handleSubmit(on2Submit)} className="card-body">
        <h2  className='text-3xl font-bold bg-orange-100 rounded-lg p-3'>Register Please</h2>
        <div className="form-control">

            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" name="names" className="input input-bordered input-error"  {...register("names",{
                required: {
                   value: true,
            message: "You must fill this input"}})} />
        </div>
        <div>{errors.name && <p className='text-red-500'>{errors.name.message}</p>}</div> 
        <div className="form-control">

            <label className="label">
                <span className="label-text">Photo url </span>
            </label>
            <input type="text" placeholder="photo url" name="photo" className="input input-bordered input-error"  {...register("photo",{
                required: {
                   value: true,
            message: "You must fill this input"}})} />
            <div>{errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}</div> 
        </div>
        <div className="form-control">

            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered input-error" required 
            {...register("email")}/>
        </div>

        <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>


            <div className='flex gap-2'>
            <input 
            type= {show ? "text":"password"} placeholder="password" 
            name="password" 
            className="input input-bordered input-error" 
            {...register("password",{
                required: {
                   value: true,
            message: "You must fill this input"},
           minLength:{
               value:6, message:"This inputs value must be at least 6 characters"
           },
           pattern:{
               value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
               message: " must be use lower case and uppercae"
           } })}
            />
<span className="mt-3" onClick={()=>setShow(!show)}>
    {
    show?
    <FaEyeSlash  className='text-2xl'/>:
    <FaEye  className='text-2xl'/>
}

</span>
</div>
                                       <div>{errors.password && <p className='text-red-500'>{errors.password.message}</p>}</div> 
           
        </div>
        <div className="form-control mt-6">
            <button className="btn btn-error btn-outline">Register</button>
        </div>
    </form>
    {
        regError && <p className='p-5 text-red-600'>{regError}</p>
    }
    {/* {
        regS && <p>{regS}</p>
    } */}
    <p className="text-center mb-5">Already have a account? <Link className='link text-orange-500' to="/login">plz login</Link></p>
</div>
</div>
<ToastContainer />
        </div>
    );
};

export default Register;