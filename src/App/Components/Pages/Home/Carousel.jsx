import React, { useState } from "react";

const testimonials = [
  {
    image: "/Rectangle 3.png", // Replace with your image paths
    text: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
    author: "Mohsin",
  },
  
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-16">
      <div className="flex items-center justify-between w-full max-w-4xl px-4 py-8">
        <button onClick={handlePrev} className="text-orange-600">
          <img
            src="material-symbols-light_navigate-next.svg"
            alt="left_arrow"
          />
        </button>
        <div className="flex items-center w-full">
          <img
            src={testimonials[current].image}
            alt="Client"
            className="w-1/2 h-auto rounded-lg shadow-lg"
          />
          <div className="ml-8">
            <h2 className="text-2xl font-bold text-blue-900">
              WHAT OUR CLIENTS SAY...
            </h2>
            <p className="mt-4 text-gray-700">{testimonials[current].text}</p>
            <p className="mt-4 font-semibold text-orange-600">
              {testimonials[current].author}
            </p>
          </div>
        </div>
        <button onClick={handleNext} className="text-orange-600">
          <img
            src="material-symbols-light_navigate-next (1).svg"
            alt="right_arrow"
          />
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`block w-2 h-2 rounded-full ${
              current === index ? "bg-blue-900" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
