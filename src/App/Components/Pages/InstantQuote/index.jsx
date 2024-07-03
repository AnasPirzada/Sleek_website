// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';

// const Index = () => {
//   const navigate = useNavigate();

//   const [selectedValue, setSelectedValue] = useState('');
//   const [selectedStairsValue, setSelectedStairsValue] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [selectedVehicle, setSelectedVehicle] = useState('');
//   const [deliveryValues, setDeliveryValues] = useState('');
//   const [selectedVehicleDuration, setSelectedVehicleDuration] = useState('');
//   const [totalDistance, setTotalDistance] = useState(0);
//   const [selectedHelp, setselectedHelp] = useState('');

//   const mileCharge = 1.15;

//   const vehicleRates = {
//     'small-van': {
//       'No Help': 30,
//       'Driver Help': 30,
//       'Driver + Helper': 60,
//       'Driver + 2 Helpers': 130,
//     },
//     'medium-van': {
//       'No Help': 33,
//       'Driver Help': 33,
//       'Driver + Helper': 60,
//       'Driver + 2 Helpers': 150,
//     },
//     'large-van': {
//       'No Help': 35,
//       'Driver Help': 35,
//       'Driver + Helper': 60,
//       'Driver + 2 Helpers': 180,
//     },
//     'giant-van': {
//       'No Help': 65,
//       'Driver Help': 70,
//       'Driver + Helper': 75,
//       'Driver + 2 Helpers': 220,
//     },
//   };

//   useEffect(() => {
//     // Parse session storage values
//     const storedSelectedValue =
//       JSON.parse(sessionStorage.getItem('PICKUPSTAIRS')) || '';
//     const DeliverySTAIRS =
//       JSON.parse(sessionStorage.getItem('DeliverySTAIRS')) || '';
//     const storedSelectedDate =
//       JSON.parse(sessionStorage.getItem('selectedDate')) || '';
//     const storedSelectedTime =
//       JSON.parse(sessionStorage.getItem('selectedTime')) || '';
//     const storedSelectedVehicle =
//       JSON.parse(sessionStorage.getItem('selectedVehicle')) || '';
//     const deliveryValues =
//       JSON.parse(sessionStorage.getItem('deliveryValues')) || '';
//     const storedSelectedVehicleDuration =
//       JSON.parse(sessionStorage.getItem('selectedVehicleDuration')) || '';

//     setSelectedValue(storedSelectedValue);
//     setSelectedStairsValue(DeliverySTAIRS);
//     setSelectedDate(storedSelectedDate);
//     setSelectedTime(storedSelectedTime);
//     setSelectedVehicle(storedSelectedVehicle);
//     setDeliveryValues(deliveryValues);
//     setSelectedVehicleDuration(storedSelectedVehicleDuration);
//     setTotalDistance(parseFloat(sessionStorage.getItem('totalDistance')) || 0);
//   }, []);
//   const Allvehicle = selectedVehicle;
//   const deliveryHelp = deliveryValues;
//   const perHourRateString = selectedVehicleDuration; // Assuming this might be a string like "16 hours"
//   const distance = totalDistance;
//   const DropOffStairs = selectedStairsValue;
//   const PickupStairs = selectedValue;

//   console.log('Allvehicle:', Allvehicle);
//   console.log('Delivery Help:', deliveryHelp);
//   console.log('Per Hour Rate (string):', perHourRateString);
//   console.log('Distance:', distance);
//   console.log('Drop Off Stairs:', DropOffStairs);
//   console.log('Pickup Stairs:', PickupStairs);

//   // Extract the numeric value from the perHourRateString and convert it to an integer
//   const perHourRate = parseInt(perHourRateString.split(' ')[0], 10);
//   // perMiles Charges
//   const totalRate = mileCharge * distance;
//   console.log('Total Rate for distance:', totalRate);
//   // Calculate the per mile charge
//   const perMileCharge = totalRate / distance;
//   console.log('Per mile Charge:', perMileCharge);
//   // Ensure input strings are trimmed of any leading/trailing spaces
//   const trimmedPickupStairs = PickupStairs.trim();
//   const trimmedDropOffStairs = DropOffStairs.trim();

