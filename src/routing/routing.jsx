import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "../App/Components/Pages/Home/index";
import Navbar from "../../src/App/Components/Narbar/index";
import Blog from "../App/Components/Pages/Blog/Blog";
import Price from "../App/Components/Pages/Price/Price";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <Index />
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
    path: "/price",
    element: (
      <>
      <Price/>
      </>
    ),
  },
]);
