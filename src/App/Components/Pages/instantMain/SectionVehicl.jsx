import React, { useState } from "react";
import Input from "./Input";
import InputComponent from "./InputSection";
import Date_Time from "./DateTime";
import { useNavigate } from "react-router";

const SectionVehicl = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const vehicleOptions = [
    { label: "Small Van", value: "small-van", imgSrc: "smallVan.svg" },
    { label: "Medium Van", value: "medium-van", imgSrc: "mediumVan.svg" },
    { label: "Large Van", value: "large-van", imgSrc: "largeVan.svg" },
    { label: "Giant Van", value: "giant-van", imgSrc: "GiantVan.svg" },
  ];

  const helpOptions = [
    { label: "No Need Help", value: "help-1", imgSrc: "noNeedHelp.svg" },
    { label: "Driver helping", value: "help-2", imgSrc: "driverHelping.svg" },
    {
      label: "Driver helping + 1 helper",
      value: "help-3",
      imgSrc: "driverhelp1pr.svg",
    },
    {
      label: "Driver helping + 2 helper",
      value: "help-4",
      imgSrc: "driverhelp2.svg",
    },
  ];

  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedHelp, setSelectedHelp] = useState("");

  const handleVehicleClick = (value) => {
    setSelectedVehicle(value);
  };

  const handleHelpClick = (value) => {
    setSelectedHelp(value);
  };
  const data = {
    Name: "Collection Address",
    inputType: "text",
    NameInput: "PICK-UP STAIRS  ",
    NamInput: "DROP-OFF STAIRS ",
  };

  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("2 hour's");

  const options = ["Yes", "No"];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <section className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-[135px]  overflow-x-hidden py-10">
        <div className="text-center items-center pt-10 md:pt-[120px] lg:pt-[120px] xl:pt-[120px] 2xl:pt-[120px]">
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
            It is important that you select the suitable van for what you want
            to move to save money. If you are moving from two or three bedrooms
            house/flat; Choose Luton van. One or two bedrooms house/flat with
            few furniture; Choose Large van. One room with few boxes, bags, and
            small furniture; Choose medium van. Picking up few boxes and bags
            (10-15); Choose small van
          </p>
        </div>
        <div className=" pt-4 md:pt-6 lg:pt-8 xl:pt-[34px] grid gap-2 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
          {vehicleOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => handleVehicleClick(option.value)}
              className={`cursor-pointer border flex flex-col md:h-full xl:h-[200px] lg:h-full sm:h-full 2xl:h-[200px] justify-center text-center items-center rounded-xl ${
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
                selectedHelp === option.value
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
                        selectedHelp === option.value ? "bg-[#E97B08]" : ""
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

        <Input
          Name={data.Name}
          inputType={data.inputType}
          NameInput={data.NameInput}
        />
        <Input Name="Delivery Address" NamInput={data.NamInput} />
        <div className="pt-[47px]">
          <h1 className=" font-medium text-xl leading-[24px] text-[#181919]">
            DO YOU HAVE LIFTS? 
          </h1>
          <div className="flex gap-5 pt-6">
            <div className="flex gap-3 items-center">
              <div
                className={`h-[24px] w-[24px] border-2 rounded-full flex justify-center items-center text-center cursor-pointer ${
                  activeOption === "yes" ? "border-[#E97B08]" : " border-black"
                }`}
                onClick={() => handleOptionClick("yes")}
              >
                <div
                  className={`h-[16px] w-[16px] rounded-full ${
                    activeOption === "yes" ? "bg-[#E97B08]" : "bg-white"
                  }`}
                ></div>
              </div>
              <h2>Yes</h2>
            </div>
            <div className="flex gap-3 items-center ">
              <div
                className={`h-[24px] w-[24px] border-2 rounded-full flex justify-center items-center text-center cursor-pointer ${
                  activeOption === "no" ? "border-[#E97B08]" : " border-black"
                }`}
                onClick={() => handleOptionClick("no")}
              >
                <div
                  className={`h-[16px] w-[16px] rounded-full ${
                    activeOption === "no" ? "bg-[#E97B08]" : "bg-white"
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
              Travel time: 9 hours, 5 minutes
            </p>
          </div>
          <div className="flex items-center gap-2 p-2 flex-wrap md:flex-nowrap ">
            <p className="text-sm whitespace-nowrap">
              Loading and unloading time:
            </p>
            <img src="loadin_un.svg" alt="" className="shrink-0 max-w-[24px]" />
            <p className="font-medium text-sm leading-[19px] whitespace-nowrap">
              1 hour, 30 minutes
            </p>
          </div>
          <div className="flex items-center gap-2 p-2 flex-wrap md:flex-nowrap">
            <p className="text-sm whitespace-nowrap">Total Time</p>
            <img
              src="clockVehcile.svg"
              alt=""
              className="shrink-0 max-w-[24px]"
            />
            <p className="font-medium text-sm leading-[19px] whitespace-nowrap">
              10 hours, 35 minutes
            </p>
          </div>
        </div>

        <div className="pt-[16px]">
          <p className=" font-medium text-base leading-[19px] text-[#444545]">
            <span className="text-[#E97B08] font-bold text-base">Note:</span>{" "}
            the hours you will book the van for will include loading, unloading
            and travel. So, estimate correctly how much time you need. Even
            though the driver will stay to finish your job, once you have used
            up your booked time, you will pay a higher price for the extra time
            each half hour.
          </p>
        </div>
        <div className=" pt-6">
          <h2 className="font-medium">I Need Vehicle For</h2>
          <div className="w-full">
            <select name="vehicle" id="vehicle" className="w-40 h-[40px]">
              <option value="Yes">2 hour's </option>
              <option value="No">3 hour's</option>
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

        <Date_Time />

        {/* <div className="pt-10 flex  gap-3">
          <div className="bg-[#ECECEC] flex justify-around items-center text-center h-[40px] \ w-[133px] rounded-lg">
            <img className="" src="solar_calendar-bold.svg" alt="" />
            <p className="text-sm text-[#7C7C7C] font-medium">Moving date</p>
          </div>
          <div className="bg-[#ECECEC] flex justify-around items-center text-center h-[40px] md:h-[40px] w-[133px] rounded-lg">
            <img className="" src="Vector (1).svg" alt="" />
            <p className="text-sm text-[#7C7C7C] font-medium">Moving Time</p>
          </div>
        </div> */}

        <div className="pt-6">
          <p className="text-[#181919] font-medium text-base">
            Please enter a brief description of the items you will be moving and
            any additional contact numbers.
          </p>
          <input
            type="text"
            className="h-[120px] w-full md:w-full bg-[#ECECEC] xl:w-full 2xl:w-full rounded-md mt-4 "
          />
        </div>
        <div className="pt-10 overflow-hidden">
          <hr className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1170px] 2xl:w-[1300px] border border-[#E97B08]" />
        </div>
        <div className="pt-10">
          <h1 className="font-semibold text-[#E97B08] text-2xl">About You</h1>
          <p className=" pt-6 font-semibold text-base text-[#444545]">
            We ask for your details so that we can send you a text with a link
            to your quotes. When you book we'll send a confirmation email and
            pass your name, email address and phone number to the driver you
            choose.
          </p>
          {/* <InputComponent /> */}
        </div>
        <div className="pt-[47px]">
          <h1 className=" font-medium text-xl leading-[24px] text-[#181919]">
            We'd love to keep in touch about this move by email and text
            message.
          </h1>
          <div className="flex gap-10 pt-6">
            <div className="flex gap-3 items-center">
              <div
                className={`h-[24px] w-[24px] border-2 rounded-full flex justify-center items-center text-center cursor-pointer ${
                  activeOption === "yes" ? "border-[#E97B08]" : " border-black"
                }`}
                onClick={() => handleOptionClick("yes")}
              >
                <div
                  className={`h-[16px] w-[16px] rounded-full ${
                    activeOption === "yes" ? "bg-[#E97B08]" : "bg-white"
                  }`}
                ></div>
              </div>
              <h2>Yes please!</h2>
            </div>
            <div className="flex gap-3 items-center">
              <div
                className={`h-[24px] w-[24px] border-2 rounded-full flex justify-center items-center text-center cursor-pointer ${
                  activeOption === "no" ? "border-[#E97B08]" : " border-black"
                }`}
                onClick={() => handleOptionClick("no")}
              >
                <div
                  className={`h-[16px] w-[16px] rounded-full ${
                    activeOption === "no" ? "bg-[#E97B08]" : "bg-white"
                  }`}
                ></div>
              </div>
              <h2>No thanks.</h2>
            </div>
          </div>
        </div>
        <div className="flex text-center justify-center items-center pt-[77px] md:pt-[50px] lg:pt-[40px] xl:pt-[30px] 2xl:pt-[20px]">
          <button
            onClick={() => navigate("/instantmain")}
            className="h-[64px] w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[450px] rounded-lg bg-[#E97B08] text-white font-semibold flex text-center justify-center items-center gap-4"
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
