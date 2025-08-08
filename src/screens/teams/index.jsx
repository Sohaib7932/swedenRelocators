import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Button from '../../components/Button';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





var settings = {
  className: 'center',
  // centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const Teams = () => {
  const data = [
    {
      id: 1,
      image: 'https://mediacity.co.in/rexain-react/static/media/member-08.825e26bb18f8e441d60d.jpg',
      title: 'Joep Anderson',
      des: 'Financial Manager',
    },
    {
      id: 2,
      image: 'https://homy-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_04.baddfb45.jpg&w=384&q=75',
      title: 'Joep Anderson',
      des: 'Financial Manager',
    },
    {
      id: 3,
      image: 'https://homy-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_05.5cb43cd4.jpg&w=384&q=75',
      title: 'Joep Anderson',
      des: 'Financial Manager',
    },
    {
      id: 1,
      image: 'https://homy-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_03.92ffc8ed.jpg&w=384&q=75',
      title: 'Joep Anderson',
      des: 'Financial Manager',
    },
    {
      id: 1,
      image: 'https://homy-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_01.d7744e58.jpg&w=384&q=75',
      title: 'Joep Anderson',
      des: 'Financial Manager',
    },
  ];

  const arrowRef = useRef(null);
  let sliderProject = data.map((item, i) => (
    <div key={i} className="project tw-rounded tw-cursor-pointer p-3  tw-relative ">
      <div className=" tw-h-72 tw-w-full">
        <img src={item.image} alt="project" className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out" />
        <div className=" p-3">
          <h5 className=" tw-text-black">{item?.title} </h5>
          <p className=" tw-text-gray text-2xl">{item?.des}</p>
        </div>
      </div>
    </div>
  ));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" tw-bg-white tw-mb-8  tw-py-6">
      <div className=" tw-container tw-mx-auto">
        <div className="tw-relative  tw-px-4 tw-mx-auto">
          <Slider ref={arrowRef} {...settings}>
            {sliderProject}
          </Slider>
          {/* <div className="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-w-full tw-flex tw-justify-between tw-px-4">
          <button
            onClick={() => arrowRef.current.slickPrev()}
            className="  tw-rounded-full tw-absolute md:-tw-left-28 -tw-left-5 tw-justify-center tw-flex tw-items-center tw-cursor-pointer tw-text-black tw-bg-primary tw-w-10 tw-h-10 tw-border-none"
          >
            <FaAngleLeft size={30} />
          </button>
          <button
            onClick={() => arrowRef.current.slickNext()}
            className=" tw-justify-center tw-flex tw-items-center md:-tw-right-28 -tw-right-5 tw-absolute tw-rounded-full tw-cursor-pointer tw-bg-primary tw-w-10 tw-h-10  tw-text-black tw-border-none"
          >
            <FaAngleRight size={30} />
          </button>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Teams;
