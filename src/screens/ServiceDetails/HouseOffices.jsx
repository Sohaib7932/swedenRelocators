import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/couple-hanging-a-picture.png";
import banner2 from "../../assets/images/office-interior-design.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import Sidebar from "../../components/ScrollableBar";


import ho1 from "../../assets/iconscout/ho1.png";
import ho2 from "../../assets/iconscout/ho2.png";

import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from 'react-i18next';
import Header from "../../components/Header_New/Header";

const HouseOffices = () => {
  const { t, i18n } = useTranslation();
  const isleftlangue = i18n.language === 'ur';
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Houses & Offices")}
        regularText={t(
          "Find your perfect space in Sweden. We assist you in securing residential and commercial properties seamlessly."
        )}
        backgroundImage={homeBgImage}
      />
      <div className=" ">
        <section className="  ">
          <div className="container-fluid">
            <div className="row g-4">
            <div
                className="col-md-8 tw-py-20 tw-bg-white tw-text-justify"
                style={{ direction: isleftlangue ? 'rtl' : 'ltr' }}
              >
                <div className=" 2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-10 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className=" tw-w-full"
                            src={ho2}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Simplifying
                      </span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Your Housing Journey`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`We offer housing assistance. We look at the person’s
                        income and character before we handle their application
                        and we have our own online system for this purpose. We
                        make sure you get your apartment through a smooth
                        process.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>
                  </div>

                  <br />
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    Relocation
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Made Easy Across Four Countries`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>

                  <p className=" tw-text-gray tw-pt-8">{t(`We are a relocation company based in four different
                    countries Sweden, Denmark, Pakistan and India. Our head
                    office is in Malmö. Buying and renting requires a lot of
                    research and is associated with uncertainty. That’s why we
                    offer you an easy and painless solution where you can get a
                    place to live without any worries.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    Navigating
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Sweden’s Competitive Housing Market`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>

                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <p className=" tw-text-gray tw-pt-8">{t(`Finding housing in Sweden is much more difficult than in
                        other EU countries. Renting a house is having so much
                        competition in Sweden that there is a specific black
                        market for leasing the house or apartment on a long-term
                        basis. You will have to struggle in finding the
                        apartment in Malmö or Stockholm as these are the busiest
                        cities. Foreigners who intend to live in Sweden for a
                        longer period of time may opt for buying a house rather
                        than being a part of this renting fray.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div className="col-md-6">
                      <div className="row ">
                        <div className="col-md-9 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className=" tw-w-full"
                            src={ho1}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    Understanding
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`First-Hand and Second-Hand Rentals`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`While you start to search for a house or apartment in
                    Sweden, you will come across the terms known as first-hand
                    and second-hand rentals. These two terms refer to the
                    apartments rented directly from the landlord (first-hand
                    rentals) or rented and/or sublet through a tenant
                    (second-hand rentals). First-hand rentals are really scarce
                    and in some famous areas, there might be years’ long waiting
                    lists. Sublets or second-hand rentals may be the best option
                    in this case, but you should know that you can be allowed to
                    stay in that unit or house for only one year.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    Sweden’s
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Diverse Housing Options`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />
                  <p className=" tw-text-gray">{t(`A great benefit of Swedish housing is that you can hardly go
                    wrong with any type of housing situation. There are a lot of
                    options in any area of the country to choose from, whether
                    you are looking for an apartment in the countryside or in
                    the city. You will have a lot of different options like
                    standalone homes or high-rise apartments depending upon your
                    choice. You can also find furnishes as well as unfurnished
                    house and it depends upon the duration of your stay in
                    Scandinavian or Nordic countries.Rental process in Sweden.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />

                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    Tackling
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Housing Challenges in Sweden`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />
                  <p className=" tw-text-gray">{t(`Whether you are looking for a house on rent as a foreigner
                    in Sweden or you are a native Swede, the biggest problem, in
                    any case, is the lack of housing opportunities. This is the
                    case in most of the Scandinavian countries and specifically
                    in Swedish cities causing serious problems for students and
                    expats.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    Essential
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Requirements for Renting in Sweden`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />
                  <p className=" tw-text-gray">{t(`You may find a first-hand lease or second-hand rentals. You
                    need to have the personummer, an employment contract, and
                    proof of enough income to afford the house in order to get
                    the house on rent. If your income is too low according to
                    the lender, then you may have to provide a guarantor.`.replace(/\s+/g, ' ').trim())}</p>

                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    Short-Term
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Rental Solutions`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />
                  <p className=" tw-text-gray">{t(`A subletting rental will have similar requirements and
                    procedures as that of the landlords. However, you need to
                    ensure that second-hand leasing has been approved by the
                    landlord otherwise it will be considered as illegal. If you
                    caught in violation of this rule, then you may find yourself
                    evicted.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    How
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`We Can Help`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />
                  <p className=" tw-text-gray">{t(`In the meantime, while looking for a house on rent, you can
                    opt for short-term rentals as the average price won’t vary
                    much from annual rental prices in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`This is where we come to help you finding your new house .`.replace(/\s+/g, ' ').trim())}</p>
                  <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">
                  <h5 className="tw-text-center tw-pt-4" style = {{fontSize: '1.2em'}}>
                      <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                        {t('Sign Up Today!')}{" "}
                      </strong>
                    
                    </h5>
                  </Link>
                  <br />
                  <p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether you're
                    seeking assistance with relocation, permits, visas, legal
                    processes, or settling into a new life, we're here to help.
                    Our comprehensive services cover everything from work and
                    study opportunities to family reunifications, business
                    support, and much more. Let us guide you every step of the
                    way—start your seamless experience now!`.replace(/\s+/g, ' ').trim())}</p>
                </div>
              </div>

             <Sidebar/>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default HouseOffices;
