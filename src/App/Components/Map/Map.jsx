// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router';

// const Map = () => {
//   const navigate = useNavigate();
//   const pickupInputRef = useRef(null);
//   const deliveryInputRef = useRef(null);
//   const pickupAutocompleteRef = useRef(null);
//   const deliveryAutocompleteRef = useRef(null);

//   useEffect(() => {
//     const apiKey = 'AIzaSyD45e4H6-Jk4ZFJEJuIhWNlBJcc-4PfDbY';

//     const loadScript = url => {
//       const script = document.createElement('script');
//       script.src = url;
//       script.async = true;
//       script.defer = true;
//       document.head.appendChild(script);
//       script.onload = () => {
//         initializeAutocomplete();
//       };
//     };

//     const initializeAutocomplete = () => {
//       const google = window.google;
//       if (pickupInputRef.current && deliveryInputRef.current) {
//         pickupAutocompleteRef.current = new google.maps.places.Autocomplete(
//           pickupInputRef.current
//         );
//         deliveryAutocompleteRef.current = new google.maps.places.Autocomplete(
//           deliveryInputRef.current
//         );
//       }
//     };

//     if (!window.google) {
//       loadScript(
//         `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
//       );
//     } else {
//       initializeAutocomplete();
//     }
//   }, []);

//   const handleShowQuotes = () => {
//     const pickupAutocomplete = pickupAutocompleteRef.current;
//     const deliveryAutocomplete = deliveryAutocompleteRef.current;

//     if (!pickupAutocomplete || !deliveryAutocomplete) {
//       console.error('Autocomplete instances not initialized');
//       return;
//     }

//     const pickupPlace = pickupAutocomplete.getPlace();
//     const deliveryPlace = deliveryAutocomplete.getPlace();

//     if (!pickupPlace || !deliveryPlace) {
//       console.error('Places not retrieved properly');
//       return;
//     }
//     const pickupLocation = pickupPlace.geometry.location;
//     const deliveryLocation = deliveryPlace.geometry.location;

//     const pickupStreetAddress = pickupPlace.formatted_address;
//     const pickupAddressComponents = pickupPlace.address_components;
//     const pickupCity = getAddressComponent(pickupAddressComponents, 'locality');
//     const pickupPostalCode = getAddressComponent(
//       pickupAddressComponents,
//       'postal_code'
//     ); // Retrieve postal code

//     const deliveryStreetAddress = deliveryPlace.formatted_address;
//     const deliveryAddressComponents = deliveryPlace.address_components;
//     const deliveryCity = getAddressComponent(
//       deliveryAddressComponents,
//       'locality'
//     );
//     const deliveryPostalCode = getAddressComponent(
//       deliveryAddressComponents,
//       'postal_code'
//     ); // Retrieve postal code

//     // Print pickup address details to console
//     console.log('Pickup Street Address:', pickupStreetAddress);
//     console.log('Pickup City:', pickupCity);
//     console.log('Pickup Postal Code:', pickupPostalCode);

//     // Print delivery address details to console
//     console.log('Delivery Street Address:', deliveryStreetAddress);
//     console.log('Delivery City:', deliveryCity);
//     console.log('Delivery Postal Code:', deliveryPostalCode);

//     // Store address details in session storage
//     sessionStorage.setItem('pickupStreetAddress', pickupStreetAddress);
//     sessionStorage.setItem('pickupCity', pickupCity);
//     sessionStorage.setItem('pickupPostalCode', pickupPostalCode);
//     sessionStorage.setItem('deliveryStreetAddress', deliveryStreetAddress);
//     sessionStorage.setItem('deliveryCity', deliveryCity);
//     sessionStorage.setItem('deliveryPostalCode', deliveryPostalCode);

//     navigate('/instantQuotes');
//   };

//   // Total Distance
//   const distanceMatrixService = new window.google.maps.DistanceMatrixService();
//   distanceMatrixService.getDistanceMatrix(
//     {
//       origins: [pickupLocation],
//       destinations: [deliveryLocation],
//       travelMode: 'DRIVING',
//     },
//     (response, status) => {
//       if (status === 'OK') {
//         const distanceInKm = parseFloat(
//           response.rows[0].elements[0].distance.text.replace(' km', '')
//         );
//         const distanceInMiles = distanceInKm * 0.621371;

//         console.log('Total Distance:', distanceInMiles);
//       } else {
//         console.error('Error calculating distance:', status);
//       }
//     }
//   );
//   console.log('distance', distanceMatrixService);

//   // Function to extract address component by type
//   const getAddressComponent = (addressComponents, type) => {
//     for (let component of addressComponents) {
//       for (let componentType of component.types) {
//         if (componentType === type) {
//           return component.long_name;
//         }
//       }
//     }
//     return '';
//   };

