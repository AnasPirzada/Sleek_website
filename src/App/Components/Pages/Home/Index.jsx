import React from "react";
import imagesholder from "../../../../assets/imagesholder.png";
import mobilmeImage from "../../../../assets/imagemobielView.png";
import "./style.css";
const Index = () => {
  return (
    <div className=" h-full">
      <div className="background-image">
        <div className="w-full  text-white p-10 sm:p-20 ">
          <p className="uppercase sm:text-center lg:text-left  text-xl md:text-2xl font-normal mb-1 px-14 sm:px-0">
            Welcome to
          </p>

          <h1 className="md:text-[48px] text-[24px] font-[800] mb-3 uppercase">
            SLEEK ASSURED REMOVALS
          </h1>
          <div>
            <p class="lg:text-[24px] text-[16px] font-[500] sm:w-[636px] sm:h-[24px] w-[398px] h-[48px] overflow-wrap break-word ">
              Enjoy the most reliable service in the United Kingdom
            </p>
          </div>

          <div className="mt-5 mb-4 flex flex-col md:flex-row center gap-5 ">
            <div>
              <p className="text-[20px] font-[500] mb-2">Collection Address</p>
              <input
                type="text"
                className="lg:w-[400px] text-black w-[330px] h-[36px] lg:h-[40px] rounded-[8px]"
              />
            </div>
            <div className="items-center hidden md:block mt-10">
              <img src="/carImg.svg" alt="Carimage" />
            </div>
            <div>
              <p className="text-[20px] font-[500] mb-2">Delivery Address</p>
              <input
                type="text"
                className="text-black w-[330px] h-[40px] rounded-[8px]"
              />
            </div>
          </div>
          <div className="bg-[#E97B08] flex gap-2 w-[382px] sm:h-[36px] md:w-[232px] rounded-[8px] px-[40px] py-[8px]">
            <span className="uppercase text-white text-center ">
              Show quote
            </span>
            <img
              src="/leftArrow.svg"
              alt="left Arrow"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>
      <div className="relative px-0 sm:px-20 max-w-full overflow-x-hidden h-full flex justify-center mt-0 sm:mt-[-120px]">
        <div className="sm:w-[1170px] pr-5 sm:pr-0 w-[430px] h-full xl:p-10 sm:h-full rounded-0 sm:rounded-[8px] bg-[#E97B08] gap-2 grid lg:grid-cols-2 grid-cols-2 sm:grid-cols-2">
          <div class="p-5">
            <div class="sm:w-[280px] w-[160px] leading-3 h-[24px] py-[8px] font-[700] text-[14px] sm:text-[24px] text-white relative border-b-2 mb-3">
              Home Removals
            </div>

            <div class="sm:w-[350px]  h-[105px] w-[180px] ">
              <p class="sm:text-[16px] text-[12px] overflow-auto break-all">
                Lorem ipsum dolor sit amet, ster sadipscing elit, sed diam sonar
                enmod tempor invidunt ut labore et dolore magna aliquyam aret
                sed diam volatus Al sero eos et accusam et justo duo dolores et
              </p>
            </div>
          </div>

          <div class="p-5">
            <div class="sm:w-[280px] w-[160px] leading-3 h-[24px] py-[8px] font-[700] text-[14px] sm:text-[24px] text-white relative border-b-2 mb-3">
              MAN & VAN
            </div>

            <div class="sm:w-[350px]  h-[105px] w-[180px] ">
              <p class="sm:text-[16px] text-[12px] overflow-auto break-all">
                Lorem ipsum dolor sit amet, ster sadipscing elit, sed diam sonar
                enmod tempor invidunt ut labore et dolore magna aliquyam aret
                sed diam volatus Al sero eos et accusam et justo duo dolores et
              </p>
            </div>
          </div>
          <div class="p-5">
            <div class="sm:w-[280px] w-[160px] leading-3 h-[24px] py-[8px] font-[700] text-[14px] sm:text-[24px] text-white relative border-b-2 mb-3">
              STORAGE & REMOVAL
            </div>

            <div class="sm:w-[350px]  h-[105px] w-[180px] ">
              <p class="sm:text-[16px] text-[12px] overflow-auto break-all">
                Lorem ipsum dolor sit amet, ster sadipscing elit, sed diam sonar
                enmod tempor invidunt ut labore et dolore magna aliquyam aret
                sed diam volatus Al sero eos et accusam et justo duo dolores et
              </p>
            </div>
          </div>

          <div class="p-5">
            <div class="sm:w-[280px] w-[160px] leading-3 h-[24px] py-[8px] font-[700] text-[14px] sm:text-[24px] text-white relative border-b-2 mb-3">
              PICKUP & Delivery
            </div>

            <div class="sm:w-[350px]  h-[105px] w-[180px] ">
              <p class="sm:text-[16px] text-[12px] overflow-auto break-all">
                Lorem ipsum dolor sit amet, ster sadipscing elit, sed diam sonar
                enmod tempor invidunt ut labore et dolore magna aliquyam aret
                sed diam volatus Al sero eos et accusam et justo duo dolores et
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
