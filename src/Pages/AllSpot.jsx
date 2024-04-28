import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TravelCard from './TravelCard';

const AllSpot = () => {
    const travels =useLoaderData()
    return (
        <div>
            <h2 className='text-4xl'>All Tourists Spot</h2>
            {travels.map(travel => <TravelCard key={travel._id}
            travel={travel}>
                
            </TravelCard>)}
        </div>
    );
};

export default AllSpot;