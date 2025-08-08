import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { imageVariants } from "../../utils/motion";
import Sidebar from "../../components/ScrollableBar";
import Header from "../../components/Header_New/Header";

import cp1 from "../../assets/iconscout/cp1.png";
import cp2 from "../../assets/iconscout/cp2.png";
import cp3 from "../../assets/iconscout/cp3.png";
import cp4 from "../../assets/iconscout/cp4.png";
import cp5 from "../../assets/iconscout/cp5.png";
import cp6 from "../../assets/iconscout/cp6.png";
import cp7 from "../../assets/iconscout/cp7.png";

const Citizenship = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ur";
  const { id } = useParams();

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Header />

      <Banner_Page
        highlightText={t("Citizenship")}
        regularText={t(
          "Take the final step to call Sweden your home. We guide you through the process of acquiring Swedish citizenship smoothly."
        )}
        backgroundImage={homeBgImage}
      />

      <div>
        <section>
          <div className="container-fluid">
            <div className="row g-4">
              <div
                className="col-md-8 tw-py-20 tw-bg-white tw-text-justify"
                style={{ direction: isRTL ? "rtl" : "ltr" }}
              >
                <div className="2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  {/* ---------------------------------------------------------------- */}
                  <span className="tw-flex tw-items-center tw-gap-2">
                    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    {t("Swedish Citizenship")}
                  </span>
                  <h2 className="tw-text-left">
                    <strong>
                      {t("Requirements, Application Process, and Waiting Times")}
                    </strong>
                  </h2>
                  <br />
                  <p className="tw-text-gray">
                    {t(
                      "To qualify for Swedish citizenship, applicants must meet several key requirements:"
                    )}
                  </p>

                  <strong className="tw-text-black">
                    {t("Age Requirement")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li className="tw-flex tw-items-center tw-gap-3">
                      <p className="m-0 tw-text-gray">
                        {t(
                          "You must be at least 18 years old to apply independently. Children under 18 can apply alongside a parent or guardian, with special considerations for adopted children."
                        )}
                      </p>
                    </li>
                  </ul>

                  <strong className="tw-text-black">
                    {t("Permanent Residence or Right of Residence")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li className="tw-flex tw-items-center tw-gap-3">
                      <p className="m-0 tw-text-gray">
                        <strong>{t("Residence Requirement:")}</strong>{" "}
                        {t(
                          "Applicants must hold either a permanent residence permit (permanent uppehållstillstånd) or permanent right of residence (permanent uppehållsrätt) if they are EU/EEA citizens."
                        )}
                      </p>
                    </li>
                  </ul>

                  <strong className="tw-text-black">
                    {t("Residency Duration")}
                  </strong>
                  <ul className="tw-p-0 tw-pt-4 tw-pl-0">
                    <li className="tw-flex tw-gap-3">
                      <GoTriangleRight className="tw-text-blue" />
                      <p className="m-0 tw-text-gray">
                        {t(
                          "Non-EU/EEA Citizens: Must have lived continuously in Sweden for at least five years."
                        )}
                      </p>
                    </li>
                    <li className="tw-flex tw-gap-3">
                      <GoTriangleRight className="tw-text-blue" />
                      <p className="m-0 tw-text-gray">
                        {t(
                          "EU/EEA Citizens: Typically, a minimum of five years of continuous residence with a valid right of residence."
                        )}
                      </p>
                    </li>
                    <li className="tw-flex tw-gap-3">
                      <GoTriangleRight className="tw-text-blue" />
                      <p className="m-0 tw-text-gray">
                        {t(
                          "Nordic Citizens: Generally, two years of continuous residence is sufficient."
                        )}
                      </p>
                    </li>
                    <li className="tw-flex tw-gap-3">
                      <GoTriangleRight className="tw-text-blue" />
                      <p className="m-0 tw-text-gray">
                        {t(
                          "People with Refugee Status: For recognized refugees, the waiting period may be reduced to four years."
                        )}
                      </p>
                    </li>
                  </ul>

                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-9 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className="tw-w-full"
                            src={cp1}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <strong className="tw-text-black">
                        {t("Good Conduct")}
                      </strong>
                      <ul className="tw-p-0 tw-pt-4 tw-pl-0">
                        <li className="tw-flex tw-items-center tw-gap-3">
                          <p className="m-0 tw-text-gray">
                            {t(
                              "Applicants are expected to demonstrate good conduct, meaning they should not have a recent criminal record, significant debts, or unresolved legal issues. Migrationsverket considers factors such as past fines, prison sentences, or financial obligations when assessing the applicant’s eligibility. This requirement ensures that individuals seeking to stay or invest in Sweden maintain a positive legal and financial standing, reflecting the country's commitment to upholding the integrity of its immigration and business systems. Applicants may be required to provide documentation or disclosures related to their legal history and financial status as part of the application process."
                            )}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <strong className="tw-text-black">
                    {t("Ability to Support Yourself")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li className="tw-flex tw-items-center tw-gap-3">
                      <p className="m-0 tw-text-gray">
                        {t(
                          "Generally, applicants should be financially independent and not rely on social assistance. This applies particularly to non-Nordic and non-EU/EEA applicants."
                        )}
                      </p>
                    </li>
                  </ul>

                  {/* ---------------------------------------------------------------- */}
                  <br />
                  <span className="tw-flex tw-items-center tw-gap-2">
                    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    {t("Specific Paths to Citizenship")}
                  </span>
                  <h2 className="tw-text-left">
                    <strong>
                      {t("Citizenship for Nordic Citizens")}
                    </strong>
                  </h2>
                  <br />
                  <p className="tw-text-gray">
                    {t(
                      "For citizens of Denmark, Finland, Iceland, and Norway, the process for Swedish citizenship is streamlined:"
                    )}
                  </p>

                  <strong className="tw-text-black">
                    {t("Residence Requirement")}
                  </strong>
                  <p className="tw-text-gray">
                    {t(
                      "Only two years of continuous residence in Sweden are required to qualify for certain residency benefits or permits. This relatively short period makes it easier for individuals to establish themselves in Sweden and access various opportunities,"
                    )}
                  </p>

                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-9 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className="tw-w-full"
                            src={cp2}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                        <li className="tw-flex tw-items-center tw-gap-3">
                          <p className="m-0 tw-text-gray">
                            {t(
                              "such as applying for permanent residency or other long-term residence options"
                            )}
                          </p>
                        </li>
                        <li className="tw-flex tw-pt-4 tw-gap-3">
                          <GoTriangleRight className="tw-text-blue" />
                          <p className="m-0 tw-text-gray">
                            <strong>{t("Simplified Application Process:")}</strong>{" "}
                            {t(
                              "Nordic citizens can apply directly to Migrationsverket or, if they meet the criteria, register at their local Tax Agency (Skatteverket) for simplified processing."
                            )}
                          </p>
                        </li>
                        <li className="tw-flex tw-gap-3">
                          <GoTriangleRight className="tw-text-blue" />
                          <p className="m-0 tw-text-gray">
                            <strong>{t("Automatic Naturalization:")}</strong>{" "}
                            {t(
                              "Some Nordic citizens may qualify for automatic naturalization under specific conditions."
                            )}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* ---------------------------------------------------------------- */}
                  <br />
                  <span className="tw-flex tw-items-center tw-gap-2">
                    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    {t("Citizenship")}
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t("For EU/EEA Citizens")}</strong>
                  </h2>
                  <p className="tw-text-gray">
                    {t(
                      "EU/EEA citizens can apply for Swedish citizenship after five years of continuous residence in Sweden. Requirements include:"
                    )}
                  </p>

                  <strong className="tw-text-black">
                    {t("Permanent Right of Residence")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li className="tw-flex tw-items-center tw-gap-3">
                      <p className="m-0 tw-text-gray">
                        {t(
                          "After five years of residence, EU/EEA citizens typically acquire a permanent right of residence (permanent uppehållsrätt), which is essential for the citizenship application."
                        )}
                      </p>
                    </li>
                    <li className="tw-flex tw-pt-4 tw-gap-3">
                      <GoTriangleRight className="tw-text-blue" />
                      <p className="m-0 tw-text-gray">
                        <strong>{t("Simplified Process:")}</strong>{" "}
                        {t(
                          "EU/EEA citizens may experience a slightly simplified process since they are not required to hold a residence permit due to their EU rights."
                        )}
                      </p>
                    </li>
                    <li className="tw-flex tw-gap-3">
                      <GoTriangleRight className="tw-text-blue" />
                      <p className="m-0 tw-text-gray">
                        {t(
                          "Proof of Good Conduct and Financial Independence: Similar to other applicants, EU/EEA citizens must demonstrate good conduct and generally be financially self-sufficient."
                        )}
                      </p>
                    </li>
                  </ul>

                  {/* ---------------------------------------------------------------- */}
                  <br />
                  <span className="tw-flex tw-items-center tw-gap-2">
                    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    {t("Citizenship for Individuals")}
                  </span>
                  <h2 className="tw-text-left">
                    <strong>
                      {t("With a Permanent Residence Permit")}
                    </strong>
                  </h2>
                  <br />
                  <p className="tw-text-gray">
                    {t(
                      "If you have been granted a permanent residence permit in Sweden, you may apply for citizenship once you fulfill the residency requirements:"
                    )}
                  </p>

                  <strong className="tw-text-black">
                    {t("Five-Year Residence Requirement")}
                  </strong>
                  <ul className="tw-p-0 tw-pt-4 tw-pl-0">
                    <li className="tw-flex tw-items-center tw-gap-3">
                      <p className="m-0 tw-text-gray">
                        {t(
                          "Most applicants need five years of continuous residence in Sweden to qualify for permanent residency. However, those with refugee status may qualify after just four years, reflecting Sweden's commitment to supporting individuals who have fled conflict or persecution. This shorter residency requirement for refugees is designed to help them integrate into Swedish society more quickly and establish stability after seeking asylum."
                        )}
                      </p>
                    </li>
                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className="tw-w-full"
                              src={cp3}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <li className="tw-flex tw-pt-4 tw-gap-3">
                          <div>
                            <GoTriangleRight className="tw-text-blue" />
                          </div>
                          <p className="m-0 tw-text-gray">
                            <strong>
                              {t("Documentation of Residence and Income:")}
                            </strong>{" "}
                            {t(
                              "You will need to provide evidence of your residence and financial stability during your time in Sweden."
                            )}
                          </p>
                        </li>
                        <li className="tw-flex tw-gap-3">
                          <div>
                            <GoTriangleRight className="tw-text-blue" />
                          </div>
                          <p className="m-0 tw-text-gray">
                            <strong>
                              {t("Commitment to Stay in Sweden:")}
                            </strong>{" "}
                            {t(
                              "Migrationsverket may consider factors like employment and social ties to assess your intention to remain in Sweden."
                            )}
                          </p>
                        </li>
                      </div>
                    </div>
                  </ul>

                  {/* ---------------------------------------------------------------- */}
                  <br />
                  <span className="tw-flex tw-items-center tw-gap-2">
                    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    {t("Specific Paths to Citizenship")}
                  </span>
                  <h2 className="tw-text-left">
                    <strong>
                      {t("Application Process for Swedish Citizenship")}
                    </strong>
                  </h2>
                  <br />
                  <p className="tw-text-gray">
                    {t(
                      "The application process for Swedish citizenship involves several steps to ensure you meet the eligibility criteria. Here’s an overview of the process:"
                    )}
                  </p>

                  <strong className="tw-text-black">
                    {t("Prepare Documentation")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li>
                      <p className="m-0 tw-text-gray">
                        {t(
                          "Gather all necessary documents, including a valid passport, proof of residence (such as rental agreements), employment records, and proof of income."
                        )}
                      </p>
                    </li>
                  </ul>

                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-9 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className="tw-w-full"
                            src={cp4}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <strong className="tw-text-black">
                        {t("Submit Application")}
                      </strong>
                      <ul className="tw-p-0 tw-pt-4 tw-pl-0">
                        <li>
                          <p className="m-0 tw-text-gray">
                            {t(
                              "Applications can be submitted online via Migrationsverket’s e-service or in paper format. Ensure all information is accurate, and double-check for any required documents, as incomplete applications may delay processing."
                            )}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <strong className="tw-text-black">
                    {t("Application Review")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li className="tw-flex tw-gap-3">
                      <GoTriangleRight className="tw-text-blue" />
                      <p className="m-0 tw-text-gray">
                        {t(
                          "Migrationsverket reviews the application and checks your eligibility. This review includes confirming your residence, examining your criminal record (if applicable), and verifying financial self-sufficiency."
                        )}
                      </p>
                    </li>
                    <li className="tw-flex tw-gap-3">
                      <GoTriangleRight className="tw-text-blue" />
                      <p className="m-0 tw-text-gray">
                        {t(
                          "Migrationsverket may contact you to request additional documentation if necessary."
                        )}
                      </p>
                    </li>
                  </ul>

                  <strong className="tw-text-black">
                    {t("Decision and Notification")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-10">
                    <li>
                      <p className="m-0 tw-text-gray">
                        {t(
                          "Once the review is complete, Migrationsverket will issue a decision. If approved, you will receive a certificate of Swedish citizenship. If denied, you have the right to appeal the decision."
                        )}
                      </p>
                    </li>
                  </ul>

                  {/* ---------------------------------------------------------------- */}
                  <br />
                  <span className="tw-flex tw-items-center tw-gap-2">
                    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    {t("Waiting Time for")}
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t("Citizenship Applications")}</strong>
                  </h2>
                  <br />

                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <p className="tw-text-gray">
                        {t(
                          "The waiting time for Swedish citizenship applications can vary depending on your background and whether additional information is required. As of the latest data, the average processing time for straightforward applications is typically between 12 to 24 months. However, more complex cases, such as those involving individuals with criminal records or unresolved legal issues, may take longer due to the need for additional checks and documentation. Applicants with refugee or protected status may experience a slightly shorter processing time, usually within 12 to 18 months."
                        )}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-9 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className="tw-w-full"
                            src={cp5}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <strong className="tw-text-black">
                    {t("Standard Processing")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li>
                      <p className="m-0 tw-text-gray">
                        {t(
                          "Standard processing for non-EU/EEA citizens and those without special exemptions typically takes 18-36 months."
                        )}
                      </p>
                    </li>
                  </ul>

                  <strong className="tw-text-black">
                    {t("Nordic Citizens")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li>
                      <p className="m-0 tw-text-gray">
                        {t(
                          "Nordic citizens typically experience shorter processing times, often between 6-12 months due to simplified requirements."
                        )}
                      </p>
                    </li>
                  </ul>

                  <strong className="tw-text-black">
                    {t("EU/EEA Citizens")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li>
                      <p className="m-0 tw-text-gray">
                        {t(
                          "EU/EEA citizens often have similar processing times to standard applicants, but cases are typically processed more quickly if all documentation is in order."
                        )}
                      </p>
                    </li>
                  </ul>

                  {/* ---------------------------------------------------------------- */}
                  <br />
                  <span className="tw-flex tw-items-center tw-gap-2">
                    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    {t("How Sweden Relocators Can")}
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t("Assist with Your Citizenship Application")}</strong>
                  </h2>
                  <br />
                  <p className="tw-text-gray">
                    {t(
                      "Navigating the Swedish citizenship application process can be complex and time-consuming. Sweden Relocators offers comprehensive services to help streamline your application. Here’s how we can assist:"
                    )}
                  </p>

                  <strong className="tw-text-black">
                    {t("Eligibility Assessment")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li>
                      <p className="m-0 tw-text-gray">
                        {t(
                          "We evaluate your residency history, documentation, and circumstances to confirm your eligibility and advise on any additional requirements."
                        )}
                      </p>
                    </li>
                  </ul>

                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-9 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className="tw-w-full"
                            src={cp6}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <strong className="tw-text-black">
                        {t("Document Preparation and Verification")}
                      </strong>
                      <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                        <li>
                          <p className="m-0 tw-text-gray">
                            {t(
                              "We ensure that all required documents are accurate, complete, and up-to-date, including translation of foreign documents if necessary."
                            )}
                          </p>
                        </li>
                      </ul>

                      <strong className="tw-text-black">
                        {t("Application Submission and Monitoring")}
                      </strong>
                      <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                        <li>
                          <p className="m-0 tw-text-gray">
                            {t(
                              "We submit your application and monitor its progress with Migrationsverket, providing updates and handling any requests for additional information."
                            )}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <strong className="tw-text-black">
                    {t("Support for Appeal")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li>
                      <p className="m-0 tw-text-gray">
                        {t(
                          "If your application is denied, we guide you through the appeal process and help strengthen your case for reconsideration."
                        )}
                      </p>
                    </li>
                  </ul>

                  <strong className="tw-text-black">
                    {t("Guidance on Additional Requirements")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li>
                      <p className="m-0 tw-text-gray">
                        {t(
                          "We provide personalized advice to address specific issues such as criminal records, financial concerns, or extended absences."
                        )}
                      </p>
                    </li>
                  </ul>

                  {/* ---------------------------------------------------------------- */}
                  <br />
                  <span className="tw-flex tw-items-center tw-gap-2">
                    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    {t("Why Choose")}
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t("Sweden Relocators?")}</strong>
                  </h2>
                  <br />
                  <p className="tw-text-gray">
                    {t(
                      "Sweden Relocators offers expert knowledge and personalized services to ensure a smooth Swedish citizenship application process. Here’s why you should choose us:"
                    )}
                  </p>

                  <strong className="tw-text-black">
                    {t("Expert Knowledge of Swedish Citizenship Laws")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li>
                      <p className="m-0 tw-text-gray">
                        {t(
                          "Our team is well-versed in the latest citizenship requirements, ensuring you have the best chance of success."
                        )}
                      </p>
                    </li>
                  </ul>

                  <strong className="tw-text-black">
                    {t("Comprehensive, Personalized Support")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li>
                      <p className="m-0 tw-text-gray">
                        {t(
                          "We tailor our services to meet your specific needs, whether you’re a Nordic citizen, EU resident, or permanent residence permit holder."
                        )}
                      </p>
                    </li>
                  </ul>

                  <strong className="tw-text-black">
                    {t("Streamlined Application Process")}
                  </strong>
                  <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                    <li>
                      <p className="m-0 tw-text-gray">
                        {t(
                          "We handle the details, so you can have peace of mind knowing that every step is managed professionally and efficiently."
                        )}
                      </p>
                    </li>
                  </ul>

                  {/* ---------------------------------------------------------------- */}
                  <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">
                    <h5
                      className="tw-text-center tw-text-black tw-pt-4"
                      style={{ fontSize: "1.2em" }}
                    >
                      <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                        {t("Sign Up Today!")}
                      </strong>
                    </h5>
                  </Link>
                  <br />
                  <p className="tw-text-gray">
                    {t(
                      "Sign up today and simplify your journey! Whether you're seeking assistance with relocation, permits, visas, legal processes, or settling into a new life, we're here to help. Our comprehensive services cover everything from work and study opportunities to family reunifications, business support, and much more. Let us guide you every step of the way—start your seamless experience now!"
                    )}
                  </p>
                </div>
              </div>

              <Sidebar />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Citizenship;
