import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/bootstrap.min.css";
import "./style/animate.css";
import "./style/font-awesome.css";
import "./style/themify-icons.css";
import "./style/flaticon.css";
import "./style/slick.css";
import "./style/prettyPhoto.css";
import "./style/shortcodes.css";
import "./style/main.css";
import "./style/megamenu.css";
import "./style/responsive.css";

import eorserv from "../../assets/iconscout/eorserv.png";
import logserv from "../../assets/iconscout/logserv.png";

import assess1 from "../../assets/images/BusinessAssessment.png";
import assess2 from "../../assets/images/VisitVisaAssessment.png";
import assess3 from "../../assets/images/StudyAssesmment.png";
import assess4 from "../../assets/images/WorkPermit.png";
import assess5 from "../../assets/images/ass5.png";
import assess6 from "../../assets/images/ass6.png";

import serv1 from "../../assets/iconscout/serv1.png";
import serv2 from "../../assets/iconscout/serv2.png";
import serv3 from "../../assets/iconscout/serv3.png";
import serv4 from "../../assets/iconscout/serv4.png";
import serv5 from "../../assets/iconscout/serv5.png";
import serv6 from "../../assets/iconscout/serv6.png";
import serv7 from "../../assets/iconscout/serv7.png";
import serv8 from "../../assets/iconscout/serv8.png";
import serv9 from "../../assets/iconscout/serv9.png";
import serv10 from "../../assets/iconscout/serv10.png";
import serv11 from "../../assets/iconscout/serv11.png";
import serv12 from "../../assets/iconscout/serv12.png";
import serv13 from "../../assets/iconscout/serv13.png";

import newlogo from "../../assets/iconscout/newlogo.png";

import asylumphoto from "../../assets/iconscout/asylum.png";
import personnumberphoto from "../../assets/iconscout/personnummber.png";
import businesspermit from "../../assets/iconscout/businesspermit.png";
import citzenship from "../../assets/iconscout/citizenship.png";
import eapermit from "../../assets/iconscout/eapermit.png";
import parents from "../../assets/iconscout/parents.png";
import marrigedivorce from "../../assets/iconscout/marrigedivorce.png";
import companyreg from "../../assets/iconscout/companyreg.png";
import houses from "../../assets/iconscout/houses.png";
import relocation from "../../assets/iconscout/relocation.png";
import appeals from "../../assets/iconscout/appeals.png";
import investment from "../../assets/iconscout/investment.png";
import directinvestment from "../../assets/iconscout/directinvestment.png";
import DCI from "../../assets/iconscout/property.png";
import goldenvisa from "../../assets/iconscout/goldenvisa.png";
import cpr from "../../assets/iconscout/cpr.png";
import { useTranslation } from 'react-i18next';


