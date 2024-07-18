// File: src/components/ContactUs.js

import React from 'react';

const ContactUs = () => {
  return (
    <div className='flex flex-col items-center  bg-white mt-5 sm:mt-10'>
      <h1 className='sm:text-4xl text-xl font-bold text-blue-900 mb-8'>
        CONTACT US
      </h1>
      <div className='w-full bg-orange-500 p-10 flex flex-col md:flex-row justify-around text-white sm:p-6'>
        <div className='text-center mb-4 md:mb-0'>
          <h2 className='text-lg font-bold mb-2'>CALL CENTER</h2>
          <p>07462877455</p>
          <p>07455911888</p>
          <p>02034176141</p>
        </div>
        <div className=' sm:w-[56px] w-[300px]   border-b-2 sm:border-b-0 sm:border-l-2 '></div>

        <div className='text-center mb-4 md:mb-0'>
          <h2 className='text-lg font-bold mb-2'>WORKING</h2>
          <p>Mon – Fri: 7AM – 10PM</p>
          <p>Sat: 8AM – 10PM</p>
          <p>Sun: 8AM – 10PM</p>
        </div>
        <div className=' w-[300px] sm:w-[56px] text-center border-b-2 sm:border-b-0 sm:border-l-2  '></div>
        <div className='text-center'>
          <h2 className='text-lg font-bold mb-2'>OUR LOCATION</h2>
          <p>9 Dallas Road Sydenham London SE26 6JP</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
