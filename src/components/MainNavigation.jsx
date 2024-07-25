import React, { useState } from "react";
import { menus } from "../menu.js"; // Ensure the path is correct based on your project structure
import { NavLink } from "react-router-dom";

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary px-8 py-4 z-50">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <NavLink to="/" className="text-3xl">
            BIRAJ SHRESTHA
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-4">
          {menus.map((menu) => (
            <NavLink
              key={menu.path} // Add key prop
              to={menu.path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded transition-colors duration-80 ${
                  isActive ? "bg-white" : "text-white hover:text-gray-200"
                }`
              }
            >
              {menu.title}
            </NavLink>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded transition-colors duration-80 ${
                  isActive ? "bg-white" : "text-white hover:text-gray-200"
                }`
              }
            >
              {menu.title}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Hero;
