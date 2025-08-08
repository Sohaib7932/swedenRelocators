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
const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    
    focusOnSelect: true, // Allows the middle item to be selected easily
  };
  
  return (
    <section className="cmt-row testimonial-section clearfix">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-xs-12">
            <div className="pt-15 res-991-pt-0">
              <div className="section-title">
                <div className="title-header">
                  <h5>ABOUT AGENCY</h5>
                  <h2 className="title">
                    Immigration Services From <strong>Experienced Agents.</strong>
                  </h2>
                </div>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing typesetting
                industry. Professor at Hampden-Sydney been industry dard dummy
                text ever since the 1500s, when known contrary tonter.
              </p>
              <div className="featuredbox-number">
                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style1">
                  <div className="featured-icon">
                    <div className="cmt-icon cmt-icon_element-fill cmt-icon_element-color-skincolor cmt-icon_element-size-xs cmt-icon_element-style-rounded">
                      <i className="cmt-num ti-info"></i>
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>We modify whole system</h5>
                    </div>
                    <div className="featured-desc">
                      <p>
                        To guard, Avoid Revealing Too Much, Apply for a
                        Provisional Patent, Trademark.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style1">
                  <div className="featured-icon">
                    <div className="cmt-icon cmt-icon_element-fill cmt-icon_element-color-skincolor cmt-icon_element-size-xs cmt-icon_element-style-rounded">
                      <i className="cmt-num ti-info"></i>
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>Safeguard for Your Business</h5>
                    </div>
                    <div className="featured-desc">
                      <p>
                        To guard, Avoid Revealing Too Much, Apply for a
                        Provisional Patent, Trademark.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style1">
                  <div className="featured-icon">
                    <div className="cmt-icon cmt-icon_element-fill cmt-icon_element-color-skincolor cmt-icon_element-size-xs cmt-icon_element-style-rounded">
                      <i className="cmt-num ti-info"></i>
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>Beneficial Strategies</h5>
                    </div>
                    <div className="featured-desc">
                      <p>
                        To guard, Avoid Revealing Too Much, Apply for a
                        Provisional Patent, Trademark.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="testimonials-nav tw-z-10">
              <Slider {...settings2}>
                <div className="testimonial-nav_item tw-z-50">
                  <div className="nav_item tw-z-50">
                    <img
                      className="img-fluid"
                      src="https://via.placeholder.com/430x580?text=430x580+nav-01.jpg"
                      alt="testimonial-nav_item"
                    />
                  </div>
                </div>
                <div className="testimonial-nav_item">
                  <div className="nav_item">
                    <img
                      className="img-fluid"
                      src="https://via.placeholder.com/430x580?text=430x580+nav-02.jpg"
                      alt="testimonial-nav_item"
                    />
                  </div>
                </div>
                <div className="testimonial-nav_item">
                  <div className="nav_item">
                    <img
                      className="img-fluid"
                      src="https://via.placeholder.com/430x580?text=430x580+nav-03.jpg"
                      alt="testimonial-nav_item"
                    />
                  </div>
                </div>
                <div className="testimonial-nav_item">
                  <div className="nav_item">
                    <img
                      className="img-fluid"
                      src="https://via.placeholder.com/430x580?text=430x580+nav-04.jpg"
                      alt="testimonial-nav_item"
                    />
                  </div>
                </div>
              </Slider>
            </div>
            <div className="cmt-col-bgcolor-yes cmt-bgcolor-skincolor cmt-col-bgimage-yes cmt-bg col-bg-img-one cmt-right-span cmt-bg-pattern spacing-1">
              <div className="cmt-col-wrapper-bg-layer cmt-bg-layer">
                <div className="cmt-col-wrapper-bg-layer-inner"></div>
              </div>
              <div className="layer-content">
                <div className="testimonials-info">
                  <Slider {...settings}>
                    <div className="testimonials">
                      <div className="testimonial-avatar">
                        <div className="testimonial-img">
                          <img
                            className="img-fluid"
                            src="https://via.placeholder.com/150x150?text=150x150+testimonial-01.jpg"
                            alt="testimonial-img"
                          />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <blockquote className="testimonial-text">
                          I really would like to appreciate Tripzia and the entire
                          team, especially Ms Anandias Alex for helping me get my
                          student visa for the Brunel University. She helped me all
                          way to find the University & right course. She was there
                          for me through the entire process.
                        </blockquote>
                        <div className="testimonial-bottom">
                          <div className="testimonial-caption cmt-textcolor-white">
                            <h5>RAshley Foster</h5>
                            <label>(CEO & Founder)</label>
                          </div>
                          <div className="star-ratings">
                            <ul className="rating">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star-o"></i>
                              </li>
                              <li>
                                <i className="fa fa-star-o"></i>
                              </li>
                              <li>
                                <i className="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonials">
                      <div className="testimonial-avatar">
                        <div className="testimonial-img">
                          <img
                            className="img-fluid"
                            src="https://via.placeholder.com/150x150?text=150x150+testimonial-02.jpg"
                            alt="testimonial-img"
                          />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <blockquote className="testimonial-text">
                          I really would like to appreciate Tripzia and the entire
                          team, especially Ms Anandias Alex for helping me get my
                          student visa for the Brunel University. She helped me all
                          way to find the University & right course. She was there
                          for me through the entire process.
                        </blockquote>
                        <div className="testimonial-bottom">
                          <div className="testimonial-caption cmt-textcolor-white">
                            <h5>Alan Sears</h5>
                            <label>(CEO & Founder)</label>
                          </div>
                          <div className="star-ratings">
                            <ul className="rating">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star-o"></i>
                              </li>
                              <li>
                                <i className="fa fa-star-o"></i>
                              </li>
                              <li>
                                <i className="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
