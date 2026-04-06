import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#34D399] font-semibold border-l-4 border-[#34D399] pl-4 transition-all"
      : "text-white hover:text-[#34D399] pl-4 transition-colors duration-200";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#2d2d2d] shadow-md h-28">
      <div className="max-w-7xl mx-auto px-4 md:px-20 lg:px-32 h-full flex items-center justify-between relative">

        {/* Left Nav (desktop only) */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" end className={linkClass}>HOME</NavLink>
          <NavLink to="/services" className={linkClass}>SERVICES</NavLink>
          <NavLink to="/admission" className={linkClass}>ADMISSION</NavLink>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <NavLink to="/">
            <img
              src="/logo.png"
              className="w-24 md:w-28 object-contain"
              alt="Logo"
            />
          </NavLink>
        </div>

        {/* Right Nav (desktop only) */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/about" className={linkClass}>ABOUT US</NavLink>
          <NavLink to="/contact" className={linkClass}>CONTACT US</NavLink>
        </div>

        {/* Mobile Hamburger Button (hidden when menuOpen is true) */}
        {!menuOpen && (
          <button
            className="md:hidden text-white text-2xl absolute right-4"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        )}
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-[60%] max-w-xs bg-[#2d2d2d] z-50 shadow-lg flex flex-col">
          
          {/* Header of drawer */}
          <div className="flex justify-between items-center p-6 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              className="text-white text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col px-6 pt-6 space-y-4 text-lg">
            <NavLink to="/" end className={linkClass} onClick={() => setMenuOpen(false)}>HOME</NavLink>
            <NavLink to="/services" className={linkClass} onClick={() => setMenuOpen(false)}>SERVICES</NavLink>
            <NavLink to="/admission" className={linkClass} onClick={() => setMenuOpen(false)}>ADMISSION</NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>ABOUT US</NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>CONTACT US</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;