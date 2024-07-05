import "flatpickr/dist/themes/material_green.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const SectionVehicl = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    // sessionStorage.clear();
  }, []);

  const vehicleOptions = [
    { label: "Small Van", value: "small-van", imgSrc: "SMALL.png" },
    { label: "Medium Van", value: "medium-van", imgSrc: "MEDIUM.png" },
    { label: "Large Van", value: "large-van", imgSrc: "LARGE VAN.png" },
    { label: "Luton Van", value: "giant-van", imgSrc: "LUTON.png" },
  ];

  const stairsOptions = [
    {
      label: "There are no flights of stairs",
      value: "There are no flights of stairs0",
    },
    { label: " 1 flight of stair", value: "  1 flight of stair" },
    { label: " 2 flight of stairs", value: "  2 flight of stairs" },
    { label: " 3 flight of stairs", value: "  3 flight of stairs" },
    { label: " 4 flight of stairs", value: "  4 flight of stairs" },
    { label: " 5 flight of stairs", value: "  5 flight of stairs" },
    { label: " 6 flight of stairs", value: "  6 flight of stairs" },
    { label: " 7+ flight of stairs", value: "  7+ flight of stairs" },
  ];

  const helpOptions = [
    { label: "No Need Help", value: "No Need Help", imgSrc: "noNeedHelp.svg" },
    {
      label: "Driver helping",
      value: "Driver helping",
      imgSrc: "driverHelping.svg",
    },
    {
      label: "Driver helping + 1 helper",
      value: "Driver helping + 1 helper",
      imgSrc: "driverhelp1pr.svg",
    },
    {
      label: "Driver helping + 2 helper",
      value: "Driver helping + 2 helpers",
      imgSrc: "driverhelp2.svg",
    },
  ];

  const inputFieldsData = [
    {
      placeholder: "",
      label: "Postcode",
      type: "text",
      key: "Postcode",
    },
    {
      placeholder: "",
      label: "Street Address",
      type: "text",
      key: "Street_Address",
    },
    {
      placeholder: "",
      label: "DOOR/FLAT NUMBER",
      type: "text",
      key: "City",
    },
  ];
  const inputFieldsDeliveryData = [
    {
      placeholder: "",
      label: "Postcode",
      type: "text",
      key: "Postcode",
    },
    {
      placeholder: "",
      label: "Street Address",
      type: "text",
      key: "Street_Address",
    },
    {
      placeholder: "",
      label: "DOOR/FLAT NUMBER",
      type: "text",
      key: "City",
    },
  ];
  const getAllSessionStorageValues = () => {
    const sessionStorageKeys = [
      "pickupPostalCode",
      "pickupStreetAddress",
      "pickupCity",
      "deliveryStreetAddress",
      "deliveryCity",
      "deliveryPostalCode",
    ];

    const valuesArray = sessionStorageKeys.map((key) => {
      return sessionStorage.getItem(key) || ""; // If item is null, return empty string
    });

    return valuesArray;
  };

  // Start Session storge Stored values
  const [storedEmail, setStoredEmail] = useState(null);
  const [storedName, setStoredName] = useState(null);
  const [storedPhone, setStoredPhone] = useState(null);
  const [storedselectedVehicle, setstoredselectedVehicle] = useState(null);
  const [storeddeliveryValues, setstoreddeliveryValues] = useState(null);
  const [storedPICKUPSTAIRS, setstoredPICKUPSTAIRS] = useState(null);
  const [afterchangeSelecteddate, setafterchangeSelecteddate] = useState(null);
  // end

  // showing sessionstorage values in state in intial state will empty when value is adeed in session storage it will be added
  const [email, setEmail] = useState("" || storedEmail);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const [selectedDeliveryHelp, setSelectedHelp] = useState("");
  // end

  const [activeOptionYouHaveLIFTS, setActiveYouHaveLIFTSOption] =
    useState(null);

  const [EmailTextNeedactiveOption, setEmailTextNeedactiveOption] =
    useState("");

  const [selectedVehicleDuration, setSelectedVehicleDuration] = useState("");
  const [textareaData, setTextareaData] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [storedselectedDate, setstoredselectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const [selectedStairsValue, setSelectedStairsValue] = useState("");
  const [Description, setSelectedDescription] = useState("");
  const [healthValues, setHealthValues] = useState(
    getAllSessionStorageValues()
  );
  console.log('selectedVehicleDuration', selectedVehicleDuration);

  // const [deliveryValues, setDeliveryValues] = useState(
  //   getAllSessionStorageValues()
  // );

  const hoursOptions = [
    {
      label: '1 hour',
      value: '1 hour',
    },
    {
      label: "2 hours",
      value: "2 hours",
    },
    {
      label: '3 hours',
      value: '3 hours',
    },
    {
      label: "4 hours",
      value: "4 hours",
    },
    {
      label: '5 hours',
      value: '5 hours',
    },
    {
      label: "6 hours",
      value: "6 hours",
    },
    {
      label: '7 hours',
      value: '7 hours',
    },
    {
      label: '7 hours',
      value: '7 hours',
    },
    {
      label: "8 hours",
      value: "8 hours",
    },
    {
      label: '9 hours',
      value: '9 hours',
    },
    {
      label: "10 hours",
      value: "10 hours",
    },
    {
      label: '11 hours',
      value: '11 hours',
    },
    {
      label: "12 hours",
      value: "12 hours",
    },
    {
      label: '13 hours',
      value: '13 hours',
    },
    {
      label: "14 hours",
      value: "14 hours",
    },
    {
      label: '15 hours',
      value: '15 hours',
    },
    {
      label: "16 hours",
      value: "16 hours",
    },
    {
      label: '17 hours',
      value: '17 hours',
    },
    {
      label: "18 hours",
      value: "18 hours",
    },
    {
      label: '19 hours',
      value: '19 hours',
    },
    {
      label: "20 hours",
      value: "20 hours",
    },
    {
      label: '21 hours',
      value: '21 hours',
    },
    {
      label: "22 hours",
      value: "22 hours",
    },
    {
      label: '23 hours',
      value: '23 hours',
    },
    {
      label: "24 hours",
      value: "24 hours",
    },
  ];

  const hourhandleChange = (event) => {
    setSelectedVehicleDuration(event.target.value);
  };
  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleVehicleClick = (value) => {
    setSelectedVehicle(value);
    console.log("Selected Vehicle", value);
  };

  const handleHelpClick = (value) => {
    setSelectedHelp(value);
  };

  const handleOptionYouHaveLIFTSClick = (option) => {
    setActiveYouHaveLIFTSOption(option);
  };

  const handleOptionClickEmailTextNeed = (option) => {
    setEmailTextNeedactiveOption(option);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "vehicle") {
      setSelectedVehicleDuration(value);
    } else if (name === "description") {
      setTextareaData(value);
    }
  };

  // const handleVehicleDurationChange = event => {
  //   const value = event.target.value;
  //   setSelectedVehicleDuration(value);
  // };

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    if (name === "description") {
      setTextareaData(value);
    }
  };

  // const handleDateChange = event => {
  //   setSelectedDate(event.target.value);
  // };

  // const handleTimeChange = event => {
  //   setSelectedTime(event.target.value);
  // };

  const handleStairsChange = (event) => {
    setSelectedStairsValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const textareahandleChange = (event) => {
    setSelectedDescription(event.target.value);
  };

  const handleGetQuotes = () => {
    // Log data to console
    console.log("Selected vehicle:", selectedVehicle);
    console.log("Delivery Values:", selectedDeliveryHelp);
    console.log("Need Help Values:", deliveryValues);
    console.log("Delivery STAIRS", selectedStairsValue);
    console.log("Collection Address:", healthValues);
    console.log("PICK UP STAIRS", selectedValue);
    console.log("DO YOU HAVE LIFTS:", activeOptionYouHaveLIFTS);
    console.log("Selected vehicle duration:", selectedVehicleDuration);
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
    console.log("Description:", Description);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Email&Text Need:", EmailTextNeedactiveOption);
    console.log("Distance in Miles:", distanceInMiles);

    // Store data in session storage
    sessionStorage.setItem("selectedVehicle", JSON.stringify(selectedVehicle));
    sessionStorage.setItem(
      "deliveryValues",
      JSON.stringify(selectedDeliveryHelp)
    );
    sessionStorage.setItem(
      "Delivery Address :",
      JSON.stringify(deliveryValues)
    );
    sessionStorage.setItem(
      "DeliverySTAIRS",
      JSON.stringify(selectedStairsValue)
    );
    sessionStorage.setItem("Collection Address", JSON.stringify(healthValues));
    sessionStorage.setItem("PICKUPSTAIRS", JSON.stringify(selectedValue));

    sessionStorage.setItem(
      "YouHaveLIFTS",
      JSON.stringify(activeOptionYouHaveLIFTS)
    );
    sessionStorage.setItem(
      "selectedVehicleDuration",
      JSON.stringify(selectedVehicleDuration)
    );
    sessionStorage.setItem("selectedDate", JSON.stringify(selectedDate));
    sessionStorage.setItem(
      "SelectedWeekDate",
      JSON.stringify(SelectedWeekDate)
    );
    sessionStorage.setItem("selectedTime", JSON.stringify(selectedTime));
    sessionStorage.setItem("Description", JSON.stringify(Description));

    sessionStorage.setItem("Name", JSON.stringify(name));
    sessionStorage.setItem("Email", JSON.stringify(email));
    sessionStorage.setItem("Phone", JSON.stringify(phone));
    sessionStorage.setItem(
      "EmailTextNeed",
      JSON.stringify(EmailTextNeedactiveOption)
    );

    navigate("/instantmain", { state: { distanceInMiles } });
  };

  const handleHealthChange = (index, e) => {
    const newHealthValues = [...healthValues];
    newHealthValues[index] = e.target.value;
    setHealthValues(newHealthValues);

    // Store data in session storage whenever it changes
    const sessionStorageKeys = [
      "pickupPostalCode",
      "pickupCity",
      "pickupStreetAddress",
      "deliveryStreetAddress",
      "deliveryCity",
      "deliveryPostalCode",
    ];

    sessionStorageKeys.forEach((key, i) => {
      sessionStorage.setItem(key, newHealthValues[i]);
    });
  };

  // const handleDeliveryChange = (index, e) => {
  //   const updatedDeliveryValues = [...deliveryValues];
  //   updatedDeliveryValues[index] = e.target.value;
  //   setDeliveryValues(updatedDeliveryValues);

  //   // // Store data in session storage whenever it changes
  //   // const sessionStorageKeys = [
  //   //   'deliveryPostalCode',
  //   //   'deliveryCity',
  //   //   'deliveryStreetAddress',
  //   // ];

  //   sessionStorageKeys.forEach((key, i) => {
  //     sessionStorage.setItem(key, updatedDeliveryValues[i]);
  //   });
  // };

  const { distanceInMiles, pickupLocation, deliveryLocation } =
    location.state || {
      distanceInMiles: 0,
      pickupLocation: {},
      deliveryLocation: {},
    };
  console.log("Totoal Distance", distanceInMiles);

  const updatedInputFieldsData = inputFieldsData.map((field) => {
    switch (field.key) {
      case "Postcode":
        return { ...field, value: pickupLocation.postcode };
      case "Street_Address":
        return { ...field, value: pickupLocation.street_address };
      case "City":
        return { ...field, value: pickupLocation.city };
      default:
        return field;
    }
  });

  const updatedInputFieldsDeliveryData = inputFieldsDeliveryData.map(
    (field) => {
      switch (field.key) {
        case "Postcode":
          return { ...field, value: deliveryLocation.postcode };
        case "Street_Address":
          return { ...field, value: deliveryLocation.street_address };
        case "City":
          return { ...field, value: deliveryLocation.city };
        default:
          return field;
      }
    }
  );

  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  // const [issecondEditMode, setIssecondEditMode] = useState(false);

  const togglesecondEditMode = () => {
    setIssecondEditMode(!issecondEditMode);
  };

  useEffect(() => {
    const storedselectedDate = sessionStorage.getItem("selectedDate");
    const storedselectedTime = sessionStorage.getItem("selectedTime");
    if (storedselectedDate) {
      setstoredselectedDate(storedselectedDate);
    }
    if (storedselectedTime) {
      setSelectedTime(storedselectedTime);
    }
  }, []);

  const handleTimeChange = (event) => {
    const time = event.target.value;
    setSelectedTime(time);
    sessionStorage.setItem("selectedTime", time);
  };

  console.log("SelectedTime ", selectedTime);

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const [dayType, setDayType] = useState("");

  useEffect(() => {
    const storedselectedDate = sessionStorage.getItem("selectedDate");
    if (storedselectedDate) {
      setstoredselectedDate(storedselectedDate); // No need to JSON.parse if the stored value is a string
    }
  }, []);

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);

    console.log('Selecteddate', date);
    setSelectedDate(event.target.value);

    const day = date.getDay();
    if (day === 0 || day === 6) {
      setDayType("Weekend");
    } else {
      setDayType("Weekday");
    }

    setstoredselectedDate(event.target.value); // Also update storedselectedDate when input changes
    sessionStorage.setItem("selectedDate", event.target.value); // Update session storage as well
  };

  let SelectedWeekDate;
  SelectedWeekDate = `${dayType}: ${new Date(
    selectedDate
  ).toLocaleDateString()}`;
  console.log("SelectedWeekDate", SelectedWeekDate);

  const [deliveryValues, setDeliveryValues] = useState([]);
  const [issecondEditMode, setIsSecondEditMode] = useState(false);

  // Initialize delivery values from session storage
  useEffect(() => {
    const storedDeliveryStreetAddress = sessionStorage.getItem(
      "deliveryStreetAddress"
    );
    const storedDeliveryPostalCode =
      sessionStorage.getItem("deliveryPostalCode");
    const storedDeliveryCity = sessionStorage.getItem("deliveryCity");

    // Set initial delivery values from session storage
    setDeliveryValues([
      storedDeliveryPostalCode || "",
      storedDeliveryStreetAddress || "",
      storedDeliveryCity || "",
    ]);
  }, []);

  // Function to handle delivery input changes
  const handleDeliveryChange = (index, e) => {
    const newDeliveryValues = [...deliveryValues];
    newDeliveryValues[index] = e.target.value;
    setDeliveryValues(newDeliveryValues);
  };

  // Function to handle changes (if needed)

  // Toggle edit mode
  const toggleSecondEditMode = () => {
    setIsSecondEditMode(!issecondEditMode);
  };

  const [estimatedTime, setEstimatedTime] = useState("");

  useEffect(() => {
    const storedEstimatedTime = sessionStorage.getItem("estimatedTime");
    console.log("storedEstimatedTime", storedEstimatedTime);
    if (storedEstimatedTime) {
      setEstimatedTime(storedEstimatedTime);
    }
  }, []);

  console.log("selectedVehicleDuration", selectedVehicleDuration);
  let TotalTime;
  TotalTime = estimatedTime + selectedVehicleDuration;

  // getting values from localStorage

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('Email');
    const storedName = sessionStorage.getItem('Name');
    const storedPhone = sessionStorage.getItem('Phone');
    const storedselectedVehicle = sessionStorage.getItem('selectedVehicle');
    const storeddeliveryValues = sessionStorage.getItem('deliveryValues');
    const storedPICKUPSTAIRS = sessionStorage.getItem('PICKUPSTAIRS');
    const storedDeliverySTAIRS = sessionStorage.getItem('DeliverySTAIRS');
    const storedYouHaveLIFTS = sessionStorage.getItem('YouHaveLIFTS');
    const storedselectedVehicleDuration = sessionStorage.getItem(
      'selectedVehicleDuration'
    ); 
     const storedselectedstoredDescription = sessionStorage.getItem(
      'Description'
    );
      const storedselectedstoredEmailTextNeed = sessionStorage.getItem(
      'EmailTextNeed'
    );

    if (storedEmail) {
      setStoredEmail(JSON.parse(storedEmail));
      setEmail(JSON.parse(storedEmail));
    }

    if (storedName) {
      setStoredEmail(JSON.parse(storedName));
      setName(JSON.parse(storedName));
    }

    if (storedPhone) {
      setStoredPhone(JSON.parse(storedPhone));
      setPhone(JSON.parse(storedPhone));
    }

    if (storedselectedVehicle) {
      setstoredselectedVehicle(JSON.parse(storedselectedVehicle));
      setSelectedVehicle(JSON.parse(storedselectedVehicle));
    }
    if (storeddeliveryValues) {
      setstoreddeliveryValues(JSON.parse(storeddeliveryValues));
      setSelectedHelp(JSON.parse(storeddeliveryValues));
    }
    if (storedPICKUPSTAIRS) {
      setstoredPICKUPSTAIRS(JSON.parse(storedPICKUPSTAIRS));
      setSelectedValue(JSON.parse(storedPICKUPSTAIRS));
    }
    if (storedDeliverySTAIRS) {
      setSelectedStairsValue(JSON.parse(storedDeliverySTAIRS));
    }

    if (storedYouHaveLIFTS) {
      setActiveYouHaveLIFTSOption(JSON.parse(storedYouHaveLIFTS));
    }

    if (storedselectedVehicleDuration) {
      console.log(
        "storedselectedVehicleDuration",
        storedselectedVehicleDuration
      );
      setSelectedVehicleDuration(JSON.parse(storedselectedVehicleDuration));
    }

    if (storedselectedstoredDescription) {
      setSelectedDescription(JSON.parse(storedselectedstoredDescription));
    }

    if (storedselectedstoredEmailTextNeed) {
      setEmailTextNeedactiveOption(
        JSON.parse(storedselectedstoredEmailTextNeed)
      );
    }





    


  }, []);

  console.log('Stored Email:', storedEmail);
  return (
    <>
      <section className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-[135px]  overflow-x-hidden ">
        <div className="text-center items-center my-10">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[40px] text-[#E97B08]">
            GET A QUICK QUOTE
          </h1>
          <p className="font-normal text-base md:text-lg lg:text-xl leading-5 md:leading-6 pt-4 md:pt-6 lg:pt-8 xl:pt-10 inter text-[#181919]">
            The van size you choose must fit all the items you want to move.
            Note your quote is for one trip only. Extra charge for any
            additional trip by the driver. For a detailed quote, use the
            extended version.
          </p>
        </div>
        <div className="pt-10 md:pt-16 lg:pt-20 xl:pt-[80px]">
          <h1 className="text-[#E97B08] inter font-semibold text-lg md:text-xl lg:text-2xl leading-6 md:leading-7 xl:leading-[29.05px]">
            Which size of van do you need?
          </h1>

          <p className="font-normal text-sm md:text-base leading-4 md:leading-5 xl:leading-[19px] text-[#444545] pt-2 md:pt-4 xl:pt-[8px]">
            The Small Van is mostly used for luggage and boxes. Small vans can
            take up to 8 full suitcases and few boxes.
          </p>
          <p className="font-normal text-sm md:text-base leading-4 md:leading-5 xl:leading-[19px] text-[#444545] pt-2 md:pt-4 xl:pt-[8px]">
            Medium Van is suitable for one room move with few boxes, luggage,
            and small furniture. It is also good for single items
            pickups/delivery.
          </p>
          <p className="font-normal text-sm md:text-base leading-4 md:leading-5 xl:leading-[19px] text-[#444545] pt-2 md:pt-4 xl:pt-[8px]">
            Large Van is perfect for 1 bedroom flat/house moves with no white
            goods and heavy furniture.
          </p>
          <p className="font-normal text-sm md:text-base leading-4 md:leading-5 xl:leading-[19px] text-[#444545] pt-2 md:pt-4 xl:pt-[8px]">
            Luton Van suitable for 3 bedroom flat/house with white goods. It’s
            perfect for heavy items move because it has a tail lift for heavy
            lifting.
          </p>
        </div>
        <div className=" pt-4 md:pt-6 lg:pt-8 xl:pt-[34px] grid gap-2 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
          {vehicleOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => handleVehicleClick(option.value)}
              className={`cursor-pointer border flex flex-col md:h-full xl:h-[250px] lg:h-full sm:h-full 2xl:h-[250px] justify-center text-center items-center rounded-xl ${
                selectedVehicle === option.value
                  ? "border-[#E97B08] bg-white"
                  : "bg-[#ECECEC]"
              }`}
            >
              <img src={option.imgSrc} alt={option.label} />
              <label className="inline-flex items-center cursor-pointer text-center">
                <div className={`cursor-pointer`}>
                  <div className=" sm:w-[19px] sm:h-[19px] lg:w-[24px] lg:h-[24px] md:w-[24px] md:h-[24px] xl:w-[24px] xl:h-[24px] 2xl:w-[24px] 2xl:h-[24px]  w-[20px] h-[20px] rounded-full flex justify-center items-center border-2 border-[#E97B08] m-1">
                    <div
                      className={`h-[15px] w-[15px]   border rounded-full ${
                        selectedVehicle === option.value ? "bg-[#E97B08]" : ""
                      }`}
                    ></div>
                  </div>
                </div>
                <span className="ml-2 text-xs sm:text-sm md:text-base lg:text-base">
                  {option.label}
                </span>
              </label>
            </div>
          ))}
        </div>

        <div className="pt-10 overflow-hidden">
          <hr className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1170px] 2xl:w-[1300px] border border-[#E97B08]" />
        </div>
        <div className="pt-10 ">
          <h1 className="text-2xl text-[#E97B08] font-semibold">
            Will you need help with loading and unloading?
          </h1>
          <p className="font-normal text-base leading-[19.36px] inter text-[#444545] pt-2">
            If you can load and unload the van, choose   No Help Needed on the
            form to save money.
          </p>
        </div>
        <div className="pt-4 md:pt-6 lg:pt-8 xl:pt-[34px] grid gap-2 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
          {helpOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => handleHelpClick(option.value)}
              className={`cursor-pointer border flex flex-col md:h-full xl:h-[200px] lg:h-full sm:h-full 2xl:h-[200px] justify-center text-center items-center rounded-xl ${
                selectedDeliveryHelp === option.value
                  ? "border-[#E97B08] bg-white"
                  : "bg-[#ECECEC]"
              }`}
            >
              <img src={option.imgSrc} alt={option.label} className="" />
              <label className="inline-flex items-center cursor-pointer text-center">
                <div className={`cursor-pointer`}>
                  <div className="sm:w-[19px] sm:h-[19px] lg:w-[24px] lg:h-[24px] md:w-[24px] md:h-[24px] xl:w-[24px] xl:h-[24px] 2xl:w-[24px] 2xl:h-[24px]  w-[20px] h-[20px] rounded-full flex justify-center items-center border-2 border-[#E97B08] m-1">
                    <div
                      className={`h-[15px] w-[15px] border rounded-full ${
                        selectedDeliveryHelp === option.value
                          ? "bg-[#E97B08]"
                          : ""
                      }`}
                    ></div>
                  </div>
                </div>
                <span className="ml-2 text-xs sm:text-sm md:text-base lg:text-base">
                  {option.label}
                </span>
              </label>
            </div>
          ))}
        </div>

        <div className="pt-10 overflow-hidden">
          <hr className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1170px] 2xl:w-[1300px] border border-[#E97B08]" />
        </div>

        <div className="pt-10 ">
          <h1 className="text-2xl text-[#E97B08] font-semibold">
            To Avoid stairs charge
          </h1>
          <p className="font-normal text-base leading-[19.36px] inter pt-2 text-[#444545]">
            If you will be able to bring your items downstairs, then choose no
            flights of stairs on the booking form to save some money.
          </p>
        </div>
        <div>
          <div className="mt-8">
            <p className="text-[#181919] text-xl	">
              Collection Address{" "}
              <span
                className="text-[#E97B08] text-base cursor-pointer"
                onClick={toggleEditMode}
              >
                Edit
              </span>
            </p>
          </div>
          <div className=" flex flex-col md:flex-row flex-wrap gap-4 justify-between">
            {inputFieldsData.map((inputh, index) => (
              <div key={index} className="flex-1 pt-2 flex flex-col">
                <h2 className="py-2 text-sm md:text-base lg:text-lg">
                  {inputh.label}
                </h2>
                <input
                  disabled={!isEditMode}
                  name={inputh.key}
                  placeholder={inputh.placeholder}
                  value={healthValues[index]}
                  onChange={(e) => {
                    handleHealthChange(index, e);
                    handleChange(e);
                  }}
                  className="h-[40px] w-full md:w-auto bg-[#ECECEC] rounded px-2"
                />
              </div>
            ))}

            <div className="flex-1 pt-2 flex flex-col">
              <h2 className="py-2 text-sm md:text-base lg:text-lg">
                PICK-UP STAIRS 
              </h2>
              <select
                className="h-[40px] w-full md:w-auto bg-[#ECECEC] rounded"
                onChange={handleSelectChange}
                value={selectedValue}
              >
                {stairsOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    are {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-8">
            <p className="text-[#181919] text-xl	">
              Delivery Address{" "}
              <span
                className="text-[#E97B08] text-base		cursor-pointer"
                onClick={togglesecondEditMode}
              >
                Edit
              </span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-between">
            {inputFieldsDeliveryData.map((inputh, index) => (
              <div key={index} className="flex-1 pt-2 flex flex-col">
                <h2 className="py-2 text-sm md:text-base lg:text-lg">
                  {inputh.label}
                </h2>
                <input
                  disabled={!issecondEditMode}
                  name={inputh.key}
                  placeholder={inputh.placeholder}
                  // value={deliveryValues[index]} // Corrected variable name here
                  value={deliveryValues[index]}
                  onChange={(e) => {
                    handleDeliveryChange(index, e);
                    handleChange(e);
                  }}
                  className="h-[40px] w-full md:w-auto bg-[#ECECEC] rounded px-2"
                />
              </div>
            ))}

            <div className="flex-1 pt-2 flex flex-col">
              <h2 className="py-2 text-sm md:text-base lg:text-lg">
                DROP-OFF STAIRS 
              </h2>
              <select
                className="h-[40px] w-full md:w-auto bg-[#ECECEC] rounded"
                onChange={handleStairsChange}
                value={selectedStairsValue}
              >
                {stairsOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    are {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="pt-[47px]">
          <h1 className=" font-medium text-xl leading-[24px] text-[#181919]">
            DO YOU HAVE LIFTS? 
          </h1>
          <div className="flex gap-5 pt-6">
            <div className="flex gap-3 items-center">
              <div
                className={`h-[24px] w-[24px] border-2 rounded-full flex justify-center items-center text-center cursor-pointer ${
                  activeOptionYouHaveLIFTS === "yes"
                    ? "border-[#E97B08]"
                    : " border-black"
                }`}
                onClick={() => handleOptionYouHaveLIFTSClick("yes")}
              >
                <div
                  className={`h-[16px] w-[16px] rounded-full ${
                    activeOptionYouHaveLIFTS === "yes"
                      ? "bg-[#E97B08]"
                      : "bg-white"
                  }`}
                ></div>
              </div>
              <h2>Yes</h2>
            </div>
            <div className="flex gap-3 items-center ">
              <div
                className={`h-[24px] w-[24px] border-2 rounded-full flex justify-center items-center text-center cursor-pointer ${
                  activeOptionYouHaveLIFTS === "no"
                    ? "border-[#E97B08]"
                    : " border-black"
                }`}
                onClick={() => handleOptionYouHaveLIFTSClick("no")}
              >
                <div
                  className={`h-[16px] w-[16px] rounded-full ${
                    activeOptionYouHaveLIFTS === "no"
                      ? "bg-[#E97B08]"
                      : "bg-white"
                  }`}
                ></div>
              </div>
              <h2>No</h2>
            </div>
          </div>
        </div>

        <div className="pt-10 overflow-hidden">
          <hr className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1170px] 2xl:w-[1300px] border border-[#E97B08]" />
        </div>
        <div className="pt-10">
          <h1 className="font-semibold text-[#E97B08] text-2xl">
            I Need The Van For
          </h1>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-between">
          <div className="flex items-center gap-2 p-2 flex-wrap md:flex-nowrap ">
            <p className="text-sm whitespace-nowrap">Estimated:</p>
            <img
              src="EstVan.svg"
              alt="estvan"
              className="shrink-0 max-w-[24px]"
            />
            <p className="font-medium text-sm leading-[19px] whitespace-nowrap">
              Travel time: {estimatedTime}
            </p>
          </div>
          {/* <div className='flex items-center gap-2 p-2 flex-wrap md:flex-nowrap '>
            <p className='text-sm whitespace-nowrap'>
              Loading and unloading time:
            </p>
            <img src='loadin_un.svg' alt='' className='shrink-0 max-w-[24px]' />
            <p className='font-medium text-sm leading-[19px] whitespace-nowrap'>
              1 hour, 30 minutes
            </p>
          </div>
          <div className='flex items-center gap-2 p-2 flex-wrap md:flex-nowrap'>
            <p className='text-sm whitespace-nowrap'>Total Time</p>
            <img
              src='clockVehcile.svg'
              alt=''
              className='shrink-0 max-w-[24px]'
            />
            <p className='font-medium text-sm leading-[19px] whitespace-nowrap'>
              {TotalTime}
            </p>
          </div> */}
        </div>

        <div className="pt-[16px]">
          <p className=" font-medium text-base leading-[19px] text-[#444545]">
            <span className="text-[#E97B08] font-bold text-base">Note:</span>{" "}
            The hours you will book the van for will include loading, unloading
            and travel. So, estimate correctly how much time you will need the
            van. Even though the driver will stay to finish your job, once you
            have used up your booked time, you will be charged extra time each
            half hour.
          </p>
        </div>

        <div className="pt-6">
          <h2 className="font-medium">I Need Vehicle For</h2>
          <div className="w-full">
            <select
              name="vehicle"
              id="vehicle"
              className="w-40 h-[40px]"
              onChange={hourhandleChange}
              value={selectedVehicleDuration}
            >
              {hoursOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-10 overflow-hidden">
          <hr className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1170px] 2xl:w-[1300px] border border-[#E97B08]" />
        </div>
        <div className="pt-10">
          <h1 className="font-semibold text-[#E97B08] text-2xl">
            When you're moving
          </h1>
          <p className=" pt-6 font-semibold text-base text-[#444545]">
            Tell us when you're moving so we can check and guarantee the drivers
            availability.
          </p>
          <p className=" text-[#181919] text-base font-medium leading-[19.36px] pt-4">
            Please note, any specialist items (such as pianos) will require an
            expert team. Please contact us via Instant Support to discuss these.
          </p>
        </div>

        <div>
          <div className="pt-5 text-[16px] font-[500]">
            moving date and time
          </div>
          <div className="pt-5 flex gap-3">
            <div className="bg-[#ECECEC] flex justify-around items-center text-center px-3 py-2 rounded-lg">
              {isSafari ? (
                <input
                  type="date"
                  placeholder="yyyy-mm-dd"
                  onChange={handleDateChange}
                  value={storedselectedDate}
                />
              ) : (
                <input
                  type='date'
                  placeholder='Date_Time'
                  className='bg-transparent'
                  onChange={handleDateChange}
                  // value={StoDateValue}
                />
              )}
              {selectedDate && (
                <h1 className="hidden">
                  {dayType === "Weekday" ? "Weekday" : "Weekend"}{" "}
                  {new Date(selectedDate).toLocaleDateString()}
                </h1>
              )}
            </div>
            <div className="bg-[#ECECEC] flex justify-around items-center text-center px-3 py-2 rounded-lg">
              {isSafari ? (
                <input
                  type="time"
                  placeholder="HH:mm"
                  onChange={handleTimeChange}
                  value={selectedTime}
                />
              ) : (
                <input
                  type="time"
                  placeholder="Time"
                  className="bg-transparent"
                  onChange={handleTimeChange}
                  value={selectedTime}
                />
              )}
            </div>
          </div>
        </div>

        <div className="pt-6">
          <p className="text-[#181919] font-medium text-base">
            Please enter a brief description of the items you will be moving and
            any additional contact numbers.
          </p>
          <textarea
            type="text"
            onChange={textareahandleChange}
            value={Description}
            className="h-[120px] w-full md:w-full bg-[#ECECEC] xl:w-full 2xl:w-full rounded-md mt-4 "
          />
        </div>

        <div className="pt-10 overflow-hidden">
          <hr className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1170px] 2xl:w-[1300px] border border-[#E97B08]" />
        </div>
        <div className="pt-10">
          <h1 className="font-semibold text-[#E97B08] text-2xl">About You</h1>
          <p className="pt-6 font-semibold text-base text-[#444545]">
            We ask for your details so that we can send you a text with a link
            to your quotes. When you book we'll send a confirmation email and
            pass your name, email address, and phone number to the driver you
            choose.
          </p>

          <div className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="mt-1 p-2 block w-full bg-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-[#E97B08] focus:border-[#E97B08] sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  required
                  onChange={(e) => handleEmailChange(e.target.value)}
                  className="mt-1 p-2 block w-full bg-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-[#E97B08] focus:border-[#E97B08] sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  id="phone"
                  value={phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className="mt-1 p-2 block w-full bg-[#ECECEC] rounded-md shadow-sm focus:outline-none focus:ring-[#E97B08] focus:border-[#E97B08] sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[47px]">
          <h1 className=" font-medium text-lg sm:text-xl leading-[24px] text-[#181919]">
            We'd love to keep in touch about this move by email and text
            message.
          </h1>

          <div className="flex gap-5 pt-6">
            <div className="flex gap-3 items-center">
              <div
                className={`h-[24px] w-[24px] border-2 rounded-full flex justify-center items-center text-center cursor-pointer ${
                  EmailTextNeedactiveOption === "yes"
                    ? "border-[#E97B08]"
                    : " border-black"
                }`}
                onClick={() => handleOptionClickEmailTextNeed("yes")}
              >
                <div
                  className={`h-[16px] w-[16px] rounded-full ${
                    EmailTextNeedactiveOption === "yes"
                      ? "bg-[#E97B08]"
                      : "bg-white"
                  }`}
                ></div>
              </div>
              <h2>Yes Please</h2>
            </div>
            <div className="flex gap-3 items-center ">
              <div
                className={`h-[24px] w-[24px] border-2 rounded-full flex justify-center items-center text-center cursor-pointer ${
                  EmailTextNeedactiveOption === "no"
                    ? "border-[#E97B08]"
                    : " border-black"
                }`}
                onClick={() => handleOptionClickEmailTextNeed("no")}
              >
                <div
                  className={`h-[16px] w-[16px] rounded-full ${
                    EmailTextNeedactiveOption === "no"
                      ? "bg-[#E97B08]"
                      : "bg-white"
                  }`}
                ></div>
              </div>
              <h2>No, Thanks</h2>
            </div>
          </div>
        </div>

        <div className="flex text-center justify-center items-center md:my-0 my-5">
          <button
            onClick={handleGetQuotes}
            className=" rounded-lg bg-[#E97B08] py-3 px-5 text-white font-semibold flex text-center justify-center items-center gap-4"
          >
            GET MY FREE QUOTES
            <img src="getFree.svg" alt="" className="" />
          </button>
        </div>
      </section>
    </>
  );
};

export default SectionVehicl;
