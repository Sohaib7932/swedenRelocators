import React, { useRef } from "react";
import Slider from "react-slick";
import Button from "../../components/Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import p1 from '../../assets/images/p2.jpg'
import p3 from '../../assets/images/p3.jpg'
import p4 from '../../assets/images/p4.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings = {
  className: "center",
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

const Popular = () => {
  const data = [
    {
      id: 1,
      image:
        "https://homy-next.vercel.app/_next/static/media/img_07.006ae629.jpg",
      title: "New York",
      des: "1710 Properties",
    },
    {
      id: 2,
      image:
      p1,
      title: "Joep Anderson",
      des: "Financial Manager",
    },
    {
      id: 3,
      image:
      p3,
      title: "Joep Anderson",
      des: "Financial Manager",
    },
    {
      id: 1,
      image:
      p4,
      title: "Joep Anderson",
      des: "Financial Manager",
    },
    {
      id: 1,
      image:
      p1,
      title: "Joep Anderson",
      des: "Financial Manager",
    },
  ];

  const arrowRef = useRef(null);
  let sliderProject = data.map((item, i) => (
    <div
      key={i}
      className="project tw-rounded tw-cursor-pointer p-3  tw-relative "
    >
    <div className=" tw-relative tw-h-96 tw-w-full">
    <img
        src={item.image}
        alt="project"
        className="tw-w-full tw-h-full  tw-rounded-2xl  tw-object-cover tw-object-center tw-overflow-hidden tw-transition-transform tw-duration-400 tw-ease-in-out"
      />
      <div className="  tw-flex  tw-rounded-2xl  tw-justify-center tw-items-end  tw-bg-[rgba(0,0,0,0.3)] tw-h-full  tw-w-full  p-3 tw-absolute tw-bottom-0">

        <div>
        <h5 className=" tw-text-white tw-text-xl">{item?.title} </h5>
        <p className=" tw-text-white text-2xl">{item?.des}</p>
        </div>

      </div>
    </div>
    </div>
  ));

  return (
    <div className=" tw-bg-white   tw-pt-6">
      <div className=" md:tw-container tw-mx-auto">
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

export default Popular;
