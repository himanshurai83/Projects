import { useContext, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoSearchCircle } from "react-icons/io5";
import { userDataContext } from "../contexts/UserContent";
import { NavLink, useNavigate } from "react-router";
import logo from "../assets/logo-1.jpg";
import { FcHome } from "react-icons/fc";
import { MdCollections } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const { user, logout, searchProduct, cart } = useContext(userDataContext);
  // console.log("user:", user);

  const handleSearch = (e) => {
    searchProduct(e.target.value);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-[5px] text-2xl font-bold text-indigo-600 flex-shrink-0">
            <img src={logo} alt="" className="w-[90px]" />
            <p className="font-bold">Forever</p>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-[5px] font-semibold text-black p-2 rounded-xl  transition bg-[#bbdce5] ${
                  isActive ? "bg-blue-500" : ""
                }`
              }
            >
              <FcHome className="w-[20px] h-[20px]" />
              HOME
            </NavLink>
            <NavLink
              to="/collections"
              className={({ isActive }) =>
                `flex items-center gap-[5px] text-black font-semibold p-2 rounded-xl transition bg-[#bbdce5] ${
                  isActive ? "bg-blue-500" : ""
                }`
              }
            >
              <MdCollections className="w-[20px] h-[20px]" />
              COLLECTIONS
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center gap-[5px] font-semibold text-black p-2 rounded-xl  transition bg-[#bbdce5] ${
                  isActive ? "bg-blue-500" : ""
                }`
              }
            >
              <FcAbout className="w-[20px] h-[20px]" />
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center gap-[5px] font-semibold text-black p-2 rounded-xl  transition bg-[#bbdce5] ${
                  isActive ? "bg-blue-500" : ""
                }`
              }
            >
              <FcContacts className="w-[20px] h-[20px]" />
              CONTACT
            </NavLink>
          </div>

          <div className="flex space-x-6">
            {!showSearch ? (
              <IoSearchCircleOutline
                className="w-[40px] h-[32px] cursor-pointer"
                onClick={() => {
                  setShowSearch((prev) => !prev);
                  navigate("/collections");
                }}
              />
            ) : (
              <IoSearchCircle
                className="w-[40px] h-[32px] cursor-pointer"
                onClick={() => setShowSearch((prev) => !prev)}
              />
            )}
            {user ? (
              <p
                className="border border-solid p-2 rounded-full bg-black text-white text-xs font-bold cursor-pointer"
                onClick={() => setShowUser((prev) => !prev)}
              >
                {user.username.slice(0, 1)}
              </p>
            ) : (
              <>
                {!showUser ? (
                  <FaRegCircleUser
                    className="w-[40px] h-[25px] cursor-pointer"
                    onClick={() => setShowUser((prev) => !prev)}
                  />
                ) : (
                  <FaCircleUser
                    className="w-[40px] h-[25px] cursor-pointer"
                    onClick={() => setShowUser((prev) => !prev)}
                  />
                )}
              </>
            )}

            <div className="flex">
              <GiShoppingCart
                className="w-[40px] h-[30px] cursor-pointer  hidden md:block"
                onClick={() => navigate("/cart")}
              ></GiShoppingCart>
              <p className="flex items-center justify-center w-[1.3rem] h-[1.3rem] relative right-[15px] bottom-[5px] text-xs font-semibold bg-red-500 text-white rounded-xl pt-[2px] hidden md:block text-center">
                {cart?.length || 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="flex justify-center item-center m-4 bg-[#468a9a] p-1 rounded-xl">
          <input
            type="text"
            placeholder="Search Here"
            className="w-[40%] h-[35px]
            p-4 bg-[#00809d] border-none outline-none rounded-full
            "
            onChange={handleSearch}
          />
        </div>
      )}
      {showUser && (
        <div className="flex justify-center items-center m-4">
          <ul className="flex flex-col gap-2 absolute right-[13%] border border-gray-200 rounded-xl z-20 w-[14rem] bg-white p-3 shadow-xl transition-all duration-300">
            {user ? (
              <li
                className="px-4 py-2 rounded-lg cursor-pointer text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-600 transition-all duration-200 ease-in-out"
                onClick={() => {
                  setShowUser(false);
                  logout();
                  navigate("/login");
                }}
              >
                LOGOUT
              </li>
            ) : (
              <li
                className="px-4 py-2 rounded-lg cursor-pointer text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-600 transition-all duration-200 ease-in-out"
                onClick={() => {
                  setShowUser(false);
                  navigate("/login");
                }}
              >
                LOGIN
              </li>
            )}

            <li
              className="px-4 py-2 rounded-lg cursor-pointer text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-600 transition-all duration-200 ease-in-out"
              onClick={() => {
                setShowUser(false);
                navigate("/order-detail");
              }}
            >
              ORDERS
            </li>

            <li
              className="px-4 py-2 rounded-lg cursor-pointer text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-600 transition-all duration-200 ease-in-out"
              onClick={() => {
                setShowUser(false);
                navigate("/about");
              }}
            >
              ABOUT
            </li>
          </ul>
        </div>
      )}

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md z-20">
        <div className="flex justify-around items-center py-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/collections"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`
            }
          >
            COLLECTION
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`
            }
          >
            CONTACT
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`
            }
          >
            ABOUT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
