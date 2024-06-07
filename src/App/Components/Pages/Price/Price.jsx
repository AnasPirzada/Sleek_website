import React, { useEffect, useState } from 'react';
import Navbar from '../../Narbar/index';

const Price = () => {
  const [activeDiv, setActiveDiv] = useState(null);

  const handleClick = id => {
    setActiveDiv(id === activeDiv ? null : id);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeOptionYouHaveLIFTS, setSelectedValue] = useState('');
  const [deliveryValues, setSelecteddeliveryValues] = useState('');
  const [selectedVehicleDuration, setSelectedVehicleDurationValue] =
    useState('');

  useEffect(() => {
    const activeOptionYouHaveLIFTS = JSON.parse(
      sessionStorage.getItem('YouHaveLIFTS')
    );
    const deliveryValues = JSON.parse(sessionStorage.getItem('deliveryValues'));
    const selectedVehicleDuration = JSON.parse(
      sessionStorage.getItem('selectedVehicleDuration')
    );

    setSelectedValue(activeOptionYouHaveLIFTS);
    setSelecteddeliveryValues(deliveryValues);
    setSelectedVehicleDurationValue(selectedVehicleDuration);
  }, []);
  // calculate distance
  const collectionAddressDistance = 180;
  const deliveryAddressDistance = 150;
  const totalDistance = collectionAddressDistance + deliveryAddressDistance;

  // Other Totole Amount on totalDistance
  const permileprie = 1.15;
  const totalAmount = totalDistance * permileprie;
  const roundedTotalAmount = Math.round(totalAmount);

  return (
    <>
      <Navbar />
      <section className='px-5 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-[280px] border border-red-500'>
        <div className='pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-[120px]'>
          <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] leading-tight text-[#E97B08] text-center'>
            Price Breakdown
          </h1>
        </div>
        <div className='mt-5 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-[80px] bg-[#F5F5F5] rounded-xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex flex-col justify-between'>
          <div className='rounded-xl py-6 sm:py-8 md:py-10'>
            <div className='justify-between flex'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Lift Availability
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                {activeOptionYouHaveLIFTS}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <div className='rounded-xl'>
            <div className='justify-between flex'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Booking Time
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                {selectedVehicleDuration}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <div className='rounded-xl py-6 sm:py-8 md:py-10'>
            <div className='justify-between flex'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Total Distance
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                {totalDistance} mile's{' '}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <div className='rounded-xl'>
            <div className='justify-between flex'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Mileage Charges
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                £ {roundedTotalAmount}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <div className='rounded-xl py-6 sm:py-8 md:py-10'>
            <div className='justify-between flex'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Drop-off-stairs
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                £30
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <div className='rounded-xl'>
            <div className='justify-between flex'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Pickup-stairs
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                £20
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <div className='rounded-xl py-6 sm:py-8 md:py-10'>
            <div className='justify-between flex'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Helping Loading & Unloading
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                {deliveryValues}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <div className='rounded-xl sm:mb-8 md:mb-10 xl:mb-10 2xl:mb-10 lg:mb-10'>
            <div className='justify-between flex'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Driver Time Charges
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                £136.00
              </p>
            </div>
          </div>
        </div>
        <div className=' px-5 sm:px-12 py-4 '>
          <p className=' text-normal text-base leading-[24px] text-[#E97B08]'>
            ANY ADDITIONAL TIME WILL BE CHARGED AT Hour £42.50 Per Half
          </p>
        </div>
        <div className='px-5 sm:px-12 pt-[18px]'>
          <div className=' flex justify-between'>
            <h2 className=' font-semibold text-lg sm:text-2xl'>Total Cost</h2>
            <p className=' font-medium text-lg sm:text-2xl'>£428.00</p>
          </div>
          <div className=' flex justify-between py-4'>
            <h2 className='font-semibold text-lg sm:text-2xl'>
              To Pay now{' '}
              <span className=' text-base font-normal leading-[24px]'>
                (10% deposit)
              </span>
            </h2>
            <p className=' font-medium text-lg sm:text-2xl'>£42.80</p>
          </div>
        </div>
        <div className=' pt-6 px-5 sm:px-12'>
          <h1 className='font-semibold text-lg sm:text-2xl text-[#181919] leading-[29.5px]'>
            Choose the payment method
          </h1>
          <div className=' flex flex-col md:flex-row gap-6 pt-5'>
            <div className='flex gap-2 items-center'>
              <div
                id='div1'
                className={`h-[26px] w-[26px] border-2 flex justify-center items-center text-center rounded-full ${
                  activeDiv === 'div1' ? 'active' : ''
                }`}
                onClick={() => handleClick('div1')}
                style={{
                  borderColor: activeDiv === 'div1' ? '#E97B08' : 'black',
                  backgroundColor: activeDiv === 'div1' ? '' : 'white',
                  height: activeDiv === 'div1' ? '26px' : '26px',
                  width: activeDiv === 'div1' ? '26px' : '26px',
                }}
              >
                <div
                  className={`h-[15px] w-[15px] rounded-full ${
                    activeDiv === 'div1' ? 'active' : ''
                  }`}
                  style={{
                    backgroundColor: activeDiv === 'div1' ? '#E97B08' : '',
                  }}
                ></div>
              </div>
              <img src='logos_stripe.svg' alt='' />
            </div>

            <div className='flex gap-2 items-center'>
              <div
                id='div2'
                className={`h-[26px] w-[26px] border-2 flex justify-center items-center text-center rounded-full ${
                  activeDiv === 'div2' ? 'active' : ''
                }`}
                onClick={() => handleClick('div2')}
                style={{
                  borderColor: activeDiv === 'div2' ? '#E97B08' : 'black',
                  backgroundColor: activeDiv === 'div2' ? '' : 'white',
                  height: activeDiv === 'div2' ? '26px' : '26px',
                  width: activeDiv === 'div2' ? '26px' : '26px',
                }}
              >
                <div
                  className={`h-[15px] w-[15px] rounded-full ${
                    activeDiv === 'div2' ? 'active' : ''
                  }`}
                  style={{
                    backgroundColor: activeDiv === 'div2' ? '#E97B08' : '',
                  }}
                ></div>
              </div>
              <img src='paypallogo.svg' alt='' />
            </div>
          </div>
          <div className='flex justify-center text-center items-center py-20'>
            <button className='bg-[#E97B08] h-[54px] w-[220px] text-[#FFFFFF] shadow-md rounded-lg'>
              Pay Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
