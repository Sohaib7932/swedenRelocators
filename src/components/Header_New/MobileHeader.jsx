/* eslint-disable no-unused-vars */
import {
  CancelMenuButton,
  HamburgerButton,
  Image,
  NavListMobile,
} from "../StyledComponents/Header";
import logo from "../../assets/images/SwedenRelocators.png";
import { useEffect, useState } from "react";
import Button from "../Button";
const MobileHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  
  // Manage body class to prevent horizontal scrolling when menu is open
  useEffect(() => {
    if (openMenu) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [openMenu]);
  
  return (
    <>
      <div className="tw-relative tw-w-full tw-z-[999] tw-overflow-x-hidden mobile-header-container">
        <div className="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-[999]  tw-py-[10px] tw-px-[20px] tw-w-full tw-shadow-md tw-bg-[#fff] ">
          <div className="tw-flex tw-justify-between tw-items-center">
            <Image
              link={logo}
              alt={"Brand Logo"}
              imageType={"brand-image-extra-small"}
            />
            {openMenu ? (
              <CancelMenuButton setOpenMenu={setOpenMenu} />
            ) : (
              <HamburgerButton setOpenMenu={setOpenMenu} />
            )}
          </div>
          <div className="tw-overflow-x-hidden mobile-nav-overlay">
            <NavListMobile
              openMenu={openMenu}
              selectedNavItem={selectedNavItem}
              setSelectedNavItem={setSelectedNavItem}
              setOpenMenu={setOpenMenu}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
