import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { useTranslation } from 'react-i18next';

import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import rentimage1 from "../../assets/iconscout/rentimage1.png";
import rentimage4 from "../../assets/iconscout/rentimage2.png";
import rentimage2 from "../../assets/iconscout/rentimage5.png";
import rentimage3 from "../../assets/iconscout/rentimage3.png";
import Select from "../../components/Selecttab";

import axios from 'axios';

import l1 from "../../assets/iconscout/l1.png";


import lfh1 from "../../assets/iconscout/lfh1.png";
import lfh2 from "../../assets/iconscout/lfh2.png";
import lfh3 from "../../assets/iconscout/lfh3.png";

import Header from "../../components/Header_New/Header";
const Looking_for_housing = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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






  const [selectCountry, setSelectCountry] = useState("");
  const [skaneCity, setSkaneCity] = useState("");
  const [copenhagenCity, setCopenhagenCity] = useState("");
  const [housing, setHousing] = useState("");
  const [roomsRequired, setRoomsRequired] = useState("");
  const [floorsRequired, setFloorsRequired] = useState("");
  const [bedsInRoom, setBedsInRoom] = useState("");
  const [adultsInHouse, setAdultsInHouse] = useState("");
  const [contractType, setContractType] = useState("");
  const [stayDuration, setStayDuration] = useState("");
  const [deposit, setDeposit] = useState("");
  const [depositDuration, setDepositDuration] = useState("");
  const [pets, setPets] = useState("");
  const [smoke, setSmoke] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Prepare the request body based on the API documentation
    const requestBody = new FormData();
    requestBody.append("type_id", "2"); // Housing type (e.g., Physically, Telephonic, Group)
    requestBody.append("category_id", "3"); // Category ID (dummy data for now)
    requestBody.append("appointment_date", "2024-12-16"); // Example date (replace as needed)
    requestBody.append("country", selectCountry || "Sweden"); // Use selected country or default to "Sweden"
    requestBody.append("time_slot_id", "4"); // Time slot (dummy data for now)
    requestBody.append("description", "Looking for affordable housing solutions."); // Example description
  
    try {
      // Send the POST request to the API endpoint
      const response = await axios.post(
        "https://nordicrelocators.com/api/appointment/reschedule/1",
        requestBody,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer 29|FObEnWL85TWkV7pN0LpUNcxE19raItBrN4UMqdfy4cf88eb4`, // Replace with your actual token
          },
        }
      );
  
      console.log("Response:", response.data);
      alert("Housing request submitted successfully!");
    } catch (error) {
      console.error("Error submitting housing request:", error.response?.data || error.message);
      alert(`Failed to submit housing request: ${error.response?.data?.message || error.message}`);
    }
  };
    


  const handleSelectChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "selectCountry":
        setSelectCountry(value);
        break;
      case "skaneCity":
        setSkaneCity(value);
        break;
      case "copenhagenCity":
        setCopenhagenCity(value);
        break;
      case "housing":
        setHousing(value);
        break;
      case "roomsRequired":
        setRoomsRequired(value);
        break;
      case "floorsRequired":
        setFloorsRequired(value);
        break;
      case "bedsInRoom":
        setBedsInRoom(value);
        break;
      case "adultsInHouse":
        setAdultsInHouse(value);
        break;
      case "contractType":
        setContractType(value);
        break;
      case "stayDuration":
        setStayDuration(value);
        break;
      case "deposit":
        setDeposit(value);
        break;
      case "depositDuration":
        setDepositDuration(value);
        break;
      case "pets":
        setPets(value);
        break;
      case "smoke":
        setSmoke(value);
        break;
      default:
        break;
    }
  };


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
        highlightText={t("Looking For Housing")}
        regularText={t(
          "Find your ideal home in Sweden. Our comprehensive services guide you through every step of the housing search process."
        )}
        backgroundImage={homeBgImage}
      />
      <div className=" tw-pt-8 tw-bg-[#F5FAFF] ">
        <section className=" tw-px-6 tw-pb-1 tw-bg-[#F5FAFF] 2xl:tw-pl-[14%] md:tw-pl-[10%] tw-pl-3 tw-pr-3 2xl:tw-pr-[14%] md:tw-pr-[10%]">
          <section className=" tw-rounded-2xl  tw-px-8 tw-py-8 tw-shadow-lg tw-bg-white ">
            <div className="tw-w-full  ">
              <span className=" tw-flex tw-items-center tw-gap-2">
                {" "}
                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Looking for housing`.replace(/\s+/g, ' ').trim())}</span>
              <h2>
                {t("Find Your Perfect Home with Us")} <strong>{t(``.replace(/\s+/g, ' ').trim())}</strong>
              </h2>

              <p className="tw-text-gray tw-text-justify">{t(`Searching for a new place to call home? Let us help you find the
                perfect match! Tell us what you're looking for, and we'll do the
                rest. By filling out the form below with your requirements, our
                team will connect you with the best options tailored to your
                needs, making your house-hunting journey as easy and stress-free
                as possible.`.replace(/\s+/g, ' ').trim())}</p>
            </div>
          </section>
        </section>
      </div>

      <div className="tw-flex tw-justify-center tw-pt-8 tw-pb-4 tw-bg-[#F5FAFF]">
        <div>
          <Link
            to="/available_housing"
            className="
        
          tw-bg-primary
          tw-text-white
          tw-px-6
          tw-py-3
          tw-w-full
          tw-rounded-lg
          tw-font-semibold
          tw-text-md
          tw-transition
          tw-duration-300
          hover:tw-bg-blue-100
          focus:tw-ring-2
          focus:tw-ring-blue-100
          active:tw-scale-95
          tw-shadow-lg
          hover:tw-shadow-xl
        "
          >{t(`Find all Available Housing`.replace(/\s+/g, ' ').trim())}</Link>
        </div>
      </div>

      <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-flex-wrap tw-p-4   tw-bg-[#F5FAFF] 2xl:tw-pl-[14%] md:tw-pl-[10%] tw-pl-3 tw-pr-3 2xl:tw-pr-[14%] md:tw-pr-[10%]">
        {[
          {
            image: l1,
            alt: "Rental Home 1",
            title: "Find Your Dream Home",
            description: "Discover the perfect place to live with our wide range of cozy and modern housing options.",
          },
          {
            image: lfh2,
            alt: "Rental Home 2",
            title: "Explore Homes Online",
            description: "Description: Take a virtual look at your next home with interactive tours & detailed property insights.",
          },
          {
            image: lfh3,
            alt: "Rental Home 3",
            title: "Transparent Planning",
            description: "Use our financial tools to manage expenses and make smart housing decisions effortlessly.",
          },
        ].map(({ image, alt, title, description }, index) => (
          <div
          key={index}
          className="tw-flex tw-p-3 md:tw-mt-0 tw-mt-8 tw-rounded-2xl tw-shadow-lg tw-bg-white tw-flex-col tw-items-center tw-w-full md:tw-w-[30%] tw-max-w-full md:tw-max-w-[30%] tw-gap-10 md:tw-gap-4"
          style={{ flex: "1 1 auto" }}
        >
        
            <div className="tw-w-[90%] tw-h-[150%] tw-relative" style={{ paddingBottom: "56.25%" }}>
              <img
                src={image}
                alt={alt}
                className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-rounded-2xl tw-object-contain tw-bg-white tw-shadow-lg"
              />

            </div>
            <div className="tw-flex tw-flex-col tw-pt-3 tw-items-center tw-text-center">
              <h7 className="tw-text-lg tw-text-gray-dark  tw-font-bold" style={{
                color: "#1F2437",
                fontWeight: "300", fontSize: '1.3em'
              }}>{t(title)}</h7>
              <p className="tw-text-gray">{t(description)}</p>
            </div>
          </div>
        ))}
      </div>


      <section className=" tw-pb-8   tw-bg-[#F5FAFF]">
        <div className="row tw-gap-2 tw-justify-start tw-items-start">
          <div className="">
            <div className=" tw-bg-[#F5FAFF] tw-pt-8  2xl:tw-pl-[14%] md:tw-pl-[10%] tw-pl-3 tw-pr-3 2xl:tw-pr-[14%] md:tw-pr-[10%]">
              <form>
                <div className="row g-3 tw-pt-6  tw-rounded-2xl px-4 tw-py-4 tw-shadow-lg tw-bg-white border-t-2 border-black">
                  <div className="row g-1 tw-rounded-md   tw-py-4  tw-bg-white ">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Provide the details & We will assist you in finding the
                      right place in Skåne & Copenhagen.`.replace(/\s+/g, ' ').trim())}</span>
                    <h7
                      className="tw-text-light"
                      style={{
                        fontSize: "1.8em",
                        color: "#1F2437",
                        fontWeight: "300",
                      }}
                    >{t(`Details`.replace(/\s+/g, ' ').trim())}</h7>
                  </div>

                  <div className="col-md-6">
                    <Select
                      label={t("Select Country")}
                      name="selectCountry"
                      options={[
                        { value: "Sweden - Skane", label: "Sweden - Skane" },
                        { value: "Denmark - Copenhagen", label: "Denmark - Copenhagen" },
                      ]}
                      value={selectCountry}
                      onChange={handleSelectChange}
                      className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                    />

                  </div>
                  {selectCountry === "Sweden - Skane" ? (
                    <div className="col-md-6">
                      <Select
                        label={t("Select Skåne City")}
                        name="skaneCity"
                        options={[
                          { value: "Ängelholm", label: "Ängelholm" },
                          { value: "Åstorp", label: "Åstorp" },
                          { value: "Båstad", label: "Båstad" },
                          { value: "Bjuv", label: "Bjuv" },
                          { value: "Bromölla", label: "Bromölla" },
                          { value: "Burlöv", label: "Burlöv" },
                        ]}
                        value={skaneCity}
                        onChange={handleSelectChange}
                        className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                      />

                    </div>
                  ) : null}

                  {selectCountry === "Denmark - Copenhagen" ? (
                    <div className="col-md-6">
                      <Select
                        label={t("Select Copenhagen City")}
                        name="copenhagenCity"
                        options={[
                          { value: "Ängelholm", label: "Ängelholm" },
                          { value: "Åstorp", label: "Åstorp" },
                          { value: "Båstad", label: "Båstad" },
                          { value: "Bjuv", label: "Bjuv" },
                          { value: "Bromölla", label: "Bromölla" },
                          { value: "Burlöv", label: "Burlöv" },
                        ]}
                        value={copenhagenCity}
                        onChange={handleSelectChange}
                        className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                      />

                    </div>
                  ) : null}

                  <div className="col-md-6">
                    <Select
                      label={t("Select Housing Type")}
                      name="housing"
                      options={[
                        { value: "Apartment", label: "Apartment" },
                        { value: "Villa", label: "Villa" },
                        { value: "Radhus", label: "Radhus" },
                        { value: "Shared Rooms", label: "Shared Rooms" },
                        { value: "Shared Beds", label: "Shared Beds" },
                      ]}
                      value={housing}
                      onChange={handleSelectChange}
                      className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                    />

                  </div>

                  {housing != "Shared Beds" ? (
                    <div className="col-md-6">
                      <Select
                        label={t("Number of Rooms Required")}
                        name="roomsRequired"
                        options={[
                          { value: "1", label: "1" },
                          { value: "2", label: "2" },
                          { value: "3", label: "3" },
                          { value: "4", label: "4" },
                          { value: "5", label: "5" },
                          { value: "6", label: "6" },
                          { value: "7+", label: "7+" },
                        ]}
                        value={roomsRequired}
                        onChange={handleSelectChange}
                        className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                      />

                    </div>
                  ) : null}

                  {housing === "Apartment" || housing === "Radhus" ? (
                    <>
                      <div className="col-md-6">
                        <Select
                          label={t("Number of Floors Required")}
                          name="floorsRequired"
                          options={Array.from({ length: 18 }, (_, i) => ({
                            value: `${i + 1}`,
                            label: i < 17 ? `${i + 1}` : "18+",
                          }))}
                          value={floorsRequired}
                          onChange={handleSelectChange}
                          className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                        />

                      </div>
                    </>
                  ) : null}

                  {housing === "Shared Rooms" || housing === "Shared Beds" ? (
                    <>
                      <div className="col-md-6">
                        <Select
                          label={t("Maximum Beds in a Room")}
                          name="bedsInRoom"
                          options={[
                            { value: "1", label: "1" },
                            { value: "2", label: "2" },
                            { value: "3", label: "3" },
                            { value: "4", label: "4" },
                            { value: "5+", label: "5+" },
                          ]}
                          value={bedsInRoom}
                          onChange={handleSelectChange}
                          className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                        />

                      </div>
                    </>
                  ) : null}

                  <div className="row g-1 tw-rounded-md   tw-py-4  tw-bg-white ">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill up your family details`.replace(/\s+/g, ' ').trim())}</span>
                    <h7
                      className="tw-text-light"
                      style={{
                        fontSize: "1.8em",
                        color: "#1F2437",
                        fontWeight: "300",
                      }}
                    >{t(`Family Details`.replace(/\s+/g, ' ').trim())}</h7>
                  </div>

                  <div
                    className="tw-border-t-2"
                    style={{ borderColor: "rgba(145, 158, 171, 0.2)" }}
                  ></div>

                  <div className="col-md-6">
                    {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">{t(`*`.replace(/\s+/g, ' ').trim())}</a>{" "}
                        Furnished?
                      </label> */}

                    <Select
                      label={t("Number of Adults in the House")}
                      name="adultsInHouse"
                      options={[
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        { value: "4", label: "4" },
                        { value: "5", label: "5" },
                        { value: "6 or +", label: "6 or +" },
                      ]}
                      value={adultsInHouse}
                      onChange={handleSelectChange}
                      className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                    />

                  </div>




                  <div className="row g-1 tw-rounded-md   tw-py-4  tw-bg-white ">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill up your contract details`.replace(/\s+/g, ' ').trim())}</span>
                    <h7
                      className="tw-text-light"
                      style={{
                        fontSize: "1.8em",
                        color: "#1F2437",
                        fontWeight: "300",
                      }}
                    >{t(`Contract Details`.replace(/\s+/g, ' ').trim())}</h7>
                  </div>

                  <div
                    className="tw-border-t-2"
                    style={{ borderColor: "rgba(145, 158, 171, 0.2)" }}
                  ></div>

                  <div className="col-md-6">
                    {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">{t(`*`.replace(/\s+/g, ' ').trim())}</a>{" "}
                        Select Contract Type?
                      </label> */}

                    <Select
                      label={t("Select Contract Type")}
                      name="contractType"
                      options={[
                        { value: "First Hand", label: "First Hand" },
                        { value: "Second Hand", label: "Second Hand" },
                        { value: "Other", label: "Other" },
                        { value: "N/A", label: "N/A" },
                      ]}
                      value={contractType}
                      onChange={handleSelectChange}
                      className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                    />

                  </div>

                  <div className="col-md-6">
                    {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">{t(`*`.replace(/\s+/g, ' ').trim())}</a>{" "}
                        Are you looking for deposit?
                      </label> */}

                    <Input
                      star={"*"}
                      type={"number"}
                      step="0.01"
                      min="0"
                      className={
                        "tw-w-full border tw-py-2.5 tw-px-3 tw-rounded-xl mt-2"
                      }
                      label={"How much rent can you pay?"}
                      placeholder={"How much rent can you pay?"}
                    ></Input>
                  </div>

                  <div className="col-md-6">
                    {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">{t(`*`.replace(/\s+/g, ' ').trim())}</a>{" "}
                        Maximum people can stay in this residence?
                      </label> */}

                    <Select
                      label={t("Duration of Stay")}
                      name="stayDuration"
                      options={[
                        ...Array.from({ length: 9 }, (_, i) => ({
                          value: `${i + 1} Month`,
                          label: `${i + 1} Month`,
                        })),
                      ]}
                      value={stayDuration}
                      onChange={handleSelectChange}
                      className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                    />

                  </div>

                  <div className="col-md-6">
                    {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">{t(`*`.replace(/\s+/g, ' ').trim())}</a>{" "}
                        What is the duration of rent out?
                      </label> */}

                    <Select
                      label={t("Are you willing to pay deposit?")}
                      name="deposit"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                      ]}
                      value={deposit}
                      onChange={handleSelectChange}
                      className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                    />

                  </div>

                  {deposit === "yes" ? (
                    <>
                      <div className="col-md-6">
                        {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">{t(`*`.replace(/\s+/g, ' ').trim())}</a>{" "}
                        What is the duration of rent out?
                      </label> */}

                        <Select
                          label={t("Months of Deposit")}
                          name="depositDuration"
                          options={[
                            { value: "1 Month", label: "1 Month" },
                            { value: "2 Month", label: "2 Month" },
                            { value: "3 Month", label: "3 Month" },
                            { value: "4 Month", label: "4 Month" },
                            { value: "5 Month", label: "5 Month" },
                            { value: "6 Month", label: "6 Month" },
                          ]}
                          value={depositDuration}
                          onChange={handleSelectChange}
                          className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                        />

                      </div>
                    </>
                  ) : null}

                  <div className="col-md-6">
                    <Input
                      star={"*"}
                      type={"date"}
                      className={
                        " tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl  "
                      }
                      label={"Expected moving date:"}
                      placeholder={"Expected moving date:"}
                    />
                  </div>

                  <div className="row g-1 tw-rounded-md   tw-py-4  tw-bg-white ">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill up your Other Details`.replace(/\s+/g, ' ').trim())}</span>
                    <h7
                      className="tw-text-light"
                      style={{
                        fontSize: "1.8em",
                        color: "#1F2437",
                        fontWeight: "300",
                      }}
                    >{t(`Other Details`.replace(/\s+/g, ' ').trim())}</h7>
                  </div>

                  <div
                    className="tw-border-t-2"
                    style={{ borderColor: "rgba(145, 158, 171, 0.2)" }}
                  ></div>

                  <div className="col-md-6">
                    {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">{t(`*`.replace(/\s+/g, ' ').trim())}</a>{" "}
                        Your Property Type
                      </label> */}

                    <Select
                      label={t("Do You Have Pets?")}
                      name="pets"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                      ]}
                      value={pets}
                      onChange={handleSelectChange}
                      className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg tw-mt-2"
                    />

                  </div>

                  <div className="col-md-6">
                    {/* <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">{t(`*`.replace(/\s+/g, ' ').trim())}</a>{" "}
                        Your Property Type
                      </label> */}

                    <Select
                      label={t("Do You Smoke?")}
                      name="smoke"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                      ]}
                      value={smoke}
                      onChange={handleSelectChange}
                      className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg tw-mt-2"
                    />

                  </div>

                  <div className="col-md-6">
                    <Input
                      star={"*"}
                      type={""}
                      required={true}
                      className={
                        " tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl  "
                      }
                      label={"* Why you are leaving your current place?"}
                      placeholder={""}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      star={"*"}
                      type={""}
                      className={
                        " tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl  "
                      }
                      label={"Any other information?"}
                      placeholder={""}
                    />
                  </div>

                  <div className="col-md-12 tw-pb-12">
                    <Button
                      label={"SEND REQUEST"}
                      className={
                        " tw-uppercase tw-mx-auto  tw-text-sm    tw-py-3 tw-bg-primary  tw-w-full tw-rounded-xl  tw-text-white "
                      }
                      type = "submit"
                      onClick={handleSubmit}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Looking_for_housing;
