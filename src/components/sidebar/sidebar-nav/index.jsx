import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronRight, FaHouseUser, FaUser, FaBook, FaFolderOpen } from 'react-icons/fa';

const SideBarNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close the dropdown when the route changes to anything outside the dashboard
    if (!location.pathname.startsWith("/project")) {
      setIsDropdownOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-start bg-gray-700 px-6 py-4 h-screen w-auto gap-4 text-white font-bold">
    {/* Navigation Links */}
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "mt-2 text-blue-500 font-bold flex justify-center items-center gap-2 transition-all"
          : "mt-2 flex justify-center items-center gap-2 hover:text-blue-400 transition-all"
      }
      to="/"
    >
    <FaHouseUser />Home</NavLink>

    {/* Dashboard with Dropdown */}
    <div>
      <div
        className="flex items-center cursor-pointer gap-2"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold flex justify-center items-center gap-2"
              : "flex justify-center items-center gap-2 hover:text-blue-400 transition-all"
          }
          to="/project"
        >
        <FaFolderOpen />Projects</NavLink>
        {/* Arrow Icon */}
        <span
          className={`ml-1 transform transition-transform duration-200 ${
            isDropdownOpen ? "rotate-90" : ""
          }`}
        >
          <FaChevronRight className="w-4 h-4" />
        </span>
      </div>
      {isDropdownOpen && (
        <ul className="flex flex-col bg-gray-800 mt-2 rounded-md shadow-lg overflow-hidden">
          <li className="px-4 py-2 hover:bg-gray-600 transition-all">
            <NavLink
              to="/project/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-white hover:text-blue-400 transition-all"
              }
            >Profile</NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-600 transition-all">
            <NavLink
              to="/project/settings"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-white hover:text-blue-400 transition-all"
              }
            >Settings</NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-600 transition-all">
            <NavLink
              to="/project/kanban"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-white hover:text-blue-400 transition-all"
              }
            >Kanban</NavLink>
          </li>
        </ul>
      )}
    </div>

    {/* Other Links */}
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-blue-500 font-bold flex justify-center items-center gap-2 transition-all"
          : "flex justify-center items-center gap-2 hover:text-blue-400 transition-all"
      }
      to="/other"
    >
    <FaBook /> Other</NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-blue-500 font-bold flex justify-center items-center gap-2 transition-all"
          : "flex justify-center items-center gap-2 hover:text-blue-400 transition-all"
      }
      to="/about"
    >
    <FaUser />About</NavLink>
  </div>

  );
};

export default SideBarNav;
