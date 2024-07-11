import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();

  const [SelectedWeekDateValue, setSelectedWeekDate] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedStairsValue, setSelectedStairsValue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [deliveryValues, setDeliveryValues] = useState("");
  const [selectedVehicleDuration, setSelectedVehicleDuration] = useState("");
  const [totalDistance, setTotalDistance] = useState(0);
  const [selectedHelp, setselectedHelp] = useState("");
  const [VehicleDuration, setssavedselectedVehicleDuration] = useState("");
  const [totalRatepermile, setSelectedSelectedtotalRatepermile] = useState("");
  const [pickupStreetAddress, setSelectedpickupStreetAddress] = useState("");
  const [pickupCity, setSelectedpickupCity] = useState("");
  const [DeliveryAddress, setSelectedDeliveryAddress] = useState("");

  const vehicleRates = {
    "small-van": {
      "No Help": 30,
      "Driver Help": 30,
      "Driver + Helper": 60,
      "Driver + 2 Helpers": 130,
    },
    "medium-van": {
      "No Help": 33,
      "Driver Help": 33,
      "Driver + Helper": 60,
      "Driver + 2 Helpers": 150,
    },
    "large-van": {
      "No Help": 35,
      "Driver Help": 35,
      "Driver + Helper": 60,
      "Driver + 2 Helpers": 180,
    },
    "giant-van": {
      "No Help": 65,
      "Driver Help": 70,
      "Driver + Helper": 75,
      "Driver + 2 Helpers": 220,
    },
  };

  useEffect(() => {
    // Parse session storage values
    const SelectedWeekDate =
      JSON.parse(sessionStorage.getItem("SelectedWeekDate")) || "";
    const storedSelectedValue =
      JSON.parse(sessionStorage.getItem("PICKUPSTAIRS")) || "";
    const DeliverySTAIRS =
      JSON.parse(sessionStorage.getItem("DeliverySTAIRS")) || "";
    const storedSelectedDate =
      JSON.parse(sessionStorage.getItem("selectedDate")) || "";
    const storedSelectedTime =
      JSON.parse(sessionStorage.getItem("selectedTime")) || "";
    const storedSelectedVehicle =
      JSON.parse(sessionStorage.getItem("selectedVehicle")) || "";
    const deliveryValues =
      JSON.parse(sessionStorage.getItem("deliveryValues")) || "";
    const storedSelectedVehicleDuration =
      JSON.parse(sessionStorage.getItem("selectedVehicleDuration")) || "";
    const savedselectedVehicleDuration = JSON.parse(
      sessionStorage.getItem("selectedVehicleDuration")
    );

    const savedSelectedtotalRatepermile = JSON.parse(
      sessionStorage.getItem("totalRatepermile")
    );
    const savedSelectedDeliveryAddress = JSON.parse(
      sessionStorage.getItem("Delivery Address :")
    );

    const savedSelectedpickupStreetAddress = sessionStorage.getItem(
      "pickupStreetAddress"
    );
    const savedSelectedpickupCity = sessionStorage.getItem("pickupCity");

    setSelectedWeekDate(SelectedWeekDate);
    setssavedselectedVehicleDuration(savedselectedVehicleDuration);
    setSelectedSelectedtotalRatepermile(savedSelectedtotalRatepermile);

    setSelectedDeliveryAddress(savedSelectedDeliveryAddress);
    setSelectedpickupStreetAddress(savedSelectedpickupStreetAddress);
    setSelectedpickupCity(savedSelectedpickupCity);
    setSelectedValue(storedSelectedValue);
    setSelectedStairsValue(DeliverySTAIRS);
    setSelectedDate(storedSelectedDate);
    setSelectedTime(storedSelectedTime);
    setSelectedVehicle(storedSelectedVehicle);
    setDeliveryValues(deliveryValues);
    setSelectedVehicleDuration(storedSelectedVehicleDuration);
    setTotalDistance(parseFloat(sessionStorage.getItem("totalDistance")) || 0);
  }, []);
  const Allvehicle = selectedVehicle;
  const deliveryHelp = deliveryValues;
  const perHourRateString = selectedVehicleDuration; // Assuming this might be a string like "16 hours"
  const distance = totalDistance;
  const DropOffStairs = selectedStairsValue;
  const PickupStairs = selectedValue;

  console.log("Allvehicle:", Allvehicle);
  console.log("Delivery Help:", deliveryHelp);
  console.log("Per Hour Rate (string):", perHourRateString);
  console.log("Distance:", distance);
  console.log("Drop Off Stairs:", DropOffStairs);
  console.log("Pickup Stairs:", PickupStairs);
  console.log("pickupStreetAddress", pickupStreetAddress);

  // Extract the numeric value from the perHourRateString and convert it to an integer
  const perHourRate = parseInt(perHourRateString.split(" ")[0], 10);
  console.log("Per Hour Rate (string):", perHourRate);
  const mileCharge = 1.15;
  // perMiles Charges
  const totalRate = mileCharge * distance;
  console.log("Total Rate for distance:", totalRate);
  sessionStorage.setItem("totalRatepermile", totalRate);

  // // Calculate the per mile charge

  // Ensure input strings are trimmed of any leading/trailing spaces
  const trimmedPickupStairs = PickupStairs.trim();
  const trimmedDropOffStairs = DropOffStairs.trim();

  console.log("Trimmed Pickup Stairs:", trimmedPickupStairs);
  console.log("Trimmed Drop Off Stairs:", trimmedDropOffStairs);

  const pickupStairsArray = trimmedPickupStairs.split(" ");
  const dropOffStairsArray = trimmedDropOffStairs.split(" ");
  console.log("Pickup Stairs Array:", pickupStairsArray);
  console.log("Drop Off Stairs Array:", dropOffStairsArray);

  let Pickup =
    pickupStairsArray.length > 0 && pickupStairsArray[0] !== ""
      ? parseInt(pickupStairsArray[0], 10)
      : 0;
  let DropOff =
    dropOffStairsArray.length > 0 && dropOffStairsArray[0] !== ""
      ? parseInt(dropOffStairsArray[0], 10)
      : 0;

  // Check if parsed values are valid numbers
  Pickup = isNaN(Pickup) ? 0 : Pickup;
  DropOff = isNaN(DropOff) ? 0 : DropOff;

  // DropOff & PickUp Stairs Total Values
  const DropOffAmount = DropOff * 10;
  const PickupAmount = Pickup * 10;

  console.log("abcs", DropOffAmount, PickupAmount);
  sessionStorage.setItem("PickupAmount", PickupAmount);
  sessionStorage.setItem("DropOffAmount", DropOffAmount);

  // PerpersonCount

  const deliveryHelp1 = deliveryHelp;

  // Split the string to extract the integer

  // Split the string to extract the parts
  // const parts = deliveryHelp.split(" ");
  // console.log("dfa", parts);

  let NOvalue = 0;
  let Drivervalue = 0;
  let helpervalue = 0;
  let helpersvalue = 0;
  if (deliveryHelp === "No Need Help") {
    NOvalue = 4;
    console.log("No", NOvalue);
  } else if (deliveryHelp === "Driver helping") {
    Drivervalue = 1;
    console.log("Driver", Drivervalue);
  } else if (deliveryHelp === "Driver helping + 1 helper") {
    helpervalue = 2;
    console.log("Driver + 1 helper", helpervalue);
  } else if (deliveryHelp === "Driver helping + 2 helpers") {
    helpersvalue = 3;
    console.log("Driver + 2 helpers", helpersvalue);
  }

 
  const totalFlightsOfStairs = PickupAmount + DropOffAmount;
  console.log("totalFlightsOfStairs", totalFlightsOfStairs);

  console.log(
    "totalMenHelpersValue",
    NOvalue,
    Drivervalue,
    helpervalue,
    helpersvalue
  );
  const totalMen = NOvalue + Drivervalue + helpervalue + helpersvalue;
  // console.log('Total Stair Charge Per person:', costPerPerson);
  console.log("perHourRate", perHourRate);

  let DayValue;
  let finalResult;

  DayValue = SelectedWeekDateValue.split(" ");
  console.log("dfa", DayValue);

  if (DayValue[0] === "Weekday") {
    finalResult = true;
    console.log("46889489:", finalResult);
  } else if (DayValue[0] === "Weekend") {
    finalResult = false;
    console.log("46889489:", finalResult);
  } else {
    finalResult = DayValue[0];
    console.log("46889489:", finalResult);
  }

  // Final log statement outside the condition
  console.log("FinalResult=", finalResult);

  // To verify the value of DayValue after the condition checks
  console.log("SelectedWeekDateValue:", SelectedWeekDateValue);

  // Totoal menu value for selected vehicle condition

  console.log("totalMen", totalMen);

  // Selected Vehicle value

  console.log("Vehicle:", Allvehicle);

  // Final log statement outside the condition for weekday & weekenddays
  console.log("FinalResult=", finalResult);

  // To verify the value of DayValue after the condition checks

  // Usage example:
  function calculateValueForWeekday(
    vehicleType,
    NOvalue,
    Drivervalue,
    helpervalue,
    helpersvalue,
    perHourRate
  ) {
    let total = 0;
    switch (vehicleType) {
      case "small-van":
        if (NOvalue === 4) {
          total = 30 * perHourRate;
        }
        if (Drivervalue === 1) {
          total = 30 * perHourRate;
        }
        if (helpervalue === 2) {
          total = 60 * perHourRate;
        }
        if (helpersvalue === 3) {
          total = 130 * perHourRate;
        }
        break;
        case "medium-van":
          if (NOvalue === 4) {
            total = 33 * perHourRate;
            console.log("Condition: NOvalue === 0, Vehicle: medium-van");
          }
          if (Drivervalue === 1) {
            total = 33 * perHourRate;
            console.log("Condition: Drivervalue === 1, Vehicle: medium-van");
          }
          if (helpervalue === 2) {
            total = 60 * perHourRate;
            console.log("Condition: helpervalue === 2, Vehicle: medium-van");
          }
          if (helpersvalue === 3) {
            total = 150 * perHourRate;
            console.log("Condition: helpersvalue === 3, Vehicle: medium-van");
          }
          break;
      case "large-van":
        if (NOvalue === 4) {
          total = 35 * perHourRate;
        }
        if (Drivervalue === 1) {
          total = 35 * perHourRate;
        }
        if (helpervalue === 2) {
          total = 60 * perHourRate;
        }
        if (helpersvalue === 3) {
          total = 180 * perHourRate;
        }
        break;
      case "giant-van":
        if (NOvalue === 4) {
          total = 65 * perHourRate;
        }
        if (Drivervalue === 1) {
          total = 70 * perHourRate;
        }
        if (helpervalue === 2) {
          total = 75 * perHourRate;
        }
        if (helpersvalue === 3) {
          total = 220 * perHourRate;
        }
        break;
      default:
        break;
    }
    console.log(`Weekday - Vehicle: ${vehicleType}, Total: ${total}`);

    return total;
  }

  function calculateValueForWeekend(
    vehicleType,
    NOvalue,
    Drivervalue,
    helpervalue,
    helpersvalue,
    perHourRate
  ) {
    let total = 0;
    switch (vehicleType) {
      case "small-van":
        if (NOvalue === 4) {
          total = 45 * perHourRate;
        }
        if (Drivervalue === 1) {
          total = 50 * perHourRate;
        }
        if (helpervalue === 2) {
          total = 60 * perHourRate;
        }
        if (helpersvalue === 3) {
          total = 130 * perHourRate;
        }
        break;
      case "medium-van":
        if (NOvalue === 4) {
          total = 50 * perHourRate;
        }
        if (Drivervalue === 1) {
          total = 55 * perHourRate;
        }
        if (helpervalue === 2) {
          total = 65 * perHourRate;
        }
        if (helpersvalue === 3) {
          total = 150 * perHourRate;
        }
        break;
      case "large-van":
        if (NOvalue === 4) {
          total = 35 * perHourRate;
        }
        if (Drivervalue === 1) {
          total = 45 * perHourRate;
        }
        if (helpervalue === 2) {
          total = 65 * perHourRate;
        }
        if (helpersvalue === 3) {
          total = 180 * perHourRate;
        }
        break;
      case "giant-van":
        if (NOvalue === 4) {
          total = 65 * perHourRate;
        }
        if (Drivervalue === 1) {
          total = 70 * perHourRate;
        }
        if (helpervalue === 2) {
          total = 75 * perHourRate;
        }
        if (helpersvalue === 3) {
          total = 220 * perHourRate;
        }
        break;
      default:
        break;
    }
    console.log(`Weekdayend - Vehicle: ${vehicleType}, Total: ${total}`);

    return total;
  }
  let TotalAmount;


  if (finalResult === "Weekday:") {
    TotalAmount = calculateValueForWeekday(
      Allvehicle,
      NOvalue,
      Drivervalue,
      helpervalue,
      helpersvalue,
      perHourRate
    );
  } else if (finalResult === "Weekend:") {
    TotalAmount = calculateValueForWeekend(
      Allvehicle,
      NOvalue,
      Drivervalue,
      helpervalue,
      helpersvalue,
      perHourRate
    );
  }


  TotalAmount += totalFlightsOfStairs + totalRate;


