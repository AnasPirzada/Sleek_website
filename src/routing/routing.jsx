import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../App/Components/Pages/Home/Index";
import Navbar from "../../src/App/Components/Narbar/index";
import Blog from "../App/Components/Pages/Blog/Blog";
import Price from "../App/Components/Pages/Price/Price";
import InstantQuotes from "../App/Components/Pages/InstantQuote/index";
import Faqs from "../App/Components/Pages/Faqs";
import ContactUS from "../App/Components/Pages/ContactUs/index";
import InstantMain from "../App/Components/Pages/instantMain/SectionVehicl";
import YourQuotes from "../App/Components/Pages/YourQuote/index";
import Footer from "../App/Components/Footer/index";
import Input from "../App/Components/Pages/instantMain/Input";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <Navbar />
        <Blog />
        <Footer />
      </>
    ),
  },
  {
    path: "/faq",
    element: (
      <>
        <Navbar />
        <Blog />
        <Footer />
      </>
    ),
  },
  {
    path: "/price",
    element: (
      <>
        <Price />
        <Footer />
      </>
    ),
  },
  {
    path: "/instantmain",
    element: (
      <>
        <Navbar />
        <InstantQuotes />
        <Footer />
      </>
    ),
  },
  {
    path: "/yourquotes",
    element: (
      <>
        <Navbar />
        <YourQuotes />
        <Footer />
      </>
    ),
  },
  {
    path: "/faqs",
    element: (
      <>
        <Navbar />
        <Faqs />
        <Footer />
      </>
    ),
  },
  {
    path: "/contactus",
    element: (
      <>
        <Navbar />
        <ContactUS />
        <Footer />
      </>
    ),
  },
  {
    path: "/instantQuotes",
    element: (
      <>
        <Navbar />
        <InstantMain />
        <Footer />
      </>
    ),
  },
]);
