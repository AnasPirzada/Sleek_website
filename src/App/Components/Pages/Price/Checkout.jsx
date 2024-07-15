import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import emailjs from 'emailjs-com';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutForm = ({ amountInCents, formatEmailContent }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentIntentStatus, setPaymentIntentStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    if (amountInCents > 0) {
      const paymentIntentData = {
        amount: amountInCents,
        currency: 'gpb',
        paymentMethodId: 'pm_card_visa',
        callbackUrl: 'https://ecom-gpay.vercel.app/success',
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
          if (data.paymentIntent.client_secret && data.paymentIntent.status) {
            setClientSecret(data.paymentIntent.client_secret);
            setPaymentIntentStatus(data.paymentIntent.status);
          } else {
            setPaymentError('Received incomplete data from server');
            toast.error('Received incomplete data from server');
          }
        })
        .catch(error => {
          console.error('Error fetching client secret:', error.message);
          setPaymentError('Error fetching client secret');
          toast.error('Error fetching client secret');
        });
    }
  }, [amountInCents]);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('ZIx7xdSk-EHLqBZOd');
  }, []);

  const handlePayment = async () => {
    if (!clientSecret) {
      const errorMessage = 'Invalid client secret or payment intent status received';
      setPaymentError(errorMessage);
      toast.error(errorMessage);
      return;
    }

    if (paymentIntentStatus === 'succeeded') {
      toast.success('Payment Succeeded');
      return;
    } else if (
      paymentIntentStatus !== 'requires_confirmation' &&
      paymentIntentStatus !== 'requires_action'
    ) {
      const errorMessage = `Unexpected payment status: ${paymentIntentStatus}`;
      setPaymentError(errorMessage);
      toast.error(errorMessage);
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );

      if (error) {
        console.error('Stripe payment error:', error);
        const errorMessage = `Payment failed: ${error.message}`;
        setPaymentError(errorMessage);
        toast.error(errorMessage);
      } else if (paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded:', paymentIntent);
        toast.success('Payment Succeeded');
        sendEmail(); // Assuming sendEmail is defined elsewhere
      } else {
        console.warn('Unexpected payment status:', paymentIntent.status);
        const errorMessage = `Unexpected payment status: ${paymentIntent.status}`;
        setPaymentError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error('Payment processing error:', error.message);
      const errorMessage = `Payment processing error: ${error.message}`;
      setPaymentError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const sendEmail = () => {
    console.log('Preparing to send email...');
    const emailContent = formatEmailContent;
    const templateParams = {
      message: emailContent,
    };

    emailjs
      .send('service_fwnx2ff', 'template_owfy6ml', templateParams)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Email sent successfully!');
      })
      .catch(error => {
        console.error('FAILED...', error);
        toast.error('Failed to send email.');
      });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      const errorMessage = 'Stripe has not loaded correctly.';
      setErrorMessage(errorMessage);
      toast.error(errorMessage);
      return;
    }

    handlePayment();
  };

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
      <div className='flex justify-center items-center h-screen'>
        <form
          onSubmit={handleSubmit}
          className='max-w-md w-full p-4 bg-white rounded shadow'
        >
          <h2 className='text-xl font-semibold mb-4'>Payment method</h2>

          <div className='mb-4'>
            <label className='block mb-2'>Card Details</label>
            <CardElement className='w-full p-2 border rounded' />
          </div>
          <button
            type='submit'
            className='w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700'
            disabled={!stripe || !elements}
          >
            Pay Amount in Ounce £{amountInCents}
          </button>
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
