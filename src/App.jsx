import { RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./App/Components/Narbar/index.jsx";

import { router } from "./routing/routing.jsx";
function App() {
  return (
    <>
      {" "}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
