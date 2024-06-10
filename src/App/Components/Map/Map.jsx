import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const Map = () => {
  const navigate = useNavigate();
  const pickupInputRef = useRef(null);
  const deliveryInputRef = useRef(null);
  const pickupAutocompleteRef = useRef(null);
  const deliveryAutocompleteRef = useRef(null);

  useEffect(() => {
    const apiKey = "AIzaSyD45e4H6-Jk4ZFJEJuIhWNlBJcc-4PfDbY";

    const loadScript = (url) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = () => {
        initializeAutocomplete();
      };
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
      );
    } else {
      initializeAutocomplete();
    }
  }, []);

  const handleShowQuotes = () => {
    const pickupAutocomplete = pickupAutocompleteRef.current;
    const deliveryAutocomplete = deliveryAutocompleteRef.current;

    if (!pickupAutocomplete || !deliveryAutocomplete) {
      console.error("Autocomplete instances not initialized");
      return;
    }

    const pickupPlace = pickupAutocomplete.getPlace();
    const deliveryPlace = deliveryAutocomplete.getPlace();

    if (!pickupPlace || !deliveryPlace) {
      console.error("Places not retrieved properly");
      return;
    }

    const pickupLocation = pickupPlace.geometry.location;
    const deliveryLocation = deliveryPlace.geometry.location;

    const distanceMatrixService =
      new window.google.maps.DistanceMatrixService();
    distanceMatrixService.getDistanceMatrix(
      {
        origins: [pickupLocation],
        destinations: [deliveryLocation],
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {
          const distanceInKm = parseFloat(
            response.rows[0].elements[0].distance.text.replace(" km", "")
          );
          const distanceInMiles = distanceInKm * 0.621371;

          console.log("Total Distance:", distanceInMiles);
        } else {
          console.error("Error calculating distance:", status);
        }
      }
    );

    navigate("/instantQuotes");
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-col md:flex-row  md:justify-start sm:items-center items-left md:space-x-5 mt-12">
          <div>
            <p className="text-lg font-normal mb-2 text-white">
              Collection Address
            </p>
            <input
              ref={pickupInputRef}
              id="pickup-location"
              type="text"
              className="rounded-[8px] sm:w-[350px] w-full h-[40px] py-2 px-2"
              placeholder="Enter pickup location"
            />
          </div>
          <div className="hidden md:block md:mt-10">
            <img src="/carImg.svg" alt="Car image" />
          </div>
          <div>
            <p className="text-lg font-normal mb-2 text-white mt-0 md:mt-0">
              Delivery Address
            </p>
            <input
              ref={deliveryInputRef}
              id="delivery-location"
              type="text"
              className="rounded-[8px] sm:w-[350px] w-full h-[40px] py-2 px-2"
              placeholder="Enter delivery location"
            />
          </div>
        </div>
        <div
          className="flex justify-center sm:justify-start w-full"
          onClick={handleShowQuotes}
        >
          <button className="bg-[#E97B08] text-white flex sm:w-auto w-full mt-8 justify-center py-2 px-28 sm:px-8 rounded-[8px]">
            Show quote
            <span>
              <img
                src="/leftArrow.svg"
                alt="left Arrow"
                className="w-[24px] h-[24px]"
              />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Map;
