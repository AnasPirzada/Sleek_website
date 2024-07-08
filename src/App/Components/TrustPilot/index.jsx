// src/components/TrustBox.js
import React, { useEffect } from 'react';

const index = () => {
  useEffect(() => {
    window.Trustpilot &&
      window.Trustpilot.loadFromElement(
        document.getElementById('trustbox'),
        true
      );
  }, []);

  return (
    <div
      id='trustbox'
      className='trustpilot-widget'
      data-locale='en-US'
      data-template-id='56278e9abfbbba0bdcd568bc'
      data-businessunit-id='63c29f13037b1e83ff0f6754'
      data-style-height='500px'
      data-style-width='100%'
      data-theme='light'
    >
      <a
        href='https://uk.trustpilot.com/review/sleekassuredremovals.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src='/trustpilot-1.svg'
          className='lg:w-[100px] lg:h-[100px] w-[80px] h-[80px]  mt-0 lg:-mt-32'
        />
      </a>
    </div>
  );
};

export default index;
