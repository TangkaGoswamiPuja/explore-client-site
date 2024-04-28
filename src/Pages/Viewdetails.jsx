import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Viewdetails = () => {
    const details = useLoaderData();
 const {_id} = useParams()
    const idInt = parseInt(_id)
    const detail = details.find(detail => detail._id === idInt)
    const { tourists_spot_name}= detail
    return (
        <div>
           view:{tourists_spot_name} 
        </div>
    );
};

export default Viewdetails;