import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useTranslation } from 'react-i18next';

import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png"

import Header from '../../components/Header_New/Header';
const ContactUs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Banner_Page 
  highlightText={t("Contact Us")} 
  regularText={t("Have questions? We’re here to help! Reach out for personalized guidance on your relocation journey. Together, we’ll make Sweden feel like home.")} 
  backgroundImage={homeBgImage} 
/>
      <div className=" sm:tw-pt-16 tw-pt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4509.282465196967!2d13.02468000000001!3d55.59085300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a16677346a9f%3A0x3fffcf31a36f0521!2sAmiralsgatan%2086A%2C%20214%2037%20Malm%C3%B6%2C%20Sweden!5e0!3m2!1sen!2sus!4v1709645005178!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: '0;' }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <section>
        <div className="container    tw-py-14 tw-bg-white">
          <div className="row  g-5">
            <div className="col-md-4">
              <div className="card border-0">
                <div className=" tw-bg-gray-dark tw-rounded-tl-md tw-rounded-tr-lg p-4">
                  <p className=" tw-text-white m-0 tw-font-semibold tw-text-2xl">{t(`Sweden Office:`)}</p>
                  <p className=" tw-text-white tw-pt-3">{t(`Amiralsgatan 86E 214 37 Malmö, Sweden`)}</p>

                  <p className=" tw-text-base tw-font-semibold m-0 tw-text-white">{t(`Denmark Office:`)}</p>

                  <p className=" tw-text-white">{t(`Roskildevej 30B, 2620 Albertslund, Denmark`)}</p>

                  <p className=" tw-text-white m-0 tw-font-semibold tw-text-2xl">{t(`Quick Contact:`)}</p>

                  <p className=" tw-text-white m-0 tw-pt-3">{t(`info@swedenrelocators.se`)}</p>
                  <p className=" tw-text-white m-0">{t(`Technical Issues:`)}</p>
                  <p className=" tw-text-white m-0">{t(`support@swedenrelocators.se`)}</p>
                </div>

                <div className=" tw-bg-blue tw-flex tw-rounded-bl-lg tw-rounded-br-lg tw-gap-3 px-4 tw-py-9">
                  <div>
                    <div className=" tw-w-10 tw-h-10 tw-rounded-full    tw-border  tw-border-white  tw-flex tw-justify-center tw-items-center">
                      <i className="fa fa-phone m-0 tw-text-white" />
                    </div>
                  </div>
                  <div>
                    <p className=" tw-text-white m-0 tw-font-semibold">{t(`+46 723 276 276`)}</p>
                    <p className=" tw-text-white tw-font-semibold m-0">{t(`+46 102 146 276`)}</p>
                    <p className=" tw-text-white tw-font-semibold m-0">{t(`+45 53 766 276`)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="section-title">
                <div className="title-header">
                  <span>{t(`Why Choose Us`)}</span>
                  <h2>
                    {t("Get In Touch?")}<br/>
                    <strong>{t(``)}</strong>
                  </h2>
                </div>
              </div>

              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <Input label={'Your Name'} type={'text'} className={' tw-bg-[#F5FAFF]   tw-w-full tw-py-3.5 tw-rounded-xl tw-px-3 '} />
                  </div>
                  <div className="col-md-6">
                    <Input label={'Your Name'} type={'text'} className={' tw-bg-[#F5FAFF]   tw-w-full tw-py-3.5  tw-rounded-xl tw-px-3'} />
                  </div>
                  <div className="col-md-6">
                    <Input label={'Phone Number'} type={'text'} className={' tw-bg-[#F5FAFF]   tw-w-full tw-py-3.5  tw-rounded-xl tw-px-3'} />
                  </div>
                  <div className="col-md-6">
                    <Input label={'Subject'} type={'text'} className={' tw-bg-[#F5FAFF]   tw-w-full tw-py-3.5  tw-rounded-xl tw-px-3'} />
                  </div>
                  <div className="col-md-12">
                    <textarea rows={6} className="tw-bg-white tw-border   tw-w-full tw-py-3.5  tw-rounded-xl tw-px-3"></textarea>
                  </div>
                  <div className="col-md-12">
                    <Button label={' Submit Request!'} className={' tw-text-gray-dark hover:tw-bg-gray-dark hover:tw-text-white tw-font-bold  tw-w-full py-3 tw-rounded-sm tw-border tw-border-gray-dark'} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
