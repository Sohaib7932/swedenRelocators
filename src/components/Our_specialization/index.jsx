import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import businessman from "../../assets/iconscout/businessman.svg"
import businessman2 from "../../assets/iconscout/businessman2.svg"


const Our_specialization = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container tw-py-12">
        <div className="row">
          <div className="col-md-5">
            <span>{t('OUR SPECIALIZATION')}</span>
            <h2>
              {t('Nordic')} <br/><strong>{t('Relocation Services')}</strong>
            </h2>

            <ul className="p-0">
              <li className="tw-flex tw-gap-2">
                <FaLongArrowAltRight className="tw-pt-1 tw-text-blue" />
                <p className="tw-text-gray">
                  {t('Sign Up on our website or through the mobile app.')}
                </p>
              </li>
              <li className="tw-flex tw-gap-2">
                <FaLongArrowAltRight className="tw-pt-1 tw-text-blue" />
                <p className="tw-text-gray">
                  {t('Book an appointment for required visa category')}
                </p>
              </li>
              <li className="tw-flex tw-gap-2">
                <FaLongArrowAltRight className="tw-pt-1 tw-text-blue" />
                <p className="tw-text-gray">
                  {t('Upload your documents as per our request')}
                </p>
              </li>
              <li className="tw-flex tw-gap-2">
                <FaLongArrowAltRight className="tw-pt-1 tw-text-blue" />
                <p className="tw-text-gray">
                  {t('We will complete your visa file and upload it on the web portal or send it to your home address.')}
                </p>
              </li>
              <li className="tw-flex tw-gap-2">
                <FaLongArrowAltRight className="tw-pt-1 tw-text-blue" />
                <p className="tw-text-gray">
                  {t('We book an appointment with Embassy or Gerry\'s office.')}
                </p>
              </li>
              <li className="tw-flex tw-gap-2">
                <FaLongArrowAltRight className="tw-pt-1 tw-text-blue" />
                <p className="tw-text-gray">{t('You will submit your file.')}</p>
              </li>
              <li className="tw-flex tw-gap-2">
                <FaLongArrowAltRight className="tw-pt-1 tw-text-blue" />
                <p className="tw-text-gray">
                  {t('E-Visa clients can directly download their E-Visa from the portal.')}
                </p>
              </li>
            </ul>
          </div>
          <div className="col-md-7">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="">
                  <div className="tw-flex tw-gap-10 tw-pb-4 tw-text-center">
                    <i className="flaticon-travel tw-text-5xl tw-m-0 tw-text-blue"></i>
                    <h5>{t('Sweden Relocation Services')}</h5>
                  </div>
                  <hr className="tw-border-gray" />
                  <p className="tw-text-gray">
                    {t('Assistance in choosing the right degree program and Residence Permit processing for international Students.')}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="">
                  <div className="tw-flex tw-gap-10 tw-pb-4 tw-text-center">
                    <i className="fa fa-briefcase tw-text-5xl tw-m-0 tw-text-blue"></i>
                    <h5>{t('Work & Business')}</h5>
                  </div>
                  <hr className="tw-border-gray" />
                  <p className="tw-text-gray">
                    {t('Assistance in Registering a business, Buying a new Business, and Preparing work permit applications for Employers and Employees.')}
                  </p>
                </div>
              </div>
              <div className="col-md-6 tw-pt-4">
                <div className="">
                  <div className="tw-flex tw-gap-10 tw-pb-4 tw-text-center">
                    <i className="flaticon-family-1 tw-text-5xl tw-m-0 tw-text-blue"></i>
                    <h5>{t('Family Relocation')}</h5>
                  </div>
                  <hr className="tw-border-gray" />
                  <p className="tw-text-gray">
                    {t('We provide assistance in your family visa processing including your dependent parents and other family members.')}
                  </p>
                </div>
              </div>


              <div className="col-md-6 tw-pt-4">
                <div className="">
                  <div className="tw-flex tw-gap-10 tw-pb-4 tw-text-center">
                    <i className="flaticon-bussiness-man tw-text-5xl tw-m-0 tw-text-blue"></i>
                    <h5>{t('Investment Solutions')}</h5>
                  </div>
                  <hr className="tw-border-gray" />
                  <p className="tw-text-gray">
                    {t('There are various opportunities for business ventures, Look for the best opportunity to boost your business.')}
                  </p>
                </div>
              </div>




           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_specialization;
