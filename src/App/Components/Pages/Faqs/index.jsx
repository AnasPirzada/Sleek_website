import React from "react";
import { faqsQuestion } from "../../../../utils/data";

const Index = () => {
  const [selectedQuestion, setSelectedQuestion] = React.useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <>
      <div className="flex justify-center flex-col ">
        {" "}
        <div className="pt-16">
          {" "}
          <h1 className="text-center uppercase text-[#E97B08] text-3xl md:text-4xl font-bold leading-[48.41px] md:leading-[57.6px]">
            FAQ’s{" "}
          </h1>{" "}
        </div>{" "}
        <div className="flex px-6 sm:px-6 md:px-8 lg:px-20 xl:px-44 2xl:px-64 items-center justify-center pt-4 xl:pt-10 2xl:pt-20 lg:pt-8 md:pt-12 sm:pt-4">
          {" "}
          <div className="w-full">
            {" "}
            {faqsQuestion.map((item, index) => (
              <div key={index} className="">
                {" "}
                {selectedQuestion !== index ? (
                  <div className="flex items-center pl-4 md:ml-6 my-4 md:my-5 py-4 bg-[#FAFAFA] rounded-2xl shadow-md">
                    {" "}
                    <img
                      src="plusicon.svg"
                      alt="plus icon"
                      className="mr-2 cursor-pointer w-5"
                      onClick={() => toggleQuestion(index)}
                    />{" "}
                    <div className="text-sm md:text-lg font-medium px-2 md:px-4">
                      {item.question}{" "}
                    </div>{" "}
                  </div>
                ) : (
                  <div className="pl-4 md:ml-6 my-4 md:my-5 py-4 bg-[#FAFAFA] rounded-2xl border-red-500 shadow-md">
                    {" "}
                    <div className="flex items-center">
                      {" "}
                      <img
                        src="MinusSign.svg"
                        alt="minus icon"
                        className="cursor-pointer w-5 "
                        onClick={() => toggleQuestion(index)}
                      />{" "}
                      <div className="text-xs md:text-base px-6 py-2 font-bold">
                        {item.Answer1}{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="pt-2 md:pt-2 px-12 text-xs md:text-base">
                      {item.Answer2}{" "}
                    </div>{" "}
                  </div>
                )}{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default Index;
