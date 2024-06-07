import React from "react";
import Cards from "./Cards";
import { CardData } from "../../../../utils/data";
const index = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="my-10 px-4 md:px-12 lg:px-[135px] xl:px-[135px] 2xl:px-[135px]  flex flex-col items-center justify-center">
      <div className="text-center pt-16">
        <h1 className="text-[#E97B08] text-4xl font-bold leading-[48.41px]">
          Services
        </h1>
        <p className="text-base leading-[24px] pt-6">
          We specialize in house shafting, expertly lifting and relocating homes
          to new foundations. Our skilled team ensures structural integrity and
          seamless transitions, preserving your home's value and safety.
        </p>
        <hr className="border-2 border-[#E97B08] w-28 mx-auto my-5" />
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
        {CardData.map((item, key) => (
          <Cards
            key={key}
            icon={item.icon}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </section>
  );
};

export default index;
