import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to improve your experience. By clicking "Accept", you
        agree to our{" "}
        <a
          target="_blank"
          href="https://web.archive.org/web/20240602184559/https://ittcon.eu/cookie-policy"
        >
          Cookie Policy
        </a>
        .
      </p>
      <div className="cookie-banner-btns">
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default CookieConsent;
