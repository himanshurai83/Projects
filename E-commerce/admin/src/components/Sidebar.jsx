import React from "react";
import { NavLink } from "react-router";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";

function Sidebar() {
  return (
    <div className="w-[20vw] h-[100vh] fixed left-0 bg-[#5e936c] flex flex-col items-center p-3 gap-4 shadow-lg">
      <NavLink
        to="/add"
        className={({ isActive }) =>
          `flex items-center gap-[20px] w-full p-3 text-center border border-transparent rounded-lg hover:bg-[#3e5f44] hover:border-white transition duration-200 cursor-pointer text-white font-semibold shadow-sm ${
            isActive ? "bg-[#064232]" : ""
          }`
        }
      >
        <IoAddCircleOutline />
        Add
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-[20px] w-full p-3 text-center border border-transparent rounded-lg hover:bg-[#3e5f44] hover:border-white transition duration-200 cursor-pointer text-white font-semibold shadow-sm ${
            isActive ? "bg-[#064232] hover:" : ""
          }`
        }
      >
        <FaListUl />
        Home
      </NavLink>
      <NavLink
        to="/order"
        className={({ isActive }) =>
          `flex items-center gap-[20px] w-full p-3 text-center border border-transparent rounded-lg hover:bg-[#3e5f44] hover:border-white transition duration-200 cursor-pointer text-white font-semibold shadow-sm ${
            isActive ? "bg-[#064232]" : ""
          }`
        }
      >
        <GrStatusGood />
        Orders
      </NavLink>
    </div>
  );
}

export default Sidebar;
