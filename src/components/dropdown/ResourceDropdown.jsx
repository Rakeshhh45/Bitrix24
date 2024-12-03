import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // Dropdown arrow icon
import { BookOpenIcon, ChatBubbleLeftIcon, NewspaperIcon } from "@heroicons/react/24/outline"; // Icons for dropdown items

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center py-4">
          <ul className="flex space-x-8 items-center">
            {/* Resources Menu */}
            <li className="">
              <button
                className="flex w-15 items-center text-gray-800 font-semibold hover:text-gray-800"
                onClick={toggleDropdown}
              >
                RESOURCE
                <ChevronDownIcon
                  className={`w-5 h-5 ml-1 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-20 mt-9 w-80 bg-white shadow-lg border rounded-lg flex flex-col lg:flex-row lg:w-auto z-50">
                  {/* Column 1 */}
                  <div className="p-4 w-full lg:w-48">
                    <div className="flex items-center space-x-2">
                      <BookOpenIcon className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-800">LEARN</h4>
                    </div>
                    <ul className="mt-2 space-y-1">
                      <li>
                        <a
                          href="#"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Webinars
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Helpdesk
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Guides & API Documentation
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div className="p-4 w-full lg:w-48">
                    <div className="flex items-center space-x-2">
                      <ChatBubbleLeftIcon className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-gray-800">CONNECT</h4>
                    </div>
                    <ul className="mt-2 space-y-1">
                      <li>
                        <a
                          href="#"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Submit Ticket
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Contact Partners
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div className="p-4 w-full lg:w-48">
                    <div className="flex items-center space-x-2">
                      <NewspaperIcon className="w-5 h-5 text-orange-600" />
                      <h4 className="font-semibold text-gray-800">READ</h4>
                    </div>
                    <ul className="mt-2 space-y-1">
                      <li>
                        <a
                          href="#"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Latest Articles
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Tips & Updates
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
