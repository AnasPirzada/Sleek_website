// File: src/components/ContactUs.js

import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center  bg-white mt-5 sm:mt-10">
      <h1 className="sm:text-4xl text-xl font-bold text-blue-900 mb-8">
        CONTACT US
      </h1>
      <div className="w-full bg-orange-500 p-10 flex flex-col md:flex-row justify-around text-white sm:p-6">
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2">CALL CENTER</h2>
          <p>074-6287-7455</p>
          <p>074-5591-1888</p>
          <p>020-3417-6141</p>
        </div>
        <div className=" sm:w-[56px] w-[300px]   border-b-2 sm:border-b-0 sm:border-l-2 "></div>

        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2">WORKING</h2>
          <p>MON - SAT 7AM-5PM</p>
          <p>SUNDAY 9AM-5PM</p>
        </div>
        <div className=" w-[300px] sm:w-[56px] text-center border-b-2 sm:border-b-0 sm:border-l-2  "></div>
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2">OUR LOCATION</h2>
          <p>ADDRESS</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
