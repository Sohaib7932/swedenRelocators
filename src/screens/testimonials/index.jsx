import React, { useEffect } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import tesi from '../../assets/images/testimonial/01.jpg';
import tesi2 from '../../assets/images/testimonial/02.jpg';
import tesi3 from '../../assets/images/testimonial/03.jpg';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from 'react-i18next';

import Header from '../../components/Header_New/Header';


const Testimonials = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: 1,
      title: 'AB Mack',
      image: tesi3,
      desc: t('Have used their services for getting advice for moving to Sweden, I found them to be resonantly professional and yet cost-effective      '),
    },
    {
      id: 2,
      title: 'Brian',
      image: tesi3,
      desc: t('I thought I knew everything but there is always something which can make your application process smooth.I am sure their services make the difference. Thanks Future Concerns,truly appreciated your advise for this business permit.      '),
    },
    {
      id: 3,
      title: 'Hina Yousof',
      image: tesi,
      desc: t('Moved from UK and in 90 days my family is here with me. Quite straight forward and honest people. I like the way they work.      '),
    },
    {
      id: 4,
      title: 'Ali Azmat',
      image: tesi3,
      desc: t('Got my Schengen visa in 12 days. Well prepared file which I received via DHL in Lahore and submit in Gerry’s office. Thanks, its smooth process better than local consultants at least.      '),
    },
    {
      id: 5,
      title: 'Jawad haider',
      image: tesi3,
      desc: t('From booking online appointment till my visa everything was transparent. I have everything on my online portal. Like this idea. Recommended      '),
    },
    {
      id: 6,
      title: 'Arfa Hashmat',
      image: tesi,
      desc: t('I like the way they worked, specially online system. I believe this system make them different from others, from day one till the decision they keep me updated that whats going on with my application and i update all the documents from my phone. I recommend to those who are curious like me and really wants to know whats going on with their application.      '),
    },
    {
      id: 7,
      title: 'Denial Jhon',
      image: tesi2,
      desc: t('Excellent service and good commitment I really appreciated to all teamwork.      '),
    },
    {
      id: 8,
      title: 'Umar H Khan      ',
      image: tesi,
      desc:t('I was really disturbed as i tried myself with the help of my friends and its get more complicated for me. I wasted 2 years of my life. I google lawyer’s in Malmø and contact many of them but they act so busy. '),
    },
  ];
  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Testimonials")}
        regularText={t(
          "Hear What Our Customers Have to Say – Real Stories, Real Experiences."
        )}
        backgroundImage={homeBgImage}
      />
      <div className="">
        <div className="container md:tw-pt-12 tw-pt-12">
          <div className="">
            <span>{t("TESTIMONIAL")}</span>
            <h2>What Our Clients Say?</h2>
            <p className=" tw-text-gray">
            {t(`  Hear what our clients have to say about partnering with us for corporate and development. We assist our customers in home finding, children’s school, Moving Services, and we can take care of all the paperwork from day one till you moved
              to your new home.`.replace(/\s+/g, ' ').trim())}
            </p>
          </div>

          <div className="row tw-py-12 tw-pb-12">
            {data?.map((item, index) => {
              return (
                <div className="col-md-6 tw-pt-28">
                  <div className="testi_card tw-w-[80%] tw-shadow-lg  tw-mt-12 tw-h-80 tw-relative">
                    <div className=" p-5 tw-shadow-lg tw-w-full  tw-bg-white tw-text-center tw-absolute tw-left-10  -tw-top-20">
                      <p className=" tw-text-2xl tw-text-gray">{item?.desc}</p>
                      <img src={item?.image} alt="" className=" tw-w-20 tw-h-20 tw-my-4 tw-mx-auto tw-rounded-full" />
                      <h5 className="">{item?.title}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
