import React from "react";
import imagesholder from "../../../../assets/imagesholder.png";
import mobilmeImage from "../../../../assets/imagemobielView.png";
import "./style.css";
const Index = () => {
  return (
    <div className=" h-full">
      <div className="background-image">
        <div className="w-full  text-white p-10 sm:p-20 ">
          <p className="uppercase sm:text-center lg:text-left  text-xl md:text-2xl font-normal mb-1 px-14 sm:px-0">
            Welcome to
          </p>

          <h1 className="md:text-[48px] text-[24px] font-[800] mb-3 uppercase">
            SLEEK ASSURED REMOVALS
          </h1>
          <div>
            <p class="lg:text-[24px] text-[16px] font-[500] sm:w-[636px] sm:h-[24px] w-[398px] h-[48px] overflow-wrap break-word ">
              Enjoy the most reliable service in the United Kingdom
            </p>
          </div>

          <div className="mt-5 mb-4 flex flex-col md:flex-row center gap-5 ">
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
          <div className="bg-[#E97B08] flex gap-2 w-[382px] sm:h-[36px] md:w-[232px] rounded-[8px] px-[40px] py-[8px]">
            <span className="uppercase text-white text-center ">
              Show quote
            </span>
            <img
              src="/leftArrow.svg"
              alt="left Arrow"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
