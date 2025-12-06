import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/vklogi.png'; // ✅ Logo

const Footer = () => {
  return (
    <footer className="bg-white py-10 mt-16 shadow-inner border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* ✅ Logo */}
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="Reliance Finance Logo"
              className="h-14 w-auto rounded-full shadow-md hover:shadow-blue-500 transition duration-300"
            />
          </div>

          {/* ✅ Navigation Links */}
          <div className="flex space-x-6 text-sm sm:text-base font-medium">
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              About
            </Link>
            {/* <Link
              to="/loans"
              className="text-gray-800 hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              
            </Link>
            <Link
              to="/emi-calculator"
              className="text-gray-800 hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              EMI Calculator
            </Link> */}
            <Link
              to="/contact"
              className="text-gray-800 hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* ✅ Social Media */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 hover:scale-110 transition duration-300"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-400 hover:scale-110 transition duration-300"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 hover:scale-110 transition duration-300"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 hover:scale-110 transition duration-300"
            >
              <FaYoutube size={22} />
            </a>
          </div>
        </div>

        {/* ✅ Contact Information */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-700 text-sm">
            <div className="flex items-center gap-2 justify-center">
              <FaPhone className="text-blue-600" />
              <span>1800-123-4567</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaEnvelope className="text-blue-600" />
              <span>support@reliancefin.co.in</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>Mumbai, India</span>
            </div>
          </div>
          
          <div className="text-gray-800 text-sm font-semibold">
            Making India Self-Reliant
          </div>
        </div>

        {/* ✅ Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-300 text-center text-gray-600 text-sm tracking-wide">
          &copy; 2024 <span className="text-blue-600 font-semibold">Reliance Finance</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;