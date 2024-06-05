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
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <Navbar />
        <Blog />
      </>
    ),
  },
  {
    path: "/faq",
    element: (
      <>
        <Navbar />
        <Blog />
      </>
    ),
  },
  {
    path: "/price",
    element: (
      <>
        <Price />
      </>
    ),
  },
  {
    path: "/instantQuotes",
    element: (
      <>
        <Navbar />
        <InstantQuotes />
      </>
    ),
  },
  {
    path: "/yourquotes",
    element: (
      <>
        <Navbar />
        <YourQuotes />
      </>
    ),
  },
  {
    path: "/faqs",
    element: (
      <>
        <Navbar />
        <Faqs />
      </>
    ),
  },
  {
    path: "/contactus",
    element: (
      <>
        <Navbar />
        <ContactUS />
      </>
    ),
  },
  {
    path: "/instantmain",
    element: (
      <>
        <Navbar />
        <InstantMain />
      </>
    ),
  },
]);
