import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronRight } from 'react-icons/fa';

const SideBarNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close the dropdown when the route changes to anything outside the dashboard
    if (!location.pathname.startsWith("/dashboard")) {
      setIsDropdownOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col bg-gray-700 px-4 h-screen gap-6 text-white font-bold">
      <NavLink
        className={({ isActive }) =>
          isActive ? "mt-4 text-blue-500 font-bold " : "mt-4"
        }
        to="/"
      >
        Home
      </NavLink>
      {/* Dashboard with Dropdown */}
      <div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : ""
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          {/* Arrow Icon */}
          <span className="ml-2 flex items-center justify-center">
          <span
            className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-90' : ''}`}
          ><FaChevronRight className="w-3 h-3 text-white" /></span>
        </span>
        </div>
        {isDropdownOpen && (
          <ul className="flex flex-col bg-gray-800 mt-2 rounded-md shadow-lg">
            <li className="px-4 py-2 hover:bg-gray-600">
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : ""
                }
              >
                Profile
              </NavLink>
            </li>
            <li className="px-4 py-2 hover:bg-gray-600">
              <NavLink
                to="/dashboard/settings"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : ""
                }
              >
                Settings
              </NavLink>
            </li>
            <li className="px-4 py-2 hover:bg-gray-600">
              <NavLink
                to="/dashboard/reports"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : ""
                }
              >
                Reports
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : ""
        }
        to="/services"
      >
        Services
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : ""
        }
        to="/projects"
      >
        Projects
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : ""
        }
        to="/about"
      >
        About
      </NavLink>
    </div>
  );
};

export default SideBarNav;
