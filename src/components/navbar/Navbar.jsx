import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import ResourceDropdown from "../dropdown/ResourceDropdown";
import Login from '../login/Login' // Import the LoginPopup component
import "./Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false); // State for login popup visibility

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const toggleLoginPopup = () => {
    setIsLoginPopupOpen(!isLoginPopupOpen); // Toggle the popup
  };

  return (
    <>
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center space-x-10">
          <div className="text-xl font-bold text-blue-500">Bitrix24</div>
          <ul className="hidden left-8 md:flex space-x-10 text-gray-600 font-bold items-center">
            <li
              className="hover:text-gray-800 cursor-pointer relative"
              onMouseLeave={closeDropdowns} // Close dropdown on mouse leave
            >
              <Dropdown
                isOpen={activeDropdown === "product"}
                toggleDropdown={() => toggleDropdown("product")}
                closeDropdowns={closeDropdowns}
              />
            </li>
            <li className="hover:text-gray-800 cursor-pointer">PRICING</li>
            <li
              className="hover:text-gray-800 cursor-pointer relative"
              onMouseLeave={closeDropdowns} // Close dropdown on mouse leave
            >
              <ResourceDropdown
                isOpen={activeDropdown === "resource"}
                toggleDropdown={() => toggleDropdown("resource")}
                closeDropdowns={closeDropdowns}
              />
            </li>
            <li className="hover:text-gray-800 cursor-pointer">SOLUTIONS</li>
            <li className="hover:text-gray-800 cursor-pointer">INTEGRATIONS</li>
            <li className="hover:text-gray-800 cursor-pointer">PARTNERS</li>
            <li className="hover:text-gray-800 cursor-pointer">WHY BITRIX24</li>
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <button className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded font-bold">
            Start for Free
          </button>
          <button
            onClick={toggleLoginPopup} // Toggle popup on click
            className="text-gray-600 hover:text-gray-800 font-bold"
          >
            LOG IN
          </button>
        </div>
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
        {isMobileMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-2 p-4">
            <li className="hover:text-gray-800 cursor-pointer">Product</li>
            <li className="hover:text-gray-800 cursor-pointer">Pricing</li>
            <li className="hover:text-gray-800 cursor-pointer">Resources</li>
            <li className="hover:text-gray-800 cursor-pointer">Solutions</li>
            <li className="hover:text-gray-800 cursor-pointer">Integrations</li>
            <li className="hover:text-gray-800 cursor-pointer">Partners</li>
            <li className="hover:text-gray-800 cursor-pointer">Why Bitrix24</li>
            <button className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded w-full">
              Start for Free
            </button>
            <button
              onClick={toggleLoginPopup} // Open popup from mobile menu
              className="text-gray-600 hover:text-gray-800 w-full text-left"
            >
              Log in
            </button>
          </ul>
        )}
      </nav>

      {/* Login Popup Component */}
      <Login isOpen={isLoginPopupOpen} onClose={toggleLoginPopup} />
    </>
  );
};

export default Navbar;
