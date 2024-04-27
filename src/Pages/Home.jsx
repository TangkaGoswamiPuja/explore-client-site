import React from 'react';
import Banner from './HomeElement/Banner';
import Tourists from './HomeElement/Tourists';
import Asking from './HomeElement/Asking';
import Countries from './HomeElement/Countries';
import Middle from './HomeElement/Middle';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Explore|Home</title>
            </Helmet>
            <Banner></Banner>
            <Tourists></Tourists>
            <Middle></Middle>
           
            <Countries></Countries>
            <Asking></Asking>

        </div>
    );
};

export default Home;