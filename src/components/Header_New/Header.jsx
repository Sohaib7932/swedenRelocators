import {
  Flex,
  Image,
  Navbar,
  NavListDesktop,
  Typography,
} from "../StyledComponents/Header";
import logo from "../../assets/images/SwedenRelocators.png";
import Button from "../Button";
import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import LanguageSelector from "../language/LanguageSelector";
import "./style.css"; // Import the CSS file

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
const Header = () => {
  const [isTop, setIsTop] = useState(true);
  const [isScreenTab, setIsScreenTab] = useState(window.innerWidth);
  const [isBelow1300px, setIsBelow1300px] = useState(window.innerWidth < 1320);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsScreenTab(width);
      setIsBelow1300px(width < 1320);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  const { setLanguage } = useTranslation();

  const { t } = useTranslation();

  return (
    <>
      {isBelow1300px ? (
        <MobileHeader />
      ) : (
        <div className="tw-relative tw-w-full">
          <Navbar>
            <Flex direction={"flex-direction-column "}>
              {/* Top bar section */}
              <div
                className={`tw-z-20 top-bar ${
                  isTop ? "visible" : "hidden"
                } tw-pt-[10px] tw-px-[7%]   tw-bg-[#1f2437]`}
              >
                <Flex
                  className="langtest"
                  gap={"gap-large"}
                  spaceBetween={"space-between"}
                >
                  <div className="tw-ml-2">
                    <Flex gap={"gap-small"}>
                      <Typography
                        variant={"p"}
                        color={"white"}
                        fontSize={"base-small"}
                      >
                        {t("Mon - Fri 10.00 - 18.00")}
                      </Typography>
                      <div className="tw-w-[1px] tw-h-6 tw-bg-[#363a4b] mx-2"></div>
                      <Typography
                        variant={"p"}
                        color={"white"}
                        fontSize={"base-small"}
                      >
                        {t(" Amiralsgatan 86E 214 37 Malmö, Sweden")}
                      </Typography>
                      {/* Google Translate container */}
                    </Flex>
                  </div>

                  <LanguageSelector />
                  {/* <div className="language-selector">
        <select onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="ur">Urdu</option>
          <option value="de">German</option>
        </select>
      </div> */}
                </Flex>
              </div>

              {/* Navbar section */}
              <div
                className={`tw-fixed tw-pb-[20px]  tw-pt-[70px]  tw-px-[5.6%]  tw-bg-[#1f2437] tw-w-full  tw-transition-all tw-duration-500 tw-ease-in-out ${
                  isTop
                    ? "tw-translate-y-[0px]"
                    : "tw-translate-y-[-52px] tw-pt-2 tw-bg-[#fff]"
                }`}
              >
                <Flex spaceBetween={"space-between"}>
                  <div className="tw-flex tw-justify-center tw-items-center tw-gap-0">
                    <Link to="/">
                      <Image
                        link={logo}
                        alt="Sweden Relocators Logo"
                        imageType={"brand-image-small"}
                        style={{ marginRight: "500px" }}
                      />
                    </Link>
                    <NavListDesktop isTop={isTop} />
                  </div>
                  <div className="tw-flex tw-justify-center tw-items-center tw-gap-1">
                    <Link to="/register">
                      <Button
                        className={
                          isTop ? "btn-Plain tw-text-black" : "btn-dark"
                        }
                        label={t("Book an Appointment")}
                        onClick={() =>
                          window.open(
                            "https://swedenrelocators.se/pages/user/book_appointment",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      />
                    </Link>
                    <Button
                      className={isTop ? "btn-Transparent" : "btn-light"}
                      label={t("Login")}
                      onClick={() =>
                        window.open(
                          "https://swedenrelocators.se/pages/user/login",
                          "_blank", // open in new tab
                          "noopener,noreferrer" // security best practice
                        )
                      }
                    />
                  </div>
                </Flex>
              </div>
            </Flex>
          </Navbar>
        </div>
      )}
    </>
  );
};

export default Header;
