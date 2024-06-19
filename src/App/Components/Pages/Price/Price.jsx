import emailjs from 'emailjs-com';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Narbar/index.jsx';
const Price = () => {
  const [activeDiv, setActiveDiv] = useState(null);
  const handleClick = id => {
    setActiveDiv(id === activeDiv ? null : id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeOptionYouHaveLIFTS, setSelectedValue] = useState('');
  const [selectedVehicleDuration, setSelectedVehicleDurationValue] =
    useState('');
  const [totalDistance, setSelectedSelectedtotalDistance] = useState('');
  const [distanceInMiles, setSelecteddistanceInMilesValue] = useState('');
  const [totalRatepermile, setSelectedSelectedtotalRatepermile] = useState('');
  const [PickupAmount, setSelectedPickupAmount] = useState('');
  const [deliveryValues, setSelecteddeliveryValues] = useState('');
  const [DropOffAmount, setSelectedDropOffAmount] = useState('');

  const [deliveryStairsValue, setDeliveryStairsValue] = useState(0);
  const [pickupStairsValue, setPickupStairsValue] = useState(0);
  const [selectedVehicleValue, setVehicle] = useState(0);
  const [TotalAmount, setsTotalAmount] = useState(0);
  const [DrivervalueCharges, setssavedDrivervalueCharges] = useState(0);
  const [selecteddeliveryValues, setdeliveryValues] = useState(0);

  const location = useLocation();
  console.log('Totoal Distance', distanceInMiles);
  // const { distanceInMiles } = location.state || { distanceInMiles: 0 };
  const roundedDistance = Math.round(distanceInMiles);

  useEffect(() => {
    const savedActiveOptionYouHaveLIFTS = JSON.parse(
      sessionStorage.getItem('YouHaveLIFTS')
    );
    const savedDeliveryValues = JSON.parse(
      sessionStorage.getItem('deliveryValues')
    );
    const savedSelectedVehicleDuration = JSON.parse(
      sessionStorage.getItem('selectedVehicleDuration')
    );
    const savedSelectedtotalDistance = JSON.parse(
      sessionStorage.getItem('totalDistance')
    );
    const savedSelectedtotalRatepermile = JSON.parse(
      sessionStorage.getItem('totalRatepermile')
    );
    const savedSelectedPickupAmount = JSON.parse(
      sessionStorage.getItem('PickupAmount')
    );
    const savedSelecteddeliveryValues = JSON.parse(
      sessionStorage.getItem('deliveryValues')
    );
    const savedSelectedDropOffAmount = JSON.parse(
      sessionStorage.getItem('DropOffAmount')
    );

    const savedSelecteddistanceInMiles = JSON.parse(
      sessionStorage.getItem('distanceInMiles')
    );
    const savedSelectedStairsValue = JSON.parse(
      sessionStorage.getItem('DeliverySTAIRS')
    );
    const savedPickupStairsValue = JSON.parse(
      sessionStorage.getItem('PICKUPSTAIRS')
    );
    const savedSelectedVehicle = JSON.parse(
      sessionStorage.getItem('selectedVehicle')
    );
    const saveddeliveryValues = JSON.parse(
      sessionStorage.getItem('deliveryValues')
    );
    const savedTotalAmount = JSON.parse(sessionStorage.getItem('TotalAmount'));
    const savedDrivervalueCharges = JSON.parse(
      sessionStorage.getItem('DrivervalueCharges')
    );

    setSelectedValue(savedActiveOptionYouHaveLIFTS);
    setSelecteddeliveryValues(savedDeliveryValues);
    setSelectedVehicleDurationValue(savedSelectedVehicleDuration);
    setSelectedSelectedtotalDistance(savedSelectedtotalDistance);
    setSelectedSelectedtotalRatepermile(savedSelectedtotalRatepermile);
    setSelectedPickupAmount(savedSelectedPickupAmount);
    setSelecteddeliveryValues(savedSelecteddeliveryValues);
    setSelectedDropOffAmount(savedSelectedDropOffAmount);
    setSelecteddistanceInMilesValue(savedSelecteddistanceInMiles);
    setDeliveryStairsValue(savedSelectedStairsValue);
    setPickupStairsValue(savedPickupStairsValue);
    setVehicle(savedSelectedVehicle);
    setsTotalAmount(savedTotalAmount);
    setssavedDrivervalueCharges(savedDrivervalueCharges);
  }, []);
  console.log('Pick Up Stairs', pickupStairsValue);
  console.log('Devlivery Stairs', deliveryStairsValue);
  console.log('deliveryValues', selecteddeliveryValues);
  console.log('car', selectedVehicleValue);
  let depositAmount;
  let TotalDespositedAmount;
  depositAmount = 0.1 * TotalAmount;

  // TotalDespositedAmount=TotalAmount-depositAmount
  const [activeOptionPaymentMethod, setActivePaymentMethod] = useState(null);

  const handleOptionPaymentMethod = method => {
    setActivePaymentMethod(method);
    console.log(`Selected payment method: ${method}`);
  };
  // Getting Click result
  // Seeting Email Sending
  const [recipientEmail, setRecipientEmail] = useState('');

  emailjs.init('yx1PsFh4noFbGOEmj');

  useEffect(() => {
    // Fetch email from sessionStorage and update state if necessary
    const savedEmail = sessionStorage.getItem('Email');
    if (savedEmail) {
      setRecipientEmail(savedEmail);
    }
  }, []);

  const sendEmail = () => {
    const emailContent = formatEmailContent();
    const templateParams = {
      to_email: recipientEmail,
      message: emailContent,
    };

    emailjs.send('service_cm4t99h', 'template_5y4f81g', templateParams).then(
      response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      },
      error => {
        console.error('FAILED...', error);
        alert('Failed to send email.');
      }
    );
  };
  const formatEmailContent = () => {
    return `
    Hello,
  
    You got a new message from the Createex team:
  
    **Price Breakdown:**
    - Lift Availability: ${activeOptionYouHaveLIFTS}
    - Booking Time: ${selectedVehicleDuration}
    - Total Distance: ${totalDistance} mile's
    - Mileage Charges: £${
      !isNaN(parseFloat(totalRatepermile))
        ? parseFloat(totalRatepermile).toFixed(1)
        : 'Invalid amount'
    }
    - Drop-off-stairs: £${DropOffAmount}
    - Pickup-stairs: £${PickupAmount}
    - Helping Loading & Unloading: ${deliveryValues}
  
    **ANY ADDITIONAL TIME WILL BE CHARGED AT £42.50 Per Half Hour**
  
    **Total Cost: £${TotalAmount}**
    **To Pay now (10% deposit): £${depositAmount.toFixed(1)}**
  
    Best wishes,
    Createex team
  `;
  };

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
                {totalDistance} mile's
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
                £
                {!isNaN(parseFloat(totalRatepermile))
                  ? parseFloat(totalRatepermile).toFixed(1)
                  : 'Invalid amount'}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <div className='rounded-xl py-6 sm:py-8 md:py-10'>
            <div className='justify-between flex'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Drop-off-stairs{' '}
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                £{DropOffAmount}
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
                £{PickupAmount}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <div className='rounded-xl'>
            <div className='justify-between flex pt-10'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Helping Loading & Unloading{' '}
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                {deliveryValues}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <div className='rounded-xl'>
            <div className='justify-between flex pt-10'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Driver Time Charges
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                £{DrivervalueCharges}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>{' '}
          <div className='rounded-xl'>
            <div className='justify-between flex pt-10'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                For Extra Time
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                £42.50 Per Half Hour
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <p className='my-10 text-[#E97B08] text-base'>
            ANY ADDITIONAL TIME WILL BE CHARGED AT Hour £42.50 Per Half
          </p>
          <div className=' flex justify-between pt-10'>
            <h2 className=' font-semibold text-lg sm:text-2xl'>Total Cost</h2>
            <p className=' font-medium text-lg sm:text-2xl'>£{TotalAmount}</p>
          </div>
          <div className=' flex justify-between py-6'>
            <h2 className='font-semibold text-lg sm:text-2xl'>
              To Pay now{' '}
              <span className=' text-base font-normal leading-[24px]'>
                (10% deposit)
              </span>
            </h2>
            <p className=' font-medium text-lg sm:text-2xl '>
              £{depositAmount.toFixed(1)}
            </p>
            {/* <p className=' font-medium text-lg sm:text-2xl'>£{TotalDespositedAmount}</p> */}
          </div>
          <div className='my-10'>
            <p className='text-[#181919] text-[24px] '>
              Choose the payment method{' '}
            </p>

            <div className='flex gap-5 pt-6'>
              <div className='flex gap-3 items-center'>
                <div
                  className={`h-[24px] w-[24px] border-2 rounded-full flex justify-center items-center text-center cursor-pointer ${
                    activeOptionPaymentMethod === 'Stripe'
                      ? 'border-[#E97B08]'
                      : 'border-black'
                  }`}
                  onClick={() => handleOptionPaymentMethod('Stripe')}
                >
                  <div
                    className={`h-[16px] w-[16px] rounded-full ${
                      activeOptionPaymentMethod === 'Stripe'
                        ? 'bg-[#E97B08]'
                        : 'bg-white'
                    }`}
                  ></div>
                </div>
                <img src='/Strip.svg' alt='Stripe' />
              </div>
              <div className='flex gap-3 items-center'>
                <div
                  className={`h-[24px] w-[24px] border-2 rounded-full flex justify-center items-center text-center cursor-pointer ${
                    activeOptionPaymentMethod === 'Paypal'
                      ? 'border-[#E97B08]'
                      : 'border-black'
                  }`}
                  onClick={() => handleOptionPaymentMethod('Paypal')}
                >
                  <div
                    className={`h-[16px] w-[16px] rounded-full ${
                      activeOptionPaymentMethod === 'Paypal'
                        ? 'bg-[#E97B08]'
                        : 'bg-white'
                    }`}
                  ></div>
                </div>
                <img src='/Frame 109.png' alt='Paypal' />
              </div>
            </div>

            <div className='text-center my-5'>
              <button
                onClick={sendEmail}
                className='py-2 px-5 rounded-md text-[#FFFFFF] bg-[#E97B08] shadow-lg'
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
