import React from "react";

import { NavLink } from "react-router-dom";
const index = () => {
  return (
    <>
      <div className="mt-5 ">
        <div className="flex w-[80%] m-auto">
          <div className="flex justify-center sm:justify-start w-full sm:w-auto">
            <img
              src="Sleek_Logo.svg"
              alt="company logo"
              className="w-1/2 md:w-32 h-auto"
            />
          </div>
          <div className=" flex justify-center items-center space-x-4 sm:w-full">
            <ul className="hidden sm:flex justify-around space-x-6   text-[#181919]">
              <NavLink to="/">
                <li className="1item">Home</li>
              </NavLink>
              <NavLink to="/services">
                <li className="2item">Services</li>
              </NavLink>
              <NavLink to="/contactus">
                <li className="3item">Contact Us</li>
              </NavLink>
              <NavLink to="/faqs">
                <li className="4item">FAQ</li>
              </NavLink>
              <NavLink to="/blog">
                <li className="5item">Blog</li>
              </NavLink>
              <NavLink to="/instantmain">
                <li className="5item">Instant Quote</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="w-full text-center sm:bg-[#010066] bg-white">
          <p className="uppercase sm:text-white text-black text-xs md:text-sm">
            Copyright by Company name Online 2024. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default index;
