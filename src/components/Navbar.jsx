import React, { useState } from "react";
import { FaOpencart } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { PiMagnifyingGlass } from "react-icons/pi";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="text-gray-800 py-6 px-6 flex justify-between items-center relative shadow ">
      <div className="text-xl md:text-3xl font-extrabold">
        <Link to="/" className="text-gray-500 hover:text-blue-500">
          True
          <span className="text-gray-700 hover:text-blue-500">EVENTS</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex space-x-8 text-lg">
        <Link to="/" className="text-gray-800 hover:text-blue-500">
          Home
        </Link>

        <Link to="/collection" className="text-gray-800 hover:text-blue-500">
          Events
        </Link>

        <Link to="/about" className="text-gray-800 hover:text-blue-500">
          About
        </Link>

        <Link to="/contact" className="text-gray-800 hover:text-blue-500">
          Contact
        </Link>
      </ul>

      {/* Desktop Icons */}
      <div className="hidden sm:flex space-x-6 text-2xl ">
        <Link to="/collection">
          <PiMagnifyingGlass className="text-gray-800 hover:text-blue-500 cursor-pointer" />
        </Link>
        <FaOpencart className="text-gray-800 hover:text-blue-500 cursor-pointer" />
        <div className="relative group">
          {/* Icon with badge */}
          <div className="cursor-pointer">
            <MdPersonOutline className="text-gray-800 hover:text-blue-500 " />
          </div>

          {/* Dropdown Menu */}
          <div className="absolute text-lg right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out z-50">
            <Link
              to="/signin"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
            >
              Signup
            </Link>
            <Link
              to="/join-us"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Icons + Hamburger */}
      <div className="sm:hidden flex items-center space-x-4 text-2xl">
        <MdPersonOutline className="text-gray-800 hover:text-blue-500 cursor-pointer" />
        <RiMenu3Line className="cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-20 left-0 right-0 bg-white shadow-lg z-10">
          <ul className="text-center py-4 space-y-4 text-xl">
            <li>
              <Link
                to="/"
                className="text-gray-800 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/collection"
                className="text-gray-800 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-800 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
