import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style/bootstrap.min.css';
import './style/animate.css';
import './style/font-awesome.css';
import './style/themify-icons.css';
import './style/flaticon.css';
import './style/slick.css';
import './style/prettyPhoto.css';
import './style/shortcodes.css';
import './style/main.css';
import './style/megamenu.css';
import './style/responsive.css';
const IntroductionSection = () => {
  return (
    <section className="cmt-row introduction-section cmt-bgcolor-grey cmt-bg cmt-bgimage-yes bg-img7 cmt-bg-pattern mt_60 res-991-mt-0 clearfix">
      <div className="cmt-row-wrapper-bg-layer cmt-bg-layer"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-11 mx-auto col-xs-12">
            {/* ttm_single_image-wrapper */}
            <div className="ttm_single_image-wrapper mr-60 pt-60 res-991-pt-0 res-991-mr-0 position-relative">
              <img
                className="img-fluid w-100"
                src="https://via.placeholder.com/495x568.jpg"
                alt="single_04"
              />
              {/* featured-icon-box */}
              <div className="featured-icon-box icon-align-top-content cmt-bgcolor-darkgrey style2">
                <div className="featured-content">
                  <div className="featured-title">
                    <h5>
                      Coaching Test <span className="cmt-textcolor-skincolor">Preparation</span> Series
                    </h5>
                  </div>
                  <div className="featured-desc">
                    <p>Free Guide To A Top Line Band Score!</p>
                  </div>
                </div>
                <a
                  className="cmt-btn cmt-btn-size-sm cmt-icon-btn-left btn-inline cmt-btn-color-skincolor"
                  href="#"
                  tabIndex="0"
                >
                  <i className="fa fa-minus"></i> View More Details
                </a>
              </div>
              {/* featured-icon-box end */}
            </div>
          </div>

          <div className="col-lg-6 col-xs-12">
            <div className="pt-60">
              {/* section title */}
              <div className="section-title">
                <div className="title-header">
                  <h5>Value for Visa Coaching</h5>
                  <h2 className="title">
                    Benefits of Visa Online <strong>Coaching & Preparation</strong>
                  </h2>
                </div>
              </div>
              {/* section title end */}

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  {/* featured-icon-box */}
                  <div className="featured-icon-box icon-align-top-content style3">
                    <div className="featured-icon">
                      <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-skincolor cmt-icon_element-size-md">
                        <i className="flaticon-book-1"></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h5>
                          <a href="#">TOEFL</a>
                        </h5>
                      </div>
                      <div className="featured-desc">
                        <p>Scoring parameters in each of the modules.</p>
                      </div>
                    </div>
                  </div>
                  {/* featured-icon-box end */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  {/* featured-icon-box */}
                  <div className="featured-icon-box icon-align-top-content style3">
                    <div className="featured-icon">
                      <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-skincolor cmt-icon_element-size-md">
                        <i className="flaticon-policy"></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h5>
                          <a href="#">PTE Coaching</a>
                        </h5>
                      </div>
                      <div className="featured-desc">
                        <p>We provide PTE online coaching classes.</p>
                      </div>
                    </div>
                  </div>
                  {/* featured-icon-box end */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  {/* featured-icon-box */}
                  <div className="featured-icon-box icon-align-top-content style3">
                    <div className="featured-icon">
                      <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-skincolor cmt-icon_element-size-md">
                        <i className="flaticon-contract"></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h5>
                          <a href="#">IELTS Coaching</a>
                        </h5>
                      </div>
                      <div className="featured-desc">
                        <p>Scoring method the bond of 0-9.</p>
                      </div>
                    </div>
                  </div>
                  {/* featured-icon-box end */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  {/* featured-icon-box */}
                  <div className="featured-icon-box icon-align-top-content style3">
                    <div className="featured-icon">
                      <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-skincolor cmt-icon_element-size-md">
                        <i className="flaticon-certificate"></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h5>
                          <a href="#">GMAT</a>
                        </h5>
                      </div>
                      <div className="featured-desc">
                        <p>Master in management or business-oriented studies.</p>
                      </div>
                    </div>
                  </div>
                  {/* featured-icon-box end */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
    </section>
  );
};

export default IntroductionSection;
