import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import { PiMapPin } from "react-icons/pi";
import work from "../../assets/images/how-it-works.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from "../../components/Button";
import New_Listings from "../../components/New_listings";
import Popular from "../../components/Popular";
import howitwork1 from "../../assets/iconscout/howitwork1.png"
import howitwork2 from "../../assets/iconscout/howitwork2.png"
import howitwork3 from "../../assets/iconscout/howitwork3.png"
import howitwork4 from "../../assets/iconscout/howitwork4.png"


import { useTranslation } from 'react-i18next';


import Header from '../../components/Header_New/Header';
const Housing = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Housing")}
        regularText={t("Your home in Sweden is just a step away. Explore options across cities and neighborhoods that suit your needs. Let us help you find the perfect place to settle in.")}
        backgroundImage={homeBgImage}
      />



      

      <div className="">
        <div className=" tw-pt-12 tw-bt-0  tw-text-center tw-mb-0">
          {/* <span>{t(`EXPopular`)}</span> */}
          <h2>
            <h1>{t(`Explore Popular Location`)}</h1>
          </h2>
          <p className=" tw-text-gray">{t(`Explore the latest listings & projects in diverse areas`)}</p>
          <section className="">
              <div className="container  tw-my-7 tw-rounded-md tw-shadow-lg tw-bg-white ">
                <div className="   tw-gap-12  tw-grid md:tw-grid-cols-4 tw-grid-cols-2 p-2 tw-w-full">
                  <div className=" tw-w-full   tw-items-end tw-flex tw-justify-between ">
                    <div>
                      <p className=" text-sm  tw-text-gray">{t(`I’m looking to...`)}</p>
                      <h6>{t(`Buy Apartments`)}</h6>
                    </div>

                    <div>
                      <MdKeyboardArrowDown size={20} />
                    </div>
                  </div>

                  <div className=" tw-w-full tw-flex tw-items-end  tw-justify-between ">
                    <div>
                      <p className=" text-sm  tw-text-gray">{t(`Location`)}</p>
                      <h6>{t(`Berlin, Germany`)}</h6>
                    </div>

                    <div className=" tw-pb-2">
                      <PiMapPin />
                    </div>
                  </div>

                  <div className=" tw-w-full tw-items-end tw-flex tw-justify-between ">
                    <div>
                      <p className=" text-sm  tw-text-gray">{t(`Price Range`)}</p>
                      <h6>{t(`$10,000 - $200,000`)}</h6>
                    </div>

                    <div>
                      <MdKeyboardArrowDown size={20} />
                    </div>
                  </div>

                  <div className=" tw-w-full ">
                    <Button
                      label={"SEARCH"}
                      className={
                        " tw-bg-blue tw-text-white tw-py-3.5  tw-w-full tw-rounded-md"
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          <Popular />
        </div>
      </div>

      <div className=" ">
        <div className="  md:tw-mt-10 tw-mt-10">
          <div className="container-fluid">
            
            <section>
              <div className="container tw-py-5">
                <div className="tw-flex tw-justify-center">
                  <h3 className=" tw-flex tw-items-center tw-gap-0 tw-justify-center">
                    <img src={work} alt="" className="tw-w-24" />{t(`How It Works`)}</h3>
                </div>
                <p className=" tw-text-gray"></p>
                <div className=" col ">
                  <div className="md:tw-mx-8 tw-mb-4 p-4 tw-bg-white tw-rounded-2xl tw-shadow-lg">
                    <div className="tw-flex md:tw-flex-row tw-flex-col tw-items-start">
                      <img src={howitwork1} alt="" className="tw-w-24" />
                      <div className="md:tw-ml-8">
                        <h5 className="tw-pt-2">{t(`Photos`)}</h5>
                        {t("Documentation Before tenants move into a property, we conduct a thorough inspection and take detailed photographs of the residence. This documentation ensures that the condition of the property is clearly recorded, providing both landlords and tenants with a clear reference point for any future assessments.")}

                      </div>
                    </div>
                  </div>

                  <div className="md:tw-mx-8 tw-my-4 p-4  tw-rounded-2xl tw-shadow-lg">
                    <div className="tw-flex md:tw-flex-row tw-flex-col tw-items-start">
                      <img src={howitwork2} alt="" className="tw-w-24" />
                      <div className="md:tw-ml-8">
                        <h5 className="tw-pt-2">{t(`Rental Agreements`)}</h5>
                        <p className="tw-text-gray tw-text-justify">
  {t("We draft comprehensive rental agreements that clearly outline the terms and conditions of the lease. Our goal is to ensure that both parties understand their obligations and rights. We also streamline the payment process to guarantee that transactions are secure and hassle-free, creating a seamless experience for both tenants and landlords.")}
</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:tw-mx-8 tw-my-4 p-4 tw-rounded-2xl tw-shadow-lg">
                    <div className="tw-flex md:tw-flex-row tw-flex-col tw-items-start">
                      <img src={howitwork3} alt="" className="tw-w-24" />
                      <div className="md:tw-ml-8">
                        <h5 className="tw-pt-2">{t(`Security Deposit`)}</h5>
                        <p className="tw-text-gray tw-text-justify">
  {t("Management We take special care to manage the security deposit process efficiently. Our commitment is to ensure that the tenant's deposit is fully refunded on the agreed move-out date, provided there are no damages to the property beyond normal wear and tear. This process protects both parties and provides peace of mind.")}
</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:tw-mx-8 tw-my-4 tw-rounded-2xl tw-shadow-lg tw-p-4">
                    <div className="tw-flex md:tw-flex-row tw-flex-col tw-items-start">
                      <img src={howitwork4} alt="" className="tw-w-24" />
                      <div className="md:tw-ml-8">
                        <h5 className="tw-pt-2">{t(`Service Charges (Tenants)`)}</h5>
                        <p className="tw-text-gray tw-text-justify">
  {t("For our rental services, we charge a one-time service fee to tenants, which applies to leases with a minimum duration of one year. This fee covers the comprehensive support and management services we provide throughout the rental process, ensuring a smooth and well-coordinated experience from start to finish.")}
</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <New_Listings />
            {/* <div className="row g-4">
              <div className=" tw-py-12 tw-text-center">
                <span>{t(`EXPERT TEAM`)}</span>
                <h2>
                  Meet With Our <h1>{t(`Dedicated Team Members`)}</h1>
                </h2>

                <Teams />
              </div>
            </div> */}
          </div>
        </div>

        <section className=" tw-flex  tw-items-center tw-bg-Journey tw-bg-fixed tw-bg-center tw-bg-cover  tw-h-[60vh]">
          <div className=" container">
            <div className=" row">
              <div className=" col-md-6">
                <div>
                  <h2 className=" text-white h2">{t(`Start your Journey As a Retailer.`)}</h2>
                </div>
              </div>
              <div className=" col-md-6">
                <div className=" tw-w-full tw-relative">
                  <input
                    placeholder="Email address"
                    className=" tw-bg-white  tw-h-20 tw-outline-none  tw-pl-4 tw-rounded-xl tw-w-full"
                  />
                  <Button
                    label={"Get Started"}
                    className={
                      " tw-bg-blue tw-py-4 tw-rounded-xl tw-text-white tw-absolute tw-top-3 tw-right-3"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Housing;
