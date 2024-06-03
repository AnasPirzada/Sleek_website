import React, { useState } from "react";

export const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center relative w-full">
        <div className="hidden md:flex justify-between items-center w-full">
          <div className="ms-24">
            <img src="/Sleek_Logo.svg" alt="Sleek Logo" />
          </div>
          <div className="w-[1021px]   h-[140px] bg-NavBar flex justify-start items-center relative">
            <div className="absolute w-11/12 md:5/6 lg:5/6 2xl:w-4/6 top-0 left-0 right-0 mx-auto -mt-18 flex justify-between items-center">
              <div className="w-50"></div>
              <div className="flex justify-between items-center me-10 mt-5">
                <img src="/bxs_phone-call.svg" alt="Phone Icon" />
                <div className="flex justify-between items-center">
                  <p className="mx-10 text-white">074-6287-7455</p>
                  <p className="text-white">074-5591-1888</p>
                  <p className="ms-10 text-white">020-3417-6141</p>
                </div>
              </div>
            </div>

            <div className="ps-20 mt-12 uppercase ">
              <div className="flex lg:gap-5  justify-between  items-center">
                <p className="text-[#E97B08] font-bold">home</p>
                <p className="text-[#FFFFFF] text-[15px] Inter font-medium">
                  Services
                </p>
                <p className="text-[#FFFFFF] text-[15px] Inter font-medium">
                  FAQ
                </p>
                <p className="text-[#FFFFFF] text-[15px] Inter font-medium">
                  Blog
                </p>
                <p className="text-[#FFFFFF] text-[15px] Inter font-medium">
                  Instant Quote
                </p>
                <p className="text-[#FFFFFF] text-[15px] Inter font-medium">
                  Reviews
                </p>
                <button className="rounded-[8px] bg-[#E97B08] text-[#FFFFFF] text-[16px] py-3 px-8">
                  Contact
                </button>
                <img src="/Layer_1.svg" alt="" />
                <img src="/ri_facebook-fill.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Design */}
      <div className="block z-[5] md:hidden w-[100%] ">
        <div className="flex items-center p-4  bg-[#010066] border-b-">
          <div className="w-[20px] ">
            <img
              src={menuOpen ? "/ic_round-arrow-back.svg" : "/ic_round-menu.svg"}
              alt="Menu Icon"
              className="cursor-pointer"
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
              <div className=" p-10 w-full rounded-sm">
                <ul className="text-white text-[14px]  font-[400]">
                  <li className="mb-6">Home</li>
                  <li className="mb-6">Services</li>
                  <li className="mb-6">FAQ</li>
                  <li className="mb-6">Blog</li>
                  <li className="mb-6">Instant Quote</li>
                  <li className="mb-6">Reviews</li>
                </ul>
                <div className="flex gap-4 mt-4">
                  <img
                    src="/facebookIcon.svg"
                    alt="Facebook"
                    className="w-[40px] h-[40px]"
                  />
                  <img
                    src="/InstaIcon.svg"
                    alt="Instagram"
                    className="w-[40px] h-[40px]"
                  />
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
