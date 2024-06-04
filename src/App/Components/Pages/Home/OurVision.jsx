import React from "react";

const OurVision = () => {
  return (
    <div className="container mx-auto p-4 sm:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <div className="p-4">
          <h2 className="text-2xl sm:text-5xl font-bold mb-8 text-[#010066]">
            OUR VISION
          </h2>
          <p className="text-gray-700 mb-2">
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores
            Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est
            Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur
            Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore
            Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et
            Accusam Et Justo Duo
          </p>
          <div className="flex  mt-8 space-x-2">
            <div className="space-y-3 ">
              <div className="h-1 w-[56px] bg-blue-900"></div>
              <div className="h-1 w-[56px] bg-blue-900"></div>
            </div>
            <div className="space-y-3">
              <div className="h-1 w-[56px] bg-blue-900"></div>
              <div className="h-1 w-[56px] bg-blue-900"></div>
            </div>
            <div className="space-y-3">
              <div className="h-1 w-[120px] bg-orange-500"></div>
              <div className="h-1 w-[120px] bg-orange-500"></div>
            </div>
          </div>
        </div>
        <div className="p-4 flex justify-center">
          <img
            src="/Rectangle 2.png"
            alt="Our Vision"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
