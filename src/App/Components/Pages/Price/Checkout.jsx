import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ amountInCents, recipientEmail, formatEmailContent }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [paymentIntentStatus, setPaymentIntentStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (amountInCents > 0) {
      const paymentIntentData = {
        amount: amountInCents,
        currency: 'usd',
        paymentMethodId: 'pm_card_visa', // Assuming you have a valid payment method id
        callbackUrl: "https://ecom-gpay.vercel.app/success",
      };

      fetch('https://gstaxi.azurewebsites.net/stripe/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentIntentData),
      })
        .then(res => {
          if (!res.ok) {
            return res.json().then(error => {
              throw new Error(error.message || 'Failed to fetch client secret');
            });
          }
          return res.json();
        })
        .then(data => {
          console.log('Received data from server:', data);
          // if (data.clientSecret && data.paymentIntentStatus) {
          //   setClientSecret(data.clientSecret);
          //   setPaymentIntentStatus(data.paymentIntentStatus);
          // } else {
          //   setPaymentError('Received incomplete data from server');
          // }
        })
        .catch(error => {
          console.error('Error fetching client secret:', error.message);
          setPaymentError('Error fetching client secret');
        });
    }
  }, [amountInCents]);

  const handlePayment = async () => {
    // if (!clientSecret) {
    //   setPaymentError('Invalid client secret or payment intent status received');
    //   return;
    // }

    // // Check the status of the PaymentIntent before confirming
    // if (paymentIntentStatus === 'succeeded') {
    //   setPaymentError('This PaymentIntent has already succeeded.');
    //   return;
    // } else if (paymentIntentStatus !== 'requires_confirmation') {
    //   setPaymentError(`Unexpected payment status: ${paymentIntentStatus}`);
    //   return;
    // }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

    //   if (error) {
    //     console.error('Stripe payment error:', error);
    //     setPaymentError(`Payment failed: ${error.message}`);
    //   } else if (paymentIntent.status === 'succeeded') {
    //     console.log('Payment succeeded:', paymentIntent);
    //     sendEmail(formatEmailContent);
    //   } else {
    //     console.warn('Unexpected payment status:', paymentIntent.status);
    //     setPaymentError(`Unexpected payment status: ${paymentIntent.status}`);
    //   }
    } catch (error) {
      console.error('Payment processing error:', error.message);
      setPaymentError(`Payment processing error: ${error.message}`);
    }
  };

  const sendEmail = emailContent => {
    // Implement email sending logic here
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      setErrorMessage('Stripe has not loaded correctly.');
      return;
    }

    handlePayment();
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit} className='max-w-md w-full p-4 bg-white rounded shadow'>
        <h2 className='text-xl font-semibold mb-4'>Payment method</h2>

        <div className='mb-4'>
          <label className='block mb-2'>Card Details</label>
          <CardElement className='w-full p-2 border rounded' />
        </div>
        <button type='submit' className='w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700' disabled={!stripe || !elements}>
          Pay ${amountInCents / 100}
        </button>
        {paymentError && <div className='text-red-500 mb-4'>{paymentError}</div>}
        {errorMessage && <div className='text-red-500 mb-4'>{errorMessage}</div>}
      </form>
    </div>
  );
};

export default CheckoutForm;