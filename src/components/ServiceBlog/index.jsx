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
const BlogSection = () => {
  const blogItems = [
    {
      imgSrc: "https://via.placeholder.com/760x580?text=760x580+blog-01.jpg",
      title: "Why Indian Students Choose To Study Abroad?",
      desc: "Many young Indian students today wish to pursue their studies in universities abroad.",
      date: "12 Apr 2019",
    },
    {
      imgSrc: "https://via.placeholder.com/760x580?text=760x580+blog-02.jpg",
      title: "To Improve Your Express Entry Application Form",
      desc: "Three things you can do right now to improve all from the comfort of your own home.",
      date: "12 Apr 2019",
    },
    {
      imgSrc: "https://via.placeholder.com/760x580?text=760x580+blog-03.jpg",
      title: "Employment Insurance for Foreign Nationals",
      desc: "EI system includes all citizens, permanent residents & foreigners on work permits.",
      date: "12 Apr 2019",
    },
    {
      imgSrc: "https://via.placeholder.com/760x580?text=760x580+blog-04.jpg",
      title: "You Will Become As lor Small And Your and Desire.",
      desc: "EI system includes all citizens, permanent residents & foreigners on work permits.",
      date: "12 Apr 2019",
    },
    {
      imgSrc: "https://via.placeholder.com/760x580?text=760x580+blog-05.jpg",
      title: "You Will Become As lor Small And Your and Desire.",
      desc: "EI system includes all citizens, permanent residents & foreigners on work permits.",
      date: "12 Apr 2019",
    },
  ];

  // Slick Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="cmt-row blog-section clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 m-auto">
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h5>blog corner</h5>
                <h2 className="title">
                  in your <strong>inbox news</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-7 col-sm-12">
            <Slider {...sliderSettings}>
              {blogItems.map((item, index) => (
                <div className="blog-info" key={index}>
                  <div className="blog-info_item">
                    <div className="featured-imagebox featured-imagebox-post style1 bor_rad_5">
                      <div className="cmt-post-thumbnail featured-thumbnail">
                        <img className="img-fluid" src={item.imgSrc} alt="image" />
                      </div>
                      <div className="featured-content featured-content-post">
                        <div className="cmt-post-link">
                          <div className="post-meta">
                            <span className="cmt-meta-line tags-links">
                              <i className="fa fa-comments"></i>Comments
                            </span>
                            <span className="cmt-meta-line byline">
                              <i className="fa fa-user"></i>Admin
                            </span>
                            <span className="cmt-meta-line post-date">
                              <i className="fa fa-calendar"></i>{item.date}
                            </span>
                          </div>
                        </div>
                        <div className="post-title featured-title">
                          <h5>
                            <a href="blog-single.html" tabIndex="0">
                              {item.title}
                            </a>
                          </h5>
                        </div>
                        <div className="post-desc featured-desc">
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
