import React from 'react';

const Input = ({ Name, inputType, NameInput, NamInput, inputProps }) => {
  return (
    <>

      <div className='pt-6 md:pt-8 lg:pt-10'>
        <h1 className='text-lg md:text-xl lg:text-2xl text-[#000000] font-medium'>

      <div className="pt-6 md:pt-8 lg:pt-10 h-screen">
        <h1 className="text-lg md:text-xl lg:text-2xl text-[#000000] font-medium">

          {Name}
          <span className='text-sm md:text-base lg:text-lg leading-[19.36px] text-[#E97B08] font-medium px-2'>
            Edit
          </span>
        </h1>
      </div>
      <div className='pt-6 flex flex-col md:flex-row flex-wrap gap-4 justify-between'>
        <div className='flex-1 pt-2 flex flex-col'>
          <h2 className='py-2 text-sm md:text-base lg:text-lg'>Postcode</h2>
          <input
            type={inputType}
            placeholder={inputProps.placeholder}
            className='h-[40px] w-full md:w-auto bg-[#ECECEC] rounded'
          />
        </div>
        <div className='flex-1 pt-2 flex flex-col'>
          <h2 className='py-2 text-sm md:text-base lg:text-lg'>
            Street Address
          </h2>
          <input
            type='text'
            placeholder={inputProps.placeholder}
            className='h-[40px] w-full md:w-auto bg-[#ECECEC] rounded'
          />
        </div>
        <div className='flex-1 pt-2 flex flex-col'>
          <h2 className='py-2 text-sm md:text-base lg:text-lg'>City</h2>
          <input
            type='text'
            placeholder={inputProps.placeholder}
            className='h-[40px] w-full md:w-auto bg-[#ECECEC] rounded'
          />
        </div>
        <div className='flex-1 pt-2 flex flex-col'>
          <h2 className='py-2 text-sm md:text-base lg:text-lg'>Helo</h2>
          <select className='h-[40px] w-full md:w-auto bg-[#ECECEC] rounded'>
            <option value='yes'>Yes</option>
            <option value='no'>are no flights of stairs</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Input;