//   console.log('Trimmed Pickup Stairs:', trimmedPickupStairs);
//   console.log('Trimmed Drop Off Stairs:', trimmedDropOffStairs);

//   // Debugging output for PickupStairs and DropOffStairs after split
//   const pickupStairsArray = trimmedPickupStairs.split(' ');
//   const dropOffStairsArray = trimmedDropOffStairs.split(' ');
//   console.log('Pickup Stairs Array:', pickupStairsArray);
//   console.log('Drop Off Stairs Array:', dropOffStairsArray);
//   const Pickup =
//     pickupStairsArray.length > 0 ? parseInt(pickupStairsArray[0], 10) : NaN;
//   const DropOff =
//     dropOffStairsArray.length > 0 ? parseInt(dropOffStairsArray[0], 10) : NaN;
//   // DropOff & PickUp Stairs Totoal Values

//   // PerpersonCount

//   const deliveryHelp1 = deliveryHelp;

//   // Split the string to extract the integer

//   // Split the string to extract the parts
//   const parts = deliveryHelp.split(' ');
//   console.log('dfa', parts);

//   let NOvalue;
//   let Drivervalue;
//   let helpervalue;
//   let helpersvalue;

//   if (parts[0] === 'No') {
//     NOvalue = 0;
//     console.log('No', NOvalue);
//   }
//   if (parts[0] === 'Driver') {
//     Drivervalue = 1;
//     console.log('Driver', Drivervalue);
//   }

//   if (parts[4] === 'helper') {
//     helpervalue = 2;
//     console.log('Driver', helpervalue);
//   }

//   if (parts[4] === 'helpers') {
//     helpersvalue = 3;
//     console.log('Driver', helpersvalue);
//   }

//   const totalFlightsOfStairs = DropOff + Pickup;
//   // console.log("totoal stairs",totalFlightsOfStairs);
//   // const stairChargePerFlight = 5.75;
//   // const costPerPerson =
//   //   (stairChargePerFlight * totalFlightsOfStairs) / totalMen;

//   console.log('HelpersValue', NOvalue, Drivervalue, helpervalue, helpersvalue);
//   const totalMen = NOvalue + Drivervalue + helpervalue + helpersvalue;
//   console.log('totalMen', totalMen);
//   // console.log('Total Stair Charge Per person:', costPerPerson);
//   console.log('Vehicle:', Allvehicle);
//   console.log('Per Hour', perHourRate);

//   if (Allvehicle == 'small-van') {
//     NOvalue = 0;
//     Drivervalue = 30 * perHourRate;
//     helpervalue = 60 * perHourRate;
//     helpersvalue = 130 * perHourRate;

//     console.log('smalDrivervalue:', Drivervalue);
//     console.log('smalhelpervalue:', helpervalue);
//     console.log('smalhelpersvalue:', helpersvalue);
//   } else if (Allvehicle == 'medium-van') {
//     NOvalue = 0;
//     Drivervalue = 33 * perHourRate;
//     helpervalue = 60 * perHourRate;
//     helpersvalue = 150 * perHourRate;

//     console.log('mediumDrivervalue:', Drivervalue);
//     console.log('mediumhelpervalue:', helpervalue);
//     console.log('mediumhelpersvalue:', helpersvalue);
//   }

//   if (Allvehicle == 'large-van') {
//     NOvalue = 0;
//     Drivervalue = 35 * perHourRate;
//     helpervalue = 60 * perHourRate;
//     helpersvalue = 180 * perHourRate;

