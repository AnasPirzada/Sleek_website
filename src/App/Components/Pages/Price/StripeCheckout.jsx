import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CheckoutForm from './Checkout.jsx'; // Replace with your Checkout component path
import { ToastContainer, toast } from 'react-toastify';

const stripePromise = loadStripe(
  'pk_test_51Mb6LjIRO7fBL2MrpoI4DXdvf7aSuhMpWy51eOiNFbbrDgwP9PAjtTiZ7itVRaPVHZcISPmgGroz3CAqYGJ4nTjD00yP4jnnBa'
);

const StripeCheckout = () => {
  const location = useLocation();
  const { activeOptionPaymentMethod, formatEmailContent } =
    location.state || {};
  const [amountInCents, setAmountInCents] = useState(0);
  const [recipientEmail, setRecipientEmail] = useState('');

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const depositAmountFromPath = parseFloat(
      pathSegments[pathSegments.length - 1]
    );
    if (!isNaN(depositAmountFromPath)) {
      const amountInCents = Math.floor(depositAmountFromPath * 16);
      setAmountInCents(amountInCents);
    } else {
      toast.error("Invalid deposit amount in URL.")
    }
  }, [location.pathname]);

  useEffect(() => {
    const savedEmail = sessionStorage.getItem('Email');
    if (savedEmail) {
      setRecipientEmail(savedEmail);
    }
  }, []);

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
            amountInCents={amountInCents}
            recipientEmail={recipientEmail}
            formatEmailContent={formatEmailContent}
          />
        </Elements>
      </div>
    </>
  );
};

export default StripeCheckout;
