import { useState } from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import AboutUs from "./pages/aboutUs/AboutUsPage";
import Servises from "./pages/Servises/Servises";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Projects/Project";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProjectProvider } from "./context/ProjectContext.jsx"; // Импортируйте контекст
import Contact from "./pages/Contact/Contact.jsx";

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
    path: "/services",
    element: <Servises />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <ProjectProvider>
      <RouterProvider router={router} />
    </ProjectProvider>
  );
}

export default App;
