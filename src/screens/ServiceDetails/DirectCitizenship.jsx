import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import d1 from "../../assets/images/antigua-barbuda.jpg";
import d2 from "../../assets/images/austria.jpg";
import d3 from "../../assets/images/cyprus.jpg";
import d4 from "../../assets/images/Malta.jpg";
import d5 from "../../assets/images/Montenegro.jpg";
import d6 from "../../assets/images/Saint_Kitts_and_Nevis.jpg";
import d7 from "../../assets/images/Saint_Lucia.jpg";
import d8 from "../../assets/images/Turkey.jpg";

import flag1 from "../../assets/iconscout/flag1.png";
import flag2 from "../../assets/iconscout/flag2.png";
import flag3 from "../../assets/iconscout/flag3.png";
import flag4 from "../../assets/iconscout/flag4.png";
import flag5 from "../../assets/iconscout/flag5.png";
import flag6 from "../../assets/iconscout/flag6.png";
import flag7 from "../../assets/iconscout/flag7.png";
import flag8 from "../../assets/iconscout/flag8.png";


import Sidebar from "../../components/ScrollableBar";


import cp1 from "../../assets/iconscout/cp1.png";
import cp2 from "../../assets/iconscout/cp2.png";
import cp3 from "../../assets/iconscout/cp3.png";
import cp4 from "../../assets/iconscout/cp4.png";
import cp5 from "../../assets/iconscout/cp5.png";
import cp6 from "../../assets/iconscout/cp6.png";
import cp7 from "../../assets/iconscout/cp7.png";

import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";

import { useTranslation } from 'react-i18next';
import Header from "../../components/Header_New/Header";

