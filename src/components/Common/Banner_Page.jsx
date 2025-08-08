import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import './Banner_Page.css';

const Banner_Page = ({ highlightText, regularText, backgroundImage }) => {
  const { t } = useTranslation();

  useEffect(() => {
    // Dynamically inject the background image into the CSS variable
    document.documentElement.style.setProperty('--dynamic-bg', `url(${backgroundImage})`);
  }, [backgroundImage]);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className = "theregulartext">
          <div className="highlight">{highlightText}</div> 
        </h1>
        <div className="regulartextbanner">{regularText} </div>
      </div>
    </div>
  );
};

export default Banner_Page;
