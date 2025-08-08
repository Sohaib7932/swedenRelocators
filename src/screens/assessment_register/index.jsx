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
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { TfiAngleLeft } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";
import Assessment_modal from "./Assessment_modal";
import Header from "../../components/Header_New/Header";
import Sidebar from "../../components/ScrollableBar";
//import { useTranslation } from '../../context/TranslationContext';
import { useTranslation } from "react-i18next";


import Select from "../../components/Selecttab";



const Assessment_register = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [location, setLocation] = useState("");
  const [plan, setPlans] = useState("");
  const [buy, setBuys] = useState("");
  const [personalStatus, setPersonalStatus] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [residencePermit, setResidencePermit] = useState("");
  const [personnummer, setPersonnummer] = useState("");
  const [coordinationNumber, setCoordinationNumber] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [separateAssets, setSeparateAssets] = useState("");
  const [depents, setDepents] = useState("");
  const [knowsomeone, setknowsomeone] = useState("");

  const [knowsomeone_legalstatus, setKnowsomeonelegalstatus] = useState("");

  const [knowsomeone_personnummer, setKnowsomeonepersonnummber] = useState("");

  const [movealongwithfamily, setMoveAlongWithFamily] = useState("");

  const [seperateassets, setSeperateAssets] = useState("");

  const [seperateassetsamount, setSeperateAssetsAmount] = useState("");

  const [schengen, setSchenger] = useState("");

  
  const [schengenissuecountry, setSchengerIssueCountry] = useState("");

  const [schengentype, setSchengerType] = useState("");

  const [schengenexpirydate, setSchengerExpiryDate] = useState("");

  const [schengendetail, setSchengerDetail] = useState("");

  const [past2years, setPast2Years] = useState("");

  const [past2yearscountry, setPast2YearsCountry] = useState("");

  const [past2yearsrejection, setPast2YearsRejection] = useState("");
  const [past2yearsrejectionreason, setPast2YearsRejectionReason] =
    useState("");


  const [languageCertificate, setlanguageCertificate] = useState("");

  const [languageCertificateEnglish, setlanguageCertificateEnglish] = useState("");
  const [degreeCompleted, setdegreeCompleted] = useState("");

  const [partnerDegreeCompleted, setpartnerDegreeCompleted] = useState("");
  const [familyAssets, setfamilyAssets] = useState("");

  const [educationLevel, seteducationLevel] = useState("");
  const [certificateAvailable, setcertificateAvailable] = useState("");

  const [jobExperience, setjobExperience] = useState("");
  const [businessOwned, setbusinessOwned] = useState("");
  const [businessOwnedSweden, setbusinessOwnedSweden] = useState("");


  const [resultdata, setResultData] = useState(null);


  const [partnervalidpersonnummber, setpartnervalidpersonnummber] = useState("");


  const [willingtoinvest, setwillingtoinvest] = useState("");
  const [seperateAssets, setseperateAssets] = useState("");

  const [partnerOtherresidence, setpartnerOtherresidence] = useState("");


  const [partner30credithours, setpartner30credithours] = useState("");

  // State
