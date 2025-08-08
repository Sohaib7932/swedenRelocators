import React from "react";
import footer_map from "../../assets/images/footer_map.png";
import { Link } from "react-router-dom";
import playstore from "../../assets/images/Google-play.png";
import applestore from "../../assets/images/App-Store.png";
import sweden from "../../assets/images/icons8-sweden.png";
import denmark from "../../assets/images/icons8-denmark.png";
import { useTranslation } from 'react-i18next';


import Facebookicon from "../../assets/icons/facebook.png";
import Twittericon from "../../assets/icons/twitter.png";
import Instagramicon from "../../assets/icons/instagram.png";
import Linkedinicon from "../../assets/icons/linkedin.png";
import Youtubeicon from "../../assets/icons/youtube.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <>
        {/*footer start*/}
        <footer className="footer tw-z-50   tw-bg-primary">
          <div className="first-footer tw-pt-12">
            <div className="tw-pl-[3%] 2xl:tw-pl-[15%] md:tw-pl-[10%] 2xl:tw-pr-[15%] md:tw-pr-[10%] tw-px-0">
              <div className="row ">
                <div className="col-xs-12  col-sm-6 col-md-6 col-lg-3 widget-area">
                  <div className="widget widget_text mr-25 res-991-mr-0">
                    <h5 className=" tw-text-white">{t('About Us')}</h5>
                    <hr className=" tw-border-blue tw-border-2   tw-opacity-80 m-0 tw-w-7" />
                    <div className="textwidget widget-text tw-mt-6">
                      <p className="  tw-text-cyan-50 tw-font-light">
                        {t('We are Relocation Services Provider Company which deals with all sort of legal relocation to Sweden. We offers quality guidance, effective advice and provides information to our clients to settle down in the country.')}
                      </p>
                      <ul className=" p-0  tw-leading-2">
                        <li className=" tw-flex tw-gap-1">
                          <div>
                            <img src={sweden} alt="" />
                          </div>
                          <p className="  m-0 tw-text-white">
                            {" "}
                            REG 559025-2648
                          </p>
                        </li>
                        <li className=" tw-flex  tw-gap-1">
                          <div>
                            <img src={denmark} alt="" />
                          </div>
                          <p className=" m-0 tw-text-white">{t(`CVR 41200677`)}</p>
                        </li>
                      </ul>
                    </div>

                    <hr className=" tw-border  tw-border-gray" />
                    <div className=" tw-flex tw-justify-center">
                      <ul className="list-inline p-0  tw-flex tw-gap-2 cmt-textcolor-skincolor">
                        <li className="social-facebook tw-w-12 tw-h-9 tw-flex tw-justify-center tw-items-center ">
                          <Link
                            className=" "
                            target="_blank"
                            to="https://www.facebook.com/Swedenrelocators/"
                            rel="noopener"
                          >
                            <img src = {Facebookicon} alt="" />
                          </Link>
                        </li>
                        <li className="social-twitter tw-w-12 tw-h-9 tw-flex tw-justify-center tw-items-center ">
                          <Link
                            className="tooltip-top"
                            target="_blank"
                            to="https://twitter.com/swedenrelocator"
                            rel="noopener"
                          >
                            <img src = {Twittericon} alt="" />
                          </Link>
                        </li>
                        <li className="social-instagram tw-w-12 tw-h-9 tw-flex tw-justify-center tw-items-center ">
                          <Link
                            className="tooltip-top"
                            target="_blank"
                            to="https://www.instagram.com/sweden_relocators/"
                            rel="noopener"
                          >
                            <img src = {Instagramicon} alt="" />
                          </Link>
                        </li>
                        <li className="social-google tw-w-12 tw-h-9 tw-flex tw-justify-center tw-items-center ">
                          <Link
                            className="tooltip-top"
                            target="_blank"
                            to="https://www.youtube.com/channel/UCa5vSxO9UajNMUluDBloi2w"
                            rel="noopener"
                          >
                            <img src = {Youtubeicon} alt="" />
                          </Link>
                        </li>
                        <li className="social-google tw-w-12 tw-h-9 tw-flex tw-justify-center tw-items-center  ">
                          <Link
                            className="tooltip-top"
                            target="_blank"
                            to="https://www.linkedin.com/in/sweden-relocators-ab-b7151424"
                            rel="noopener"
                          >
                          <img src={Linkedinicon} alt="" className="w-full h-full object-fill" />


                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tw-justify-center tw-pt-4 tw-flex tw-gap-3">
                      <Link
                        to={
                          "https://apps.apple.com/ca/app/sweden-relocators/id1621885091"
                        }
                      >
                        <img
                          src={applestore}
                          alt=""
                          className=" tw-w-28 tw-object-contain"
                        />{" "}
                      </Link>
                      <Link
                        to={
                          "https://play.google.com/store/apps/details?id=se.swedenrelocators.sweden_relocators"
                        }
                      >
                        <img
                          src={playstore}
                          alt=""
                          className=" tw-w-28 tw-object-contain"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                  <div className="widget widget_nav_menu clearfix">
                    <h5 className="tw-text-white">{t('Useful Links')}</h5>
                    <hr className=" tw-border-blue tw-border-2 tw-pb-4  tw-opacity-80 m-0 tw-w-5" />
                    <ul className="  tw-pt-4">
                      <li className=" tw-flex tw-items-center  tw-gap-2">
                        <hr className=" tw-w-3 tw-opacity-75  tw-border-white  tw-border-2" />
                        <Link
                          to={"/about_us"}
                          className=" tw-text-white tw-uppercase tw-font-light "
                        >
                          {t('About US')}
                        </Link>
                      </li>
                      <li className=" tw-flex tw-items-center  tw-gap-2">
                        <hr className=" tw-w-3 tw-opacity-75  tw-border-white  tw-border-2" />
                        <Link
                          to={"/contact_us"}
                          className=" tw-text-white tw-uppercase tw-font-light "
                        >
                          {" "}
                          {t('CONTACT US')}
                        </Link>
                      </li>
                      <li className=" tw-flex tw-items-center  tw-gap-2">
                        <hr className=" tw-w-3 tw-opacity-75  tw-border-white  tw-border-2" />
                        <Link
                          to={"/services"}
                          className=" tw-text-white tw-uppercase  tw-font-light"
                        >
                          {t('Services')}
                        </Link>
                      </li>
                      <li className=" tw-flex tw-items-center  tw-gap-2">
                        <hr className=" tw-w-3 tw-opacity-75  tw-border-white  tw-border-2" />
                        <Link
                          to={"/gallery"}
                          className=" tw-text-white tw-uppercase tw-font-light "
                        >
                          {t('GALLERY')}
                        </Link>
                      </li>
                      <li className=" tw-flex tw-items-center  tw-gap-2">
                        <hr className=" tw-w-3 tw-opacity-75  tw-border-white  tw-border-2" />
                        <Link className=" tw-text-white tw-uppercase tw-font-light ">
                          {t('CAREERS')}
                        </Link>
                      </li>
                      <li className=" tw-flex tw-items-center  tw-gap-2">
                        <hr className=" tw-w-3 tw-opacity-75  tw-border-white  tw-border-2" />
                        <Link
                          to={"/blogs"}
                          className=" tw-text-white tw-uppercase tw-font-light "
                        >
                          {t('BLOG')}
                        </Link>
                      </li>
                      <li className=" tw-flex tw-items-center  tw-gap-2">
                        <hr className=" tw-w-3 tw-opacity-75  tw-border-white  tw-border-2" />
                        <Link
                          to={"/faqs"}
                          className=" tw-text-white tw-uppercase tw-font-light "
                        >
                          {t('FAQs')}
                        </Link>
                      </li>
                      <li className=" tw-flex tw-items-center  tw-gap-2">
                        <hr className=" tw-w-3 tw-opacity-75  tw-border-white  tw-border-2" />
                        <Link
                          to={"/testimonials"}
                          className=" tw-text-white tw-font-light tw-uppercase "
                        >
                          {t('TESTIMONIALS')}
                        </Link>
                      </li>
                      <li className=" tw-flex tw-items-center  tw-gap-2">
                        <hr className=" tw-w-3 tw-opacity-75  tw-border-white  tw-border-2" />
                        <Link
                          to={"/terms_conditions"}
                          className=" tw-text-white tw-font-light tw-uppercase "
                        >
                          {t('TERMS & CONDITIONS')}
                        </Link>
                      </li>
                      <li className=" tw-flex tw-items-center  tw-gap-2">
                        <hr className=" tw-w-3 tw-opacity-75  tw-border-white  tw-border-2" />
                        <Link
                          to={"/privacy_policy"}
                          className=" tw-text-white tw-font-light tw-uppercase "
                        >
                          {t('PRIVACY POLICY')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                  <div className="widget widget-recent-post clearfix">
                    <h5 className="widget-title tw-text-white">{t('Media & News')}</h5>
                    {/* <hr className=" tw-border-blue tw-border-2   tw-opacity-80 m-0 tw-w-5" /> */}
                    <ul className=" p-0 tw-mt-6 ">
                      <li className=" tw-flex tw-gap-4 ">
                        <Link to="">
                          <img
                            className="img-fluid"
                            width={140}
                            height={150}
                            src="https://swedenrelocators.se/wp-content/uploads/2021/07/business-startup-2-150x150.png"
                            alt="post-img"
                          />
                        </Link>
                        <div className=" tw-flex tw-flex-col">
                          <span className="post-date tw-text-white">
                            <i className="fa fa-calendar" />{t(`Apr 06, 2020`)}</span>
                          <Link className=" tw-text-white  tw-text-sm">
                          {t('5 Things To Keep In Mind If You Are Relocating To...')}
                          </Link>
                        </div>
                      </li>
                      <li className=" tw-flex tw-mt-3 tw-gap-4">
                        <Link to="blog-single.html">
                          <img
                            className="img-fluid"
                            width={85}
                            height={90}
                            src="https://swedenrelocators.se/wp-content/uploads/2021/07/business-startup-1-150x150.png"
                            alt="post-img"
                          />
                        </Link>
                        <div className=" tw-flex tw-flex-col">
                          <span className="post-date tw-text-white">
                            <i className="fa fa-calendar" />{t(`Apr 06, 2020`)}</span>
                          <Link to={'/blog_details/1'} className=" tw-text-white  tw-text-sm">
                            {t('5 Things To Keep In Mind If You Are Relocating To Sweden')}
                          </Link>
                          <Link to={'/blog_details/5-things-to-keep-in-mind-if-you-are-relocating-to-sweden'} className=" tw-text-white  tw-text-sm tw-mt-1">
                            {t('5 Things To Keep In Mind If You Are Relocating To Sweden (Slug)')}
                          </Link>
                        </div>
                      </li>
                      <li className=" tw-flex tw-mt-3 tw-gap-4">
                        <Link to={'/blog_details/2'}>
                          <img
                            className="img-fluid"
                            width={130}
                            height={90}
                            src="https://swedenrelocators.se/wp-content/uploads/2021/07/educational-books-150x150.png"
                            alt="post-img"
                          />
                        </Link>
                        <div className=" tw-flex tw-flex-col">
                          <span className="post-date tw-text-white">
                            <i className="fa fa-calendar" />{t(`Apr 06, 2020`)}</span>
                          <Link to={'/blog_details/3'} className=" tw-text-white  tw-text-sm">
                          {t('A Guide About Student Fee And Admissions In Sweden')}
                          </Link>
                          <Link to={'/blog_details/a-guide-about-student-fee-and-admissions-in-sweden'} className=" tw-text-white  tw-text-sm tw-mt-1">
                            {t('A Guide About Student Fee And Admissions In Sweden (Slug)')}
                          </Link>
                        </div>
                      </li>
                      <li className=" tw-flex tw-mt-3 tw-gap-4">
                        <Link to={'/blog_details/4'}>
                          <img
                            className="img-fluid"
                            width={130}
                            height={90}
                            src="https://swedenrelocators.se/wp-content/uploads/2021/07/educational-books-150x150.png"
                            alt="post-img"
                          />
                        </Link>
                        <div className=" tw-flex tw-flex-col">
                          <span className="post-date tw-text-white">
                            <i className="fa fa-calendar" />{t(`Apr 06, 2020`)}</span>
                          <Link to={'/blog_details/4'} className=" tw-text-white  tw-text-sm">
                            {t('How To Build A Successful Start-Up In Sweden')}
                          </Link>
                          <Link to={'/blog_details/how-to-build-a-successful-start-up-in-sweden'} className=" tw-text-white  tw-text-sm tw-mt-1">
                            {t('How To Build A Successful Start-Up In Sweden (Slug)')}
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                  <div className="widget contact_map clearfix">
                    <h5 className="widget-title tw-text-white">{t('Get in Touch')}</h5>
                    {/* <hr className=" tw-border-blue tw-border-2   tw-opacity-80 m-0 tw-w-5" /> */}
                    <div className=" tw-mt-5">
                      <img
                        width={257}
                        height={164}
                        className="img-fluid"
                        src={footer_map}
                        alt=""
                      />
                    </div>
                    <ul className=" tw-mt-5">
                      <li className=" tw-text-white tw-text-base">
                        <i className="cmt-textcolor-skincolor tw-text-blue fa fa-map-marker" />
                        {t('Amiralsgatan 86E 214 37 Malmö, Sweden')}
                      </li>
                      <li className=" tw-text-white tw-text-base">
                        <i className="cmt-textcolor-skincolor   tw-text-blue fa fa-map-marker" />
                        {t('Roskildevej 30B, 2620 Albertslund, Denmark')}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-footer tw-pt-8">
            <div className="container py-3">
             <div className=" row">
             {/* <div className=" col-md-8">
             <div className="row  tw-items-center no-gutters tw-bg-blue ">
               
                </div>
             </div> */}

<div className=" tw-bg-[#1A1F31]   col-md-4">
                  <aside className="widget widget-text tw-h-full p-3">
                    {/*featured-icon-box*/}
                    <div className="tw-flex  tw-gap-3">
                      <div className="featured-icon">
                        <div className=" tw-w-12 tw-h-12 tw-shadow-lg tw-bg-[#2A2F40]  tw-flex tw-justify-center tw-items-center">
                          <i className="fa fa-envelope m-0 tw-text-white" />
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          <Link
                            to={"mailto:info@swedenrelocators.se"}
                            className=" m-0 tw-text-white"
                          >{t(`info@swedenrelocators.se`)}</Link>
                        </div>
                        <div className="featured-desc">
                        <Link
                            to={"mailto:info@swedenrelocators.se"}
                            className=" m-0 tw-text-white"
                          >
                          <p className=" tw-text-white">{t('Drop Us Link Line')}</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* featured-icon-box end*/}
                  </aside>
                </div>
                <div className="  tw-bg-blue col-md-4">
                  <aside className="widget widget-text p-3">
                    {/*featured-icon-box*/}
                    <div className="tw-flex  tw-gap-3">
                      <div className="featured-icon ">
                        <div className=" tw-w-12 tw-h-12 tw-shadow-lg tw-bg-[#3388E3]  tw-flex tw-justify-center tw-items-center">
                          <i className="fa fa-phone m-0 tw-text-white" />
                        </div>
                      </div>
                      <div className="featured-content">
                        <Link
                          to={"tel:+46 723 276 276"}
                          className="featured-title"
                        >
                          <p className=" m-0 tw-text-white">{t(`+46 723 276 276`)}</p>
                        </Link>

                        <Link
                          to={"tel:+46 723 276 276"}
                          
                        >
                        <div className="featured-desc">
                          <p className=" tw-text-white">{t('Call Us Now!')}</p>
                        </div>
                        </Link>
                      </div>
                    </div>
                    {/* featured-icon-box end*/}
                  </aside>
                </div>
              <div className=" col-md-4 p-0">
              <div className="widget-area  tw-h-full tw-bg-[#1A1F31]  col-sm-12">
                  <aside className="widget p-3 widget-text">
                    {/*featured-icon-box*/}
                    <div className=" tw-flex tw-gap-3">
                      <div className="featured-icon">
                        <div className=" tw-w-12   tw-h-16 tw-shadow-lg tw-bg-[#2A2F40]  tw-flex tw-justify-center ">
                          <i className="fa  m-0 tw-text-white fa-map-marker tw-pt-6" />
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          <Link
                            to={"https://goo.gl/maps/djSuGUoQN6Bd72ri7"}
                            className="  m-0 tw-text-white"
                          >
                           {t('Amiralsgatan 86E 214 37 Malmö, Sweden')}
                          </Link>
                        </div>
                        <div className="featured-desc">
                          
                          <Link to={"https://goo.gl/maps/djSuGUoQN6Bd72ri7"}>
                          <p className="  tw-text-gray">{t('Get Direction')}</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* featured-icon-box end*/}
                  </aside>
                </div>
              </div>
             </div>
              
               
             
            </div>
          </div>
          <div className="">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className=" text-center tw-py-1">
                    <p className=" tw-text-white tw-text-sm ">
                      {t('Copyright © 2024')} &nbsp;
                      <Link
                        to="https://swedenrelocators.se"
                        className=" tw-text-white"
                      >
                        {t('SWEDEN RELOCATORS AB.')}
                      </Link>{" "}
                      {t('Powered By')} -{" "}
                      <Link
                        className=" tw-text-white"
                        to="https://swedenrelocators.se"
                      >
                        {t('SWEDEN RELOCATORS AB')}
                      </Link>{" "}
                      -{" "}
                      <Link
                        className=" tw-text-white"
                        to="https://globalvisa.eu/"
                      >
                        {t('GLOBALVISA.EU.')}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*footer end*/}
      </>
    </>
  );
};

export default Footer;