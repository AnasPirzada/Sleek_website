import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../../utils/data";
export const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };
  const getActiveClass = (isActive) => {
    return isActive
      ? "text-[#E97B08] md:text-xs lg:text-sm text-sm font-bold "
      : "text-[#FFFF] font-medium md:text-xs lg:text-sm text-sm ";
  };
  return (
    <>
      <div className="flex justify-between items-center relative w-full">
        <div className="hidden md:flex justify-between items-center w-full h-full border-b-8 border-[#E97B08] ">
          <div class="mx-auto md:mx-0 lg:mx-2">
            <img
              src="/Sleek_Logo.svg"
              alt="Sleek Logo"
              className="w-40 md:w-48 lg:w-40 xl:w-48 2xl:w-56"
            />
          </div>

          <div className="w-full h-[140px] bg-NavBar flex justify-start items-center relative">
            <div className="absolute w-11/12 md:w-5/6 lg:w-5/6 2xl:w-4/6 top-0 left-0 right-0 mx-auto -mt-18 flex justify-between items-center">
              <div className="w-50"></div>
              <div className="flex justify-between items-center  me-10 mt-5">
                <img src="/bxs_phone-call.svg" alt="Phone Icon" />
                <div className="flex justify-between items-center">
                  <p className="mx-10 text-white">074-6287-7455</p>
                  <p className="text-white">074-5591-1888</p>
                  <p className="ms-10 text-white">020-3417-6141</p>
                </div>
              </div>
            </div>

            <div className="ps-20 md:ps-12 xl:ms-20 2xl:ms-40 3xl:ms-60 mt-12 uppercase ">
              <div className="flex md:gap-3 lg:gap-4 gap-5 justify-between items-center">
                {/* Your desktop navigation code */}
                {navLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    className={(e) => getActiveClass(e.isActive)}
                    to={link.route}
                  >
                    {link.text}
                  </NavLink>
                ))}
                <div className="relative">
                  <NavLink
                    onClick={toggleDropdown1}
                    className="cursor-pointer text-[#FFFFFF]"
                  >
                    Reviews 
                  </NavLink>
                  {dropdown1Open && (
                    <div className="absolute bg-white mt-1 p-2 shadow-lg rounded-md">
                      {/* Dropdown 1 content */}
                      <NavLink
                        to="https://uk.trustpilot.com/review/sleekassuredremovals.com"
                        href=""
                        className="text-[12px] text-nowrap"
                      >
                        TrustPilot review <br />
                      </NavLink>
                      <NavLink
                        to="https://www.google.com/search?q=sleekassuredremovals&oq=sleekassuredremovals&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDzSAQg2MzkyajBqNKgCALACAA&sourceid=chrome&ie=UTF-8"
                        className="text-[12px] text-nowrap my-1"
                      >
                        Google Reviews
                      </NavLink>
                    </div>
                  )}
                </div>
                <Link to="/contactus">
                  <button className="rounded-[8px] bg-[#E97B08] text-[#FFFFFF] text-[16px] py-[12px] px-[40px]">
                    Contact
                  </button>
                </Link>

                <a
                  href="https://www.facebook.com/sleekassuredremovals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/ri_facebook-fill.svg" alt="" />
                </a>
                <a
                  href="https://www.instagram.com/sleekassuredremovals/?igsh=bzNkZWVqM2Jyd3kz&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img src="/Layer_1.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Design */}
      <div className="block  md:hidden w-[100%] relative z-[5] ">
        <div className="flex items-center p-4  bg-[#010066] border-b-4 border-[#E97B08]">
          <div className="w-[20px] ">
            <img
              src={menuOpen ? "/ic_round-arrow-back.svg" : "/ic_round-menu.svg"}
              alt="Menu Icon"
              className="cursor-pointer "
              onClick={toggleMenu}
            />
          </div>
          <div className="ms-20">
            <p className="text-white uppercase Inter text-[14px] font-[500]">
              sleek assured removals
            </p>
          </div>
        </div>
        {menuOpen ? (
          <div className="absolute top-15 left-0 w-[320px]  h-full border-lg border-gray-600 text-white flex flex-col items-start">
            <div className="bg-white w-[313px]">
              <img
                src="/Sleek_Logo.svg"
                alt="Sleek Logo"
                className="m-10 w-[210px] h-[88px]"
              />
            </div>
            <div className="bg-[#010066]">
              <div className="p-10 w-full rounded-sm">
                <ul className="text-white text-[14px] font-[400]">
                  {navLinks.map((link, index) => (
                    <NavLink
                      key={index}
                      to={link.route}
                      className={(e) => getActiveClass(e.isActive)}
                      onClick={() => setMenuOpen(false)}
                    >
                      <li className="mb-6">{link.text}</li>
                    </NavLink>
                  ))}
                </ul>
                {/* Social icons */}
                <div className="flex gap-4 mt-4">
                  <a
                    href="https://www.facebook.com/sleekassuredremovals"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/facebookIcon.svg"
                      alt="Facebook"
                      className="w-[40px] h-[40px]"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/sleekassuredremovals/?igsh=bzNkZWVqM2Jyd3kz&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/InstaIcon.svg"
                      alt="Instagram"
                      className="w-[40px] h-[40px]"
                    />
                  </a>
                </div>
              </div>

              <div>
                <div className="align-bottom " style={{ marginTop: "200px" }}>
                  <div className="flex justify-center items-center mb-3">
                    <img
                      src="/callIcon.svg"
                      alt="Call Icon"
                      className="w-[24px] h-[24px]"
                    />
                  </div>

                  <div className="text-white  text-[12px] mx-4">
                    <p className="num1">
                      074-6287-7455 &nbsp; 074-5591-1888 &nbsp;020-3417-6141
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Index;
