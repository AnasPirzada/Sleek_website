import React from "react";
import imagesholder from "../../../../assets/imagesholder.png";
import mobilmeImage from "../../../../assets/imagemobielView.png";
import "./style.css";
import DeatilSection from "./DeatilSection";
import OurVision from "./OurVision";
import Carousel from "./Carousel";
import ContactUs from "./ContactUs";
import { useNavigate } from "react-router";
import Map from "../../Map/Map";
const Index = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="bgImage h-full w-full ">
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

          {/* <div className="flex flex-col md:flex-row  md:justify-start sm:items-center items-left md:space-x-5 mt-12 ">
            <div>
              <p className="text-lg font-normal mb-2 text-white">
                Collection Address
              </p>
              <input
                type="text"
                className="rounded-[8px] sm:w-[350px]  w-full  h-[40px] py-2"
              />
            </div>
            <div className="hidden md:block md:mt-10 ">
              <img src="/carImg.svg" alt="Carimage" />
            </div>
            <div>
              <p className="text-lg font-normal mb-2 text-white mt-8 md:mt-0 ">
                Delivery Address
              </p>
              <input
                type="text"
                className="rounded-[8px] sm:w-[350px]    w-full h-[40px] py-2"
              />
            </div>
          </div> */}
          <Map />
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
