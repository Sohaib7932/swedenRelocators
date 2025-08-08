
import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import san from '../../assets/images/san.webp'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const  Carousel =({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
})=> {
  const [curr, setCurr] = useState(0);
  const [modal, setModal] = useState(false);
  const sliders = [
    san,
    san,
    san,
    san,
  ];

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides?.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides?.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurr(index);
  };

  return (
    <div className="tw-overflow-hidden tw-relative">

      <div
        className="tw-flex tw-transition-transform tw-ease-out tw-duration-500 tw-h-screen	 tw-w-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {/* {sliders?.map((s) => (
          <> */}
        <div className=" tw-flex-none  tw-w-full tw-h-full tw-relative">
          <img
            src={san}
            alt=""
            className=" tw-w-full tw-h-full  tw-object-cover"
          />

         
        </div>
        <div className=" tw-flex-none  tw-w-full tw-h-full tw-relative">
          <img
            src={san}
            alt=""
            className=" tw-w-full tw-h-full  tw-object-cover"
          />

          
        </div>
        <div className=" tw-flex-none  tw-w-full tw-h-full tw-relative">
          <img
            src={san}
            alt=""
            className=" tw-w-full tw-h-full  tw-object-cover"
          />

         
        </div>

        <div className=" tw-flex-none  tw-w-full tw-h-full tw-relative">
          <img
            src={san}
            alt=""
            className=" tw-w-full tw-h-full  tw-object-cover"
          />

         
        </div>

        {/* </>
        ))} */}
      </div>
      <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-between tw-p-4">
        <button
          onClick={prev}
          className="tw-p-1.5 tw-rounded-full tw-shadow tw-bg-white/80 tw-text-gray-800 tw-hover:bg-white"
        >
        
          <LiaAngleLeftSolid size={30} className=" tw-text-blue" />
        </button>
        <button
          onClick={next}
          className="tw-p-1.5 tw-rounded-full tw-shadow tw-bg-white/80 tw-text-gray-800 tw-hover:bg-white"
        >
          
        <LiaAngleRightSolid  size={30} className=" tw-text-blue" />
        </button>
      </div>

      <div className="tw-absolute tw-bottom-4 tw-right-0 tw-left-0">
        <div className="tw-flex tw-items-center tw-justify-center tw-gap-2">
          {sliders.map((_, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`
              tw-transition-all tw-w-5 h-5 tw-overflow-hidden tw-bg-white tw-rounded-full
              ${curr === i ? " tw-w-5 tw-h-5" : " tw-w-5 tw-h-5 tw-opacity-40  "}
            `}
            >
            
            </div>
            
          ))}
        </div>
      </div>
    </div>

  );
}



export default Carousel