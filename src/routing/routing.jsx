import { createBrowserRouter } from 'react-router-dom';

import Navbar from '../../src/App/Components/Narbar/index';
import Footer from '../App/Components/Footer/index';
import Blog from '../App/Components/Pages/Blog/Blog';
import Blogpag1 from '../App/Components/Pages/Blog/Blogpag1';
import Blogpag2 from '../App/Components/Pages/Blog/Blogpag2';
import Blogpag3 from '../App/Components/Pages/Blog/Blogpag3';
import ContactUS from '../App/Components/Pages/ContactUs/index';
import Faqs from '../App/Components/Pages/Faqs';
import Home from '../App/Components/Pages/Home/Index';
import InstantMain from '../App/Components/Pages/instantMain/SectionVehicl';
import InstantQuotes from '../App/Components/Pages/InstantQuote/index';
import PaymentMethod from '../App/Components/Pages/Price/paymentMethod.jsx';
import Price from '../App/Components/Pages/Price/Price';
import StripeCheckout from '../App/Components/Pages/Price/StripeCheckout.jsx';
import Services from '../App/Components/Pages/Services/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/blog',
    element: (
      <>
        <Navbar />
        <Blog />
        <Footer />
      </>
    ),
    children: [
      {
        path: 'blogpage1',
        element: (
          <>
            <Navbar />
            <Blogpag1 />
            <Footer />
          </>
        ),
      },
      {
        path: '/blogDetails2',
        element: (
          <>
            <Navbar />
            <Blogpag2 />
            <Footer />
          </>
        ),
      },
    ],
  },
  {
    path: '/faq',
    element: (
      <>
        <Navbar />
        <Blog />
        <Footer />
      </>
    ),
  },

  {
    path: '/price',
    element: (
      <>
        <Price />
        <Footer />
      </>
    ),
  },
  {
    path: '/StripeCheckout/:depositAmount',
    element: (
      <>
        <StripeCheckout />
        {/* <Footer /> */}
      </>
    ),
  },

  {
    path: '/instantmain',
    element: (
      <>
        <Navbar />
        <InstantQuotes />
        <Footer />
      </>
    ),
  },
  {
    path: '/faqs',
    element: (
      <>
        <Navbar />
        <Faqs />
        <Footer />
      </>
    ),
  },
  {
    path: '/contactus',
    element: (
      <>
        <Navbar />
        <ContactUS />
        <Footer />
      </>
    ),
  },
  {
    path: '/instantQuotes',
    element: (
      <>
        <Navbar />
        <InstantMain />
        <Footer />
      </>
    ),
  },
  {
    path: '/blogDetails1',
    element: (
      <>
        <Navbar />
        <Blogpag1 />
        <Footer />
      </>
    ),
  },
  {
    path: '/blogDetails2',
    element: (
      <>
        <Navbar />
        <Blogpag2 />
        <Footer />
      </>
    ),
  },
  {
    path: '/blogDetails3',
    element: (
      <>
        <Navbar />
        <Blogpag3 />
        <Footer />
      </>
    ),
  },
  {
    path: '/services',
    element: (
      <>
        <Navbar />
        <Services />
        <Footer />
      </>
    ),
  },
  {
    path: '/paymentmethods/:depositAmount',
    element: (
      <>
        <Navbar />
        <PaymentMethod />
        <Footer />
      </>
    ),
  },
]);
