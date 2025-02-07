import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronRight, FaHouseUser, FaUser, FaBook, FaFolderOpen } from 'react-icons/fa';

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
    <div className="flex justify-center items-center bg-gray-900 h-15 gap-3 text-blue-100 font-bold sticky sm:min-w-max top-0 sm:flex-col sm:min-h-screen sm:justify-start sm:gap-8 sm:items-start sm:p-4 z-50">

      {/* Home nav tab */}
      <div>
        <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold flex justify-center items-center gap-2 transition-all"
            : "flex justify-center items-center gap-2 hover:text-blue-400 transition-all"
            
        }
        to="/home"
      >
        <FaHouseUser />Home</NavLink>
      </div>

      {/* Projects tab with Dropdown */}
      <div className="flex flex-col">
        <div
          className="cursor-pointer gap-2 sm:flex-col sm:relative flex justify-center items-center"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
        <div className="flex justify-center items-center sm:flex sm:justify-center sm:items-center gap-3">
          <div 
           className={`${active || isDropdownOpen ? "text-blue-500 font-bold flex justify-center items-center gap-2 transition-all" : "flex justify-center items-center gap-2 hover:text-blue-400 transition-all"}`}
          >
          <FaFolderOpen />Projects
          </div>
          {/* Arrow Icon */}
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={"hover:text-blue-400 transform transition-transform duration-200 " + (isDropdownOpen ? "rotate-90 text-blue-500" : " ")}
          ><FaChevronRight />
          </div>
        </div>
          
        {isDropdownOpen && (
          <div className="absolute top-full rounded-md shadow-lg w-max sm:relative sm:top-3 sm:left-3 sm:z-50 z-50">
          <ul className="flex flex-col bg-gray-900 w-full">
            <li className="px-4 py-2 hover:bg-gray-700 transition-all">
              <NavLink
                to="/project/project1"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-white hover:text-blue-400 transition-all"
                }
              >
                Project 1
              </NavLink>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 transition-all">
              <NavLink
                to="/project/project2/recipehome"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
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
                    ? "text-blue-500 font-bold"
                    : "text-white hover:text-blue-400 transition-all"
                }
              >
                Kanban
              </NavLink>
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
            ? "text-blue-500 font-bold flex justify-center items-center gap-2 transition-all"
            : "flex justify-center items-center gap-2 hover:text-blue-400 transition-all"
        }
        to="/other"
      >
        <FaBook /> Other</NavLink>
      </div>

      {/* About nav tab  */}
      <div>    
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
    </div>
  );
};

export default SideBarNav;
