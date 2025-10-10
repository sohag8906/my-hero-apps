import React from 'react';
import logoimage from '../../assets/logo.png';
import { FaGithub } from "react-icons/fa";
import { NavLink, useNavigation } from 'react-router-dom'; 

const Navbar = () => {
    const navigation = useNavigation(); 
    const isLoading = navigation.state === "loading";

    const links = <>
        
        <div className="relative flex flex-col items-center">
            <NavLink 
                to="/" 
                className={({ isActive }) => 
                    isActive 
                    ? "font-medium m-2 text-[#632EE3] underline underline-offset-4 [text-decoration-thickness:1px]" 
                    : "font-medium m-2 text-black hover:text-[#632EE3] transition duration-300"
                }
            >
                Home
            </NavLink>

           
            {isLoading && (
                <span className="loading loading-spinner loading-xs mt-1"></span>
            )}
        </div>

        <NavLink 
            to="/apps" 
            className={({ isActive }) => 
                isActive 
                ? "font-medium m-2 text-[#632EE3] underline underline-offset-4 [text-decoration-thickness:1px]" 
                : "font-medium m-2 text-black hover:text-[#632EE3] transition duration-300"
            }
        >
            Apps
        </NavLink>

        <NavLink 
            to="/installation" 
            className={({ isActive }) => 
                isActive 
                ? "font-medium m-2 text-[#632EE3] underline underline-offset-4 [text-decoration-thickness:1px]" 
                : "font-medium m-2 text-black hover:text-[#632EE3] transition duration-300"
            }
        >
            Installation
        </NavLink>
    </>;

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                
                <div className='flex '>
                    <img className='w-[40px] h-[40px]' src={logoimage} alt="" />
                    <li> <a className="btn btn-ghost text-[#632EE3] text-xl">HERO.IO</a></li>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex">
                <a
                    href="https://github.com/sohag8906/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    <FaGithub className="text-xl" />
                    Contribution
                </a>
            </div>
        </div>
    );
};

export default Navbar;
