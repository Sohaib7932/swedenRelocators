import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/work-agreement-between-employers.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";



import Header from "../../components/Header_New/Header";

import { motion } from "framer-motion";
import { imageVariants } from "../../utils/motion";
import ap1 from "../../assets/iconscout/ap1.png";
import ap2 from "../../assets/iconscout/ap2.png";
import ap3 from "../../assets/iconscout/ap3.png";

import asa1 from "../../assets/iconscout/asa1.png";
import asa2 from "../../assets/iconscout/asa2.png";
import asa3 from "../../assets/iconscout/asa3.png";


import Sidebar from "../../components/ScrollableBar";









import { useTranslation } from 'react-i18next'
import { PiTextAlignCenter } from "react-icons/pi";









const AppealCases = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const isleftlangue = i18n.language === 'ur';

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Asylum")}
        regularText={t(
          "Receive expert support for your appeal cases. We provide guidance to help you present a strong case during the review process."
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
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]">{t(``.replace(/\s+/g, ' ').trim())}</p>
                      {t("Asylum in Sweden")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("What We Offer")}</strong>
                    </h2>

                    <p className="tw-text-gray">{t(`If you are seeking asylum in Sweden, understanding the
  legal process and meeting requirements can be
                      overwhelming. At Sweden Relocator, our team of
                      experienced immigration specialists is here to guide you
                      through each stage of the asylum process at the Swedish
                      Migration Agency, ensuring that your case is handled with
                      the utmost care and professionalism.`.replace(/\s+/g, ' ').trim())}</p>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]">{t(``.replace(/\s+/g, ' ').trim())}</p>
                      {t("Why")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("Choose an Expert?")}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`Navigating the asylum process in Sweden can be complex,
                      with specific rules and timelines. Here’s how our expert
                      team can make a difference for you:`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t("Peace of Mind")}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">{t(`With our professional team managing your case, you can
                          focus on other aspects of settling into Sweden. We are
                          committed to ensuring your asylum application is
                          handled effectively and with compassion.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">
                      {t("Clear and Transparent Guidance")}
                    </strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">{t(`Our specialists simplify complex legal requirements,
                          ensuring you understand every step. No matter how
                          complicated your case may seem, our team is prepared
                          to help you clarify and effectively present your
                          grounds for asylum.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">
                      {t("Immediate Access to a Legal Expert")}
                    </strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li>
                        <p className="m-0 tw-text-gray">{t(`Our immigration lawyers will begin working on your
                          case as soon as you reach out, providing an immediate
                          response to your concerns and ensuring that your case
                          is prioritized and processed swiftly.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]">{t(``.replace(/\s+/g, ' ').trim())}</p>
                      {t("Who")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("Can Apply for Asylum?")}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`To apply for asylum in Sweden, you must be physically
                      present within the country or at its border. It is not
                      possible to apply from another country or at a Swedish
                      embassy abroad.`.replace(/\s+/g, ' ').trim())}</p>

                    <p className="tw-text-gray">{t(`Every asylum seeker’s case is reviewed individually, with
                      the Swedish Migration Agency granting a residence permit
                      only if the applicant meets the criteria to be considered
                      a refugee under both Swedish law and the United Nations
                      Refugee Convention.`.replace(/\s+/g, ' ').trim())}</p>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]">{t(``.replace(/\s+/g, ' ').trim())}</p>
                      {t("Refugee")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("Definition and Criteria")}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`Under Swedish law and international guidelines, a person
                      qualifies as a refugee if they face persecution or severe
                      threats in their home country based on:`.replace(/\s+/g, ' ').trim())}</p>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={asa1}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul className="tw-p-0 tw-pl-0">
                          <li className="tw-text-gray">{t("Race")}</li>
                          <li className="tw-text-gray">
                            {t("Nationality, Language, or Ethnic Group")}
                          </li>
                          <li className="tw-text-gray">{t("Religion")}</li>
                          <li className="tw-text-gray">
                            {t("Political Belief or Activism")}
                          </li>
                          <li className="tw-text-gray">{t("Gender Identity")}</li>
                          <li className="tw-text-gray">{t("Sexual Orientation")}</li>
                          <li className="tw-text-gray">
                            {t("Membership in a Particular Social Group")}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="tw-text-gray">{t(`If groups or individuals in your home country threaten you
                      or your loved ones, this can impact your application.
                      However, a positive decision requires clear evidence of
                      persecution related to one of these factors. During the
                      application process, you will be asked to describe the
                      risks you face if you were to return to your country.`.replace(/\s+/g, ' ').trim())}</p>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]">{t(``.replace(/\s+/g, ' ').trim())}</p>
                      {t("Possible")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("Outcomes of Your Application")}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`If your case is accepted, you may receive a residence
                      permit valid for either three years or 13 months,
                      depending on the specifics of your situation.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      <p className=" tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]">{t(``.replace(/\s+/g, ' ').trim())}</p>
                      {t("Step-by-Step")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong> {t("Process")}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`Follow these essential steps to apply for asylum in Sweden
                      and begin your journey toward protection and settlement.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className=" m-0 tw-text-black">
                      {t("Step 1: Presence in Sweden")}
                    </strong>

                    <ul className=" tw-p-0 tw-pl-0">
                      <li>
                        <p className=" m-0 tw-text-gray">{t(`You must be physically in Sweden or at the Swedish
                          border to apply for asylum.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={asa2}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <strong className=" m-0 tw-text-black">
                          {t("Step 2: Initial Meeting with Swedish Migration Agency")}
                        </strong>

                        <ul className=" tw-p-0 tw-pl-0">
                          <li>
                            <p className=" m-0 tw-text-gray">{t(`Once you submit your application, you will be
                              invited to an initial meeting at the Swedish
                              Migration Agency. During this meeting, you will
                              have the opportunity to select your legal
                              representative or lawyer. At this stage, you can
                              choose our experienced team to support you.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <strong className=" m-0 tw-text-black">
                      {t("Step 3: Role of Your Legal Representative")}
                    </strong>

                    <ul className=" tw-p-0 tw-pl-0">
                      <li>
                        <p className=" m-0 tw-text-gray">{t(`If you select us as your representative, we will be
                          contacted by the Migration Agency to assist with your
                          case. Our team will schedule a call with you to gather
                          details about your background and reasons for seeking
                          asylum. We will also prepare you for future interviews
                          and document submissions.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]">{t(``.replace(/\s+/g, ' ').trim())}</p>
                      {t("Our")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("Role as Your Legal Representative")}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`As your legal representative, we will provide ongoing
                      support and legal advice throughout the asylum process.
                      Here’s how we help:`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className=" m-0 tw-text-black">
                      {t("Support and Legal Advice")}
                    </strong>

                    <ul className=" tw-p-0 tw-pl-0">
                      <li>
                        <p className=" m-0 tw-text-gray">{t(`We provide ongoing support and legal advice to ensure
                          that your rights are protected throughout the asylum
                          process.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={asa3}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <strong className=" m-0 tw-text-black">
                          {t("Clarifying Grounds for Asylum")}
                        </strong>

                        <ul className=" tw-p-0 tw-pl-0">
                          <li>
                            <p className=" m-0 tw-text-gray">{t(`We will help clarify your grounds for asylum to
                              the Migration Agency, ensuring a smooth
                              application process.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                        </ul>

                        <strong className=" m-0 tw-text-black">
                          {t("Navigating Appeals")}
                        </strong>

                        <ul className=" tw-p-0 tw-pl-0">
                          <li>
                            <p className=" m-0 tw-text-gray">{t(`If your initial application is denied, we can
                              assist with appeals to both the Migration Court
                              and the Migration Court of Appeal.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]">{t(``.replace(/\s+/g, ' ').trim())}</p>
                      {t("Family")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("Reunification for Refugees")}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`Sweden recognizes family reunification as an essential
                      right for refugees. Here’s what you need to know:`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className=" m-0 tw-text-black">
                      {t("Who Can Qualify for Family Reunification?")}
                    </strong>

                    <ul className=" tw-p-0 tw-pl-0">
                      <li>
                        <p className=" m-0 tw-text-gray">{t(`Your family may be eligible for family reunification
                          if you hold a permanent or eligible temporary
                          residence permit in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className=" m-0 tw-text-black">
                      {t("For EU/EEA Citizens")}
                    </strong>

                    <ul className=" tw-p-0 tw-pl-0">
                      <li>
                        <p className=" m-0 tw-text-gray">{t(`If you are an EU/EEA citizen, you may benefit from a
                          simplified family reunification process based on the
                          right of free movement within Europe.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]">{t(``.replace(/\s+/g, ' ').trim())}</p>
                      {t("How")}
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t("We Assist You with Family Reunification")}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`Our team provides complete support for the family
                      reunification process, ensuring a smooth and efficient
                      journey:`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className=" m-0 tw-text-black">
                      {t("Application Preparation")}
                    </strong>

                    <ul className=" tw-p-0 tw-pl-0">
                      <li>
                        <p className=" m-0 tw-text-gray">{t(`We assist with preparing and submitting the residence
                          permit application for your family members, ensuring
                          all necessary documents are included.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className=" m-0 tw-text-black">
                      {t("Additional Support Services for Asylum Seekers")}
                    </strong>

                    <ul className=" tw-p-0 tw-pl-0">
                      <li>
                        <p className=" m-0 tw-text-gray">{t(`In addition to asylum and family reunification, we
                          provide relocation assistance, translation services,
                          legal aid, and counseling.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">
                      <h5 className="tw-text-center tw-text-black  tw-pt-4" style={{ fontSize: '1em', PiTextAlignCenter }}>
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

              <Sidebar />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AppealCases;
