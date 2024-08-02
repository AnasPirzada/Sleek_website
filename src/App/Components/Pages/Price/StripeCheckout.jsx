import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import CheckoutForm from './Checkout.jsx'; // Replace with your Checkout component path

const stripePromise = loadStripe(
  'pk_live_51Mb6LjIRO7fBL2MraUu95NWA921zNBpCMbU7IHg9IjiIPZD2KpvKzZArOiKOisG9iuSIpadP1QwWOtaYuV1QXWyF00U62mzcFj'
);

const StripeCheckout = () => {
  const location = useLocation();
  const {
    activeOptionPaymentMethod,
    Name,
    Emailofuser,
    Phone,
    pickupStreetAddress,
    vanDetails,
    emailContent,
    pickupCityItem,
    deliveryStreetAddress,
    deliveryCityItem,
    selectedDate,
    VehicleDuration,
    pickupStairsValue,
    deliveryStairsValue,
    selectedVehicleValue,
    activeOptionYouHaveLIFTS,
    selectedVehicleDuration,
    totalDistance,
    totalRatepermile,
    DropOffAmount,
    PickupAmount,
    deliveryValues,
    DriverChargesValue,
    Description,
    TotalExtendedAmount,
    depositAmountValue,
    selectedPaymentAmount,
  } = location.state || {};
  const [amountInCents, setAmountInCents] = useState(0);
  const [AmountInpounds, setAmountInpounds] = useState(0);
  const [recipientEmail, setRecipientEmail] = useState('');
  console.log('Preparing to checkout...', {
    Name,
    Emailofuser,
    Phone,
    pickupStreetAddress,
    pickupCityItem,
    deliveryStreetAddress,
    deliveryCityItem,
    selectedDate,
    VehicleDuration,
    pickupStairsValue,
    deliveryStairsValue,
    selectedVehicleValue,
    activeOptionYouHaveLIFTS,
    selectedVehicleDuration,
    totalDistance,
    totalRatepermile: totalRatepermile,
    DropOffAmount,
    PickupAmount,
    deliveryValues,
    DriverChargesValue,
    Description,
    TotalExtendedAmount,
    depositAmountValue: depositAmountValue,
    selectedPaymentAmount: selectedPaymentAmount,
  });
  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const depositAmountFromPath = parseFloat(
      pathSegments[pathSegments.length - 1]
    );
    console.log('total amount', depositAmountFromPath);
    if (!isNaN(depositAmountFromPath)) {
      const amountInpounds = depositAmountFromPath;

      const amountInCents = Math.floor(depositAmountFromPath * 100);
      console.log('convertedamountInCents', amountInCents);
      setAmountInCents(amountInCents);
      setAmountInpounds(amountInpounds);
    } else {
      toast.error('Invalid deposit amount in URL.');
    }
  }, [location.pathname]);

  useEffect(() => {
    const savedEmail = sessionStorage.getItem('Email');
    if (savedEmail) {
      setRecipientEmail(savedEmail);
    }
  }, []);
  console.log('total amountInCents', amountInCents);

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            amountInpounds={AmountInpounds}
            amountInCents={amountInCents}
            recipientEmail={recipientEmail}
            Name={Name}
            Emailofuser={Emailofuser}
            Phone={Phone}
            vanDetails={vanDetails}
            emailContent={emailContent}
            pickupStreetAddress={pickupStreetAddress}
            pickupCityItem={pickupCityItem}
            deliveryStreetAddress={deliveryStreetAddress}
            deliveryCityItem={deliveryCityItem}
            selectedDate={selectedDate}
            VehicleDuration={VehicleDuration}
            pickupStairsValue={pickupStairsValue}
            deliveryStairsValue={deliveryStairsValue}
            selectedVehicleValue={selectedVehicleValue}
            activeOptionYouHaveLIFTS={activeOptionYouHaveLIFTS}
            selectedVehicleDuration={selectedVehicleDuration}
            totalDistance={totalDistance}
            totalRatepermile={totalRatepermile}
            DropOffAmount={DropOffAmount}
            PickupAmount={PickupAmount}
            deliveryValues={deliveryValues}
            DriverChargesValue={DriverChargesValue}
            Description={Description}
            TotalExtendedAmount={TotalExtendedAmount}
            depositAmountValue={depositAmountValue}
            selectedPaymentAmount={selectedPaymentAmount}
          />
        </Elements>
      </div>
    </>
  );
};

export default StripeCheckout;
