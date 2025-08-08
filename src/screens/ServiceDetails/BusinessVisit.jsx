import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/startup-business.jpg";
import banner2 from "../../assets/images/man-searching-air-ticket-for-summer-travel.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from 'react-i18next';

import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";

import bv1 from "../../assets/iconscout/bv1.png";
import bv2 from "../../assets/iconscout/bv2.png";
import bv3 from "../../assets/iconscout/bv3.png";
import Sidebar from "../../components/ScrollableBar";

import Header from "../../components/Header_New/Header";

const BusinessVisit = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isleftlangue = i18n.language === 'ur';
  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Business Visit")}
        regularText={t(
          "Plan your business visit to Sweden efficiently. We provide support to make your short-term stays hassle-free and productive."
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
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                     {t(` Documentation`.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        {t(`Requirements for Visa Application`.replace(/\s+/g, ' ').trim())}{" "}
                      </strong>
                    </h2>
                    <br></br>
                    <p className="tw-text-gray">
                     {t(` For your visa application, certain documents must be
                      submitted to ensure a smooth process. Below is a guide
                      detailing all necessary documents, including those for
                      both applicants and sponsoring companies:`.replace(/\s+/g, ' ').trim())}
                    </p>
                    <br></br>
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                     {t(` Personal`.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                       {t(` Document Requirements`.replace(/\s+/g, ' ').trim())}{" "}
                      </strong>
                    </h2>
                    <br></br>
                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">
                            {t(`Bank Statement:`.replace(/\s+/g, ' ').trim())}
                          </strong>
                          <br /> {t(`To complete your application or prove your
                          financial stability, you may be required to submit an
                          original bank statement from the last six months. This
                          document should clearly show your account activity,
                          balance, and transactions during that period. If bank
                          statements are unavailable, you can alternatively
                          provide proof of other assets, such as investment
                          portfolios, property ownership, or other financial
                          documents that demonstrate your financial capacity.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>

                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-9 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={bv1}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <li>
                            <p className="m-0 tw-text-gray">
                              <br />
                              <strong className="tw-text-black">
                                {t(`Passport Requirements:`.replace(/\s+/g, ' ').trim())}
                              </strong>
                              <br /> Your passport must:
                              <ul className="tw-pl-0">
                                <li className=" tw-flex  tw-gap-3">
                                  <div>
                                    <GoTriangleRight className=" tw-text-blue" />
                                  </div>
                                  <p className=" m-0 tw-text-gray">
                                   {t(` Have at least two blank pages.`.replace(/\s+/g, ' ').trim())}
                                  </p>
                                </li>

                                <li className=" tw-flex  tw-gap-3">
                                  <div>
                                    <GoTriangleRight className=" tw-text-blue" />
                                  </div>
                                  <p className=" m-0 tw-text-gray">
                                    {t(`Be valid for at least three months beyond
                                    the end of your planned trip.`.replace(/\s+/g, ' ').trim())}
                                  </p>
                                </li>

                                <li className=" tw-flex  tw-gap-3">
                                  <div>
                                    <GoTriangleRight className=" tw-text-blue" />
                                  </div>
                                  <p className=" m-0 tw-text-gray">
                                    {t(`Include all previous passports from the past
                                    seven years.`.replace(/\s+/g, ' ').trim())}
                                  </p>
                                </li>

                                <li className=" tw-flex  tw-gap-3">
                                  <div>
                                    <GoTriangleRight className=" tw-text-blue" />
                                  </div>
                                  <p className=" m-0 tw-text-gray">
                                    {t(`Include all previous passports from the past
                                    seven years.`.replace(/\s+/g, ' ').trim())}
                                  </p>
                                </li>
                              </ul>
                            </p>
                          </li>
                        </div>
                      </div>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <br />{" "}
                          <strong className="tw-text-black">
                            {t(`Invitation Letter:`.replace(/\s+/g, ' ').trim())}
                          </strong>
                          <br />{t(` A formal invitation from the Swedish company or
                          individual on official letterhead. The letter should
                          include:`.replace(/\s+/g, ' ').trim())}
                          <ul className="tw-pl-0">
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                             {t(` Full address and contact details of the inviting
                              company.`.replace(/\s+/g, ' ').trim())}
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                             {t(` Name and position of the contact person or
                              signatory.`.replace(/\s+/g, ' ').trim())}
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                             {t(` Purpose and expected duration of your visit.`.replace(/\s+/g, ' ').trim())}
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              {t(`Details of who will bear travel and living
                              expenses.`.replace(/\s+/g, ' ').trim())}
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              {t(`A statement guaranteeing that the applicant will
                              depart Sweden before visa expiration.`.replace(/\s+/g, ' ').trim())}
                            </li>
                          </ul>
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <br />
                          <strong className="tw-text-black">
                           {t(` Employment Certificate:`.replace(/\s+/g, ' ').trim())}
                          </strong>
                          <br /> {t(`Proof of employment, detailing:`.replace(/\s+/g, ' ').trim())}
                          <ul className="tw-pl-0">
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              {t(`Your employment start date.`.replace(/\s+/g, ' ').trim())}
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                             {t(` Current position, salary, and purpose of travel.`.replace(/\s+/g, ' ').trim())}
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              {t(`Approval of leave for the duration of the visit.`.replace(/\s+/g, ' ').trim())}
                            </li>
                          </ul>
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <br />
                          <strong className="tw-text-black">
                            {t(`Medical Insurance:`.replace(/\s+/g, ' ').trim())}
                          </strong>
                          <br /> {t(`Travel insurance covering the entire Schengen
                          area, valid for your entire stay. The policy should
                          cover at least EUR 30,000 to cover expenses for
                          emergency medical treatment, hospital care,
                          repatriation, or death.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <br />
                          <strong className="tw-text-black">
                            {t(`Travel Ticket Reservation:`.replace(/\s+/g, ' ').trim())}
                          </strong>
                          <br /> {t(`Provide round-trip flight reservations. Final
                          tickets are not required but initial booking
                          confirmation is mandatory.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <br />{" "}
                          <strong className="tw-text-black">
                            {t(`Accommodation Proof:`.replace(/\s+/g, ' ').trim())}
                          </strong>
                          <br /> {t(`A confirmed hotel booking or another proof of
                          accommodation (primary reservation required).`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>
                    </ul>
                    <br></br>
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Additional Requirements`.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {t(`for Employers or Sponsoring Companies`.replace(/\s+/g, ' ').trim())}{" "}
                      </strong>
                    </h2>
                    <br></br>
                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">
                            {t(`Commercial Registration and Tax Card:`.replace(/\s+/g, ' ').trim())}
                          </strong>{" "}
                          {t(`Original and copy of the company’s commercial registry
                          and tax card, translated into English or Swedish, to
                          confirm the legitimacy of the business.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>
                    </ul>
                    <br></br>{" "}
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Additional Documents`.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        {t(`that May Be Required`.replace(/\s+/g, ' ').trim())}
                      </strong>
                    </h2>
                    <br></br>
                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">
                           {t(` Movement Certificate:`.replace(/\s+/g, ' ').trim())}
                          </strong>
                          <br /> {t(`A movement certificate is required in specific
                          circumstances, such as when you are a first-time
                          traveler to Sweden, your passport does not cover the
                          last seven years, or there is a gap of more than three
                          months between your current and previous passports.
                          This document helps the Swedish authorities track your
                          travel history and verify your eligibility for entry
                          or a visa. It serves as proof of your movement between
                          countries, ensuring that you meet the necessary
                          requirements for visa processing.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>

                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-9 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={bv2}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <li>
                            <p className="m-0 tw-text-gray">
                              <br />
                              <strong className="tw-text-black">
                                {t(`Other Embassy-Specified Documents:`.replace(/\s+/g, ' ').trim())}
                              </strong>{" "}
                              <br />
                              {t(`Depending on your individual situation, the
                              embassy may request additional paperwork to
                              process your visa or permit application. These
                              documents could include, but are not limited to,
                              proof of accommodation, travel insurance,
                              employment contracts, or financial documentation.
                              The specific requirements will vary based on the
                              type of visa or permit you are applying for, as
                              well as your personal circumstances. It is
                              important to carefully review the embassy's
                              guidelines and provide any additional
                              documentation as requested to ensure a smooth
                              application process.`.replace(/\s+/g, ' ').trim())}
                            </p>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </div>
                  <div>
                    <br></br>

                    <span className="tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Business Visa for Foreign Investors`.replace(/\s+/g, ' ').trim())}
                    </span>

                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                       {t(` A Swedish Business Visa for Investors`.replace(/\s+/g, ' ').trim())}
                      </strong>
                    </h2>

                    <br></br>

                    <div className="row tw-flex tw-items-center">
                      <p className="tw-text-gray">
                       {t(` A Swedish business visa is ideal for foreign nationals
                        who wish to invest in Sweden and make periodic visits to
                        manage their business interests. This visa allows
                        entrepreneurs and investors to enter Sweden for
                        short-term stays, enabling them to oversee operations,
                        meet with business partners, and participate in key
                        business activities without the need for long-term
                        residency. While the business visa does not grant
                        permission to work in Sweden, it provides flexibility
                        for individuals involved in the management, development,
                        or oversight of a Swedish business.`.replace(/\s+/g, ' ').trim())}
                      </p>

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={bv3}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <p className="tw-text-gray">
                          {t(`This visa allows multiple entries and is valid for
                          short stays of up to 90 days within a 180-day period,
                          renewable for up to five years. This flexibility is
                          especially beneficial for investors who need to
                          oversee business developments or make frequent visits
                          without obtaining a residence permit. Additionally,
                          the visa provides the opportunity to plan business
                          trips around key events and projects in Sweden,
                          ensuring ongoing engagement with local operations
                          while maintaining compliance with visa regulations.
                          This makes it a practical solution for those managing
                          investments or business interests in Sweden on a
                          regular basis.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </div>
                    </div>

                    <p className="tw-text-gray">
                      {t(`For short-term business trips lasting less than three
                      months, this visa is sufficient without the need for a
                      residence permit. However, if you plan to stay longer or
                      relocate for an extended period, a residence permit may be
                      required.`.replace(/\s+/g, ' ').trim())}
                    </p>

                    <strong className="m-0 tw-text-gray">
                     {t(` How We Assist You`.replace(/\s+/g, ' ').trim())}
                    </strong>
                    <br />

                    <ul className="tw-p-0 tw-pl-0">
                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                         {t(` Document Preparation and Submission: Assistance
                          in gathering, verifying, and submitting all required
                          documents to ensure a smooth process.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          {t(`Guidance on Financial Requirements: Advising on
                          the proof of funds and financial documentation needed
                          to meet Swedish visa requirements.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          {t(`Appointment Scheduling: Coordinating necessary
                          appointments with the Swedish embassy or consulate for
                          document submission and interviews.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className="m-0 tw-text-gray">
                          {t(`Ongoing Support and Updates: Regular updates on
                          your visa status and timely responses to any
                          additional embassy requests.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>
                    </ul>

                    <p className="tw-text-gray">
                      {t(`Our comprehensive visa service allows you to focus on your
                      business objectives while we take care of the paperwork.
                      Contact us today to learn more about how we can facilitate
                      your short-term business visa to Sweden and support your
                      professional success.`.replace(/\s+/g, ' ').trim())}
                    </p>
                    <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">
                    <h5 className="tw-text-center tw-text-black tw-pt-4" style = {{fontSize: '1.2em'}}>
                        <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                          {t(`Sign Up Today!`.replace(/\s+/g, ' ').trim())}{" "}
                        </strong>
                        
                      </h5>
                    </Link>
                    <br />
                    <p className="tw-text-gray">
                    {t(`  Sign up today and simplify your journey! Whether you're
                      seeking assistance with relocation, permits, visas, legal
                      processes, or settling into a new life, we're here to
                      help. Our comprehensive services cover everything from
                      work and study opportunities to family reunifications,
                      business support, and much more. Let us guide you every
                      step of the way—start your seamless experience now!`.replace(/\s+/g, ' ').trim())}
                    </p>
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

export default BusinessVisit;
