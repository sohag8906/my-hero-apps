import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import lodeimage from "../../assets/icon-downloads.png";
import staricon from "../../assets/icon-ratings.png";


const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sort, setSort] = useState("");

  
  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);

  
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.info("App uninstalled successfully!");
  };

  
  const handleSort = (type) => {
    setSort(type);
    if (type === "Low-High") {
      const sorted = [...installedApps].sort((a, b) => a.ratingAvg - b.ratingAvg);
      setInstalledApps(sorted);
    }
    if (type === "High-Low") {
      const sorted = [...installedApps].sort((a, b) => b.ratingAvg - a.ratingAvg);
      setInstalledApps(sorted);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-200 p-4 md:p-6">
      <h1 className="text-3xl font-bold text-center mb-4">My Installed Apps</h1>
      <p className="text-center text-gray-400 mb-6">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold text-2xl text-center">
          {installedApps.length} Apps Found
        </h2>
        <details className="dropdown">
          <summary className="btn m-1">
            Sort By Rating: {sort ? sort : ""}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("Low-High")}>Low-High</a>
            </li>
            <li>
              <a onClick={() => handleSort("High-Low")}>High-Low</a>
            </li>
          </ul>
        </details>
      </div>

      {installedApps.length === 0 ? (
        <p className="text-center text-gray-500">No apps installed.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              
              <div className="md:w-1/4 flex-shrink-0">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-[120px] h-[120px] md:w-full md:h-48 object-cover rounded-lg"
                />
              </div>

             
              <div className="md:w-2/4 flex flex-col justify-center gap-4 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-4">{app.title}</h3>

                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-12 text-gray-700 text-sm">
                 
                  
                  <div className="flex gap-3">
                    <img src={lodeimage} alt="Downloads" className="w-6 h-6" />
                    <p className="font-semibold">{app.downloads.toLocaleString()}</p>
                  </div>
                  <div className="flex gap-3">
                    <img src={staricon} alt="Star" className="w-6 h-6" />
                    
                    <p className="font-semibold">{app.ratingAvg}</p>
                  </div>

              </div>
              </div>

             
              <div className="md:w-1/4 flex justify-end mt-18 ">
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="px-6 py-2 bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white rounded hover:bg-red-600"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default MyInstallation;
