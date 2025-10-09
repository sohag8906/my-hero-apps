import React from 'react';
import { Link } from 'react-router-dom';

const AppsData = ({ apps = [] }) => {
    return (
        <div>
            {/* Section title */}
            <h1 className="text-3xl font-bold text-center mt-6">
                Trending Apps
            </h1>
            <p className='text-gray-400 text-center mt-4'>
                Explore All Trending Apps on the Market developed by us
            </p>

            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-4 gap-6">
                {apps.map(app => (
                    <Link to={`/app/${app.id}`} key={app.id}>
                        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:scale-105 transition-transform">
                            {/* App image */}
                            <img
                                src={app.image}
                                alt={app.title}
                                className="rounded-lg mb-3 w-full h-48 object-cover"
                            />
                            {/* App title */}
                            <h3 className="font-medium text-center">{app.title}</h3>
                            {/* Downloads and rating */}
                            <div className="flex justify-between w-full mt-2 text-sm text-gray-700">
                                <span>{app.downloads.toLocaleString()}+ downloads</span>
                                <span className="text-yellow-500 font-semibold">{app.ratingAvg}★</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Show All Button */}
            <div className='flex justify-center mt-6'>
                <Link to="/apps">
                    <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-[145px] h-[48px] font-medium rounded-xl'>
                        Show All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AppsData;

