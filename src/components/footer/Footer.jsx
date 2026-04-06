import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white py-6 px-6 md:px-20 lg:px-32">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-16" />
          <p className="text-sm text-gray-300">
            Lonnie Care RTC
          </p>
        </div>

        {/* Quick Links */}
        <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
          <li>
            <Link to="/" className="hover:text-[#C9A041]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#C9A041]">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#C9A041]">
              Services
            </Link>
          </li>
          <li>
            <Link to="/admission" className="hover:text-[#C9A041]">
              Admission
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#C9A041]">
              Contact
            </Link>
          </li>
        </ul>

        {/* Contact */}
        <div className="text-sm text-gray-300 text-center md:text-right">
          <p>1-800-822-3525</p>
          <p>admin@lonniecarertc.org</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Lonnie Care RTC. All rights reserved.
      </div>
      
    </footer>
  );
};

export default Footer;