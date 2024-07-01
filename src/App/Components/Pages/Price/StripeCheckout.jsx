import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Checkout from './Checkout'; // Replace with your Checkout component path

const stripePromise = loadStripe(
  'pk_test_51PH2dsKvSuAOYrcIrXNxqCVOCHU5NyayZYrvKU7nuIdjr9kMwCp0isRg1Yl0iU7rT61prQXbihPObrWpV2qYuGbi00zoyhtZBf'
);

const StripeCheckout = () => {
  const location = useLocation();
  const { activeOptionPaymentMethod, formatEmailContent } = location.state;
  const [amountInCents, setAmountInCents] = useState(0);
  const [recipientEmail, setRecipientEmail] = useState('');

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const depositAmountFromPath = parseFloat(
      pathSegments[pathSegments.length - 1]
    );
    if (!isNaN(depositAmountFromPath)) {
      const amountInCents = Math.floor(depositAmountFromPath * 100);
      setAmountInCents(amountInCents);
    } else {
      alert('Invalid deposit amount in URL.');
    }
  }, [location.pathname]);

  useEffect(() => {
    const savedEmail = sessionStorage.getItem('Email');
    if (savedEmail) {
      setRecipientEmail(savedEmail);
    }
  }, []);

  return (
    <div>
      <Elements stripe={stripePromise}>
        <Checkout
          amountInCents={amountInCents}
          recipientEmail={recipientEmail}
          formatEmailContent={formatEmailContent}
        />
      </Elements>
    </div>
  );
};

export default StripeCheckout;
