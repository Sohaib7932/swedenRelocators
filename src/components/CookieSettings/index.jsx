import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { getCookiePreferences } from "../../utils/cookieUtils";
import "./CookieSettings.css";

const CookieSettings = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
    unclassified: false,
  });
  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    // Load current cookie preferences
    const currentPreferences = getCookiePreferences();
    setCookiePreferences(currentPreferences);
  }, []);

  const handleTogglePreference = (key) => {
    if (key === "necessary") return; // Cannot toggle necessary cookies
    
    setCookiePreferences((prevPreferences) => ({
      ...prevPreferences,
      [key]: !prevPreferences[key],
    }));
  };

  const handleSavePreferences = () => {
    // Save updated preferences
    Cookies.set("cookiePreferences", JSON.stringify(cookiePreferences), { 
      expires: 365, 
      path: "/" 
    });
    
    // Show success message
    setShowSuccessMessage(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const getCookieDescription = (key) => {
    switch (key) {
      case "necessary":
        return "Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.";
      case "preferences":
        return "Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.";
      case "statistics":
        return "Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.";
      case "marketing":
        return "Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.";
      case "unclassified":
        return "Unclassified cookies are cookies that we are in the process of classifying, together with the providers of individual cookies.";
      default:
        return "";
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="cookie-settings">
      <h2>Cookie Settings</h2>
      <p>
        You can customize your cookie preferences below. Please note that disabling
        certain cookies may affect the functionality of the website.
      </p>
      
      <div className="cookie-preferences">
        {Object.keys(cookiePreferences).map((key) => (
          <div key={key} className="cookie-category">
            <div className="cookie-category-text">
              <strong>{capitalizeFirstLetter(key)}</strong>
              <p>{getCookieDescription(key)}</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={key === "necessary" ? true : cookiePreferences[key]}
                onChange={() => handleTogglePreference(key)}
                disabled={key === "necessary"}
              />
              <span className="slider round"></span>
            </label>
          </div>
        ))}
      </div>
      
      <div className="cookie-settings-actions">
        <button 
          className="save-preferences-btn"
          onClick={handleSavePreferences}
        >
          Save Preferences
        </button>
      </div>
      
      {showSuccessMessage && (
        <div className="success-message">
          Your cookie preferences have been saved successfully!
        </div>
      )}
    </div>
  );
};

export default CookieSettings; 