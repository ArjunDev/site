import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronRight, FaHouseUser, FaBook, FaFolderOpen } from 'react-icons/fa';

const SideBarNav = () => {
  const [active, setActive ] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set active to true if the current route starts with "/project"
    if (location.pathname.startsWith("/project")) {
      setActive(true);  // This will style the "Projects" tab when on the "/project" route
    } else {
      setActive(false);  // Otherwise, deactivate it
    }

    // Close the dropdown if the path doesn't start with /project
    if (!location.pathname.startsWith("/project")) {
      setIsDropdownOpen(false);
    }
  }, [location.pathname]);

  return (
    <div 
      className="flex justify-center items-center sm:bg-gray-900 h-16 gap-3 text-white font-bold fixed top-0 min-w-full sm:min-w-max sm:flex-col sm:sticky sm:min-h-screen sm:justify-start sm:gap-8 sm:items-start sm:p-4 z-50 sm:h-auto bg-gray-900">

      {/* Home nav tab */}
      <div>
        <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-gray-50 py-1 px-3 sm:bg-transparent sm:p-0 text-blue-600 font-bold rounded-2xl flex justify-center items-center gap-2 transition-all"
            : "flex justify-center items-center gap-2 hover:text-blue-400 transition-all"
        }
        to="/home"
      >
        <FaHouseUser/>Home</NavLink>
      </div>

      {/* Projects tab with Dropdown */}
      <div 
        className={`${active ?
          "bg-gray-50 py-1 px-2 sm:bg-transparent sm:p-0 text-blue-600 font-bold rounded-2xl flex flex-col transition-all"
          : "flex flex-col hover:text-blue-400 transition-all"}`
      }
        >
        <div
          className="cursor-pointer gap-2 sm:flex-col sm:relative flex justify-center items-center"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
        <div className="flex justify-center items-center sm:flex sm:justify-center sm:items-center gap-2">
          <div 
           className={`${active || isDropdownOpen ? "text-blue-500 font-bold flex justify-center items-center gap-2 transition-all" : "flex justify-center items-center gap-2 hover:text-blue-400 transition-all"}`}
          >
          <FaFolderOpen />Projects
          </div>
          {/* Arrow Icon */}
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={"hover:text-blue-400 transform transition-transform duration-200 " + (isDropdownOpen ? "sm:rotate-90 rotate-270 text-blue-500" : " ")}
          ><FaChevronRight />
          </div>
        </div>
          
        {isDropdownOpen && (
          <div className="absolute top-16 rounded-md shadow-lg w-max sm:relative sm:top-3 sm:left-3 sm:z-50 z-50">
          <ul className="flex flex-col bg-gray-900 w-full">
            <li className="px-4 py-2 hover:bg-gray-700 transition-all">
              <NavLink
                to="/project/lms"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-white hover:text-blue-400 transition-all"
                }
              >LMS</NavLink>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 transition-all">
              <NavLink
                to="/project/recipe-app"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-white hover:text-blue-400 transition-all"
                }
              >
                Recipe Finder
              </NavLink>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 transition-all">
              <NavLink
                to="/project/kanban"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-white hover:text-blue-400 transition-all"
                }
              >Kanban</NavLink>
            </li>
          </ul>
          </div> 
          )}
      </div>
      </div>
      {/* Other nav tab  */}
      <div>    
        <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-gray-50 py-1 px-3 sm:bg-transparent sm:p-0 rounded-2xl text-blue-600 font-bold flex justify-center items-center gap-2 transition-all"
            : "flex justify-center items-center gap-2 hover:text-blue-400 transition-all"
        }
        to="/other"
      >
        <FaBook /> Other</NavLink>
      </div>
    </div>
  );
};

export default SideBarNav;
