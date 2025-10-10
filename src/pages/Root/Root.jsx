import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Header/Footer/Footer';
import Bannar from '../../components/Bannar/Bannar';
import { Outlet, useLocation } from 'react-router-dom';
import Home from '../Home/Home';

const Root = () => {
  const location = useLocation();
  const showBannar = location.pathname === '/'; 
  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); 

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
     
      <div className='max-w-6xl mx-auto'>
        <Navbar />
      </div>

      
      {showBannar && <Bannar />}
      

  
      <div className='max-w-6xl mx-auto'>
        {loading ? (
          
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-12 h-12 border-4 border-[#632EE3] border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-3 text-lg text-gray-600 font-medium">Loading...</span>
          </div>
        ) : (
          <>
            <Outlet />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Root;
