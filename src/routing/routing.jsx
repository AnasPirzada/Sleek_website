import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../../src/App/Components/Pages/Home/Index";
import Navbar from "../../src/App/Components/Narbar/index";
import Blog from "../App/Components/Pages/Blog/Blog";
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
]);
