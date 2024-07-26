import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import emailjs from 'emailjs-com';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutForm = ({
  amountInCents,
  formatEmailContent,
  amountInpounds,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentIntentStatus, setPaymentIntentStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    emailjs.init('ZIx7xdSk-EHLqBZOd'); // Replace with your actual EmailJS user ID
  }, []);

  const handlePayment = async clientSecret => {
    if (!clientSecret) {
      const errorMessage =
        'Invalid client secret or payment intent status received';
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

    if (
      typeof formatEmailContent !== 'string' ||
      formatEmailContent.trim() === ''
    ) {
      toast.error('Failed to send email: Invalid email content');
      return;
    }

    // const emailContent = formatEmailContent();
    const templateParams = {
      message: formatEmailContent,
    };
    emailjs
      .send('service_fwnx2ff', 'template_owfy6ml', templateParams)
      .then(response => {
        toast.success('Email sent successfully!');
      })
      .catch(error => {
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

    const cardElement = elements.getElement(CardElement);

    // Create payment method
    const { error: createPaymentMethodError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

    if (createPaymentMethodError) {
      console.error('Error creating payment method:', createPaymentMethodError);
      toast.error(createPaymentMethodError.message);
      return;
    }

    const paymentIntentData = {
      amount: amountInCents,
      currency: 'gbp',
      paymentMethodId: paymentMethod.id,
      callbackUrl: 'https://ecom-gpay.vercel.app/success',
    };

    try {
      const res = await fetch(
        'https://gstaxi.azurewebsites.net/stripe/charge',
        {
          // Replace with your live server URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentIntentData),
        }
      );

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Client secret fetch failed');
      }

      const data = await res.json();
      console.log('Received data from server:', data);

      if (data.paymentIntent.client_secret && data.paymentIntent.status) {
        setClientSecret(data.paymentIntent.client_secret);
        setPaymentIntentStatus(data.paymentIntent.status);
        handlePayment(data.paymentIntent.client_secret); // Call handlePayment with the client secret
      } else {
        setPaymentError('Received incomplete data from server');
        toast.error('Received incomplete data from server');
      }
    } catch (error) {
      console.error('Error fetching client secret:', error);
      setPaymentError('Error fetching client secret');
      toast.error('Error fetching client secret');
    }
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
            onClick={sendEmail}
            className='w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700'
            disabled={!stripe || !elements}
          >
            Pay Amount £{amountInpounds.toFixed(2)}
          </button>
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
