import React, { useState } from 'react';

export const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex justify-between items-center relative'>
      <div className='hidden md:flex justify-between items-center'>
        <div className='ms-24'>
          <img src='/Sleek_Logo.svg' alt='Sleek Logo' />
        </div>
        <div className='w-[1021px]   h-[140px] bg-NavBar flex justify-start items-center relative'>
          <div className='absolute w-11/12 md:5/6 lg:5/6 2xl:w-4/6 top-0 left-0 right-0 mx-auto -mt-18 flex justify-between items-center'>
            <div className='w-50'></div>
            <div className='flex justify-between items-center me-10 mt-5'>
              <img src='/bxs_phone-call.svg' alt='Phone Icon' />
              <div className='flex justify-between items-center'>
                <p className='mx-10'>074-6287-7455</p>
                <p>074-5591-1888</p>
                <p className='ms-10'>020-3417-6141</p>
              </div>
            </div>
          </div>

          <div className='ps-20 mt-12 uppercase w-11/12 md:5/6 lg:5/6 2xl:w-4/6'>
            <div className='flex justify-between items-center'>
              <p className='text-[#E97B08] font-bold'>home</p>
              <p className='text-[#FFFFFF] text-[15px] Inter font-medium'>
                Services
              </p>
              <p className='text-[#FFFFFF] text-[15px] Inter font-medium'>
                FAQ
              </p>
              <p className='text-[#FFFFFF] text-[15px] Inter font-medium'>
                Blog
              </p>
              <p className='text-[#FFFFFF] text-[15px] Inter font-medium'>
                Instant Quote
              </p>
              <p className='text-[#FFFFFF] text-[15px] Inter font-medium'>
                Reviews
              </p>
              <button className='rounded-[8px] bg-[#E97B08] text-[#FFFFFF] text-[16px] py-3 px-8'>
                Contact
              </button>
              <img src='/Layer_1.svg' alt='' />
              <img src='/ri_facebook-fill.svg' alt='' />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Design */}
      <div className='block md:hidden w-[100%]'>
        <div className='flex items-center p-4  bg-[#010066]'>
          <div>
            <img
              src={menuOpen ? '/ic_round-arrow-back.svg' : '/ic_round-menu.svg'}
              alt='Menu Icon'
              className='cursor-pointer'
              onClick={toggleMenu}
            />
          </div>
          <div className='ms-20'>
            <p className='text-white Inter text-[14px]'>
              sleek assured removals
            </p>
          </div>
        </div>
        {menuOpen && (
          <div className='absolute top-0 left-0 w-full h-full bg-[#010066] text-white flex flex-col items-start p-4'>
          
            <img src='/Sleek_Logo.svg' alt='Sleek Logo' className='my-20' />
            <p className='mb-4'>Home</p>
            <p className='mb-4'>Services</p>
            <p className='mb-4'>FAQ</p>
            <p className='mb-4'>Blog</p>
            <p className='mb-4'>Instant Quote</p>
            <p className='mb-4'>Reviews</p>
            <button className='rounded-[8px] bg-[#E97B08] text-[#FFFFFF] text-[16px] py-3 px-8 mb-4'>
              Contact
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
