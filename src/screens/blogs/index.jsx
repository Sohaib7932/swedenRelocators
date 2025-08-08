import React, { useEffect } from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner_Page from '../../components/Common/Banner_Page';
import { LiaAngleRightSolid } from 'react-icons/lia';
import profile from '../../assets/images/profile.png';
import { Link, useNavigate } from 'react-router-dom';
// Import blog images from assets/blogs directory
import blog1 from '../../assets/blogs/1.png';
import blog2 from '../../assets/blogs/2.png';
import blog3 from '../../assets/blogs/3.png';
import blog4 from '../../assets/blogs/4.png';
import blog5 from '../../assets/blogs/5.png';
import blog6 from '../../assets/blogs/6.png';
import blog7 from '../../assets/blogs/7.png';
import blog8 from '../../assets/blogs/8.jpg';
import blog9 from '../../assets/blogs/9.jpg';
import blog10 from '../../assets/blogs/10.png';
import blog11 from '../../assets/blogs/11.jpg';
import blog12 from '../../assets/blogs/12.jpg';
import blog13 from '../../assets/blogs/13.jpg';
import blog14 from '../../assets/blogs/14.jpg';
import { GoTriangleRight } from 'react-icons/go';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from 'react-i18next';

import Header from '../../components/Header_New/Header';
import Sidebar from '../../components/ScrollableBar';

