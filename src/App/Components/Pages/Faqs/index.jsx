import React from "react";
import { faqsQuestion } from "../../../../utils/data";

const Index = () => {
  const [selectedQuestion, setSelectedQuestion] = React.useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };
  const toggleQuestionRemove = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : null);
  };

  return (
    <div>
      <div className="pt-8 md:pt-16">
        <h1 className="text-center uppercase text-[#E97B08] text-3xl md:text-4xl font-bold leading-[48.41px] md:leading-[57.6px]">
          FAQ’s
        </h1>
      </div>

      <div className="flex  justify-center items-center ">
        <div className="max-w-lg px-2">
          {faqsQuestion.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center my-10">
                <img
                  src="plusicon.svg"
                  alt="plus icon"
                  className="mr-2  cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                />
                <div className="text-[13px] md:text-lg font-medium">
                  {item.question}
                </div>
              </div>
              {selectedQuestion === index && (
                <div className="mt-2 ">
                  <div className="flex items-center">
                    <img
                      src="MinusSign.svg"
                      alt="minus icon"
                      className="mr-2 h-1 cursor-pointer"
                      onClick={() => toggleQuestionRemove(index)}
                    />
                    <div className="text-sm md:text-base">{item.Answer1}</div>
                  </div>
                  <div className="mt-2 text-sm md:text-base">
                    {item.Answer2}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