//     console.log('lrgDrivervalue:', Drivervalue);
//     console.log('lrghelpervalue:', helpervalue);
//     console.log('lrghelpersvalue:', helpersvalue);
//   }
//   if (Allvehicle == 'giant-van') {
//     NOvalue = 0;
//     Drivervalue = 70 * perHourRate;
//     helpervalue = 75 * perHourRate;
//     helpersvalue = 220 * perHourRate;

//     console.log('giantDrivervalue:', Drivervalue);
//     console.log('gianthelpervalue:', helpervalue);
//     console.log('gianthelpersvalue:', helpersvalue);
//   }

//   let Men;
//   let TotalAmount;

//   if (Allvehicle == 'small-van' && Men == NOvalue) {
//     TotalAmount = NOvalue + 5.75 + totalFlightsOfStairs;
//     console.log('TotalAmount', TotalAmount);
//   }
//   if (Allvehicle == 'small-van' && Men == Drivervalue) {
//     TotalAmount = Drivervalue + 5.75 + totalFlightsOfStairs;
//     console.log('TotalAmount', TotalAmount);
//   }
//   if (Allvehicle == 'small-van' && Men == helpervalue) {
//     TotalAmount = helpervalue + 5.75 + totalFlightsOfStairs;
//     console.log('TotalAmount', TotalAmount);
//   }
//   if (Allvehicle == 'small-van' && Men == helpersvalue) {
//     TotalAmount = helpersvalue + 5.75 + totalFlightsOfStairs;
//     console.log('TotalAmount', TotalAmount);
//   }
//   console.log('Total Amount', TotalAmount);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
const Index = () => {
  const navigate = useNavigate();

  const [SelectedWeekDateValue, setSelectedWeekDate] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedStairsValue, setSelectedStairsValue] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [deliveryValues, setDeliveryValues] = useState('');
  const [selectedVehicleDuration, setSelectedVehicleDuration] = useState('');
  const [totalDistance, setTotalDistance] = useState(0);
  const [selectedHelp, setselectedHelp] = useState('');
  const [VehicleDuration, setssavedselectedVehicleDuration] = useState('');
  const [totalRatepermile, setSelectedSelectedtotalRatepermile] = useState('');

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
    const SelectedWeekDate =
      JSON.parse(sessionStorage.getItem('SelectedWeekDate')) || '';
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
    const deliveryValues =
      JSON.parse(sessionStorage.getItem('deliveryValues')) || '';
    const storedSelectedVehicleDuration =
      JSON.parse(sessionStorage.getItem('selectedVehicleDuration')) || '';
    const savedselectedVehicleDuration = JSON.parse(
      sessionStorage.getItem('selectedVehicleDuration')
    );
    const savedSelectedtotalRatepermile = JSON.parse(
      sessionStorage.getItem('totalRatepermile')
    );

    setSelectedWeekDate(SelectedWeekDate);
    setssavedselectedVehicleDuration(savedselectedVehicleDuration);
    setSelectedSelectedtotalRatepermile(savedSelectedtotalRatepermile);

    setSelectedValue(storedSelectedValue);
    setSelectedStairsValue(DeliverySTAIRS);
    setSelectedDate(storedSelectedDate);
    setSelectedTime(storedSelectedTime);
    setSelectedVehicle(storedSelectedVehicle);
    setDeliveryValues(deliveryValues);
    setSelectedVehicleDuration(storedSelectedVehicleDuration);
    setTotalDistance(parseFloat(sessionStorage.getItem('totalDistance')) || 0);
  }, []);
  const Allvehicle = selectedVehicle;
  const deliveryHelp = deliveryValues;
  const perHourRateString = selectedVehicleDuration; // Assuming this might be a string like "16 hours"
  const distance = totalDistance;
  const DropOffStairs = selectedStairsValue;
  const PickupStairs = selectedValue;

  console.log('Allvehicle:', Allvehicle);
  console.log('Delivery Help:', deliveryHelp);
  console.log('Per Hour Rate (string):', perHourRateString);
  console.log('Distance:', distance);
  console.log('Drop Off Stairs:', DropOffStairs);
  console.log('Pickup Stairs:', PickupStairs);

  // Extract the numeric value from the perHourRateString and convert it to an integer
  const perHourRate = parseInt(perHourRateString.split(' ')[0], 10);
  const mileCharge = 1.15;
  // perMiles Charges
  const totalRate = mileCharge * distance;
  console.log('Total Rate for distance:', totalRate);
  sessionStorage.setItem('totalRatepermile', totalRate);

  // // Calculate the per mile charge
  // const perMileCharge = totalRate / distance;
  // console.log('Per mile Charge:', perMileCharge);

  // Ensure input strings are trimmed of any leading/trailing spaces
  const trimmedPickupStairs = PickupStairs.trim();
  const trimmedDropOffStairs = DropOffStairs.trim();

  console.log('Trimmed Pickup Stairs:', trimmedPickupStairs);
  console.log('Trimmed Drop Off Stairs:', trimmedDropOffStairs);

  // Debugging output for PickupStairs and DropOffStairs after split
  const pickupStairsArray = trimmedPickupStairs.split(' ');
  const dropOffStairsArray = trimmedDropOffStairs.split(' ');
  console.log('Pickup Stairs Array:', pickupStairsArray);
  console.log('Drop Off Stairs Array:', dropOffStairsArray);
  const Pickup =
    pickupStairsArray.length > 0 ? parseInt(pickupStairsArray[0], 10) : NaN;
  const DropOff =
    dropOffStairsArray.length > 0 ? parseInt(dropOffStairsArray[0], 10) : NaN;
  // DropOff & PickUp Stairs Totoal Values
  const DropOffAmount = DropOff * 5.75;
  const PickupAmount = Pickup * 5.75;

  console.log('abcs', DropOffAmount, PickupAmount);
  sessionStorage.setItem('PickupAmount', PickupAmount);
  sessionStorage.setItem('DropOffAmount', DropOffAmount);

  // PerpersonCount

  const deliveryHelp1 = deliveryHelp;

  // Split the string to extract the integer

  // Split the string to extract the parts
  const parts = deliveryHelp.split(' ');
  console.log('dfa', parts);

  let NOvalue = 0;
  let Drivervalue = 0;
  let helpervalue = 0;
  let helpersvalue = 0;

  if (parts[0] === 'No') {
    NOvalue = 0;
    console.log('No', NOvalue);
  }
  if (parts[0] === 'Driver') {
    Drivervalue = 1;
    console.log('Driver', Drivervalue);
  }

  if (parts[4] === 'helper') {
    helpervalue = 2;
    console.log('Driver', helpervalue);
  }

  if (parts[4] === 'helpers') {
    helpersvalue = 3;
    console.log('Driver', helpersvalue);
  }

  const totalFlightsOfStairs = PickupAmount + DropOffAmount;
  console.log('totalFlightsOfStairs', totalFlightsOfStairs);
  // console.log("totoal stairs",totalFlightsOfStairs);
  // const stairChargePerFlight = 5.75;
  // const costPerPerson =
  //   (stairChargePerFlight * totalFlightsOfStairs) / totalMen;

  console.log('HelpersValue', NOvalue, Drivervalue, helpervalue, helpersvalue);
  const totalMen = NOvalue + Drivervalue + helpervalue + helpersvalue;
  console.log('totalMen', totalMen);
  // console.log('Total Stair Charge Per person:', costPerPerson);
  console.log('Vehicle:', Allvehicle);
  console.log('Per Hour', perHourRate);

  let DayValue;
  let finalResult;

  DayValue = SelectedWeekDateValue.split(' ');
  console.log('dfa', DayValue);

  if (DayValue[0] === 'Weekday') {
    finalResult = true;
    console.log('46889489:', finalResult);
  } else if (DayValue[0] === 'Weekend') {
    finalResult = false;
    console.log('46889489:', finalResult);
  } else {
    finalResult = DayValue[0];
    console.log('46889489:', finalResult);
  }

  // Final log statement outside the condition
  console.log('FinalResult=', finalResult);

  // To verify the value of DayValue after the condition checks
  console.log('SelectedWeekDateValue:', SelectedWeekDateValue);

  // let Men = 0;
  // if (Allvehicle === 'small-van') {
  //   NOvalue = 0;
  //   Drivervalue = 30 * perHourRate;
  //   helpervalue = 60 * perHourRate;
  //   helpersvalue = 130 * perHourRate;
  //   Men = Drivervalue;
  // } else if (Allvehicle === 'medium-van') {
  //   NOvalue = 0;
  //   Drivervalue = 33 * perHourRate;
  //   helpervalue = 60 * perHourRate;
  //   helpersvalue = 150 * perHourRate;
  //   Men = Drivervalue;
  // } else if (Allvehicle === 'large-van') {
  //   NOvalue = 0;
  //   Drivervalue = 35 * perHourRate;
  //   helpervalue = 60 * perHourRate;
  //   helpersvalue = 180 * perHourRate;
  //   Men = Drivervalue;
  // } else if (Allvehicle === 'giant-van') {
  //   NOvalue = 0;
  //   Drivervalue = 70 * perHourRate;
  //   helpervalue = 75 * perHourRate;
  //   helpersvalue = 220 * perHourRate;
  //   Men = Drivervalue;
  // }

  // console.log('smalDrivervalue:', Drivervalue);
  // console.log('smalhelpervalue:', helpervalue);
  // console.log('smalhelpersvalue:', helpersvalue);

  // let TotalAmount;
  // const menValues = {
  //   NOvalue: NOvalue,
  //   Drivervalue: Drivervalue,
  //   helpervalue: helpervalue,
  //   helpersvalue: helpersvalue,
  // };
  // const vehicleTypes = ['small-van', 'medium-van', 'large-van', 'giant-van'];
  // const menKey = Object.keys(menValues).find(key => menValues[key] === Men);

  // if (vehicleTypes.includes(Allvehicle) && menKey) {
  //   TotalAmount = menValues[menKey] + 5.75 + totalFlightsOfStairs + totalRate;
  // } else {
  //   console.log('Hello');
  // }

  // Final log statement outside the condition
  console.log('FinalResult=', finalResult);

  // To verify the value of DayValue after the condition checks

  let Men = 0;
  let weekendMultiplier = 1.5; // Example multiplier for weekend rates

  if (Allvehicle === 'small-van') {
    NOvalue = 0;
    Drivervalue = 30 * perHourRate;
    helpervalue = 60 * perHourRate;
    helpersvalue = 130 * perHourRate;
    Men = Drivervalue;
  } else if (Allvehicle === 'medium-van') {
    NOvalue = 0;
    Drivervalue = 33 * perHourRate;
    helpervalue = 60 * perHourRate;
    helpersvalue = 150 * perHourRate;
    Men = Drivervalue;
  } else if (Allvehicle === 'large-van') {
    NOvalue = 0;
    Drivervalue = 35 * perHourRate;
    helpervalue = 60 * perHourRate;
    helpersvalue = 180 * perHourRate;
    Men = Drivervalue;
  } else if (Allvehicle === 'giant-van') {
    NOvalue = 0;
    Drivervalue = 70 * perHourRate;
    helpervalue = 75 * perHourRate;
    helpersvalue = 220 * perHourRate;
    Men = Drivervalue;
  }

  console.log('smalDrivervalue:', Drivervalue);
  console.log('smalhelpervalue:', helpervalue);
  console.log('smalhelpersvalue:', helpersvalue);

  let TotalAmount;
  const menValues = {
    NOvalue: NOvalue,
    Drivervalue: Drivervalue,
    helpervalue: helpervalue,
    helpersvalue: helpersvalue,
  };
  const vehicleTypes = ['small-van', 'medium-van', 'large-van', 'giant-van'];
  const menKey = Object.keys(menValues).find(key => menValues[key] === Men);

  const isWeekend = day => ['Saturday', 'Sunday'].includes(day);

  if (vehicleTypes.includes(Allvehicle) && menKey) {
    if (isWeekend(finalResult)) {
      TotalAmount =
        menValues[menKey] * weekendMultiplier +
        5.75 +
        totalFlightsOfStairs +
        totalRate;
    } else {
      TotalAmount = menValues[menKey] + 5.75 + totalFlightsOfStairs + totalRate;
    }
  } else {
    console.log('Hello');
  }

  console.log('TotalAmount:', TotalAmount);

  // For debugging
  console.log('Allvehicle:', Allvehicle);
  console.log('Men:', Men);
  console.log('TotalAmount:', TotalAmount);
  sessionStorage.setItem('TotalAmount', TotalAmount);
  sessionStorage.setItem('totalRate', totalRate);
  sessionStorage.setItem('DrivervalueCharges', Drivervalue);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Calculated Driver Value Charges
  let DriverChargesValue;
  DriverChargesValue = TotalAmount - DropOffAmount - PickupAmount;
  return (
    <div>
      <h1 className='text-center uppercase text-[#E97B08] text-3xl font-bold leading-[48.41px]'>
        Your Quote
      </h1>
      <div className='m-10 bg-[#F5F5F5] rounded-lg flex justify-center items-start flex-col'>
        <div className=' leading-[50px] px-5 py-5 w-full'>
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
          <div className='text-center py-10'>
            <p className='font-[700] uppercase text-2xl text-[#E97B08]'>
              Price Break Down
            </p>
          </div>
          <div className='rounded-xl py-6 sm:py-8 md:py-10'>
            <div className='flex justify-between'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Totoal Amount
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-xl text-[#181919] font-medium'>
                {TotalAmount}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>{' '}
          <div className='rounded-xl py-6 sm:py-8 md:py-10'>
            <div className='flex justify-between'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                PICKUP DATE, TIME
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-xl text-[#181919] font-medium'>
                {selectedDate} {VehicleDuration}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>{' '}
          {/* <div className='rounded-xl py-6 sm:py-8 md:py-10'>
            <div className='flex justify-between'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                PICKUP STAIRS
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-xl text-[#181919] font-medium'>
                {pickupStairsValue}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <div className='rounded-xl py-6 sm:py-8 md:py-10'>
            <div className='flex justify-between'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                DROP-OFF STAIRS
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-xl text-[#181919] font-medium'>
                {deliveryStairsValue}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div> */}
          <div className='rounded-xl py-6 sm:py-8 md:py-10'>
            <div className='flex justify-between'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Total Distance
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                {totalDistance} miles
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <div className='rounded-xl py-6 sm:py-8 md:py-10'>
            <div className='flex justify-between'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Drop-off-stairs
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                £{DropOffAmount}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <div className='rounded-xl py-6 sm:py-8 md:py-10'>
            <div className='flex justify-between'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Pickup-stairs
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                £{PickupAmount}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
          <div className='rounded-xl py-6 sm:py-8 md:py-10'>
            <div className='flex justify-between'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Driver Time Charges
              </p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium'>
                £{DriverChargesValue}
              </p>
            </div>
            <hr className='border-black w-full mt-6 sm:mt-8 md:mt-10' />
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center gap-5 my-20 mx-2'>
        <Link to='/instantQuotes'>
          {' '}
          <button className='border-[#E97B08] border  rounded-lg w-[220px] h-[54px] bg-white text-[#E97B08] py-[16px] px-[40px]'>
            Edit
          </button>
        </Link>

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
