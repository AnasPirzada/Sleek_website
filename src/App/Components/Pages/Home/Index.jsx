import React from "react";
import imagesholder from "../../../../assets/imagesholder.png";
import mobilmeImage from "../../../../assets/imagemobielView.png";
import "./style.css";
import DeatilSection from "./DeatilSection";
import OurVision from "./OurVision";
import Carousel from "./Carousel";
import ContactUs from "./ContactUs";

const Index = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {" "}
      <div className="mobileBgimg sm:bgImage h-full">
        <div className="py-12 md:py-32 px-2 sm:px-24 ">
          <div>
            <p className="text-2xl font-medium text-white mb-3 text-center sm:text-left">
              Welcome To
            </p>
            <h1 className="text-2xl md:text-5xl font-extrabold mb-3 text-white text-center sm:text-left">
              SLEEK ASSURED REMOVALS
            </h1>
            <p className="text-md  md:text-2xl font-medium text-white mb-3 text-center sm:text-left">
              Enjoy the most reliable service in the United Kingdom
            </p>
          </div>

          <div className=" flex flex-col md:flex-row  md:justify-start items-center md:space-x-5 mt-12">
            <div>
              <p className="text-lg font-normal mb-2 text-white">
                Collection Address
              </p>
              <input
                type="text"
                className="rounded-[8px] px-14 md:px-24 py-2"
              />
            </div>
            <div className="hidden md:block md:mt-10">
              <img src="/carImg.svg" alt="Carimage" />
            </div>
            <div>
              <p className="text-lg font-normal mb-2 text-white mt-8 md:mt-0 ">
                Delivery Address
              </p>
              <input
                type="text"
                className="rounded-[8px] px-14 md:px-24 py-2"
              />
            </div>
          </div>
          <div className="flex justify-center sm:justify-start">
            <button className="bg-[#E97B08] text-white flex mt-8 py-2 px-28 sm:px-8 rounded-[8px]">
              Show quote
              <span>
                <img
                  src="/leftArrow.svg"
                  alt="left Arrow"
                  className="w-[24px] h-[24px]"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="sm:w-[80%]  m-auto">
        <DeatilSection />
        <OurVision />
        <Carousel />
        <ContactUs></ContactUs>
      </div>
    </>
  );
};

export default Index;
