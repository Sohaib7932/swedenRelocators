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
import { useTranslation } from "react-i18next";

import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"
import Header from '../../components/Header_New/Header';
import Select from "../../components/Selecttab";
import Sidebar from "../../components/ScrollableBar";
import axios from "axios";


import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubmitModel from "./submitmodel";

const Visit_visa = () => {
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

  const [maritalStatus, setMaritalStatus] = useState("");

  const [personnummer, setPersonnummer] = useState("");
  const [coordinationNumber, setCoordinationNumber] = useState("");

  const [separateAssets, setSeparateAssets] = useState("");

  const [depents, setDepents] = useState("");



  const [proofOfEnrolment, setProofOfEnrolment] = useState("");

  const [noObjectionLetter, setNoObjectionLetter] = useState("");
  const [registrationCertificate, setRegistrationCertificate] = useState("");
  const [availableAssets, setAvailableAssets] = useState("");
  const [taxReturns, setTaxReturns] = useState("");
  const [natureOfJob, setNatureOfJob] = useState("");
  const [monthlySalary, setMonthlySalary] = useState("");


  const [describeHow, setdescribeHow] = useState("");
  const [ invitationDetails, setinvitationDetails] = useState("");
const [coordinationDetails, setcoordinationDetails] = useState("");
const [invitation2, setinvitation2] = useState("");
const [refusalMonthYear, setrefusalMonthYear] = useState("");


  const [jobContract, setJobContract] = useState("");
  const [vacationsLetter, setVacationsLetter] = useState("");
  const [spousePassport, setSpousePassport] = useState("");
  const [marriageCertificate, setMarriageCertificate] = useState("");
  const [familyRegistrationCertificate, setFamilyRegistrationCertificate] = useState("");
  const [mainApplicantSupport, setMainApplicantSupport] = useState("");
  const [children, setChildren] = useState("");
  const [birthCertificate, setBirthCertificate] = useState("");
  const [spouseIncome, setSpouseIncome] = useState("");
  const [tripSupport, setTripSupport] = useState("");


  const [passport, setPassport] = useState("");
  const [personalStatus, setPersonalStatus] = useState("");
  const [schengenVisits, setSchengenVisits] = useState("");
  const [visitPurpose, setVisitPurpose] = useState("");
  const [refusal, setRefusal] = useState("");
  const [residencePermit, setResidencePermit] = useState("");
  const [relationEU, setRelationEU] = useState("");
  const [dependents, setDependents] = useState("");
  const [invitation, setInvitation] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");

  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (e.target.name === "personalStatus") {
      setResidencePermit("");
    }

    if (e.target.name === "refusal") {
      setRefusal("");
    }

    switch (e.target.name) {




      case "proofOfEnrolment":
        setProofOfEnrolment(value);
        break;



        case "coordinationDetails":
          setcoordinationDetails(value);
          break;


          case "refusalMonthYear":
            setrefusalMonthYear(value);
            break;

        case "invitation2":
          setinvitation2(value);
          break;
      case "invitationDetails":
        setinvitationDetails(value);
        break;
      case "describeHow":
        setdescribeHow(value);
        break;  
      case "noObjectionLetter":
        setNoObjectionLetter(value);
        break;
      case "registrationCertificate":
        setRegistrationCertificate(value);
        break;
      case "availableAssets":
        setAvailableAssets(value);
        break;
      case "taxReturns":
        setTaxReturns(value);
        break;
      case "natureOfJob":
        setNatureOfJob(value);
        break;
      case "monthlySalary":
        setMonthlySalary(value);

      case "jobContract":
        setJobContract(value);
        break;
      case "vacationsLetter":
        setVacationsLetter(value);
        break;
      case "spousePassport":
        setSpousePassport(value);
        break;
      case "marriageCertificate":
        setMarriageCertificate(value);
        break;
      case "familyRegistrationCertificate":
        setFamilyRegistrationCertificate(value);
        break;
      case "mainApplicantSupport":
        setMainApplicantSupport(value);
        break;
      case "children":
        setChildren(value);
        break;
      case "birthCertificate":
        setBirthCertificate(value);
        break;
      case "spouseIncome":
        setSpouseIncome(value);
        break;
      case "tripSupport":
        setTripSupport(value);
        break;
      case "passport":
        setPassport(value);
        break;

      case "schengenVisits":
        setSchengenVisits(value);
        break;
      case "visitPurpose":
        setVisitPurpose(value);
        break;
      case "refusal":
        setRefusal(value);
        break;
      case "residencePermit":
        setResidencePermit(value);
        break;
      case "relationEU":
        setRelationEU(value);
        break;
      case "dependents":
        setDependents(value);
        break;
      case "invitation":
        setInvitation(value);
        break;
      case "investmentAmount":
        setInvestmentAmount(value);
        break;

      case "depents":
        setDepents(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "personalStatus":
        setPersonalStatus(value);
        break;
      case "maritalStatus":
        setMaritalStatus(value);
        break;


      case "personnummer":
        setPersonnummer(value);
        break;
      case "coordinationNumber":
        setCoordinationNumber(value);
        break;

      case "separateAssets":
        setSeparateAssets(value);
        break;
      default:
        break;
    }
  };




  const [isModel2Open, setIsModel2Open] = useState(false);
  const [model2Message, setModel2Message] = useState("");

  const openModel2 = (message) => {
    setModel2Message(message);
    setIsModel2Open(true);
    setTimeout(() => {
      setIsModel2Open(false); // Close modal after 2 seconds
      setModel2Message(""); // Clear the message
    }, 5000);
  };




  const [resultdata, setResultData ] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
  
    // Form the request data using the explicitly defined states
    const formData = new FormData();
  
    formData.append("national_passport", passport );
    formData.append("countries_before", schengenVisits); // Hardcoded as no state is provided
    formData.append("visited_the_schengen_stat", schengenVisits );
    formData.append("purpose_of_visit", visitPurpose );
    formData.append("schengen_countries", personalStatus); // Hardcoded as no state is provided
    formData.append("visit_month_year", refusalMonthYear); // Hardcoded as no state is provided
    formData.append("reason_of_refusal", refusal || "");
    formData.append("relative_living_schengen_country", residencePermit); // Hardcoded as no state is provided
    formData.append("eu_person", relationEU || "");
    formData.append("dependent_living_schengen_country", dependents || "no");
    formData.append("describe_how", describeHow); // Hardcoded as no state is provided
    formData.append("invitation_from_any_individual_business", invitation || "no");
    formData.append("details_of_the_company", invitationDetails); // Hardcoded as no state is provided
    formData.append("can_you_support_yourself", investmentAmount); // Hardcoded as no state is provided
    formData.append("fully_funded_by_organiser", coordinationNumber); // Hardcoded as no state is provided
    formData.append("details_of_organizer", coordinationDetails); // Hardcoded as no state is provided
    formData.append("choose_type", personnummer); // Hardcoded as no state is provided
    formData.append("nature_of_job", natureOfJob || "");
    formData.append("monthly_salary", monthlySalary || "");
    formData.append("job_contract", jobContract || "");
    formData.append("vacations_letter", vacationsLetter || "");
    formData.append("registration_certificate", registrationCertificate || "");
    formData.append("available_assets", availableAssets || "");
    formData.append("tax_returns_2_to_3_years", taxReturns || "");
    formData.append("proof_of_enrolment", proofOfEnrolment || "");
    formData.append("invitation_for_visit", invitation2); // Hardcoded as no state is provided
    formData.append("letter_from_school", noObjectionLetter); // Hardcoded as no state is provided
    formData.append("visiting_alone", isSingle); // Hardcoded as no state is provided
    formData.append("spouse_valid_national_passport", spousePassport || "");
    formData.append("marriage_certificate", marriageCertificate || "");
    formData.append("family_registration_certificate", familyRegistrationCertificate || "");
    formData.append("main_applicant_support", mainApplicantSupport || "");
    formData.append("do_you_have_childern", children || "");
    formData.append("birth_certificate_of_your_children", birthCertificate || "");
    formData.append("spouse_have_any_income", spouseIncome || "");
    formData.append("spouse_income_desc", spouseIncome); // Hardcoded as no state is provided
    formData.append("someone_else_support_trip",tripSupport); // Hardcoded as no state is provided
    formData.append("describe_support_trip",  "");
  
    try {
      const response = await axios.post(
        `https://nordicrelocators.com/api/assessment/visitVisa`,
        formData,
        {
          headers: {
            "Authorization": `Bearer 28|FObEnWL85TWkV7pN0LpUNcxE19raItBrN4UMqdfy4cf88eb4`,
            "Accept": "application/json",
          },
        }
      );
      console.log("Response:", response.data.data);
      setResultData(response.data.data);

      
      console.log("State: " + resultdata);

      openModal();  
     
    } catch (error) {
      console.error("Error submitting form:", error);
    alert("Error Submitting. Please fill in all required fields.");
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
        highlightText={t("Visit Visa")}
        regularText={t("Plan your visit with ease. We offer assistance for obtaining visit visas tailored to your travel needs.")}
        backgroundImage={homeBgImage}
      />


{isModel2Open && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-100000">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/3 text-center">
            <p className="text-lg font-semibold text-gray-800">{model2Message}</p>
          </div>
        </div>
      )}
      <section className="">
        <div className="container-fluid ">
          <div className="row   g-5">
            <div className="col-md-8    tw-py-12 tw-bg-white tw-text-justify">
              <div className="row tw-pt-6  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                <div className="col-lg-12">
                  {/* user info */}
                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Visit visa assessment`.replace(/\s+/g, ' ').trim())}</span>

                    <h2>
                      <strong>{t(`Find Out Your Eligibility for a Visit Visa to Sweden`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />
                    <strong className="tw-text-gray">{t(`Who Should Use This Tool?`.replace(/\s+/g, ' ').trim())}</strong>

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
                        <p className=" m-0 tw-text-gray">{t(`Those attending a conference or on a short business
                          visit to Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`People joining their EU partner for a temporary stay.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Anyone applying for any type of visit visa to Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>


                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Why`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Use the Eligibility Tool?`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />



                    <p className="tw-text-gray">{t(`This tool is designed to help you understand the
                      requirements and eligibility criteria for different types
                      of visit visas by gathering important details, such as:`.replace(/\s+/g, ' ').trim())}</p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Purpose of Your Visit: Whether you’re visiting family,
                          attending a business event, or joining your EU
                          partner.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Duration of Stay: Information about how long you plan
                          to stay in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Visa Requirements: Specific guidelines based on your
                          visit type and individual circumstances`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Complete`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Schengen Visa File Preparation`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />




                    <p className="tw-text-gray">{t(`We handle the entire process of preparing your Schengen
                      visa file, ensuring it includes everything you need:`.replace(/\s+/g, ' ').trim())}</p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Comprehensive Documentation: We compile all necessary
                          documents, including health insurance and flight
                          reservations.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Appointment Booking: We book appointments with the
                          embassy, VFS, FedEx, or any relevant service providers
                          on your behalf.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Convenient Access: You can simply log into our web
                          portal or app to print the complete visa file and
                          submit it along with your original passport.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className="tw-text-gray">{t(`File Delivery Options`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`DHL Delivery: We can send the complete visa file
                          directly to your home address before the appointment
                          date.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Easy Submission: All you need to do is sign the
                          application form and submit it to the embassy or visa
                          center.`.replace(/\s+/g, ' ').trim())}</p>
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
                        <p className=" m-0 tw-text-gray">{t(`We will analyze your information to provide a clear assessment of your eligibility for a visit visa.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Our team will guide you through the next steps of the visa application process.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>


                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`We’ll ensure you meet all the requirements to successfully obtain a visit visa to Sweden.`.replace(/\s+/g, ' ').trim())}</p>
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



                    <p className=" tw-text-gray">{t(`Use the eligibility tool to take the first step toward your visit to Sweden, whether it’s to see loved ones, attend a conference, or for a short-term business trip!`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  <div>
                    {/* <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                  <h5 className=" tw-text-black  ">{t(`Personal Details`.replace(/\s+/g, ' ').trim())}</h5>

                  <h6 className=" tw-text-black ">
                    {" "}
                    <i class="fa fa-user"> </i>FILL UP THE PERSONAL DETAILS 
                  </h6>
                </div> */}





{resultdata && (     <Assessment_modal
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                      data = {resultdata}
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
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                        <h2 className="tw-text-left">
                          <strong>{t(`Applicant Assessment`.replace(/\s+/g, ' ').trim())}</strong>
                        </h2>

                        <div className="col-md-6 tw-pt-4">
                          <Select
                            label="Do you have National Passport?"
                            name="passport"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={passport}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />


                        </div>

                        <div className="col-md-6 tw-pt-4">
                          <Select
                            label="Did you visit Schengen Countries before?"
                            name="personalStatus"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={personalStatus}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>

                        {personalStatus === "yes" ? (
                          <>
                            <div className="col-md-6 tw-pt-4">
                              <Select
                                label="How many times have you visited the Schengen States?"
                                name="schengenVisits"
                                options={[
                                  { value: "1", label: "1" },
                                  { value: "2", label: "2" },
                                  { value: "3", label: "3" },
                                  { value: "4", label: "4" },
                                  { value: "5", label: "5 or more" },
                                ]}
                                value={schengenVisits}
                                onChange={handleSelectChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>

                            <div className="col-md-6 tw-pt-4">
                              <Select
                                label="Purpose of Visit"
                                name="visitPurpose"
                                options={[
                                  { value: "Visiting Family Friend", label: "Visiting Family Friend" },
                                  { value: "Official Trip", label: "Official Trip" },
                                  { value: "Tourism", label: "Tourism" },
                                  { value: "Business Conference", label: "Business Conference" },
                                  { value: "Medical Treatment", label: "Medical Treatment" },
                                  { value: "Other", label: "Other" },
                                ]}
                                value={visitPurpose}
                                onChange={handleSelectChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                          </>
                        ) : null}
                        <div className="col-md-6 tw-pt-4">
                          <Select
                            label="Have you got any refusal for Schengen Countries?"
                            name="refusal"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={refusal}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>

                        {refusal === "yes" ? (
                          <>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">

                              </label>

                              <Input
                                placeholder={"Refusal Month-Year"}
                                star={"*"}
                                type={"date"}
                                className={
                                  " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                }
                                label={"Refusal Month-Year"}
                                name = "refusalMonthYear"
                                value = {refusalMonthYear}
                              />
                            </div>

                            <div className="col-md-12 tw-pt-4">
                              <Input
                                placeholder={"Reason of Refusal"}
                                star={"*"}

                                className={
                                  " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                }
                                label={"Reason of Refusal"}
                              />
                            </div>
                          </>
                        ) : null}

                        <div className="col-md-12 tw-pt-4">
                          <Select
                            label="Is any of your close relative living in Schengen Countries and you want to visit him/her?"
                            name="residencePermit"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={residencePermit}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>

                        {residencePermit === "yes" ? (
                          <div className="col-md-12 tw-pt-4">
                            <Select
                              label="Relation with the EU person (e.g., Parents, Siblings, Family Friend)"
                              name="relationEU"
                              options={[
                                { value: "Parents", label: "Parents" },
                                { value: "Husband", label: "Husband" },
                                { value: "Wife", label: "Wife" },
                                { value: "Sibling", label: "Sibling" },
                                { value: "Cousin", label: "Cousin" },
                                { value: "Family Friend", label: "Family Friend" },
                              ]}
                              value={relationEU}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                        ) : null}

                        <div className="col-md-12 tw-pt-4">
                          <Select
                            label="Are you dependent on the person who is living in Schengen Countries?"
                            name="dependents"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={dependents}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>

                        {depents === "yes" ? (
                          <>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">

                              </label>

                              <Input
                                placeholder={" Describe How?"}
                                star={"*"}
                                type={"year"}
                                className={
                                  " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                }
                                label={" Describe How?"}
                                name = "describeHow"
                                value = {describeHow}
                              />


                            </div>
                          </>
                        ) : null}
                        <div className="col-md-12 tw-pt-4">
                          <Select
                            label="Do you have an invitation from any individual, business group, company, or organisation?"
                            name="invitation"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={invitation}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>

                        {invitation === "yes" ? (
                          <>
                            <div className="col-md-12 ">
                              <label className=" tw-text-sm  tw-text-gray ">

                              </label>

                              <Input
                                placeholder={" Details of the Company, Organisation or Association"}
                                star={"*"}
                                value = {invitationDetails}
                                onChange={handleSelectChange}

                                name = "invitationDetails"
                                className={
                                  " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                }
                                label={"Details of the Company, Organisation or Association"}
                              />


                            </div>
                          </>
                        ) : null}
                        <div className="col-md-6 tw-pt-4">
                          <Select
                            label="Can you support yourself for this trip?"
                            name="investmentAmount"
                            options={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                            value={investmentAmount}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>
                        {investmentAmount === "no" ? (
                          <div className="col-md-3 tw-pt-4">
                            <Select
                              label="Funded by Organizer?"
                              name="coordinationNumber"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={coordinationNumber}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                        ) : null}

                        {coordinationNumber === "yes" ? (
                          <>
                            <div className="col-md-3 ">
                              <label className=" tw-text-sm  tw-text-gray ">

                              </label>

                              <Input
                                placeholder={" Details of Organizer"}

                                value = {coordinationDetails}
                                name = "coordinationDetails"

                                className={
                                  " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                }
                                label={" Details of Organizer"}
                              />


                            </div>
                          </>
                        ) : null}

                        <div className="col-md-6 tw-pt-4">
                          <Select
                            label="Choose Employee Type?"
                            name="personnummer"
                            options={[
                              { value: "Employee", label: "Employee" },
                              { value: "Self-Employee", label: "Self-Employee" },
                              { value: "Student", label: "Student" },
                              { value: "NGO / Media / Sports / Association", label: "NGO / Media / Sports / Association" },
                            ]}
                            value={personnummer}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>

                        {personnummer === "Student" ? (
                          <>
                            <div className="row">
                              <div className="col-md-3 tw-pt-4">
                                <Select
                                  label="Proof of Enrolment"
                                  name="proofOfEnrolment"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={proofOfEnrolment}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>
                              <div className="col-md-3 tw-pt-4">
                                <Select
                                  label="Invitation for Visit"
                                  name="invitation2"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={invitation2}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>

                              <div className="col-md-6 tw-pt-4">
                                <Select
                                  label="No Objection Letter from School/College/University"
                                  name="noObjectionLetter"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={noObjectionLetter}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>
                            </div>
                          </>
                        ) : null}

                 

                        {personnummer === "Self-Employee" ? (
                          <>
                            <div className="row">
                              <div className="col-md-4 tw-pt-4">
                                <Select
                                  label="Registration Certificate"
                                  name="registrationCertificate"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={registrationCertificate}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>
                              <div className="col-md-4 tw-pt-4">
                                <Select
                                  label="Available Assets"
                                  name="availableAssets"
                                  options={[
                                    { value: "1 Million $ to 3 Million $", label: "1 Million $ to 3 Million $" },
                                    { value: "3 Million $ to 5 Million $", label: "3 Million $ to 5 Million $" },
                                    { value: "5 Million $ to 10 Million $", label: "5 Million $ to 10 Million $" },
                                    { value: "10 Million $ to 20 Million $", label: "10 Million $ to 20 Million $" },
                                  ]}
                                  value={availableAssets}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>

                              <div className="col-md-4 tw-pt-4">
                                <Select
                                  label="Tax Returns of 2 to 3 Years"
                                  name="taxReturns"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={taxReturns}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>
                            </div>
                          </>
                        ) : null}

                        {personnummer ===
                          "NGO / Media / Sports / Association" ? (
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">

                            </label>
                            <Input
                              placeholder={"Please describe NGO / Media /Sports / Association:"}

                              className={
                                " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                              }
                              label={"Please describe NGO / Media /Sports / Association:"}
                            />



                          </div>
                        ) : null}

                        {personnummer === "Employee" ? (
                          <>
                            <div className="row">
                              <div className="col-md-3 tw-pt-4">
                                <Select
                                  label="Nature of Job"
                                  name="natureOfJob"
                                  options={[
                                    { value: "Permanent", label: "Permanent" },
                                    { value: "Temporary", label: "Temporary" },
                                  ]}
                                  value={natureOfJob}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>
                              <div className="col-md-3 tw-pt-4">
                                <Select
                                  label="Monthly Salary"
                                  name="monthlySalary"
                                  options={[
                                    { value: "0 - 50.000 $", label: "0 - 50.000 $" },
                                    { value: "50.000 $ - 75.000 $", label: "50.000 $ - 75.000 $" },
                                    { value: "75.000 $ - 100.000 $", label: "75.000 $ - 100.000 $" },
                                  ]}
                                  value={monthlySalary}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>

                              <div className="col-md-3 tw-pt-4">
                                <Select
                                  label="Job Contract"
                                  name="jobContract"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={jobContract}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>
                              <div className="col-md-3 tw-pt-4">
                                <Select
                                  label="Vacations Letter"
                                  name="vacationsLetter"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={vacationsLetter}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>
                            </div>
                          </>
                        ) : null}
                      </div>
                    </form>
                  </div>

                  {/* user info */}
                  <div className=" tw-pt-8">
                    <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">

                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                      <h2 className="tw-text-left">
                        <strong>{t(`Family Document detail`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>


                      <div className="tw-flex tw-items-center tw-gap-2 tw-pt-3">
                        <input
                          type="checkbox"
                          className="tw-mt-1"
                          checked={isSingle}
                          onChange={handleCheckboxChange}
                        />
                        <p className="tw-text-gray-dark  tw-m-0">{t(`I am Visiting Alone`.replace(/\s+/g, ' ').trim())}</p>
                      </div>

                      {!isSingle && (
                        <form>
                          <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
                            <div className="col-md-12 tw-pt-4">
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
                            <div className="col-md-12 tw-pt-4">
                              <Select
                                label="Did your spouse have a Marriage Certificate and is your marriage registered in your home country?"
                                name="marriageCertificate"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={marriageCertificate}
                                onChange={handleSelectChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                            <div className="col-md-8 tw-pt-4">
                              <Select
                                label="Do you have a Family Registration Certificate?"
                                name="familyRegistrationCertificate"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={familyRegistrationCertificate}
                                onChange={handleSelectChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                            <div className="col-md-12 tw-pt-4">
                              <Select
                                label="Do you as the main applicant support your family for this trip?"
                                name="mainApplicantSupport"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={mainApplicantSupport}
                                onChange={handleSelectChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                            <div className="col-md-6 tw-pt-4">
                              <Select
                                label="Do you have children?"
                                name="children"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={children}
                                onChange={handleSelectChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                            <div className="col-md-12 tw-pt-4">
                              <Select
                                label="If you are not an EU citizen, do you have a birth certificate for your children?"
                                name="birthCertificate"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={birthCertificate}
                                onChange={handleSelectChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                            <div className="col-md-12 tw-pt-4">
                              <Select
                                label="Does your spouse have any income or savings?"
                                name="spouseIncome"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={spouseIncome}
                                onChange={handleSelectChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />

                            </div>
                            <div className="col-md-12 tw-pt-4">
                              <Select
                                label="Someone else will support you for this trip?"
                                name="tripSupport"
                                options={[
                                  { value: "yes", label: "Yes" },
                                  { value: "no", label: "No" },
                                ]}
                                value={tripSupport}
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

export default Visit_visa;
