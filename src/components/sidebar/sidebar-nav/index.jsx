import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronRight, FaHouseUser, FaUser, FaBook, FaFolderOpen } from 'react-icons/fa';

const SideBarNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close the dropdown when the route changes to anything outside the Projects
    if (!location.pathname.startsWith("/project")) {
      //console.log(location.pathname)
      setIsDropdownOpen(false);
    }
    //console.log(location)
  }, [location.pathname]);

  return (
    <div className="flex justify-center items-center bg-gray-900 h-15 gap-3 text-blue-100 font-bold sm:min-w-max sticky sm:sticky top-0 sm:flex-col sm:justify-start sm:gap-8 sm:items-start sm:p-4 sm:h-screen">

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
          className="cursor-pointer gap-2 sm:flex-col sm:relative"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="flex justify-between items-center gap-2">
            <NavLink
              // onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold flex justify-center items-center gap-2 transition-all"
                  : "flex justify-center items-center gap-2 hover:text-blue-400 transition-all"
              }
              to="/project"
            ><FaFolderOpen />Projects
            </NavLink>
          {/* Arrow Icon */}
            <div 
              className={"transform transition-transform duration-200 " + (isDropdownOpen ? "rotate-90" : "")}
            ><FaChevronRight />
            </div>
          </div>
          {isDropdownOpen && (
            <div className="absolute top-full rounded-md shadow-lg w-max sm:relative sm:top-3 sm:left-3">
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
                    to="/project/project2"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 font-bold"
                        : "text-white hover:text-blue-400 transition-all"
                    }
                  >
                    Project 2
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
