import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/psychological-problems-at-school.png";
import { motion } from "framer-motion";
import { imageVariants } from "../../utils/motion";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import Sidebar from "../../components/ScrollableBar";
import { useTranslation } from 'react-i18next';


import eor1 from "../../assets/iconscout/eor1.png";
import eor2 from "../../assets/iconscout/eor2.png";
import eor3 from "../../assets/iconscout/eor3.png";

import Header from "../../components/Header_New/Header";

const EORPayroll = () => {
  const { t, i18n, language } = useTranslation();
  const { id } = useParams();
 
  const isleftlangue = language === 'ur';
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
      title: "Direct Citizenship  ",
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
      title: "Golden Visa  ",
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
        highlightText={"EOR Payroll"}
        regularText={
          "Seek safety and a fresh start in Sweden. Our comprehensive support helps guide you through the asylum process smoothly."
        }
        backgroundImage={homeBgImage}
      />

      <div className=" ">
        <section className=" ">
          <div className="container-fluid">
            <div className="">
              <div className="row g-4">
              <div
                className="col-md-8 tw-py-20 tw-bg-white tw-text-justify"
                style={{ direction: isleftlangue ? 'rtl' : 'ltr' }}
              >
                  <div className=" 2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t('Employer of Record (EOR) & Payroll Services')}
                    </span>
                    <h2 className="tw-text-left">
                      <strong>{t(`Simplified with Our Online Portal`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray  ">{t(`Sweden Relocators provides a comprehensive, user-friendly
                      Employer of Record (EOR) and Payroll Service through our
                      advanced online portal, designed to make global workforce
                      management simple. With our EOR and payroll solutions,
                      your company can expand globally without navigating the
                      complexities of local employment laws, tax compliance, or
                      benefits administration.`.replace(/\s+/g, ' ').trim())}</p>

                    <div>
                      <br />

                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-12 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={eor1}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <span className=" tw-flex tw-items-center tw-gap-2">
                            {" "}
                            <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                            {t(`What is`.replace(/\s+/g, ' ').trim())}
                          </span>
                          <h2>
                            <strong>{t(`Employer of Record (EOR)?`.replace(/\s+/g, ' ').trim())}</strong>
                          </h2>
                          <br />

                          <p className=" tw-text-gray ">{t(`An Employer of Record (EOR) is a service provider
                            that acts as the legal employer for your staff in a
                            foreign country, handling all local employment,
                            payroll, and compliance obligations. With EOR,
                            Sweden Relocators legally employs your workforce on
                            your behalf, allowing you to operate in Sweden or
                            other countries without setting up a local legal
                            entity.`.replace(/\s+/g, ' ').trim())}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        {t(`How Our`.replace(/\s+/g, ' ').trim())}
                      </span>
                      <h2>
                        <strong>{t(`EOR Service Works`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />

                      <strong className=" m-0 tw-text-black">{t(`Company Sign-Up on the Portal:`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Simply sign up on our portal as a company to get
                            started. Once registered, you can add employees and
                            provide relevant information, including roles,
                            salaries, and benefits.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-black">{t(`Local Compliance Management:`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Sweden Relocators handles all compliance aspects,
                            from employment contracts that align with Swedish
                            labor laws to adherence to local tax regulations,
                            protecting your business from potential legal risks.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-black">{t(`Employee Onboarding:`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Our portal guides you through the employee
                            onboarding process, ensuring all necessary
                            documents, tax forms, and agreements are collected
                            and organized for smooth employment`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-black">{t(`Payroll & Benefits Administration:`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`We handle payroll processing, ensuring accurate and
                            timely salary payments that account for all required
                            deductions, benefits, and tax contributions.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-black">{t(`Termination and Offboarding:`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`In case of employment termination, our team ensures
                            all legal procedures are followed, providing full
                            support for smooth, compliant offboarding.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                       {t(` How Our Payroll Services Work`.replace(/\s+/g, ' ').trim())}
                      </span>
                      <h2>
                        <strong>{t(`A Step-by-Step Guide`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`Our Payroll Services are fully integrated with our EOR
                        platform, handling all aspects of salary payments, tax
                        compliance, and benefits administration. Here’s how it
                        works:`.replace(/\s+/g, ' ').trim())}</p>

                      <strong className=" m-0 tw-text-black">{t(`Employee Setup and Salary Processing`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <strong className=" m-0 tw-text-gray">{t(`Add Employee Details:`.replace(/\s+/g, ' ').trim())}</strong>
                        </li>
                      </ul>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                            <strong></strong> {t(`Through our online portal, you can
                            add each employee’s salary, benefits, and any other
                            payroll-specific details.`.replace(/\s+/g, ' ').trim())}
                            <p>
                              <br />
                            </p>
                          </p>
                        </li>

                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <strong className=" m-0 tw-text-gray">{t(`Monthly Payroll Calculation:`.replace(/\s+/g, ' ').trim())}</strong>
                          </li>
                        </ul>

                        <li>
                          <p className=" m-0 tw-text-gray">
                            <strong></strong>{t(`Every pay period, our system
                            calculates salaries with full compliance, including
                            all taxes, benefits, and deductions. This ensures
                            payroll accuracy and consistency.`.replace(/\s+/g, ' ').trim())}</p>
                          <p>
                            <br />
                          </p>
                        </li>

                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <strong className=" m-0 tw-text-gray">{t(`Timely Salary Payments:`.replace(/\s+/g, ' ').trim())}</strong>
                          </li>
                        </ul>

                        <li>
                          <p className=" m-0 tw-text-gray">
                            <strong></strong> {t(`Salaries are processed and
                            deposited directly into employees’ bank accounts.
                            Payslips with breakdowns of earnings, deductions,
                            and taxes are available for employees to view
                            online.`.replace(/\s+/g, ' ').trim())}
                            <p>
                              <br />
                            </p>
                          </p>
                        </li>
                      </ul>

                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-12 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={eor2}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <strong className=" m-0 tw-text-black">{t(`Tax Compliance and Filing`.replace(/\s+/g, ' ').trim())}</strong>

                          <ul className=" tw-p-0 tw-pt-4">
                            <li className=" tw-flex tw-items-center tw-gap-3">
                              <GoTriangleRight className=" tw-text-blue" />
                              <strong className=" m-0 tw-text-gray">{t(`Tax Withholding:`.replace(/\s+/g, ' ').trim())}</strong>
                            </li>
                          </ul>

                          <ul className=" tw-p-0 ">
                            <li className=" tw-flex tw-items-center tw-gap-3">
                              <p className=" m-0 tw-text-gray">
                                <strong></strong> {t(`Our system automatically
                                withholds the correct taxes from each employee’s
                                salary, ensuring compliance with Swedish tax
                                laws.`.replace(/\s+/g, ' ').trim())}
                                <p>
                                  <br />
                                </p>
                              </p>
                            </li>

                            <ul className=" tw-p-0 tw-pt-4">
                              <li className=" tw-flex tw-items-center tw-gap-3">
                                <GoTriangleRight className=" tw-text-blue" />
                                <strong className=" m-0 tw-text-gray">{t(`Reporting and Filing:`.replace(/\s+/g, ' ').trim())}</strong>
                              </li>
                            </ul>

                            <li>
                              <p className=" m-0 tw-text-gray">
                                <strong></strong>{t(`Our team handles monthly,
                                quarterly, and annual tax filings, so your
                                business stays compliant with all local
                                regulations.`.replace(/\s+/g, ' ').trim())}</p>
                              <p>
                                <br />
                              </p>
                            </li>

                            <ul className=" tw-p-0 tw-pt-4">
                              <li className=" tw-flex tw-items-center tw-gap-3">
                                <GoTriangleRight className=" tw-text-blue" />
                                <strong className=" m-0 tw-text-gray">{t(`Transparency and Record-Keeping:`.replace(/\s+/g, ' ').trim())}</strong>
                              </li>
                            </ul>

                            <li>
                              <p className=" m-0 tw-text-gray">
                                <strong></strong>
                               {t(` All payroll transactions, tax filings, and
                                reports are securely stored in the portal,
                                offering real-time visibility for both employers
                                and employees.`.replace(/\s+/g, ' ').trim())}
                                <p>
                                  <br />
                                </p>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <strong className=" m-0 tw-text-black">{t(`Benefits Administration`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <strong className=" m-0 tw-text-gray">{t(`Employee Benefits Setup:`.replace(/\s+/g, ' ').trim())}</strong>
                        </li>
                      </ul>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">
                           {t(` Through the portal, employers can define benefit
                            plans, including health insurance, retirement plans,
                            and other perks.`.replace(/\s+/g, ' ').trim())}
                            <p>
                              <br />
                            </p>
                          </p>
                        </li>

                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <strong className=" m-0 tw-text-gray">{t(`Automated Benefits Processing:`.replace(/\s+/g, ' ').trim())}</strong>
                          </li>
                        </ul>

                        <li>
                          <p className=" m-0 tw-text-gray">{t(`Our system automatically calculates and administers
                            benefits, ensuring employees receive the correct
                            benefits each month.`.replace(/\s+/g, ' ').trim())}</p>
                          <p>
                            <br />
                          </p>
                        </li>

                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <strong className=" m-0 tw-text-gray">{t(`Compliance with Swedish Standards:`.replace(/\s+/g, ' ').trim())}</strong>
                          </li>
                        </ul>

                        <li>
                          <p className=" m-0 tw-text-gray">
                            <></>
                           {t(` We manage benefits in line with Swedish laws,
                            ensuring all requirements are met without additional
                            administrative burden on your part.`.replace(/\s+/g, ' ').trim())}
                            <p>
                              <br />
                            </p>
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                       {t(` Key Advantages of`.replace(/\s+/g, ' ').trim())}
                      </span>
                      <h2>
                        <strong>{t(`Using Sweden Relocators’ EOR & Payroll Portal`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />

                      <strong className=" m-0 tw-text-black">{t(`1. Simple Online Sign-Up and Employee Management`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Once registered, you can easily add employees,
                            manage payroll, and oversee benefits through our
                            portal. This allows you to focus on your business
                            operations, while we handle compliance and payroll
                            administration.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-black">{t(`2. Seamless Global Expansion`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Sweden Relocators handles all compliance aspects,
                            With Sweden Relocators as your EOR, your business
                            can operate in Sweden or other countries without the
                            need to set up a legal entity. Our EOR services
                            handle all local compliance, saving you time and
                            resources.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-black">{t(`3. Complete Compliance Assurance`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Our platform ensures compliance with Swedish labor
                            laws, tax regulations, and benefits standards. You
                            can confidently expand knowing your operations meet
                            all local requirements.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-black">{t(`4. Accurate, Timely Payroll Processing`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Through our portal, salary processing is automated,
                            ensuring accurate calculations that consider
                            deductions, benefits, and taxes. Employees are paid
                            on time, and payroll transparency is enhanced
                            through detailed payslips.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-black">{t(`5. Enhanced Employee Satisfaction`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Employees benefit from timely payments, transparent
                            benefits administration, and easily accessible
                            payslips, all through an intuitive online interface,
                            leading to improved satisfaction and retention.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                       {t(` How to`.replace(/\s+/g, ' ').trim())}
                      </span>
                      <h2>
                        <strong>{t(`Get Started with Sweden Relocators’ EOR & Payroll
                          Portal`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />

                      <strong className=" m-0 tw-text-black">{t(`Sign Up as a Company on Our Portal:`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Visit our website to create an account as a company.
                            Once registered, you can start adding employees to
                            your portal and managing your international
                            workforce.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-black">{t(`Add Employee Information:`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Use our streamlined portal to add employee details,
                            including salaries, benefits, and contract terms.
                            Our system captures everything needed for compliant
                            payroll and benefits processing.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <p className=" tw-text-gray">
                        <br />
                      </p>
                    </div>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-10 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={eor3}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <br />
                        <span className=" tw-flex tw-items-center tw-gap-2">
                          {" "}
                          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                         {t(` All in One Place:`.replace(/\s+/g, ' ').trim())}
                        </span>
                        <h2 className=" tw-text-left">
                          <strong>{t(`Payroll, Benefits, and Compliance:`.replace(/\s+/g, ' ').trim())}</strong>
                        </h2>
                        <br />
                        <p className=" tw-text-gray">{t(`With our platform, you can manage payroll, tax
                          compliance, and benefits administration from a single
                          dashboard, with real-time reporting and full
                          transparency.`.replace(/\s+/g, ' ').trim())}</p>
                      </div>
                    </div>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Ongoing`.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2>
                      <strong>{t(`Support and Updates:`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />
                    <p className=" tw-text-gray">{t(`Our expert team is always available for support, ensuring
                      that your business stays compliant and adapts to any
                      changes in local labor laws or tax regulations.`.replace(/\s+/g, ' ').trim())}</p>

                    <div>
                      <p className=" tw-text-gray">
                        {t(`By choosing Sweden Relocators, your business gains`.replace(/\s+/g, ' ').trim())}
                        access to a comprehensive{" "}
                        <strong>{t(`EOR & Payroll Portal`.replace(/\s+/g, ' ').trim())}</strong> {t(`that makes global
                        workforce management seamless. Whether you're expanding
                        to Sweden or managing a multinational team, our system
                        streamlines payroll processing, tax compliance, and
                        benefits administration—all from a single platform.`.replace(/\s+/g, ' ').trim())}
                        <br />{t(`Contact us today to start your journey with Sweden
                        Relocators and see how easy managing a global workforce
                        can be with our EOR and payroll solutions.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>
                    <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">
                    <h5 className="tw-text-center tw-text-primary tw-pt-4" style = {{fontSize: '1.2em'}}>
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

                <Sidebar/>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default EORPayroll;
