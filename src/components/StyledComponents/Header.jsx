/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Header.jsx
import { useNavigate } from 'react-router-dom';
import { NavItems } from '../../assets/data/Nav-List.jsx';
import '../../styles/Header.css'; // Import the CSS file with variables
import { IoIosArrowDown } from 'react-icons/io';
import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBackDrop } from '../../store/reducers/addBackDrop.jsx';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { RxCross1 } from 'react-icons/rx';
import Button from '../Button/index.jsx';

import { useTranslation } from 'react-i18next';
import { use } from 'i18next';
import { Link } from 'react-router-dom';
import LanguageSelector from '../language/LanguageSelector';




export const Navbar = ({ children }) => {
  const { t } = useTranslation(); // Initialize useTranslation

  // Assuming children can be strings that require translation
  const translatedChildren = typeof children === 'string' ? t(children) : children;

  return (
    <>
      <div className="css-navbar">{translatedChildren}</div>
    </>
  );
};

export const Flex = ({ children, gap, justifyCenter, itemsCenter, spaceBetween, direction }) => {
  return (
    <>
      <div className={`css-flex css-${gap} css-${justifyCenter} css-${itemsCenter} css-${spaceBetween} css-${direction}`}>{children}</div>
    </>
  );
};

export const Typography = ({ children, variant, color, fontSize, fontWeight }) => {
  const renderTypography = () => {
    switch (variant) {
      case 'h1':
        return <h1 className={`css-typography-heading css-${color} css-${fontSize} css-${fontWeight}`}>{children}</h1>;
      case 'h2':
        return <h2 className={`css-typography-heading css-${color} css-${fontSize} css-${fontWeight}`}>{children}</h2>;
      case 'h3':
        return <h3 className={`css-typography-heading css-${color} css-${fontSize} css-${fontWeight}`}>{children}</h3>;
      case 'p':
        return <p className={`css-typography-paragraph css-${color} css-${fontSize} css-${fontWeight}`}>{children}</p>;
      case 'span':
        return <span className={`css-typography-span css-${color} css-${fontSize} css-${fontWeight}`}>{children}</span>;
      default:
        return <p className={`css-typography-paragraph css-${color} css-${fontSize} css-${fontWeight}`}>{children}</p>; // Default to paragraph
    }
  };
  return renderTypography();
};

export const Image = ({ link, alt, imageType, ImageSize, href }) => {
  return (
    <>
      {href ? (
        <a href={href}  rel="noopener noreferrer">
          <img src={link} alt={alt} className={`css-image css-${imageType} css-${ImageSize}`} />
        </a>
      ) : (
        <img src={link} alt={alt} className={`css-image css-${imageType} css-${ImageSize}`} />
      )}
    </>
  );
};

