import React from 'react';
import playstorimage from '../../assets/playstor (2).png'
import appsotreimage from '../../assets/appstore (2).png'
import logopng from '../../assets/hero.png'

const Bannar = () => {
  return (
  
    <div >
      <h1 className='text-center font-bold text-5xl mt-10 '>We Build <br />
        <span className='text-[#632EE3]'>Productive</span> Apps</h1>
      <p className='text-center text-gray-400 mt-5'>AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

      <div className="flex flex-col items-center justify-center text-center space-y-6 mt-10">
        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          {/* Play Store Button */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <img
              src={playstorimage}
              alt="Play Store"
              className="w-6 h-6"
            />
            Play Store
          </a>

          {/* App Store Button */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <img
              src={appsotreimage}
              alt="App Store"
              className="w-6 h-6"
            />
            App Store
          </a>
        </div>

        {/* Logo image */}
        <div>
          <img src={logopng} alt="Logo" className="w-[600px] h-auto" />
        </div>
      </div>

      <div className="flex flex-col">
        <div className='  w-full h-[310px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>
          <h2 className='text-center text-white font-bold text-3xl mt-6 '>Trusted by Millions, Built for You</h2>
          <div className='flex flex-col md:flex-row justify-center mt-10 gap-16'>
            <div className='div-1 text-center'>
              <h2 className='text-white font-normal'>Total Downloads</h2>
              <h1 className='text-white font-bold text-4xl mt-4' >29.6M</h1>
              <p className='text-white font-normal mt-4'>21% more than last month</p>
            </div>
            <div className='div-2 text-center'>
              <h3 className='text-white font-normal'>Total Reviews</h3>
              <h1 className='text-white font-bold text-4xl mt-4'>906K</h1>
              <p className='text-white font-normal mt-4'>46% more than last month</p>
            </div>
            <div className='div-3 text-center'>
              <h4 className='text-white font-normal'>Active Apps</h4>
              <h1 className='text-white font-bold text-4xl mt-4'>132+</h1>
              
            </div>
          </div>
        </div>
      </div>
      

    </div>
    
   
  );
};

export default Bannar;