import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/family-time.png";
import banner2 from "../../assets/images/family-1.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from 'react-i18next';
import Sidebar from "../../components/ScrollableBar";

import Header from "../../components/Header_New/Header";

import fr1 from "../../assets/iconscout/fr1.png";
import fr2 from "../../assets/iconscout/fr2.png";
import fr3 from "../../assets/iconscout/fr3.png";
import fr4 from "../../assets/iconscout/fr4.png";
import fr5 from "../../assets/iconscout/fr5.png";
import fr6 from "../../assets/iconscout/fr6.png";

const FamilyRenuification = () => {
  const { t, i18n } = useTranslation();
  const isleftlangue = i18n.language === 'ur';
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Family Reunification")}
        regularText={t(
          "Reunite with your loved ones with ease. We assist you in navigating the requirements for family reunification in Sweden."
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
                <div className="  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <div>
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Family`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Reunification in Sweden:`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />
                    <p className="tw-text-gray">{t(`Sweden’s family reunification laws allow individuals
                      holding various types of residence permits—including work
                      permits, business permits, PhD and student permits, and
                      permanent residence permits—as well as refugees, to bring
                      family members to Sweden. Each case type has specific
                      requirements and is assessed under different provisions of
                      Swedish national law. This guide provides a comprehensive
                      overview of the requirements, laws, and application
                      processes involved, with specific details for each permit
                      type.`.replace(/\s+/g, ' ').trim())}</p>

                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Key Swedish laws`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Governing Family Reunification`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    <br />

                    <strong className="m-0 tw-mb-8 tw-text-black">{t(`2.1 Main Legislative Framework`.replace(/\s+/g, ' ').trim())}</strong>

                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className="m-0 tw-text-gray">
                        <>Aliens Act (Utlänningslagen):</>{t(`The main legislation
                        governing residence permits and family reunification for
                        all non-Swedish citizens.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <ul className="tw-p-0 tw-pl-0">
                      <div className="row tw-flex tw-pt-4 tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-9 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={fr1}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className="m-0 tw-text-gray">
                              <>
                                {t(`Temporary Aliens Act (Tillfälliga
                                Utlänningslagen):`.replace(/\s+/g, ' ').trim())}
                              </>{" "}
                             {t(` A temporary law affecting family reunification
                              requirements, primarily for refugees and
                              individuals needing subsidiary protection.`.replace(/\s+/g, ' ').trim())}
                            </p>
                          </li>

                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className="m-0 tw-text-gray">
                              <>
                               {t(` Swedish Nationality Act (Lag om Svenskt
                                Medborgarskap):`.replace(/\s+/g, ' ').trim())}
                              </>{" "}
                             {t(` Relevant for Swedish citizens and permanent
                              residents inviting family members.`.replace(/\s+/g, ' ').trim())}
                            </p>
                          </li>
                        </div>
                      </div>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          {t(`Social Insurance Code (Socialförsäkringsbalken):
                          Provides guidelines on acceptable income sources for
                          the maintenance requirement.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>
                    </ul>

                    <br />

                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Eligibility for`.replace(/\s+/g, ' ').trim())}</span>
                    <h2 className="tw-text-left">
                      <strong>{t(`Family Reunification`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    <br />

                    <strong className="m-0 tw-text-black">{t(`Eligible Family Members`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <>Who Can Be Sponsored for Family Reunification?</>{" "}
                          Family reunification is generally available to the
                          following family members:
                          <ul className="tw-pl-0">
                            <div className="row tw-flex tw-items-center">
                              <div className="col-md-6">
                                <div className="row ">
                                  <div className="col-md-9 tw-mx-auto">
                                    <motion.img
                                      animate={imageVariants}
                                      className=" tw-w-full"
                                      src={fr2}
                                      alt=""
                                      style={{ maxWidth: "450px" }}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-6">
                                <li className=" tw-flex  tw-gap-3">
                                  <div>
                                    <GoTriangleRight className=" tw-text-blue" />
                                  </div>
                                  <>Spouse or Registered Partner:</>{t(`Legally
                                  married or registered partners.`.replace(/\s+/g, ' ').trim())}</li>

                                <li className=" tw-flex  tw-gap-3">
                                  <div>
                                    <GoTriangleRight className=" tw-text-blue" />
                                  </div>
                                  <>Cohabiting Partner:</>{t(`Long-term,
                                  unregistered partners may qualify if the
                                  relationship is well-documented.`.replace(/\s+/g, ' ').trim())}</li>
                              </div>
                            </div>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <>Children under 18:</>{t(`Minor children of the
                              permit holder or their spouse/partner.`.replace(/\s+/g, ' ').trim())}</li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <>Parents (for Minor Permit Holders):</>{t(`For
                              permit holders under 18, parents or legal
                              guardians may be eligible.`.replace(/\s+/g, ' ').trim())}</li>
                          </ul>
                        </p>
                      </li>
                    </ul>
                    <p>
                      <br></br>
                    </p>

                    <strong className="m-0 tw-text-black">{t(`Maintenance and Housing Requirements:`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">
                          <>3.2 </> {t(`The Maintenance Requirement
                          (Försörjningskrav) is essential for most family
                          reunification applications, ensuring the primary
                          applicant has sufficient income and suitable housing
                          to support family members.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>

                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`for Family Reunification`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Application Process`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    <br />

                    <strong className="m-0 tw-text-black">
                      {" "}
                      {t("Step-by-Step Guide")}
                    </strong>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <ul className="tw-p-0 tw-pl-0">
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className="m-0 tw-text-gray">
                              <>{t("Step 1: Prepare Documentation:")}</>{t(`Gather all
                              required documents, such as passports, proof of
                              relationship (marriage or birth certificates),
                              housing agreements, and income verification.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>

                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className="m-0 tw-text-gray">
                              <>{t("Step 2: Submit Application:")}</>{t(`Applications are
                              submitted online via the Swedish Migration
                              Agency’s portal or at a Swedish embassy/consulate.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>

                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className="m-0 tw-text-gray">
                              <>{("Step 3: Migration Agency Review:")}</>{t(`The Swedish
                              Migration Agency verifies that all requirements
                              are met, assessing the applicant's income,
                              housing, and family eligibility.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>

                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className="m-0 tw-text-gray">
                              <>{t("Step 4: Decision and Notification:")}</>{t(`After
                              assessment, the agency issues a decision. If
                              approved, family members may receive residence
                              permits matching the sponsor’s permit duration.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={fr3}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />
                    {/* 

                    <div className="row tw-flex tw-items-center">
                    

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={fr4}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                     
                      </div>
                    </div> */}

                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`for Family Reunification Cases`.replace(/\s+/g, ' ').trim())}</span>
                    <h2 className="tw-text-left">
                      <strong>{t(`Specific Legal Provisions`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    <br />

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Aliens Act (Utlänningslagen):`.replace(/\s+/g, ' ').trim())}</strong>
                          <br /> {t(`The Aliens Act serves as the primary legal
                          framework for family reunification, covering income,
                          housing, and relationship verification.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Temporary Aliens Act (Tillfälliga Utlänningslagen):`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                          <br />
                         {t(` Applies stricter maintenance requirements for
                          refugees, emphasizing financial independence for
                          sponsors beyond the three-month application period.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Social Insurance Code (Socialförsäkringsbalken):`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                          <br />{t(`Defines acceptable sources of income, especially
                          relevant for sponsors relying on benefits.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`(Utlänningslagen)`.replace(/\s+/g, ' ').trim())}</span>
                    <h2 className="tw-text-left">
                      <strong>{t(`Aliens Act`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`The Aliens Act serves as the primary legal framework for
                      family reunification, covering income, housing, and
                      relationship verification.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Maintenance and Housing Standards`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Ensures financial stability and proper living
                          conditions.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Refugee Exemptions`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Refugees and those with subsidiary protection may be
                          exempt from some requirements.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Tillfälliga Utlänningslagen`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Temporary Aliens Act`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`The Temporary Aliens Act applies stricter maintenance
                      requirements for refugees, emphasizing financial
                      independence for sponsors beyond the three-month
                      application period.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Relationship and Timing Criteria`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Refugees must apply within three months of receiving
                          status for certain exemptions.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Socialförsäkringsbalken`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Social Insurance Code`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`The Social Insurance Code defines acceptable sources of
                      income, especially relevant for sponsors relying on
                      benefits.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Unemployment and Social Benefits`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`For those relying on unemployment or social benefits,
                          income requirements apply to ensure they meet
                          financial criteria.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />

                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Our`.replace(/\s+/g, ' ').trim())}</span>
                    <h2 className="tw-text-left">
                      <strong>{t(`Services Include:`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />
                  </div>

                  <strong className="m-0 tw-text-black">{t(`Eligibility Assessment`.replace(/\s+/g, ' ').trim())}</strong>

                  <ul className="tw-p-0 tw-pl-0">
                    <li className="tw-flex tw-items-center tw-gap-3">
                      <p className="m-0 tw-text-gray">{t(`We assess your specific permit type, income, housing,
                        and family eligibility to determine the best approach.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                  </ul>

                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <div className="row ">
                        <div className="col-md-9 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className=" tw-w-full"
                            src={fr5}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <strong className="m-0 tw-text-black">{t(`Document Preparation`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className="tw-p-0 tw-pl-0">
                        <li className="tw-flex tw-items-center tw-gap-3">
                          <p className="m-0 tw-text-gray">{t(`Assistance in gathering all necessary documents,
                            translating foreign documents if needed, and
                            ensuring all information is complete and accurate.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className="m-0 tw-text-black">{t(`Application Submission and Monitoring`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className="tw-p-0 tw-pl-0">
                        <li className="tw-flex tw-items-center tw-gap-3">
                          <p className="m-0 tw-text-gray">{t(`Submitting your application on your behalf and
                            following up with the Swedish Migration Agency.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>
                    </div>

                    <strong className="m-0 tw-text-black">{t(`Appeals Support`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`If your application is denied, we provide guidance
                          through the appeals process, strengthening your case
                          to meet Swedish legal standards.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Why
                    </span>
                    <h2 className="tw-text-left">
                      <strong>{t(`Choose Sweden Relocators?`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <strong className="m-0 tw-text-black">{t(`Expert Knowledge`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`We have in-depth knowledge of Swedish family
                          reunification laws and requirements.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Personalized Support`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`We tailor our assistance to your specific permit type
                          and circumstances.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Efficient Processing`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`By ensuring accuracy and compliance, we help you avoid
                          delays or rejections, making the application process
                          smoother and more efficient.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={fr6}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <span className="tw-flex tw-items-center tw-gap-2">
                          <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Contact Sweden Relocators`.replace(/\s+/g, ' ').trim())}</span>
                        <h2 className="tw-text-left">
                          <strong>{t(`Get in Touch Today`.replace(/\s+/g, ' ').trim())}</strong>
                        </h2>
                        <br />

                        <p className="tw-text-gray">{t(`If you are ready to bring your family to Sweden and
                          need guidance to navigate Swedish family reunification
                          laws, Sweden Relocators is here to help. Contact us
                          today for expert support, and let us guide you through
                          the family reunification process in Sweden, ensuring
                          all legal requirements are met for a successful
                          application.`.replace(/\s+/g, ' ').trim())}</p>
                      
                      </div>
                      <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">
                      <h7 className="tw-text-center tw-text-black tw-pt-4" style = {{fontSize: '1em'}}>
                            <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                              {t('Sign Up Today!')}{" "}
                            </strong>
                    
                          </h7>
                        </Link>
                        <br />
                        <p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether
                          you're seeking assistance with relocation, permits,
                          visas, legal processes, or settling into a new life,
                          we're here to help. Our comprehensive services cover
                          everything from work and study opportunities to family
                          reunifications, business support, and much more. Let
                          us guide you every step of the way—start your seamless
                          experience now!`.replace(/\s+/g, ' ').trim())}</p>
                    </div>
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

export default FamilyRenuification;
