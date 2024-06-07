import React from "react";

const OurVision = () => {
  return (
    <div className="container mx-auto  sm:mt-24  sm:my-0 my-10">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-4">
        <div className="px-4 sm:px-0">
          <h2 className="text-base sm:text-3xl font-bold sm:mb-8 mb-4 text-[#010066]">
            OUR VISION
          </h2>
          <p className="text-gray-700 mb-2 sm:text-base text-xs ">
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
        <div className="flex justify-center px-4 sm:px-0">
          <img src="/Rectangle 2.png" alt="Our Vision" />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
