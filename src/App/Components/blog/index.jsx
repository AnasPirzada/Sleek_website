import React from 'react';
import './Bolg.css'; // Import the CSS file

const index = ({ blogData }) => {
  return (
    <>
      <section className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 border-2 border-red-500">
        <div className="border border-red-500 backgroundimg h-64 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[35rem] 2xl:h-[40rem] w-full">
          <div className="bg-[#E97B08] flex justify-center items-center h-24 w-24 text-center mt-10 ml-10">
            <p className="text-white text-center font-bold text-3xl">{blogData.date}</p>
          </div>
        </div>
        <div className="py-10">
          <h1 className="text-[#313437] text-3xl font-semibold text1 cursor-default">
            {blogData.title}
          </h1>
        </div>
        <div className="flex flex-col justify-start gap-5">
          {blogData.sections.map((section, index) => (
            <div key={index}>
              <h1 className="text-[#1B2024] text-[28px] font-semibold text1 cursor-default">
                {section.heading}
              </h1>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-[#7A7A7A] text-base leading-6">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default index;