export const NavListDesktop = ({ isTop }) => {
  const [hoveredItem, setHoveredItem] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Set up dispatch



  const { t} = useTranslation();

  return (


    <>
      <style>
        {`
          
          @media (max-width: 1600px), (max-width: 119px) {
            .dynamic-text-size {
              font-size: 0.8em;
            }
          }
        `}
      </style>
    <div className="tw-flex tw-justify-center tw-items-center tw-pl-1 tw-gap-4 tw-relative tw-z-[1100]">
      {NavItems.map((item) => (
        <div
          key={item.id}
          className=""
          onMouseEnter={() => {
            if (item.childLinks) {
              dispatch(setBackDrop(true));
            }
            setHoveredItem(item.id);
          }}
          onMouseLeave={() => {
            if (item.childLinks) {
              dispatch(setBackDrop(false));
            }
            setHoveredItem(null);
          }}
        >
          <ul
            className={`tw-mt-4 !tw-py-2 !tw-px-3 tw-rounded-[20px]   ${hoveredItem === item.id ? 'tw-shadow-[0_0_0_1px_#898a9c]' : ''} tw-flex tw-justify-center tw-items-center gap-2 tw-cursor-pointer
            
            `}
            onClick={() => {
              if (item.url.startsWith('http://') || item.url.startsWith('https://')) {
                window.open(item.url, '_blank');
              } else {
                navigate(`${item.url}`);
              }
              dispatch(setBackDrop(false));
              setHoveredItem(null);
            }}
          >
            <li className={`${isTop ? 'tw-text-white tw-text-[1em]' : 'tw-text-[#1f2437]'}   font-extrabold dynamic-text-size`}>{t(item.name)}</li>
            {item.childLinks && <IoIosArrowDown color={isTop ? '#fff' : '#1f2437'} className={`tw-transition-transform tw-duration-300 ${hoveredItem === item.id ? 'tw-rotate-180' : ''}`} />}
          </ul>
          {hoveredItem === item.id && item.childLinks && (
            <div className="tw-absolute tw-left-0 tw-top-full tw-z-[1000]">
              <NavListChildLinks item={item} navigate={navigate} hoveredItem={hoveredItem} dispatch={dispatch} setBackDrop={setBackDrop} />
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export const NavListChildLinks = ({ item, navigate, hoveredItem, dispatch, setBackDrop }) => {
  const childLinks = item?.childLinks || [];

  const { t } = useTranslation();

  return (
    <div
      className={` tw-bg-[#fff] tw-rounded-2xl ${hoveredItem === 1 ? 'tw-min-w-[1000px] md:tw-min-w-[1000px] 2xl:tw-min-w-[1200px]' : 'tw-min-w-[850px]'} tw-shadow-md tw-mt-[0.8rem] tw-animate-slideUp tw-z-[1000] tw-grid ${
        hoveredItem === 1 ? 'tw-grid-cols-3 md:tw-grid-cols-4 2xl:tw-grid-cols-4' : 'tw-grid-cols-2'
      }  tw-gap-4 tw-p-4`}
    >
      {childLinks.slice(0, 16).map((child, idx) => (
        <div key={idx} className="tw-col-span-1">
          <ul
            onClick={() => {
              if (child.Link.startsWith('http://') || child.Link.startsWith('https://')) {
                window.open(child.Link, '_blank');
              } else {
                navigate(`${child.Link}`);
              }
              dispatch(setBackDrop(false));
            }}
            className="tw-flex tw-gap-4 tw-w-full tw-items-center !tw-ml-0 !tw-p-2 tw-rounded-md hover:tw-bg-slate-200 tw-cursor-pointer"
          >
            <div className="tw-bg-[#1F2437] tw-p-3 md:tw-p-1 xl:tw-p-2 tw-rounded-md">{child.icons}</div>
            <div className="tw-flex tw-flex-col tw-justify-center">
              <li className="tw-text-black md:tw-text-[16px] hover:tw-bg-gray-200 tw-cursor-pointer">{t(child.title)}</li>
              <li className="tw-text-[14px] md:tw-text-[12px] tw-text-[#898a9c] hover:tw-bg-gray-200 tw-cursor-pointer">{child.description.substring(0, 25)}...</li>
            </div>
          </ul>
        </div>
      ))}
      {childLinks.length > 16 && (
        <div className="tw-col-span-full tw-flex tw-justify-center tw-items-center tw-mt-0">
          <Link to="/services"><Button className="btn-primary" label="See More Services" /></Link>
        </div>
      )}
    </div>
  );
};

export const HamburgerButton = ({ setOpenMenu }) => {
  return (
    <>
      <div>
        <RxHamburgerMenu
          color="#1f2437"
          className="tw-text-[22px] tw-cursor-pointer"
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>
    </>
  );
};

export const CancelMenuButton = ({ setOpenMenu }) => {
  return (
    <>
      <div>
        <RxCross1
          color="#1f2437"
          className="tw-text-[22px] tw-cursor-pointer "
          onClick={() => {
            setOpenMenu(false);
          }}
        />
      </div>
    </>
  );
};
export const NavListMobile = ({ openMenu, selectedNavItem, setSelectedNavItem, setOpenMenu }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <>
      <div className={`tw-absolute tw-left-0 tw-right-0 tw-bg-white tw-transform tw-origin-top tw-transition-transform tw-duration-300 ${openMenu ? 'tw-scale-y-100' : 'tw-scale-y-0'} tw-h-screen tw-pt-4 tw-overflow-y-auto tw-overflow-x-hidden`}>
        <div className="w-flex tw-justify-center tw-items-center">
          {NavItems.map((item) => (
            <div key={item.id}>
              <ul
                className="tw-border-b-[1px] tw-border-gray-light tw-pt-2 tw-min-h-10"
                onClick={() => {
                  if (item.childLinks) {
                    setSelectedNavItem(selectedNavItem === item.id ? null : item.id);
                  } else {
                    navigate(item.url);
                    setOpenMenu(false);
                  }
                }}
              >
                <li>
                  <div className="tw-flex tw-justify-between tw-items-center tw-pr-4">
                    <span className="!tw-text-[#1f2437] !tw-text-[15px] !tw-normal-case !tw-font-medium tw-cursor-pointer">{t(item.name)}</span>
                    {item.childLinks && <MdKeyboardArrowRight color={'#1f2437'} className={`tw-text-[20px]`} />}
                  </div>
                </li>
              </ul>
              {/* Replace horizontal sliding with vertical overlay */}
              <div className={`tw-absolute tw-top-0 tw-right-0 tw-left-0 tw-bottom-0 tw-bg-white tw-z-[5000] tw-transition-all tw-duration-300 ${selectedNavItem === item.id ? 'tw-opacity-100 tw-pointer-events-auto' : 'tw-opacity-0 tw-pointer-events-none'}`}>
                {item.childLinks && <SideNavigationBar item={item} navigate={navigate} selectedNavItem={selectedNavItem} setOpenMenu={setOpenMenu} setSelectedNavItem={setSelectedNavItem} />}
              </div>
            </div>
          ))}
        </div>
        
        {/* Language Selector Section */}
        <ul className="tw-border-b-[1px] tw-border-gray-light tw-pt-2 tw-min-h-10">
          <li>
            <div className="tw-flex tw-justify-between tw-items-center tw-pr-4">
              <span className="!tw-text-[#1f2437] !tw-text-[15px] !tw-normal-case !tw-font-medium">{t("Language")}</span>
              <div className="tw-scale-75 tw-origin-right">
                <LanguageSelector isMobile={true} />
              </div>
            </div>
          </li>
        </ul>
        
        <div className="tw-flex tw-justify-start tw-items-center tw-gap-5 tw-p-4">
          <Button 
            className={'btn-dark dynamic-text-size'} 
            label={t('Book an Appointment')} 
            onClick={() => {
              window.location.href = "https://portalclient.vercel.app";
              setOpenMenu(false);
            }}
          />
          <Button 
            className={'btn-light dynamic-text-size'} 
            label={t('Login')} 
            onClick={() => {
              window.location.href = "https://portalclient.vercel.app";
              setOpenMenu(false);
            }}
          />
        </div>
      </div>
    </>
  );
};

export const SideNavigationBar = ({ item, navigate, selectedNavItem, setOpenMenu, setSelectedNavItem }) => {

  const { t } = useTranslation();
  return (
    <div className={`tw-pt-4 tw-pb-56 tw-bg-white tw-w-full tw-min-h-[100vh] tw-px-4 tw-overflow-y-auto tw-overflow-x-hidden`}>
      <div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-pt-2 tw-px-4">
        <span
          onClick={() => {
            setSelectedNavItem(null);
          }}
          className="!tw-text-[#1f2437] !tw-text-[15px] tw-cursor-pointer"
        >
          {t("Back")}
        </span>
        <div className="tw-scale-75 tw-origin-right">
          <LanguageSelector isMobile={true} />
        </div>
      </div>

      <div className=" tw-flex tw-flex-col tw-justify-start tw-items-start tw-h-full tw-w-full tw-pt-4 ">
        {/* All Services Option - Only show for Services menu */}
        {item.name === "Services" && (
          <div>
            <ul
              onClick={() => {
                navigate('/services');
                setOpenMenu(false);
              }}
              className="tw-flex tw-gap-4 tw-w-full tw-items-center !tw-ml-0 !tw-p-2 tw-rounded-md hover:tw-bg-slate-200 tw-cursor-pointer tw-border-b-[1px] tw-border-gray-light tw-mb-2"
            >
              <div className="tw-bg-[#1F2437] tw-p-3 tw-rounded-md">
                <svg className="tw-w-6 tw-h-6 tw-text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="tw-flex tw-flex-col tw-justify-center">
                <li className="tw-text-black hover:tw-bg-gray-200 tw-cursor-pointer tw-font-semibold">{t("All Services")}</li>
                <li className="tw-text-[14px] tw-text-[#898a9c] hover:tw-bg-gray-200 tw-cursor-pointer">{t("View all our services in one place")}</li>
              </div>
            </ul>
          </div>
        )}
        
        {item.childLinks.map((child, idx) => (
          <div key={idx}>
            <ul
              onClick={() => {
                if (child.Link.startsWith('http://') || child.Link.startsWith('https://')) {
                  window.open(child.Link, '_blank');
                } else {
                  navigate(`${child.Link}`);
                }
                setOpenMenu(false);
              }}
              className="tw-flex tw-gap-4 tw-w-full tw-items-center !tw-ml-0 !tw-p-2 tw-rounded-md hover:tw-bg-slate-200 tw-cursor-pointer"
            >
              <div className="tw-bg-[#1F2437] tw-p-3 tw-rounded-md">{child.icons}</div>
              <div className="tw-flex tw-flex-col tw-justify-center">
                <li className="tw-text-black hover:tw-bg-gray-200 tw-cursor-pointer">{t(child.title)}</li>
                <li className="tw-text-[14px] tw-text-[#898a9c] hover:tw-bg-gray-200 tw-cursor-pointer">{child.description.substring(0, 35)}...</li>
              </div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
