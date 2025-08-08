import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { 
  getCurrentLanguageName, 
  changeLanguageByName, 
  initializeLanguage 
} from "../../utils/languageUtils";

// Import language flag images
import eng from "../../assets/images/uk.webp"; // English
import ge from "../../assets/images/ge.webp"; // German
import da from "../../assets/images/da.png"; // Danish
import sw from "../../assets/images/sw.png"; // Swedish
import pr from "../../assets/icons/flags/Flag_of_Iran.svg.png"; // Persian
import sp from "../../assets/images/sp.jpeg"; // Spanish
import ab from "../../assets/images/ab.png"; // Arabic
import gr from "../../assets/icons/flags/flag_of_Greece.svg"; // Greek
import ur from "../../assets/icons/flags/flag_of_Pakistan.svg"; // Urdu
import pn from "../../assets/icons/flags/flag_of_India.png"; // Punjabi

// Define language icons mapping
const languageIcons: { [key: string]: string } = {
  English: eng,
  German: ge,
  Danish: da,
  Swedish: sw,
  Spanish: sp,
  Arabic: ab,
  Persian: pr,
  Greek: gr,
  Urdu: ur,
  Punjabi: pn,
};

interface LanguageSelectorProps {
  isMobile?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isMobile = false }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(getCurrentLanguageName());
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize language on component mount
  useEffect(() => {
    initializeLanguage();
    setSelectedLanguage(getCurrentLanguageName());
  }, []);

  const handleLanguageChange = (langName: string) => {
    // Change language using our utility function
    changeLanguageByName(langName);
    
    // Update selected language state
    setSelectedLanguage(langName);
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!isMobile && 
      buttonRef.current &&
      dropdownRef.current &&
      !buttonRef.current.contains(e.relatedTarget as Node) &&
      !dropdownRef.current.contains(e.relatedTarget as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className="tw-flex tw-items-center tw-z-101"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={handleClick}
        className={`tw-inline-flex tw-gap-2 tw-z-101 tw-items-center tw-justify-between tw-rounded-md tw-border tw-border-gray-300 tw-shadow-sm tw-px-3 tw-py-1 tw-white tw-text-sm tw-font-medium tw-text-gray-700 tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500 ${
          isMobile ? 'tw-w-full tw-justify-between' : 'tw-w-auto'
        }`}
        aria-haspopup="true"
        style={{ zIndex: "10" }}
      >
        <img
          src={languageIcons[selectedLanguage] || eng}
          className="tw-w-5 tw-h-5 tw-rounded-full tw-object-cover"
          alt={selectedLanguage}
        />
        <p className={`m-0 tw-text-sm ${isMobile ? 'tw-text-[#1f2437]' : 'tw-text-white'}`}>
          {selectedLanguage}
        </p>
        <svg
          className={`tw-h-5 tw-w-5 tw-transition-transform tw-duration-200 ${isOpen ? 'tw-rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={isMobile ? "#1f2437" : "white"}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={`tw-absolute tw-z-[99999] tw-rounded-md tw-shadow-lg tw-bg-white tw-ring-1 tw-ring-black tw-ring-opacity-5 ${
            isMobile 
              ? 'tw-top-full tw-left-0 tw-right-0 tw-mt-1 tw-w-full' 
              : 'tw-right-12 sm:tw-top-20 md:tw-top-12 lg:tw-top-12 tw-top-32 tw-w-80'
          }`}
        >
          <div className={`tw-py-1 tw-grid tw-gap-3 p-2 ${
            isMobile ? 'tw-grid-cols-1' : 'tw-grid-cols-2'
          }`}>
            {Object.entries(languageIcons).map(([langName, icon]) => (
              <div key={langName}>
                <div
                  className="tw-flex tw-gap-4 hover:tw-bg-gray-light p-2 tw-rounded-md tw-cursor-pointer"
                  onClick={() => handleLanguageChange(langName)}
                >
                  <img
                    src={icon}
                    className="tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
                    alt={langName}
                  />
                  <p className="m-0 tw-text-black tw-text-sm">
                    {langName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
