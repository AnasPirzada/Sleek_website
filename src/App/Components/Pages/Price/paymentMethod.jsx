import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentMethod = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { depositAmount, formatEmailContent } = location.state || {};
  const [activeOptionPaymentMethod, setActivePaymentMethod] = useState(null);

  const handleOptionPaymentMethod = (method) => {
    setActivePaymentMethod(method);
    console.log(`Selected payment method: ${method}`);
  };

  const SelectedPaymentMethod = () => {
    if (activeOptionPaymentMethod === "Stripe") {
      navigate(`/StripeCheckout/${depositAmount}`, {
        state: {
          activeOptionPaymentMethod,
          depositAmount,
          formatEmailContent,
        },
      });
    } else if (activeOptionPaymentMethod === "Paypal") {
      alert("Paypal Is Coming Soon");
    } else {
      alert("Please Select Payment Method");
    }
  };

  return (
    <>
      <div className="my-10 px-10">
        <p className="text-[#181919] text-[24px]">Choose the payment method</p>
        <p className="text-[#181919] text-[18px]">Deposit Amount: {depositAmount}</p>
        <div className="flex gap-5 pt-6">
          <div className="flex gap-3 items-center">
            <div
              className={`h-[24px] w-[24px] border-2 rounded-full flex justify-center items-center text-center cursor-pointer ${
                activeOptionPaymentMethod === "Stripe"
                  ? "border-[#E97B08]"
                  : "border-black"
              }`}
              onClick={() => handleOptionPaymentMethod("Stripe")}
            >
              <div
                className={`h-[16px] w-[16px] rounded-full ${
                  activeOptionPaymentMethod === "Stripe"
                    ? "bg-[#E97B08]"
                    : "bg-white"
                }`}
              ></div>
            </div>
            <img src="/Strip.svg" alt="Stripe" />
          </div>
          <div className="flex gap-3 items-center">
            <div
              className={`h-[24px] w-[24px] border-2 rounded-full flex justify-center items-center text-center cursor-pointer ${
                activeOptionPaymentMethod === "Paypal"
                  ? "border-[#E97B08]"
                  : "border-black"
              }`}
              onClick={() => handleOptionPaymentMethod("Paypal")}
            >
              <div
                className={`h-[16px] w-[16px] rounded-full ${
                  activeOptionPaymentMethod === "Paypal"
                    ? "bg-[#E97B08]"
                    : "bg-white"
                }`}
              ></div>
            </div>
            <img src="/Frame 109.png" alt="Paypal" />
          </div>
        </div>
        <div className="text-center my-5">
          <button
            onClick={SelectedPaymentMethod}
            className="py-2 px-5 rounded-md text-[#FFFFFF] bg-[#E97B08] shadow-lg"
          >
            Select Payment Method
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
