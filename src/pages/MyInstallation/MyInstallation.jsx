import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  // localStorage থেকে installed apps load করা
  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);

  // Uninstall function
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter(app => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.info("App uninstalled successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Installed Apps</h1>

      {installedApps.length === 0 ? (
        <p className="text-center text-gray-500">No apps installed.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {installedApps.map(app => (
            <div
              key={app.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row items-start gap-4"
            >
              {/* Left: Image */}
              <div className="md:w-1/4 flex-shrink-0">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-[120px] h-[120px] md:w-full md:h-48 object-cover rounded-lg"
                />
              </div>

              {/* Right: Details */}
              <div className="md:w-3/4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl mt-10 font-semibold mb-2">{app.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:gap-4 mt-2 text-gray-700 text-sm">
                    <p><strong>Downloads:</strong> {app.downloads.toLocaleString()}</p>
                    <p><strong>Rating:</strong> {app.ratingAvg}★ ({app.reviews.toLocaleString()} reviews)</p>
                    
                  </div>
                </div>

                {/* Uninstall Button */}
                <div className="mt-4  md:mt-0 md:flex md:justify-end">
                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="px-6 py-2 bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white rounded hover:bg-red-600"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default MyInstallation;
