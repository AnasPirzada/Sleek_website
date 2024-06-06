import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../App/Components/Pages/Home/Index";
import Navbar from "../../src/App/Components/Narbar/index";
import Blog from "../App/Components/Pages/Blog/Blog";
import Price from "../App/Components/Pages/Price/Price";
import InstantQuotes from "../App/Components/Pages/InstantQuote/index";
import Faqs from "../App/Components/Pages/Faqs";
import ContactUS from "../App/Components/Pages/ContactUs/index";
import YourQuotes from "../App/Components/Pages/YourQuote/index";
import Blogpag1 from "../App/Components/Pages/Blog/Blogpag1";
import Blogpag2  from "../App/Components/Pages/Blog/Blogpag2";

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
      <Price/>
      </>
      )},
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
    path: "/blogpage",
    element: (
      <>
        <Navbar />
        <Blogpag1 />
        
      </>
    ),
  },
  {
    path: "/blogpage2",
    element: (
      <>
        <Navbar />
        <Blogpag2/>
      </>
    ),
  },
]);
