import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Mylist = () => {
    const loadedUsers = useLoaderData()

    return (
        <div>
           <h2>my list{loadedUsers.length}</h2>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>email</th>
        <th>time</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {loadedUsers.map(user=> <tr key={user._id}>
        <th>1</th>
        <td>{user.email}</td>
        <td>{user.time}</td>
        <td>Blue</td>
      </tr>)}
     
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Mylist;