import React from 'react';
import { GiCheckMark } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";

const Middle = () => {
    return (
        <div className='ml-10 mr-10'>
            <div className="hero bg-orange-100 mt-7 mb-7 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/Scc8mgH/pexels-element5-1051072.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <Fade> <h1 className="text-6xl font-bold">We’re  <span className='text-orange-500'>Travel</span> <br></br> 
      Agency</h1></Fade>
      <p className="p-5 text-2xl">
        <ol>
            <li><GiCheckMark />

Invest in your simply neighborhood</li>
            <li><GiCheckMark />

Support people in free text extreme need</li>
            <li><GiCheckMark />

Largest global industrial business community</li>
            <li><GiCheckMark />

We are ready to go with your dream place</li>
        </ol>
      </p>
      <button className="btn btn-outline btn-error">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Middle;