import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import arrow from '../../assets/images/proccess-box-arrow.png';
import { useTranslation } from 'react-i18next';

const Visitor = () => {
  const {t }= useTranslation();
  return (
    <div>
      <>
        {/*visitor-section*/}
        <section className=" tw-py-6   tw-relative">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-7 m-auto">
                {/* section title */}
                <div className=" tw-text-center tw-py-2">
                  <span>{t('YOUR NEXT VISA APPLICATION IS ON ONE CLICK!')}</span>
                  <h2 className="title">
                    {t('We Prepare Visa Applications &')} <strong><br/>{t('Send Worldwide Via DHL')}</strong>
                  </h2>
                  <p className=" tw-text-gray">{t('Submit to Embassy or Nearest FedEx Office')}</p>
                </div>
                {/* section title end */}
              </div>
            </div>
            {/* row end */}
            {/* row */}
            <div className="row   tw-py-8">
              <div className="col-lg-12">
                <div className="">
                  <div className="row  g-5 ">
                    <div className="col-lg-3 col-md-12 ">
                      {/*featured-icon-box*/}
                      <div className="wrapper ">
                        <div className=" ">
                          <div class="wrapper tw-mx-auto tw-relative tw-w-44 tw-h-44 tw-flex tw-justify-center tw-items-center tw-overflow-hidden tw-bg-white">
                            <div class="border-animate bg-w tw-absolute tw-inset-0 tw-rounded-full tw-border-2 tw-border-dashed tw-border-gray-light"></div>
                            <div class="inner-content element-inner  tw-h-32 tw-w-32 tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-bg-[#0067ED]">
                              <i className="flaticon tw-text-5xl tw-text-white tw-m-0  tw-h-14 tw-w-11 flaticon-reading" />
                            </div>
                          </div>

                          <div className=" tw-text-center">
                            <h5 className=" tw-pt-8 tw-pb-2">{t('Sign Up')}</h5>
                          </div>
                          <div className="featured-desc">
                            <p className=" tw-text-gray tw-text-center">{t('You can signup on our website and book an appointment or write us in Message section on My Page!')}</p>
                          </div>
                        </div>
                      </div>
                      {/* featured-icon-box end*/}
                    </div>
                    <div className="col-lg-3 col-md-12  tw-pt-8">
                      {/*featured-icon-box*/}
                      <div className="wrapper ">
                        <div class="wrapper tw-mx-auto tw-relative tw-w-44 tw-h-44 tw-flex tw-justify-center tw-items-center tw-overflow-hidden tw-bg-white">
                          <div class="border-animate tw-absolute tw-inset-0 tw-rounded-full tw-border-2 tw-border-dashed tw-border-gray-light"></div>
                          <div class="inner-content element-inner  tw-h-32 tw-w-32 tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-bg-[#0067ED]">
                            <i className="flaticon tw-text-5xl tw-text-white tw-m-0  tw-h-14 tw-w-11 flaticon-passport-6" />
                          </div>
                        </div>

                        <div className=" tw-text-center">
                          <h5 className=" tw-pt-8 tw-pb-2">{t('Upload Documents')}</h5>
                        </div>
                        <div className="featured-desc">
                          <p className=" tw-text-gray tw-text-center">{t('In next step go to My Page and upload all necessary documents.')}</p>
                        </div>
                      </div>
                      {/* featured-icon-box end*/}
                    </div>
                    <div className="col-lg-3 col-md-12 ">
                      {/*featured-icon-box*/}
                      <div className=" wrapper">
                        <div class="wrapper tw-mx-auto tw-relative tw-w-44 tw-h-44 tw-flex tw-justify-center tw-items-center tw-overflow-hidden tw-bg-white">
                          <div class="border-animate tw-absolute tw-inset-0 tw-rounded-full tw-border-2 tw-border-dashed tw-border-gray-light"></div>
                          <div class="inner-content element-inner  tw-h-32 tw-w-32 tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-bg-[#0067ED]">
                            <i className="flaticon tw-text-5xl tw-text-white tw-m-0  tw-h-14 tw-w-11 flaticon-contract" />
                          </div>
                        </div>

                        <div className=" tw-text-center">
                          <h5 className=" tw-pt-8 tw-pb-2">{t('File Preparation Process')}</h5>
                        </div>
                        <div className="featured-desc">
                          <p className=" tw-text-gray tw-text-center">{t('One of our experienced Consultant will contact you and prepare your visa file and book your appointment at embassy or Gerry’s/FedEx office.')}</p>
                        </div>
                      </div>
                      {/* featured-icon-box end*/}
                    </div>
                    <div className="col-lg-3 col-md-12 tw-pt-8 ">
                      {/*featured-icon-box*/}
                      <div className=" wrapper">
                        <div class="wrapper tw-mx-auto tw-relative tw-w-44 tw-h-44 tw-flex tw-justify-center tw-items-center tw-overflow-hidden tw-bg-white">
                          <div class="border-animate tw-absolute tw-inset-0 tw-rounded-full tw-border-2 tw-border-dashed tw-border-gray-light"></div>
                          <div class="inner-content element-inner  tw-h-32 tw-w-32 tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-bg-[#0067ED]">
                            <i className="flaticon tw-text-5xl tw-text-white tw-m-0  tw-h-14 tw-w-11 flaticon-visa" />
                          </div>
                        </div>

                        <div className=" tw-text-center">
                          <h5 className=" tw-pt-8 tw-pb-2">{t('Download or DHL')}</h5>
                        </div>
                        <div className="featured-desc">
                          <p className=" tw-text-gray tw-text-center">{t('Once file is completed we will upload on your portal and send you via DHL. All you need to do is to submit to closest Embassy or Gerry\'s Visa Services office.')}</p>
                        </div>
                      </div>
                      {/* featured-icon-box end*/}
                    </div>
                  </div>
                  <Link to={'/register'}>
                    <Button label={t('Apply Now!')} className={' tw-my-3 tw-mx-auto tw-bg-blue tw-text-white tw-py-3.5 tw-rounded-md '} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <img
            src={arrow}
            className="tw-hidden lg:tw-block tw-absolute -tw-z-50 tw-bottom-[45%] tw-left-[10%] 
                      md:tw-bottom-[50%] md:tw-left-[1%] 
                      lg:tw-bottom-[50%] lg:tw-left-[1%]
                      xl:tw-bottom-[49%] xl:tw-left-[1%]
                      2xl:tw-bottom-[48%] 2xl:tw-left-[2%] 
                      3xl:tw-bottom-[45%] 3xl:tw-left-[10%] 
                      "
            alt={t('Arrow Background')}
          />
        </section>
        {/*visitor-section end*/}
      </>
    </div>
  );
};

export default Visitor;
