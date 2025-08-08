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

import gold1 from "../../assets/iconscout/gold1.png";
import gold2 from "../../assets/iconscout/gold2.png";
import gold3 from "../../assets/iconscout/gold3.png";

import Header from "../../components/Header_New/Header";

const GoldenVisa = () => {
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
        highlightText={"Global Visit Visa"}
        regularText={
      "Effortlessly explore the world with our expert Global Visit Visa services, ensuring seamless travel to your dream destinations."
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
                    <div>
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        {t('Global Visa Services')}
                      </span>
                      <h2 className = "tw-text-left">
                        <strong>{t(`Your Gateway to Seamless International Travel`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`At Sweden Relocators, we specialize in simplifying the
                        visa application process for travelers worldwide.
                        Whether you're planning a family vacation, attending a
                        business conference, visiting friends, or joining an EU
                        family member, our comprehensive services are tailored
                        to meet your unique needs. Through our intuitive web
                        portal and mobile app, we offer a streamlined,
                        efficient, and user-friendly experience.`.replace(/\s+/g, ' ').trim())}</p>

                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        {t('Our')} 
                      </span>
                      <h2 className = "tw-text-left"><strong>{t(`Comprehensive Services`.replace(/\s+/g, ' ').trim())}</strong></h2>

                      <br />
                      <strong className=" m-0 tw-text-gray">{t(`Personalized Client ID`.replace(/\s+/g, ' ').trim())}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Upon registration, you'll receive a unique Client
                            ID, enabling you to manage multiple visa
                            applications for yourself and your family
                            simultaneously. This centralized system ensures
                            efficiency and convenience.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">{t(`Complete Application Assistance`.replace(/\s+/g, ' ').trim())}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Our experts guide you through every step of the visa
                            application process, ensuring all forms are
                            accurately completed and necessary documents are
                            compiled, reducing the risk of errors or omissions.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">{t(`Appointment Scheduling`.replace(/\s+/g, ' ').trim())}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`We handle the scheduling of appointments with
                            embassies or visa application centers (e.g., VFS
                            Global), ensuring timely submissions and adherence
                            to all procedural requirements.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">{t(`Embassy Liaison`.replace(/\s+/g, ' ').trim())}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Acting as your representative, we manage
                            communications with embassies, addressing any
                            queries or issues that may arise during the
                            application process.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">{t(`Convenient Submission Process`.replace(/\s+/g, ' ').trim())}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Access your complete application file through our
                            portal or app, or receive it via DHL. Submit your
                            application at the nearest embassy or visa
                            application center along with your original
                            passport.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">{t(`Secure Digital File Management`.replace(/\s+/g, ' ').trim())}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Your documents are securely stored in our system,
                            allowing for easy retrieval and reuse for future
                            applications. This feature is particularly
                            beneficial for frequent travelers or families
                            applying for multiple visas.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">{t(`Eligibility Assessment Tool`.replace(/\s+/g, ' ').trim())}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Utilize our Assessment Tool to determine the
                            criteria for applying for a visit visa. This feature
                            helps you understand the specific requirements and
                            increases the likelihood of a successful
                            application.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>


<br/>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        {t('Additional')}
                      </span>



                      <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                      <h2 className = "tw-text-left">
                        <strong>{t(`Support Services`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br/>

                      <strong className="tw-text-gray">{t(`Travel Insurance Arrangements`.replace(/\s+/g, ' ').trim())}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`We assist in obtaining the necessary travel
                            insurance policies required for your visa
                            application, ensuring compliance with all entry
                            requirements.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">{t(`Travel and Accommodation Reservations`.replace(/\s+/g, ' ').trim())}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Receive assistance with flight reservations and
                            hotel bookings, providing the necessary
                            confirmations to support your visa application.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>
                        </div>
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={gold1}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      
                    </div>

                    



                      <br/>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        {t('Visa')}
                      </span>
                      <h2 className = "tw-text-left">
                        <strong>{t(`Categories We Support`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br/>



                      <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={gold2}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        
                      <ul className=" tw-p-0 tw-pt-4">
  {/* List 2 */}
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`Schengen Visa (Europe)`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`United Kingdom Visa`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`United States Visa`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`Canada Visa`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`Australia Visa`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`New Zealand Visa`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`Ireland Visa`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`Japan Visa`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`South Korea Visa`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`China Visa`.replace(/\s+/g, ' ').trim())}</p>
  </li>
 
</ul>
                      </div>
                    </div>

<p className=" m-0 tw-text-gray">{t(`Contact us for assistance with other destinations`.replace(/\s+/g, ' ').trim())}</p>


<br/>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        {t('Application')}
                      </span>

                      <h2 className = "tw-text-left">
                        <strong>{t(`Purposes We Cover`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
<br/>


<div className="row tw-flex tw-items-center">


<div className="col-md-6">
<ul className=" tw-p-0 tw-pt-4">
  {/* List 1 */}
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`Tourism`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`Visiting Family or Friends`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`Joining an EU Family Member`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`Attending Conferences`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`Business Visits`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`Short-Term Work Assignments`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`Medical Treatment`.replace(/\s+/g, ' ').trim())}</p>
  </li>
  <li className=" tw-flex  tw-gap-3">
    <div>
      <GoTriangleRight className=" tw-text-blue" />
    </div>
    <p className=" m-0 tw-text-gray">{t(`Cultural or Sports Events`.replace(/\s+/g, ' ').trim())}</p>
  </li>
</ul>

                        </div>
                      <div className="col-md-6">
                        <div className="row ">


                       


                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={gold3}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                    
                    </div>




<br/>
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        {t('How to')}
                      </span>
                      <h2 className = "tw-text-left">
                        <strong>{t(`Get Started`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br/>

                      <strong className=" m-0 tw-text-gray">{t(`Register`.replace(/\s+/g, ' ').trim())}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Sign up on our website or mobile app to create your
                            account and receive your unique Client ID.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">{t(`Submit Your Application Request`.replace(/\s+/g, ' ').trim())}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Provide details about your travel plans and upload
                            the required documents through our secure platform.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">{t(`We Handle the Rest`.replace(/\s+/g, ' ').trim())}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Our team will manage the entire application process,
                            from form completion to appointment scheduling and
                            embassy communications.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <strong className=" m-0 tw-text-gray">{t(`Prepare for Your Journey`.replace(/\s+/g, ' ').trim())}</strong>
                      <ul className=" tw-p-0 ">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <p className=" m-0 tw-text-gray">{t(`Focus on your travel preparations while we ensure a
                            smooth and efficient visa application experience.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <p className=" tw-text-gray">{t(`At Sweden Relocators, we are committed to making your
                        international travel aspirations a reality. Our
                        expertise and personalized approach ensure a hassle-free
                        visa application process, allowing you to focus on what
                        truly matters—your journey.`.replace(/\s+/g, ' ').trim())}</p>
                      <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">
                      <h5 className="tw-text-center tw-text-black tw-pt-4" style = {{fontSize: '1.2em'}}>
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

                      <br />
                    </div>
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

export default GoldenVisa;
