import React, { useEffect, useState } from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import san from "../../assets/images/san.webp";
import { useTranslation } from "react-i18next";

const New_Listings = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const { t } = useTranslation();

  const [curr, setCurr] = useState(0);
  const [modal, setModal] = useState(false); // still defined because it existed in the original code
  const sliders = [san, san, san, san];

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides?.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides?.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => setCurr(index);

  /* ───────────────────────── Re-usable property card ───────────────────────── */
  const PropertyCard = () => (
    <Link to={"/property_details"} className="p-4 tw-bg-white tw-rounded-2xl">
      <div className="tw-w-full">
        <div className="tw-overflow-hidden tw-h-56 tw-rounded-2xl tw-relative">
          <div
            className="tw-flex tw-transition-transform tw-ease-out tw-duration-500 tw-h-screen tw-w-full"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {sliders.map((img, i) => (
              <div key={i} className="tw-flex-none tw-w-full tw-h-full tw-relative">
                <img src={img} alt="" className="tw-w-full tw-h-full tw-object-cover" />
              </div>
            ))}
          </div>

          <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-between tw-p-4">
            <button
              onClick={prev}
              className="tw-p-1.5 tw-rounded-full tw-shadow tw-bg-white/80 tw-text-gray-800 tw-hover:bg-white"
            >
              <LiaAngleLeftSolid size={30} className="tw-text-blue" />
            </button>
            <button
              onClick={next}
              className="tw-p-1.5 tw-rounded-full tw-shadow tw-bg-white/80 tw-text-gray-800 tw-hover:bg-white"
            >
              <LiaAngleRightSolid size={30} className="tw-text-blue" />
            </button>
          </div>

          <div className="tw-absolute tw-bottom-4 tw-right-0 tw-left-0">
            <div className="tw-flex tw-items-center tw-justify-center tw-gap-2">
              {sliders.map((_, i) => (
                <div
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`
                    tw-transition-all tw-w-4 tw-h-4 tw-overflow-hidden tw-bg-white tw-rounded-full
                    ${curr === i ? "tw-w-4 tw-h-4" : "tw-w-4 tw-h-4 tw-opacity-40"}
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <h4 className="tw-font-light tw-text-black tw-pt-5">{t("Blueberry villa")}</h4>
      <p className="tw-text-gray">{t("Mirpur 10, Stadium dhaka 1208")}</p>

      <div className="tw-flex tw-justify-between tw-items-center">
        <div className="tw-flex tw-gap-2 tw-items-center">
          <img src="https://homy-next.vercel.app/_next/static/media/icon_04.20cbbaa1.svg" />
          <p className="tw-m-0 tw-font-light tw-text-gray">{t("1370 sqft")}</p>
        </div>
        <div className="tw-flex tw-gap-2 tw-items-center">
          <img src="https://homy-next.vercel.app/_next/static/media/icon_05.57567837.svg" />
          <p className="tw-m-0 tw-font-light tw-text-gray">{t("3 bed")}</p>
        </div>
        <div className="tw-flex tw-gap-2 tw-items-center">
          <img src="https://homy-next.vercel.app/_next/static/media/icon_06.42f17dbd.svg" />
          <p className="tw-m-0 tw-font-light tw-text-gray">{t("3 bath")}</p>
        </div>
      </div>

      <hr className="tw-border-dashed" />

      <div className="tw-flex tw-justify-between tw-items-center">
        <h4 className="tw-text-black">{t("$3,280/m")}</h4>
        <div className="tw-w-12 tw-h-12 tw-bg-black tw-rounded-full tw-flex tw-justify-center tw-items-center">
          <GoArrowUpRight size={30} className="tw-text-white" />
        </div>
      </div>
    </Link>
  );
  /* ─────────────────────────────────────────────────────────────────────────── */

  return (
    <div className="tw-bg-[#F5FAFF] tw-py-12">
      <div className="md:tw-container md:tw-px-12 tw-px-6 tw-mx-auto">
        <h3>
          <storng className="tw-font-semibold">{t("New Listings")}</storng>
        </h3>
        <p className="tw-text-gray">
          {t("Explore latest & featured properties for sale.")}
        </p>

        <div className="tw-grid tw-gap-7 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-grid-cols-1">
          {/* Render the four cards exactly as in the original file */}
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </div>
  );
};

export default New_Listings;
