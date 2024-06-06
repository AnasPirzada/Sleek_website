import React from 'react';

const DateTime = () => {
  return (
    <>
      <div className='pt-5 text-[16px] font-[500]'>I'm planning to move on</div>
      <div className='pt-5 flex gap-3'>
        <div className='bg-[#ECECEC] flex justify-around items-center text-center px-3 py-2 rounded-lg'>
          <input
            type='date'
            placeholder='Date_Time'
            className='bg-transparent'
          />
        </div>
        <div className='bg-[#ECECEC] flex justify-around items-center text-center px-3 py-2 rounded-lg'>
          <input type='time' placeholder='Time' className='bg-transparent' />
        </div>
      </div>
    </>
  );
};

export default DateTime;
