import React from 'react';

import errorimage from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className=' text-center'>
            <div className='flex justify-center items-center w-' >
            <img className='[400px] h-[400px]' src={errorimage} alt="" />
            </div>
            <h1 className='text-4xl font-bold'>Oops, page not found!</h1>
            <p className='font-normal mt-2'>The page you are looking for is not available.</p>
            
            <button className="mt-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white btn ">Go Back!</button>
            
        </div>
    );
};

export default ErrorPage;