import React from 'react';

const DeatilSection = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 rounded-0 sm:rounded-[8px] bg-[#E97B08] gap-2 p-3 md:p-16 md:-mt-12'>
        <div>
          <p className='sm:w-[280px] w-[160px] text-sm sm:text-2xl text-white border-b-2 mb-3'>
            Home Removals
          </p>
          <p className='sm:text-base text-xs'>
            Moving from your old home to a new home appears stressful. That is
            why it is important to contact a house removal which offers you a
            stress-free home move service. With our professional movers, all you
            need to do is to have a confirmed booking from our safe and reliable
            website, and we will help you to have a relaxed and a stress-free
            move to your new home. We make sure to offer a removal service that
            will suit your requirements and your budget. Request an instant
            Quote Now. In 3 Simple Steps, Book a Man and Van service in south
            London for Your Move
            <ol className='list-decimal pl-4 mt-2'>
              <li>
                Tell us what you need moved and get an instant online quote.
              </li>
              <li>Confirm with us your reservation/booking, date, and time.</li>
              <li>
                Sit back and let our trustworthy and highly skilled team help
                you move with absolute care and respect.
              </li>
            </ol>
          </p>
        </div>
        <div className='grid grid-cols-1 gap-2'>
          <div>
            <p className='sm:w-[280px] w-[160px] text-sm sm:text-2xl text-white border-b-2 mb-3'>
              STORAGE & REMOVAL
            </p>
            <p className='sm:text-base text-xs'>
              At times it is very frustrating to get a van with a driver to pick
              up and deliver your valuable item/items safely. Sleek Assured
              Removals is a reliable company that can pick up your items from
              any location and deliver them to you safely without you going
              through the hassle. You can request a quote from us now.
            </p>
          </div>
          <div>
            <p className='sm:w-[280px] w-[160px] text-sm sm:text-2xl text-white border-b-2 mb-3'>
              MAN & VAN
            </p>
            <p className='sm:text-base text-xs'>
              Our Man and Van service in London is easy with our free instant
              hire quotes and fast booking.
            </p>
          </div>
          <div>
            <p className='sm:w-[280px] w-[160px] text-sm sm:text-2xl text-white border-b-2 mb-3'>
              PICK UP & DELIVERY
            </p>
            <p className='sm:text-base text-xs'>
              Are you concerned about moving your bulky dining table or leather
              sofa? Sleek Assured Removals is the perfect solution. Equipped
              with Luton vans tailored for large items, you can rest assured
              your furniture will reach its destination safely.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeatilSection;
