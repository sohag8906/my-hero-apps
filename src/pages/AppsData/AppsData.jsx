import React from 'react';

const AppsData = ({ apps = [] }) => {
    return (
        <div>
            {/* Section title */}
            <h1 className="text-3xl font-bold text-center mt-6">
                Trending Apps
            </h1>
            <p className='text-gray-400 text-center mt-4'>Explore All Trending Apps on the Market developed by us</p>

            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-4  gap-6">
                {apps.map(app => (
                    <div key={app.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                        {/* App image */}
                        <img
                            src={app.image}
                            alt={app.title}
                            className="rounded-lg mb-3 w-full h-48 object-cover"
                        />
                        {/* App title */}
                        <h3 className="font-medium  text-center">{app.title}</h3>
                        {/* Downloads and rating */}
                        <div className="flex justify-between w-full mt-2 text-sm text-gray-700">
                            <span>{app.downloads.toLocaleString()}+ downloads</span>
                            <span className="text-yellow-500 font-semibold">{app.ratingAvg}★</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppsData;
