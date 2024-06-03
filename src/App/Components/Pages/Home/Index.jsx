import React from "react";
import imagesholder from "../../../../assets/imagesholder.png";
import mobilmeImage from "../../../../assets/imagemobielView.png";
const Index = () => {
  return (
    <div className=" relative max-w-full overflow-x-hidden h-full">
      <div>
        <picture>
          <source srcSet={mobilmeImage} media="(max-width: 1023px)" />

          <img
            className="w-[1440px] h-[680px]"
            src={imagesholder}
            alt="2 person holding stuff"
          />
        </picture>
      </div>
      <div className="absolute md:top-[92px] top-[75px] lg:left-20 left-10 w-full  text-white ">
        <p className="uppercase text-[24px] font-[500] mb-1 px-14 sm:px-0">
          Welcome to
        </p>

        <h1 className="md:text-[48px] text-[24px] font-[800] mb-3 uppercase">
          SLEEK ASSURED REMOVALS
        </h1>
        <div class="lg:flex lg:justify-center">
          <p
            class="lg:text-[24px] text-[16px] font-[500]"
            style={{ textAlignLast: "center" }}
          >
            Enjoy the most reliable service in the United Kingdom
          </p>
        </div>

        <div className="mt-5 mb-4 flex flex-wrap center gap-5 ">
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
        <div className="bg-[#E97B08] flex gap-2 w-[232px] rounded-[8px] px-[40px] py-[8px]">
          <span className="uppercase text-white  ">Show quote</span>
          <img
            src="/leftArrow.svg"
            alt="left Arrow"
            className="w-[24px] h-[24px]"
          />
        </div>
      </div>
      <div className="relative px-0 sm:px-20 max-w-full overflow-x-hidden h-full flex justify-center mt-0 sm:mt-[-120px]">
        <div className="sm:w-[1170px] w-[430px] h-full xl:p-10 sm:h-full rounded-0 sm:rounded-[8px] bg-[#E97B08] gap-2 grid lg:grid-cols-2 sm:grid-cols-2">
          <div class="p-5">
            <div class="sm:w-[280px] h-[40px] py-[8px] font-[700] text-[24px] text-white relative border-b-2 mb-3">
              Home Removals
            </div>

            <div class="sm:w-[350px]  w-[190px] ">
              <p class="sm:text-[16px] text-[14pxs] overflow-auto break-all">
                Lorem ipsum dolor sit amet, ster sadipscing elit, sed diam sonar
                enmod tempor invidunt ut labore et dolore magna aliquyam aret
                sed diam volatus Al sero eos et accusam et justo duo dolores et
              </p>
            </div>
          </div>

          <div class="p-5">
            <div class="w-[280px] h-[40px] py-[8px] font-[700] text-[24px] text-white relative border-b-2 mb-3">
              MAN & VAN
            </div>

            <div class="sm:w-[350px]  w-[190px] ">
              <p class="sm:text-[16px] text-[14pxs] overflow-auto break-all">
                Lorem ipsum dolor sit amet, ster sadipscing elit, sed diam sonar
                enmod tempor invidunt ut labore et dolore magna aliquyam aret
                sed diam volatus Al sero eos et accusam et justo duo dolores et
              </p>
            </div>
          </div>
          <div class="p-5">
            <div class="w-[280px] h-[40px] py-[8px] font-[700] text-[24px] text-white relative border-b-2 mb-3">
              STORAGE & REMOVAL
            </div>

            <div class="sm:w-[350px]  w-[190px] ">
              <p class="sm:text-[16px] text-[14pxs] overflow-auto break-all">
                Lorem ipsum dolor sit amet, ster sadipscing elit, sed diam sonar
                enmod tempor invidunt ut labore et dolore magna aliquyam aret
                sed diam volatus Al sero eos et accusam et justo duo dolores et
              </p>
            </div>
          </div>
          <div class="p-5">
            <div class="w-[280px] h-[40px] py-[8px] font-[700] text-[24px] text-white relative border-b-2 mb-3">
              PICK UP & DELIVERY
            </div>
            <div class="sm:w-[350px]  w-[190px] ">
              <p class="sm:text-[16px] text-[14pxs] overflow-auto break-all">
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
