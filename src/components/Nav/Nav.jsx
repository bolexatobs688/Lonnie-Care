import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  isActive ? "text-primary" : "text-gray-700 hover:text-primary";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="relative z-50 flex justify-between items-center p-6">

      {/* LOGO */}
      <h1 className="text-xl font-bold">Lonnie Care</h1>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex space-x-8 text-lg font-medium">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>
        <NavLink to="/services" className={navLinkClass}>Services</NavLink>
        <NavLink to="/admission" className={navLinkClass}>Admission</NavLink>
        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
      </nav>

      {/* MOBILE MENU ICON */}
      {!showNav && (
        <button className="md:hidden">
          <img
            src={assets.menu_icon}
            alt="Menu"
            className="w-6 cursor-pointer"
            onClick={() => setShowNav(true)}
          />
        </button>
      )}

      {/* MOBILE MENU */}
      {showNav && (
        <div className="fixed top-0 right-0 h-full bg-white w-[80%] max-w-sm shadow-lg z-50">

          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-bold">Menu</h2>
            <img
              src={assets.cross_icon}
              alt="Close"
              className="w-6 cursor-pointer"
              onClick={() => setShowNav(false)}
            />
          </div>

          {/* Links */}
          <nav className="flex flex-col px-8 pt-8 space-y-6 text-lg">
            <NavLink to="/" className={navLinkClass} onClick={() => setShowNav(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setShowNav(false)}>About</NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={() => setShowNav(false)}>Services</NavLink>
            <NavLink to="/admission" className={navLinkClass} onClick={() => setShowNav(false)}>Admission</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setShowNav(false)}>Contact</NavLink>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Nav;