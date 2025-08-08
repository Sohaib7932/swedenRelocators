import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/credit-card.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from 'react-i18next';

import Sidebar from "../../components/ScrollableBar";

import pn1 from "../../assets/iconscout/pn1.png";
import pn2 from "../../assets/iconscout/pn2.png";
import pn3 from "../../assets/iconscout/pn3.png";
import pn4 from "../../assets/iconscout/pn4.png";
import pn5 from "../../assets/iconscout/pn5.png";

import pn6 from "../../assets/iconscout/pn6.png";

import Header from "../../components/Header_New/Header";

const PersonnumerSweden = () => {
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
        highlightText={t("Relocate to Sweden")}
        regularText={t(
          "Get your unique Swedish identity number to unlock essential services. Let us simplify the registration process for you."
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
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`(Personnummer)`.replace(/\s+/g, ' ').trim())}</span>

                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`Applying for a Swedish Social Security Number
                     :`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`A personnummer is the personal identification number
                      assigned by the Swedish Tax Agency (Skatteverket) to
                      individuals registered as residents in Sweden. This unique
                      identifier is essential for everyday life in Sweden, as it
                      provides access to healthcare, banking, education, and
                      various government services. Without a personnummer,
                      navigating Swedish systems can be challenging, as it is
                      the foundation for receiving a Swedish ID card and other
                      vital services.`.replace(/\s+/g, ' ').trim())}</p>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                     {t("Why You")}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        {t("Need a Personnummer")}
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
                              src={pn1}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div> */}

                    <br />

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-pt-4 tw-text-black">{t(`Access to Healthcare:`.replace(/\s+/g, ' ').trim())}</strong>
                          <br /> {t(`The personnummer is required to register with
                          the healthcare system, enabling you to receive medical
                          care at the standard rates for Swedish residents.`.replace(/\s+/g, ' ').trim())}
                          <br />
                          <br />
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-pt-4 tw-text-black">{t(`Opening a Bank Account:`.replace(/\s+/g, ' ').trim())}</strong>
                          <br /> {t(`In Sweden, having a personnummer is typically a
                          prerequisite for opening a bank account. This account
                          is essential for managing everyday financial
                          activities, such as receiving salary payments, paying
                          household bills, and handling personal finances.
                          Without a bank account, it can be challenging to
                          navigate Sweden’s largely cashless economy, as most
                          transactions—both personal and professional—are
                          conducted electronically.`.replace(/\s+/g, ' ').trim())}
                          <br />
                          <br />
                        </p>
                      </li>

                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-12 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className="tw-justify-self-center tw-w-full"
                                src={pn6}
                                alt=""
                                style={{ maxWidth: "300px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <li>
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-pt-4 tw-text-black">{t(`Education and Social Services:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                              <br />
                             {t(` A personnummer plays a crucial role in accessing
                              both educational and social welfare systems in
                              Sweden. For children, it is essential for school
                              enrollment, enabling them to participate in
                              Sweden’s comprehensive education system. For
                              adults, the personnummer serves as a gateway to a
                              wide range of social services, such as applying
                              for unemployment benefits.`.replace(/\s+/g, ' ').trim())}
                              <br />
                              <br />
                            </p>
                          </li>
                        </div>
                      </div>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-pt-4 tw-text-black">{t(`Swedish ID Card:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                          <br />
                         {t(` Swedish ID Card: After obtaining a personnummer, you
                          become eligible to apply for a Swedish ID card, which
                          serves as an official form of identification. This
                          card significantly simplifies various aspects of daily
                          life, such as verifying your identity when shopping,
                          collecting packages from postal services, or accessing
                          public facilities and services.`.replace(/\s+/g, ' ').trim())}
                          <br />
                        </p>
                      </li>
                    </ul>
                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t('Structure of')}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {t('The Personnummer')}{" "}
                      </strong>
                    </h2>

                    <br />

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-pt-4 tw-text-black">{t(`First Six Digits:`.replace(/\s+/g, ' ').trim())}</strong>
                          <br /> {t(`The first six digits of the personnummer
                          represent the individual’s birthdate in the format
                          YYMMDD. This means the numbers correspond to the year,
                          month, and day of birth, providing a clear and
                          standardized way to identify a person's date of birth
                          at a glance. This structure makes the personnummer
                          both practical and easy to interpret across various
                          systems and services in Sweden.`.replace(/\s+/g, ' ').trim())}
                          <br />
                          <br />
                        </p>
                      </li>

                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-9 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={pn2}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <li>
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-pt-4 tw-text-black">{t(`Last Four Digits:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                              <br />
                            {t(`  Serve as a unique identifier, which also includes
                              information about gender. Odd numbers designate
                              males, while even numbers designate females.`.replace(/\s+/g, ' ').trim())}
                              <br />
                              <br />
                            </p>
                          </li>

                          <li>
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-pt-4 tw-text-black">{t(`Century Marker:`.replace(/\s+/g, ' ').trim())}</strong>
                              <br /> {t(`A hyphen ("-") is used between the
                              birthdate and the unique identifier. When a person
                              turns 100, the hyphen is replaced with a plus sign
                              (“+”) to distinguish their century of birth.`.replace(/\s+/g, ' ').trim())}
                              <br />
                              <br />
                            </p>
                          </li>
                        </div>
                      </div>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Coordination Number (samordningsnummer):`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                          <br />
                          {t(`For individuals who are staying temporarily in Sweden
                          or do not have a registered residence, a Coordination
                          Number, known as a samordningsnummer, is issued. This
                          number serves as an alternative to the personnummer,
                          enabling access to essential services and integration
                          into administrative systems. It is structured
                          similarly to the personnummer, with the key difference
                          being that 60 is added to the day of birth.`.replace(/\s+/g, ' ').trim())}
                          <br />
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Steps to Apply for a Personnummer`.replace(/\s+/g, ' ').trim())}</span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        {t('A Step-by-Step Guide')}{" "}
                      </strong>
                    </h2>

                    <br />
                    <p className="tw-text-gray">{t(`If you are planning to stay in Sweden for more than one
                      year, you can apply for a personnummer at the local
                      Skatteverket office. The requirements include:`.replace(/\s+/g, ' ').trim())}</p>
                    <strong className="m-0 tw-text-black">{t(`Proof of Residence in Sweden`.replace(/\s+/g, ' ').trim())}</strong>
                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`You need to present documentation that confirms you’ll
                          be living in Sweden for a year or longer, such as a
                          residence permit.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={pn3}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <strong className="m-0 tw-text-black">{t(`Identification Documents`.replace(/\s+/g, ' ').trim())}</strong>
                        <ul className="tw-p-0 tw-pl-0">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">{t(`A passport or national ID card is typically
                              required. For non-EU citizens, additional
                              documentation such as a residence permit is often
                              necessary.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                        </ul>
                        <strong className="m-0 tw-text-black">{t(`Supporting Documents for Family Members`.replace(/\s+/g, ' ').trim())}</strong>
                        <ul className="tw-p-0 tw-pl-0">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">{t(`If you’re moving with your family, each family
                              member will need their identification documents
                              and proof of relationship (such as marriage or
                              birth certificates).`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="tw-text-gray">{t(`The approval process can vary, and it may take several
                      weeks for your application to be processed. Once approved,
                      you will receive your personnummer by post.`.replace(/\s+/g, ' ').trim())}</p>
                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t('Swedish ID Card')}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        {t('Your Key to Accessing Services')}{" "}
                      </strong>
                    </h2>

                    <br />
                    <p className="tw-text-gray">{t(`Once you have your personnummer, you can apply for a
                      Swedish ID card, which further simplifies access to
                      various services and activities in Sweden. The ID card is
                      issued by Skatteverket and is recognized by banks,
                      healthcare providers, and other institutions.`.replace(/\s+/g, ' ').trim())}</p>
                    <strong className="m-0 tw-text-black">{t(`Requirements for Obtaining an ID Card`.replace(/\s+/g, ' ').trim())}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-gray">{t(`Personnummer:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                         {t( `Only residents with a personnummer can apply for the
                          ID card.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-gray">{t(`Proof of Payment:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                          {t(`A fee (currently around 400 SEK) must be paid before
                          your appointment.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-gray">{t(`Proof of Identity:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                          {t(`If you are a new resident, Skatteverket may require a
                          witness or additional documents to verify your
                          identity.`.replace(/\s+/g, ' ').trim())}
                        </p>
                      </li>
                    </ul>
                    <p className="tw-text-gray">{t(`The Swedish ID card provides a practical solution for
                      navigating daily life with ease. It allows you to verify
                      your identity in various situations, such as at banks,
                      when shopping, or signing important documents. It also
                      simplifies tasks like collecting packages from delivery
                      points or accessing healthcare services`.replace(/\s+/g, ' ').trim())}</p>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={pn4}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <strong className="m-0 tw-text-black">{t(`Open and Manage Bank Accounts`.replace(/\s+/g, ' ').trim())}</strong>
                        <ul className="tw-p-0 ">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">{t(`Most banks in Sweden require the Swedish ID card
                              as primary identification.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                        </ul>
                        <strong className="m-0 tw-text-black">{t(`Sign Up for Services and Contracts`.replace(/\s+/g, ' ').trim())}</strong>
                        <ul className="tw-p-0 ">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">{t(`From mobile phone plans to internet service,
                              having a Swedish ID card simplifies verification.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                        </ul>
                        <strong className="m-0 tw-text-black">{t(`Access Health Services Easily`.replace(/\s+/g, ' ').trim())}</strong>
                        <ul className="tw-p-0 ">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">{t(`The ID card is commonly used for identity
                              verification in healthcare facilities.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t('Challenges')}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {t('Without a Personnummer and ID Card')}{" "}
                      </strong>
                    </h2>

                    <br />
                    <p className="tw-text-gray">{t(`Without a personnummer, integrating into Swedish society
                      can be difficult, as most institutions and services are
                      designed to rely on this system. Common challenges
                      include:`.replace(/\s+/g, ' ').trim())}</p>
                    <strong className="m-0 tw-text-black">{t(`Banking Restrictions`.replace(/\s+/g, ' ').trim())}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Most banks will not open an account for you without a
                          personnummer and Swedish ID, and foreign
                          identification is often insufficient. This can make it
                          difficult to receive a salary, pay bills, or access
                          financial services.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={pn5}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <strong className="m-0 tw-text-black">{t(`Limited Access to Healthcare`.replace(/\s+/g, ' ').trim())}</strong>
                        <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">{t(`While emergency healthcare is available, many
                              regular services require a personnummer for full
                              access and standard rates.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                        </ul>

                        <strong className="m-0 tw-text-black">{t(`Difficulty in Renting Housing`.replace(/\s+/g, ' ').trim())}</strong>
                        <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">{t(`Many landlords require a personnummer for signing
                              lease agreements.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <strong className="m-0 tw-text-black">{t(`Educational Access for Children`.replace(/\s+/g, ' ').trim())}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Enrolling children in school can be more complex
                          without a personnummer, as it’s often required for
                          school registration.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t('How')}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        {" "}
                        {t('Sweden Relocators Can Assist You')}{" "}
                      </strong>
                    </h2>
                    <br />
                    <p className="tw-text-gray">{t(`Navigating the personnummer application process can be
                      complex, especially for foreign nationals unfamiliar with
                      Swedish administrative procedures. Sweden Relocators
                      offers a full suite of services to simplify the process:`.replace(/\s+/g, ' ').trim())}</p>
                    <strong className="m-0 tw-text-black">{t(`Document Preparation`.replace(/\s+/g, ' ').trim())}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`We ensure that you have all required documents,
                          including identity proof, residence permits, and any
                          additional paperwork needed for family members.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>
                    <strong className="m-0 tw-text-black">{t(`Application Assistance`.replace(/\s+/g, ' ').trim())}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Our team provides step-by-step guidance for submitting
                          your personnummer application and follows up with
                          Skatteverket to address any issues or delays.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>
                    <strong className="m-0 tw-text-black">{t(`Swedish ID Card Application`.replace(/\s+/g, ' ').trim())}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`Once your personnummer is approved, we help you apply
                          for your Swedish ID card, guiding you through the
                          required steps and appointment scheduling.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>
                    <strong className="m-0 tw-text-black">{t(`Bank Account Setup`.replace(/\s+/g, ' ').trim())}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`With your personnummer and ID card, we assist you in
                          opening a Swedish bank account, ensuring you meet all
                          necessary requirements for a smooth process.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>
                    <strong className="m-0 tw-text-black">{t(`Coordination Number Assistance`.replace(/\s+/g, ' ').trim())}</strong>
                    <ul className="tw-p-0 tw-pl-0 tw-pt-4">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">{t(`If you are staying temporarily in Sweden, we also help
                          you obtain a Coordination Number, facilitating access
                          to services for short-term residents.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>
                    <p className="tw-text-gray">{t(`With Sweden Relocators, you’ll have the expert support
                      needed to navigate the personnummer and Swedish ID
                      processes, ensuring that you can access essential services
                      smoothly and start your new life in Sweden with ease.`.replace(/\s+/g, ' ').trim())}</p>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t('Be sure to')}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`Contact Us`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />
                    <p className="tw-text-gray">{t(`Securing your personnummer and Swedish ID card is an
                      essential first step for anyone relocating to Sweden.
                      Contact Sweden Relocators today to learn more about how we
                      can assist you with the application process, ensuring a
                      smooth transition into the Swedish system and allowing you
                      to fully enjoy life in Sweden.`.replace(/\s+/g, ' ').trim())}</p>

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

export default PersonnumerSweden;
