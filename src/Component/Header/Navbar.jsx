import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/55555.jpg";
import { authentication } from "../AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(authentication);

  return (
    <div>
      <div className="navbar border-2 p-5 bg-[#0046BE]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                <NavLink to="/">
                  <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                    Home
                  </li>
                </NavLink>

                <NavLink to="/all_movies">
                  <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                    All-Movie
                  </li>
                </NavLink>
                <NavLink to="/add_movies">
                  <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                    Add-Movie
                  </li>
                </NavLink>

                <NavLink to="/add_Favourites">
                  <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                    Add-Favourite
                  </li>
                </NavLink>

                <NavLink to="/add_us">
                  <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                    Contact Us
                  </li>
                </NavLink>
              </ul>
            </ul>
          </div>
          <Link
            to="/"
            className="text-xs font-bold md:text-3xl flex flex-row gap-0.5 items-center text-white"
          >
            <img className="w-5 md:w-8" src={Logo} alt="" />
            Movie Portal
          </Link>
        </div>
        <div className="px-10  navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <ul className="items-center gap-[50px] text-[1rem] text-gray-600 flex flex-row py-4 px-8 bg-white rounded-full">
              <NavLink to="/">
                <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                  Home
                </li>
              </NavLink>

              <NavLink to="/all_movies">
                <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                  All-Movie
                </li>
              </NavLink>
              <NavLink to="/add_movies">
                <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                  Add-Movie
                </li>
              </NavLink>

              <NavLink to="/add_Favourites">
                <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                  Add-Favourite
                </li>
              </NavLink>

              <NavLink to="/contact_us">
                <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                  Contact Us
                </li>
              </NavLink>
            </ul>
          </ul>
        </div>
        <div className="navbar-end text-xs md:text-2xl cursor-pointer">
          {/* <Link to="/login" className="px-2 py-2 md:px-8 bg-white rounded-full">Register/Login</Link> */}
          {user ? (
            <button onClick={logOut} className="px-2 py-2 md:px-8 bg-white rounded-full cursor-pointer hover:bg-gray-300">LogOut</button>
          ) : (
            <Link
              to="/login"
              className="px-2 py-2 md:px-8 bg-white rounded-full"
            >
              Register/Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