const [otherresidencepermit, setotherresidencepermit] = useState("");

  const [self30credithours, setself30credithours] = useState("");


  const [validpartnercordnumber, setvalidpartnercordnumber] = useState("");

  const [validselfcordnumber, setvalidselfcordnumber] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    // API Endpoint
    const url = "https://nordicrelocators.com/api/assessment/businessVisa";

    // Prepare the form data
    const formData = new FormData();
    formData.append("api_token", "0c05a7c6cb627216702cc552b539d548");
    formData.append("user_id", "696");
    formData.append("am_sweden", location);
    formData.append("personal_status", personalStatus);
    formData.append("valid_residence_permit", residencePermit);
    formData.append("marital_status", maritalStatus);
    formData.append("dependent_main_applicant", depents);
    formData.append("comp_deg_sweeden", degreeCompleted);
    formData.append("valid_personnummer", personnummer);
    formData.append("valid_coordination", coordinationNumber);
    formData.append("planning_to_invest", investmentAmount);
    formData.append("funds_for_family_in_sweden", familyAssets);
    formData.append("inside_family_applicant", movealongwithfamily);
    formData.append("education_level", educationLevel);
    formData.append("educational_certificate_available", certificateAvailable);
    formData.append("job_business_experience", jobExperience);
    formData.append("owned_business_country", businessOwned);
    formData.append("owned_business_sweden", businessOwnedSweden);
    formData.append("person_legal_status", knowsomeone_legalstatus);
    formData.append("person_personnummer", knowsomeone_personnummer);
    formData.append("schengen_states", schengen);
    formData.append("issue_country", schengenissuecountry);
    formData.append("type_of_visa", schengentype);
    formData.append("expiry_date", schengenexpirydate);
    formData.append("details_duration_of_stay", schengendetail);
    formData.append("sort_rejected_schengen_visa", past2yearsrejection);
    formData.append("rejected_country", past2yearscountry);
    formData.append("reason_of_rejection", past2yearsrejectionreason);
    formData.append("english_lang_certificate", languageCertificate);

    // Authorization header
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer 29|EzEXhYfq1rxGtQZVwlfZqPp5UVQ485gth4MgO9dcc0b9d492",
    };

    try {
      // Make the API request
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: formData,
      });

      // Handle the response
      if (response.ok) {
        const data = await response.json();
        setResultData(data.data);


        console.log("State: " + resultdata);

        openModal();
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert("Submission failed. Please check your data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {


      case "languageCertificateEnglish":
        setlanguageCertificateEnglish(value);
        break;
      case "validpartnercordnumber":
    setvalidpartnercordnumber(value);
    break;   

    case "validselfcordnumber":
    setvalidselfcordnumber(value);
    break;

      case "otherresidencepermit":
        setotherresidencepermit(value);
        break;
      case "self30credithours":
    setself30credithours(value);
    break;

      case "partnerOtherresidence":
        setpartnerOtherresidence(value);
        break;
      case "partner30credithours":
        setpartner30credithours(value);
        break;
      case "educationLevel":
        seteducationLevel(value);
        break;

      case "willingtoinvest":
        setwillingtoinvest(value);
        break;

      case "seperateAssets":
        setseperateAssets(value);
        break;

      case "partnervalidpersonnummber":
        setpartnervalidpersonnummber(value);
        break;


      case "businessOwnedSweden":
        setbusinessOwnedSweden(value);
        break;


      case "businessOwned":
        setbusinessOwned(value);
        break;

      case "jobExperience":
        setjobExperience(value);
        break;
      case "certificateAvailable":
        setcertificateAvailable(value);
        break;
      case "familyAssets":
        setfamilyAssets(value);
        break;


      case "partnerDegreeCompleted":
        setpartnerDegreeCompleted(value);
        break;
      case "languageCertificate":
        setlanguageCertificate(value);
        break;

      case "degreeCompleted":
        setdegreeCompleted(value);
        break;


      case "location":
        setLocation(value);
        break;



      case "past2years":
        setPast2Years(value);
        break;


      case "past2yearscountry":
        setPast2YearsCountry(value);
        break;


      case "past2yearsrejection":
        setPast2YearsCountry(value);
        break;

      case "past2yearsrejectionreason":
        setPast2YearsRejectionReason(value);
        break;

      case "schengen":
        setSchenger(value);
        break;

      case "schengenissuecountry":
        setSchengerIssueCountry(value);
        break;

      case "schengenexpirydate":
        setSchengerExpiryDate(value);
        break;

      case "schengentype":
        setSchengerType(value);
        break;

      case "schengendetail":
        setSchengerDetail(value);
        break;

      case "movealongwithfamily":
        setMoveAlongWithFamily(value);
        break;

      case "seperateassets":
        setSeperateAssets(value);
        break;

      case "seperateassetsamount":
        setSeperateAssetsAmount(value);
        break;

      case "knowsomeone_legalstatus":
        setKnowsomeonelegalstatus(value);
        break;

      case "knowsomeone_personnummber":
        setKnowsomeonepersonnummber(value);
        break;

      case "knowsomeone":
        setknowsomeone(value);
        break;
      case "personalStatus":
        setPersonalStatus(value);
        break;
      case "plan":
        setPlans(value);
        break;
      case "buy":
        setBuys(value);
        break;
      case "maritalStatus":
        setMaritalStatus(value);
        break;
      case "residencePermit":
        setResidencePermit(value);
        break;
      case "personnummer":
        setPersonnummer(value);
        break;
      case "coordinationNumber":
        setCoordinationNumber(value);
        break;
      case "investmentAmount":
        setInvestmentAmount(value);
        break;
      case "separateAssets":
        setSeparateAssets(value);
        break;
      case "depents":
        setDepents(value);
        break;
      default:
        break;
    }

    // if (name === "maritalStatus" && value === "yes") {
    //   setCoordinationNumber("");
    // } else if (name === "maritalStatus" && value === "no") {
    //   setPersonnummer("");
    // } else if (name === "location" && value === "yes") {
    //   setLocation("");
    // } else if (name === "location" && value === "no") {
    //   setLocation("");
    // }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Business Visa Assessment")}
        regularText={t(
          "Secure your business visa assessment confidently. We guide you through the process for a seamless experience."
        )}
        backgroundImage={homeBgImage}
      />

      <section className=" ">
        <div className="container-fluid ">
          <div className="row g-5">
            <div className="col-md-8    tw-py-12 tw-bg-white tw-text-justify">
              <div className="row tw-pt-6 2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                <div className="col-lg-12">
                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Business visa assessment`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Find Out Your Eligibility for a Business or
                        Self-Employed Permit in Sweden`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />
                    <strong className="tw-text-gray">{t(`Who Should Fill Out the Assessment Form?`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className=" tw-p-0">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Individuals currently in Sweden or applying from
                          outside the country`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Those who are studying in Sweden and looking to switch
                          their residence permit track.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Anyone considering applying for a business or
                          self-employed permit in Sweden`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>


                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Why`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Complete the Assessment Form?`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>


                    <br />
                    <p className="tw-text-gray">{t(`Filling out the assessment form allows us to gather
                      essential details about:`.replace(/\s+/g, ' ').trim())}</p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Your Business Experience: Information about your
                          skills and expertise in the relevant field.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Financial Situation: Details of your financial
                          capacity to support your business.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Business Plan: Insights into your proposed business
                          idea, its viability, and potential for success.`.replace(/\s+/g, ' ').trim())}</p>
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
                        <p className=" m-0 tw-text-gray">{t(`We will evaluate your qualifications based on the
                          provided details.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Our team will guide you through the next steps of the
                          application process.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`We'll ensure you meet all the necessary requirements
                          for a successful permit application.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <h4>{t(`Get Started`.replace(/\s+/g, ' ').trim())}</h4>
                    <p className=" tw-text-gray">{t(`Complete the assessment form to take the first step toward
                      your business journey in Sweden!`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  {/* user info */}
                  <div>
                    {/* <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                  <h5 className=" tw-text-black  ">{t(`Personal Details`.replace(/\s+/g, ' ').trim())}</h5>

                  <h6 className=" tw-text-black ">
                    {" "}
                    <i class="fa fa-user"> </i>FILL UP THE PERSONAL DETAILS 
                  </h6>
                </div> */}

                    {resultdata && (<Assessment_modal
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                      data={resultdata}
                    />)}

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
                    <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow-lg tw-bg-white ">


                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                      <h2 className="tw-text-left">
                        <strong>{t(`Educational & Business Background`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>


                    </div>

                    <form>
                      <div className="row  g-3 pt-4 tw-rounded-2xl px-4 tw-py-4 tw-shadow-lg tw-bg-white border-t-2 border-black">
                        <div className="col-md-6">

                          <Select
                            label="Choose option"
                            name="location"
                            options={[

                              { value: "sweden", label: "I am in Sweden" },
                              { value: "outside", label: "I am outside of Sweden" },
                            ]}
                            value={location}
                            onChange={handleInputChange}
                            className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>
                        {location === "sweden" ? (
                          <>
                            <div className="col-md-6">

                              <Select
                                label="Select Personal Status"
                                name="personalStatus"
                                options={[

                                  { value: "student", label: "Student" },
                                  { value: "other", label: "Other" },
                                ]}
                                value={personalStatus}
                                onChange={handleInputChange}
                                className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>

                            {personalStatus === "student" && (
                              <div className="col-md-6">
                                <Select
                                  label="Select Marital Status"
                                  name="maritalStatus"
                                  options={[
                                    { value: "single", label: "Single" },
                                    { value: "married", label: "Married" },
                                  ]}
                                  value={maritalStatus}
                                  onChange={handleInputChange}
                                  className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>
                            )}

                            {personalStatus === "other" && (
                              <>
                                <div className="col-md-12">
                                  <Select
                                    label="Do you have any valid residence permit in Sweden?"
                                    name="residencePermit"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={residencePermit}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg"
                                  />

                                </div>


                                <div className="col-md-12">
                                  <Select
                                    label="Do you have separate assets other than the investment to support yourself with the application?"
                                    name="separateAssets"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={separateAssets}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg"
                                  />

                                </div>

                                <div className="col-md-6">
                                  <Select
                                    label="Do you have valid Personnummer?"
                                    name="personnummer"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={personnummer}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg "
                                  />

                                </div>

                                {personnummer === "no" && (
                                  <div className="col-md-6">
                                    <Select
                                      label="Do you have a valid Coordination number?"
                                      name="coordinationNumber"
                                      options={[
                                        { value: "yes", label: "Yes" },
                                        { value: "no", label: "No" },
                                      ]}
                                      value={coordinationNumber}
                                      onChange={handleInputChange}
                                      className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full tw-border tw-rounded-lg "
                                    />

                                  </div>
                                )}

                                <div className="col-md-6">
                                  <Select
                                    label="How much are you planning to invest?"
                                    name="investmentAmount"
                                    options={[
                                      { value: "less_than_50k", label: "Less than 50,000 SEK" },
                                      { value: "50k_100k", label: "50,000 - 100,000 SEK" },
                                      { value: "more_than_100k", label: "More than 100,000 SEK" },
                                    ]}
                                    value={investmentAmount}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full tw-border tw-rounded-lg "
                                  />

                                </div>

                                <div className="col-md-12">
                                  <Select
                                    label="Do you have separate assets other than the investment to support yourself with the application?"
                                    name="separateAssets"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={separateAssets}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg "
                                  />

                                </div>
                              </>
                            )}

                            {maritalStatus === "single" && (
                              <>
                                <div className="col-md-6">
                                  <div className="tw-relative tw-mb-5">
                                    <Select
                                      label="Did you complete your degree in Sweden?"
                                      name="degreeCompleted"
                                      options={[
                                        { value: "yes", label: "Yes" },
                                        { value: "no", label: "No" },
                                      ]}
                                      value={degreeCompleted}
                                      onChange={handleInputChange}
                                      className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                    />

                                  </div>
                                </div>

                                {
                                  degreeCompleted === "no" && (
                                    <>
                                      <div className="col-md-6">
                                      <Select
                                        label="Did you complete 30 credits hours?"
                                        name="self30credithours"
                                        options={[
                                          { value: "yes", label: "Yes" },
                                          { value: "no", label: "No" },
                                        ]}
                                        value={self30credithours}
                                        onChange={handleInputChange}
                                        className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg "

                                      />
                                    </div>
                                    </>
                                  )
                                }

{
                                  self30credithours === "no" && (

                                    <>
                                      <div className="col-md-6">
                                      <Select
                                        label="Do you have any other residence permit in sweden?"
                                        name="otherresidencepermit"
                                        options={[
                                          { value: "yes", label: "Yes" },
                                          { value: "no", label: "No" },
                                        ]}
                                        value={otherresidencepermit}
                                        onChange={handleInputChange}
                                        className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg "

                                      />
                                    </div>
                                    
                                    </>
                                  )
                                }

<div className="col-md-6">
                                  <Select
                                    label="Do you have valid Personnummer?"
                                    name="personnummer"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={personnummer}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>

                                {personnummer === "no" && (
                                  <div className="col-md-6">
                                    <Select
                                      label="Do you have a valid Coordination number?"
                                      name="coordinationNumber"
                                      options={[
                                        { value: "yes", label: "Yes" },
                                        { value: "no", label: "No" },
                                      ]}
                                      value={coordinationNumber}
                                      onChange={handleInputChange}
                                      className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                    />

                                  </div>
                                )}


<div className="col-md-6">
                                  <Select
                                    label="How much are you planning to invest?"
                                    name="investmentAmount"
                                    options={[
                                      { value: "200000 SEK - 300000 SEK", label: "200000 SEK - 300000 SEK" },
                                      { value: "400000 SEK - 500000 SEK", label: "400000 SEK - 500000 SEK" },
                                      { value: "500000 SEK - 600000 SEK", label: "500000 SEK - 600000 SEK" },
                                      { value: "6000000 SEK - 7000000 SEK", label: "6000000 SEK - 7000000 SEK" },
                                      { value: "7000000 SEK - 8000000 SEK", label: "7000000 SEK - 8000000 SEK" },
                                      { value: "8000000 SEK - 9000000 SEK", label: "8000000 SEK - 9000000 SEK" },
                                      { value: "9000000 SEK - 1 Million SEK", label: "9000000 SEK - 1 Million SEK" },
                                      { value: "More than 1 Million SEK", label: "More than 1 Million SEK" },
                                    ]}
                                    value={investmentAmount}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg "

                                  />
                                </div>
                                <div className="col-md-12">
                                  <Select
                                    label="Do you have separate assets other than the investment to support yourself with the application?"
                                    name="separateAssets"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={separateAssets}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>
                              </>
                            )}

                            {maritalStatus === "married" && (
                              <>
                                <div className="col-md-6">
                                  <Select
                                    label="Dependent / Main Applicant"
                                    name="depents"
                                    options={[
                                      { value: "dependent", label: "Dependent" },
                                      { value: "main applicant", label: "Main Applicant" },
                                    ]}
                                    value={depents}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>
                              </>
                            )}

                            {depents === "dependent" ? (
                              <>
                                <div className="col-md-6">
                                  <Select
                                    label="Did your partner complete a degree in Sweden?"
                                    name="partnerDegreeCompleted"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={partnerDegreeCompleted}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg "

                                  />
                                </div>

                                {
                                  partnerDegreeCompleted === "no" && (
                                    <>
                                      <div className="col-md-6">
                                        <Select
                                          label="Did your partner completed 30 credits hours?"
                                          name="partner30credithours"
                                          options={[
                                            { value: "yes", label: "Yes" },
                                            { value: "no", label: "No" },
                                          ]}
                                          value={partner30credithours}
                                          onChange={handleInputChange}
                                          className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg "

                                        />
                                      </div>
                                    </>

                                  )
                                }

                                {
                                  partner30credithours === "no" && (
                                    <>
                                      <div className="col-md-6">
                                        <Select
                                          label="Did your partner have any other residence permit in sweden?"
                                          name="partnerOtherresidence"
                                          options={[
                                            { value: "yes", label: "Yes" },
                                            { value: "no", label: "No" },
                                          ]}
                                          value={partnerOtherresidence}
                                          onChange={handleInputChange}
                                          className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg "

                                        />
                                      </div>

                                    </>
                                  )


                                }


                                <div className="col-md-6">
                                  <Select
                                    label="Did you or your partner have valid Personnummer?"
                                    name="partnervalidpersonnummber"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={partnervalidpersonnummber}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg "

                                  />
                                </div>

                                {
                                  partnervalidpersonnummber === "no" && (
                                    <>
                                     <div className="col-md-6">
                                  <Select
                                    label="Did you or your partner have valid Coordination no.?"
                                    name="validpartnercordnumber"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={validpartnercordnumber}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg "

                                  />
                                </div>
                                    </>
                                  )
                                }

                                <div className="col-md-6">
                                  <Select
                                    label="How much you or your partner will planning to invest?"
                                    name="willingtoinvest"
                                    options={[
                                      { value: "200000 SEK - 300000 SEK", label: "200000 SEK - 300000 SEK" },
                                      { value: "400000 SEK - 500000 SEK", label: "400000 SEK - 500000 SEK" },
                                      { value: "500000 SEK - 600000 SEK", label: "500000 SEK - 600000 SEK" },
                                      { value: "6000000 SEK - 7000000 SEK", label: "6000000 SEK - 7000000 SEK" },
                                      { value: "7000000 SEK - 8000000 SEK", label: "7000000 SEK - 8000000 SEK" },
                                      { value: "8000000 SEK - 9000000 SEK", label: "8000000 SEK - 9000000 SEK" },
                                      { value: "9000000 SEK - 1 Million SEK", label: "9000000 SEK - 1 Million SEK" },
                                      { value: "More than 1 Million SEK", label: "More than 1 Million SEK" },
                                    ]}
                                    value={willingtoinvest}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg "

                                  />
                                </div>
                                <div className="col-md-12">
                                  <Select
                                    label=" Do you have separate assets other than the investment to support the family with the application?"
                                    name="seperateAssets"
                                    options={[

                                      { value: "no", label: "No" },
                                      { value: "yes", label: "Yes" },
                                    ]}
                                    value={seperateAssets}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg "

                                  />
                                </div>


                              </>
                            ) : null}




                            {depents === "main applicant" ? (
                              <>
                                <div className="col-md-6">
                                  <Select
                                    label="Did you complete your degree in Sweden?"
                                    name="degreeCompleted"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={degreeCompleted}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>


                                {degreeCompleted === "no" && (

                                  <>
                                    <div className="col-md-6">
                                      <Select
                                        label="Did you complete 30 credits hours?"
                                        name="self30credithours"
                                        options={[
                                          { value: "yes", label: "Yes" },
                                          { value: "no", label: "No" },
                                        ]}
                                        value={self30credithours}
                                        onChange={handleInputChange}
                                        className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg "

                                      />
                                    </div>

                                  </>

                                )


                                }

                                {
                                  self30credithours === "no" && (

                                    <>
                                      <div className="col-md-6">
                                      <Select
                                        label="Do you have any other residence permit in sweden?"
                                        name="otherresidencepermit"
                                        options={[
                                          { value: "yes", label: "Yes" },
                                          { value: "no", label: "No" },
                                        ]}
                                        value={otherresidencepermit}
                                        onChange={handleInputChange}
                                        className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg "

                                      />
                                    </div>
                                    
                                    </>
                                  )
                                }

                                <div className="col-md-6">
                                  <Select
                                    label="Do you have valid Personnummer?"
                                    name="personnummer"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={personnummer}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>


{
  personnummer === "no" && (
    <>
         <div className="col-md-6">
                                  <Select
                                    label="Do you have valid Coordination number?"
                                    name="validselfcordnumber"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={validselfcordnumber}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>
    </>
  )
}

                                <div className="col-md-6">
                                  <Select
                                    label="How much are you planning to invest?"
                                    name="investmentAmount"
                                    options={[
                                      { value: "less_than_50k", label: "Less than 50,000 SEK" },
                                      { value: "50k_100k", label: "50,000 - 100,000 SEK" },
                                      { value: "more_than_100k", label: "More than 100,000 SEK" },
                                    ]}
                                    value={investmentAmount}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>
                                <div className="col-md-12">
                                  <Select
                                    label="Do you have separate assets other than the investment to support the family with the application?"
                                    name="familyAssets"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={familyAssets}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>
                              </>
                            ) : null}

                            {maritalStatus === "applicant" && (
                              <>
                                <div className="col-md-6">
                                  <Select
                                    label="Did you complete your degree in Sweden?"
                                    name="degreeCompletedDuplicate"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={degreeCompletedDuplicate}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-3"
                                  />

                                </div>

                                <div className="col-md-12">
                                  <Select
                                    label="Do you have separate assets other than the investment to support the family with the application?"
                                    name="familyAssetsDuplicate"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={familyAssetsDuplicate}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-3"
                                  />

                                </div>
                              </>
                            )}
                          </>
                        ) : null}
                      </div>
                      {location === "outside" ? (
                        <>
                          <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow-lg tw-bg-white ">
                            <div className="col-md-6 tw-pt-6">
                              <Select
                                label="Education Level"
                                name="educationLevel"
                                options={[
                                  { value: "matriculation", label: "Matriculation/Secondary" },
                                  { value: "higher_secondary", label: "Higher Secondary/Intermediate" },
                                  { value: "bachelors", label: "Bachelor's / Undergraduate" },
                                  { value: "masters", label: "Masters/M.Phil" },
                                  { value: "phd", label: "Ph.D" },
                                  { value: "other", label: "Other" },
                                ]}
                                value={educationLevel}
                                onChange={handleInputChange}
                                className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>

                            <div className="col-md-6 tw-pt-6">
                              <Select
                                label="Educational Certificate Available"
                                name="certificateAvailable"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={certificateAvailable}
                                onChange={handleInputChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                            <div className="col-md-12 tw-pt-6">
                              <Select
                                label="Did you have any relevant job or business experience in any other country?"
                                name="jobExperience"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={jobExperience}
                                onChange={handleInputChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                            <div className="col-md-12 tw-pt-6">
                              <Select
                                label="Did you currently own a business in any other country?"
                                name="businessOwned"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={businessOwned}
                                onChange={handleInputChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>

                            <div className="col-md-6 tw-pt-6">
                              <Select
                                label="Did you own a business in Sweden?"
                                name="businessOwnedSweden"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={businessOwnedSweden}
                                onChange={handleInputChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                          </div>
                        </>
                      ) : null}
                    </form>
                  </div>

                  {location === "sweden" ? (
                    <>
                      {/* user info */}
                      <div className=" tw-pt-8">
                        <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow-lg tw-bg-white ">




                          <span className=" tw-flex tw-items-center tw-gap-2">
                            {" "}
                            <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                          <h2 className="tw-text-left">
                            <strong>{t(`Business plan Assessment`.replace(/\s+/g, ' ').trim())}</strong>
                          </h2>
                        </div>

                        <form>
                          <div className="row  g-4 tw-pt-4 tw-rounded-2xl px-4 tw-py-4 tw-shadow-lg tw-bg-white border-t-2 border-black">
                            <div className="col-md-6">
                              <Select
                                label="Do you have already made your business plan?"
                                name="plan"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={plan}
                                onChange={handleInputChange}
                                className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                            {plan === "yes" ? (
                              <>
                                <div className="col-md-6">
                                  <Select
                                    label="Do you want to buy a running business in Sweden?"
                                    name="buy"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={buy}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>
                              </>
                            ) : null}

                            {buy === "yes" ? (
                              <>
                                <div className="col-md-6">
                                  <Select
                                    label="If yes, total investment available"
                                    name="investmentAmount"
                                    options={[
                                      { value: "200000 SEK - 300000 SEK", label: "200000 SEK - 300000 SEK" },
                                      { value: "400000 SEK - 500000 SEK", label: "400000 SEK - 500000 SEK" },
                                      { value: "500000 SEK - 600000 SEK", label: "500000 SEK - 600000 SEK" },
                                      { value: "6000000 SEK - 7000000 SEK", label: "6000000 SEK - 7000000 SEK" },
                                      { value: "7000000 SEK - 8000000 SEK", label: "7000000 SEK - 8000000 SEK" },
                                      { value: "8000000 SEK - 9000000 SEK", label: "8000000 SEK - 9000000 SEK" },
                                      { value: "9000000 SEK - 1 Million SEK", label: "9000000 SEK - 1 Million SEK" },
                                      { value: "More than 1 Million SEK", label: "More than 1 Million SEK" },
                                    ]}
                                    value={investmentAmount}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>
                              </>
                            ) : null}
                          </div>
                        </form>
                      </div>
                    </>
                  ) : null}

                  {location === "outside" ? (
                    <>
                      {/* user info */}
                      <div className=" tw-pt-8">
                        <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow-lg tw-bg-white ">


                          <span className=" tw-flex tw-items-center tw-gap-2">
                            {" "}
                            <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                          <h2 className="tw-text-left">
                            <strong>{t(`Business plan Assessment`.replace(/\s+/g, ' ').trim())}</strong>
                          </h2>







                        </div>

                        <form>
                          <div className="row  g-4 tw-pt-4 tw-rounded-2xl px-4 tw-py-4 tw-shadow-lg tw-bg-white border-t-2 border-black">
                            <div className="col-md-12">
                              <Select
                                label="Do you know someone in Sweden who is willing to start a business together with you?"
                                name="knowsomeone"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={knowsomeone}
                                onChange={handleInputChange}
                                className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>

                            {knowsomeone === "yes" ? (
                              <>
                                <div className="col-md-12">
                                  <Select
                                    label="What is the legal status of the person?"
                                    name="knowsomeone_legalstatus"
                                    options={[
                                      { value: "EU Citizen", label: "EU Citizen" },
                                      { value: "Swedish Citizen", label: "Swedish Citizen" },
                                      { value: "Long Term Residence Permit", label: "Long Term Residence Permit" },
                                      { value: "Valid Residence Permit with Personnummer", label: "Valid Residence Permit with Personnummer" },
                                      { value: "N/A", label: "N/A" },
                                    ]}
                                    value={knowsomeone_legalstatus}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>

                                <div className="col-md-12">
                                  <Select
                                    label="Did he/she have a personnummer in Sweden?"
                                    name="knowsomeone_personnummer"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={knowsomeone_personnummer}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>
                              </>
                            ) : null}

                            <div className="col-md-12">
                              <Select
                                label="Do you want to move along with family?"
                                name="movealongwithfamily"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={movealongwithfamily}
                                onChange={handleInputChange}
                                className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>

                            {movealongwithfamily === "yes" ? (
                              <>
                                <div className="col-md-6">
                                  <Select
                                    label="Do you have separate assets other than the investment to support them with the application?"
                                    name="separateassets"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={separateassets}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>
                              </>
                            ) : null}

                            {seperateassets === "yes" ? (
                              <>
                                <div className="col-md-6">
                                  <Select
                                    label="Enter asset amount"
                                    name="separateassetsamount"
                                    options={[
                                      { value: "200.000 SEK for applicant", label: "200.000 SEK for applicant" },
                                      { value: "100.000 SEK for Spouse", label: "100.000 SEK for Spouse" },
                                      { value: "50.000 SEK for each accompanying Child", label: "50.000 SEK for each accompanying Child" },
                                    ]}
                                    value={separateassetsamount}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>
                              </>
                            ) : null}

                            <div className="col-md-12">
                              <Select
                                label="Do you currently have any Schengen, UK & Ireland visa or any kind of residence permit of any Schengen states?"
                                name="schengen"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={schengen}
                                onChange={handleInputChange}
                                className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>

                            {schengen === "yes" ? (
                              <>
                                <div className="col-md-6">
                                  <Select
                                    label="Issue Country"
                                    name="schengenissuecountry"
                                    options={[
                                      { value: "Austria", label: "Austria" },
                                      { value: "Belgium", label: "Belgium" },
                                      { value: "Czech Republic", label: "Czech Republic" },
                                      { value: "Denmark", label: "Denmark" },
                                      { value: "Estonia", label: "Estonia" },
                                      { value: "Finland", label: "Finland" },
                                      { value: "France", label: "France" },
                                      { value: "Germany", label: "Germany" },
                                      { value: "Greece", label: "Greece" },
                                      { value: "Hungary", label: "Hungary" },
                                      { value: "Iceland", label: "Iceland" },
                                      { value: "Italy", label: "Italy" },
                                      { value: "Latvia", label: "Latvia" },
                                      { value: "Liechtenstein", label: "Liechtenstein" },
                                      { value: "Lithuania", label: "Lithuania" },
                                      { value: "Luxembourg", label: "Luxembourg" },
                                      { value: "Malta", label: "Malta" },
                                      { value: "Netherlands", label: "Netherlands" },
                                      { value: "Norway", label: "Norway" },
                                      { value: "Poland", label: "Poland" },
                                      { value: "Portugal", label: "Portugal" },
                                      { value: "Slovakia", label: "Slovakia" },
                                      { value: "Slovenia", label: "Slovenia" },
                                      { value: "Spain", label: "Spain" },
                                      { value: "Sweden", label: "Sweden" },
                                      { value: "Switzerland", label: "Switzerland" },
                                    ]}
                                    value={schengenissuecountry}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>

                                <div className="col-md-6">
                                  <Select
                                    label="Type of Visa/Permit"
                                    name="schengentype"
                                    options={[
                                      { value: "Schengen Visa", label: "Schengen Visa" },
                                      { value: "Study or Work Permit", label: "Study or Work Permit" },
                                      { value: "Spouse Visa", label: "Spouse Visa" },
                                      { value: "Other Valid Visa", label: "Other Valid Visa" },
                                    ]}
                                    value={schengentype}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>

                                <div className="col-md-6">

                                  <Input
                                    star={"*"}
                                    type={"date"}
                                    name={"schengenexpirydate"}
                                    value={schengenexpirydate}
                                    onChange={handleInputChange}
                                    className={
                                      "tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"
                                    }
                                    label={"Expiry Date"}
                                    placeholder={"Expiry Date"}
                                  />
                                </div>

                                <div className="col-md-6">

                                  <Input
                                    star={"*"}
                                    type={"text"}
                                    name={"schengendetail"}
                                    value={schengendetail}
                                    onChange={handleInputChange}
                                    className={
                                      "tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"
                                    }
                                    label={"Detail"}
                                    placeholder={"Detail"}
                                  />
                                </div>
                              </>
                            ) : null}

                            <div className="col-md-12">
                              <Select
                                label="Have you applied for any Schengen, UK & Ireland visa or residence permit in the past 2 years and got rejected?"
                                name="past2years"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={past2years}
                                onChange={handleInputChange}
                                className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>

                            {past2years === "yes" ? (
                              <>
                                <div className="col-md-6">
                                  <Select
                                    label="UK, Ireland & Schengen Countries"
                                    name="past2yearscountry"
                                    options={[
                                      { value: "Austria", label: "Austria" },
                                      { value: "Belgium", label: "Belgium" },
                                      { value: "Czech Republic", label: "Czech Republic" },
                                      { value: "Denmark", label: "Denmark" },
                                      { value: "Estonia", label: "Estonia" },
                                      { value: "Finland", label: "Finland" },
                                      { value: "France", label: "France" },
                                      { value: "Germany", label: "Germany" },
                                      { value: "Greece", label: "Greece" },
                                      { value: "Hungary", label: "Hungary" },
                                      { value: "Iceland", label: "Iceland" },
                                      { value: "Italy", label: "Italy" },
                                      { value: "Latvia", label: "Latvia" },
                                      { value: "Liechtenstein", label: "Liechtenstein" },
                                      { value: "Lithuania", label: "Lithuania" },
                                      { value: "Luxembourg", label: "Luxembourg" },
                                      { value: "Malta", label: "Malta" },
                                      { value: "Netherlands", label: "Netherlands" },
                                      { value: "Norway", label: "Norway" },
                                      { value: "Poland", label: "Poland" },
                                      { value: "Portugal", label: "Portugal" },
                                      { value: "Slovakia", label: "Slovakia" },
                                      { value: "Slovenia", label: "Slovenia" },
                                      { value: "Spain", label: "Spain" },
                                      { value: "Sweden", label: "Sweden" },
                                      { value: "Switzerland", label: "Switzerland" },
                                    ]}
                                    value={past2yearscountry}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>


                                <div className="col-md-6">

                                  <Input
                                    star={"*"}
                                    type={"date"}
                                    name={"past2yearsrejection"}
                                    value={past2yearsrejection}
                                    onChange={handleInputChange}
                                    className={
                                      "tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"
                                    }
                                    label={"Rejection Date?"}
                                    placeholder={"Rejection Date?"}
                                  />
                                </div>


                                <div className="col-md-6">

                                  <Input
                                    star={"*"}
                                    type={"text"}
                                    name={"past2yearsrejectionreason"}
                                    value={past2yearsrejectionreason}
                                    onChange={handleInputChange}
                                    className={
                                      "tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"
                                    }
                                    label={"Reason of rejection"}
                                    placeholder={"Reason of rejection"}
                                  />
                                </div>
                              </>
                            ) : null}

                            <div className="col-md-12">
                              <Select
                                label="Do you have already made your business plan?"
                                name="plan"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={plan}
                                onChange={handleInputChange}
                                className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                            {plan === "yes" ? (
                              <>
                                <div className="col-md-6">
                                  <Select
                                    label="Do you want to buy a running business in Sweden?"
                                    name="buy"
                                    options={[
                                      { value: "yes", label: "Yes" },
                                      { value: "no", label: "No" },
                                    ]}
                                    value={buy}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>
                              </>
                            ) : null}

                            {buy === "yes" ? (
                              <>
                                <div className="col-md-6">
                                  <Select
                                    label="If yes, total investment available"
                                    name="investmentAmount"
                                    options={[
                                      { value: "200000 SEK - 300000 SEK", label: "200000 SEK - 300000 SEK" },
                                      { value: "400000 SEK - 500000 SEK", label: "400000 SEK - 500000 SEK" },
                                      { value: "500000 SEK - 600000 SEK", label: "500000 SEK - 600000 SEK" },
                                      { value: "6000000 SEK - 7000000 SEK", label: "6000000 SEK - 7000000 SEK" },
                                      { value: "7000000 SEK - 8000000 SEK", label: "7000000 SEK - 8000000 SEK" },
                                      { value: "8000000 SEK - 9000000 SEK", label: "8000000 SEK - 9000000 SEK" },
                                      { value: "9000000 SEK - 1 Million SEK", label: "9000000 SEK - 1 Million SEK" },
                                      { value: "More than 1 Million SEK", label: "More than 1 Million SEK" },
                                    ]}
                                    value={investmentAmount}
                                    onChange={handleInputChange}
                                    className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                  />

                                </div>
                              </>
                            ) : null}
                          </div>
                        </form>
                      </div>
                    </>
                  ) : null}

                  {/* user info */}
                  <div className=" tw-pt-8">


                    <form>

                      <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow-lg tw-bg-white border-t-2 border-black">

                        <span className=" tw-flex tw-items-center tw-gap-2">
                          {" "}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                        <h2 className="tw-text-left">
                          <strong>{t(`Language Skill`.replace(/\s+/g, ' ').trim())}</strong>
                        </h2>

                        <div className="col-md-6 tw-pt-4">


                        </div>
                        <div className="col-md-8 tw-pt-4">
                        
                          <Select
                            label="Do you have a Swedish Language Certificate?"
                            name="languageCertificateEnglish"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={languageCertificateEnglish}
                            onChange={handleInputChange}
                            className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>


                        <div className="col-md-8">
                        
                        <Select
                          label="Do you have a English Language Certificate?"
                          name="languageCertificate"
                          options={[
                            { value: "yes", label: "Yes" },
                            { value: "no", label: "No" },
                          ]}
                          value={languageCertificate}
                          onChange={handleInputChange}
                          className="tw-outline-none tw-text-sm tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                        />

                      </div>
                      </div>
                    </form>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    label={"Submit"}
                    className={
                      "  tw-w-full tw-bg-primary tw-py-3 tw-text-white tw-rounded-xl  tw-mt-10"
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

export default Assessment_register;
