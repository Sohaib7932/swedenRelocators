import React from "react";
import Slider from "react-slick";
import logo from "../../assets/images/SwedenRelocators.png";
import newlogo from "../../assets/iconscout/newlogo.png";

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
import { Link } from "react-router-dom";

import assess1 from "../../assets/images/BusinessAssessment.png";
import assess2 from "../../assets/images/VisitVisaAssessment.png";
import assess3 from "../../assets/images/StudyAssesmment.png";
import assess4 from "../../assets/images/WorkPermit.png";
import assess5 from "../../assets/images/ass5.png";
import assess6 from "../../assets/images/ass6.png";



import _as1 from "../../assets/iconscout/_as1.png";
import _as2 from "../../assets/iconscout/_as2.png";
import _as3 from "../../assets/iconscout/_as3.png";
import _as4 from "../../assets/iconscout/_as4.png";
import _as5 from "../../assets/iconscout/_as5.png";
import _as6 from "../../assets/iconscout/_as6.png";

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

const FeatureSection = () => {
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

  return (



    <section className="cmt-row features-section cmt-bgcolor-white bg-img1 cmt-bg cmt-bgimage-yes cmt-bg-pattern clearfix">
    
    <div className="container">
    <section
      className=" tw-bg-white cmt-row features-section cmt-bgcolor-grey bg-img1 cmt-bg cmt-bgimage-yes cmt-bg-pattern clearfix"
      style={{ backgroundColor: "white", padding: "5px" }}
    >
      <div className="">
        {/* Slick Slider for feature boxes */}
        <div className="row">
          <Slider {...settings} className=" slick_slider">
            {[
              {
                img: _as1,
                flag: newlogo,
                country: 'Business Visa Assessment"',
                description:
                  "Evaluate your eligibility for a Swedish business visa, tailored for entrepreneurs and professionals aiming to explore Sweden's business opportunities.",
                to: "/assessment_register",
              },
              {
                img: _as3,
                flag: newlogo,
                country: "Visit Visa Assessment",
                description:
                  "Check your qualifications for a Swedish visit visa, perfect for short-term travel or exploring Sweden's culture and attractions.",
                to: "/visit_visa",
              },
              {
                img: _as2,
                flag: newlogo,
                country: "Study in Sweden Assesmment",
                description:
                  "Determine your readiness for a Swedish student visa, helping you pursue academic opportunities in one of Europe’s most innovative education systems.",
                to: "/student_assessments",
              },
            ].map((feature, index) => (
              <div
                className="cmt-box-col-wrapper col-lg-12 tw-h-[200px]"
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
                        <h5>
                          <a href={feature.to} tabIndex="-1">
                            {feature.country}
                          </a>
                        </h5>
                      </div>
                      <div className="featured-desc" style = {{height: '100px'}}>
                        <p>{feature.description}</p>
                      </div>
                     <div className="tw-pt-4">
                        <Link
                  to= {feature.to}
                  className="
        
         
          btn-dark
        "
                >
                  Make An Assessment
                </Link></div>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <Slider {...settings} className=" slick_slider">
            {[
              {
                img: _as4,
                flag: newlogo,
                country: "Work Permit Assesmment",
                to: "/Work_permit",
                description:
                  "Assess your qualifications for a Swedish work permit, designed for professionals seeking employment opportunities in Sweden’s thriving job market.",
              },
              {
                img: _as5,
                flag: newlogo,
                country: "Family Reunification Assessment",
                to: "/family_reunification_assessment",
                description:
                  "Explore your eligibility to reunite with family members in Sweden through a comprehensive family reunification visa evaluation.",
              },
              {
                img: _as6,
                flag: newlogo,
                country: "Long Term EU Status Assessment",
                to: "/long_term_eu_status_assessment",
                description:
                  "Find out if you qualify for long-term EU resident status, providing enhanced rights.",
              },
            ].map((feature, index) => (
              <div className="cmt-box-col-wrapper col-lg-12" key={index}>
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
                          <a href={feature.to} tabIndex="-1">
                            {feature.country}
                          </a>
                        </h5>
                      </div>
                      <div className="featured-desc" style = {{height: '100px'}}>
                        <p>{feature.description}</p>
                      </div>
                      <div className="tw-pt-4">
                        <Link
                  to={feature.to}
                  className="
        
         
          btn-dark
        "
                >
                  Make An Assessment
                </Link></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* View More Button */}
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mt-35 res-991-mt-20">
              <a
                className="cmt-btn cmt-btn-size-md cmt-btn-shape-round cmt-btn-style-border cmt-btn-color-dark"
                href="/register"
              >
                Assessment Results
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
    </section>
  );
};

export default FeatureSection;
