import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Header/Footer/Footer';
import Bannar from '../../components/Bannar/Bannar';

const Root = () => {
    return (
        <div>
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            </div>
            <Bannar></Bannar>
            <div className='max-w-6xl mx-auto'>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Root;