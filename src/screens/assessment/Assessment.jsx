import React, { useEffect } from "react";
import Navbar from "../../components/Header/Navbar";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button";
import { GoTriangleRight } from "react-icons/go";

import tick from "../../assets/iconscout/tick.svg";
import tick2 from "../../assets/iconscout/tick2.svg";
import help from "../../assets/iconscout/help.svg";
import info from "../../assets/iconscout/information.svg";
import cross from "../../assets/iconscout/cross.svg";

import assess5 from "../../assets/iconscout/ass5.png";

import as1 from "../../assets/iconscout/ass2.png";
import as2 from "../../assets/iconscout/ass1.png";
import as3 from "../../assets/iconscout/ass3.png";
import as4 from "../../assets/iconscout/ass4.png";

import FeatureSection from "../../components/AssessFeatured";

import { Link } from "react-router-dom";
import Header from "../../components/Header_New/Header";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";

import { useTranslation } from "react-i18next";

const Assessment = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        highlightText={t("Assessments")}
        regularText={t(
          "Relocating is easier with guidance tailored to your needs. Our assessments provide clarity and confidence for your move. Trust us to make every step simpler and more informed."
        )}
        backgroundImage={homeBgImage}
      />
      <section className="md:tw-pt-4 tw-pt-8">
        <div className="container-fluid">
          <div className="row 2xl:tw-pl-[12%] md:tw-pl-[5%] tw-pl-3 tw-pr-3 2xl:tw-pr-[12%] md:tw-pr-[5%]">
            <div className="tw-px-0 tw-text-justify">
              <div className="tw-bg-white md:tw-pl-16 tw-pl-6 md:tw-pr-16 tw-pr-6 tw-pt-14">
                <div>
                  <span>
                    {t("--Assessment")}
                    <br />
                  </span>
                  <h1 className="tw-mt-2 tw-items-center tw-font-bold tw-text-left tw-text-2xl md:tw-flex tw-block tw-gap-2 tw-text-gray-dark tw-m-0">
                    <img src={tick2} className="tw-w-10" alt="" />
                    {t("Check Your Eligibility Before Proceeding with Our Services")}
                  </h1>

                  <div className="row tw-flex tw-items-center tw-justify-center tw-mb-6 tw-px-4 lg:tw-px-20">
                    <div className="col-md-4 tw-w-full md:tw-w-1/3 tw-mb-4 md:tw-mb-0">
                      <div className="tw-flex tw-justify-center">
                        <img src={assess5} alt="" className="tw-w-full md:tw-w-auto" />
                      </div>
                    </div>

                    <div className="col-md-8 tw-w-full md:tw-w-2/3">
                      <p className="tw-text-gray">
                        {t(
                          `Welcome to our fully digital eligibility assessment tool! Designed to streamline the process of relocating to Sweden, this tool helps you determine whether you meet the basic requirements for your desired Visa or Residence Permit. Our web portal and app offer a completely online experience, ensuring that every step of your relocation journey is convenient and transparent.`
                        )}
                      </p>
                    </div>
                  </div>



                      

                  {[as1, as2, as3, as4].map((icon, index) => (
                    <div className="tw-mx-4 md:tw-mx-20  tw-ml-4" key={index}>
                      <div className="tw-flex tw-items-start">
                        <img src={icon} alt="" className="tw-w-16 md:tw-w-24" />
                        <div className="tw-ml-4 md:tw-ml-8">
                          <h5 className="tw-pt-2 tw-text-left">
                            {t(
                              [
                                "Complete the Assessment",
                                "Instant Results",
                                "Detailed Results Available",
                                "Full Control and Transparency",
                              ][index]
                            )}
                          </h5>
                          <p className="tw-text-gray">
                            {t(
                              [
                                `Use our web portal or app to easily complete the assessment and check if you meet the criteria for your desired Visa or Residence Permit. You are allowed to make up to five assessments to explore different options and scenarios.`,
                                `Receive your eligibility result instantly on your screen, giving you immediate feedback on whether you qualify.`,
                                `Your assessment result will also be available in a downloadable PDF file on both our portal and app. This document will include your assessment number and a complete summary of the information you provided in the assessment forms.`,
                                `Our platform puts you in control of your application. Track your progress, manage your information, and stay updated on every step of the process directly through our app and web portal.`,
                              ][index]
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="tw-pt-4"></div>
                  <div>
                    <FeatureSection />
                  </div>

                  <h1 className="tw-py-8 tw-mt-2 tw-items-center tw-font-bold tw-text-2xl md:tw-flex tw-block tw-gap-2 tw-text-gray-dark tw-m-0">
                    <img src={help} className="tw-w-10" alt="" />
                    {t("Need help?")}
                  </h1>
                </div>

                <div className="tw-flex tw-flex-col md:tw-flex-row tw-flex-wrap tw-mx-4 md:tw-mx-8 tw-my-4">
                  {[{ icon: tick, title: "If Eligible", text: `If you meet the criteria, sign up and book an appointment with our experts directly through the app or portal to discuss the next steps in your journey.` },
                    { icon: cross, title: "If Not Eligible or Uncertain", text: `Even if the result is negative or unclear, don't hesitate to reach out. We're here to help you explore alternative options and find the best solution for your situation.` }]
                    .map((item, index) => (
                    <div className="tw-flex-1 tw-mx-4 tw-w-full md:tw-w-1/2 tw-mb-4" key={index}>
                      <div className="tw-flex tw-items-start">
                        <img src={item.icon} alt="" className="tw-w-16 md:tw-w-24" />
                        <div className="tw-ml-4 md:tw-ml-8">
                          <h5 className="tw-pt-2 tw-text-left">{t(item.title)}</h5>
                          <p className="tw-text-gray">{t(item.text)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h1 className="tw-py-8 tw-mt-2 tw-font-bold tw-items-center tw-text-2xl md:tw-flex tw-block tw-gap-2 tw-text-gray-dark tw-m-0">
                  <img src={info} className="tw-w-10" alt="" />
                  {t(" Important Information:")}
                </h1>

                {["Legal Changes", "Cost-Effective Alternatives", "Expert Guidance"].map((title, index) => (
                  <div className="tw-bg-white tw-shadow-lg tw-rounded-md tw-py-4 tw-mb-4 px-3" key={index}>
                    <p className="tw-text-black text-sm tw-m-0">
                      <i
                        className="fa fa-circle-exclamation"
                        style={{ color: "#807DFB" }}
                      ></i>
                      <h5 className="tw-pl-1" style={{ display: "inline" }}>
                        {t(title)}
                      </h5>
                      <br />
                      <p className="tw-pt-4 tw-text-gray">
                        {t(
                          [
                            `Please note that laws and regulations may change, which could affect your eligibility assessment results.`,
                            `While you can apply for visas or residence permits directly through official government websites at a lower cost, our services provide comprehensive support to maximize your chances of success.`,
                            `Our experienced Migration and Relocation consultants will guide you through each step, ensuring your documentation is accurate and complete while helping you develop a solid strategy for your application.`,
                          ][index]
                        )}
                      </p>
                    </p>
                  </div>
                ))}

                <div className="tw-pt-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Assessment;
