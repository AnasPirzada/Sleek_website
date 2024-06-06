import { useState } from "react";

const DateTime = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  return (
    <>
      <div className="pt-5 text-[16px] font-[500]">I'm planning to move on</div>
      <div className="pt-5 flex gap-3">
        <div className="bg-[#ECECEC] flex justify-around items-center text-center h-[40px] w-[133px] rounded-lg">
          {/* <img className="" src="solar_calendar-bold.svg" alt="" /> */}
          <input
            type="date"
            value={selectedDate}
            placeholder="please select  a date"
            onChange={handleDateChange}
          />
        </div>
        <div className="bg-[#ECECEC] flex justify-around items-center text-center h-[40px] md:h-[40px] w-[133px] rounded-lg">
          {/* <img className="" src="Vector (1).svg" alt="" /> */}
          <input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            className="text-sm text-[#7C7C7C] font-medium outline-none border-none bg-transparent"
          />
        </div>
      </div>
    </>
  );
};

export default DateTime;
