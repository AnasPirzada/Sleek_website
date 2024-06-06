import React from "react";
import callicon from "../../../../assets/callicon.png";
import mailicon from "../../../../assets/mailIcon.png";
import location from "../../../../assets/locationIcon.png";
import clockIcon from "../../../../assets/clockIcon.png";

const index = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="p-4 sm:p-10">
      <div className="sm:p-20 p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border border-white shadow-lg p-0  sm:p-10">
          <div>
            <h1 className="uppercase text-[#E97B08] text-[24px] sm:text-[32px] font-[700] mb-10">
              Contact Us
            </h1>
            <div className="w-full">
              <div className="mb-10">
                <p className="mb-4">Your Name</p>
                <input
                  type="text"
                  className="w-full border border-gray-300 h-[52px] rounded-[8px] p-2 bg-[#F5F5F5]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="mb-10">
                  <p className="mb-4">Transport Type</p>
                  <input
                    type="text"
                    className="w-full border border-gray-300 h-[52px] rounded-[8px] p-2 bg-[#F5F5F5]"
                  />
                </div>
                <div className="mb-10">
                  <p className="mb-4">Subject</p>
                  <input
                    type="text"
                    className="w-full border border-gray-300 h-[52px] rounded-[8px] p-2 bg-[#F5F5F5]"
                  />
                </div>
              </div>
              <div className="mb-10">
                <p className="mb-4">Message</p>
                <textarea className="w-full border border-gray-300 h-[160px] bg-[#F5F5F5] rounded-[8px] p-2"></textarea>
              </div>
              <button className="bg-[#E97B08] py-[16px] px-[24px] w-full text-white text-lg rounded-lg">
                Send message
              </button>
            </div>
          </div>
          <div className="m-auto w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.472877168982!2d-0.0662394244766312!3d51.431109016275194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603d8a7abbeaf%3A0xf0b2e9f32a1915ac!2s9%20Dallas%20Rd%2C%20London%20SE26%206JP%2C%20UK!5e0!3m2!1sen!2s!4v1717502733809!5m2!1sen!2s&zoom=control:false&q=London"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          <div className="text-center bg-gray-100 p-4 rounded-lg">
            <img src={callicon} alt="Call Icon" className="w-12 mx-auto mb-2" />
            <p className="text-lg font-normal mb-2">Phone Number</p>
            <div className="text-[#383939]">
              <p className="text-sm">07462 877455</p>
              <p className="text-sm">07462 911888</p>
              <p className="text-sm">0203 4176141</p>
            </div>
          </div>
          <div className="text-center bg-gray-100 p-4 rounded-lg ">
            <img src={mailicon} alt="Mail Icon" className="w-12 mx-auto mb-2" />
            <p className="text-lg font-normal mb-2">Email Address</p>
            <div className="text-[#383939] overflow-wrap break-word">
              <p className="text-sm whitespace-normal ">
                <span className="break-all sm:break-keep">
                  info@sleekassuredremovals.com
                </span>
              </p>
            </div>
          </div>
          <div className="text-center bg-gray-100 p-4 rounded-lg">
            <img
              src={clockIcon}
              alt="Clock Icon"
              className="w-12 mx-auto mb-2"
            />
            <p className="text-lg font-normal mb-2">Working Hours</p>
            <div className="text-[#383939]">
              <p className="text-sm">Mon – Fri: 7AM – 10PM</p>
              <p className="text-sm">Sat: 8AM – 10PM</p>
              <p className="text-sm">Sun: 8AM – 10PM</p>
            </div>
          </div>
          <div className="text-center bg-gray-100 p-4 rounded-lg">
            <img
              src={location}
              alt="Location Icon"
              className="w-12 mx-auto mb-2"
            />
            <p className="text-lg font-normal mb-2">Our Address</p>
            <div className="text-[#383939] overflow-visible">
              <p className="text-sm">
                9 Dallas Road, Sydenham, London SE26 6JP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
