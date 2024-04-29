import React from 'react';

const Asking = () => {
    return (
        <div className='ml-36 mr-36 mt-10 mb-10 p-3 border border-orange-600 rounded-lg'>
            <div className="hero min-h-screen  ">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
       <h1 className="text-5xl font-bold"> <span className='text-orange-500'>Any Question?</span> Feel Free to Contact</h1>
 <img className=" w-96 lg:ml-20" src="https://i.ibb.co/c6LkQ1V/Animation-1714432012274.gif" alt="" />

    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-orange-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <textarea  type="text" placeholder="Your Questions" className="textarea textarea-error w-full max-w-xs" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input type="email" placeholder="Your emali" className="input input-bordered input-error w-full max-w-xs" required />
          <label className="label">
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline btn-error">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
           
        </div>
    );
};

export default Asking;