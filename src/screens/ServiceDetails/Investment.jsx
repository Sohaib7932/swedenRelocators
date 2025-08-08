import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/signup-screen-of-e-wallet-app.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import Sidebar from "../../components/ScrollableBar";



import inv5 from "../../assets/iconscout/inv5.png";

import { useTranslation } from 'react-i18next';

import Header from "../../components/Header_New/Header";

import inv1 from "../../assets/iconscout/inv1.png";
import inv2 from "../../assets/iconscout/inv2.png";
import inv3 from "../../assets/iconscout/inv3.png";
import inv4 from "../../assets/iconscout/inv4.png";

const Investment = () => {
  const { t, i18n } = useTranslation();
  const isleftlangue = i18n.language === 'ur';
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: 1,
      title: "Asylum",
      description:
        "You have to be in Sweden or on the Swedish border in order to apply for asylum.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-home"></i>
      ),
      Link: "/asylum",
    },
    {
      id: 2,
      title: "Family Reunification",
      description:
        "Family reunification is a recognized reason for the immigration of family members to a country.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>
      ),
      Link: "/family-reunification",
    },
    {
      id: 3,
      title: "Personnummer Sweden",
      description:
        "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>
      ),

      Link: "/personnumer-sweden",
    },
    {
      id: 4,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>
      ),
      Link: "/cpr-number-denmark",
    },
    {
      id: 5,
      title: "Work Permit",
      description:
        "Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>
      ),
      Link: "/work-permit",
    },
    {
      id: 5,
      title: "Business Permit",
      description:
        "Swedish business culture is open and innovative, and starting a business there is relatively simple        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>
      ),

      Link: "/business-permit",
    },
    {
      id: 6,
      title: "Business Visit",
      description:
        "Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>
      ),

      Link: "/business-visit",
    },
    {
      id: 7,
      title: "Citizenship",
      description:
        "When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>
      ),
      Link: "/citizenship",
    },
    {
      id: 8,
      title: "Study in EU",
      description:
        "If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>
      ),
      Link: "/study-in-eu",
    },
    {
      id: 9,
      title: "Global Visit Visas",
      description:
        "For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>
      ),
      Link: "/global-visit-visas",
    },
    {
      id: 10,
      title: "EEA Permits",
      description:
        "Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>
      ),
      Link: "/eea-permits",
    },
    {
      id: 11,
      title: "Parents EU Permit",
      description:
        "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>
      ),
      Link: "/parents-eu-permit",
    },
    {
      id: 12,
      title: "Marriage & Divorce      ",
      description:
        "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>
      ),
      Link: "/marriage-divorce",
    },
    {
      id: 13,
      title: "Company Registration      ",
      description:
        "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link: "/company-registration",
    },
    {
      id: 14,
      title: "House & Offices",
      description:
        "we offer you an easy and painless solution where you can get a place to live without any worries.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link: "/house-offices",
    },
    {
      id: 15,
      title: "Appeal Cases",
      description:
        "Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>
      ),
      Link: "/appeal-cases",
    },
    {
      id: 16,
      title: "EU Citizens Relocation",
      description:
        "Family reunification means that a family that has been split up can apply to be allowed to live together.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>
      ),
      Link: "/eu-family-reunification",
    },
    {
      id: 17,
      title: "Investment",
      description:
        "There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>
      ),
      Link: "/investment",
    },
    {
      id: 18,
      title: "Direct Citizenship    ",
      description:
        "citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>
      ),
      Link: "/direct-citizenship-by-investments",
    },
    {
      id: 19,
      title: "Permanent Residence",
      description:
        "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>
      ),
      Link: "/permanent-residence",
    },
    {
      id: 20,
      title: "Golden Visa    ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
      Link: "/golden-visa-greece-portugal",
    },
  ];

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Investment")}
        regularText={t(
          "Explore investment opportunities in Sweden. We provide assistance for investors seeking growth and permanent solutions."
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
                <div className="   2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <br />
                  <span className=" tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Investment`.replace(/\s+/g, ' ').trim())}</span>

                  <h2 className="tw-text-left">
                    <strong>{t(`Oppurtunities in Sweden`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />
                  <p className="  tw-text-gray">{t(`Swedish market has been witnessing the growing number of
                    foreign companies, especially in the past few years. Sweden
                    has developed a strong and competitive capitalist economy
                    with a generous and universal welfare system that is known
                    as the Nordic Model. With its diverse and stable market,
                    investors are attracted to the country’s growing economy.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className="  tw-text-gray">{t(`There are so many opportunities for business in the country
                    and Future Concerns can help you to connect with other
                    companies in the sector.Some of the reasons that businesses
                    have chosen the Swedish market as their destination are the
                    world-class infrastructure, Low-level of corruption,
                    highly-skilled workforce, capitalistic economy, and friendly
                    business culture.`.replace(/\s+/g, ' ').trim())}</p>

                  <div className="row">
                    <div className="col-md-10 tw-mx-auto">
                      <motion.img
                        animate={imageVariants}
                        className="tw-justify-self-center tw-w-full"
                        src={inv1}
                        alt=""
                        style={{ maxWidth: "450px" }}
                      />
                    </div>
                  </div>
                  <p className="  tw-text-gray">{t(`Sweden’s business climate is very favorable and that’s why
                    it is known as a country of innovation.Many successful and
                    innovative businesses have emerged from Sweden like
                    Ericsson, Sandvik, Spotify, Klarna and many more Sweden has
                    developed a highly competitive capitalist economy with a
                    generous and universal welfare system known as the Nordic
                    Model, making it a very unique opportunity for international
                    investors.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    WE HAVE SCOURED SOME IMPORTANT STEPS
                  </span>
                  <h2 className="tw-text-left">
                    <strong>{t(`To Look For Business Opportunities In Sweden, Which Are:`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`DO THE`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Required Research`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`In Sweden’s online society, the information is easily
                    accessible, so you should do proper research before
                    investing in any business in Sweden. Statistics Sweden is a
                    website where you can look for anything from the
                    demographics of people to industrial capacity and business
                    opportunities. To be successful in the market, it is
                    essential that the right conditions are in place and the
                    market is favorable for you.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`You can also check with the trade organization to get
                    information about the size of the market, types of
                    companies, rules and regulations of that particular sector,
                    and general stats of the market.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`BUILD`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Your Network`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>

                  <br />
                  <p className=" tw-text-gray">{t(`The key to a successful start-up or business is to build
                    networks with relevant organizations or people in a
                    particular sector. By doing this you will be getting the
                    related information of starting and doing business in Sweden
                    as well as you will get to know the work methodologies of
                    competitors.Besides friends, relatives, and colleagues in
                    Sweden, try to find people with similar ideas and thoughts.
                    You could contact the local branch of Swedish Jobs and
                    Society Foundation or Sweden Business, which help-out new
                    businesses in Sweden to expand their network.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />

                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <div className="row ">
                        <div className="col-md-12 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className=" tw-w-full"
                            src={inv2}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`FRANCHISE`.replace(/\s+/g, ' ').trim())}</span>

                      <h2 className="tw-text-left">
                        <strong>{t(`Or Business`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`A franchisee receives support and help from the parent
                        company and a business person has to do everything on
                        his own. Investment opportunities can be of both type
                        and it is your own choice whether you want to start your
                        own new business or want to get a franchise.There are
                        various opportunities for business ventures in Sweden
                        and you should search for business ventures and should
                        invest in the most suitable one. Both have their pros
                        and cons.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>
                  </div>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`GO`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`For It`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`When you have collected all the details and made your mind
                    that where you want to invest in, you should grab the
                    opportunity as soon as possible. The right opportunity might
                    not be in the area where you are residing, and you have to
                    go somewhere else. Sometimes, the opportunity can literally
                    be right in front of your face, but you are blind to it. As
                    the business market is really competitive in Sweden so you
                    might be a big fish in a small pond.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`Sweden’s strong finances, political stability, sound banking
                    system, and a healthy economy make it a robust place for
                    investors. For its size, Sweden is among the biggest
                    beneficiaries of the world for foreign or local investment.
                    It has the Nordic economy with the best macroeconomic
                    performance in the past decade. Sweden is one of the best
                    choices for investment if you want to earn a stable and high
                    revenue. Look for the best and most suitable opportunity,
                    grab it and do your best.The easiest way to invest in Sweden
                    is by purchasing the iShares MSCI Sweden Index ETF (NYSE:
                    EWD), while more advanced investors can consider one of many
                    ADRs.There are many benefits and risks that international
                    investors should consider before investing in Sweden.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />

                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`INVEST IN`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`SWEDISH REAL ESTATE`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`Investing in Swedish real estate is the best choice if you
                    are looking for sustainable investment opportunities, a
                    stable business environment, and an open society. Investment
                    in real estate in Sweden is a profitable choice because the
                    big cities in Sweden are experiencing remarkable growth
                    rates in real estate prices.`.replace(/\s+/g, ' ').trim())}</p>

                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <div className="row ">
                        <div className="col-md-12 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className=" tw-w-full"
                            src={inv3}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className=" tw-text-gray">{t(`Sweden ranks as most business-friendly and logistically
                        efficient nation worldwide, transporting goods and
                        linking manufacturers and consumers with international
                        markets. A fundamental aspect of the Swedish economy is
                        its open and liberal approach to doing business. The
                        country offers a globalized business environment that
                        makes it easy for overseas organizations to work within.
                        Accomplished professionals, sophisticated business
                        procedures and receptiveness to international
                        partnerships allow an unsurpassed ease of operation.
                        Moreover, 85% of the Swedish population are proficient
                        in English.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>
                  </div>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`INVESTMENT IN`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Swedish Real Estate Makes A Great Profit`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`Sweden is a valued destination for international retail
                    businesses. The Swedish economy is the strongest in Europe.
                    Sweden has experienced robust growth in retail sales for 19
                    consecutive years.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`Sweden has experienced a growth in foreign investment in its
                    real estate for several years. The historically low interest
                    rates in conjunction with the availability of finance ensure
                    that Sweden is an increasingly popular market for a diverse
                    range of businesses, especially regarding international
                    retailers, who view Stockholm as one of the most desirable
                    areas to do business in the Scandinavian region.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />

                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`INVEST IN`.replace(/\s+/g, ' ').trim())}</span>
                      <h2 className="tw-text-left">
                        <strong>{t(`DIGITAL TECHNOLOGIES`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`Sweden is a launch pad for going digital as gamechanging
                        technologies revolutionise more and more industries. By
                        tapping into Sweden’s world class technology skills,
                        innovation clusters and vibrant startup scene,
                        international companies can accelerate their journey to
                        a connected, low-carbon future.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>
                    <div className="col-md-6">
                      <div className="row ">
                        <div className="col-md-12 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className=" tw-w-full"
                            src={inv4}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`MARKETS`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`SWEDEN DIGITAL TECHNOLOGIES`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`Today’s hyper-connected world is often taken for granted and
                    most people rarely think about what makes all the technology
                    around us work. This may seem paradoxical given the
                    accelerating growth of the ICT industry and global focus on
                    digitalisation.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`When it comes to using digital technologies to foster
                    sustainable growth, productivity and social development,
                    Sweden’s performance is second to none. Sweden has made a
                    strong commitment to apply new technologies such as AI and
                    IoT to solve larger societal challenges, while retaining
                    values such as openness, collaboration, integrity and
                    ethics. Swedish SME’s are also in the forefront when it
                    comes to e-commerce and building sales over the internet.
                    The contribution of the ICT industry to Sweden’s economy, as
                    a share of GDP, is among the highest in the world. In fact,
                    only Ireland generates a higher share of value add around
                    computer services. More than quarter of a million people in
                    Sweden are directly employed by ICT companies – but there
                    are many more ICT professionals when counting all those
                    engaged in digitalising other industries. The digital sector
                    accounts for approximately 20 per cent of Sweden’s GDP and
                    employs no less than 18 per cent of the working population
                    in the capital city Stockholm.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`As a result, leading tech companies have established their
                    business in Sweden to access the European market, set up R&D
                    or centres of excellence, put new technologies to the test
                    and acquire or partner with Swedish innovators. Apple,
                    Amazon, Facebook, Fujitsu, Google, HCL, HP, IBM, Microsoft,
                    Nvidia, Samsung and Tata are just a few global players who
                    have invested heavily in Sweden.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`SMART`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`INDUSTRY`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`Sweden is at the forefront of the global race toward
                    Industry 4.0. By tapping into the nation’s automation
                    expertise, thriving industrial clusters and clean energy,
                    manufacturers large and small can lead the way to a greener
                    and smarter future.Sweden is one of the world’s most
                    advanced industrial nations and excels when it comes to
                    integrating digital technologies and adopting sustainable
                    practices across industrial ecosystems and value chains.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`Sustainability, innovation and productivity are key
                    components for staying competitive in this decade and
                    beyond. Sweden ranks among the top-ten countries in the
                    world working to develop all three areas. This requires an
                    intrinsic capacity to collaborate, implement new
                    technologies and rapidly adapt to change – all typical
                    traits of Swedish manufacturers that have carved out a
                    leading position in global markets and thrived during
                    previous transformational periods.Industry is the backbone
                    of the Swedish economy and its further development is one of
                    the government’s top priorities. The sector is highly
                    internationalised and employs 20 per cent of the working
                    population, of which 40 per cent are employed by
                    foreign-owned companies. Total exports account for 50 per
                    cent of the nation’s GDP.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`FOOD`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`INDUSTRY`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`Choosing a sustainable lifestyle, including the food you
                    eat, clothes and furniture you buy, comes as second nature
                    to many Swedes. The Creative Industries ecosystem is all
                    about amplifying the impact and international growth of
                    Swedish brands in the vanguard of eco-friendly living.The
                    food industry is Sweden’s third largest sector with a
                    turnover of SEK 200 billion and employs around 48,000 people
                    at 4,800 companies around the country. Sweden’s food imports
                    are currently twice as large as export volumes (approx. SEK
                    50 billion worth). To turn this development around, the
                    Swedish government has launched the National Food Strategy
                    which aims to facilitate a more self-sufficient and globally
                    competitive food industry by 2030, and to stimulate growth
                    and job creation across the country.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`GOING`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`PLANT-BASED`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`Circularity and healthy, increasingly plant-based food have
                    become major focal points for today’s food producers.
                    Swedish food tech startups and many established companies
                    are now at the forefront of developing plant-based protein
                    products, using the Swedish agricultural tradition to
                    transform traditional crops like oat, peas and lupin into
                    new, healthy food and beverage products. Surveys have shown
                    that one in every five Swedes under the age of 30 identify
                    as either vegan or vegetarian which has spurred demand for
                    vegan brands.`.replace(/\s+/g, ' ').trim())}</p>

                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <div className="row ">
                        <div className="col-md-12 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className=" tw-w-full"
                            src={inv5}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className=" tw-text-gray">{t(`Companies that started out small in Sweden (think Oatly)
                        have broken into major consumer markets abroad such as
                        the US and China. Meanwhile, Sweden’s AgTech sector has
                        rapidly expanded. Collaboration initiatives are ramping
                        up to shape tomorrow’s agriculture by introducing
                        sensors, artificial intelligence, Internet of Things and
                        other digital technologies that will optimise food
                        production and harvests. There are at least 20 startups
                        today in the AgTech sector, several of which are
                        addressing global challenges in the food production
                        system.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>
                  </div>

                  <p className=" tw-text-gray">{t(`Another thriving sector in food is aquatec h. Sweden is
                    currently building a land-based fish farming industry
                    powered by renewable energy, where aquaculture systems use
                    water that is recirculated through mechanical and biological
                    filters.`.replace(/\s+/g, ' ').trim())}</p>

                  <p className=" tw-text-gray tw-font-medium">{t(`OTHER WAYS TO INVEST IN SWEDEN ARE AS FOLLOWS`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`OPEN A`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Boutique`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`Boutique business is one of the thriving small-scale
                    businesses in the fashion industry that an aspiring
                    entrepreneur can start in Sweden. Interest in fashion is big
                    in Sweden and the country is headquartering famous brands
                    like Hennes & Mauritz (operating as H&M), J. Lindeberg
                    (operating as JL), Acne, Lindex, Odd Molly, Cheap Monday,
                    Gant, WESC, Filippa K, and Nakkna within its borders.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`All that is required to launch this type of business is a
                    store that is well positioned and money to stock your
                    boutique with clothes and fashion accessories from different
                    clothing labels/designers. The truth is that if your
                    boutique is well located and stocked with quality clothes
                    and fashion accessories, you are likely not going to
                    struggle to attract customers.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`RETAIL OF`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Shoes, Sandals, Slippers And Belts`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`Aside from running a boutique which is a good small-scale
                    business in the fashion industry, opening a store where
                    shoes, sandals, slippers and belts are sold is yet another
                    easy to setup business that an entrepreneur should consider
                    starting. It is indeed a profitable, easy to start, easy to
                    manage and thriving business especially if the business is
                    well positioned.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`So, if you are looking towards leveraging on the big market
                    in the fashion industry in Sweden to start a business, then
                    you should consider opening a store that sells shoes,
                    sandals, slippers, belts, wallets, hats, caps and general
                    leather works as it relates to fashion.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`OPEN A`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Perfume Store`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`It is safe to say that wearing a nice smelling perfume from
                    a good perfume designer gives one confidence. Retailing of
                    perfumes from different designers is yet another profitable
                    small-scale business that an entrepreneur can consider
                    starting in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`This type of business is simple to start and it is also easy
                    to manage. Some of the major things you need to do to get
                    the business running is to rent or lease a shop, and then
                    stock the shop with various brands of perfume. If you are
                    able to secure a good location perhaps in a busy market, you
                    won’t struggle to make daily sales.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`RETAILING OF`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Jewelries And Fashion Accessories`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`If you have cash and you are looking for a viable
                    small-scale business to start in Sweden, then you should
                    look towards starting your own jewelry and fashion
                    accessories shop; a shop where you can sell necklaces,
                    rings, earrings, bangles, ribbons, hairband et al.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`It is indeed a viable and profitable business and aside from
                    the fact that you can sell these items from your shop, you
                    can as well take your fashion accessories to places where
                    you can attract sales. It could be the homes of your family
                    members and friends or even a place where people meet to
                    network.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`OPEN A`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Consignment Shop`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`There are several stuffs that can be sold in a consignment
                    shop and if you are looking towards starting a business in
                    Sweden that requires minimal startup capital, a business
                    that is thriving and profitable, then you should consider
                    opening a consignment shop that deals in fashion wears; a
                    place where people with low income can purchase neatly used
                    suits, shirts, belts, caps, handbags, shoes, wristwatches et
                    al.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`As a matter of fact, there is a large market for secondhand
                    stuffs all over the globe. It is important to locate this
                    type of business in a place that is densely populated by
                    people of low income and a migrant community seems to be an
                    ideal place to start this type of business in Sweden.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`OPEN A`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Bridal Shop`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`A bridal shop is a place where everything about weddings are
                    sold. Wedding gown, shoes, veil and other wedding
                    accessories are part of what you will find in a typical
                    bridal shop. Retailing of wedding gowns and other wedding
                    accessories is indeed a thriving and profitable fashion
                    related business that any serious – minded entrepreneur can
                    successfully launch.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`So, if you are looking towards starting a small- scale
                    business in Sweden, a business that does not require
                    training or special skills to manage, then one of your
                    options is to open a wedding shop`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`OPEN A`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Restaurant`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`Restaurant business is yet another thriving business that
                    can be started on a small-scale in Sweden. Just ensure that
                    you have a blend of both local and international dishes in
                    your restaurant and you will attract both locals and
                    migrants on a regular basis.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`Swedish traditional dishes, some of which are hundreds of
                    years old, are still an important part of Swedish everyday
                    meals, in spite of the fact that modern-day Swedish cuisine
                    adopts many international dishes.`.replace(/\s+/g, ' ').trim())}</p>

                  <br />
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`OPEN A`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Sport Shop`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`Sport activities are a national movement with half of the
                    population actively participating in organized sporting
                    activities. The two main spectator sports are football and
                    ice hockey. In essence, if you are interested in starting a
                    small-scale business in Sweden, then you should consider
                    opening a sport shop.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`Just ensure that your shop is stocked with a wide range of
                    sporting goods and above all, your shop must be
                    strategically located if you intend maximizing profits from
                    this line of business`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray">{t(`If you are an investor who is interested and is either
                    living abroad or in Sweden, you can feel free to contact us`.replace(/\s+/g, ' ').trim())}</p>

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

export default Investment;