const Blogs = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to truncate description to consistent length
  const truncateDescription = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const data = [
    {
      id: 1,
      title: t('5 Things To Keep In Mind If You Are Relocating To Sweden'),
      des: truncateDescription(t('Starting a new life overseas can be a mix of different feelings. If you are planning to visit Sweden or relocating to Sweden, then you should do a lot of research beforehand to adjust to this place easily.')),
      image: blog1,
    },
    {
      id: 2,
      title: t('5 Swedish Foods You Must Try'),
      des: truncateDescription(t('Are you planning to visit Sweden in the near future? Sweden has scrumptious and unique dishes and recipes that you must try while you visit. Swedish food is more than just fish, coffee, or meatballs. With a diet rich in proteins, whole grains, and omega-3, Swedish food has been hailed for its amazing health benefits. Being a visitor or foreigner, it can be difficult for you to find the food items and places in Sweden as most of the people eat at home. The restaurant culture in Sweden is much more different than in other countries.')),
      image: blog2,
    },

    {
      id: 3,
      title: t('A Guide About Student Fee And Admissions In Sweden'),
      des: truncateDescription(t('How expensive it can be to study in Sweden? If you are looking for the answer to this question, then you have to go through the whole blog to get the details on every aspect you need to know about.')),
      image: blog3,
    },
    {
      id: 4,
      title: t('How To Build A Successful Start-Up In Sweden'),
      des: truncateDescription(t('Sweden is known as the land of start-ups because the economic conditions of the country are detrimental to entrepreneurship. Swedish business culture is open and innovative, and starting a business there is relatively simple.')),
      image: blog4,
    },
    {
      id: 5,
      title: t('Work Permit In Sweden - Complete Guide'),
      des: truncateDescription(t('Are you planning to move to Sweden for work? Everyone wants to look for better opportunities to earn a standard living for themselves and their families. As Sweden is known for its strong and growing economy, people are attracted to migrate to Sweden to find better jobs.')),
      image: blog5,
    },
    {
      id: 6,
      title: t('Why You Should Plan Moving Out Of Sweden'),
      des: truncateDescription(t('Relocation is a lofty decision to make on part of an individual more or so, and on a family too. Relocation brings about the obvious challenges that a human might face in a foreign land.')),
      image: blog6,
    },
    {
      id: 7,
      title: t('Immigrating To Sweden - What You Need To Know'),
      des: truncateDescription(t('Relocating or immigrating is a life-changing process. You need adaptations you find yourself being molded in certain ways. Sweden is a Scandinavian nation.')),
      image: blog7,
    },
    {
      id: 8,
      title: t('Business Challenges For Expatriates In Sweden'),
      des: truncateDescription(t('Expatriates in Sweden sure have to work hard to be one of the Swedes and starting a business is one of the challenges they may have to face.')),
      image: blog8,
    },
    {
      id: 9,
      title: t('Why You Shouldn\'t Be Afraid Of Visiting Sweden'),
      des: truncateDescription(t('Visiting Sweden may not be the hot pick for a holiday as compared to the other Western countries but it is the country where you can deal with lesser crowd and take your time to see all the beautiful landmarks.')),
      image: blog9,
    },
    {
      id: 10,
      title: t('6 Best Small Business Ideas In Sweden'),
      des: truncateDescription(t('Would you like to start a profitable business as a foreigner in Sweden? If so, here are six of Sweden\'s best small business ideas & investment opportunities that will generate you a handsome amount.')),
      image: blog10,
    },
    {
      id: 11,
      title: t('5 Common Problems Faced By Immigrants In Sweden'),
      des: truncateDescription(t('Sweden is undoubtedly a fascinating country that is enriched in natural beauty, culture, cool climate, and a fine economy, that attracts immigrants from all across the globe.')),
      image: blog11,
    },
    {
      id: 12,
      title: t('6 Reasons Why Sweden Is An Ideal Place To Study'),
      des: truncateDescription(t('If you are thinking about studying abroad, then visit Sweden. You probably want to know why Sweden is considered as a great destination.')),
      image: blog12,
    },
    {
      id: 13,
      title: t('Places To Visit In Sweden'),
      des: truncateDescription(t('Sweden is known all over the world for many things: cars like Saab and Volvo, music group ABBA, pickled herring, and IKEA\'s DIY megastore.')),
      image: blog13,
    },
    {
      id: 14,
      title: t('Swedish Visit Visa Requirements'),
      des: truncateDescription(t('It\'s very tricky to get a visit visa for many countries. Each has its respective rules and regulations. In this particular blog, we will guide you on what the Swedish embassy would be looking for before granting you a visa!')),
      image: blog14,
    },
  ];

  const navigate = useNavigate();

  const data2 = [
    {
      id: 1,
      title: 'Asylum',
      description: 'You have to be in Sweden or on the Swedish border in order to apply for asylum.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-home"></i>,
      Link: '/asylum',
    },
    {
      id: 2,
      title: 'Family Reunification',
      description: 'Family reunification is a recognized reason for the immigration of family members to a country.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>,
      Link: '/family-reunification',
    },
    {
      id: 3,
      title: 'Personnummer Sweden',
      description: 'The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>,

      Link: '/personnumer-sweden',
    },
    {
      id: 4,
      title: 'CPR Number Denmark',
      description: 'CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>,
      Link: '/cpr-number-denmark',
    },
    {
      id: 5,
      title: 'Work Permit',
      description: 'Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>,
      Link: '/work-permit',
    },
    {
      id: 5,
      title: 'Business Permit',
      description: 'Swedish business culture is open and innovative, and starting a business there is relatively simple        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>,

      Link: '/business-permit',
    },
    {
      id: 6,
      title: 'Business Visit',
      description: 'Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>,

      Link: '/business-visit',
    },
    {
      id: 7,
      title: 'Citizenship',
      description: 'When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>,
      Link: '/citizenship',
    },
    {
      id: 8,
      title: 'Study in EU',
      description: 'If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>,
      Link: '/study-in-eu',
    },
    {
      id: 9,
      title: 'Global Visit Visas',
      description: 'For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>,
      Link: '/global-visit-visas',
    },
    {
      id: 10,
      title: 'EEA Permits',
      description: 'Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>,
      Link: '/eea-permits',
    },
    {
      id: 11,
      title: 'Parents EU Permit',
      description: 'Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>,
      Link: '/parents-eu-permit',
    },
    {
      id: 12,
      title: 'Marriage & Divorce      ',
      description: 'Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>,
      Link: '/marriage-divorce',
    },
    {
      id: 13,
      title: 'Company Registration      ',
      description: 'If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>,
      Link: '/company-registration',
    },
    {
      id: 14,
      title: 'House & Offices',
      description: 'we offer you an easy and painless solution where you can get a place to live without any worries.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>,
      Link: '/house-offices',
    },
    {
      id: 15,
      title: 'Appeal Cases',
      description: 'Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>,
      Link: '/appeal-cases',
    },
    {
      id: 16,
      title: 'EU Citizens Relocation',
      description: 'Family reunification means that a family that has been split up can apply to be allowed to live together.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>,
      Link: '/eu-family-reunification',
    },
    {
      id: 17,
      title: 'Investment',
      description: 'There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>,
      Link: '/investment',
    },
    {
      id: 18,
      title: 'Direct Citizenship     ',
      description: 'citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>,
      Link: '/direct-citizenship-by-investments',
    },
    {
      id: 19,
      title: 'Permanent Residence',
      description: 'If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>,
      Link: '/permanent-residence',
    },
    {
      id: 20,
      title: 'Golden Visa    ',
      description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
      icons: <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>,
      Link: '/golden-visa-greece-portugal',
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Blogs")}
        regularText={t("Stay Informed and Inspired – Explore Our Latest Articles.")}
        backgroundImage={homeBgImage}
      />
      <section className=" md:tw-pt-0 tw-pt-0">
        <div className="container-fluid ">
          <div className="row g-5 ">
            <div className="col-md-8    tw-py-10 tw-bg-white">
              <div className="row tw-pt-6  2xl:tw-pl-[21.5%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                {data?.map((item, index) => {
                  return (
                    <div className="col-lg-6 tw-mb-10">
                      {/* featured-imagebox-post */}
                      <Link to={`/blog_details/${item?.id}`} className=" tw-h-full tw-block tw-shadow-lg tw-rounded-lg tw-bg-white">
                        <div className=" tw-relative tw-overflow-hidden tw-aspect-[4/3] tw-transition-transform tw-duration-300 hover:tw-scale-105">
                          <img width={720} height={630} className="img-fluid tw-w-full tw-h-full tw-object-cover tw-object-center tw-transition-transform tw-duration-300" src={item?.image} alt="image" />
                        </div>
                        <div className=" tw-p-4 tw-h-full tw-flex tw-flex-col">
                          <div className="post-header">
                            <div className="post-title featured-title">
                              <p className=" tw-leading-2 tw-min-h-[3rem]">
                                <a className=" tw-text-black tw-font-medium tw-text-xl " href="blog-single.html">
                                  {item?.title}
                                </a>
                              </p>
                            </div>
                          </div>
                          <div className="  tw-flex tw-gap-2 tw-items-center">
                            <div className=" tw-flex tw-gap-2 tw-items-center">
                              <img src={profile} alt="" className=" tw-rounded-full" />
                              <p className="cmt-meta-line byline     tw-pl-2  tw-text-gray tw-m-0">{t('Sweden Relocators')}</p>
                            </div>

                            <p className=" tw-text-gray m-0">
                              {' '}
                              <i class="fa fa-calendar-check"></i> {t('2024-07-06')}
                            </p>
                          </div>

                          <div className="post-desc featured-desc tw-flex-1">
                            <p className=" tw-text-gray tw-pb-6 tw-pt-4">{item?.des}</p>
                          </div>
                        </div>
                      </Link>
                      {/* featured-imagebox-post end*/}
                    </div>
                  );
                })}
              </div>
            </div>

           
                <Sidebar/>
             
          
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blogs;
