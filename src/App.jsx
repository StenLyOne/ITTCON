import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import AboutUs from "./pages/aboutUs/AboutUsPage";
import Servises from "./pages/Servises/Servises";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Projects/Project";
import { ProjectProvider } from "./context/ProjectContext.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Loading from "./components/Loading/Loading.jsx";
import Error from "./components/error/Error.jsx";
import CookieConsent from "./components/CookieConsent/CookieConsent.jsx";
import CookiePolicy from "./components/CookiePolicy/CookiePolicy.jsx";

function AppContent() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.gtag("config", "G-0BWDV7G139", {
      page_path: location.pathname,
    });
  }, [location]);

  useEffect(() => {
    const waitForAllMedia = () => {
      const mediaElements = [
        ...document.querySelectorAll("img"),
        ...document.querySelectorAll("video"),
      ];

      const mediaPromises = mediaElements.map((media) => {
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
    <>
      <ScrollToTop />
      <CookieConsent /> {/* Баннер появляется на всех страницах */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Servises />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}


function App() {
  return (
    <ProjectProvider>
      <Router>
        <AppContent />
      </Router>
    </ProjectProvider>
  );
}

export default App;
