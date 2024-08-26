import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Mylist = () => {

    const loadData = useLoaderData();
    // console.log(loadData);

    // const{_id}=loadData;
  //   const [applyEmail, setMyEmail] = useState([]);
  // const [filteredList, setFilteredList] = useState([]);

    const [selectList , setList]=useState(loadData);


    // const url = `https://job-portal-server-site-kappa.vercel.app/apply?email=${user?.email}`
    // useEffect(() => {
    //   fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //       setMyEmail(data);
    //       setFilteredList(data);
  
    //     });
    // }, [url]);

    const handelDelete = _id =>{
       console.log(_id)
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      })
      .then((result) => {
          if (result.isConfirmed) {


              fetch(`https://server-site-zeta-ten.vercel.app/travel/${_id}`, {
                  method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                  // console.log(data);
                  if (data.deletedCount > 0) {
                      Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                      )
                    const remaining =  selectList.filter(li=>li._id !== loadData._id);

                    setList(remaining);
                  }
              })

      }
  })

     
  };
    return (
        <div>
           <h2>my list{loadData.length}</h2>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Tourists Spot Name</th>
        <th>Country Name</th>
        <th>Location</th>
  <th>Average Cost</th>
        <th>Travel Time</th>
        <th>Total Visitors Per Year</th>
       
        <th>update</th>
        

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {loadData.map(list=> <tr key={list._id}>
        <th><button onClick={()=>handelDelete(list._id)} className="btn btn-square btn-xs">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></th>
        <td>{list.tourists_spot_name}</td>
        <td>{list.country_name}</td>
        <td>{list.location}</td>
        <td>{list.average_cost}</td>
        <td>{list.travel_time}</td>
        <td>{list.total_visitors_per_year}</td>

       <td>
         {/* <button  className="btn btn-outline bg-purple-500 btn-xs">update</button> */}
       
         <Link to={`/updatelist/${list._id}`}> <button  className="btn btn-outline bg-purple-500 btn-xs" onClick={()=>document.getElementById('my_modal_4').showModal()}>update</button>
       
        <dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
   
    {/* <Update></Update> */}
    <p>do you want to update ? </p>
    <div className="modal-action">
      <form method="dialog">
       <button className="btn btn-outline bg-purple-500 btn-xs">Go</button>
      </form>
    </div>
  </div>
</dialog></Link>
         </td>

      </tr>)}
     
     
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Mylist;