import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar";
import Banner_Page from "../../components/Common/Banner_Page";
import { IoLocationOutline } from "react-icons/io5";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import san from "../../assets/images/san.webp";
import san2 from "../../assets/images/san2.webp";
import { GoArrowUpRight, GoTriangleRight } from "react-icons/go";

import forsaleicon from "../../assets/icons/sale.svg";

import idicon from "../../assets/icons/id.svg";

import availableicon from "../../assets/icons/tick.svg";

import locationicon from "../../assets/icons/location.svg";

import Header from "../../components/Header_New/Header";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";

const Property_Details = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);
  const [modal, setModal] = useState(false);
  const sliders = [san, san, san, san];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides?.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides?.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurr(index);
  };

  const data = [
    {
      id: 1,
      title: "Asylum",
      description:
        "You have to be in Sweden or on the Swedish border in order to apply for asylum.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-home"></i>
      ),
    },
    {
      id: 2,
      title: "Family Reunification",
      description:
        "Family reunification is a recognized reason for the immigration of family members to a country.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>
      ),
    },
    {
      id: 3,
      title: "Personnummer Sweden",
      description:
        "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>
      ),
    },
    {
      id: 4,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>
      ),
    },
    {
      id: 5,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>
      ),
    },
    {
      id: 5,
      title: "Business Permit",
      description:
        "Swedish business culture is open and innovative, and starting a business there is relatively simple        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>
      ),
    },
    {
      id: 6,
      title: "Business Visit",
      description:
        "Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>
      ),
    },
    {
      id: 7,
      title: "Citizenship",
      description:
        "When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>
      ),
    },
    {
      id: 8,
      title: "Study in EU",
      description:
        "If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>
      ),
    },
    {
      id: 9,
      title: "Global Visit Visas",
      description:
        "For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>
      ),
    },
    {
      id: 10,
      title: "EEA Permits",
      description:
        "Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>
      ),
    },
    {
      id: 11,
      title: "Parents EU Permit",
      description:
        "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>
      ),
    },
    {
      id: 12,
      title: "Marriage & Divorce      ",
      description:
        "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>
      ),
    },
    {
      id: 13,
      title: "Company Registration      ",
      description:
        "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
    },
    {
      id: 14,
      title: "House & Offices",
      description:
        "we offer you an easy and painless solution where you can get a place to live without any worries.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
    },
    {
      id: 15,
      title: "Appeal Cases",
      description:
        "Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>
      ),
    },
    {
      id: 16,
      title: "EU Citizens Relocation",
      description:
        "Family reunification means that a family that has been split up can apply to be allowed to live together.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>
      ),
    },
    {
      id: 17,
      title: "Investment",
      description:
        "There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>
      ),
    },
    {
      id: 18,
      title: "Direct Citizenship ",
      description:
        "citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>
      ),
    },
    {
      id: 19,
      title: "Permanent Residence",
      description:
        "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>
      ),
    },
    {
      id: 20,
      title: "Golden Visa    ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
    },
  ];

  return (
    <>
      <Header />

      <style>
        {`
          .custom-bg {
            background-color: rgb(0, 123, 255) !important;
          }
        `}
      </style>
      <Banner_Page
        highlightText={"Property Details"}
        regularText={
          "Get to know about the best properties. Explore options across cities and neighborhoods that suit your needs. Let us help you find the perfect place to settle in."
        }
        backgroundImage={homeBgImage}
      />

      <section className="">
        <section className="tw-bg-[#F5FAFF] tw-py-6">
          <div className="container  tw-rounded-2xl  px-4 tw-py-4 tw-shadow-lg tw-bg-white">
            <div className=" row g-3 tw-py-8">
              <div className="col-md-12">
                <h3 style={{ color: "white", textAlign: "center" }}>
                  Luxury Apartments on California.
                </h3>

                <div className="tw-flex md:tw-flex-row tw-flex-col tw-flex-wrap md:tw-space-x-14 tw-mt-4 tw-mb-2">
                  <div className="container tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white tw-flex-1 tw-mb-4 sm:tw-w-full md:tw-w-1/3">
                    <p className="tw-m-0 tw-pl-1 tw-font-bold tw-text-xl tw-text-gray">
                      Status
                    </p>
                    <div className="tw-flex tw-items-center tw-justify-between tw-mt-1">
                      <h3 className="tw-ml-1 tw-mt-1">For Sale</h3>
                      <img
                        src={forsaleicon}
                        className="tw-w-10 tw-h-10"
                        alt="For Sale Icon"
                      />
                    </div>
                  </div>

                  <div className="container tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white tw-flex-1 tw-mb-4 sm:tw-w-full md:tw-w-1/3">
                    <p className="tw-m-0 tw-pl-1 tw-font-bold tw-text-xl tw-text-gray">
                      Identification
                    </p>
                    <div className="tw-flex tw-items-center tw-justify-between tw-mt-1">
                      <h3 className="tw-ml-1 tw-mt-1">475</h3>
                      <img
                        src={idicon}
                        className="tw-w-10 tw-h-10"
                        alt="For Sale Icon"
                      />
                    </div>
                  </div>

                  <div className="container tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white tw-flex-1 tw-mb-4 sm:tw-w-full md:tw-w-1/3">
                    <p className="tw-m-0 tw-pl-1 tw-font-bold tw-text-xl tw-text-gray">
                      Available Status
                    </p>
                    <div className="tw-flex tw-items-center tw-justify-between tw-mt-1">
                      <h3 className="tw-ml-1 tw-mt-1">Available</h3>
                      <img
                        src={availableicon}
                        className="tw-w-10 tw-h-10"
                        alt="For Sale Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container tw-rounded-2xl  px-4 tw-p-4 tw-shadow tw-bg-white">
                <p className="tw-m-0 tw-pl-1 tw-font-bold   tw-text-xl tw-text-gray">
                  Address
                </p>
                <div className="tw-flex tw-items-center tw-items-center tw-justify-between  tw-mt-1">
                  <p className="tw-ml-1 tw-font-bold tw-mt-2">
                    SKOLGATAN 2 LGH 1402, 22361 LUND, LUND, SWEDEN
                  </p>
                  <img
                    src={locationicon}
                    className="tw-w-12 tw-h-12"
                    alt="For Sale Icon"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 ">
                <div className=" md:px-4 pb-4  tw-bg-white tw-rounded-2xl">
                  <div className=" ">
                    <div className="tw-overflow-hidden tw-border tw-border-gray-light tw-h-fit  tw-rounded-2xl tw-relative ">
                      <div
                        className="tw-flex tw-items-center tw-transition-transform tw-ease-out tw-duration-500 	 tw-w-fit"
                        style={{ transform: `translateX(-${curr * 100}%)` }}
                      >
                        {/* {sliders?.map((s) => (
    <> */}
                        <div className=" tw-flex-none  tw-w-full tw-h-full tw-relative">
                          <img
                            src={san}
                            alt=""
                            className=" tw-w-full tw-h-full  tw-object-cover"
                          />
                        </div>
                        <div className=" tw-flex-none  tw-w-full tw-h-full tw-relative">
                          <img
                            src={san2}
                            alt=""
                            className=" tw-w-full tw-h-full  tw-object-cover"
                          />
                        </div>
                        <div className=" tw-flex-none  tw-w-full tw-h-full tw-relative">
                          <img
                            src={san}
                            alt=""
                            className=" tw-w-full tw-h-full  tw-object-cover"
                          />
                        </div>

                        <div className=" tw-flex-none  tw-w-full tw-h-full tw-relative">
                          <img
                            src={san}
                            alt=""
                            className=" tw-w-full tw-h-full  tw-object-cover"
                          />
                        </div>

                        {/* </>
  ))} */}
                      </div>
                      <div className=" tw-absolute tw-top-6 tw-left-5 tw-gap-4  tw-flex  ">
                        <button
                          onClick={prev}
                          className="tw-p-1.5 tw-rounded-full tw-shadow tw-bg-white/80 tw-text-gray-800 tw-hover:bg-white"
                        >
                          <LiaAngleLeftSolid
                            size={30}
                            className=" tw-text-blue"
                          />
                        </button>
                        <button
                          onClick={next}
                          className="tw-p-1.5 tw-rounded-full tw-shadow tw-bg-white/80 tw-text-gray-800 tw-hover:bg-white"
                        >
                          <LiaAngleRightSolid
                            size={30}
                            className=" tw-text-blue"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" col-md-3">
                <div
                  className=" tw-flex tw-flex-col tw-gap-5  md:p-4 tw-bg-white tw-rounded-2xl"
                  style={{ maxHeight: "550px" }}
                >
                  <div className="  tw-h-32 tw-rounded-2xl tw-overflow-hidden">
                    <img src={san2} className=" tw-w-full tw-h-full" alt="" />
                  </div>
                  <div className="  tw-h-32 tw-rounded-2xl tw-overflow-hidden">
                    <img src={san} className=" tw-w-full tw-h-full" alt="" />
                  </div>
                  <div className="  tw-h-32 tw-rounded-2xl tw-overflow-hidden">
                    <img src={san} className=" tw-w-full tw-h-full" alt="" />
                  </div>
                  <div className="  tw-h-32 tw-rounded-2xl tw-overflow-hidden">
                    <img src={san} className=" tw-w-full tw-h-full" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container tw-rounded-2xl tw-my-4 tw-px-10 tw-py-4 tw-shadow-lg tw-bg-white ">
            <h3 className="tw-pl-4">Property Overview</h3>
            <div className=" tw-px-auto tw-grid md:tw-grid-cols-5 tw-justify-center tw-grid-cols-2 tw-mt-10">
              <div className=" tw-flex tw-mx-auto tw-flex-col tw-gap-2">
                <img
                  src="https://homy-next.vercel.app/_next/static/media/icon_04.20cbbaa1.svg"
                  className="tw-mx-auto tw-w-8"
                />
                <h5 className="  tw-m-0 tw-font-light  tw-mt-1 tw-text-xl tw-text-gray">
                  Sqft . 3,720
                </h5>
              </div>
              <div className=" tw-flex  tw-mx-auto tw-flex-col tw-gap-2">
                <img
                  src="https://homy-next.vercel.app/_next/static/media/icon_48.9b7f5b64.svg"
                  className="tw-mx-auto tw-w-12"
                />
                <h5 className="  tw-m-0 tw-font-light  tw-mt-1 tw-text-xl tw-text-gray">
                  Bed . 03
                </h5>
              </div>
              <div className=" tw-flex tw-mx-auto  md:tw-mt-0 tw-mt-4 tw-flex-col tw-gap-2">
                <img
                  src="https://homy-next.vercel.app/_next/static/media/icon_49.06c9f18e.svg"
                  className="tw-mx-auto tw-w-8"
                />
                <h5 className="  tw-m-0 tw-font-light  tw-mt-1 tw-text-xl tw-text-gray">
                  Bath . 2
                </h5>
              </div>
              <div className=" tw-flex  tw-mx-auto md:tw-mt-0 tw-mt-4  tw-flex-col tw-gap-2">
                <img
                  src="https://homy-next.vercel.app/_next/static/media/icon_50.8957a066.svg"
                  className="tw-mx-auto tw-w-8"
                />
                <h5 className="  tw-m-0 tw-font-light  tw-mt-1 tw-text-xl tw-text-gray">
                  Kitchen . 01
                </h5>
              </div>
              <div className=" tw-flex tw-mx-auto md:tw-mt-0 tw-mt-4 tw-flex-col tw-gap-2">
                <img
                  src="	https://homy-next.vercel.app/_next/static/media/icon_51.96ca6f07.svg"
                  className=" tw-w-8 tw-mx-auto"
                />
                <h5 className=" tw-mx-auto  tw-m-0 tw-font-light  tw-mt-1 tw-text-xl tw-text-gray">
                  Type . Apartment
                </h5>
              </div>
            </div>
          </div>

          <div className="container tw-bg-white tw-shadow-lg  tw-rounded-2xl md:tw-px-8 md:tw-py-8 tw-px-4  tw-py-4 ">
            <div className="row">
              <div className=" ">
                <div className="   ">
                  <h3 className="tw-pl-4">Overview</h3>
                  <p className=" tw-text-gray tw-pl-4 tw-mt-5">
                    Lorem ipsum dolor sit amet consectetur. Et velit varius
                    ipsum tempor vel dignissim tincidunt. Aliquam accumsan
                    laoreet ultricies tincidunt faucibus fames augue in sociis.
                    Nisl enim integer neque nec.
                  </p>
                </div>

                <hr className=" tw-text-gray" />
                <div className="  tw-bg-white">
                  <h3 className="tw-pl-4">Property Features</h3>
                  <p className="tw-pl-4 tw-text-gray tw-mt-5">
                    Risk management and compliance, when approached
                    strategically, have the potential to go beyond mitigating
                    threats.
                  </p>

                  <hr className=" tw-text-gray" />

                  <h4 className="tw-pl-4">Property Details</h4>

                  <div className=" tw-pl-4 tw-pr-4 tw-grid  tw-gap-6 md:tw-grid-cols-2 tw-grid-cols-1">
                    <div className=" tw-w-full">
                      <ul className=" tw-w-full tw-p-0">
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Bedrooms:</p>
                          <h6>03</h6>
                        </li>
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Bathrooms:</p>
                          <h6>03</h6>
                        </li>

                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Floor:</p>
                          <h6>Ground</h6>
                        </li>
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Ceiling Height:</p>
                          <h6>3.2m</h6>
                        </li>
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Renovation:</p>
                          <h6>3.2m</h6>
                        </li>
                      </ul>
                    </div>
                    <div className=" tw-w-full">
                      <ul className=" tw-w-full tw-p-0">
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Furnishing:</p>
                          <h6>Semi furnished</h6>
                        </li>
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Year Built:</p>
                          <h6>2010</h6>
                        </li>

                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Garage:</p>
                          <h6>03</h6>
                        </li>
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Property Type:</p>
                          <h6>Apartment</h6>
                        </li>
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Status:</p>
                          <h6>For Sale</h6>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className=" tw-text-gray" />

                  <h4 className="tw-pl-4">Basic Necessities</h4>

                  <div className="tw-px-4 tw-grid  tw-gap-6 md:tw-grid-cols-2 tw-grid-cols-1">
                    <div className=" tw-w-full">
                      <ul className=" tw-w-full tw-p-0">
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Furnished:</p>
                          <h6>Flexible</h6>
                        </li>
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Electricity:</p>
                          <h6>Included</h6>
                        </li>

                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Pets:</p>
                          <h6>Allowed</h6>
                        </li>
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Internet:</p>
                          <h6>Included </h6>
                        </li>
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Heat Water:</p>
                          <h6>Included</h6>
                        </li>
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Washing Machine:</p>
                          <h6>Available</h6>
                        </li>
                      </ul>
                    </div>
                    <div className=" tw-w-full">
                      <ul className=" tw-w-full tw-p-0">
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Balcony/Terrace:</p>
                          <h6>Available</h6>
                        </li>
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Parking:</p>
                          <h6>Not Included</h6>
                        </li>

                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Smoking:</p>
                          <h6>Not Allowed</h6>
                        </li>
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Lift:</p>
                          <h6>Available</h6>
                        </li>
                        <li className="  tw-flex tw-justify-between tw-items-center">
                          <p>Dishwasher:</p>
                          <h6>Available</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className=" tw-pt-4 tw-pb-4">Location</h3>
                <div className=" tw-rounded-2xl  p-3 tw-shadow-lg tw-bg-white">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4509.282465196967!2d13.02468000000001!3d55.59085300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a16677346a9f%3A0x3fffcf31a36f0521!2sAmiralsgatan%2086A%2C%20214%2037%20Malm%C3%B6%2C%20Sweden!5e0!3m2!1sen!2sus!4v1709645005178!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: "0;" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className=" tw-rounded-2xl  tw-my-10 p-5 tw-shadow-lg tw-bg-white">
                  <div className=" ">
                    <h3>Leave a Reply</h3>
                    <p className="">
                      Your email address will not be published.
                    </p>
                    <form>
                      <div className="row g-4 ">
                        <div className="col-md-6">
                          <Input
                            placeholder={"Name (required)"}
                            className={
                              " border tw-rounded-none tw-p-3 tw-w-full"
                            }
                          />
                        </div>
                        <div className="col-md-6">
                          <Input
                            placeholder={"Email (required)"}
                            className={
                              " border tw-rounded-none tw-p-3 tw-w-full"
                            }
                          />
                        </div>
                        <div className="col-md-12">
                          <textarea
                            rows={6}
                            className=" tw-border tw-border-gray-light  tw-rounded-md tw-w-full"
                          ></textarea>
                        </div>

                        <div className="col-md-12 tw-pt-6">
                          <Button
                            label={"Post Comment"}
                            className={
                              " tw-border  tw-py-2.5  tw-rounded-md tw-text-white   tw-bg-black tw-border-gray-dark"
                            }
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className=" tw-flex  tw-items-center tw-bg-Journey tw-bg-fixed tw-bg-center tw-bg-cover  tw-h-[60vh]">
        <div className=" container">
          <div className=" row">
            <div className=" col-md-6">
              <div>
                <h2 className=" text-white h2">
                  Start your Journey As a Retailer.
                </h2>
              </div>
            </div>
            <div className=" col-md-6">
              <div className=" tw-w-full tw-relative">
                <input
                  placeholder="Email address"
                  className=" tw-bg-white  tw-h-20 tw-outline-none  tw-pl-4 tw-rounded-xl tw-w-full"
                />
                <Button
                  label={"Get Started"}
                  className={
                    " tw-bg-blue tw-py-4 tw-rounded-xl tw-text-white tw-absolute tw-top-3 tw-right-3"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Property_Details;
