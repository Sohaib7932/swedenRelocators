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




import VideoPlayer from '../videoPlayer';

import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";

const ProgressBar = ({ title, percentage }) => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <div className="cmt-progress-bar clearfix">
      <div className="progressbar-title">{title}</div>
      <div className="progress-bar-inner">
        <div
          className="progress-bar progress-bar-color-bar_skincolor"
          style={{ width: `${progress}%` }} // Dynamically set width
        ></div>
      </div>
      <div className="progress-bar-percent">{progress}%</div>
    </div>
  );
};

const SkillSection = () => {
  const { t } = useTranslation();
  return (
    <section className="cmt-row skill-section clearfix">
      <div className="container">
        <div className="row row-equal-height">
          <div className="col-xl-6 tw-items-center col-lg-6 col-md-7 col-sm-7 mx-auto tw-rounded-xl tw-shadow-md">


            <VideoPlayer src="https://swedenrelocators.se/videos/sweden_relocators_english_origanal2.mp4" className="tw-mt-10" />



            <div className="mx-auto mb-auto cmt-textcolor-white pt-15 pb-0  pr-30 pl-30 z-index-1 cmt-bgcolor-skincolor" style={{ marginTop: '0px' }}>
              <a
                href="https://youtu.be/7e90gBu4pas"
                target="_self"
                className="cmt_prettyphoto"
              >
                <div className="d-flex align-items-center">
                  <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-white cmt-icon_element-size-sm mb-15 mr-2">
                    <i className="ti ti-control-play"></i>
                  </div>
                  <h5>{t("Working Since 2015")}</h5>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-xs-12">
            <div className="pl-15 mt-15 text-left res-991-pl-0 res-991-mt-15">
              {/* section title */}
              <div className="section-title">
                <div className="title-header">
                  <h5>{t("Who We are")}</h5>
                  <h2 className="title tw-mb-0">
                    {t(` Relocation and Immigration`.replace(/\s+/g, ' ').trim())}<br />

                    <strong className="tw-m-0 tw-p-0">{t("Services Provider")}</strong>
                  </h2>
                </div>



                <p className="mb-0 tw-text-gray tw-text-justify tw-pt-2">
                  {t(`We are a trusted provider of relocation and immigration services, dedicated to assisting individuals and businesses in navigating complex processes with ease. As proud members of EuRA (European Relocation Association) and IIA (Immigration Industry Association), we uphold the highest standards in service delivery. Our mission is to make your relocation and immigration journey seamless and stress-free, offering complete transparency and control through our user-friendly digital portal and apps.  `.replace(/\s+/g, ' ').trim())}{" "}
                </p>

                <div className="title-desc " style={{ color: 'black' }}>
                  {t(
                    `How it Works`
                  )}
                </div>


                <ol className="tw-list-decimal tw-text-gray">
                  <li className="tw-pt-4"><strong>{t(`Sign Up`)} </strong>& {t(`Book an Appointment`)}</li>
                  <li className="tw-pt-4">{t('Sign a')} <strong>{t(`Power of Attorney`)}</strong> {t('and')} <strong>{t('Service Agreement')}</strong></li>
                  <li className="tw-pt-4">{t('Pay the')} <strong>{t(`Service Invoice`)} </strong></li>
                  <li className="tw-pt-4">{t('Track your application status until completion')}</li>

                </ol>


                <p className="tw-text-gray">{t('To get started, we recommend using our')} <strong>{t('assessment tool')}</strong> {t('to check your basic eligibility. Let us simplify your journey!')}</p>

              </div>
              {/* section title end */}


              {/* cmt-progress-bar end */}



            </div>
          </div>
        </div>
        {/* row end */}
      </div>
    </section>
  );
};

export default SkillSection;
