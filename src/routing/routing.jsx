import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../../src/App/Components/Pages/Home/index";
import Navbar from "../../src/App/Components/Narbar/index";
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
]);
