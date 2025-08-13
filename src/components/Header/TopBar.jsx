import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../language/LanguageSelector";
const TopBar = () => {
  const { t } = useTranslation();
  const LANGUAGES = [
    { label: "Spanish", code: "es" },
    { label: "English", code: "en" },
    { label: "Italian", code: "it" },
  ];

  return (
    <>
      <section className="  md:tw-pb-3 tw-pb-0 md:tw-pl-24 tw-pl-0  tw-bg-primary">
        <div className="container-fluid tw-p-0 ">
          <div className="row  top_nav_row  tw-items-baseline text-center">
            <div className="col-lg-6 top_nav_col tw-relative col-md-12">
              <div className=" tw-flex tw-flex-wrap tw-items-center tw-gap-4 tw-justify-center md:tw-justify-start tw-text-center ">
                <p className="   tw-text-sm      tw-border-gray  tw-text-white">
                  <i class="ti ti-alarm-clock"></i>
                  {t('Mon - Fri 10.00 - 18.00')}
                </p>
                <span
                  className="  tw-h-5  tw-mb-4 tw-bg-gray  tw-border-gray"
                  style={{ width: "1px" }}
                ></span>
                <p className="    tw-text-sm tw-text-white">
                  <i class="ti ti-location-pin"></i>
                  {t('Amiralsgatan 86E 214 37 Malmö, Sweden')}
                </p>
              </div>
            </div>
            <div className="col-lg-6 top_nav_col col-md-12  px-0">
              <div className=" sm:tw-flex  tw-block tw-justify-end tw-gap-4 tw-items-center">
                <div className="  tw-flex tw-justify-around tw-items-center tw-gap-4">
                  <div>
                    <Link
                      to={"/book_your_appointment"}
                      className="tw-text-sm  tw-text-white"
                    >
                      <i class="fa fa-calendar-check"></i> {t('Book an Appointment!')}{" "}
                    </Link>
                  </div>

                  <div className="">
                    <LanguageSelector />
                  </div>
                </div>

                <div className=" tw-float-right sm:tw-pt-0 tw-pt-3">
                  <div className=" tw-flex tw-items-center">
                    <Link
                      to={"/login"}
                      className="sign_up tw-outline-none  hover:tw-text-white tw-font-medium tw-bg-blue tw-py-3.5 tw-px-4  tw-border-r tw-text-white tw-text-[15px] tw-flex  tw-items-center"
                    >
                      {t('My Page')}
                    </Link>
                    <Link
                      to={"/set_up_your_account"}
                      className=" sign_up tw-outline-none  hover:tw-text-white tw-font-medium tw-bg-blue tw-py-3.5 tw-px-4  tw-w-44  tw-text-white tw-text-[15px] tw-flex  tw-items-center"
                    >
                      {t('Sign Up')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" tw-py-3"></div>
      </section>
    </>
  );
};

export default TopBar;
