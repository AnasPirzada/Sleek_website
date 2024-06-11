import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Index = () => {
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState('');
  const [selectedStairsValue, setSelectedStairsValue] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [deliveryValues, setDeliveryValues] = useState('');
  const [selectedVehicleDuration, setSelectedVehicleDuration] = useState('');
  const [totalDistance, setTotalDistance] = useState(0);
  const [selectedHelp, setselectedHelp] = useState('');

  const mileCharge = 1.15;
  const stairChargePerMan = 5.75;

  const vehicleRates = {
    'small-van': {
      'No Help': 30,
      'Driver Help': 30,
      'Driver + Helper': 60,
      'Driver + 2 Helpers': 130,
    },
    'medium-van': {
      'No Help': 33,
      'Driver Help': 33,
      'Driver + Helper': 60,
      'Driver + 2 Helpers': 150,
    },
    'large-van': {
      'No Help': 35,
      'Driver Help': 35,
      'Driver + Helper': 60,
      'Driver + 2 Helpers': 180,
    },
    'giant-van': {
      'No Help': 65,
      'Driver Help': 70,
      'Driver + Helper': 75,
      'Driver + 2 Helpers': 220,
    },
  };

  useEffect(() => {
    // Parse session storage values
    const storedSelectedValue =
      JSON.parse(sessionStorage.getItem('PICKUPSTAIRS')) || '';
    const DeliverySTAIRS =
      JSON.parse(sessionStorage.getItem('DeliverySTAIRS')) || '';
    const storedSelectedDate =
      JSON.parse(sessionStorage.getItem('selectedDate')) || '';
    const storedSelectedTime =
      JSON.parse(sessionStorage.getItem('selectedTime')) || '';
    const storedSelectedVehicle =
      JSON.parse(sessionStorage.getItem('selectedVehicle')) || '';
    const storedDeliveryValues =
      JSON.parse(sessionStorage.getItem('Delivery Address :')) || '';
    const storedSelectedVehicleDuration =
      JSON.parse(sessionStorage.getItem('selectedVehicleDuration')) || '';

    setSelectedValue(storedSelectedValue);
    setSelectedStairsValue(DeliverySTAIRS);
    setSelectedDate(storedSelectedDate);
    setSelectedTime(storedSelectedTime);
    setSelectedVehicle(storedSelectedVehicle);
    setDeliveryValues(storedDeliveryValues);
    setSelectedVehicleDuration(storedSelectedVehicleDuration);
    setTotalDistance(parseFloat(sessionStorage.getItem('totalDistance')) || 0);
  }, []);

  const vehicle = selectedVehicle;
  const deliveryHelp = deliveryValues;
  const perHour = selectedVehicleDuration;
  const distance = totalDistance;
  const DropOffStairs = selectedStairsValue;
  const PickupStairs = selectedValue;

  // Calculate the total amount
  const calculateTotalAmount = (
    vehicle,
    deliveryHelp,
    perHour,
    distance,
    DropOffStairs,
    PickupStairs
  ) => {
    const perHourRate = vehicleRates[vehicle][deliveryHelp];
    const totalHourlyCharge = perHour * perHourRate;
    const totalMileCharge = distance * mileCharge;
    const totalPickUpCharge = PickupStairs * stairChargePerMan;
    const totalDropOffCharge = DropOffStairs * stairChargePerMan;
    const totalStairCharge = totalPickUpCharge + totalDropOffCharge;
    return totalHourlyCharge + totalMileCharge + totalStairCharge;
  };

  // Calculate total amount
  const totalAmount = calculateTotalAmount(
    selectedVehicle,
    deliveryValues, // Corrected parameter here
    selectedVehicleDuration,
    totalDistance,
    selectedStairsValue,
    selectedValue
  );

  console.log('Total Amount:', totalAmount);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className='text-center uppercase text-[#E97B08] text-3xl font-bold leading-[48.41px]'>
        Your Quote
      </h1>
      <div className='m-10 bg-[#F5F5F5] rounded-lg flex justify-center items-start flex-col'>
        <div className=' leading-[50px] px-5 py-5'>
          <p className='text-base	font-[400]'>
            You are moving from &nbsp;
            <span className='font-semibold	'>{selectedValue}</span> to &nbsp;
            <span className='font-semibold	'>
              {selectedStairsValue} (no stairs).
            </span>
          </p>
          <p className='text-base	 py-3'>
            On <span className='font-semibold	'> {selectedDate} </span>at
            <span className='font-semibold	'> {selectedTime}</span> we will send
            a <span className='font-semibold	'>{selectedVehicle}</span> for{' '}
            <span className='font-semibold	'> {selectedVehicleDuration} </span>
            with <span className='font-semibold	'> {deliveryValues} </span>{' '}
            &nbsp;loading it.
          </p>
          <p className='text-base	font-[400] text-[#E97B08]'>
            Pay the payment below by pressing the Book Now button.
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-5 my-20 mx-2'>
        <button className='border-[#E97B08] border  rounded-lg w-[220px] h-[54px] bg-white text-[#E97B08] py-[16px] px-[40px]'>
          Edit
        </button>
        <button
          onClick={() => navigate('/price')}
          className=' bg-[#E97B08] text-white border    w-[220px] h-[54px] px-[40px] rounded-lg'
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Index;
