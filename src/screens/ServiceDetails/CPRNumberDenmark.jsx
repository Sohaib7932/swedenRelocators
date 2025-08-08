import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { imageVariants } from "../../utils/motion";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import Sidebar from "../../components/ScrollableBar";
import Header from "../../components/Header_New/Header";
import cprimage from "../../assets/iconscout/cprimage.png";
import cprimage2 from "../../assets/iconscout/cprimage2.png";
import cprimage3 from "../../assets/iconscout/cprimage3.png";
import cprimage4 from "../../assets/iconscout/cprimage4.png";
import { useTranslation } from "react-i18next";

const CPRNumberDenmark = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ur";
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <Banner_Page
        highlightText={t("Relocate to Denmark")}
        regularText={t(
          "Secure your Danish CPR number seamlessly. We provide guidance to ensure a smooth process for your official identification."
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
                  {/* ---------------- WHAT IS CPR NUMBER ---------------- */}
                  <span className="tw-flex tw-items-center tw-gap-2">
                    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    {t("What is a")}
                  </span>
                  <h2 className="tw-text-left">
                    <strong className="tw-text-black">
                      {t("CPR Number?")}
                    </strong>
                  </h2>
                  <br />
                  <p className="tw-text-gray">
                    {t(
                      "A CPR (Centrale Personregister) number is a unique identification number in Denmark. It is essential for individuals residing in Denmark as it facilitates seamless access to numerous public and private services. With a CPR number, you can register for healthcare, open a bank account, access insurance, and even borrow books at the library."
                    )}
                  </p>

                  {/* ---------------- CPR STRUCTURE ---------------- */}
                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <span className="tw-flex tw-items-center tw-gap-2">
                        <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                        {t("What is")}
                      </span>
                      <h2 className="tw-text-left">
                        <strong className="tw-text-black">
                          {t("CPR Number Structure")}
                        </strong>
                      </h2>
                      <br />
                      <ul className="tw-p-0">
                        <li className="tw-flex tw-items-center tw-gap-3">
                          <p className="m-0 tw-text-gray">
                            <strong className="tw-text-black">
                              {t("Ten-Digit Identifier:")}
                            </strong>{" "}
                            {t(
                              "The CPR number is a ten-digit identifier used across various Danish national systems and databases. The first six digits correspond to your date of birth, while the last four form your unique identification. The last digit of the CPR number also indicates gender: odd numbers denote male and even numbers denote female."
                            )}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-9 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className="tw-w-full"
                            src={cprimage}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ---------------- WHY & WHEN ---------------- */}
                  <br />
                  <span className="tw-flex tw-items-center tw-gap-2">
                    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    {t("Why & When?")}
                  </span>
                  <h2 className="tw-text-left">
                    <strong className="tw-text-black">
                      {t("CPR Number Requirement")}
                    </strong>
                  </h2>
                  <br />
                  <ul className="tw-p-0">
                    <li className="tw-flex tw-items-center tw-gap-3">
                      <p className="m-0 tw-text-gray">
                        <strong className="tw-text-black">
                          {t("Why Do You Need a CPR Number?")}
                        </strong>
                        <br />
                        {t(
                          "Residents in Denmark are legally obligated to have a CPR number as it is essential for:"
                        )}
                        <ul className="tw-pl-0">
                          <li className="tw-flex tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              {t("Accessing healthcare services.")}
                            </p>
                          </li>
                          <li className="tw-flex tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              {t("Opening a bank account.")}
                            </p>
                          </li>
                          <li className="tw-flex tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              {t("Registering for insurance.")}
                            </p>
                          </li>
                          <li className="tw-flex tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              {t("Borrowing books from libraries.")}
                            </p>
                          </li>
                          <li className="tw-flex tw-gap-3">
                            <GoTriangleRight className="tw-text-blue" />
                            <p className="m-0 tw-text-gray">
                              {t(
                                "Accessing most public services and signing up for digital services such as e-Boks and NemID."
                              )}
                            </p>
                          </li>
                        </ul>
                        <br />
                        {t(
                          "In Denmark, a CPR number is more than just an identification number; it serves as the gateway to integration into Danish society, allowing easy access to necessary services and a secure connection to national databases."
                        )}
                      </p>
                    </li>

                    <li>
                      <p className="m-0 tw-text-gray">
                        <strong className="tw-text-black">
                          {t("When is a CPR Number Required?")}
                        </strong>
                        <ul className="tw-pl-0">
                          <li className="tw-flex tw-gap-3">
                            <div>
                              <GoTriangleRight className="tw-text-blue" />
                            </div>
                            <p className="m-0 tw-text-gray">
                              {t(
                                "Non-EU/EEA Citizens: If you plan to stay in Denmark for more than three months, you are required to register with the Danish Civil Registration System upon arrival to obtain a CPR number."
                              )}
                            </p>
                          </li>
                          <li className="tw-flex tw-gap-3">
                            <div>
                              <GoTriangleRight className="tw-text-blue" />
                            </div>
                            <p className="m-0 tw-text-gray">
                              {t(
                                "Nordic Citizens, EU/EEA, and Swiss Citizens: If you are from a Nordic country, the EU, the EEA, or Switzerland and plan to stay in Denmark for more than six months, you must register with the Danish Civil Registration System to obtain your CPR number."
                              )}
                            </p>
                          </li>
                        </ul>
                      </p>
                    </li>
                  </ul>

                  {/* ---------------- HOW TO ---------------- */}
                  <br />
                  <span className="tw-flex tw-items-center tw-gap-2">
                    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    {t("How to")}
                  </span>
                  <h2 className="tw-text-left">
                    <strong className="tw-text-black">
                      {t("Obtain a CPR Number")}
                    </strong>
                  </h2>
                  <br />
                  <ul className="tw-p-0">
                    <li className="tw-flex tw-items-center tw-gap-3">
                      <p className="m-0 tw-text-gray">
                        <strong className="tw-text-black">
                          {t("Required Documents:")}
                        </strong>
                        <br />
                        {t(
                          "When you visit the Citizen’s Service Center to apply for your CPR number, be prepared with the following:"
                        )}
                        <ul className="tw-pl-0 tw-pt-4">
                          <li>
                            {t("Proof of Residence and Legal Documentation:")}
                          </li>
                          <ul className="tw-pl-0">
                            <li className="tw-flex tw-gap-3">
                              <GoTriangleRight className="tw-text-blue" />
                              <p className="m-0 tw-text-gray">
                                {t(
                                  "For EU/EEA and Swiss citizens: Present your registration certificate."
                                )}
                              </p>
                            </li>
                            <li className="tw-flex tw-gap-3">
                              <GoTriangleRight className="tw-text-blue" />
                              <p className="m-0 tw-text-gray">
                                {t(
                                  "For Nordic citizens: Bring proof of identification, such as a passport or Nordic ID."
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
                                    src={cprimage3}
                                    alt=""
                                    style={{ maxWidth: "450px" }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <li>
                                {t("Marital Status Documentation:")}
                              </li>
                              <ul className="tw-pl-0">
                                <li className="tw-flex tw-gap-3">
                                  <div>
                                    <GoTriangleRight className="tw-text-blue" />
                                  </div>
                                  <p className="m-0 tw-text-gray">
                                    {t(
                                      "If you are married: Bring your marriage certificate or an official copy."
                                    )}
                                  </p>
                                </li>
                                <li className="tw-flex tw-gap-3">
                                  <div>
                                    <GoTriangleRight className="tw-text-blue" />
                                  </div>
                                  <p className="m-0 tw-text-gray">
                                    {t(
                                      "If you are divorced: Provide your divorce certificate."
                                    )}
                                  </p>
                                </li>
                                <li className="tw-flex tw-gap-3">
                                  <div>
                                    <GoTriangleRight className="tw-text-blue" />
                                  </div>
                                  <p className="m-0 tw-text-gray">
                                    {t(
                                      "If you are a widow/widower: Present the death certificate of your deceased spouse."
                                    )}
                                  </p>
                                </li>
                                <li className="tw-flex tw-gap-3">
                                  <div>
                                    <GoTriangleRight className="tw-text-blue" />
                                  </div>
                                  <p className="m-0 tw-text-gray">
                                    {t(
                                      "Birth Certificate for Children: If you have children, bring their birth certificate(s)."
                                    )}
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </ul>
                      </p>
                    </li>
                  </ul>

                  <p className="tw-text-gray">
                    {t(
                      "Our team is here to assist with any questions or requirements as you navigate the process of relocating to Denmark and obtaining your CPR number. With our help, you can be assured of a smooth registration process so you can quickly access all essential services in Denmark."
                    )}
                  </p>

                  {/* ---------------- SMOOTH TRANSITION ---------------- */}
                  <br />
                  <span className="tw-flex tw-items-center tw-gap-2">
                    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    {t("A Smooth Transition")}
                  </span>
                  <h2 className="tw-text-left">
                    <strong className="tw-text-black">{t("to Denmark")}</strong>
                  </h2>
                  <br />
                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <p className="tw-text-gray">
                        {t(
                          "Moving to a new country can be both exciting and challenging. At Sweden Relocators, we provide specialized relocation assistance to make your move to Denmark as seamless as possible. Whether you're relocating for work, study, or family, our team offers a full range of services to help you settle comfortably. From securing essential documentation to finding housing, we cover every aspect of your relocation process so you can focus on enjoying your new start."
                        )}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-9 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className="tw-w-full"
                            src={cprimage2}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ---------------- OUR SERVICES ---------------- */}
                  <br />
                  <span className="tw-flex tw-items-center tw-gap-2">
                    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    {t("Our Services")}
                  </span>
                  <h2 className="tw-text-left">
                    <strong className="tw-text-black">
                      {t("For Relocation to Denmark")}
                    </strong>
                  </h2>
                  <br />

                  {/* services bullets ...  (already wrapped earlier) */}

                  {/* ---------------- WHY CHOOSE ---------------- */}
                  <span className="tw-flex tw-items-center tw-gap-2">
                    <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>
                    {t("Why Choose")}
                  </span>
                  <h2 className="tw-text-left">
                    <strong className="tw-text-black">
                      {t("Sweden Relocators?")}
                    </strong>
                  </h2>
                  <br />
                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-9 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className="tw-w-full"
                            src={cprimage4}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="tw-text-gray">
                        {t(
                          "Relocating to a new country involves more than just packing your bags. Each step of the process—securing legal documents, finding housing, and registering for local services—requires careful attention and local expertise. Sweden Relocators brings a wealth of knowledge and experience to ensure you settle into Denmark with ease."
                        )}
                      </p>
                    </div>
                  </div>

                  <p className="tw-text-gray">
                    <strong className="tw-text-black">
                      {t("Comprehensive Service")}
                    </strong>
                    <br />
                    {t(
                      "From visa assistance to housing, we cover all aspects of your relocation, offering you a one-stop solution."
                    )}
                  </p>
                  <br />
                  <p className="tw-text-gray">
                    <strong className="tw-text-black">
                      {t("Expert Guidance")}
                    </strong>
                    <br />
                    {t(
                      "Our team of professionals is well-versed in Danish regulations, ensuring you meet every requirement and avoid common pitfalls."
                    )}
                  </p>
                  <br />
                  <p className="tw-text-gray">
                    <strong className="tw-text-black">
                      {t("Personalized Support")}
                    </strong>
                    <br />
                    {t(
                      "We understand that each move is unique. Our team tailors our services to fit your individual needs, preferences, and circumstances."
                    )}
                  </p>
                  <br />
                  <p className="tw-text-gray">
                    <strong className="tw-text-black">
                      {t("Prompt Communication")}
                    </strong>
                    <br />
                    {t(
                      "We prioritize clear, timely communication, keeping you informed at every stage of the process and available to answer your questions."
                    )}
                  </p>
                  <br />
                  <p className="tw-text-gray">
                    {t(
                      "At Sweden Relocators, we are dedicated to making your relocation to Denmark as simple and successful as possible. Contact us today to begin your journey with reliable support and expert guidance."
                    )}
                  </p>

                  <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">
                    <h5
                      className="tw-text-center tw-pt-4"
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

export default CPRNumberDenmark;
