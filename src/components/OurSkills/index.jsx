import React from 'react';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import dots from '../../assets/images/pattern.png';
import { useTranslation } from 'react-i18next';
const OurSkills = () => {
  const containerVariants = staggerContainer(0.1, 0.1);

  const { t} = useTranslation();
  const data = [
    {
      id: 1,
      title: t("Family Reunification"),
      description:
        t('Family reunification is a recognized reason for the immigration of family members to a country where one or more family members already reside. If a person is an EU citizen or has a permanent residence permit or is an individual who needs subsidiary protection, then you may have the right to invite your family to that country.') ,
      Icon: <i className="flaticon icons-animate tw-text-blue tw-pl-1   tw-mr-0 tw-text-[43px] flaticon-family" />,

      Link: '/family-reunification',
    },
    {
      id: 2,
      title: t('Visitor Visa'),
      description:
        t('For visiting Sweden for a short period you will need a visit visa. Visiting for a short tour, meeting your relatives, visiting friends, or business meeting you need to consider a short visit to Sweden which is called the Schengen tourist visa. Sweden follows the same visa rules as other European countries because it is also part of the Schengen agreement.'),
      Icon: <i className=" icons-animate mt_tripzia flaticon-travel tw-text-blue tw-pl-1  tw-mr-0 tw-text-[43px]" />,

      Link: '/global-visit-visas',
    },
    {
      id: 3,
      title: t('Work Permit'),
      description:
       t('Currently, every EU country has a different process for granting work permits to nationals of non-EU countries. To address this issue, the European Commission began work in 1999 on developing an EU-wide process for the entry of non-EU nationals into the workforce. For a work permit, you must have received an official offer of employment from a Swedish employer.'),
      Icon: <i className="flaticon icons-animate tw-text-blue tw-pl-1  tw-mr-0 tw-text-[43px] flaticon-certificate" />,
      Link: '/work-permit',
    },
    {
      id: 4,
      title: t('Study in Sweden'),
      description:
        t('If you are thinking about studying abroad, then visit Sweden. Studying in Sweden is unique, and you will not find an experience like it anywhere else in the world. Swedish educational institutions provide an exciting as well as an open environment, with a strong focus on cooperation. This will give you valuable skills that you cannot find at other universities across the world.'),
      Icon: <i className="flaticon icons-animate tw-text-blue tw-pl-1  tw-mr-0 tw-text-[43px] flaticon-reading" />,
      Link: '/study-in-eu',
    },
    {
      id: 5,
      title: t('Citizenship'),
      description:
        t('When you have resided in Sweden for a specified period and meet the necessary requirements, you can apply for Swedish citizenship. Typically, after living in Sweden for 5 years, you become eligible to submit your application for citizenship.'),
      Icon: <i className="flaticon icons-animate tw-text-blue tw-pl-1  tw-mr-0 tw-text-[43px] flaticon-visa" />,
      Link: '/citizenship',
    },
    {
      id: 6,
      title: t('Invest in Sweden'),
      description:
        t("There are numerous opportunities for business ventures available. It's important to identify the best opportunity, seize it, and give it your all. To explore more, sign up and visit the Business Section on My Page to unlock potential business ideas and resources tailored to your interests."),
      Icon: <i className="flaticon icons-animate tw-text-blue tw-pl-1 tw-mr-0 tw-text-[43px] flaticon-bussiness-man" />,
      Link: '/investment',
    },
  ];

  const hoverAnimation = {
    rotateY: 360,
  };

  // Transition settings for the animation
  const transitionSettings = {
    duration: 1,
    ease: 'linear',
  };

  return (
    <>
      <div id="services" className=" bg-img5 cmt-bg ">
        <div className="container tw-py-14">
          {/* row */}
          <div className="row">
            <div className="col-lg-10 m-auto">
              {/* section title */}
              <div className="section-title title-style-center_text">
                <div className="title-header tw-text-center">
                  <span>{t('WE EMPOWER YOUR SKILLS TO SUCCEED IN SWEDEN!')}</span>
                  <h2 className="tw-pt-1  tw-text-black">
                    {t('Legal Relocation')} <strong>{t('Solutions For Worldwide Clients')}</strong>
                  </h2>
                </div>
              </div>
              {/* section title end */}
            </div>
          </div>{' '}
          {/* row end*/}
          <div className="row tw-pt-8 g-4">
            {data?.map((item, index) => {
              return (
                <div className="col-lg-6 col-md-12">
                  <div className=" tw-relative hover-div tw-flex  tw-min-h-72 tw-rounded-xl tw-shadow-xl tw-pt-5 sm:tw-px-11 tw-px-5 tw-gap-8 wrapperIcon tw-bg-white">
                    <div className="featured-icon tw-bg-[#F5FAFF] p-1     sm:tw-w-[12%] tw-w-[20%] tw-rounded-tl-3xl tw-rounded-tr-3xl">
                      <div className=" tw-pt-6  iconY">{item?.Icon}</div>
                    </div>
                    <div className="featured-content tw-w-[80%]">
                      <div className="featured-title">
                        <h3>
                          <a className=" tw-text-black  tw-font-medium  tw-text-xl" href="business-visa.html">
                            {item?.title}
                          </a>
                        </h3>
                      </div>
                      <div className="featured-desc">
                        <p className=" tw-text-gray tw-text-justify  tw-font-normal">{item?.description}</p>
                      </div>
                      <div className="cmt-serviceboxbox-readmore tw-pb-5">
                        <Link className=" tw-font-medium" to={`${item?.Link}`}>
                          {t('View More Details')}
                        </Link>
                      </div>
                    </div>
                    <img src={dots} className="  tw-absolute tw-right-0 tw-bottom-0 tw-object-contain " alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSkills;
