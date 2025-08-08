import React, { useState, useEffect } from "react";
import "./CookieModal.css";
import Cookies from "js-cookie";
import { isCookieAllowed, setCookieIfAllowed, getCookiePreferences } from "../../utils/cookieUtils";

const CookieModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Consent");
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Necessary cookies are always enabled
    preferences: false,
    statistics: false,
    marketing: false,
    unclassified: false,
  });
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Check if cookies are already accepted
    const cookiesAccepted = Cookies.get("cookiesAccepted");
    
    if (cookiesAccepted) {
      // If cookies are accepted, load saved preferences
      const savedPreferences = getCookiePreferences();
      setCookiePreferences(savedPreferences);
    } else {
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    // Set cookies with a 365 day expiration
    Cookies.set("cookiesAccepted", "true", { expires: 365, path: "/" });
    Cookies.set("cookiePreferences", JSON.stringify(cookiePreferences), { expires: 365, path: "/" });
    
    // Apply cookie settings based on user preferences
    applyUserCookiePreferences();
    
    setShowModal(false);
  };

  const handleDeny = () => {
    // Only set necessary cookies
    const necessaryOnlyPreferences = {
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
      unclassified: false,
    };
    
    Cookies.set("cookiesAccepted", "true", { expires: 365, path: "/" });
    Cookies.set("cookiePreferences", JSON.stringify(necessaryOnlyPreferences), { expires: 365, path: "/" });
    
    setCookiePreferences(necessaryOnlyPreferences);
    setShowModal(false);
  };

  const handleTogglePreference = (key) => {
    setCookiePreferences((prevPreferences) => ({
      ...prevPreferences,
      [key]: !prevPreferences[key],
    }));
  };
  
  // Function to apply cookie settings based on user preferences
  const applyUserCookiePreferences = () => {
    // Handle preference cookies
    if (cookiePreferences.preferences) {
      // Set any preference cookies your site needs
      const userLang = navigator.language || navigator.userLanguage;
      setCookieIfAllowed("preferredLanguage", userLang, "preferences", { expires: 365, path: "/" });
      
      // If the site has a theme preference
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      setCookieIfAllowed("theme", currentTheme, "preferences", { expires: 365, path: "/" });
    } else {
      // Remove preference cookies
      Cookies.remove("preferredLanguage", { path: "/" });
      Cookies.remove("theme", { path: "/" });
    }
    
    // Handle statistics cookies
    if (cookiePreferences.statistics) {
      // Enable analytics cookies
      setCookieIfAllowed("allowAnalytics", "true", "statistics", { expires: 365, path: "/" });
      
      // Set up analytics if you have an analytics service
      if (window.initializeAnalytics) {
        window.initializeAnalytics();
      }
      
      // Example analytics data
      const pageViewData = {
        page: window.location.pathname,
        referrer: document.referrer,
        timestamp: new Date().toISOString()
      };
      setCookieIfAllowed("pageViewData", JSON.stringify(pageViewData), "statistics", { expires: 7, path: "/" });
    } else {
      // Remove statistics cookies
      Cookies.remove("allowAnalytics", { path: "/" });
      Cookies.remove("pageViewData", { path: "/" });
      
      // Disable analytics if you have an analytics service
      if (window.disableAnalytics) {
        window.disableAnalytics();
      }
    }
    
    // Handle marketing cookies
    if (cookiePreferences.marketing) {
      // Enable marketing cookies
      setCookieIfAllowed("allowMarketing", "true", "marketing", { expires: 365, path: "/" });
      
      // Enable marketing features
      if (window.enableMarketingFeatures) {
        window.enableMarketingFeatures();
      }
    } else {
      // Remove marketing cookies
      Cookies.remove("allowMarketing", { path: "/" });
      
      // Disable marketing features
      if (window.disableMarketingFeatures) {
        window.disableMarketingFeatures();
      }
    }
    
    // Handle unclassified cookies
    if (!cookiePreferences.unclassified) {
      // Remove any unclassified cookies
      Cookies.remove("unclassifiedCookie", { path: "/" });
    }
    
    // Dispatch an event so other components can react to cookie preference changes
    const event = new CustomEvent('cookiePreferencesUpdated', { 
      detail: { preferences: cookiePreferences } 
    });
    document.dispatchEvent(event);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Consent":
        return (
          <>
            <strong>This website uses cookies</strong>
            <p>
              We use cookies to personalise content and ads, to provide social
              media features and to analyse our traffic. We also share
              information about your use of our site with our social media,
              advertising and analytics partners who may combine it with other
              information that you've provided to them or that they've collected
              from your use of their services.
            </p>
          </>
        );
      case "Details":
        return (
          <div>
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
        );
      case "About":
        return (
          <>
            <strong>What are Cookies?</strong>
            <p>
              Cookies are small text files that can be used by websites to make
              a user's experience more efficient.
            </p>
            <br />
  
            <strong>Legal Requirements</strong>
            <p>
              The law states that we can store cookies on your device if they
              are strictly necessary for the operation of this site. For all
              other types of cookies we need your permission.
            </p>
            <br />
  
            <strong>Types of Cookies Used</strong>
            <p>
              This site uses different types of cookies. Some cookies are placed
              by third party services that appear on our pages.
            </p>
            <br />
  
            <strong>Change or Withdraw Consent</strong>
            <p>
              You can at any time change or withdraw your consent from the
              Cookie Declaration on our website.
            </p>
            <br />
  
            <strong>Privacy Policy</strong>
            <p>
              Learn more about who we are, how you can contact us, and how we
              process personal data in our Privacy Policy.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
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

  return (
    showModal && (
      <div className="cookie-modal">
        <div className="cookie-modal-content">
          {showPreferences ? (
            <>
              <h2 className="cookie-modal-title">Cookie Preferences</h2>
              <div className="cookie-modal-details-list">
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
              <div className="cookie-modal-buttons">
                <button className="cookie-btn preferences" onClick={() => setShowPreferences(false)}>Back</button>
                <button className="cookie-btn accept" onClick={() => { handleAccept(); setShowPreferences(false); }}>Save Preferences</button>
              </div>
            </>
          ) : (
            <>
              <h2 className="cookie-modal-title">Cookie settings</h2>
              <p className="cookie-modal-desc">
                Our website uses cookies to improve your user experience and assist in our marketing efforts. More info can be found in our <a href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="cookie-policy-link">cookie policy</a>.
              </p>
              <div className="cookie-modal-buttons">
                <button className="cookie-btn preferences" onClick={() => setShowPreferences(true)}>CHANGE PREFERENCES</button>
                <button className="cookie-btn essential" onClick={handleDeny}>ONLY ACCEPT ESSENTIAL COOKIES</button>
                <button className="cookie-btn accept" onClick={handleAccept}>ACCEPT ALL COOKIES</button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
};

export default CookieModal;