console.log("TotalAmount",TotalAmount,totalRate);
  const menValues = {
    NOvalue: NOvalue,
    Drivervalue: Drivervalue,
    helpervalue: helpervalue,
    helpersvalue: helpersvalue,
  };

  console.log("MEnuValues", menValues);
  const vehicleTypes = ["small-van", "medium-van", "large-van", "giant-van"];
 
  sessionStorage.setItem("TotalAmount", TotalAmount);
  sessionStorage.setItem("totalRate", totalRate);
  sessionStorage.setItem("DrivervalueCharges", Drivervalue);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let DriverChargesValue;
  DriverChargesValue = TotalAmount - DropOffAmount - PickupAmount;

  // {!isNaN(parseFloat(totalRatepermile))
  //   ? parseFloat(totalRatepermile).toFixed(1)
  //   : 'Invalid amount'}

  console.log("totalRatepermile", totalRatepermile);

  let TotalExtendedAmount;

  TotalExtendedAmount = TotalAmount + totalRatepermile;
  return (
    <div>
      <h1 className="text-center uppercase text-[#E97B08] text-3xl font-bold leading-[48.41px]">
        Your Quote
      </h1>
      <div className="m-10 bg-[#F5F5F5] rounded-lg flex justify-center items-start flex-col">
        <div className=" leading-[50px] px-5 py-5 w-full">
          <p className="text-base	font-[400]">
            You are moving from &nbsp; {pickupStreetAddress}, {pickupCity}{" "}
            <span className="font-semibold	">({selectedValue})</span> to{" "}
            {DeliveryAddress}
            <span className="font-semibold	">({selectedStairsValue}).</span>
          </p>
          <p className="text-base	 py-3">
            On <span className="font-semibold	"> {selectedDate} </span>at
            <span className="font-semibold	"> {selectedTime}</span> we will send
            a <span className="font-semibold	">{selectedVehicle}</span> for{" "}
            <span className="font-semibold	"> {selectedVehicleDuration} </span>
            with <span className="font-semibold	"> {deliveryValues} </span>{" "}
            &nbsp;loading it.
          </p>
          <p className="text-base	font-[400] text-[#E97B08]">
            Pay the payment below by pressing the Book Now button.
          </p>
          {/* <div className='rounded-xl py-6 sm:py-8 md:py-10'>
            <div className='flex items-center'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]'>
                Totoal Amount
              </p>
              <p className='text-base  ms-5 sm:text-lg md:text-xl lg:text-xl text-[#181919] font-medium'>
                {TotalExtendedAmount}
              </p>
            </div>
          </div>
       */}
        </div>
      </div>

      <div className="flex flex-row justify-center gap-5 my-20 mx-2">
        <Link to="/instantQuotes">
          {" "}
          <button className="border-[#E97B08] border  rounded-lg w-[220px] h-[54px] bg-white text-[#E97B08] py-[16px] px-[40px]">
            Edit
          </button>
        </Link>

        <button
          onClick={() => navigate("/price")}
          className=" bg-[#E97B08] text-white border    w-[220px] h-[54px] px-[40px] rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Index;
