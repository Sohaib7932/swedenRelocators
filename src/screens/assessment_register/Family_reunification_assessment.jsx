import React, { useEffect, useState } from "react";
import blog1 from "../../assets/images/single-img-04.png";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner_Page from "../../components/Common/Banner_Page";
import { LiaAngleRightSolid } from "react-icons/lia";
import profile from "../../assets/images/profile.png";
import { FaFacebookF } from "react-icons/fa";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { GoTriangleRight } from "react-icons/go";
import { TfiAngleLeft } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";
import Assessment_modal from "./Assessment_modal";
import Header from '../../components/Header_New/Header';

import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"
import Select from "../../components/Selecttab";
import Sidebar from "../../components/ScrollableBar";
import { useTranslation } from 'react-i18next';
import axios from "axios";


import Modal from "./Error_Modal"

const Family_reunification_assessment = () => {

  const { t } = useTranslation();
  const { id } = useParams();
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
      Link: "/asylum",
    },
    {
      id: 2,
      title: "Family Reunification",
      description:
        "Family reunification is a recognized reason for the immigration of family members to a country.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>
      ),
      Link: "/family-reunification",
    },
    {
      id: 3,
      title: "Personnummer Sweden",
      description:
        "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>
      ),

      Link: "/personnumer-sweden",
    },
    {
      id: 4,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>
      ),
      Link: "/cpr-number-denmark",
    },
    {
      id: 5,
      title: "Work Permit",
      description:
        "Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>
      ),
      Link: "/work-permit",
    },
    {
      id: 5,
      title: "Business Permit",
      description:
        "Swedish business culture is open and innovative, and starting a business there is relatively simple        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>
      ),

      Link: "/business-permit",
    },
    {
      id: 6,
      title: "Business Visit",
      description:
        "Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>
      ),

      Link: "/business-visit",
    },
    {
      id: 7,
      title: "Citizenship",
      description:
        "When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>
      ),
      Link: "/citizenship",
    },
    {
      id: 8,
      title: "Study in EU",
      description:
        "If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>
      ),
      Link: "/study-in-eu",
    },
    {
      id: 9,
      title: "Global Visit Visas",
      description:
        "For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>
      ),
      Link: "/global-visit-visas",
    },
    {
      id: 10,
      title: "EEA Permits",
      description:
        "Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>
      ),
      Link: "/eea-permits",
    },
    {
      id: 11,
      title: "Parents EU Permit",
      description:
        "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>
      ),
      Link: "/parents-eu-permit",
    },
    {
      id: 12,
      title: "Marriage & Divorce      ",
      description:
        "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>
      ),
      Link: "/marriage-divorce",
    },
    {
      id: 13,
      title: "Company Registration      ",
      description:
        "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link: "/company-registration",
    },
    {
      id: 14,
      title: "House & Offices",
      description:
        "we offer you an easy and painless solution where you can get a place to live without any worries.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link: "/house-offices",
    },
    {
      id: 15,
      title: "Appeal Cases",
      description:
        "Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>
      ),
      Link: "/appeal-cases",
    },
    {
      id: 16,
      title: "EU Citizens Relocation",
      description:
        "Family reunification means that a family that has been split up can apply to be allowed to live together.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>
      ),
      Link: "/eu-family-reunification",
    },
    {
      id: 17,
      title: "Investment",
      description:
        "There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>
      ),
      Link: "/investment",
    },
    {
      id: 18,
      title: "Direct Citizenship by Investments      ",
      description:
        "citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>
      ),
      Link: "/direct-citizenship-by-investments",
    },
    {
      id: 19,
      title: "Permanent Residence",
      description:
        "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>
      ),
      Link: "/permanent-residence",
    },
    {
      id: 20,
      title: "Golden Visa (Greece - Portugal)      ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
      Link: "/golden-visa-greece-portugal",
    },
  ];

  const [location, setLocation] = useState("");

  const [spousePassport, setSpousePassport] = useState("");
  const [childrenPassport, setChildrenPassport] = useState("");
  const [marriageCertificateRegistered, setMarriageCertificateRegistered] = useState("");
  const [birthCertificateChildren, setBirthCertificateChildren] = useState("");
  const [euCitizen, setEuCitizen] = useState("");
  const [movedToSweden, setMovedToSweden] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [permanentResidencePermit, setPermanentResidencePermit] = useState("");
  const [personnummer, setPersonnummer] = useState("");
  const [personnummerRejected, setPersonnummerRejected] = useState("");
  const [apartmentStatus, setApartmentStatus] = useState("");
  const [stayPermanently, setStayPermanently] = useState("");
  const [fullTimeWork, setFullTimeWork] = useState("");
  const [familyVisaRejected, setFamilyVisaRejected] = useState("");



      const [resultdata, setResultData ] = useState(null);

      const [isModalOpen3, setIsModalOpen3] = useState(false);
      const [errors, setErrors] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const newErrors = {};


    if (!euCitizen) newErrors.euCitizen = "Please select if you are an EU Citizen.";
  if (!movedToSweden) newErrors.movedToSweden = "Please specify if you are moving to Sweden in 90 days.";
  if (!citizenship) newErrors.citizenship = "Citizenship country is required.";
  if (!permanentResidencePermit) newErrors.permanentResidencePermit = "Permanent residence permit country is required.";
  if (!personnummer) newErrors.personnummer = "Please specify your personnummer in Sweden.";
  if (!personnummerRejected) newErrors.personnummerRejected = "Please specify if personnummer application was rejected.";
  if (!apartmentStatus) newErrors.apartmentStatus = "Please specify your apartment status.";
  if (!stayPermanently) newErrors.stayPermanently = "Please specify if you plan to stay permanently.";
  if (!fullTimeWork) newErrors.fullTimeWork = "Please specify if you have full-time work in Sweden.";
  if (!familyVisaRejected) newErrors.familyVisaRejected = "Please specify if your family visa application was rejected.";
  if (!spousePassport) newErrors.spousePassport = "Please specify if your spouse has a valid national passport.";
  if (!childrenPassport) newErrors.childrenPassport = "Please specify if your children have valid national passports.";
  if (!marriageCertificateRegistered) newErrors.marriageCertificateRegistered = "Marriage certificate registration status is required.";
  if (!birthCertificateChildren) newErrors.birthCertificateChildren = "Please specify if children have birth certificates.";

  // If there are errors, display them and stop submission
  if (Object.keys(newErrors).length > 0) {

    console.log("THIS SHIT IS WORKING");      
    setErrors(newErrors);
    setIsModalOpen(true);
    return;
  }


  const formData = new FormData();
  formData.append("eu_citizen", euCitizen || "");
  formData.append("move_to_sweden_in_90_days", movedToSweden || "");
  formData.append("citizenship_country", citizenship || "");
  formData.append("permanent_residence_permit_country", permanentResidencePermit || "");
  formData.append("personnummerin_sweden", personnummer || "");
  formData.append("applied_personnumer_and_rejected", personnummerRejected || "");
  formData.append("own_apartment_or_rental", apartmentStatus || "");
  formData.append("planning_to_stay_permanently", stayPermanently || "");
  formData.append("full_time_work_in_sweden", fullTimeWork || "");
  formData.append("applied_family_visa_and_rejected", familyVisaRejected || "");
  formData.append("valid_national_passport", spousePassport || "");
  formData.append("children_have_valid_national_passport", childrenPassport || "");
  formData.append("marriage_certificate", marriageCertificateRegistered || "");
  formData.append("birth_certificate", birthCertificateChildren || "");





    try {
      const response = await axios.post(
        `https://nordicrelocators.com/api/assessment/familyReunification`,
        formData,
        {
          headers: {
            "Accept": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      setResultData(response.data.data);

      
      console.log("State: " + resultdata);

      openModal();  
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };


  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (e.target.name === "location") {
      setLocation("");
    }

    switch (e.target.name) {



      case "euCitizen":
        setEuCitizen(value);
        break;
      case "movedToSweden":
        setMovedToSweden(value);
        break;
      case "citizenship":
        setCitizenship(value);
        break;
      case "permanentResidencePermit":
        setPermanentResidencePermit(value);
        break;
      case "personnummer":
        setPersonnummer(value);
        break;
      case "personnummerRejected":
        setPersonnummerRejected(value);
        break;
      case "apartmentStatus":
        setApartmentStatus(value);
        break;
      case "stayPermanently":
        setStayPermanently(value);
        break;
      case "fullTimeWork":
        setFullTimeWork(value);
        break;
      case "familyVisaRejected":
        setFamilyVisaRejected(value);
        break;
      case "spousePassport":
        setSpousePassport(value);
        break;
      case "childrenPassport":
        setChildrenPassport(value);
        break;
      case "marriageCertificateRegistered":
        setMarriageCertificateRegistered(value);
        break;
      case "birthCertificateChildren":
        setBirthCertificateChildren(value);
        break;
      case "location":
        setLocation(value);
        break;

      default:
        break;
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isSingle, setIsSingle] = useState(true);

  const handleCheckboxChange = () => {
    setIsSingle(!isSingle);
  };

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Family Reunification")}
        regularText={t("Secure your family reunification assessment confidently. We guide you through the process for a seamless experience.")}
        backgroundImage={homeBgImage}
      />
      <section className="">
        <div className="container-fluid ">
          <div className="row g-5">
            <div className="col-md-8    tw-py-12 tw-bg-white tw-text-justify">
              <div className="row tw-pt-6  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                <div className="col-lg-12">
                  {/* user info */}

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Family Reunification`.replace(/\s+/g, ' ').trim())}</span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-left">{t(`Find Out Your Eligibility for Family Reunification in
                        Sweden`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <strong className="tw-text-gray">{t(`Who Should Use This Tool?`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className=" tw-p-0">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`EU Citizens who have already moved to Sweden or are
                          planning to move to Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Long-term EU Residents who are currently living in
                          Sweden or intend to relocate to Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className="tw-text-gray">{t(`Why Use the Eligibility Tool?`.replace(/\s+/g, ' ').trim())}</strong>
                    <p className=" tw-text-gray">{t(`This tool is designed to help you understand the
                      requirements and eligibility criteria for bringing your
                      family members to Sweden by collecting important details,
                      such as:`.replace(/\s+/g, ' ').trim())}</p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Your Residence Status: Information about your current
                          or planned residence in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Family Relationship: Specific details about the family
                          members you want to reunite with.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Eligibility Requirements: Guidance based on your
                          status as an EU citizen or long-term EU resident.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`How`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`We Use the Information`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    <br />

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`We will assess your details to determine your
                          eligibility for family reunification in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Our team will guide you through the necessary steps to
                          start the reunification process.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`We’ll ensure you have a clear understanding of the
                          requirements to successfully bring your family to
                          Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Get Started`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />


                    <p className=" tw-text-gray">{t(`Use the eligibility tool to take the first step toward reuniting with your family in Sweden as an EU citizen or long-term EU resident!`.replace(/\s+/g, ' ').trim())}</p>
                  </div>
                  <div>
                    {/* <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                  <h5 className=" tw-text-black  ">{t(`Personal Details`.replace(/\s+/g, ' ').trim())}</h5>

                  <h6 className=" tw-text-black ">
                    {" "}
                    <i class="fa fa-user"> </i>FILL UP THE PERSONAL DETAILS 
                  </h6>
                </div> */}

                <Modal/>
{resultdata && (     <Assessment_modal
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                      data = {resultdata}
                      errors = {errors}
                    /> )}
                    {/* <form>
                      <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
                        <div className="col-md-6 tw-pt-4">
                          <Input
                            placeholder={"You Full Name"}
                            star={"*"}
                            className={
                              " tw-w-full border tw-rounded-lg  tw-py-3.5 tw-px-3"
                            }
                            label={"Full Name"}
                          />
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Input
                            placeholder={"Contact No with Country"}
                            star={"*"}
                            className={
                              " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                            }
                            label={"Contact No"}
                          />
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Input
                            placeholder={"your Address"}
                            star={"*"}
                            className={
                              " tw-w-full border tw-py-3.5  tw-px-3 tw-rounded-lg"
                            }
                            label={"Your Email"}
                          />
                        </div>
                      </div>
                    </form> */}
                  </div>



                  {/* user info */}
                  <div className=" tw-pt-8">


                    <form>
                      <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">

                        <span className=" tw-flex tw-items-center tw-gap-2">
                          {" "}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Relocate to Sweden`.replace(/\s+/g, ' ').trim())}</span>

                        <h2 className="tw-text-left">
                          <strong>{t(`Personal Details`.replace(/\s+/g, ' ').trim())}</strong>
                        </h2>

                        <div className="col-md-6 tw-pt-4">
                          <Select
                            label="Are you EU Citizen?"
                            name="euCitizen"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={euCitizen}
                            onChange={handleSelectChange}
                            required={true}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>

                        {euCitizen === "yes" ? (
                          <div className="col-md-12 tw-pt-4">
                            <Select
                              label="Are you already moved to Sweden or planning to move in the coming 90 Days Period?"
                              name="movedToSweden"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={movedToSweden}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                        ) : null}

                        {euCitizen === "no" ? (
                          <>
                            <div className="col-md-6 tw-pt-4">
                              <Select
                                label="Which Citizenship do you have?"
                                name="citizenship"
                                options={[
                                  { value: "AF", label: "Afghanistan" },
                                  { value: "AS", label: "American Samoa" },
                                  { value: "CA", label: "Canada" },
                                  { value: "OM", label: "Oman" },
                                  { value: "PK", label: "Pakistan" },
                                  { value: "NL", label: "Netherlands" },
                                  { value: "NZ", label: "New Zealand" },
                                  { value: "IS", label: "Iceland" },
                                  { value: "IN", label: "India" },
                                  { value: "FR", label: "France" },
                                  { value: "BD", label: "Bangladesh" },
                                  { value: "BB", label: "Barbados" },
                                  { value: "BY", label: "Belarus" },
                                  { value: "BE", label: "Belgium" },
                                  { value: "BZ", label: "Belize" },
                                  { value: "BJ", label: "Benin" },
                                  { value: "BM", label: "Bermuda" },
                                  { value: "BT", label: "Bhutan" },
                                  { value: "BO", label: "Bolivia" },
                                  { value: "BA", label: "Bosnia and Herzegovina" },
                                  { value: "BW", label: "Botswana" },
                                  { value: "BR", label: "Brazil" },
                                  { value: "BN", label: "Brunei Darussalam" },
                                  { value: "BG", label: "Bulgaria" },
                                  { value: "BF", label: "Burkina Faso" },
                                  { value: "BI", label: "Burundi" },
                                ]}
                                value={citizenship}
                                onChange={handleSelectChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>

                            <div className="col-md-12 tw-pt-4">
                              <Select
                                label="Do you have permanent Residence permit from below mentioned countries?"
                                name="permanentResidencePermit"
                                options={[
                                  { value: "AF", label: "Afghanistan" },
                                  { value: "AS", label: "American Samoa" },
                                  { value: "CA", label: "Canada" },
                                  { value: "OM", label: "Oman" },
                                  { value: "PK", label: "Pakistan" },
                                  { value: "NL", label: "Netherlands" },
                                  { value: "NZ", label: "New Zealand" },
                                  { value: "IS", label: "Iceland" },
                                  { value: "IN", label: "India" },
                                  { value: "FR", label: "France" },
                                  { value: "BD", label: "Bangladesh" },
                                  { value: "BB", label: "Barbados" },
                                  { value: "BY", label: "Belarus" },
                                  { value: "BE", label: "Belgium" },
                                  { value: "BZ", label: "Belize" },
                                  { value: "BJ", label: "Benin" },
                                  { value: "BM", label: "Bermuda" },
                                  { value: "BT", label: "Bhutan" },
                                  { value: "BO", label: "Bolivia" },
                                  { value: "BA", label: "Bosnia and Herzegovina" },
                                  { value: "BW", label: "Botswana" },
                                  { value: "BR", label: "Brazil" },
                                  { value: "BN", label: "Brunei Darussalam" },
                                  { value: "BG", label: "Bulgaria" },
                                  { value: "BF", label: "Burkina Faso" },
                                  { value: "BI", label: "Burundi" },
                                ]}
                                value={permanentResidencePermit}
                                onChange={handleSelectChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                          </>
                        ) : null}

                        <div className="col-md-6 tw-pt-4">
                          <Select
                            label="Do you have a valid Personnummer in Sweden?"
                            name="personnummer"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={personnummer}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Select
                            label="Did you apply for Personnummer and got rejected?"
                            name="personnummerRejected"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={personnummerRejected}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>

                        <div className="col-md-12 tw-pt-4">
                          <Select
                            label="Do you have your own Apartment in Sweden OR a first-hand rental apartment?"
                            name="apartmentStatus"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={apartmentStatus}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>

                        <div className="col-md-12 tw-pt-4">
                          <Select
                            label="Are you planning to stay permanently in Sweden?"
                            name="stayPermanently"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={stayPermanently}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>
                        <div className="col-md-12 tw-pt-4">
                          <Select
                            label="Do you have full-time work in Sweden or Denmark?"
                            name="fullTimeWork"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={fullTimeWork}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>
                        <div className="col-md-12 tw-pt-4">
                          <Select
                            label="Did you apply for your family visa and got rejected?"
                            name="familyVisaRejected"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={familyVisaRejected}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>
                      </div>
                    </form>
                  </div>

                  {/* user info */}
                  <div className=" tw-pt-8">
                    <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                      <h2 className="tw-text-left">
                        <strong>{t(`Family Documents`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>

                      <div className="tw-flex tw-items-center tw-gap-2 tw-pt-3">
                        <input
                          type="checkbox"
                          className="tw-mt-1"
                          checked={isSingle}
                          onChange={handleCheckboxChange}
                        />
                        <p className="tw-text-gray-dark  tw-m-0">{t(`I am single or I want to move by myself first`.replace(/\s+/g, ' ').trim())}</p>
                      </div>

                      {!isSingle && (
                        <form>
                          <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
                            <div className="col-md-6 tw-pt-4">
                              <Select
                                label="Did your Spouse have a valid National Passport?"
                                name="spousePassport"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={spousePassport}
                                onChange={handleSelectChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                            <div className="col-md-6 tw-pt-4">
                              <Select
                                label="Did your Children have a valid National Passport?"
                                name="childrenPassport"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={childrenPassport}
                                onChange={handleSelectChange}
                         
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                            <div className="col-md-12 tw-pt-4">
                              <Select
                                label="Did your spouse have a marriage certificate and is your marriage registered in your home country?"
                                name="marriageCertificateRegistered"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={marriageCertificateRegistered}
                                onChange={handleSelectChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                            <div className="col-md-12 tw-pt-4">
                              <Select
                                label="If you are not an EU citizen, do you have a birth certificate for your children?"
                                name="birthCertificateChildren"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={birthCertificateChildren}
                                onChange={handleSelectChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>

                    
                  <Button
                    onClick={handleSubmit}
                    type = {"submit"}
                    label={"Submit"}
                    className={
                      "  tw-w-full  tw-bg-primary tw-py-3 tw-text-white tw-rounded-xl  tw-mt-10"
                    }
                  />
                </div>
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Family_reunification_assessment;
