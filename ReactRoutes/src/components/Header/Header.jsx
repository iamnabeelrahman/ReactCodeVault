import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6 ml-12">
          <ul className="flex space-x-6">
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
        </div>
      </nav>

      {/* Mobile Menu (when menu is open) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-50 p-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink
                to="/"
                className="text-purple-600 hover:text-orange-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-pink-500 hover:text-orange-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-blue-600 hover:text-orange-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/github"
                className="text-purple-600 hover:text-pink-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Github
              </NavLink>
            </li>
            <li>
              <Link
                to="#"
                className="text-purple-700 hover:bg-purple-100 px-4 py-2 rounded-md transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 px-4 py-2 rounded-md transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
