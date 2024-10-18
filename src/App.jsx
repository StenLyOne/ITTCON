import { useState } from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import AboutUs from "./pages/aboutUs/AboutUsPage";
import Servises from "./pages/Servises/Servises";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/servises",
    element: <Servises />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <HomePage></HomePage> */}
      {/* <AboutUs/> */}
      {/* <Servises /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
