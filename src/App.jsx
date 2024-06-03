import { RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./App/Components/Narbar/index.jsx";
import Index from "./App/Components/Pages/Home/index.jsx";
import { router } from "./routing/routing.jsx";
function App() {
  return (
    <>
      {" "}
      {/* <NavBar /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
