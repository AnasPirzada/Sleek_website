import React, { useState } from "react";
import { testimonials } from "../../../../utils/data";
const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-wrap flex-col  justify-center w-full h-full mt-16">
      <div className="flex flex-wrap sm:flex-nowrap  w-full items-center ">
        <img
          src={testimonials[current].image}
          alt="Client"
          className="px-3 sm:px-0 w-567 h-auto md:h-full md:max-w-md rounded-lg shadow-lg "
        />
        <div className="ml-10 sm:mt-0 mt-5 order-first sm:order-last">
          <h2 className="sm:text-2xl text-lg font-bold text-blue-900 text-right sm:text-left px-5 sm:px-0 ">
            WHAT OUR CLIENTS SAY...
          </h2>
          <p className="mt-4 text-gray-700 ml-0 sm:ml-5 w-full sm:pr-0 pr-2">
            {testimonials[current].text}
          </p>
          <p className="mt-4 font-semibold text-orange-600 text-end sm:pr-0 pr-2">
            {testimonials[current].author}
          </p>
          <div className="flex justify-center mt-4 space-x-2 relative">
            {testimonials.map((_, index) => (
              <>
                <span
                  key={index}
                  className={`block w-2 h-2 rounded-full ${
                    current === index
                      ? "h-1 w-[56px] bg-orange-500"
                      : " h-1 w-[120px] bg-blue-900"
                  }`}
                ></span>
              </>
            ))}
          </div>
          <div className="my-5 flex gap-4 justify-end">
            <button onClick={handlePrev} className="text-orange-600">
              <img
                src="material-symbols-light_navigate-next.svg"
                alt="left_arrow"
              />
            </button>

            <button onClick={handleNext} className="text-orange-600">
              <img
                src="material-symbols-light_navigate-next (1).svg"
                alt="right_arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
