import React from 'react';
import { Link } from 'react-router-dom';
const Cards = props => {
  const { icon, heading, paragraph } = props;
  return (
    <>
      <Link to='/'>
        <div class='grid grid-cols-1 rounded-sm hover:text-white hover:bg-[#E97B08] '>
          <div class='shadow-xl  rounded-lg p-4 flex flex-col items-center justify-center gap-4 '>
            <img src={icon} alt='Call Icon' class='w-12 mx-auto mb-2' />
            <h1 class='text-center text-lg xl:text-1xl sm:text-sm  font-semibold'>
              {heading}
            </h1>
            <div class='text-center text-sm 2xl:text-lg sm:text-sm'>
              {paragraph}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
