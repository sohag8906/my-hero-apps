import { useLoaderData, Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const AllApps = () => {
  const apps = useLoaderData();
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(apps);
  const navigate = useNavigate();

  const handleSearch = () => {
    const filtered = apps.filter((app) =>
      app.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      
      navigate("/search-error", {
        state: { message: `No apps found for "${query}"` },
      });
    } else {
      setSearchResult(filtered);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-200 p-6">
      <h1 className="text-3xl mt-8 font-bold mb-6 text-center">
        Our All Applications
      </h1>
      <p className="text-center font-normal text-gray-400 mb-6">
        Explore All Apps on the Market developed by us.
      </p>

      <div className="flex items-center justify-between my-6 px-6">
        <h1 className="text-2xl font-semibold text-gray-700">
          ({searchResult.length}) Apps Found
        </h1>

        <div className="flex bg-white rounded-full shadow-md overflow-hidden w-full max-w-md">
          <input
            type="text"
            placeholder="Search apps..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-[#632EE3] w-[50px] text-white px-4 py-2 hover:bg-[#4b1ec4] transition-colors duration-300 flex items-center justify-center"
          >
            <FaSearch className="text-lg" />
          </button>
        </div>
      </div>

      {searchResult.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-8 gap-6">
          {searchResult.map((app) => (
            <Link to={`/app/${app.id}`} key={app.id}>
              <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:scale-105 transition-transform h-[360px]">
                <img
                  src={app.image}
                  alt={app.title}
                  className="rounded-lg mb-3 w-full h-48 object-cover"
                />
                <h3 className="font-medium text-center text-lg">{app.title}</h3>
                <div className="flex justify-between w-full mt-auto text-sm text-gray-700">
                  
                  <span className="text-gray-700 font-semibold">
                 {app.downloads.toLocaleString()} download
                      </span>

                  <span className="text-yellow-500 font-semibold">
                    {app.ratingAvg}★
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
