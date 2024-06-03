import React from "react";
import imagesholder from "../../../../assets/imagesholder.png";
import mobilmeImage from "../../../../assets/imagemobielView.png";
const Index = () => {
  return (
    <div
      className=" relative max-w-full overflow-x-hidden h-full"
      // style={{ zIndex: "-1" }}
    >
      <div>
        <picture>
          <source srcSet={mobilmeImage} media="(max-width: 1023px)" />

          <img
            className="w-[1440px] h-[680px]"
            src={imagesholder}
            alt="2 person holding stuff"
          />
        </picture>
      </div>
      <div className="absolute md:top-[92px] top-[75px] lg:left-20 left-10 w-full  text-white ">
        <p className="uppercase text-[24px] font-[500] mb-1 px-14 sm:px-0">
          Welcome to
        </p>

        <h1 className="md:text-[48px] text-[24px] font-[800] mb-3 uppercase">
          SLEEK ASSURED REMOVALS
        </h1>
        <p className="lg:text-[24px] text-[16px] font-[500]">
          Enjoy the most reliable service in the United Kingdom
        </p>
        <div className="mt-5 mb-4 flex flex-wrap center gap-5 ">
          <div>
            <p className="text-[20px] font-[500] mb-2">Collection Address</p>
            <input
              type="text"
              className="lg:w-[400px] text-black w-[330px] h-[36px] lg:h-[40px] rounded-[8px]"
            />
          </div>
          <div className="items-center hidden md:block mt-10">
            <img src="/carImg.svg" alt="Carimage" />
          </div>
          <div>
            <p className="text-[20px] font-[500] mb-2">Delivery Address</p>
            <input
              type="text"
              className="text-black w-[330px] h-[40px] rounded-[8px]"
            />
          </div>
        </div>
        <div className="bg-[#E97B08] flex gap-2 w-[232px] rounded-[8px] px-[40px] py-[8px]">
          <span className="uppercase text-white  ">Show quote</span>
          <img
            src="/leftArrow.svg"
            alt="left Arrow"
            className="w-[24px] h-[24px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
