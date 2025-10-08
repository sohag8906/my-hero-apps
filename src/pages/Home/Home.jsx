import React from 'react';
import AppsData from '../AppsData/AppsData';
import { useLoaderData } from 'react-router';


const Home = () => {

    const apps = useLoaderData();
    console.log(apps)
    return (
        <div>
        <AppsData apps={apps}></AppsData>
        </div>
    );
};

export default Home;