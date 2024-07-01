// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';

// const CheckoutForm = ({
//   amountInCents,
//   recipientEmail,
//   formatEmailContent,
// }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [paymentError, setPaymentError] = useState(null);
//   const [clientSecret, setClientSecret] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const amount = amountInCents;

//   useEffect(() => {
//     if (amount) {
//       const paymentIntentData = {
//         amount: parseInt(amount) * 100, // Convert to cents
//         currency: 'usd',
//         paymentMethodId: 'pm_card_visa', // Assuming you have a valid payment method id
//       };
//       fetch('https://gstaxi.azurewebsites.net/stripe/charge', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(paymentIntentData),
//       })
//         .then(res => {
//           if (!res.ok) {
//             throw new Error('Failed to fetch client secret');
//           }
//           return res.json();
//         })
//         .then(data => {
//           setClientSecret(data.clientSecret);
//         })
//         .catch(error =>
//           console.error('Error fetching client secret:', error.message)
//         );
//     }
//   }, [amount]);

//   const handlePayment = async () => {
//     try {
//       if (!clientSecret) {
//         throw new Error('Invalid client secret received');
//       }

//       console.log(
//         'Attempting to confirm payment with client secret:',
//         clientSecret
//       );

//       const { error, paymentIntent } = await stripe.confirmCardPayment(
//         clientSecret,
//         {
//           payment_method: {
//             card: elements.getElement(CardElement),
//           },
//         }
//       );

//       if (error) {
//         console.error('Stripe payment error:', error);
//         setPaymentError(`Payment failed: ${error.message}`);
//       } else if (paymentIntent.status === 'succeeded') {
//         console.log('Payment succeeded:', paymentIntent);
//         sendEmail(formatEmailContent);
//       } else {
//         console.warn('Unexpected payment status:', paymentIntent.status);
//         setPaymentError(`Unexpected payment status: ${paymentIntent.status}`);
//       }
//     } catch (error) {
//       console.error('Payment processing error:', error.message);
//       setPaymentError(`Payment processing error: ${error.message}`);
//     }
//   };

//   const sendEmail = emailContent => {
//     // Implement email sending logic here
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       setErrorMessage('Stripe has not loaded correctly.');
//       return;
//     }

//     handlePayment();
//   };

//   return (
//     <div className='flex justify-center items-center h-screen'>
//       <form
//         onSubmit={handleSubmit}
//         className='max-w-md w-full p-4 bg-white rounded shadow'
//       >
//         <h2 className='text-xl font-semibold mb-4'>Payment method</h2>

//         <div className='mb-4'>
//           <label className='block mb-2'>Card Details</label>
//           <CardElement className='w-full p-2 border rounded' />
//         </div>
//         <button
//           type='submit'
//           className='w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700'
//           disabled={!stripe || !elements}
//         >
//           Pay ${amountInCents / 100}
//         </button>
//         {paymentError && (
//           <div className='text-red-500 mb-4'>{paymentError}</div>
//         )}
//         {errorMessage && (
//           <div className='text-red-500 mb-4'>{errorMessage}</div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default CheckoutForm;
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({
  amountInCents,
  recipientEmail,
  formatEmailContent,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const amount = amountInCents;

  useEffect(() => {
    if (amount) {
      const paymentIntentData = {
        amount: parseInt(amount), // Amount in cents (1000 for $10.00)
        currency: 'usd',
        paymentMethodId: 'pm_card_visa', // Example payment method ID
        callbackUrl: 'https://snw17.csb.app/public', // Replace with your actual frontend URL
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
            throw new Error('Failed to fetch client secret');
          }
          return res.json();
        })
        .then(data => {
          setClientSecret(data.clientSecret);
        })
        .catch(error =>
          console.error('Error fetching client secret:', error.message)
        );
    }
  }, [amount]);

  const handlePayment = async () => {
    try {
      if (!clientSecret) {
        throw new Error('Invalid client secret received');
      }

      console.log(
        'Attempting to confirm payment with client secret:',
        clientSecret
      );

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
        setPaymentError(`Payment failed: ${error.message}`);
      } else if (paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded:', paymentIntent);
        sendEmail(formatEmailContent);
      } else {
        console.warn('Unexpected payment status:', paymentIntent.status);
        setPaymentError(`Unexpected payment status: ${paymentIntent.status}`);
      }
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
          Pay ${amountInCents / 100}
        </button>
        {paymentError && (
          <div className='text-red-500 mb-4'>{paymentError}</div>
        )}
        {errorMessage && (
          <div className='text-red-500 mb-4'>{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
