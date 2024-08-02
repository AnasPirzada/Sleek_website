import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Narbar/index.jsx";

const stripePromise = loadStripe(
  "pk_live_51Mb6LjIRO7fBL2MraUu95NWA921zNBpCMbU7IHg9IjiIPZD2KpvKzZArOiKOisG9iuSIpadP1QwWOtaYuV1QXWyF00U62mzcFj"
);

const Price = () => {
  const navigate = useNavigate();
  let { depositAmount } = useParams();
  const [activeDiv, setActiveDiv] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const handleClick = (id) => {
    setActiveDiv(id === activeDiv ? null : id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeOptionYouHaveLIFTS, setSelectedValue] = useState("");
  const [Name, setSelectedName] = useState("");
  const [Phone, setSelectedPhone] = useState("");
  const [Emailofuser, setSelectedEmailofuser] = useState("");
  const [selectedVehicleDuration, setSelectedVehicleDurationValue] =
    useState("");
  const [totalDistance, setSelectedSelectedtotalDistance] = useState("");
  const [distanceInMiles, setSelecteddistanceInMilesValue] = useState("");
  const [totalRatepermile, setSelectedSelectedtotalRatepermile] = useState("");
  const [Description, setSelectedSelectedDescription] = useState("");
  const [PickupAmount, setSelectedPickupAmount] = useState("");
  const [deliveryValues, setSelecteddeliveryValues] = useState("");
  const [DropOffAmount, setSelectedDropOffAmount] = useState("");
  const [pickupStreetAddress, setssavedpickupStreetAddress] = useState("");
  const [pickupCityItem, setSelectedpickupCityItem] = useState("");

  const [deliveryStreetAddress, setssaveddeliveryStreetAddress] = useState("");

  const [deliveryCityItem, setSelecteddeliveryCityItem] = useState("");

  const [selectedDate, setssavedselectedDate] = useState("");
  const [VehicleDuration, setssavedselectedVehicleDuration] = useState("");

  const [deliveryStairsValue, setDeliveryStairsValue] = useState(0);
  const [pickupStairsValue, setPickupStairsValue] = useState(0);
  const [selectedVehicleValue, setVehicle] = useState(0);
  const [TotalAmount, setsTotalAmount] = useState(0);
  const [DrivervalueCharges, setssavedDrivervalueCharges] = useState(0);
  const [selecteddeliveryValues, setdeliveryValues] = useState(0);

  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [selectedPaymentAmount, setSelectedPaymentAmount] = useState(0);
  const location = useLocation();
  console.log("Totoal Distance", deliveryStreetAddress);
  // const { distanceInMiles } = location.state || { distanceInMiles: 0 };
  const roundedDistance = Math.round(distanceInMiles);

  useEffect(() => {
    const savedActiveOptionYouHaveLIFTS = JSON.parse(
      sessionStorage.getItem("YouHaveLIFTS")
    );
    const savedDeliveryValues = JSON.parse(
      sessionStorage.getItem("deliveryValues")
    );
    const savedSelectedVehicleDuration = JSON.parse(
      sessionStorage.getItem("selectedVehicleDuration")
    );
    const savedSelectedtotalDistance = JSON.parse(
      sessionStorage.getItem("totalDistance")
    );
    const savedSelectedtotalRatepermile = JSON.parse(
      sessionStorage.getItem("totalRatepermile")
    );
    const savedSelectedDescription = JSON.parse(
      sessionStorage.getItem("Description")
    );
    const savedSelectedPickupAmount = JSON.parse(
      sessionStorage.getItem("PickupAmount")
    );
    const savedSelecteddeliveryValues = JSON.parse(
      sessionStorage.getItem("deliveryValues")
    );
    const savedSelectedDropOffAmount = JSON.parse(
      sessionStorage.getItem("DropOffAmount")
    );

    const savedSelecteddistanceInMiles = JSON.parse(
      sessionStorage.getItem("distanceInMiles")
    );
    const savedSelectedStairsValue = JSON.parse(
      sessionStorage.getItem("DeliverySTAIRS")
    );
    const savedPickupStairsValue = JSON.parse(
      sessionStorage.getItem("PICKUPSTAIRS")
    );
    const savedSelectedVehicle = JSON.parse(
      sessionStorage.getItem("selectedVehicle")
    );
    const saveddeliveryValues = JSON.parse(
      sessionStorage.getItem("deliveryValues")
    );
    const savedTotalAmount = JSON.parse(sessionStorage.getItem("TotalAmount"));
    const savedDrivervalueCharges = JSON.parse(
      sessionStorage.getItem("DrivervalueCharges")
    );
    const savedEmailofuser = JSON.parse(sessionStorage.getItem("Email"));
    const savedName = JSON.parse(sessionStorage.getItem("Name"));
    const savedPhone = JSON.parse(sessionStorage.getItem("Phone"));
    const savedselectedDate = JSON.parse(
      sessionStorage.getItem("selectedDate")
    );
    const savedselectedVehicleDuration = JSON.parse(
      sessionStorage.getItem("selectedVehicleDuration")
    );

    const pickupStreetAddressItem = sessionStorage.getItem(
      "pickupStreetAddress"
    );
    const pickupCityItem = sessionStorage.getItem("pickupCity");

    const deliveryStreetAddressItem = sessionStorage.getItem(
      "deliveryStreetAddress"
    );
    const deliveryCityItem = sessionStorage.getItem("deliveryCity");

    const saveddeliveryStreetAddress =
      deliveryStreetAddressItem &&
      (deliveryStreetAddressItem.trim().startsWith("{") ||
        deliveryStreetAddressItem.trim().startsWith("["))
        ? JSON.parse(deliveryStreetAddressItem)
        : deliveryStreetAddressItem;

    const savedpickupStreetAddress =
      pickupStreetAddressItem &&
      (pickupStreetAddressItem.trim().startsWith("{") ||
        pickupStreetAddressItem.trim().startsWith("["))
        ? JSON.parse(pickupStreetAddressItem)
        : pickupStreetAddressItem;

    setSelectedpickupCityItem(pickupCityItem);
    setSelecteddeliveryCityItem(deliveryCityItem);

    setSelectedEmailofuser(savedEmailofuser);
    setSelectedName(savedName);
    setSelectedPhone(savedPhone);
    setSelectedValue(savedActiveOptionYouHaveLIFTS);
    setSelecteddeliveryValues(savedDeliveryValues);
    setSelecteddeliveryValues(savedDeliveryValues);

    setSelectedVehicleDurationValue(savedSelectedVehicleDuration);
    setSelectedSelectedtotalDistance(savedSelectedtotalDistance);
    setSelectedSelectedtotalRatepermile(savedSelectedtotalRatepermile);
    setSelectedSelectedDescription(savedSelectedDescription);
    setSelectedPickupAmount(savedSelectedPickupAmount);
    setSelecteddeliveryValues(savedSelecteddeliveryValues);
    setSelectedDropOffAmount(savedSelectedDropOffAmount);
    setSelecteddistanceInMilesValue(savedSelecteddistanceInMiles);
    setDeliveryStairsValue(savedSelectedStairsValue);
    setPickupStairsValue(savedPickupStairsValue);
    setVehicle(savedSelectedVehicle);
    setsTotalAmount(savedTotalAmount);
    setssavedDrivervalueCharges(savedDrivervalueCharges);
    setssavedpickupStreetAddress(savedpickupStreetAddress);
    setssaveddeliveryStreetAddress(saveddeliveryStreetAddress);
    setssavedselectedDate(savedselectedDate);
    setssavedselectedVehicleDuration(savedselectedVehicleDuration);
  }, []);
  console.log("Pick Up Stairs", deliveryStreetAddress);

  console.log("Devlivery Stairs", deliveryStairsValue);
  console.log("deliveryValues", selecteddeliveryValues);
  console.log("car", selectedVehicleValue);

  let TotalExtendedAmount;

  TotalExtendedAmount = TotalAmount;

  const depositAmountValue = 0.1 * TotalExtendedAmount;
  // Getting Click result
  const [recipientEmail, setRecipientEmail] = useState("");

  const [activeOptionPaymentMethod, setActivePaymentMethod] = useState(null);

  const handleOptionPaymentMethod = (method, amount) => {
    setActivePaymentMethod(method);
    setSelectedPaymentOption(method);
    setSelectedPaymentAmount(amount);
    console.log(`Selected payment method: ${method}`);
  };

  const SelectedPaymentMethod = () => {
    const emailContent = formatEmailContent();
    console.log("Formatted Email Content in Price.jsx:", emailContent);
    navigate(`/paymentmethods/${selectedPaymentAmount}`, {
      state: {
        
        depositAmount: selectedPaymentAmount,


        Name, Emailofuser, Phone, pickupStreetAddress, pickupCityItem, deliveryStreetAddress,
        deliveryCityItem, selectedDate, VehicleDuration, pickupStairsValue, deliveryStairsValue,
        selectedVehicleValue, activeOptionYouHaveLIFTS, selectedVehicleDuration, totalDistance,
        totalRatepermile: !isNaN(parseFloat(totalRatepermile)) ? parseFloat(totalRatepermile).toFixed(1) : "Invalid amount",
        DropOffAmount, PickupAmount, deliveryValues, DriverChargesValue, Description,
        TotalExtendedAmount, depositAmountValue: depositAmountValue.toFixed(1),
        selectedPaymentAmount: selectedPaymentAmount.toFixed(1),
        formatEmailContent: emailContent,
        











      },
    });
  };

  let DriverChargesValue;
  DriverChargesValue =
    TotalExtendedAmount - DropOffAmount - PickupAmount - totalRatepermile;
  console.log("DriverChargesValue");
  console.log(
    "totalRatepermile",
    totalRatepermile,
    DropOffAmount,
    PickupAmount,
    TotalExtendedAmount,
    TotalAmount,
    DriverChargesValue
  );

 

  const formatEmailContent = () => {
    let vanDetails = "";

    switch (selectedVehicleValue) {
      case "small-van":
        vanDetails = `
        Small van NOTE Any additional minutes after the booked hours will be charged at £22.50 per half an hour and should be paid by the customer directly to the driver. Any unused minutes are non-refundable
  
        Collections and deliveries inside the congestion zone will be charged at £15.00
        If parking fees are involved, you must pay them yourself or pay their value in cash or by bank transfer at the conclusion of the assignment.
        If you have any questions or issues, please feel free to contact us on any of the numbers on our website or through the contact form.
        You can also contact our support line at 07462 877455 , 07455 911888 , 0203 4176141`;
        break;
      case "medium-van":
        vanDetails = `
        Medium van NOTE Any additional minutes after the booked hours will be charged at £25.50 per half an hour and should be paid by the customer directly to the driver. Any unused minutes are non-refundable
  
        Collections and deliveries inside the congestion zone will be charged at £15.00
        If parking fees are involved, you must pay them yourself or pay their value in cash or by bank transfer at the conclusion of the assignment.
        If you have any questions or issues, please feel free to contact us on any of the numbers on our website or through the contact form.
        You can also contact our support line at 07462 877455 , 07455 911888 , 0203 4176141`;
        break;
      case "large-van":
        vanDetails = `
        Large van NOTE Any additional minutes after the booked hours will be charged at £40.50 per half an hour and should be paid by the customer directly to the driver. Any unused minutes are non-refundable
  
        Collections and deliveries inside the congestion zone will be charged at £15.00
        If parking fees are involved, you must pay them yourself or pay their value in cash or by bank transfer at the conclusion of the assignment.
        If you have any questions or issues, please feel free to contact us on any of the numbers on our website or through the contact form.
        You can also contact our support line at 07462 877455 , 07455 911888 , 0203 4176141`;
        break;
      case "giant-van":
        vanDetails = `
        Luton van NOTE Any additional minutes after the booked hours will be charged at £42.50 per half an hour and should be paid by the customer directly to the driver. Any unused minutes are non-refundable
  
        Collections and deliveries inside the congestion zone will be charged at £15.00
        If parking fees are involved, you must pay them yourself or pay their value in cash or by bank transfer at the conclusion of the assignment.
        If you have any questions or issues, please feel free to contact us on any of the numbers on our website or through the contact form.
        You can also contact our support line at 07462 877455 , 07455 911888 , 0203 4176141`;
        break;
      default:
        vanDetails = "";
        break;
    }

    return `
${Name}${Emailofuser}${Phone}${pickupStreetAddress} + ${pickupCityItem}${deliveryStreetAddress} + ${deliveryCityItem}${selectedDate} ${VehicleDuration}
      ${pickupStairsValue}${deliveryStairsValue}${selectedVehicleValue}${vanDetails}${activeOptionYouHaveLIFTS}${selectedVehicleDuration}${totalDistance} 
 ${
   !isNaN(parseFloat(totalRatepermile))
     ? parseFloat(totalRatepermile).toFixed(1)
     : "Invalid amount"
 }${DropOffAmount}${PickupAmount}${deliveryValues}${DriverChargesValue}${Description}${TotalExtendedAmount}${depositAmountValue.toFixed(
      1
    )}${selectedPaymentAmount.toFixed(1)}

    `;
  };

  // Set totoal Value in session storage
  const [additionalTimePrice, setAdditionalTimePrice] = useState("£22.50");
  useEffect(() => {
    switch (selectedVehicleValue) {
      case "small-van":
        setAdditionalTimePrice("£22.50");
        break;
      case "medium-van":
        setAdditionalTimePrice("£25.50");
        break;
      case "large-van":
        setAdditionalTimePrice("£40.50");
        break;
      case "giant-van":
        setAdditionalTimePrice("£42.50");
        break;
      default:
        setAdditionalTimePrice("£22.50");
        break;
    }
  }, [selectedVehicleValue]);
  return (
    <>
      <Navbar />

      <section className="px-5 ">
        <div className="">
          <div className="flex flex-col">
            <div>
              <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-[120px]">
                <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] leading-tight text-[#E97B08] text-center">
                  Contact & Billing Info
                </h1>
              </div>
              <div className="mt-5 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-[80px] bg-[#F5F5F5] rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
                <div className="rounded-xl py-6 sm:py-8 md:py-10">
                  <div className="flex justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                      Name
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium">
                      {Name}
                    </p>
                  </div>
                  <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
                </div>
                <div className="rounded-xl py-6 sm:py-8 md:py-10">
                  <div className="flex justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                      Email
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium">
                      {Emailofuser}
                    </p>
                  </div>
                  <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
                </div>
                <div className="rounded-xl py-6 sm:py-8 md:py-10">
                  <div className="flex justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                      Phone
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium">
                      {Phone}
                    </p>
                  </div>
                  <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
                </div>
              </div>
            </div>{" "}
            <div>
              <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-[120px]">
                <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] leading-tight text-[#E97B08] text-center">
                  Moving details{" "}
                </h1>
              </div>
              <div className="mt-5 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-[80px] bg-[#F5F5F5] rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
                <div className="rounded-xl py-6 sm:py-8 md:py-10">
                  <div className="flex flex-col  md:flex-row  justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                      PICKUP LOCATION
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl  text-[#181919] font-medium">
                      {pickupStreetAddress}, Door Number ({pickupCityItem})
                    </p>
                  </div>
                  <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
                </div>
                <div className="rounded-xl py-6 sm:py-8 md:py-10">
                  <div className="flex flex-col  md:flex-row  justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl font-normal text-[#272828]">
                      DROP-OFF LOCATION
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl text-[#181919] font-medium">
                      {deliveryStreetAddress}, Door Number ({deliveryCityItem})
                    </p>
                  </div>
                  <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
                </div>
                <div className="rounded-xl py-6 sm:py-8 md:py-10">
                  <div className="flex justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                      PICKUP DATE
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl text-[#181919] font-medium">
                      {selectedDate}
                    </p>
                  </div>
                  <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
                </div>{" "}
                <div className="rounded-xl py-6 sm:py-8 md:py-10">
                  <div className="flex justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                      PICKUP STAIRS
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl text-[#181919] font-medium">
                      {pickupStairsValue}
                    </p>
                  </div>
                  <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
                </div>
                <div className="rounded-xl py-6 sm:py-8 md:py-10">
                  <div className="flex justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                      DROP-OFF STAIRS
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl text-[#181919] font-medium">
                      {deliveryStairsValue}
                    </p>
                  </div>
                  <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
                </div>
                <div className="rounded-xl py-6 sm:py-8 md:py-10">
                  <div className="flex justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                      SELECTED VAN
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl text-[#181919] font-medium">
                      {selectedVehicleValue}
                    </p>
                  </div>
                  <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-[120px]">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] leading-tight text-[#E97B08] text-center">
              Price Breakdown
            </h1>
          </div>
          <div className="mt-5 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-[80px] bg-[#F5F5F5] rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
            <div className="rounded-xl py-6 sm:py-8 md:py-10">
              <div className="flex justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                  Lift Availability
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium">
                  {activeOptionYouHaveLIFTS}
                </p>
              </div>
              <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
            </div>
            <div className="rounded-xl py-6 sm:py-8 md:py-10">
              <div className="flex justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                  Booking Time
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium">
                  {selectedVehicleDuration}
                </p>
              </div>
              <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
            </div>
            <div className="rounded-xl py-6 sm:py-8 md:py-10">
              <div className="flex justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                  Total Distance
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium">
                  {totalDistance} miles
                </p>
              </div>
              <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
            </div>
            <div className="rounded-xl py-6 sm:py-8 md:py-10">
              <div className="flex justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                  Mileage Charges
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium">
                  £
                  {!isNaN(parseFloat(totalRatepermile))
                    ? parseFloat(totalRatepermile).toFixed(1)
                    : "Invalid amount"}
                </p>
              </div>
              <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
            </div>
            <div className="rounded-xl py-6 sm:py-8 md:py-10">
              <div className="flex justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                  Drop-off-stairs
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium">
                  £{DropOffAmount}
                </p>
              </div>
              <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
            </div>
            <div className="rounded-xl py-6 sm:py-8 md:py-10">
              <div className="flex justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                  Pickup-stairs
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium">
                  £{PickupAmount}
                </p>
              </div>
              <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
            </div>
            <div className="rounded-xl py-6 sm:py-8 md:py-10">
              <div className="flex justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                  Helping Loading & Unloading
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium">
                  {deliveryValues}
                </p>
              </div>
              <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
            </div>

            <div className="rounded-xl py-6 sm:py-8 md:py-10">
              <div className="flex justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#272828]">
                  Driver Time Charges
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#181919] font-medium">
                  £{DriverChargesValue}
                </p>
              </div>
              <hr className="border-black w-full mt-6 sm:mt-8 md:mt-10" />
            </div>

            <p className="my-10 text-red-500 text-base">
              ANY ADDITIONAL TIME WILL BE CHARGED AT {additionalTimePrice} Per
              Half Hour
            </p>
            <div className="flex justify-between pt-10">
              <h2 className="font-semibold text-lg sm:text-2xl">Total Cost</h2>
              <p className="font-medium text-lg sm:text-2xl">
                £{TotalExtendedAmount}
              </p>
            </div>
            <div className="flex justify-between py-6">
              <h2 className="font-semibold text-lg sm:text-2xl">
                To Pay Now{" "}
                <span className="text-base font-normal leading-[24px]">
                  (10% deposit)
                </span>
              </h2>
              <p className="font-medium text-lg sm:text-2xl">
                £{depositAmountValue.toFixed(1)}
              </p>
            </div>

            <div className="text-start my-5 flex flex-col sm:flex-row sm:justify-start">
              <button
                onClick={() =>
                  handleOptionPaymentMethod("deposit", depositAmountValue)
                }
                className={`py-2 px-5 rounded-md text-[#FFFFFF] ${
                  selectedPaymentOption === "deposit"
                    ? "bg-[#E97B08]"
                    : "bg-gray-400"
                } shadow-lg`}
              >
                Pay 10% Deposit
              </button>
              <button
                onClick={() =>
                  handleOptionPaymentMethod("total", TotalExtendedAmount)
                }
                className={`py-2 px-5 rounded-md text-[#FFFFFF] ${
                  selectedPaymentOption === "total"
                    ? "bg-[#E97B08]"
                    : "bg-gray-400"
                } shadow-lg ml:0 mt-5 md:mt-0 md:ml-4`}
              >
                Pay Total Amount
              </button>
            </div>

            <p className="my-5 text-black-400 text-base">
              Pay 10% deposit now and pay the balance in cash after
              the job is done
            </p>

            <div className="my-10">
              <div className="text-center my-5">
                <button
                  onClick={SelectedPaymentMethod}
                  className="py-2 px-5 rounded-md text-[#FFFFFF] bg-[#E97B08] shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
