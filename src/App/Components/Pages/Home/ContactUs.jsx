// File: src/components/ContactUs.js

import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white mt-16 ">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">CONTACT US</h1>
      <div className="w-full bg-orange-500 p-6 flex flex-col md:flex-row justify-around text-white">
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2">CALL CENTER</h2>
          <p>074-6287-7455</p>
          <p>074-5591-1888</p>
          <p>020-3417-6141</p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2">WORKING</h2>
          <p>MON - SAT 7AM-5PM</p>
          <p>SUNDAY 9AM-5PM</p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2">OUR LOCATION</h2>
          <p>ADDRESS</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
