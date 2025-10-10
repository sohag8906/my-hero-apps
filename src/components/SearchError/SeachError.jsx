import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import appError from "../../assets/App-Error.png";

const SearchError = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)

  // Default message (সবসময় একই দেখাবে)
  const message = "The App you are requesting is not found on our system. Please try another app.";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <img
        src={appError}
        alt="Not found"
        className="w-72 mb-6"
      />
      <h2 className="text-4xl font-bold text-gray-700 mb-2">OPPS!! APP NOT FOUND</h2>
      <p className="text-gray-500 text-center max-w-sm mb-6">{message}</p>

      <button
        onClick={() => navigate(-1)}
        className="px-6 py-2 bg-[#632EE3] text-white rounded hover:bg-[#4b1ec4] transition-colors"
      >
        Go Back
      </button>
    </div>
  );
};

export default SearchError;
