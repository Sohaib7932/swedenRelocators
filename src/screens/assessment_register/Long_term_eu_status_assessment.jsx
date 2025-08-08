import React, { useEffect, useState } from 'react';
import blog1 from '../../assets/images/single-img-04.png';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner_Page from '../../components/Common/Banner_Page';
import { LiaAngleRightSolid } from 'react-icons/lia';
import profile from '../../assets/images/profile.png';
import { FaFacebookF } from 'react-icons/fa';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { GoTriangleRight } from 'react-icons/go';
import { TfiAngleLeft } from 'react-icons/tfi';
import { Link, useParams } from 'react-router-dom';
import Assessment_modal from './Assessment_modal';

import { useTranslation } from 'react-i18next';

import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"

import Header from '../../components/Header_New/Header';
import Select from "../../components/Selecttab";
import Sidebar from "../../components/ScrollableBar";


const Long_term_eu_status_assessment = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: 1,
      title: 'Asylum',
      description: 'You have to be in Sweden or on the Swedish border in order to apply for asylum.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-home"></i>,
      Link: '/asylum',
    },
    {
      id: 2,
      title: 'Family Reunification',
      description: 'Family reunification is a recognized reason for the immigration of family members to a country.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>,
      Link: '/family-reunification',
    },
    {
      id: 3,
      title: 'Personnummer Sweden',
      description: 'The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>,

      Link: '/personnumer-sweden',
    },
    {
      id: 4,
      title: 'CPR Number Denmark',
      description: 'CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>,
      Link: '/cpr-number-denmark',
    },
    {
      id: 5,
      title: 'Work Permit',
      description: 'Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>,
      Link: '/work-permit',
    },
    {
      id: 5,
      title: 'Business Permit',
      description: 'Swedish business culture is open and innovative, and starting a business there is relatively simple        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>,

      Link: '/business-permit',
    },
    {
      id: 6,
      title: 'Business Visit',
      description: 'Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>,

      Link: '/business-visit',
    },
    {
      id: 7,
      title: 'Citizenship',
      description: 'When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>,
      Link: '/citizenship',
    },
    {
      id: 8,
      title: 'Study in EU',
      description: 'If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>,
      Link: '/study-in-eu',
    },
    {
      id: 9,
      title: 'Global Visit Visas',
      description: 'For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>,
      Link: '/global-visit-visas',
    },
    {
      id: 10,
      title: 'EEA Permits',
      description: 'Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>,
      Link: '/eea-permits',
    },
    {
      id: 11,
      title: 'Parents EU Permit',
      description: 'Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>,
      Link: '/parents-eu-permit',
    },
    {
      id: 12,
      title: 'Marriage & Divorce      ',
      description: 'Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>,
      Link: '/marriage-divorce',
    },
    {
      id: 13,
      title: 'Company Registration      ',
      description: 'If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>,
      Link: '/company-registration',
    },
    {
      id: 14,
      title: 'House & Offices',
      description: 'we offer you an easy and painless solution where you can get a place to live without any worries.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>,
      Link: '/house-offices',
    },
    {
      id: 15,
      title: 'Appeal Cases',
      description: 'Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>,
      Link: '/appeal-cases',
    },
    {
      id: 16,
      title: 'EU Citizens Relocation',
      description: 'Family reunification means that a family that has been split up can apply to be allowed to live together.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>,
      Link: '/eu-family-reunification',
    },
    {
      id: 17,
      title: 'Investment',
      description: 'There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>,
      Link: '/investment',
    },
    {
      id: 18,
      title: 'Direct Citizenship by Investments      ',
      description: 'citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>,
      Link: '/direct-citizenship-by-investments',
    },
    {
      id: 19,
      title: 'Permanent Residence',
      description: 'If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>,
      Link: '/permanent-residence',
    },
    {
      id: 20,
      title: 'Golden Visa (Greece - Portugal)      ',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  const [location, setLocation] = useState("");
  const [residenceCountry, setResidenceCountry] = useState("");
  const [jobOffer, setJobOffer] = useState("");
  const [ownBusiness, setOwnBusiness] = useState("");
  const [moveToSweden, setMoveToSweden] = useState("");
  const [assessmentFamily, setAssessmentFamily] = useState("");
  const [marriageCertificate, setMarriageCertificate] = useState("");
  const [homeCountryMarriage, setHomeCountryMarriage] = useState("");
  const [familyRegistrationCertificate, setFamilyRegistrationCertificate] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState("");
  const [birthCertificates, setBirthCertificates] = useState("");
  



    const [resultdata, setResultData ] = useState(null);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // API Endpoint
    const url = "https://nordicrelocators.com/api/assessment/longTermEUPermit";
  
    // Prepare the form data
    const formData = new FormData();
    formData.append("citizenship", location); // Assuming 'location' refers to citizenship
    formData.append("permanent_residence", residenceCountry);
    formData.append("job_offer_in_sweden", jobOffer);
    formData.append("business_in_sweden", ownBusiness);
    formData.append("90_days_period", moveToSweden);
    formData.append("sweden_with_family", assessmentFamily);
    formData.append("marriage_certificate", marriageCertificate);
    formData.append("home_country", homeCountryMarriage);
    formData.append("registration_certificate", familyRegistrationCertificate);
    formData.append("childrens", numberOfChildren);
    formData.append("birth_certificate_for_childrens", birthCertificates);
  
    // Authorization header
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer 36|tTf2XgkBNu9QcNRxEAqBxGiGTiFQTL5GGgq55J5V8f05512d",
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
  


  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (e.target.name === 'personalStatus') {
      setPersonalStatus('');
    }

    if (e.target.name === 'location') {
      setLocation('');
    }

    switch (e.target.name) {
      case "location":
      setLocation(value);
      break;
    case "residenceCountry":
      setResidenceCountry(value);
      break;
    case "jobOffer":
      setJobOffer(value);
      break;
    case "ownBusiness":
      setOwnBusiness(value);
      break;
    case "moveToSweden":
      setMoveToSweden(value);
      break;
    case "assessmentFamily":
      setAssessmentFamily(value);
      break;
    case "marriageCertificate":
      setMarriageCertificate(value);
      break;
    case "homeCountryMarriage":
      setHomeCountryMarriage(value);
      break;
    case "familyRegistrationCertificate":
      setFamilyRegistrationCertificate(value);
      break;
    case "numberOfChildren":
      setNumberOfChildren(value);
      break;
    case "birthCertificates":
      setBirthCertificates(value);
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
    highlightText={t("Long Term EU Status")}
    regularText={t("Secure your long-term EU residence status confidently. We guide you through the process for a seamless experience.")}
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
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Long-Term EU Residence Status`.replace(/\s+/g, ' ').trim())}</span>

                    <h2>
                      <strong className = "tw-text-left">{t(`Find Out Your Eligibility for Moving to Sweden with a Long-Term EU Residence Permit`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br/>
                    <strong className = "tw-text-gray">{t(`Who Should Use This Tool?`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className=" tw-p-0">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Long-term EU Permanent Residence Permit Holders from any EU country (except Denmark and Ireland) who are planning to move to Sweden or have already moved.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Families of long-term EU residence permit holders who wish to join them in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      

                      
                    </ul>

<br/>
<span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Why`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Use the Eligibility Tool?`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br/>


                  
                    <p className="tw-text-gray">{t(`This tool is designed to help you understand the requirements and eligibility criteria for relocating to Sweden with a long-term EU residence permit by gathering important details, such as:`.replace(/\s+/g, ' ').trim())}</p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Your Current Residence Status: Information about your existing long-term EU residence permit from another EU country.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Relocation Plans: Whether you’re planning to move to Sweden or have already relocated.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Family Information: Details about family members who will be joining you in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className = "tw-text-gray">{t(`Complete Visa and Permit Application Support`.replace(/\s+/g, ' ').trim())}</strong>

                    <p className="tw-text-gray">{t(`We offer comprehensive support for your move to Sweden through our web portal and app:`.replace(/\s+/g, ' ').trim())}</p>

                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Comprehensive Documentation: We prepare all the necessary documents for your application, ensuring full compliance with Swedish regulations`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Appointment Scheduling: We handle the booking of appointments with relevant authorities to streamline your application process.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Digital Access: Access your complete application file directly through our web portal or app, where you can view, download, and print all required documents with ease.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`How`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`We Use the Information`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    
                    <ul className=" tw-p-0 ">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`We will evaluate your details to provide a clear assessment of your eligibility for relocating to Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Our team will guide you through each step of the application process via the portal or app.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`We’ll ensure you and your family meet all the requirements to successfully obtain residence in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                  
<br/>
<span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Get`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Started`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br/>


                
                    <p className=" tw-text-gray">{t(`Use the eligibility tool on our web portal or app to take the first step toward relocating to Sweden with your long-term EU residence permit, ensuring a smooth and seamless experience for both you and your family!`.replace(/\s+/g, ' ').trim())}</p>
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
                          <Input placeholder={'You Full Name'} star={'*'} className={' tw-w-full border tw-rounded-lg  tw-py-3.5 tw-px-3'} label={'Full Name'} />
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Input placeholder={'Contact No with Country'} star={'*'} className={' tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg'} label={'Contact No'} />
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Input placeholder={'your Address'} star={'*'} className={' tw-w-full border tw-py-3.5  tw-px-3 tw-rounded-lg'} label={'Your Email'} />
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
                      <strong>{t(`Main Applicant Assesment`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                        <div className="col-md-6 tw-pt-4">


                        <Select
  label="Select Citizenship"
  name="location"
  options={[
    { value: "AF", label: "Afghanistan" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AS", label: "American Samoa" },
    { value: "AD", label: "Andorra" },
    // Include all other countries
    { value: "JM", label: "Jamaica" },
  ]}
  value={location}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                        </div>

                        <div className="col-md-6 tw-pt-4">
                          <Select
  label="Do you have permanent residence?"
  name="residenceCountry"
  options={[
    { value: "AF", label: "Afghanistan" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AS", label: "American Samoa" },
    { value: "AD", label: "Andorra" },
    // Include all other countries
    { value: "JM", label: "Jamaica" },
  ]}
  value={residenceCountry}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                        </div>
                        <div className="col-md-6 tw-pt-4">
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

                        <div className="col-md-12 tw-pt-4">
                        <Select
  label="Do you want to start your own business in Sweden?"
  name="ownBusiness"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={ownBusiness}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                        </div>

                        <div className="col-md-12 tw-pt-4">
                        <Select
  label="Are you already moved to Sweden or planning to move in the coming 90 Days Period?"
  name="moveToSweden"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={moveToSweden}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                        </div>
                      </div>
                    </form>
                  </div>

                  {/* user info */}
                  <div className=" tw-pt-8">
                  

                    <form>
                      <div className="row tw-rounded-2xl px-4 tw-py-4 tw-shadow tw-bg-white border-t-2 border-black">
                        
                      <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Fill in your`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Family Assessment`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                        
                        <div className="col-md-6 tw-pt-4">
                        <Select
  label="Do you want to move to Sweden with family?"
  name="assessmentFamily"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={assessmentFamily}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                        </div>

                        {assessmentFamily === 'yes' && (
                          <>
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Do you have a marriage certificate?"
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

                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Is your marriage registered in your home country?"
  name="homeCountryMarriage"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={homeCountryMarriage}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="Do you have a family registration certificate?"
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
                            <div className="col-md-6 tw-pt-4">
                            <Select
  label="How many children do you have?"
  name="numberOfChildren"
  options={[
    { value: "N/A", label: "N/A" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
  ]}
  value={numberOfChildren}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                            </div>

                            {numberOfChildren === '1' || numberOfChildren === '2' || numberOfChildren === '3' || numberOfChildren === '4' || numberOfChildren === '5' ? (
                              <>
                                <div className="col-md-6 tw-pt-4">
                                <Select
  label="Do you have birth certificates for children?"
  name="birthCertificates"
  options={[
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]}
  value={birthCertificates}
  onChange={handleSelectChange}
  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full tw-border tw-rounded-lg tw-mt-2"
/>

                                </div>
                              </>
                            ) : null}
                          </>
                        )}
                      </div>
                    </form>
                  </div>

                  <Button onClick={handleSubmit} label={'Submit'} className={'  tw-w-full tw-bg-primary tw-py-3 tw-text-white tw-rounded-xl  tw-mt-10'} />
                </div>
              </div>
            </div>

           <Sidebar/>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Long_term_eu_status_assessment;
