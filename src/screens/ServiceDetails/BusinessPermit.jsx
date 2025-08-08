import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/business-startup.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from 'react-i18next';

import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";

import bp1 from "../../assets/iconscout/bp1.png";
import bp2 from "../../assets/iconscout/bp2.png";
import bp3 from "../../assets/iconscout/bp3.png";
import bp4 from "../../assets/iconscout/bp4.png";
import bp5 from "../../assets/iconscout/bp5.png";
import Sidebar from "../../components/ScrollableBar";

import Header from "../../components/Header_New/Header";

const BusinessPermit = () => {

  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  const { t, i18n } = useTranslation();
  const isleftlangue = i18n.language === 'ur';

  return (
    <>{t(``.replace(/\s+/g, ' ').trim())}<Header />{t(``.replace(/\s+/g, ' ').trim())}<Banner_Page
      highlightText={t("Business Permit")}
      regularText={t(
        "Launch your entrepreneurial journey in Sweden. Our experts help you with all the necessary paperwork for a business permit."
      )}
      backgroundImage={homeBgImage}
    />{t(``.replace(/\s+/g, ' ').trim())}<div className=" ">{t(``.replace(/\s+/g, ' ').trim())}<section className="  ">{t(``.replace(/\s+/g, ' ').trim())}<div className="container-fluid">{t(``.replace(/\s+/g, ' ').trim())}<div className="row g-4">{t(``.replace(/\s+/g, ' ').trim())}<div
    className="col-md-8 tw-py-20 tw-bg-white tw-text-justify"
    style={{ direction: isleftlangue ? 'rtl' : 'ltr' }}
  >{t(``.replace(/\s+/g, ' ').trim())}<div className="  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">{t(``.replace(/\s+/g, ' ').trim())}<div>{t(``.replace(/\s+/g, ' ').trim())}<span className="tw-flex tw-items-center tw-gap-2">{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Self-Employment`.replace(/\s+/g, ' ').trim())}</span>{t(``.replace(/\s+/g, ' ').trim())}<h2 className="tw-text-left">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">
      {" "}
      {t('Residence Permit in Sweden')}
    </strong>{t(``.replace(/\s+/g, ' ').trim())}</h2>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray">{t(`If you’re a non-EU/EEA citizen aiming to start or expand a
                      business in Sweden, you will need a self-employment
                      residence permit from the Swedish Migration Agency
                      (Migrationsverket). This permit allows non-EU
                      entrepreneurs to live in Sweden while building and running
                      a business. Known for its strong economy, Sweden fosters
                      an open business environment with a thriving start-up
                      culture, robust infrastructure, and a skilled workforce,
                      making it an ideal destination for entrepreneurs.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
        {" "}
        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
       {t(` Why Choose`.replace(/\s+/g, ' ').trim())}
      </span>{t(``.replace(/\s+/g, ' ').trim())}<h2 className="tw-text-left">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">
        {" "}
        {t(`Sweden for Your Business?`.replace(/\s+/g, ' ').trim())}{" "}
      </strong>{t(``.replace(/\s+/g, ' ').trim())}</h2>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<ul className="tw-p-0 tw-pl-0 tw-pt-0">{t(``.replace(/\s+/g, ' ').trim())}<li className="tw-flex tw-items-center tw-gap-3">{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Innovative Environment:`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(`Sweden has a collaborative and transparent
                          business culture that fosters innovation and
                          creativity. The country's emphasis on open
                          communication, mutual respect, and a flat
                          organizational structure allows for free flow of ideas
                          and encourages teamwork. Swedish businesses often
                          prioritize sustainability, ethical practices, and
                          long-term value, which aligns with a broader societal
                          focus on innovation and social responsibility. The
                          culture supports entrepreneurial initiatives and
                          offers a strong ecosystem of resources.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<div className="row tw-flex tw-items-center">{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-6">{t(``.replace(/\s+/g, ' ').trim())}<div className="row ">{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-9 tw-mx-auto">{t(``.replace(/\s+/g, ' ').trim())}<motion.img
          animate={imageVariants}
          className=" tw-w-full"
          src={bp1}
          alt=""
          style={{ maxWidth: "450px" }}
        />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-6">{t(``.replace(/\s+/g, ' ').trim())}<li>{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray tw-pt-4">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Access to EU Markets:`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(`As an EU member, Sweden offers businesses
                              the significant advantage of access to a large and
                              stable market. Companies operating in Sweden can
                              freely trade within the European Union, benefiting
                              from the absence of trade barriers, customs
                              duties, and tariffs.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<li>{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray tw-pt-4">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Supportive Financial Ecosystem:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
              <br />{t(`Sweden’s financial ecosystem is highly supportive
                              of entrepreneurs and startups, offering a wide
                              range of financing options to help businesses grow
                              and thrive. Swedish institutions, both public and
                              private, provide various loans, grants, and
                              investment opportunities.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}<li>{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray tw-pt-4">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`High-Quality Infrastructure:`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(`Sweden’s advanced infrastructure and digital
                          capabilities make it a global hub for tech start-ups.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}</ul>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
        {" "}
        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
       {t(` Types of`.replace(/\s+/g, ' ').trim())}
      </span>{t(``.replace(/\s+/g, ' ').trim())}<h2 className="tw-text-left">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">
        {" "}
       {t(` Business Structures in Sweden`.replace(/\s+/g, ' ').trim())}{" "}
      </strong>{t(``.replace(/\s+/g, ' ').trim())}</h2>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<ul className="tw-p-0 tw-pl-0">{t(``.replace(/\s+/g, ' ').trim())}<li className="tw-flex tw-items-center tw-gap-3">{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Sole Trader (Enskild Firma):`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(`Ideal for single entrepreneurs who want a
                          simple business setup.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>
        {/* 
                      <div className="row tw-flex tw-items-center">{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-6">{t(``.replace(/\s+/g, ' ').trim())}<div className="row ">{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-9 tw-mx-auto">{t(``.replace(/\s+/g, ' ').trim())}<motion.img
                          animate={imageVariants}
                          className=" tw-w-full"
                          src={bp2}
                          alt=""
                          style={{ maxWidth: "450px" }}
                        />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-6">{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div> */}

        <li className="tw-pt-4">{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Trading Partnership or Limited Partnership
                            (Handelsbolag/Kommanditbolag):`.replace(/\s+/g, ' ').trim())}</strong>{" "}
          <br />{t(`Suitable for businesses with more than one owner.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<li className="tw-pt-4">{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Limited Company (Aktiebolag):`.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}</strong>{" "}
           {t(` A popular choice for those seeking limited liability
            and tax benefits.`.replace(/\s+/g, ' ').trim())}
          </p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<li className="tw-pt-4">{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Economic Association (Ekonomisk Förening):`.replace(/\s+/g, ' ').trim())}</strong>{" "}
            <br />{t(``.replace(/\s+/g, ' ').trim())}<p className="">
              {" "}
             {t(` Best for cooperatives and businesses focused on
              shared economic interests.`.replace(/\s+/g, ' ').trim())}
            </p>{t(``.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}</ul>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<div>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<span className="tw-flex tw-items-center tw-gap-2">{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Key`.replace(/\s+/g, ' ').trim())}</span>{t(``.replace(/\s+/g, ' ').trim())}<h2 className="tw-text-left">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Requirements for a Self-Employment Residence Permit`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}</h2>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<div className="row tw-flex tw-items-center">{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-6">{t(``.replace(/\s+/g, ' ').trim())}<div className="row ">{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-9 tw-mx-auto">{t(``.replace(/\s+/g, ' ').trim())}<motion.img
              animate={imageVariants}
              className=" tw-w-full"
              src={bp3}
              alt=""
              style={{ maxWidth: "450px" }}
            />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-6">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1. Valid Passport`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray tw-pt-4">{t(`You must hold a valid passport for the entire duration
                          of the permit. The permit’s validity will not exceed
                          the passport’s expiration date. Include copies of
                          relevant passport pages to confirm identity, validity,
                          and residence permits in any other countries.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      2. Ownership and Business Control`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray tw-pt-4">{t(`You must own at least 50% of the business and have full
                      decision-making authority over its operations. You should
                      also be actively involved in the day-to-day running of the
                      business and have primary responsibility for its
                      management and direction.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      3. Financial Requirements for Business and Personal
                      Support`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray tw-pt-4">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-gray">{t(`Initial Capital:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
         {t(` You must provide bank statements showing sufficient funds
          to establish and operate the business for at least two
          years.`.replace(/\s+/g, ' ').trim())}
        </p>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-gray">{t(`Personal Support:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
          <br />{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray tw-pt-4">{t(`You need sufficient personal income to support yourself
                        and any accompanying family members for the first two
                        years. Minimum estimated requirements are:`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<ul className="tw-list-disc tw-ml-5">{t(``.replace(/\s+/g, ' ').trim())}<li className=" tw-flex tw-pt-4 tw-gap-3">{t(``.replace(/\s+/g, ' ').trim())}<div>{t(``.replace(/\s+/g, ' ').trim())}<GoTriangleRight className=" tw-text-blue" />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(`SEK 200,000 for yourself`.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<li className=" tw-flex  tw-gap-3">{t(``.replace(/\s+/g, ' ').trim())}<div>{t(``.replace(/\s+/g, ' ').trim())}<GoTriangleRight className=" tw-text-blue" />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(`SEK 100,000 for a spouse/partner`.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<li className=" tw-flex  tw-gap-3">{t(``.replace(/\s+/g, ' ').trim())}<div>{t(``.replace(/\s+/g, ' ').trim())}<GoTriangleRight className=" tw-text-blue" />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(`SEK 50,000 for each accompanying child`.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}</ul>{t(``.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      4. Viable Business Plan`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray">{t(`A detailed business plan is essential. Migrationsverket
                      will assess your business plan for feasibility and
                      profitability. Include:`.replace(/\s+/g, ' ').trim())}<ul className="tw-list-disc tw-ml-5">{t(``.replace(/\s+/g, ' ').trim())}<li className=" tw-flex tw-pt-4  tw-gap-3">{t(``.replace(/\s+/g, ' ').trim())}<div>{t(``.replace(/\s+/g, ' ').trim())}<GoTriangleRight className=" tw-text-blue" />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(`Contracts with suppliers and clients`.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<li className=" tw-flex  tw-gap-3">{t(``.replace(/\s+/g, ' ').trim())}<div>{t(``.replace(/\s+/g, ' ').trim())}<GoTriangleRight className=" tw-text-blue" />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(`Premises lease agreements, if relevant`.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<li className=" tw-flex  tw-gap-3">{t(``.replace(/\s+/g, ' ').trim())}<div>{t(``.replace(/\s+/g, ' ').trim())}<GoTriangleRight className=" tw-text-blue" />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(`Necessary industry permits`.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<li className=" tw-flex  tw-gap-3">{t(``.replace(/\s+/g, ' ').trim())}<div>{t(``.replace(/\s+/g, ' ').trim())}<GoTriangleRight className=" tw-text-blue" />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(`Financial projections, such as an investment budget,
                          liquidity budget, and a projected balance sheet
                          (profit and loss)`.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}</ul>{t(`The business must be expected to generate sufficient
                      profits to cover both business operations and personal
                      living expenses.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      5. Relevant Experience and Skills`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray tw-pt-4">{t(`Migrationsverket requires evidence that you have the
                      necessary experience in the sector and skills to manage
                      your business effectively. Provide documentation of
                      previous work experience, education, or prior business
                      ownership relevant to the industry you plan to enter.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      6. Language Proficiency`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray tw-pt-4">{t(`While not strictly required, it’s recommended to have
                      proficiency in Swedish or English to facilitate
                      communication within the Swedish business environment and
                      with regulatory authorities.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      7. Application Fee Payment`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray tw-pt-4">{t(`The application fee for a self-employment residence permit
                      must be paid, and a receipt of this payment should be
                      included with your application.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray tw-pt-4">{t(`If you plan to live in Sweden for more than one year, you
                      must also apply for a personnummer (Swedish personal
                      identity number) by registering with the Swedish Tax
                      Agency. This number is essential for accessing healthcare,
                      opening bank accounts, and other essential services.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
          {" "}
          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
         {t(` Step-by-Step Application`.replace(/\s+/g, ' ').trim())}
        </span>{t(``.replace(/\s+/g, ' ').trim())}<h2 className="tw-text-left">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">
          {" "}
          {t(`Process for a Self-Employment Permit`.replace(/\s+/g, ' ').trim())}{" "}
        </strong>{t(``.replace(/\s+/g, ' ').trim())}</h2>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      Step 1: Gather Required Documentation`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray tw-pt-4">{t(`Compile all necessary documents, including a valid
                      passport, proof of business ownership, and your business
                      plan. Ensure that all documents meet Migrationsverket’s
                      standards and include translated copies if they’re not in
                      Swedish or English.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<div className="row tw-flex tw-items-center">{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-6">{t(``.replace(/\s+/g, ' ').trim())}<div className="row ">{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-9 tw-mx-auto">{t(``.replace(/\s+/g, ' ').trim())}<motion.img
          animate={imageVariants}
          className=" tw-w-full"
          src={bp4}
          alt=""
          style={{ maxWidth: "450px" }}
        />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-6">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                          Step 2: Submit the Application`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray tw-pt-4">{t(`Submit your application online through the
                          Migrationsverket e-service or at a Swedish embassy or
                          consulate in your home country. Attach all supporting
                          documents as required by Migrationsverket.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray">{t(``.replace(/\s+/g, ' ').trim())}<>{t(`Applicant Information:`.replace(/\s+/g, ' ').trim())}</>{t(`Include personal details,
                          business information, and financial documentation.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray ">{t(``.replace(/\s+/g, ' ').trim())}<>{t(`Business Plan and Financial Proof:`.replace(/\s+/g, ' ').trim())}</>{t(`Ensure that
                          the business plan and bank statements are accurate and
                          reflect your ability to run a sustainable business in
                          Sweden.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      Step 3: Migrationsverket Review and Evaluation`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray tw-pt-4">{t(`The Migration Agency will evaluate your application based
                      on:`.replace(/\s+/g, ' ').trim())}<ul className="tw-pl-0 tw-pt-4">{t(``.replace(/\s+/g, ' ').trim())}<li className=" tw-flex  tw-gap-3">{t(``.replace(/\s+/g, ' ').trim())}<div>{t(``.replace(/\s+/g, ' ').trim())}<GoTriangleRight className=" tw-text-blue" />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(`Financial Feasibility: Ensuring that you have enough
                          capital to sustain the business.`.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<li className=" tw-flex  tw-gap-3">{t(``.replace(/\s+/g, ' ').trim())}<div>{t(``.replace(/\s+/g, ' ').trim())}<GoTriangleRight className=" tw-text-blue" />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(`Business Viability: Reviewing your business plan to
                          determine if it can reasonably generate enough profit.`.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<li className=" tw-flex  tw-gap-3">{t(``.replace(/\s+/g, ' ').trim())}<div>{t(``.replace(/\s+/g, ' ').trim())}<GoTriangleRight className=" tw-text-blue" />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(`Personal and Business Background: Assessing your
                          industry experience, language proficiency, and
                          understanding of the Swedish business environment.`.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}</ul>{t(``.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      Step 4: Decision Notification`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray tw-pt-4">{t(`Once the application has been reviewed, Migrationsverket
                      will issue a decision. If approved, you will receive a
                      residence permit for self-employment, valid for up to two
                      years. Extensions may be granted based on the business’s
                      financial success and your continued eligibility.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
          {" "}
          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
        {(t`  Other`.replace(/\s+/g, ' ').trim())}
        </span>{t(``.replace(/\s+/g, ' ').trim())}<h2 className="tw-text-left">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">
         {t(` Business Structures in Sweden`.replace(/\s+/g, ' ').trim())}{" "}
        </strong>{t(``.replace(/\s+/g, ' ').trim())}</h2>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      Sole Trader (Enskild Firma)`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray">{t(`Ideal for individual entrepreneurs without partners.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      Trading Partnership or Limited Partnership
                      (Handelsbolag/Kommanditbolag)`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray">{t(`Suitable for partnerships or small family businesses.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      Limited Company (Aktiebolag)`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray">{t(`Commonly chosen by those seeking to grow and scale their
                      business, offering limited liability protection.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      Economic Association (Ekonomisk Förening)`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray">{t(`Generally used by cooperatives or community-driven
                      initiatives.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1`.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Advantages of Sweden’s Business Environment`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1Innovative Culture`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray">{t(`With low corruption levels and minimal bureaucracy, Sweden
                      encourages entrepreneurial innovation.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      Financial Accessibility`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray">{t(`Sweden offers a variety of financing options, including
                      bank loans, government grants, and angel investors.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      Access to Skilled Talent`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray">{t(`The country has a highly educated workforce, with strong
                      technical and managerial skills, particularly beneficial
                      for technology and innovation-focused ventures.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`1
                      Established Infrastructure`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray">{t(`Sweden’s advanced infrastructure, efficient logistics, and
                      extensive digital networks make it ideal for both domestic
                      and international business operations.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}<div>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
        {" "}
        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
        {t(`Our`.replace(/\s+/g, ' ').trim())}
      </span>{t(``.replace(/\s+/g, ' ').trim())}<h2 className="tw-text-left">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">
        {" "}
       {t(` Services Include`.replace(/\s+/g, ' ').trim())}{" "}
      </strong>{t(``.replace(/\s+/g, ' ').trim())}</h2>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<ul className="tw-p-0 tw-pl-0">{t(``.replace(/\s+/g, ' ').trim())}<li className="tw-flex tw-items-center tw-gap-3">{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Application Guidance:`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(`We assist with gathering and organizing
                          required documentation, ensuring that all requirements
                          are met according to Migrationsverket’s standards.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<li>{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray tw-pt-4">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Business Plan Development:`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(`Our team helps you create a compelling business
                          plan that not only demonstrates financial viability
                          but also aligns with Swedish market expectations. We
                          work closely with you to develop a detailed strategy
                          that highlights your business model.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<div className="row tw-flex tw-items-center">{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-6">{t(``.replace(/\s+/g, ' ').trim())}<div className="row ">{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-9 tw-mx-auto">{t(``.replace(/\s+/g, ' ').trim())}<motion.img
            animate={imageVariants}
            className=" tw-w-full"
            src={bp5}
            alt=""
            style={{ maxWidth: "450px" }}
          />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}<div className="col-md-6">{t(``.replace(/\s+/g, ' ').trim())}<li>{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray tw-pt-4">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Financial and Income Proof:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
            <br />{t(`We assist you in documenting your financial assets
                              to demonstrate your ability to support both your
                              business and your family in Sweden. This includes
                              preparing detailed financial statements, such as
                              bank account balances, investment records, and
                              proof of income, to show that you have sufficient
                              resources to cover your living expenses, business
                              operations, and any associated costs. We help you
                              compile the necessary documentation to meet
                              Swedish immigration requirements, ensuring that
                              you can demonstrate financial stability and
                              sustainability.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}<li>{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray tw-pt-4">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Ongoing Support:`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(`We offer support throughout the application
                          process, responding to inquiries from Migrationsverket
                          and guiding you through any additional requirements.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<li>{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray tw-pt-4">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Appeals Assistance:`.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(`If your application is denied, we provide
                          guidance on the appeals process, helping you
                          strengthen your case for reconsideration.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}</ul>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
          {" "}
          <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
         {t(` Why`.replace(/\s+/g, ' ').trim())}
        </span>{t(``.replace(/\s+/g, ' ').trim())}<h2 className="tw-text-left">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">
          {" "}
         {t(` Work with Sweden Relocators?`.replace(/\s+/g, ' ').trim())}{" "}
        </strong>{t(``.replace(/\s+/g, ' ').trim())}</h2>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<ul className="tw-p-0 tw-pl-0">{t(``.replace(/\s+/g, ' ').trim())}<li className="tw-flex tw-items-center tw-gap-3">{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Expert Knowledge:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
         {t(` Our team stays updated on the latest requirements from
          Migrationsverket, providing accurate and effective
          guidance.`.replace(/\s+/g, ' ').trim())}
          <p>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<li>{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Personalized Service:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
            {t(`We understand that every business is unique, and we
            tailor our support to meet the specific needs of your
            industry and personal situation.`.replace(/\s+/g, ' ').trim())}
          </p>{t(``.replace(/\s+/g, ' ').trim())}<p>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}<li>{t(``.replace(/\s+/g, ' ').trim())}<p className="m-0 tw-text-gray">{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(`Streamlined Process:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
           {t(` By managing the complexities of the application
            process, we help you avoid delays and increase your
            likelihood of success.`.replace(/\s+/g, ' ').trim())}
            <p>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</li>{t(``.replace(/\s+/g, ' ').trim())}</ul>{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray tw-pt-4">{t(`If you’re ready to establish your business in Sweden and
                      need support with the self-employment residence permit
                      application, Sweden Relocators is here to help. Contact us
                      today to start your business journey in Sweden with
                      confidence, knowing that every aspect of your application
                      is in good hands.`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}<Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">{t(``.replace(/\s+/g, ' ').trim())}<h5 className="tw-text-center tw-pt-4" style={{ fontSize: '1em' }}>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
          {t(`Sign Up Today!`.replace(/\s+/g, ' ').trim())}{" "}
        </strong>{t(``.replace(/\s+/g, ' ').trim())}<strong className="tw-text-black">{t(``.replace(/\s+/g, ' ').trim())}</strong>{t(``.replace(/\s+/g, ' ').trim())}</h5>{t(``.replace(/\s+/g, ' ').trim())}</Link>{t(``.replace(/\s+/g, ' ').trim())}<br />{t(``.replace(/\s+/g, ' ').trim())}<p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether you're
                      seeking assistance with relocation, permits, visas, legal
                      processes, or settling into a new life, we're here to
                      help. Our comprehensive services cover everything from
                      work and study opportunities to family reunifications,
                      business support, and much more. Let us guide you every
                      step of the way—start your seamless experience now!`.replace(/\s+/g, ' ').trim())}</p>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}<Sidebar />{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}</section>{t(``.replace(/\s+/g, ' ').trim())}</div>{t(``.replace(/\s+/g, ' ').trim())}<Footer />{t(``.replace(/\s+/g, ' ').trim())}</>
  );
};

export default BusinessPermit;
