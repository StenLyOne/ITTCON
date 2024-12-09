import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import AboutUs from "./pages/aboutUs/AboutUsPage";
import Servises from "./pages/Servises/Servises";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Projects/Project";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProjectProvider } from "./context/ProjectContext.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Loading from "./components/Loading/Loading.jsx";
import Error from "./components/error/Error.jsx";

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
  {
    path: "/*",
    element: <Error />,
  },
]);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const waitForAllMedia = () => {
      const mediaElements = [
        ...document.querySelectorAll("img"),
        ...document.querySelectorAll("video"),
      ];

      const mediaPromises = mediaElements.map((deia) => {
        return new Promise((resolve) => {
          if (media.tagName === "IMG") {
            if (media.complete) {
              resolve();
            } else {
              media.onload = resolve;
              media.onerror = resolve;
            }
          } else if (media.tagName === "VIDEO") {
            if (media.readyState >= 3) {
              resolve();
            } else {
              media.onloadeddata = resolve;
              media.onerror = resolve;
            }
          }
        });
      });

      return Promise.all(mediaPromises);
    };
    waitForAllMedia().then(() => {
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <ProjectProvider>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </ProjectProvider>
  );
}

export default App;
