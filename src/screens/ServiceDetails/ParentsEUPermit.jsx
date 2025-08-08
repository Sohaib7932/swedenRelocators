import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/family-doctor-consultation.png";
import banner2 from "../../assets/images/kid-doctor.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import Header from "../../components/Header_New/Header";
import { useTranslation } from 'react-i18next';
import Sidebar from "../../components/ScrollableBar";


import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";

import pe1 from "../../assets/iconscout/pe1.png";
import pe2 from "../../assets/iconscout/pe2.png";
import pe3 from "../../assets/iconscout/pe3.png";
import pe4 from "../../assets/iconscout/pe4.png";
import pe5 from "../../assets/iconscout/pe5.png";
import pe6 from "../../assets/iconscout/pe6.png";


const ParentsEUPermit = () => {
  const { t , i18n} = useTranslation();
  const isleftlangue = i18n.language === 'ur';
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
      title: "Direct Citizenship    ",
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
      title: "Golden Visa   ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
      Link: "/golden-visa-greece-portugal",
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Parents EU Permit")}
        regularText={t(
          "Bring your parents to the EU with confidence. Our services help make the application process simple and stress-free."
        )}
        backgroundImage={homeBgImage}
      />

      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
            <div
                className="col-md-8 tw-py-20 tw-bg-white tw-text-justify"
                style={{ direction: isleftlangue ? 'rtl' : 'ltr' }}
              >
                <div className=" 2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      EU Residence Card 
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`For Dependent Parents and Other Family
                      Members under Directive 2004/38/EC`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`Under EU Directive 2004/38/EC, EU/EEA citizens exercising
                      their right of free movement in Sweden can apply for a
                      residence card for their dependent family members from
                      outside the EU, including parents and other family
                      members. This directive aims to facilitate family unity by
                      allowing EU citizens to bring family members who are
                      economically or socially dependent on them to live in
                      Sweden. Here’s an in-depth look at the requirements,
                      application process, and specific cases for dependent
                      parents and other family members.`.replace(/\s+/g, ' ').trim())}</p>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Who`.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                       {t(` Qualifies as a Dependent Family Member?`.replace(/\s+/g, ' ').trim())}{" "}
                      </strong>
                    </h2>

                    <br />

                    <ul className=" tw-p-0 tw-pl-0">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <p className=" m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Dependent Parents:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                          {t(`Parents of an EU citizen or their spouse/partner who
                          rely on the EU citizen for financial support or other
                          essential care.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>

                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-9 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={pe1}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <li>
                            <p className=" m-0 tw-text-gray">
                              <strong className="tw-text-black">{t(`Other Dependent Family Members:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                             {t(` This may include siblings or extended relatives if
                              there is a clear dependency relationship,
                              particularly if the family member and the EU
                              citizen lived together in the previous country of
                              residence.`.replace(/\s+/g, ' ').trim())}
                            </p>
                          </li>

                          <li>
                            <p className=" m-0 tw-text-gray">
                              <strong className="tw-text-black">{t(`Children or Stepchildren:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                              {t(`Children over 21 may also qualify as dependent if
                              they rely on the EU citizen for support, although
                              this is assessed differently than minors.`.replace(/\s+/g, ' ').trim())}
                            </p>
                          </li>
                        </div>
                      </div>
                    </ul>

                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                     {t(` Key`.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        {t(`Conditions for Eligibility`.replace(/\s+/g, ' ').trim())}{" "}
                      </strong>
                    </h2>
                    {/* <div className="row tw-flex tw-items-center">
                

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={pe2}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
          
        
          </div>
                    </div> */}

                    <br />

                    <ul className=" tw-p-0 tw-pl-0">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <p className=" m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Proof of Dependency:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                         {t(` The applicant must provide evidence showing financial
                          or personal dependency on the EU citizen. This could
                          include proof of shared residence, regular financial
                          support, or documentation of emotional and social
                          dependence.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>

                      <li>
                        <p className=" m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Living Together Previously:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                         {t(` In cases involving extended family members (such as
                          siblings or adult children), the applicant must show
                          that they lived with the EU citizen in their home
                          country immediately before the EU citizen moved to
                          Sweden.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>

                      <li>
                        <p className=" m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Timely Application:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                          {t(`Applications should ideally be submitted as soon as
                          possible after the EU citizen arrives in Sweden.
                          Delayed applications may reduce the likelihood of
                          approval, especially if the dependency has developed
                          only after the EU citizen's relocation.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <br />

                    <span className="tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Step 1:`.replace(/\s+/g, ' ').trim())}
                    </span>

                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        {t(`Prepare Documentation for Dependency and Relationship`.replace(/\s+/g, ' ').trim())}{" "}
                      </strong>
                    </h2>

                    <br />

                    <p className="tw-text-gray">{t(`Gathering the necessary documentation is crucial. Key
                      documents include:`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Proof of Identity`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-gray">{t(`Valid passport:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                          {t(`The non-EU family member’s passport is required.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-blac">{t(`Proof of Relationship`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-gray">{t(`For parents:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                          {t(`Birth certificate of the EU citizen showing the
                          parental relationship.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>
                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-9 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={pe3}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <li>
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-text-gray">{t(`For other family members:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                              {t(`Documents showing the family relationship (e.g.,
                              birth certificates or family registers).`.replace(/\s+/g, ' ').trim())}
                            </p>
                          </li>

                          <li>
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-text-gray">{t(`Evidence of Dependency:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                              {t(`This can include bank statements, proof of regular
                              financial transfers, proof of shared housing, and
                              any other documents that demonstrate reliance on
                              the EU citizen for financial or emotional support.`.replace(/\s+/g, ' ').trim())}
                            </p>
                          </li>
                        </div>
                      </div>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Step 2:`.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {t(`Submit the Application`.replace(/\s+/g, ' ').trim())}{" "}
                      </strong>
                    </h2>
                    {/* <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                  
                      </div>

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={pe3}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div> */}

                    <br />

                    <p className="tw-text-gray">{t(`The non-EU family member must apply for a residence card,
                      which can be submitted to the Swedish Migration Agency
                      (Migrationsverket) either online or through a Swedish
                      embassy or consulate in the applicant's home country.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Applicant Details`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">{t(`Information about the EU citizen, their residence
                          status in Sweden, and the dependent’s personal
                          details.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Supporting Documents`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">{t(`All required documents demonstrating the dependency
                          relationship and proof of residence for the EU citizen
                          in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Step 3:`.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {t(`Migration Agency Review`.replace(/\s+/g, ' ').trim())}{" "}
                      </strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`The Migration Agency will assess the relationship and
                      dependency based on the evidence provided. They may
                      request additional documentation or clarifications if
                      needed.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Verification of Dependency`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">{t(`Confirming that the non-EU family member is genuinely
                          reliant on the EU citizen.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Family Relationship`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">{t(`Verifying the applicant’s family connection to the EU
                          citizen and ensuring that dependency existed prior to
                          moving to Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Step 4:`.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        {t(`Decision and Residence Card Issuance`.replace(/\s+/g, ' ').trim())}
                      </strong>
                    </h2>

                    <br />

                    <p className="tw-text-gray">{t(`If approved, the non-EU family member will receive a
                      residence card valid for five years or the expected
                      duration of the EU citizen’s residence in Sweden
                      (whichever is shorter).`.replace(/\s+/g, ' ').trim())}</p>

                    <p className="tw-text-gray">{t(`The residence card permits the holder to live, work, and
                      access healthcare in Sweden under the same conditions as
                      EU family members.`.replace(/\s+/g, ' ').trim())}</p>

                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Specific Cases:`.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        {t(`Requirements for Dependent Parents and Other Family
                        Members`.replace(/\s+/g, ' ').trim())}{" "}
                      </strong>
                    </h2>

                    <br />

                    <strong className="tw-text-black">
                      {" "}
                      {t(`Residence Permit for Dependent Parents`.replace(/\s+/g, ' ').trim())}{" "}
                    </strong>

                    <p className="tw-text-gray">{t(`For dependent parents, the primary conditions include
                      demonstrating economic or health-related dependence on the
                      EU citizen.`.replace(/\s+/g, ' ').trim())}</p>

                    <ul className="tw-p-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <strong className="m-0 tw-text-gray">{t(`Financial Support Evidence`.replace(/\s+/g, ' ').trim())}</strong>
                      </li>
                    </ul>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">{t(`Bank transfers, remittance receipts, or proof of
                          regular financial support from the EU citizen.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={pe5}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul className="tw-p-0 tw-pt-4">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <strong className="m-0 tw-text-gray">{t(`Health-Related Dependency`.replace(/\s+/g, ' ').trim())}</strong>
                          </li>
                        </ul>

                        <ul className="tw-p-0 tw-pl-0">
                          <li>
                            <p className="m-0 tw-text-gray">{t(`Medical certificates or documentation of special
                              needs that require close proximity to the EU
                              citizen for support and care.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                        </ul>

                        <strong className="tw-text-black">
                          {" "}
                          {t(`Residence Permit for Other Dependent Family Members`.replace(/\s+/g, ' ').trim())}{" "}
                        </strong>

                        <p className="tw-text-gray">{t(`For other dependent family members (e.g., adult
                          siblings or extended relatives), the requirements are
                          typically more stringent.`.replace(/\s+/g, ' ').trim())}</p>

                        <ul className="tw-p-0 tw-pt-4">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <strong className="m-0 tw-text-gray">{t(`Proof of Shared Household`.replace(/\s+/g, ' ').trim())}</strong>
                          </li>
                        </ul>

                        <ul className="tw-p-0 tw-pl-0">
                          <li>
                            <p className="m-0 tw-text-gray">{t(`Evidence that the family member lived with the EU
                              citizen prior to their relocation to Sweden, such
                              as a joint lease or utility bills.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <ul className="tw-p-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className="tw-text-blue" />
                        <strong className="m-0 tw-text-gray">{t(`Emotional and Social Dependence`.replace(/\s+/g, ' ').trim())}</strong>
                      </li>
                    </ul>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">{t(`Affidavits or statements demonstrating a strong social
                          and emotional bond may be required, especially if the
                          relationship extends beyond financial dependence.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                     {t(` Maintenance`.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {t(`Requirement for the EU Sponsor`.replace(/\s+/g, ' ').trim())}{" "}
                      </strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`Under Swedish regulations, the EU citizen must be able to
                      provide financial support and suitable accommodation for
                      their non-EU family member.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Stable Income`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">{t(`Proof of employment, regular income, or financial
                          resources that demonstrate the EU citizen can support
                          themselves and their dependent.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Housing Requirement`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">{t(`The EU citizen must have suitable housing that meets
                          Swedish standards for living space and privacy. This
                          can include rental agreements, proof of homeownership,
                          or a sublease with landlord approval.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <p className="tw-text-gray">{t(`Note: The maintenance requirement does not apply to minor
                      children (under 18 years). This means that if a parent is
                      applying to join a minor child in Sweden, the child does
                      not need to meet income or housing requirements.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>
                  <div>
                    <br />

                    <span className="tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Additional Considerations`.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`Timeliness of the Application`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    <br />

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={pe6}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <p className="tw-text-gray">{t(`Applications submitted soon after the EU citizen’s
                          relocation to Sweden are more likely to succeed. Long
                          delays in application submission may complicate the
                          process, as authorities might question the existence
                          of prior dependency. Ideally, applications for
                          dependent family members should be submitted within a
                          few months of the EU citizen’s arrival in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </div>
                    </div>

                    <strong className="m-0 tw-text-black">{t(`Changes in Dependency Status`.replace(/\s+/g, ' ').trim())}</strong>

                    <p className="tw-text-gray">{t(`If the dependency status changes (for example, if the
                      non-EU family member becomes financially independent), it
                      may impact the status of the residence card. The Swedish
                      Migration Agency may periodically review these cases to
                      ensure compliance with residency criteria.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Renewing the Residence Card`.replace(/\s+/g, ' ').trim())}</strong>

                    <p className="tw-text-gray">{t(`Residence cards for dependent family members are typically
                      valid for up to five years. Renewal is possible, provided
                      the dependency relationship continues and the EU citizen
                      remains a resident of Sweden. Renewal applications should
                      be submitted well in advance of the expiration date, with
                      updated documentation demonstrating continued dependency.`.replace(/\s+/g, ' ').trim())}</p>

                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                     {t(` How Sweden Relocators `.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`Can Assist with EU Residence Card
                      Applications`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`We review your family’s specific circumstances to
                      determine if your non-EU family members qualify as
                      dependents under Swedish law.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Document Preparation`.replace(/\s+/g, ' ').trim())}</strong>

                    <p className="tw-text-gray">{t(`Our team helps gather and prepare all required documents,
                      including proof of relationship, dependency, and financial
                      support.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Application Submission and Monitoring`.replace(/\s+/g, ' ').trim())}</strong>

                    <p className="tw-text-gray">{t(`We assist with the application submission process and
                      monitor progress with the Migration Agency to ensure
                      timely updates.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Appeals Support`.replace(/\s+/g, ' ').trim())}</strong>

                    <p className="tw-text-gray">{t(`In cases of application denial, we offer guidance on the
                      appeals process, helping strengthen your case for
                      reconsideration.`.replace(/\s+/g, ' ').trim())}</p>

                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Benefits of Our Service`.replace(/\s+/g, ' ').trim())}
                    </span>

                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`Experienced Guidance`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`Familiarity with Directive 2004/38/EC and the Migration
                      Agency’s requirements allows us to offer precise,
                      effective advice.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Comprehensive Support`.replace(/\s+/g, ' ').trim())}</strong>

                    <p className="tw-text-gray">{t(`From eligibility verification to document preparation and
                      appeal support, we handle every aspect of your
                      application.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Personalized Service`.replace(/\s+/g, ' ').trim())}</strong>

                    <p className="tw-text-gray">{t(`Every case is unique, and we tailor our approach to your
                      family’s specific needs, providing the most effective
                      solutions.`.replace(/\s+/g, ' ').trim())}</p>

                  
                    <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">
                    <h5 className="tw-text-center tw-pt-4" style = {{fontSize: '1.2em'}}>
                        <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                       {t('Sign Up Today!')}{" "}
                        </strong>
                     
                      </h5>
                    </Link>
                    <br />
                    <p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether you're
                      seeking assistance with relocation, permits, visas, legal
                      processes, or settling into a new life, we're here to
                      help. Our comprehensive services cover everything from
                      work and study opportunities to family reunifications,
                      business support, and much more. Let us guide you every
                      step of the way—start your seamless experience now!`.replace(/\s+/g, ' ').trim())}</p>
                  </div>
                </div>
              </div>

            <Sidebar/>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ParentsEUPermit;
