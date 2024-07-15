import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
const Map = () => {
  const navigate = useNavigate();
  const pickupInputRef = useRef(null);
  const deliveryInputRef = useRef(null);
  const pickupAutocompleteRef = useRef(null);
  const deliveryAutocompleteRef = useRef(null);

  useEffect(() => {
    const apiKey = 'AIzaSyD45e4H6-Jk4ZFJEJuIhWNlBJcc-4PfDbY';

    const loadScript = url => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initializeAutocomplete = () => {
      try {
        const google = window.google;
        if (pickupInputRef.current && deliveryInputRef.current) {
          pickupAutocompleteRef.current = new google.maps.places.Autocomplete(
            pickupInputRef.current
          );
          deliveryAutocompleteRef.current = new google.maps.places.Autocomplete(
            deliveryInputRef.current
          );
        }
      } catch (error) {
        toast.error('Error initializing Autocomplete:', error);
        // alert('Error initializing address inputs. Please try again later.');
      }
    };

    if (!window.google) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,distance_matrix`
      )
        .then(() => initializeAutocomplete())
        .catch(error => {
          toast.error('Error loading Google Maps script:', error);
          // alert('Error loading Google Maps script. Please try again later.');
        });
    } else {
      initializeAutocomplete();
    }
  }, []);

  const handleShowQuotes = () => {
    try {
      const pickupAutocomplete = pickupAutocompleteRef.current;
      const deliveryAutocomplete = deliveryAutocompleteRef.current;

      if (!pickupAutocomplete || !deliveryAutocomplete) {
        throw new Error('Autocomplete instances not initialized');
      }

      const pickupPlace = pickupAutocomplete.getPlace();
      const deliveryPlace = deliveryAutocomplete.getPlace();

      if (
        !pickupPlace ||
        !deliveryPlace ||
        !pickupPlace.geometry ||
        !deliveryPlace.geometry
      ) {
        throw new Error('Please add a valid address.');
      }

      const pickupLocation = pickupPlace.geometry.location;
      const deliveryLocation = deliveryPlace.geometry.location;

      const pickupStreetAddress = pickupPlace.formatted_address;
      const pickupAddressComponents = pickupPlace.address_components;
      const pickupCity = getAddressComponent(
        pickupAddressComponents,
        'locality'
      );
      const pickupPostalCode = getAddressComponent(
        pickupAddressComponents,
        'postal_code'
      );

      const deliveryStreetAddress = deliveryPlace.formatted_address;
      const deliveryAddressComponents = deliveryPlace.address_components;
      const deliveryCity = getAddressComponent(
        deliveryAddressComponents,
        'locality'
      );
      const deliveryPostalCode = getAddressComponent(
        deliveryAddressComponents,
        'postal_code'
      );

      console.log('Pickup Street Address:', pickupStreetAddress);
      console.log('Pickup City:', pickupCity);
      console.log('Pickup Postal Code:', pickupPostalCode);
      console.log('Delivery Street Address:', deliveryStreetAddress);
      console.log('Delivery City:', deliveryCity);
      console.log('Delivery Postal Code:', deliveryPostalCode);

      sessionStorage.setItem('pickupStreetAddress', pickupStreetAddress);
      sessionStorage.setItem('pickupCity', pickupCity);
      sessionStorage.setItem('pickupPostalCode', pickupPostalCode);
      sessionStorage.setItem('deliveryStreetAddress', deliveryStreetAddress);
      sessionStorage.setItem('deliveryCity', deliveryCity);
      sessionStorage.setItem('deliveryPostalCode', deliveryPostalCode);

      calculateDistanceAndTime(pickupLocation, deliveryLocation);
    } catch (error) {
      toast.error('Please Enter Valid Address', error);
      // alert(`Error: ${error.message}`);
    }
  };

  const calculateDistanceAndTime = (pickupLocation, deliveryLocation) => {
    try {
      const distanceMatrixService =
        new window.google.maps.DistanceMatrixService();
      distanceMatrixService.getDistanceMatrix(
        {
          origins: [pickupLocation],
          destinations: [deliveryLocation],
          travelMode: 'DRIVING',
        },
        (response, status) => {
          if (status === 'OK') {
            const element = response.rows[0].elements[0];
            const distanceInKm = element.distance?.value / 1000; // Convert meters to kilometers
            const durationInMinutes = element.duration?.value / 60; // Convert seconds to minutes

            const distanceInMiles = (distanceInKm * 0.621371).toFixed(1);

            // Convert duration into hours and minutes
            const hours = Math.floor(durationInMinutes / 60);
            const minutes = Math.floor(durationInMinutes % 60);
            const formattedDuration = `${hours} hours, ${minutes} minutes`;

            console.log('Total Distance:', distanceInMiles, 'miles');
            console.log('Estimated Time:', formattedDuration);

            sessionStorage.setItem('totalDistance', distanceInMiles);
            sessionStorage.setItem('estimatedTime', formattedDuration);
            navigate('/instantQuotes');
          } else {
            throw new Error('Error calculating distance and time');
          }
        }
      );
    } catch (error) {
      console.error('Error in calculateDistanceAndTime:', error);
      alert('Error calculating distance and time. Please try again later.');
    }
  };

  const getAddressComponent = (addressComponents, type) => {
    for (let component of addressComponents) {
      for (let componentType of component.types) {
        if (componentType === type) {
          return component.long_name;
        }
      }
    }
    return '';
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
      <div className='w-full h-full'>
        <div className='flex flex-col md:flex-row md:justify-start sm:items-center items-left md:space-x-5 mt-12'>
          <div>
            <p className='text-lg font-normal mb-2 text-white'>
              Collection Address
            </p>
            <input
              ref={pickupInputRef}
              id='pickup-location'
              type='text'
              className='rounded-[8px] sm:w-[350px] w-full h-[40px] py-2 px-2'
              placeholder='Enter pickup location'
            />
          </div>
          <div className='hidden md:block md:mt-10'>
            <img src='/carImg.svg' alt='Car image' />
          </div>
          <div>
            <p className='text-lg font-normal mb-2 text-white mt-0 md:mt-0'>
              Delivery Address
            </p>
            <input
              ref={deliveryInputRef}
              id='delivery-location'
              type='text'
              className='rounded-[8px] sm:w-[350px] w-full h-[40px] py-2 px-2'
              placeholder='Enter delivery location'
            />
          </div>
        </div>
        <div
          className='flex justify-center sm:justify-start w-full'
          onClick={handleShowQuotes}
        >
          <button className='bg-[#E97B08] text-white flex sm:w-auto w-full mt-8 justify-center py-2 px-28 sm:px-8 rounded-[8px]'>
            Show quote
            <span>
              <img
                src='/leftArrow.svg'
                alt='left Arrow'
                className='w-[24px] h-[24px]'
              />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Map;
