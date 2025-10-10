import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-10 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Brand */}
        <div className="text-2xl font-bold text-white mb-6 md:mb-0">
          MyHero <span className="text-blue-500">Apps</span>
        </div>

        {/* Center navigation */}
        <div className="flex flex-wrap justify-center gap-8 text-lg font-medium mb-6 md:mb-0">
          <span className="hover:text-white transition-colors cursor-pointer">Home</span>
          <span className="hover:text-white transition-colors cursor-pointer">Apps</span>
          <span className="hover:text-white transition-colors cursor-pointer">Installation</span>
          
        </div>

        {/* Right side - Social icons */}
        <div className="flex gap-6 text-2xl">
          <span
            className="hover:text-blue-500 transition-transform transform hover:scale-110 cursor-default"
            aria-label="Facebook"
          >
            <FaFacebook />
          </span>
          <span
            className="hover:text-blue-400 transition-transform transform hover:scale-110 cursor-default"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </span>
          <span
            className="hover:text-gray-100 transition-transform transform hover:scale-110 cursor-default"
            aria-label="GitHub"
          >
            <FaGithub />
          </span>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} MyHero Apps — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