//   return (
//     <>
//       <div className='w-full h-full'>
//         <div className='flex flex-col md:flex-row  md:justify-start sm:items-center items-left md:space-x-5 mt-12'>
//           <div>
//             <p className='text-lg font-normal mb-2 text-white'>
//               Collection Address
//             </p>
//             <input
//               ref={pickupInputRef}
//               id='pickup-location'
//               type='text'
//               className='rounded-[8px] sm:w-[350px] w-full h-[40px] py-2 px-2'
//               placeholder='Enter pickup location'
//             />
//           </div>
//           <div className='hidden md:block md:mt-10'>
//             <img src='/carImg.svg' alt='Car image' />
//           </div>
//           <div>
//             <p className='text-lg font-normal mb-2 text-white mt-0 md:mt-0'>
//               Delivery Address
//             </p>
//             <input
//               ref={deliveryInputRef}
//               id='delivery-location'
//               type='text'
//               className='rounded-[8px] sm:w-[350px] w-full h-[40px] py-2 px-2'
//               placeholder='Enter delivery location'
//             />
//           </div>
//         </div>
//         <div
//           className='flex justify-center sm:justify-start w-full'
//           onClick={handleShowQuotes}
//         >
//           <button className='bg-[#E97B08] text-white flex sm:w-auto w-full mt-8 justify-center py-2 px-28 sm:px-8 rounded-[8px]'>
//             Show quote
//             <span>
//               <img
//                 src='/leftArrow.svg'
//                 alt='left Arrow'
//                 className='w-[24px] h-[24px]'
//               />
//             </span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Map;
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

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
      const google = window.google;
      if (pickupInputRef.current && deliveryInputRef.current) {
        pickupAutocompleteRef.current = new google.maps.places.Autocomplete(
          pickupInputRef.current
        );
        deliveryAutocompleteRef.current = new google.maps.places.Autocomplete(
          deliveryInputRef.current
        );
      }
    };

    if (!window.google) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
      )
        .then(() => initializeAutocomplete())
        .catch(error =>
          console.error('Error loading Google Maps script:', error)
        );
    } else {
      initializeAutocomplete();
    }
  }, []);

  const handleShowQuotes = () => {
    const pickupAutocomplete = pickupAutocompleteRef.current;
    const deliveryAutocomplete = deliveryAutocompleteRef.current;

    if (!pickupAutocomplete || !deliveryAutocomplete) {
      console.error('Autocomplete instances not initialized');
      return;
    }

    const pickupPlace = pickupAutocomplete.getPlace();
    const deliveryPlace = deliveryAutocomplete.getPlace();

    if (!pickupPlace || !deliveryPlace) {
      console.error('Places not retrieved properly');
      return;
    }
    const pickupLocation = pickupPlace.geometry.location;
    const deliveryLocation = deliveryPlace.geometry.location;

    const pickupStreetAddress = pickupPlace.formatted_address;
    const pickupAddressComponents = pickupPlace.address_components;
    const pickupCity = getAddressComponent(pickupAddressComponents, 'locality');
    const pickupPostalCode = getAddressComponent(
      pickupAddressComponents,
      'postal_code'
    ); // Retrieve postal code

    const deliveryStreetAddress = deliveryPlace.formatted_address;
    const deliveryAddressComponents = deliveryPlace.address_components;
    const deliveryCity = getAddressComponent(
      deliveryAddressComponents,
      'locality'
    );
    const deliveryPostalCode = getAddressComponent(
      deliveryAddressComponents,
      'postal_code'
    ); // Retrieve postal code

    // Print pickup address details to console
    console.log('Pickup Street Address:', pickupStreetAddress);
    console.log('Pickup City:', pickupCity);
    console.log('Pickup Postal Code:', pickupPostalCode);

    // Print delivery address details to console
    console.log('Delivery Street Address:', deliveryStreetAddress);
    console.log('Delivery City:', deliveryCity);
    console.log('Delivery Postal Code:', deliveryPostalCode);

    // Store address details in session storage
    sessionStorage.setItem('pickupStreetAddress', pickupStreetAddress);
    sessionStorage.setItem('pickupCity', pickupCity);
    sessionStorage.setItem('pickupPostalCode', pickupPostalCode);
    sessionStorage.setItem('deliveryStreetAddress', deliveryStreetAddress);
    sessionStorage.setItem('deliveryCity', deliveryCity);
    sessionStorage.setItem('deliveryPostalCode', deliveryPostalCode);

    calculateDistance(pickupLocation, deliveryLocation);
  };

  const calculateDistance = (pickupLocation, deliveryLocation) => {
    const pickupLat = pickupLocation.lat();
    const pickupLng = pickupLocation.lng();
    const deliveryLat = deliveryLocation.lat();
    const deliveryLng = deliveryLocation.lng();

    // Haversine formula to calculate distance
    const toRadians = degree => {
      return degree * (Math.PI / 180);
    };

    const R = 6371; // Radius of the Earth in km
    const dLat = toRadians(deliveryLat - pickupLat);
    const dLon = toRadians(deliveryLng - pickupLng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(pickupLat)) *
        Math.cos(toRadians(deliveryLat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceInKm = R * c; // Distance in kilometers

    const distanceInMiles = distanceInKm * 0.621371; // Convert distance to miles

    // Format distance to have only one digit after the decimal point
    const formattedDistance = distanceInMiles.toFixed(1);

    console.log('Total Distance:', formattedDistance);
    sessionStorage.setItem('totalDistance', formattedDistance);
    navigate('/instantQuotes');
  };

  // Function to extract address component by type
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
      <div className='w-full h-full'>
        <div className='flex flex-col md:flex-row  md:justify-start sm:items-center items-left md:space-x-5 mt-12'>
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
