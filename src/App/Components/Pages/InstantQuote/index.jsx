import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Index = () => {
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState('');
  const [selectedStairsValue, setSelectedStairsValue] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedHelp, setSelectedHelp] = useState('');
  const [DeliverySTAIRS, setDeliveryValues] = useState('');
  const [selectedVehicleDuration, setSelectedVehicleDuration] = useState('');
  const [deliveryValues, setdeliveryValues] = useState('');

  useEffect(() => {
    const storedSelectedValue = JSON.parse(
      sessionStorage.getItem('PICKUPSTAIRS')
    );
    const DeliverySTAIRS = JSON.parse(sessionStorage.getItem('DeliverySTAIRS'));
    const storedSelectedDate = JSON.parse(
      sessionStorage.getItem('selectedDate')
    );
    const storedSelectedTime = JSON.parse(
      sessionStorage.getItem('selectedTime')
    );
    const storedSelectedVehicle = JSON.parse(
      sessionStorage.getItem('selectedVehicle')
    );
    const storedSelectedHelp = JSON.parse(
      sessionStorage.getItem('DeliverySTAIRS')
    );
    const storedDeliveryValues = JSON.parse(
      sessionStorage.getItem('Delivery Address :')
    );
    const storedSelectedVehicleDuration = JSON.parse(
      sessionStorage.getItem('selectedVehicleDuration')
    );
    const storeddeliveryValues = JSON.parse(
      sessionStorage.getItem('deliveryValues')
    );

    setSelectedValue(storedSelectedValue);
    setSelectedStairsValue(DeliverySTAIRS);
    setSelectedDate(storedSelectedDate);
    setSelectedTime(storedSelectedTime);
    setSelectedVehicle(storedSelectedVehicle);
    setSelectedHelp(storedSelectedHelp);
    setDeliveryValues(DeliverySTAIRS);
    setSelectedVehicleDuration(storedSelectedVehicleDuration);
    setdeliveryValues(storeddeliveryValues);
  }, []);

  React.useEffect(() => {
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
            <span className='font-semibold	'>{DeliverySTAIRS} (no stairs).</span>
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
