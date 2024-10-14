import { useState } from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import AboutUs from "./pages/aboutUs/AboutUsPage";
import Servises from "./pages/Servises/Servises";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <HomePage></HomePage> */}
      {/* <AboutUs/> */}
      <Servises />
    </div>
  );
}

export default App;
