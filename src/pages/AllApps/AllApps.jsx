import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const AllApps = () => {
  const apps = useLoaderData(); // loader থেকে ডাটা নিচ্ছে

  return (
    <div className="max-w-6xl mx-auto bg-gray-200 p-6">
      {/* Page Title */}
      <h1 className="text-3xl mt-8 font-bold mb-6 text-center">Our All Applications</h1>
      <p className="text-center font-normal text-gray-400">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-8 gap-6">
        {apps.map((app) => (
          <Link to={`/app/${app.id}`} key={app.id}>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:scale-105 transition-transform h-[360px]">
              {/* App Image */}
              <img
                src={app.image}
                alt={app.title}
                className="rounded-lg mb-3 w-full h-48 object-cover"
              />
              {/* App Title */}
              <h3 className="font-medium text-center text-lg">{app.title}</h3>
              {/* Downloads & Rating */}
              <div className="flex justify-between w-full mt-auto text-sm text-gray-700">
                <span>{app.downloads.toLocaleString()}+ downloads</span>
                <span className="text-yellow-500 font-semibold">{app.ratingAvg}★</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
