import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { adminDataContext } from "../context/AdminContext";
import logo from "../assets/logo-1.jpg";
const Header = () => {
  const navigate = useNavigate();

  const { admin, logout } = useContext(adminDataContext);
  // console.log("user:", admin);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-[5px] text-2xl font-bold text-indigo-600 flex-shrink-0">
            <img src={logo} alt="" className="w-[90px]" />
            <p className="font-bold">Forever</p>
          </div>

          {/* Right section with admin info and logout */}
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-[#67c090] rounded-xl text-white font-medium flex items-center">
              {admin ? admin : ""}
            </div>
            <button
              className="flex items-center justify-center border border-gray-300 rounded-2xl hover:bg-[#124170] hover:text-white hover:border-blue-500 transition-colors duration-200 p-2 cursor-pointer"
              onClick={() => {
                logout(), navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