const DirectCitizenship = () => {
  const { t, i18n, language } = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const isleftlangue = language === 'ur';

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Direct Citizenship by Investments")}
        regularText={t(
          "Fast-track your path to citizenship through strategic investments. Our services make the process seamless and efficient."
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
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      A Selection of
                    </span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Prime Citizenship-by-Investment Programs`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    <br />
                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={cp7}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <p className="tw-text-gray">{t(`Citizenship-by-investment programs offer affluent
                          individuals and families the opportunity to acquire a
                          second or even third passport, granting them expanded
                          global mobility, business opportunities, and the same
                          rights as local citizens. These programs typically
                          require a significant financial investment in the host
                          country, such as through real estate, business
                          ventures, or government bonds, in exchange for
                          citizenship. The benefits of these programs extend
                          beyond the ability to travel visa-free to various
                          countries; they also provide access to improved
                          healthcare, education, and tax advantages.`.replace(/\s+/g, ' ').trim())}</p>
                      </div>
                    </div>
                    <br />

                    <strong className="m-0 tw-text-black">{t(`🇦🇬 Antigua and Barbuda`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Minimum Investment:`.replace(/\s+/g, ' ').trim())}</strong> USD 100,000
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Advantages:`.replace(/\s+/g, ' ').trim())}</strong>
                          Visa-free or visa-on-arrival access to 151
                          destinations, including popular business and lifestyle
                          hubs. Quick processing times and multiple investment
                          options. Favorable tax environment with no taxes on
                          worldwide income or inheritance.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`🇦🇹 Austria`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Minimum Investment:`.replace(/\s+/g, ' ').trim())}</strong> EUR 3 million
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Advantages:`.replace(/\s+/g, ' ').trim())}</strong>
                          One of the world’s strongest passports with visa-free
                          access to 187 destinations. Settlement rights in all
                          EU member states. High standards of living and
                          security, ideal for business and family life.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`🇨🇾 Cyprus`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Minimum Investment:`.replace(/\s+/g, ' ').trim())}</strong> EUR 2.15 million
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Advantages:`.replace(/\s+/g, ' ').trim())}</strong>
                          Visa-free access to 174 countries, including all EU
                          states. Right to live, work, and study in all EU
                          member countries. Strong legal and tax system,
                          beneficial for business and family relocation.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`🇲🇹 Malta`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Minimum Investment:`.replace(/\s+/g, ' ').trim())}</strong> Approximately EUR
                          1 million
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Advantages:`.replace(/\s+/g, ' ').trim())}</strong>
                          Access to the entire EU with the right to live, work,
                          and study in all member states. Visa-free or
                          visa-on-arrival access to over 180 countries.
                          High-quality healthcare and education systems, ideal
                          for family settlement.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`🇲🇪 Montenegro`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Minimum Investment:`.replace(/\s+/g, ' ').trim())}</strong> EUR 350,000
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Advantages:`.replace(/\s+/g, ' ').trim())}</strong>
                          Visa-free or visa-on-arrival access to 124 countries,
                          including Schengen Area countries. Exclusive program
                          limited to 2,000 applicants. Gateway to Europe with
                          favorable tax rates and growing economy.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`🇰🇳 St. Kitts and Nevis`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Minimum Investment:`.replace(/\s+/g, ' ').trim())}</strong> USD 150,000
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Advantages:`.replace(/\s+/g, ' ').trim())}</strong>
                          Visa-free or visa-on-arrival access to 156
                          destinations, including the UK and Schengen countries.
                          Flexible and quick application process. No personal
                          income tax, making it ideal for wealth preservation.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`🇱🇨 St. Lucia`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Minimum Investment:`.replace(/\s+/g, ' ').trim())}</strong> USD 100,000
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Advantages:`.replace(/\s+/g, ' ').trim())}</strong>
                          Visa-free or visa-on-arrival access to 146 countries
                          worldwide. Fast processing, with citizenship granted
                          in as little as four months. Attractive business
                          environment with tax incentives and financial
                          flexibility.
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`🇹🇷 Turkey`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Minimum Investment:`.replace(/\s+/g, ' ').trim())}</strong> USD 250,000 in
                          real estate
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong>{t(`Advantages:`.replace(/\s+/g, ' ').trim())}</strong>
                          Access to key Western markets and growing economic
                          opportunities. Visa-free or visa-on-arrival access to
                          111 destinations, including parts of Asia, Africa, and
                          the Middle East. Option to acquire dual citizenship,
                          with passports granted within six to nine months.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Why Choose Citizenship by Investment?`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong>{t(`Benefits of Citizenship by Investment`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    <br />
                    <p className="tw-text-gray">{t(`Each of these citizenship-by-investment programs offers
                      distinct benefits tailored to the global elite:`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Enhanced Global Mobility`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Freedom to travel visa-free or with visa-on-arrival to
                          numerous destinations.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Security and Stability`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Citizenship in politically stable countries with
                          secure legal systems.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Business Opportunities`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Access to markets across the EU, Schengen Area, and
                          beyond, fostering international business
                          opportunities.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Lifestyle Benefits`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`High standards of living, tax efficiency, access to
                          quality healthcare and education, and diverse cultural
                          experiences.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-text-left tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Why Work With
                    </span>
                    <h2 className="tw-text-left">
                      <strong>{t(`Sweden Relocators?`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    <br />

                    <p className="tw-text-gray">{t(`At Sweden Relocators, we help you select the right
                      citizenship program based on your needs, guiding you
                      through the entire application process for a smooth and
                      efficient journey toward a second citizenship.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="m-0 tw-text-black">{t(`Contact Sweden Relocators for Citizenship Assistance`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Swedish citizenship offers a host of benefits and
                          opportunities, and our team is here to make your
                          application journey as smooth as possible. Contact
                          Sweden Relocators today to discuss your path to
                          citizenship in Sweden, and let us guide you through
                          every step with confidence and clarity.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>
                  
                  </div>
                  
                  
                  <br/>
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`A SELECTION OF`.replace(/\s+/g, ' ').trim())}</span>

                  <h2>
                    <strong>{t(`Prime Citizenship Programs`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>

                  <p className=" tw-text-gray">{t(`Citizenship-by-investment programs provide ultra-wealthy
                    families with the privilege of a second or third passport,
                    which affords them all the internal rights enjoyed by
                    residents. Listed below are the details of the most credible
                    and successful citizenship programs offered by Henley &
                    Partners.`.replace(/\s+/g, ' ').trim())}</p>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>{t(`Antigua And Barbuda`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full tw-my-3"
                                src={flag1}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">{t(`Antigua and Barbuda offers one of the most competitive
                        citizenship programs in the Caribbe-an. Options start
                        from USD 100,000 and citizens of Antigua and Barbuda
                        have visa-free access to 151 destinations, including top
                        business and lifestyle destinations.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>
                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>{t(`Austria`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full tw-my-3"
                                src={flag2}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">{t(`Austria has one of the world’s strongest passports
                        providing its holders with visa-free access to 187
                        destinations worldwide, along with settlement rights in
                        all EU member states. Options for obtaining Austrian
                        citizenship start from a minimum investment of EUR 3
                        million.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>{t(`Cyprus`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full tw-my-3"
                                src={flag3}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">{t(`The Cyprus Investment Programme is one of the most
                        sought-after citizenship programs that provides
                        successful applicants with an attractive balance between
                        the capital contribution they make and the benefits they
                        receive. For a minimum contribution of EUR 2.15 million,
                        successful applicants can travel visa-free to 174
                        destinations worldwide.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>{t(`Malta`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full tw-my-3"
                                src={flag4}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">{t(`The Malta Individual Investor Program is the world’s
                        leading citizenship program. For a minimum contribution
                        of approximately EUR 1 million, successful applicants
                        can acquire Maltese citizen-ship that offers safety and
                        security by providing a better quality of life and the
                        right to live, work, and study in all EU member states.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>{t(`Montenegro`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full tw-my-3"
                                src={flag5}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">{t(`The Montenegro Citizenship-by-Investment Program offers
                        increased global mobility with visa-free or
                        visa-on-arrival access to 124 destinations including the
                        countries of Europe’s Schengen Area, as well as Russia
                        and the UAE. The program is exclusively limited to 2,000
                        applicants and a minimum contribution of EUR 350,000 is
                        required.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>{t(`St. Kitts And Nevis`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full tw-my-3"
                                src={flag6}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">{t(`St. Kitts and Nevis has one of the strongest passports
                        among all the Caribbean citizenship programs. For a
                        minimum contribution of USD 150,000, the St. Kitts and
                        Nevis Citizenship-by-Investment Program provides
                        visa-free or visa-on-arrival access to 156
                        destina-tions.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>{t(`St. Lucia`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full tw-my-3"
                                src={flag7}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">{t(`The St. Lucia Citizenship-by-Investment Program offers
                        increased global mobility and oppor-tunity by providing
                        visa-free or visa-on-arrival access to 146 destinations
                        around the world. For a contribution of USD 100,000,
                        applicants can acquire their passports in as little as
                        four months.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div className="col-md-6">
                      <h2 className=" tw-text-center">
                        <strong>{t(`Turkey`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>

                      <div className=" row">
                        <div className="col-md-8 tw-mx-auto">
                          <div className=" row">
                            <div className=" col-md-10 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full tw-my-3"
                                src={flag8}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className=" tw-text-gray tw-pt-2">{t(`The Turkey Citizenship-by-Investment Program offers
                        European citizenship and access to the Western markets.
                        The Turkish passport provides visa-free or
                        visa-on-arrival access to 111 des-tinations around the
                        world. For a real estate investment of USD 250,000,
                        passports can be ac-quired in six to nine months.`.replace(/\s+/g, ' ').trim())}</p>
                     
                    </div>
                    <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">
                    <h5 className="tw-text-center tw-pt-4" style = {{fontSize: '1.2em'}}>
                          <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                            {t('Sign Up Today!')}{" "}
                          </strong>
                          
                        </h5>
                      </Link>
                      <br />
                      <p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether you're
                        seeking assistance with relocation, permits, visas,
                        legal processes, or settling into a new life, we're here
                        to help. Our comprehensive services cover everything
                        from work and study opportunities to family
                        reunifications, business support, and much more. Let us
                        guide you every step of the way—start your seamless
                        experience now!`.replace(/\s+/g, ' ').trim())}</p>
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

export default DirectCitizenship;
