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

import axios from "axios";
import Assessment_modal from "./Assessment_modal";

import { useTranslation } from 'react-i18next';

import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";

import Header from "../../components/Header_New/Header";
import Select from "../../components/Selecttab";
import Sidebar from "../../components/ScrollableBar";



const Work_permit = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [workCategory, setWorkCategory] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [educationalCertificate, setEducationalCertificate] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [experienceCertificate, setExperienceCertificate] = useState("");
  const [outsideSweden, setOutsideSweden] = useState("");
  const [workedInSweden, setWorkedInSweden] = useState("");
  const [savingsOrAssets, setSavingsOrAssets] = useState("");
  const [schengenRejected, setSchengenRejected] = useState("");

  const [ageRange, setAgeRange] = useState("");
  const [healthInsuranceProof, setHealthInsuranceProof] = useState("");
  const [swedishLanguageInterest, setSwedishLanguageInterest] = useState("");
  const [admissionCertificate, setAdmissionCertificate] = useState("");
  const [hostFamilyInvitation, setHostFamilyInvitation] = useState("");
  const [studyHours, setStudyHours] = useState("");
  const [singleStatus, setSingleStatus] = useState("");
  const [citizenshipCountries, setCitizenshipCountries] = useState("");
  const [selfSupport, setSelfSupport] = useState("");
  const [returnTicket, setReturnTicket] = useState("");

  const [healthInsurance, setHealthInsurance] = useState("");
  const [workedBeforeAsylum, setWorkedBeforeAsylum] = useState("");
  const [asylumRefused, setAsylumRefused] = useState("");
  const [workPermission, setWorkPermission] = useState("");
  const [sameCompany, setSameCompany] = useState("");
  const [permanentContract, setPermanentContract] = useState("");
  const [minimumSalary, setMinimumSalary] = useState("");
  const [companyEmployees, setCompanyEmployees] = useState("");
  const [companyInsurance, setCompanyInsurance] = useState("");
  const [studyingWithJobOffer, setStudyingWithJobOffer] = useState("");

  const [workingInSweden, setWorkingInSweden] = useState("");
  const [firstWorkPermit, setFirstWorkPermit] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [permanentResidence, setPermanentResidence] = useState("");
  const [startBusiness, setStartBusiness] = useState("");
  const [jobOffer, setJobOffer] = useState("");
  const [savings, setSavings] = useState("");
  const [assetRange, setAssetRange] = useState("");

  const [ jobExperienceYears, setjobExperienceYears] = useState("");



    const [resultdata, setResultData ] = useState(null);
  
  const handleSubmit = async () => {
    const formData = {
      api_token: "4f29ddc35580c021515af364fddc8b24",
      category: workCategory,
      state_subject: educationLevel,
      educational_certificate_available: educationalCertificate,
      work_experience: jobExperience,
      total_work_experience: experienceCertificate,
      outside_of_sweden: outsideSweden,
      res_work_permit_citizenship: citizenshipCountries,
      country_of_residence: workedInSweden,
      job_offer: jobOffer,
      company_have_more_than_5: companyEmployees,
      insurance_for_employees: companyInsurance,
      sweden_before: workedInSweden,
      schengen_visa: schengenRejected,
      are_you_single: singleStatus,
      age_between_18_to_30: ageRange,
      health_insurance_policy: healthInsuranceProof,
      swedish_language_studies: swedishLanguageInterest,
      au_pair_certificate_of_admission: admissionCertificate,
      family_in_sweden_stating: hostFamilyInvitation,
      time_for_house: studyHours,
      return_ticket: returnTicket,
      comprehensive_health_insurance: healthInsurance,
      already_work_applying_asylum: workedBeforeAsylum,
      asylum_case_has_been_refused: asylumRefused,
      permission_of_work: workPermission,
      still_working_same_company_4_months: sameCompany,
      permanent_job: permanentContract,
      swedish_minimum_salary: minimumSalary,
      assets_savings: savingsOrAssets,
      assets_value: assetRange,
    };

    try {
      const response = await axios.post("https://nordicrelocators.com/api/assessment/workPermit", formData, {
        headers: {
          Authorization: `Bearer 36|tTf2XgkBNu9QcNRxEAqBxGiGTiFQTL5GGgq55J5V8f05512d`,
          Accept: "application/json",
        },
      });
      console.log(response.data);
      setResultData(response.data.data);
      console.log("State: " + resultdata);
      openModal();  
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Error Submitting. Please fill in all required fields.");

    }
  };
  const handleSelectChange = (event) => {
    const { name, value } = event.target;

    switch (name) {

case "jobExperienceYears":
  setjobExperienceYears(value);
  break;

      case "workingInSweden":
        setWorkingInSweden(value);
        break;
      case "firstWorkPermit":
        setFirstWorkPermit(value);
        break;
      case "citizenship":
        setCitizenship(value);
        break;
      case "permanentResidence":
        setPermanentResidence(value);
        break;
      case "startBusiness":
        setStartBusiness(value);
        break;
      case "jobOffer":
        setJobOffer(value);
        break;
      case "savings":
        setSavings(value);
        break;
      case "assetRange":
        setAssetRange(value);
        break;
      case "healthInsurance":
        setHealthInsurance(value);
        break;
      case "workedBeforeAsylum":
        setWorkedBeforeAsylum(value);
        break;
      case "asylumRefused":
        setAsylumRefused(value);
        break;
      case "workPermission":
        setWorkPermission(value);
        break;
      case "sameCompany":
        setSameCompany(value);
        break;
      case "permanentContract":
        setPermanentContract(value);
        break;
      case "minimumSalary":
        setMinimumSalary(value);
        break;
      case "companyEmployees":
        setCompanyEmployees(value);
        break;
      case "companyInsurance":
        setCompanyInsurance(value);
        break;
      case "studyingWithJobOffer":
        setStudyingWithJobOffer(value);
        break;
      case "ageRange":
        setAgeRange(value);
        break;
      case "healthInsuranceProof":
        setHealthInsuranceProof(value);
        break;
      case "swedishLanguageInterest":
        setSwedishLanguageInterest(value);
        break;
      case "admissionCertificate":
        setAdmissionCertificate(value);
        break;
      case "hostFamilyInvitation":
        setHostFamilyInvitation(value);
        break;
      case "studyHours":
        setStudyHours(value);
        break;

      case "citizenshipCountries":
        setCitizenshipCountries(value);
        break;
      case "selfSupport":
        setSelfSupport(value);
        break;
      case "returnTicket":
        setReturnTicket(value);
        break;
      case "workCategory":
        setWorkCategory(value);
        break;
      case "educationLevel":
        setEducationLevel(value);
        break;
      case "educationalCertificate":
        setEducationalCertificate(value);
        break;
      case "jobExperience":
        setJobExperience(value);
        break;
      case "experienceCertificate":
        setExperienceCertificate(value);
        break;
      case "outsideSweden":
        setOutsideSweden(value);
        break;
      case "workedInSweden":
        setWorkedInSweden(value);
        break;
      case "savingsOrAssets":
        setSavingsOrAssets(value);
        break;
      case "schengenRejected":
        setSchengenRejected(value);
        break;
      case "singleStatus":
        setSingleStatus(value);
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
        highlightText={t("Work Permit")}
        regularText={t(
          "Unlock your career potential in Sweden. We provide guidance and support for a smooth work permit application process."
        )}
        backgroundImage={homeBgImage}
      />
      <section className=" ">
        <div className="container-fluid ">
          <div className="row g-5">
            <div className="col-md-8    tw-py-12 tw-bg-white tw-text-justify">
              <div className="row tw-pt-6  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                <div className="col-lg-12">
                  {/* user info */}

                  {/* text content */}

                  <div>
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Work Permit assessment`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Find Out Your Eligibility for a Work Permit in Sweden`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />
                    <strong className="tw-text-gray">{t(`Who Should Use This Tool?`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className=" tw-p-0">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Individuals applying for a Working Holiday permit to
                          live and work temporarily in Sweden`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Individuals and families seeking an AU Pair permit for
                          cultural exchange opportunities in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Students in Sweden who are looking to switch from a
                          student permit to a work permit.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Applicants switching from a business permit to a work
                          permit route.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Individuals applying for a work permit after an asylum
                          application refusal.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Berry pickers and other seasonal workers seeking a
                          work permit in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Anyone applying for a work permit from inside or
                          outside of Sweden.`.replace(/\s+/g, ' ').trim())}</p>
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
                      requirements and eligibility criteria for obtaining a work
                      permit in Sweden by collecting important information such
                      as:`.replace(/\s+/g, ' ').trim())}</p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Your Current Status: Whether you are already in Sweden
                          or applying from abroad.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Type of Work Permit: Details about the specific permit
                          you are applying for (e.g., Working Holiday, AU Pair,
                          seasonal work).`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Previous Permits: Information on any previous permits
                          you have held, such as student or business permits,
                          and your current status in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Complete`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Visa and Permit Application Support`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`We offer comprehensive support for your move to Sweden
                      through our web portal and app:`.replace(/\s+/g, ' ').trim())}</p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Comprehensive Documentation: We prepare all the
                          necessary documents for your application, ensuring
                          full compliance with Swedish regulations`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Appointment Scheduling: We handle the booking of
                          appointments with relevant authorities to streamline
                          your application process.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Digital Access: Access your complete application file
                          directly through our web portal or app, where you can
                          view, download, and print all required documents with
                          ease.`.replace(/\s+/g, ' ').trim())}</p>
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
                        <p className=" m-0 tw-text-gray">{t(`We will assess your information to determine your
                          eligibility for a work permit in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Our team will guide you through the entire application
                          process using our digital tools.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`We ensure that you meet all necessary requirements to
                          successfully obtain your work permit in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
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

                    <p className=" tw-text-gray">{t(`Use the eligibility tool on our web portal or app to take
                      the first step toward your work journey in Sweden, whether
                      you’re applying from within the country or
                      internationally!`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  {/*end*/}

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
                      <div className="row  tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
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
                  <div className=" tw-pt-8">
                    <form>
                      <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black ">
                        <span className=" tw-flex tw-items-center tw-gap-2">
                          {" "}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                        <h2 className="tw-text-left">
                          <strong>{t(`Work Permit Categories`.replace(/\s+/g, ' ').trim())}</strong>
                        </h2>

                        <div className="col-md-6 tw-pt-4">
                          <Select
                            label="Select Category"
                            name="workCategory"
                            options={[
                              { value: "WORK PERMIT OUTSIDE OF SWEDEN", label: "WORK PERMIT OUTSIDE OF SWEDEN" },
                              { value: "AU PAIR", label: "AU PAIR" },
                              { value: "WORKING HOLIDAYS", label: "WORKING HOLIDAYS" },
                              { value: "ASYLUM - WORK PERMIT", label: "ASYLUM - WORK PERMIT" },
                              { value: "STUDENT - WORK PERMIT", label: "STUDENT - WORK PERMIT" },
                              { value: "EU LONG TERM RESIDENCE/PERMANENT RESIDENCE", label: "EU LONG TERM RESIDENCE/PERMANENT RESIDENCE" },
                            ]}
                            value={workCategory}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                          />

                        </div>
                      </div>

                      {workCategory === "WORK PERMIT OUTSIDE OF SWEDEN" && (
                        <div className=" row row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white">
                          <div className="col-md-12">
                            <span className=" tw-flex tw-items-center tw-gap-2">
                              {" "}
                              <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                            <h2 className="tw-text-left">
                              <strong>{t(`Educational Background`.replace(/\s+/g, ' ').trim())}</strong>
                            </h2>
                          </div>
                          <div className="col-md-6 tw-pt-4">
                            <Select
                              label="Education Level"
                              name="educationLevel"
                              options={[
                                { value: "Matriculation/Secondary", label: "Matriculation/Secondary" },
                                { value: "Higher Secondary/Intermediate", label: "Higher Secondary/Intermediate" },
                                { value: "Bachelor's / Under Graduate", label: "Bachelor's / Under Graduate" },
                                { value: "Masters/M.Phil", label: "Masters/M.Phil" },
                                { value: "Ph.d", label: "Ph.d" },
                                { value: "Other", label: "Other" },
                              ]}
                              value={educationLevel}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>

                          <div className="col-md-6 tw-pt-4">
                            <Select
                              label="Educational Certificate Available"
                              name="educationalCertificate"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={educationalCertificate}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                          <div className="col-md-12">
                           
                              <span className=" tw-flex tw-items-center tw-gap-2">
                                {" "}
                                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                              <h2 className="tw-text-left">
                                <strong>{t(`Work Expierence In Your Field`.replace(/\s+/g, ' ').trim())}</strong>
                              </h2>
                           
                          </div>
                          <div className="col-md-6 tw-pt-4">
                            <Select
                              label="Did you have a job experience?"
                              name="jobExperience"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={jobExperience}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />
                          </div>

                          {
                            jobExperience === "yes" && (
                              <div className="col-md-6 tw-pt-4">
                              <Select
                                label="Total Experience"
                                name="jobExperienceYears"
                                options={[
                                  { value: "0-2 years", label: "0-2 years" },
                                  { value: "2-4 years", label: "2-4 years" },
                                  { value: "4-6 years", label: "4-6 years" },
                                  { value: "6-8 years", label: "6-8 years" },
                                  { value: "8-10 years", label: "8-10 years" },
                                  { value: "10-15 years", label: "10-15 years" },
                                  { value: "15-20 years", label: "15-20 years" },
                                  { value: "20+ years", label: "20+ years" },

                                ]}
                                value={jobExperienceYears}
                                onChange={handleSelectChange}
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                              />
                            </div>
                            )
                          }

                          <div className=" col-md-6"></div>

                          <div className="col-md-6 tw-pt-4">
                            <Select
                              label="Experience Certificate Available"
                              name="experienceCertificate"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={experienceCertificate}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>

                          <div className="col-md-12">
                           
                              <span className=" tw-flex tw-items-center tw-gap-2">
                                {" "}
                                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                              <h2 className="tw-text-left">
                                <strong>{t(`Residence and Work Permit`.replace(/\s+/g, ' ').trim())}</strong>
                              </h2>
                            </div>
                         
                          <div className="col-md-6 tw-pt-4">
                            <Select
                              label="Are you outside of Sweden?"
                              name="outsideSweden"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={outsideSweden}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>

                          <div className=" col-md-6"></div>

                          <div className="col-md-6 tw-pt-4">
                            <Select
                              label="Did you work in Sweden before?"
                              name="workedInSweden"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={workedInSweden}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>

                          <div className="col-md-12">
                           
                              <span className=" tw-flex tw-items-center tw-gap-2">
                                {" "}
                                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in`.replace(/\s+/g, ' ').trim())}</span>

                              <h2 className="tw-text-left">
                                <strong>{t(`Are you Applying for your Family`.replace(/\s+/g, ' ').trim())}</strong>
                              </h2>
                           
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <Select
                              label="Do you have savings or assets in case if your salary is lower than requirements?"
                              name="savingsOrAssets"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={savingsOrAssets}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>

                          <div className="col-md-12 tw-pt-4">
                            <Select
                              label="Have you applied any sort of Schengen visa or residence permit in past 2 years and got rejected?"
                              name="schengenRejected"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={schengenRejected}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                        </div>
                      )}

                      {workCategory === "AU PAIR" && (
                    <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black ">
                          <div className="col-md-12">
                           
                              <span className=" tw-flex tw-items-center tw-gap-2">
                                {" "}
                                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                              <h2 className="tw-text-left">
                                <strong>{t(`AU Pair`.replace(/\s+/g, ' ').trim())}</strong>
                              </h2>
                           
                          </div>
                          <div className="col-md-6 tw-pt-4">
                            <Select
                              label="Are you single?"
                              name="singleStatus"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={singleStatus}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>

                          <div className="col-md-6 tw-pt-4">
                            <Select
                              label="Are you between 18 and 30 years?"
                              name="ageRange"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={ageRange}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <Select
                              label="Do you have proof that you have signed or applied for a health insurance policy?"
                              name="healthInsuranceProof"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={healthInsuranceProof}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <Select
                              label="Are you able to show that you have a distinct interest in or use for Swedish language studies?"
                              name="swedishLanguageInterest"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={swedishLanguageInterest}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <Select
                              label="Do you have a certificate of admission/Offer Letter to the course of study concerned?"
                              name="admissionCertificate"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={admissionCertificate}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <Select
                              label="Do you have a written invitation from your host family in Sweden stating the terms and conditions?"
                              name="hostFamilyInvitation"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={hostFamilyInvitation}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <Select
                              label="Will you study for 15 hours a week or ensure that housework and studies do not exceed 40 hours per week?"
                              name="studyHours"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={studyHours}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                        </div>
                      )}

                      {workCategory === "WORKING HOLIDAYS" && (
                       <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black ">
                          <div className="col-md-12">
                          
                              <span className=" tw-flex tw-items-center tw-gap-2">
                                {" "}
                                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                              <h2 className="tw-text-left">
                                <strong>{t(`Working Holidays`.replace(/\s+/g, ' ').trim())}</strong>
                              </h2>
                         
                          </div>
                          <div className="col-md-6 tw-pt-4">
                            <Select
                              label="Are you single?"
                              name="singleStatus"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={singleStatus}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>

                          <div className="col-md-12 tw-pt-4">
                            <Select
                              label="Are you a citizen of Argentina, Australia, Chile, Hong Kong, Canada, New Zealand, South Korea, or Uruguay?"
                              name="citizenshipCountries"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={citizenshipCountries}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <Select
                              label="Do you have money to support yourself during the first year in Sweden (at least 15,000 SEK)?"
                              name="selfSupport"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={selfSupport}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <Select
                              label="Do you have a return ticket or enough money to buy one?"
                              name="returnTicket"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={returnTicket}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <Select
                              label="Do you have a comprehensive health insurance that applies to care in Sweden?"
                              name="healthInsurance"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={healthInsurance}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                        </div>
                      )}

                      {workCategory === "ASYLUM - WORK PERMIT" && (
                       <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black ">
                          <div className="col-md-12">
                          
                              <span className=" tw-flex tw-items-center tw-gap-2">
                                {" "}
                                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                              <h2 className="tw-text-left">
                                <strong>{t(`Asylum Work Permit`.replace(/\s+/g, ' ').trim())}</strong>
                              </h2>
                           
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <Select
                              label="Did you already work in Sweden before applying for asylum?"
                              name="workedBeforeAsylum"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={workedBeforeAsylum}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>

                          {workedBeforeAsylum === "no" ? (
                            <>
                              <div className="col-md-12 tw-pt-4">
                                <Select
                                  label="Did your asylum case get refused, and do you want to apply for a work permit?"
                                  name="asylumRefused"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={asylumRefused}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>

                              <div className="col-md-8 tw-pt-4">
                                <Select
                                  label="Did you get permission to work in Sweden?"
                                  name="workPermission"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={workPermission}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>

                              <div className="col-md-6 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray "></label>
                                <Input
                                  placeholder={
                                    " When did you got the negative decision?"
                                  }
                                  type={"date"}
                                  className={
                                    " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                                  }
                                  label={
                                    " When did you got the negative decision?"
                                  }
                                />
                              </div>

                              <div className="col-md-8 tw-pt-4">
                                <Select
                                  label="Are you still working in the same company for the last 4 months?"
                                  name="sameCompany"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={sameCompany}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>
                              <div className="col-md-8 tw-pt-4">
                                <Select
                                  label="Do you have a permanent job contract?"
                                  name="permanentContract"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={permanentContract}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>

                              <div className="col-md-8 tw-pt-4">
                                <Select
                                  label="Is the minimum offered salary more than 26,560 SEK?"
                                  name="minimumSalary"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={minimumSalary}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>
                              <div className="col-md-8 tw-pt-4">
                                <Select
                                  label="Does the company have more than 5 employees?"
                                  name="companyEmployees"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={companyEmployees}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>

                              <div className="col-md-8 tw-pt-4">
                                <Select
                                  label="Does the company have valid insurance for employees?"
                                  name="companyInsurance"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={companyInsurance}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>
                            </>
                          ) : null}
                        </div>
                      )}

                      {workCategory === "STUDENT - WORK PERMIT" && (
                      <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black ">
                          <div className="col-md-12">
                           
                              <span className=" tw-flex tw-items-center tw-gap-2">
                                {" "}
                                <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                              <h2 className="tw-text-left">
                                <strong>{t(`Student and Work Permit`.replace(/\s+/g, ' ').trim())}</strong>
                              </h2>
                          
                          </div>
                          <div className="col-md-8 tw-pt-4">
                            <Select
                              label="Are you studying in Sweden and have gotten a job offer?"
                              name="studyingWithJobOffer"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={studyingWithJobOffer}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>

                          <div className="col-md-5 tw-pt-4">
                            <Select
                              label="Are you currently working in Sweden?"
                              name="workingInSweden"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={workingInSweden}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                          <div className="col-md-5 tw-pt-4">
                            <Select
                              label="Is this your first work permit in Sweden?"
                              name="firstWorkPermit"
                              options={[
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ]}
                              value={firstWorkPermit}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                            />

                          </div>
                        </div>
                      )}

                      {workCategory ===
                        "EU LONG TERM RESIDENCE/PERMANENT RESIDENCE" && (
                          <>
                              <div className="row g-3 tw-pt-6 tw-rounded-2xl  tw-mb-2 px-4 tw-py-4 tw-shadow tw-bg-white ">
                              <div className="col-md-12">
                             
                                  <span className=" tw-flex tw-items-center tw-gap-2">
                                    {" "}
                                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                                  <h2 className="tw-text-left">
                                    <strong>{t(`EU Long Term Residence/Permanent Residence`.replace(/\s+/g, ' ').trim())}</strong>
                                  </h2>
                             
                              </div>
                              <div className="col-md-6 tw-pt-4">
                                <Select
                                  label="Citizenship"
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

                              <div className=" col-md-6"></div>

                              <div className="col-md-12 tw-pt-4">
                                <Select
                                  label="Do you have a permanent residence permit from the countries listed below?"
                                  name="permanentResidence"
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
                                  value={permanentResidence}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>
                              <div className="col-md-8 tw-pt-4">
                                <Select
                                  label="Are you willing to start your own business in Sweden?"
                                  name="startBusiness"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={startBusiness}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>

                              <div className="col-md-8 tw-pt-4">
                                <Select
                                  label="Do you have a job offer in Sweden?"
                                  name="jobOffer"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={jobOffer}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>
                              <div className="col-md-6 tw-pt-4">
                                <Select
                                  label="Do you have assets/savings?"
                                  name="savings"
                                  options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" },
                                  ]}
                                  value={savings}
                                  onChange={handleSelectChange}
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                />

                              </div>

                              {savings === "yes" ? (
                                <>
                                  <div className="col-md-6 tw-pt-4">
                                    <Select
                                      label="What is the range of your assets/savings?"
                                      name="assetRange"
                                      options={[
                                        { value: "250000 TO 300000 SEK", label: "250000 TO 300000 SEK" },
                                        { value: "300000 TO 350000 SEK", label: "300000 TO 350000 SEK" },
                                        { value: "350000 TO 500000 SEK", label: "350000 TO 500000 SEK" },
                                        { value: "400000 TO 450000 SEK", label: "400000 TO 450000 SEK" },
                                        { value: "MORE THAN 500000 SEK", label: "MORE THAN 500000 SEK" },
                                      ]}
                                      value={assetRange}
                                      onChange={handleSelectChange}
                                      className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
                                    />

                                  </div>
                                </>
                              ) : null}
                            </div>
                          </>
                        )}
                    </form>
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

export default Work_permit;