const FeatureSection = () => {
  const { t } = useTranslation();
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 0,
    arrows: false,
    dots: false,
    autoplay: true,
    centerMode: false,
    centerPadding: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 777,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings2 = {
    slidesToShow: 2,
    slidesToScroll: 0,
    arrows: false,
    dots: false,
    autoplay: true,
    centerMode: false,
    centerPadding: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 777,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="cmt-row features-section cmt-bgcolor-grey bg-img1 cmt-bg cmt-bgimage-yes cmt-bg-pattern clearfix">
      <div className="cmt-row-wrapper-bg-layer cmt-bg-layer"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title style2">
              <div className="title-header">
                <h5>{t("Comprehensivee Relocation and")}</h5>
                <h2 className="title">
                  {t("Immigration Services for a Seamless Move to Sweden")}
                  <br />
                 
                </h2>
              </div>
              <div className="title-desc">
              <strong> {t("Relocation Made Easy!")}</strong>
                <p className = "tw-text-justify">
                  {t(`Moving to a new country can be complex, but Sweden Relocators is here to simplify the process. From visa applications to settling into your new home, we offer tailored solutions to meet your specific needs.`)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slick Slider for feature boxes */}
        <div className="row">
          <Slider {...settings} className=" slick_slider">
            {[
              {
                img: serv1,
                flag: newlogo,
                country: "Asylum",
                description:
                  "You have to be in Sweden or on the Swedish border in order to apply for asylum and we will process it for you.",
                to: "/asylum",
              },
              {
                img: serv2,
                flag: newlogo,
                country: "Family Reunification",
                description:
                  "Family reunification is a recognized reason for the immigration of family members to a country.",
                to: "/family-reunification",
              },
              {
                img: serv3,
                flag: newlogo,
                country: "Relocate to Sweden",
                description:
                  "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
                to: "/personnumer-sweden",
              },
            ].map((feature, index) => (
              <div
                className="cmt-box-col-wrapper col-lg-12 tw-h-[300px]"
                key={index}
              >
                <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5 ">
                  <div className="cmt-box-view-content-inner">
                    <div
                      className="featured-thumbnail"
                      style={{ height: "300px" }}
                    >
                      <a href={feature.to} tabIndex="-1">
                        <img
                          className="img-fluid "
                          src={feature.img}
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="featured-content">
                      <div className="featured-content-icon_img-block">
                        <img
                          className="img-fluid tw-h-[200px]"
                          src={feature.flag}
                          alt="image"
                        />
                      </div>
                      <div className="featured-title tw-pt-4">
                        <h5 className="tw-mt-4">
                          <a
                            href={feature.to}
                            style={{ color: "black" }}
                            tabIndex="-1"

                          >
                            {t(feature.country)}
                          </a>
                        </h5>
                      </div>
                      <div className="featured-desc">
                        <p>{t(feature.description)}</p>
                      </div>
                      <a
                        className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor"
                        href={feature.to}
                        tabIndex="-1"
                      >
                        {("Read More")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <Slider {...settings} className=" slick_slider">
            {[
              {
                img: serv4,
                flag: newlogo,
                country: "Relocate to Denmark",
                to: "/cpr-number-denmark",
                description:
                  "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System in short CPR.",
              },
              {
                img: serv5,
                flag: newlogo,
                country: "Work Permit",
                to: "/work-permit",
                description:
                  "Permit To Work refers to management systems used to ensure that work is done safely and efficiently.",
              },
              {
                img: serv6,
                flag: newlogo,
                country: "Business Permit",
                to: "/business-permit",
                description:
                  "Swedish business culture is open and innovative, and starting a business there is relatively simple",
              },
            ].map((feature, index) => (
              <div
                className="cmt-box-col-wrapper col-lg-12 tw-h-[300px]"
                key={index}
              >
                <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5">
                  <div className="cmt-box-view-content-inner">
                    <div
                      className="featured-thumbnail"
                      style={{ height: "300px" }}
                    >
                      <a href={feature.to} tabIndex="-1">
                        <img
                          className="img-fluid"
                          src={feature.img}
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="featured-content">
                      <div className="featured-content-icon_img-block">
                        <img
                          className="img-fluid"
                          src={feature.flag}
                          alt="image"
                        />
                      </div>
                      <div className="featured-title tw-pt-4">
                        <h5>
                          <a
                            href={feature.to}
                            style={{ color: "black" }}
                            tabIndex="-1"
                          >
                            {t(feature.country)}
                          </a>
                        </h5>
                      </div>
                      <div className="featured-desc">
                        <p>{t(feature.description)}</p>
                      </div>
                      <a
                        className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor"
                        href={feature.to}
                        tabIndex="-1"
                      >
                        {t("Read More")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <Slider {...settings} className=" slick_slider">
            {[
              {
                img: serv7,
                flag: newlogo,
                to: "/business-visit",
                country: "Business Visit",
                description:
                  "Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.",
              },
              {
                img: serv8,
                flag: newlogo,
                to: "/citizenship",
                country: "Citizenship",
                description:
                  "When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.",
              },
              {
                img: serv9,
                flag: newlogo,
                to: "/study-in-eu",
                country: "Study in EU",
                description:
                  "If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.",
              },
            ].map((feature, index) => (
              <div
                className="cmt-box-col-wrapper col-lg-12 tw-h-[300px]"
                key={index}
              >
                <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5">
                  <div className="cmt-box-view-content-inner">
                    <div
                      className="featured-thumbnail"
                      style={{ height: "300px" }}
                    >
                      <a href={feature.to} tabIndex="-1">
                        <img
                          className="img-fluid"
                          src={feature.img}
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="featured-content">
                      <div className="featured-content-icon_img-block">
                        <img
                          className="img-fluid"
                          src={feature.flag}
                          alt="image"
                        />
                      </div>
                      <div className="featured-title tw-pt-4">
                        <h5>
                          <a
                            href={feature.to}
                            style={{ color: "black" }}
                            tabIndex="-1"
                          >
                            {t(feature.country)}
                          </a>
                        </h5>
                      </div>
                      <div className="featured-desc">
                        <p>{t(feature.description)}</p>
                      </div>
                      <a
                        className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor"
                        href={feature.to}
                        tabIndex="-1"
                      >
                        {("Read More")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <Slider {...settings} className=" slick_slider">
            {[
              {
                img: serv10,
                flag: newlogo,
                to: "/global-visit-visas",
                country: "Global Visit Visas",
                description:
                  "For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.",
              },
              {
                img: serv11,
                flag: newlogo,
                to: "/eea-permits",
                country: "EEA Permits",
                description:
                  "Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.",
              },
              {
                img: serv12,
                flag: newlogo,
                to: "/parents-eu-permit",
                country: "Parents EU Permit",
                description:
                  "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.",
              },
            ].map((feature, index) => (
              <div
                className="cmt-box-col-wrapper col-lg-12 tw-h-[300px]"
                key={index}
              >
                <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5">
                  <div className="cmt-box-view-content-inner">
                    <div
                      className="featured-thumbnail"
                      style={{ height: "300px" }}
                    >
                      <a href={feature.to} tabIndex="-1">
                        <img
                          className="img-fluid"
                          src={feature.img}
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="featured-content">
                      <div className="featured-content-icon_img-block">
                        <img
                          className="img-fluid"
                          src={feature.flag}
                          alt="image"
                        />
                      </div>
                      <div className="featured-title tw-pt-4">
                        <h5>
                          <a
                            href={feature.to}
                            style={{ color: "black" }}
                            tabIndex="-1"
                          >
                            {t(feature.country)}
                          </a>
                        </h5>
                      </div>
                      <div className="featured-desc">
                        <p>{t(feature.description)}</p>
                      </div>
                      <a
                        className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor"
                        href={feature.to}
                        tabIndex="-1"
                      >
                        {(" Read More")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <Slider {...settings} className=" slick_slider">
            {[
              {
                img: serv13,
                flag: newlogo,
                to: "/marriage-divorce",
                country: "Marriage & Divorce",
                description:
                  "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.",
              },
              {
                img: companyreg,
                flag: newlogo,
                to: "/company-registration",
                country: "Company Registration",
                description:
                  "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.",
              },
              {
                img: houses,
                flag: newlogo,
                to: "/house-offices",
                country: "House & Offices",
                description:
                  "we offer you an easy and painless solution where you can get a place to live without any worries.",
              },
            ].map((feature, index) => (
              <div
              className="cmt-box-col-wrapper col-lg-12 tw-h-[300px]"
              key={index}
            >
                <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5">
                  <div className="cmt-box-view-content-inner">
                    <div
                      className="featured-thumbnail"
                      style={{ height: "300px" }}
                    >
                      <a href={feature.to} tabIndex="-1">
                        <img
                          className="img-fluid"
                          src={feature.img}
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="featured-content">
                      <div className="featured-content-icon_img-block">
                        <img
                          className="img-fluid"
                          src={feature.flag}
                          alt="image"
                        />
                      </div>
                      <div className="featured-title tw-pt-4">
                        <h5>
                          <a
                            href={feature.to}
                            style={{ color: "black" }}
                            tabIndex="-1"
                          >
                            {t(feature.country)}
                          </a>
                        </h5>
                      </div>
                      <div className="featured-desc">
                        <p>{t(feature.description)}</p>
                      </div>
                      <a
                        className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor"
                        href={feature.to}
                        tabIndex="-1"
                      >
                        {t("Read More")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <Slider {...settings} className=" slick_slider">
            {[
              {
                img: appeals,
                flag: newlogo,
                to: "/appeal-cases",
                country: "Appeal Cases",
                description:
                  "Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.",
              },
              {
                img: relocation,
                flag: newlogo,
                to: "/eu-family-reunification",
                country: "EU Citizens Relocation",
                description:
                  "Family reunification means that a family that has been split up can apply to be allowed to live together.",
              },
              {
                img: investment,
                flag: newlogo,
                to: "/investment",
                country: "Investment",
                description:
                  "There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.",
              },
            ].map((feature, index) => (
              <div
                className="cmt-box-col-wrapper col-lg-12 tw-h-[300px]"
                key={index}
              >
                <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5">
                  <div className="cmt-box-view-content-inner">
                    <div
                      className="featured-thumbnail"
                      style={{ height: "300px" }}
                    >
                      <a href={feature.to} tabIndex="-1">
                        <img
                          className="img-fluid"
                          src={feature.img}
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="featured-content">
                      <div className="featured-content-icon_img-block">
                        <img
                          className="img-fluid"
                          src={feature.flag}
                          alt="image"
                        />
                      </div>
                      <div className="featured-title tw-pt-4">
                        <h5>
                          <a
                            href={feature.to}
                            style={{ color: "black" }}
                            tabIndex="-1"
                          >
                            {t(feature.country)}
                          </a>
                        </h5>
                      </div>
                      <div className="featured-desc">
                        <p>{t(feature.description)}</p>
                      </div>
                      <a
                        className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor"
                        href={feature.to}
                        tabIndex="-1"
                      >
                        {t("Read More")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <Slider {...settings} className=" slick_slider">
            {[
              {
                img: directinvestment,
                flag: newlogo,
                to: "/direct-citizenship-by-investments",
                country: "Direct Citizenship by Investments",
                description:
                  "citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.",
              },
              {
                img: DCI,
                flag: newlogo,
                to: "/permanent-residence",
                country: "Permanent Residence",
                description:
                  "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.",
              },
              {
                img: goldenvisa,
                flag: newlogo,
                to: "/golden-visa-greece-portugal",
                country: "Golden Visa (Greece - Portugal)",
                description:
                  "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.",
              },
            ].map((feature, index) => (
              <div
              className="cmt-box-col-wrapper col-lg-12 tw-h-[300px]"
              key={index}
            >
                <div className="featured-imagebox featured-imagebox-country style2 bor_rad_5">
                  <div className="cmt-box-view-content-inner">
                    <div
                      className="featured-thumbnail"
                      style={{ height: "300px" }}
                    >
                      <a href={feature.to} tabIndex="-1">
                        <img
                          className="img-fluid"
                          src={feature.img}
                          alt="image"
                        />
                      </a>
                    </div>
                    <div className="featured-content">
                      <div className="featured-content-icon_img-block">
                        <img
                          className="img-fluid"
                          src={feature.flag}
                          alt="image"
                        />
                      </div>
                      <div className="featured-title tw-pt-4">
                        <h5>
                          <a
                            href={feature.to}
                            style={{ color: "black" }}
                            tabIndex="-1"
                          >
                            {t(feature.country)}
                          </a>
                        </h5>
                      </div>
                      <div className="featured-desc">
                        <p>{t(feature.description)}</p>
                      </div>
                      <a
                        className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor"
                        href={t(feature.to)}
                        tabIndex="-1"
                      >
                        {("Read More")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <Slider {...settings} className="slick_slider">
            {[
              {
                img: logserv,
                flag: newlogo,
                to: "/logistics",
                country: "Logistics Management",
                description:
                  "Efficient logistics management streamlines supply chain processes, ensuring seamless inventory flow and timely product deliveries.",
              },
              {
                img: eorserv,
                flag: newlogo,
                to: "/eorpayroll",
                country: "EOR & Payroll",
                description:
                  "Comprehensive EOR and payroll solutions simplify compliance and streamline employee management.",
              },
              {
                img: "", // Intentionally left blank
                flag: "",
                to: "",
                country: "",
                description: "",
              },
            ].map((feature, index) => (
              <div
                className={`${feature.img !== "" ? "cmt-box-col-wrapper col-lg-12" : ""
                  }`}
                key={index}
              >

                <div className={feature.img !== "" ? "featured-imagebox featured-imagebox-country style2 bor_rad_5" : null}>
                  <div className={feature.img !== "" ? "cmt-box-view-content-inner" : null}>
                    {feature.img && (
                      <div
                        className="featured-thumbnail"
                        style={{ height: "300px" }}
                      >
                        <a href={feature.to} tabIndex="-1">
                          <img
                            className="img-fluid"
                            src={feature.img}
                            alt="image"
                          />
                        </a>
                      </div>
                    )}
                    <div className="featured-content">
                      {feature.flag && (
                        <div className="featured-content-icon_img-block">
                          <img
                            className="img-fluid"
                            src={feature.flag}
                            alt="image"
                          />
                        </div>
                      )}
                      {feature.country && (
                        <div className="featured-title tw-pt-4">
                          <h5>
                            <a
                              href={feature.to}
                              style={{ color: "black" }}
                              tabIndex="-1"
                            >
                              {t(feature.country)}
                            </a>
                          </h5>
                        </div>
                      )}
                      {feature.description && (
                        <div className="featured-desc">
                          <p>{t(feature.description)}</p>
                        </div>
                      )}
                      {feature.to && (
                        <a
                          className="cmt-btn cmt-btn-size-sm btn-inline cmt-btn-color-skincolor"
                          href={feature.to}
                          tabIndex="-1"
                        >
                          {("Read More")}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* View More Button */}

      </div>
    </section>
  );
};

export default FeatureSection;
