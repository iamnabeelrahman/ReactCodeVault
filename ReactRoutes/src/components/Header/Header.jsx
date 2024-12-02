import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="flex justify-between items-center px-6">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid"
              alt="logo"
              className="h-12"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="ml-12">
          <ul className="flex space-x-6 ml-12">
            <li>
              <NavLink
                to="/"
                className="text-purple-600 hover:text-orange-500 transition duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-pink-500 hover:text-orange-500 transition duration-300"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-blue-600 hover:text-orange-500 transition duration-300"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/github"
                className="text-purple-600 hover:text-pink-500 transition duration-300"
              >
                Github
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Login and Get Started */}
        <div className="space-x-4">
          <Link
            to="#"
            className="text-purple-700 hover:bg-purple-100 px-4 py-2 rounded-md transition duration-300"
          >
            Login
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 px-4 py-2 rounded-md transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
