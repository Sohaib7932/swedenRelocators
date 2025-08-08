import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/SwedenRelocators.png";
import TopBar from "./TopBar";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [housingDropdownOpen, setHousingDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [assessmentsDropdownOpen, setAssessmentDropdownOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!toggleMenu && !housingDropdownOpen) {
        setIsSticky(window.scrollY > 260);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toggleMenu, housingDropdownOpen]);

  const data = [
    {
      id: 1,
      title: "Asylum",
      description:
        "You have to be in Sweden or on the Swedish border in order to apply for asylum.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-home"></i>
      ),
      Link:'/asylum'
    },
    {
      id: 2,
      title: "Family Reunification",
      description:
        "Family reunification is a recognized reason for the immigration of family members to a country.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>
      ),
      Link:'/family-reunification'
    },
    {
      id: 3,
      title: "Personnummer Sweden",
      description:
        "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>
      ),

      Link:'/personnumer-sweden'
      
    },
    {
      id: 4,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>
      ),
      Link:'/cpr-number-denmark'
      
    },
    {
      id: 5,
      title: "Work Permit",
      description:
        "Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>
      ),
      Link:'/work-permit'
    },
    {
      id: 5,
      title: "Business Permit",
      description:
        "Swedish business culture is open and innovative, and starting a business there is relatively simple        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>
      ),

      Link:'/business-permit'
    
    },
    {
      id: 6,
      title: "Business Visit",
      description:
        "Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>
      ),
      
      Link:'/business-visit'
    },
    {
      id: 7,
      title: "Citizenship",
      description:
        "When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>
      ),
      Link:'/citizenship'
      
    
    },
    {
      id: 8,
      title: "Study in EU",
      description:
        "If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>
      ),
      Link:'/study-in-eu'
      
    },
    {
      id: 9,
      title: "Global Visit Visas",
      description:
        "For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>
      ),
      Link:'/global-visit-visas'
    },
    {
      id: 10,
      title: "EEA Permits",
      description:
        "Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>
      ),
      Link:'/eea-permits'
    },
    {
      id: 11,
      title: "Parents EU Permit",
      description:
        "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>
      ),
      Link:'/parents-eu-permit'
    },
    {
      id: 12,
      title: "Marriage & Divorce      ",
      description:
        "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>
      ),
      Link:'/marriage-divorce'
    },
    {
      id: 13,
      title: "Company Registration      ",
      description:
        "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link:'/company-registration'
    },
    {
      id: 14,
      title: "House & Offices",
      description:
        "we offer you an easy and painless solution where you can get a place to live without any worries.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link:'/house-offices'
    },
    {
      id: 15,
      title: "Appeal Cases",
      description:
        "Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>
      ),
      Link:'/appeal-cases'
    },
    {
      id: 16,
      title: "EU Citizens Relocation",
      description:
        "Family reunification means that a family that has been split up can apply to be allowed to live together.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>
      ),
      Link:'/eu-family-reunification'
    },
    {
      id: 17,
      title: "Investment",
      description:
        "There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>
      ),
      Link:'/investment'
    },
    {
      id: 18,
      title: "Direct Citizenship  ",
      description:
        "citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>
      ),
      Link:'/direct-citizenship-by-investments'
    },
    {
      id: 19,
      title: "Permanent Residence",
      description:
        "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>
      ),
      Link:'/permanent-residence'
    },
    {
      id: 20,
      title: "Golden Visa ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
      Link:'/golden-visa-greece-portugal'
    },
  ];

  let navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleNavigationMenu = (path) => {
    navigate(path);
    setToggleMenu(false);
    setHousingDropdownOpen(false);
  };

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const toggleHousingDropdown = () => {
    const newValue = !housingDropdownOpen;
    setHousingDropdownOpen(newValue);
    setServicesDropdownOpen(false);
    setAssessmentDropdownOpen(false);

    if (newValue) {
      setIsSticky(false);
    }
  };

  const toggleServicesDropdown = () => {
    const newValue = !servicesDropdownOpen;
    setServicesDropdownOpen(newValue);
    setHousingDropdownOpen(false);
    setAssessmentDropdownOpen(false);

    if (newValue) {
      setIsSticky(false);
    }
  };

  const toggleAssessmentDropdown = () => {
    const newValue = !assessmentsDropdownOpen;
    setAssessmentDropdownOpen(newValue);
    setHousingDropdownOpen(false);
    setServicesDropdownOpen(false);

    if (newValue) {
      setIsSticky(false);
    }
  };
  return (
    <>
      <div className=" tw-relative">
        <TopBar />
        <nav
          className={`navbar md:tw-absolute tw-relative md:-tw-top-10   -tw-top-5 tw-h-24 navbar-expand-lg navbar-light  tw-transition-all tw-duration-700 ${
            isSticky ? "fixed-top p-0 tw-smooth-transition" : ""
          }`}
        >
          <div
            className={`container_navbar container${
              isSticky
                ? "-fluid  px-lg-5 px-sm-0 tw-rounded-none"
                : "-lg px-lg-5 px-sm-3  md:tw-rounded-md  tw-rounded-none"
            }  tw-transition-all tw-duration-700 container-navbar tw-py-1.5 tw-bg-white `}
          >
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleToggle}
              aria-controls="navbarSupportedContent"
              aria-expanded={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand   xl:tw-w-56 tw-w-52 " to="/">
              <img src={logo} alt="" />
            </Link>

            <div
              class={`collapse navbar-collapse tw-z-50 ${
                toggleMenu ? "show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 tw-gap-7">
                <li className="nav-item">
                  <Link
                    className=" tw-font-bold    tw-text-gray-dark tw-text-sm tw-uppercase"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="  tw-font-bold tw-text-gray-dark tw-text-sm tw-uppercase"
                    to="/new_in_sweden"
                  >
                    New in sweden
                  </Link>
                </li>
                <li className="nav-item dropdown hover-dropdown2  relative md:tw-block tw-hidden">
                  <Link
                    onClick={() => handleNavigation("/services")}
                    className="tw-font-bold flex  tw-justify-between tw-items-center tw-text-gray-dark tw-text-sm tw-uppercase dropdown-toggle"
                    to={"/services"}
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                    <i class="fas fa-chevron-down  ps-2"></i>
                  </Link>
                  <div
                    className="dropdown-men2  tw-w-[600px] tw-pt-2  border-0   tw-absolute tw-z-40  tw-hidden"
                    aria-labelledby="dropdownMenuClickableOutside"
                  >
                    <ul
                      style={{
                        gridTemplateColumns: "200px 200px 200px",
                        display: "grid",
                      }}
                      className=" tw-p-0 tw-bg-white  tw-overflow-hidden tw-rounded-md tw-shadow-xl"
                    >
                      {data?.map((item, index) => {
                        return (
                         <>
                          <li className=" " key={index}>
                            <Link
                              style={{
                                whiteSpace: "pre-wrap",
                                display: "flex",
                                gap: "9px",
                                alignItems: "center",
                              }}
                              className="dropdown-item     tw-uppercase tw-text-sm  tw-font-medium   "
                              to={`${item?.Link}`}
                            >
                              {/* <p className="  tw-flex tw-gap-1"> {item?.icons}</p> */}
                              {item?.title}
                            </Link>
                            <hr className=" tw-border-gray m-0" />
                          </li>
                         
                         </>
                        );
                      })}
                    </ul>
                  </div>
                </li>

                <li class="nav-item dropdown md:tw-hidden tw-block ">
                  <a
                    class="tw-font-bold flex  tw-justify-between tw-items-center tw-text-gray-dark tw-text-sm tw-uppercase dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    onClick={toggleServicesDropdown}
                    aria-expanded={toggleServicesDropdown}
                  >
                    Services
                    <i class="fas ms-2 fa-chevron-down  tw-float-right"></i>
                  </a>

                  <ul
                    className={`dropdown-menu border-0    md:tw-w-60 tw-w-full  ${
                      servicesDropdownOpen ? "show" : ""
                    } `}
                    // aria-labelledby="navbarDropdown"
                  >
                    {data?.map((item, index) => {
                      return (
                        <>
                          <li className=" " key={index}>
                            <Link
                              style={{
                                whiteSpace: "pre-wrap",
                                display: "flex",
                                gap: "9px",
                                alignItems: "center",
                              }}
                              className="dropdown-item     tw-uppercase tw-text-sm  tw-font-medium   "
                              to={`${item?.Link}`}
                            >
                              {/* <p className="  tw-flex tw-gap-1"> {item?.icons}</p> */}
                              {item?.title}
                            </Link>
                          </li>
                          <hr className=" tw-border-gray m-0" />
                        </>
                      );
                    })}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    className=" tw-font-bold tw-text-gray-dark tw-text-sm tw-uppercase"
                    to="/about_us"
                  >
                    About us
                  </Link>
                </li>
                <li className="nav-item dropdown hover-dropdown md:tw-block tw-hidden">
                  <Link
                    className="tw-font-bold flex  tw-justify-between tw-items-center tw-text-gray-dark tw-text-sm tw-uppercase dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Housing
                    <i class="fas fa-chevron-down   ps-2"></i>
                  </Link>
                  <ul
                    className="dropdown-menu border-0  tw-rounded-md tw-overflow-hidden md:tw-w-60 tw-w-full tw-shadow-xl "
                    aria-labelledby="navbarDropdown"
                  >
                    <li className=" ">
                      <Link
                        className="dropdown-item   tw-text-sm tw-font-medium "
                        to="/housing"
                      >
                        HOW ITS WORKS
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/available_housing"
                      >
                        AVAILABLE HOUSING
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to="/rent_out_your_housing"
                      >
                        RENT OUT YOUR HOUSE
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className="">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/looking_for_housing"
                      >
                        LOOKING FOR HOUSING
                      </Link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown md:tw-hidden tw-block ">
                  <a
                    class="tw-font-bold flex  tw-justify-between tw-items-center tw-text-gray-dark tw-text-sm tw-uppercase dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    onClick={toggleHousingDropdown}
                    aria-expanded={housingDropdownOpen}
                  >
                    Housing
                    <i class="fas ms-2 fa-chevron-down  tw-float-right"></i>
                  </a>

                  <ul
                    className={`dropdown-menu border-0  md:tw-w-60 tw-w-full  ${
                      housingDropdownOpen ? "show" : ""
                    } `}
                    aria-labelledby="navbarDropdown"
                  >
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/housing"
                      >
                        HOW ITS WORKS
                      </Link>
                    </li>
                    {/* <hr className=" tw-border-gray m-0" /> */}
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/available_housing"
                      >
                        AVAILABLE HOUSING
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to="/rent_out_your_housing"
                      >
                        RENT OUT YOUR HOUSE
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/looking_for_housing"
                      >
                        LOOKING FOR HOUSING
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown hover-dropdown md:tw-block tw-hidden">
                  <Link
                    to={"/assessment"}
                    onClick={() => handleNavigation("/assessment")}
                    className="tw-font-bold flex  tw-justify-between tw-items-center tw-text-gray-dark tw-text-sm tw-uppercase dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Assessments
                    <i class="fas ms-2 fa-chevron-down "></i>
                  </Link>
                  <ul
                    className="dropdown-menu border-0  tw-rounded-md  tw-overflow-hidden md:tw-w-60 tw-w-full tw-shadow-xl "
                    aria-labelledby="navbarDropdown"
                  >
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to={`/assessment_register`}
                      >
                        BUSINESS VISA
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to={`/family_reunification_assessment`}
                      >
                        FAMILY REUNIFICATION
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className="">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to={`/long_term_eu_status_assessment`}
                      >
                        LONG TEAM EU STATUS
                      </Link>
                    </li>
                  
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to={`/student_assessments`}
                      >
                        STUDY IN SWEDEN
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to={`/visit_visa`}
                      >
                        VISIT VISA
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className="">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/Work_permit"
                      >
                        WORK PEPMIT
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className="">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment"
                      >
                        ALL ASSESSMENTS
                      </Link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown md:tw-hidden tw-block ">
                  <Link
                    to={"/assessment"}
                    class="tw-font-bold flex  tw-justify-between tw-items-center tw-text-gray-dark tw-text-sm tw-uppercase dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    onClick={toggleAssessmentDropdown}
                    aria-expanded={assessmentsDropdownOpen}
                  >
                    Assessments
                    <i class="fas ms-2 fa-chevron-down  tw-float-right"></i>
                  </Link>

                  <ul
                    className={`dropdown-menu border-0  md:tw-w-60 tw-w-full  ${
                      assessmentsDropdownOpen ? "show" : ""
                    } `}
                    aria-labelledby="navbarDropdown"
                  >
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to={`/assessment_register/BUSINESS VISA`}
                      >
                        BUSINESS VISA
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to={`/family_reunification_assessment`}
                      >
                        FAMILY REUNIFICATION
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className="">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to={`/long_term_eu_status_assessment`}
                      >
                        LONG TEAM EU STATUS
                      </Link>
                    </li>
                   
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to={`/assessment_register/STUDY IN SWEDEN`}
                      >
                        STUDY IN SWEDEN
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to={`/assessment_register/VISIT VISA`}
                      >
                        VISIT VISA
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className="">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment_register/WORK PEPMIT"
                      >
                        WORK PEPMIT
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className="">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment"
                      >
                        ALL ASSESSMENTS
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className=" tw-font-bold tw-text-gray-dark tw-text-sm  tw-uppercase"
                    to="/contact_us"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
