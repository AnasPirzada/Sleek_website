import React from "react";

const index = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="pt-[90px]">
        <h1 className="text-center uppercase text-[#E97B08] text-3xl font-bold leading-[48.41px]">
          Your Quote
        </h1>

        <div className="w-[90%] mt-20 m-auto leading-[50px]">
          <p className="text-[15px] sm:text-[24px] font-[400]">
            You are moving from
            <span className="font-[700]"> CRO 4AA (1 f.stairs)</span> to
            <span className="font-[700]">SE23 1AA (no stairs).</span>
          </p>
          <p className="text-[15px] sm:text-[24px] font-[400]">
            On 31/05/2024 at 12:00 we will send a Giant van for 4 hours with
            Driver + 2 people helping loading it.
          </p>
          <p className="text-[15px] sm:text-[24px] font-[400] text-[#E97B08]">
            Pay the payment below by pressing the Book Now button.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-5 my-20 mx-2">
          <button className="border-[#E97B08] border text-[18px] radius-[8px] w-[220px] h-[54px] bg-white text-[#E97B08] py-[16px] px-[40px]">
            Edit
          </button>
          <button className=" bg-[#E97B08] text-white border py-[16px]   w-[220px] h-[54px] px-[40px] radius-[8px]">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
