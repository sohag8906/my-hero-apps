import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Header/Footer/Footer';
import Bannar from '../../components/Bannar/Bannar';
import { Outlet, useLocation } from 'react-router-dom';

const Root = () => {
    const location = useLocation();
    const showBannar = location.pathname === '/'; // শুধু home page-এ দেখাবে

    return (
        <div>
            <div className='max-w-6xl mx-auto'>
            
                <Navbar></Navbar>
            </div>

            {showBannar && <Bannar />}

            <div className='max-w-6xl mx-auto'>
                <Outlet></Outlet>
                <Footer></Footer>
                
            </div>
        </div>
    );
};

export default Root;
