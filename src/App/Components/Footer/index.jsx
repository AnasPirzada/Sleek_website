import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getActiveClass = (isActive) => {
    return isActive
      ? "text-[#E97B08] text-[15px] font-bold"
      : "text-[#181919] font-medium text-[15px]";
  };

  return (
    <div className="mt-10">
      <div className="flex w-[80%] m-auto">
        <div className="flex justify-center sm:justify-start w-full sm:w-auto">
          <img
            src="Sleek_Logo.svg"
            alt="company logo"
            className="w-1/2 md:w-32 h-auto"
          />
        </div>
        <div className="flex justify-center items-center space-x-4 sm:w-full">
          <ul className="hidden sm:flex justify-around space-x-6 text-[#181919]">
            <NavLink
              to="/"
              className={({ isActive }) => getActiveClass(isActive)}
            >
              <li className="1item">Home</li>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => getActiveClass(isActive)}
            >
              <li className="2item">Services</li>
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive }) => getActiveClass(isActive)}
            >
              <li className="3item">Contact Us</li>
            </NavLink>
            <NavLink
              to="/faqs"
              className={({ isActive }) => getActiveClass(isActive)}
            >
              <li className="4item">FAQ</li>
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => getActiveClass(isActive)}
            >
              <li className="5item">Blog</li>
            </NavLink>
            <NavLink
              to="/instantQuotes"
              className={({ isActive }) => getActiveClass(isActive)}
            >
              <li className="5item">Instant Quote</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="w-full text-center sm:bg-[#010066] bg-white mt-3">
        <p className="uppercase sm:text-[#ECECEC]  text-[#444545] text-xs md:text-sm ">
          Copyright by Company name Online 2024. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Navbar;
