import React, { useEffect, useState } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import mobile from "../../assets/images/business-person-opening-bank-account.png";
import mobile2 from "../../assets/images/family-doctor-consultation.png";
import mobile3 from "../../assets/images/girl-purchased-car-insurance.png";
import mobile4 from "../../assets/images/family-purchasing-new-home.png";
import mobile5 from "../../assets/images/writing_image.png";
import { GoTriangleRight } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from 'react-i18next'
import Sidebar from "../../components/ScrollableBar";


import Header from "../../components/Header_New/Header";

const New_In_sweden = () => {
  const { t, language } = useTranslation();



  console.log("[LOG221]:" + language);


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
      title: " Citizenship       ",
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
      title: "Golden Visa     ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
      Link: "/golden-visa-greece-portugal",
    },
  ];

  const [isSticky, setIsSticky] = useState(false);
  const [topOffset, setTopOffset] = useState("30%");


  const isleftlangue = language === 'ur';

  useEffect(() => {
    const updateTopOffset = () => {
      if (window.innerWidth < 1700 && window.innerWidth > 1600) {
        setTopOffset("-100%");
      } else if (window.innerWidth < 1600 && window.innerWidth > 1400) {
        setTopOffset("-100%");
      } else if (window.innerWidth > 1800) {
        setTopOffset("-35%");
      } else if (window.innerWidth < 1400 && window.innerWidth > 1000) {
        setTopOffset("-150%");
      } else if (window.innerWidth < 900) {
        setTopOffset("-340%");
      }


      else {
        setTopOffset("-100%");
      }
    };
    updateTopOffset();

    window.addEventListener("scroll", updateTopOffset);
    const handleScroll = () => {
      const bottomSpace =
        document.documentElement.offsetHeight -
        (window.scrollY + window.innerHeight);
      setIsSticky(window.scrollY > 1000);

      console.log("BOTTOM SPACE: " + bottomSpace);
      console.log("WINDOWY: " + window.scrollY);
      console.log("OFFSET " + topOffset);
      console.log("INNER WIDTH " + window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateTopOffset);
    };
  }, []);

  return (<div style={{ position: "relative" }}>
      <Header />
      <Banner_Page
        highlightText={t("New in Sweden")}
        regularText={
          t("Starting fresh in Sweden? We’re here to make your transition smoother. From settling in to navigating local systems, we’ve got you covered. Embrace your new life with confidence and ease.")
        }
        backgroundImage={homeBgImage}
      />

      <div className=" ">
        <section className=" ">
          <div className="container-fluid ">
            <div className="row g-4">
              <div
                className="col-md-8 tw-py-20 tw-bg-white tw-text-justify"
                style={{ direction: isleftlangue ? 'rtl' : 'ltr' }}
              >
                <div className="   2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <span className=" tw-flex tw-items-center tw-gap-5">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`SOCIAL SECURITY NUMBER`)}</span>

                  <h2 className="tw-text-left">
                    <strong className='tw-text-black'>{t(`Personnummer`)}</strong>
                  </h2>

                  <br />
                  <p className="tw-text-gray">
                    {t(`If you are new in Sweden, the first thing you should do is register with the Swedish Tax Authority to get your social security number, also called a personal identity number or personnummer.`.replace(/\s+/g, ' ').trim())} <br />
                    {t(`As an E U citizen, you have the right to live, work, and study in Sweden with or without a personnummer. The personnummer is a 12-digit number issued by Skatteverket. They issue it when they confirm you can support yourself and your family during your first year in Sweden.`.replace(/\s+/g, ' ').trim())}
                  </p>

                  <p className="tw-text-gray">
  {t(
    `Personnummer is not only required to be a part of the social
      security and health care systems in Sweden, which is
      otherwise quite expensive to arrange through private
      insurance companies, but is often used as identification
      proof at all government offices, banks, insurances,
      subscriptions, collection of postal items at the post office
      etc.`.replace(/\s+/g, ' ').trim()
     
  )}
</p>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`TAKE`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`All These Into Consideration`)}</strong>
                    </h2>
                    <br />

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Employment contract(s),`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Proof of savings ex. Bank statement.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Number of members in the family`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Place of residence(must be in Sweden). You can NOT
                          apply for a personnummer while still living abroad.
                          Neither is a holiday address enough. You must have a
                          residential address in Sweden.`.replace(/\s+/g, ' ').trim() .replace(/\s+/g, ' ')
                          .trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`You need to go in person (all the persons in the
                          family) to an office of Skatteverket to apply for a
                          personnummer.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`A legal ID-certificate, preferably a passport for
                          every person applying.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`IDENTIFICATION CARD`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Swedish ID Card`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`Once you have received your Social Security number, you
                      need to book an appointment with Swedish tax
                      authority-Skatteverket to apply for a Swedish ID card.`.replace(/\s+/g, ' ').trim())}</p>
                    <p className=" tw-text-gray">{t(`Anyone who is at least 13 years old and registered for
                      population purposes in Sweden may apply to the Swedish Tax
                      Agency for Swedish ID card. You must be able to identify
                      yourself, in other words prove who you are, with approved
                      ID documentation or via an attester.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`OPENING OF A`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Bank Account`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">
                      <strong className='tw-text-black'>{t(`General requirements:`.replace(/\s+/g, ' ').trim())}</strong>
                    </p>

                    <p className=" tw-text-gray">{t(`In order to open a bank account, you must always be able
                      to identify yourself.`.replace(/\s+/g, ' ').trim())}</p>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <div>
                          <p className=" m-0 tw-text-gray">{t(`You can identify yourself with a valid Swedish
                            identification document, such as a passport, a
                            national identity card or a BankID. You can also
                            identify yourself with a Swedish driving license.`.replace(/\s+/g, ' ').trim())}</p>
                        </div>
                      </li>
                      <li className=" tw-flex tw-gap-3">
                        <div className="">
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <div>
                          <p className=" m-0 tw-text-gray">{t(`If you do not have Swedish identification documents,
                            you can identify yourself with a valid foreign
                            passport or other photo identification document that
                            clearly shows your citizenship and is issued by an
                            authority or some other authorised issuer. Note that
                            the bank may request that you also present other
                            documents.`.replace(/\s+/g, ' ').trim())}</p>
                        </div>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <div>
                          <p className=" m-0 tw-text-gray">{t(`If you do not have any valid identity documents, you
                            must be able to prove who you are and your
                            citizenship by means of other documents issued by a
                            competent authority.`.replace(/\s+/g, ' ').trim())}</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`OPENING OF A`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Bank Account`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">
                      <strong className='tw-text-black'>{t(`Specific requirements:`.replace(/\s+/g, ' ').trim())}</strong>
                    </p>

                    <p className=" tw-text-gray">{t(`If you are a foreign student and willing to open a bank
                      account, you must also be able to identify yourself like
                      all others. In addition, you need`.replace(/\s+/g, ' ').trim())}</p>

                    <div className="row">
                      <div className=" col-md-5">
                        <img src={mobile} className="" alt="" />
                      </div>
                      <div className=" col-md-7">
                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">{t(`A residence permit or a visa (does not apply to EU
                              citizens).`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">{t(`An admission decision confirmation from your
                              university, showing the duration of your studies.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">{t(`The bank is not satisfied with the identity
                              document submitted.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">{t(`The bank determines that the reason given by you
                              to open an account is inadequate.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">{t(`The bank, by opening an account, would be in
                              breach of a legal regulation or directive.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>

                          <li className=" tw-flex  tw-gap-3">
                            <div>
                              <GoTriangleRight className=" tw-text-blue" />
                            </div>
                            <p className=" m-0 tw-text-gray">{t(`You have previously acted dishonestly towards the
                              bank.`.replace(/\s+/g, ' ').trim())}</p>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-12">
                        <ul className=" tw-p-0 tw-pt-4"></ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`BEFORE`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Visiting A Bank …`)}</strong>
                    </h2>
                    <br />

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`You must be able to understand the bank’s questions as
                          well as answer them.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`You must also be able to understand the information
                          that the bank gives you.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`In case you need someone to translate for you then you
                          should bring such a person with you while visiting the
                          bank.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`The bank will ask you about the source of income.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Your account and other bank services must not be used
                          by anyone else unless an agreement for this is held
                          with the bank.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`The bank may ask you additional questions or stipulate
                          other requirements.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>
                  </div>

                  <div className=" tw-pt-6">
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`HOW TO GET A`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Driving License`)}</strong>
                    </h2>
                    <br />

                    <div className="row">
                      <div className=" col-md-5">
                        <img src={mobile3} className="" alt="" />
                      </div>
                      <div className=" col-md-7">
                        <p className=" m-0 tw-text-gray">{t(`In case you have a driving license issued by any EU
                          country then it is valid throughout your stay in
                          Sweden. You can even exchange your driving license
                          with a Swedish license if you have permanent
                          residence(PR).`.replace(/\s+/g, ' ').trim())}</p>

                        <p className=" m-0 tw-text-gray">{t(`A driving license which is issued by any non-EEA
                          country (excluding Switzerland and Japan) is valid for
                          maximum one year in Sweden. It cannot be exchanged
                          with a Swedish license. So if you want to continue
                          driving in Sweden you must avail a swedish driving
                          licence. For which you will have to complete the risk
                          education, theoritical and practical driving exam.`.replace(/\s+/g, ' ').trim())}</p>
                      </div>
                    </div>
                    <p className=" tw-text-gray tw-pt-6">
                      <strong className='tw-text-gray'>{t(`For more details, please visit:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                      <Link
                        to={
                          "https://www.transportstyrelsen.se/en/road/Driving-licences/"
                        }
                      >{t(`https://www.transportstyrelsen.se/en/road/Driving-licences/`.replace(/\s+/g, ' ').trim())}</Link>
                    </p>
                  </div>

                  <div className=" tw-pt-6">
                    {/* <span>{t(`BEFORE`)}</span> */}

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Steps To Get A License`)}</strong>
                    </h2>
                    <br />

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Apply for a learning permit`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Start your driving practice`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Study the theory of driving`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Take the risk training – riskutbildning`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Book a time for a driving test.`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>
                  </div>

                  <div className=" tw-pt-6">
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`LOOKING`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`For Work In Sweden`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">
                      {" "}
                      <Link to={""}>{t(`The Swedish Public Employment Service`.replace(/\s+/g, ' ').trim())}</Link>{" "}
                      {t(`(Arbetsförmedlingen) offers support to people looking for
                      work. You can register either online using your Bank-ID or
                      by personally visiting the nearest Arbetsförmedlingen
                      office. Apart from arbetrsförmedlingen, there are many
                      other privately run job websites like LinkedIn, Indeed,
                      etc. commonly used to find a job in Sweden. These websites
                      usually include job listings and functions where you can
                      upload your CV.`.replace(/\s+/g, ' ').trim())}
                    </p>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`SWEDISH EDUCATION SYSTEM`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`School Admissions`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`Swedish preschools emphasises the importance of play in
                      child’s developement. There is a great focus on basic
                      values and individual needs such as playing together,
                      tolerance and being considerate for others. Preschool is
                      provided for children aged 1 to 5 years.`.replace(/\s+/g, ' ').trim())}</p>

                    <p className=" tw-text-gray">{t(`The year your child turns 6, he or she can participate in
                      a non-compulsory preschool class (sexårsverksamhet)
                      designed to help children meet future classmates and
                      prepare for primary school without the stress of heavy
                      studies or homework. Swedish compulsory schooling is
                      divided ino four stages: förskoleklass (preschool year
                      or year 0), lågstadiet (years 1–3), mellanstadiet (years
                      4–6) and högstadiet (years 7–9).`.replace(/\s+/g, ' ').trim())}</p>

                    <p className=" tw-text-gray">{t(`From the ages of 7 to 16, all children in Sweden are
                      required to attend the compulsory school (grundskola),
                      where they are taught a core group of basic subjects.
                      Families of children between ages six and thirteen are
                      also offered out-of-school care before and after school
                      hours called fritids.`.replace(/\s+/g, ' ').trim())}</p>

                    <p className=" tw-text-gray">{t(`Although preschools and after-school care are paid
                      services, but from the age of 6 years all schooling in
                      Sweden is free of charge and one hot meal during the day
                      is also included. However if you want your child to study
                      in private schools then private and international schools
                      do exist in sweden and there is usually a fee for such
                      schools.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`PARENTAL`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Allowance`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`Parental benefit/allowance is the money you receive to be
                      able to be at home with your child instead of working,
                      seeking work, or studying after childbirth. Both the
                      parents are granted 480 days of leave per child in
                      total(240 days each). 390 of these days are income-based
                      and 90 days are at the minimum level. If you were working
                      in Sweden during the pregnancy or at the time of
                      childbirth, then you might get up to 80% of your salary as
                      parental allowance otherwise a fixed minimum amount
                      decided by the government will be paid. It is not your
                      employer who bears the cost of your parent benefit but it
                      is the Swedish Social Insurance Agency (Försäkringskassan)
                      who pays it.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`MOTHER AND CHILD CARE`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Maternity Clinics`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`The maternity clinic (barnmorskemottagningen) is primary
                      health care facility for pregnant women which are
                      responsible for women’s health care throughout the
                      pregnancy and for child’s health care before, during and
                      after birth. Visits to the government maternity clinics
                      are free, but not in case of private care.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`CHILD`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Health Care Centre`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`At the child health centre or barnavårdscentralen (BVC),
                      you can get tips about your child’s development,
                      breastfeeding, food and illnesses. When you come home
                      after childbirth, you can contact the child health centre
                      to make an appointment for a first meeting. The first
                      meeting is often held at home. At the meeting, the nurse
                      tells you about the child health centre and looks to see
                      how your baby is doing.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`CHILD`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Care Allowance (Barnbidrag)`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`Children who are born in Sweden or started living in
                      Sweden before their first birthday are entitled to receive
                      child allowance starting from one month after their birth.
                      The allowance is paid to both parents until the child
                      turns 16.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`REGISTER`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`With Försäkringskassan`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`You need to register with Försäkringskassan (the Swedish
                      Social Insurance Agency) to qualify for various benefits
                      for eg. child care allowance, unemployment benefit,
                      parental benefit, etc. Read more at
                      www.forsakringskassan.se`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`HEALTH CARE`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Health Centre`)}</strong>
                    </h2>
                    <br />

                    <div className="row tw-items-center">
                      <div className="col-md-5">
                        <img src={mobile2} alt="" />
                      </div>
                      <div className="col-md-7">
                        <p className=" tw-text-gray">{t(`You can visit your local health centre – vårdcentral.
                          These centres provide a starting point for most
                          medical treatments in Sweden.The staff can help you
                          with health related matters and write referrals –
                          remisser, which you need in order to see a specialist.`.replace(/\s+/g, ' ').trim())}</p>
                      </div>
                    </div>
                  </div>

                  <div className=" tw-pt-6">
                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`COSTS`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`And Fees`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`The costs and fees for visiting a vårdcentral vary from
                      county to county. But the costs of a visit is usually
                      between 100 – 300 SEK and normally free for everyone under
                      20. Don’t forget to cancel an appointment if you don’t
                      need it, as you will otherwise have to pay the full costs
                      of the defaulted visit.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  <div className=" tw-pt-6">
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`COSTS`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Is Covered?`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`Anyone, registered as resident in Sweden, is entitled to
                      free dental care up to and including the 31 of December of
                      the year you turn 23. Adults on the other hand, pay a
                      large part of their dental care costs themselves, starting
                      on the 1 January of the year they turn 23.`.replace(/\s+/g, ' ').trim())}</p>

                    <p className=" tw-text-gray">{t(`For asylum seekers and undocumented immigrants: you have
                      the right to receive dental care free of charge until your
                      18th birthday.`.replace(/\s+/g, ' ').trim())}</p>
                    <p className=" tw-text-gray">{t(`You are, as an adult, entitled to a dental care grant of
                      300 or 600 SEK a year. You can save the grant for two
                      years and use it on one occasion, but you can’t save more
                      than two grants at the time.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  <div className=" tw-pt-6">
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`WHERE DO`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`I Find A Dentist?`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`You will get a list with all the dentists affiliated with
                      the public dental service – Folktandvården.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`LANGUAGE`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Courses`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">
                      <strong className='tw-text-black'>{t(`Learn Swedish in Sweden`.replace(/\s+/g, ' ').trim())}</strong>
                    </p>

                    <div className="row">
                      <div className=" col-md-5">
                        <img src={mobile5} className="" alt="" />
                      </div>
                      <div className=" col-md-7">
                        <p className=" tw-text-gray">{t(`Depending on the location of your stay, there are
                          different options for learning Swedish while in the
                          country. More information at: www.sweden.se.`.replace(/\s+/g, ' ').trim())}</p>

                        <p className=" tw-text-gray">{t(`Folkuniversitetet offers Swedish courses at different
                          levels.`.replace(/\s+/g, ' ').trim())}</p>
                        <p className=" tw-text-gray">{t(`Study associations also offer language courses and a
                          wide range of other courses. See a list of study
                          associations.`.replace(/\s+/g, ' ').trim())}</p>
                        <p className=" tw-text-gray">{t(`SFI-courses (Swedish for immigrants). Once you have
                          become a resident in Sweden and have been issued a
                          personal identity number (personnummer) you can
                          contact your local municipality for information about`.replace(/\s+/g, ' ').trim())}</p>
                      </div>

                      <div className="col-md-12">
                        <p className=" tw-text-gray">{t(`Swedish lessons for immigrants (SFI). SFI is basic
                          training in the Swedish language for adults who do not
                          have Swedish as their first language. You can study
                          SFI full-time or part-time. The training is free of
                          charge.`.replace(/\s+/g, ' ').trim())}</p>
                      </div>
                    </div>
                  </div>

                  <div className=" tw-pt-6">
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`UNEMPLOYMENT`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Insurance`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`Payouts of unemployment insurance take two forms, a basic
                      benefit or an income-related benefit. Registered yourself
                      for A-Kassa as soon you start your work.`.replace(/\s+/g, ' ').trim())}</p>

                    <p className=" tw-text-gray">{t(`Unemployment insurance is not a part of the social
                      insurance system in Sweden. Unemployment insurance is
                      connected closely to the trade unions but is legally
                      independent. When you start working in Sweden, investigate
                      which unemployment insurance fund (widely known as
                      A-Kassa) is available.`.replace(/\s+/g, ' ').trim())}</p>

                    <p className=" tw-text-gray">{t(`In order to receive an income-based benefit, you must have
                      been a member of a voluntary unemployment insurance fund
                      (A-kassa) for 12 months and have worked (been employed)
                      for at least six months. In addition, some trade unions
                      offer additional insurance against loss of income.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  <div className=" tw-pt-6">
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`RECOGNITION OF`)}</span>

                    <h2 className="tw-text-left">
                      <strong className='tw-text-black'>{t(`Higher Education Qualifications`)}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`The European Commission has devised a system known as ECTS
                      (European Credit Transfer System) . It allows for the
                      transfer of higher education credits between European
                      countries. The Swedish Council for Higher Education (UHR)
                      evaluates foreign qualifications in order to provide
                      support for people looking for work in Sweden, people who
                      wish to continue studying, or for employers who wish to
                      employ someone with foreign qualifications.`.replace(/\s+/g, ' ').trim())}</p>

                    <p className=" tw-text-gray tw-font-medium">{t(`Figuring out the responsibilities of the different
                      authorities isn’t all that easy. Who is responsible for
                      what? Whom should you turn to with your questions,
                      applications and concerns?`.replace(/\s+/g, ' ').trim())}</p>

                    <p className=" tw-text-gray">{t(`This guide gives you a brief overview of the different
                      authorities and their main responsibilities.`.replace(/\s+/g, ' ').trim())}</p>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Migrationsverket (Migration Agency)`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Skatteverket (Tax Agency)`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Arbetsförmedlingen (Public Employment Service)`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Försäkringskassan (Social Insurance Agency)`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Skolverket (National Agency for Education)`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Jordbruksverket (Swedish Board of Agriculture)`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Tullverket (Swedish Customs)`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Transportstyrelsen (Transport Agency) & Trafikverket
                          (Transport Administration)`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Länsstyrelserna (the County administrative boards)`.replace(/\s+/g, ' ').trim())}</p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        <p className=" m-0 tw-text-gray">{t(`Landstingen (County councils)`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>

                    <div className=" tw-pt-6">
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`MIGRATIONSVERKET`)}</span>

                      <h2 className="tw-text-left">
                        <strong className='tw-text-black'>{t(`(Migration Agency)`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`Migrationsverket (Migration Agency) is the authority to
                        turn to if you want to visit, live in or seek asylum in
                        Sweden, or if you want to become a Swedish citizen.
                        Migrationsverket is also responsible for the settlement
                        of certain new arrivals and decides on compensation to
                        municipalities and counties.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div className=" tw-pt-6">
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`SKATTEVERKET`)}</span>

                      <h2 className="tw-text-left">
                        <strong className='tw-text-black'>{t(`(Tax Agency)`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`Skatteverket (The Tax Agency) is in charge of tax
                        matters but is also responsible for Sweden’s population
                        register. Skatteverket does your folkbokföring
                        (registration), You can als apply for a Swedish ID card`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div className=" tw-pt-6">
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`ARBETSFÖRMEDLINGEN`)}</span>

                      <h2 className="tw-text-left">
                        <strong className='tw-text-black'>{t(`(Public Employment Service)`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`Arbetsförmedlingen (the Public Employment Service) is
                        mainly responsible for labor related issues.`.replace(/\s+/g, ' ').trim())}</p>
                      <p className=" tw-text-black tw-font-semibold">{t(`Arbetsförmedlingen has three main services for Newly
                        arrived people:`.replace(/\s+/g, ' ').trim())}</p>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`Nystartsjobb`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`Instegsjobb`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`Etableringspaket(for peple covered by the law 2010:
                            197)`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>
                    </div>

                    <div className=" tw-pt-6">
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`FÖRSÄKRINGSKASSAN`)}</span>

                      <h2 className="tw-text-left">
                        <strong className='tw-text-black'>{t(`(Social Insurance Agency)`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`Försäkringskassan (the social insurance Agency) is in
                        charge for the social insurance in Sweden and their main
                        task is to ensure you get the benefits and allowances
                        you are entitled to. The social insurance covers
                        everyone who lives and works in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      <p className=" tw-text-gray">{t(`Försäkringskassan is not always the determining
                        authority (the one taking the actual decision whether or
                        not you are entitled to a benefit or allowance), but is
                        usually the one who pays out the benefits and
                        allowances.`.replace(/\s+/g, ' ').trim())}</p>
                      <p className=" tw-text-black tw-font-semibold">{t(`Newbie relevant benefits and allowances (among many):`.replace(/\s+/g, ' ').trim())}</p>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`Etableringsersättning(introduction supplement)
                            Information in Swedish, English, Arabic, Dari,
                            Tingrinja, Somali)`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`Etableringstillägg(financial supplement that can be
                            added to the introduction supplement if you have
                            children) Information in Swedish`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`Bostadsersättning(housing allowance)`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`Föräldraförsäkring(parental leave)`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>
                    </div>

                    <div className=" tw-pt-6">
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`SKOLVERKET`)}</span>

                      <h2 className="tw-text-left">
                        <strong className='tw-text-black'>{t(`(National Agency For Education)`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`Skolverket (National Agency for Education) is the
                        central authority for education in Sweden. They offer an
                        English- language guide to the Swedish school system.
                        They also process applications for teachers with foreign
                        qualifications that wish to work in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div className=" tw-pt-6">
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`JORDBRUKSVERKET`)}</span>

                      <h2 className="tw-text-left">
                        <strong className='tw-text-black'>{t(`(Board Of Agriculture)`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`Jordbruksverket is in charge of agricultural and
                        horticultural matters in Sweden. They are the authority
                        to turn to if you want to bring your dog or cat to
                        Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div className=" tw-pt-6">
                      <br />
                      <span>{t(`TULLVERKET`)}</span>
                      <h2 className="tw-text-left">
                        <strong className='tw-text-black'>{t(`(Customs)`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`Tullverket (Customs) is charge of the flows of goods in
                        and out of Sweden. Check with Tullverket when bringing
                        or shipping goods in and out of Sweden. They have a
                        guide in English especially for Newbies.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div className=" tw-pt-6">
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`TRANSPORTSTYRELSEN (TRANSPORT AGENCY)`)}</span>

                      <h2 className="tw-text-left">
                        <strong className='tw-text-black'>{t(`& Trafikverket (Transport Administration)`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`Transportstyrelsen and Trafikverket are in charge of
                        everything concerning driving licenses as well as other
                        transport- and traffic-related rules and regulations in
                        Sweden. If you want to find out more visit their common
                        website – körkortsportalen –`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div className=" tw-pt-6">
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`KOMMUNERNA`)}</span>

                      <h2 className="tw-text-left">
                        <strong className='tw-text-black'>{t(`(The Municipalities)`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`Kommunerna (the municipalities) fill an important and
                        complex task in Sweden. They are responsible for the SFI
                        teaching, Komvux (adult education) and
                        samhällsorientering (social orientation). Yet, they are
                        also responsible for the receiving and housing of
                        Newbies covered by the law (2000: 1383), and shall, if
                        necessary, provide practical assistance in connection
                        with the settlement.`.replace(/\s+/g, ' ').trim())}</p>

                      <p className=" tw-text-gray">{t(`The municipalities are furthermore responsible for the
                        financial support of Newbies who are not covered by law
                        (2010:197). You belong to the municipality where you
                        made your registration (folkbokföring).`.replace(/\s+/g, ' ').trim())}</p>

                      <p className=" tw-text-black tw-font-semibold">{t(`Your municipality is in charge for:`.replace(/\s+/g, ' ').trim())}</p>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`SFI(Swedish teaching)`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`Komvux(Adult education)`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`Samhällsorientering(Social Orientation)`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`Education (child care, preschool, school etc.)`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`Financial support for Newbies who aren’t covered by
                            the law (2010:197)`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`Receiving and Housing of Newbies (covered by the law
                            200: 1383)`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>
                    </div>

                    <div className=" tw-pt-6">
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`LÄNSSTYRELSERNA`)}</span>

                      <h2 className="tw-text-left">
                        <strong className='tw-text-black'>{t(`(The County Administrative Boards)`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`Länsstyrelserna (the county administrative boards)
                        represent the government in the county. Their task is to
                        coordinate and supervise the work of the different
                        actors and authorities and thereby ensure that national
                        goals and objects are achieved. It is Länsstyrelserna’s
                        task to ensure that the municipalities are prepared to
                        receive Newbies, but also help the municipalities
                        coordinate the SFI teaching and the society orientation.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div className=" tw-pt-6">
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`LANDSTINGEN`)}</span>

                      <h2 className="tw-text-left">
                        <strong className='tw-text-black'>{t(`(The County Councils)`)}</strong>
                      </h2>
                      <br />

                      <p className=" tw-pt-8 tw-text-gray">{t(`Landstingen (the county councils) are in charge of
                        everything concerning healthcare matters in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      <p className="  tw-text-black tw-pt-6   tw-font-semibold">{t(`Länsstyrelserna (The County administrative boards)`.replace(/\s+/g, ' ').trim())}</p>

                      <p className=" tw-text-gray">{t(`Länsstyrelserna (the county administrative boards)
                        represent the government in the county. Their task is to
                        coordinate and supervise the work of the different
                        actors and authorities and thereby ensure that national
                        goals and objects are achieved. It is Länsstyrelserna’s
                        task to ensure that the municipalities are prepared to
                        receive Newbies, but also help the municipalities
                        coordinate the SFI teaching and the society orientation.`.replace(/\s+/g, ' ').trim())}</p>

                    </div>

                    <div>
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`ACCOMODATION`)}</span>

                      <h2 className="tw-text-left">
                        <strong className='tw-text-black'>{t(`Finding Home`)}</strong>
                      </h2>
                      <br />

                      <div className="row tw-items-center">
                        <div className="col-md-6">
                          <img src={mobile4} alt="" />
                        </div>
                        <div className="col-md-6">
                          <p className=" tw-text-gray">{t(`Perhaps you arranged temporary lodging or rented a
                            room before arriving in Sweden and may want to move
                            as temporary arrangements come to an end. Looking
                            for your own place to stay can be a challenging task
                            in larger cities such as Stockholm, Gothenburg and
                            Malmö, where available housing remains relatively
                            scarce.`.replace(/\s+/g, ' ').trim())}</p>
                          <p className=" tw-text-gray">{t(`You can rent ‘first-hand’ or ‘second-hand’ in
                            Sweden. First-hand (första hand) means you sign an
                            agreement with the owner of the building, while
                            second-hand (andra hand) means you sign an agreement
                            with someone who owns the flat or has the first-hand
                            contract on the flat.`.replace(/\s+/g, ' ').trim())}</p>
                        </div>

                        <p className=" tw-text-gray">{t(`To get a first-hand contract, you need to register to
                          be put on the municipal waiting list (bostadskö) and
                          it can take anywhere from a few days in some
                          municipalities to up to ten years for central
                          locations in cities like Stockholm for a first-hand
                          contract to become available.`.replace(/\s+/g, ' ').trim())}</p>
                        <p className=" tw-text-gray">{t(`As a new resident, you’ll probably be renting a flat
                          from someone who sublets in a second-hand arrangement.
                          It is extremely important to make sure that the tenant
                          co-operation board of the building
                          (bostadsrättsföreningen) or the landlord has signed
                          off on second-hand leasing. If you rent a flat from a
                          subletter who doesn’t have permission, you run the
                          risk of being evicted (to make a long story short).`.replace(/\s+/g, ' ').trim())}</p>

                        <p className=" tw-text-gray">{t(`Useful websites for finding flats in cities around the
                          country are`.replace(/\s+/g, ' ').trim())}</p>
                      </div>
                    </div>

                    <div className=" tw-pt-6">
                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`USEFULL`)}</span>

                      <h2 className="tw-text-left">
                        <strong className='tw-text-black'>{t(`LINKS`)}</strong>
                      </h2>
                      <br />
                      <ul className=" tw-p-0">
                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Personnummer & ID card`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.skatteverket.se" target="_blank" rel="noopener noreferrer">
                              {t(`www.skatteverket.se`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Application for Swedish Language`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://malmo.se/…/Sfi—svenska…/Sfi-intensivkurs.html" target="_blank" rel="noopener noreferrer">
                              {t(`https://malmo.se/…/Sfi—svenska…/Sfi-intensivkurs.html`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Apartments Search`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.boplats.se" target="_blank" rel="noopener noreferrer">
                              {t(`www.boplats.se`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Registration for Job Search`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.arbetsförmedlingen.se" target="_blank" rel="noopener noreferrer">
                              {t(`www.arbetsförmedlingen.se`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Business Registration`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.verksamt.se" target="_blank" rel="noopener noreferrer">
                              {t(`www.verksamt.se`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Driving Test`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.trafikverket.se/korkort/boka-prov/" target="_blank" rel="noopener noreferrer">
                              {t(`https://www.trafikverket.se/korkort/boka-prov/`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Change your EU B-Driving License`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://transportstyrelsen.se/…/ansokan-om-utbyte-av…/" target="_blank" rel="noopener noreferrer">
                              {t(`https://transportstyrelsen.se/…/ansokan-om-utbyte-av…/`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Change your Taxi License`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://transportstyrelsen.se/…/taxi…/" target="_blank" rel="noopener noreferrer">
                              {t(`https://transportstyrelsen.se/…/taxi…/`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Buy/Sell Everything`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.blocket.se" target="_blank" rel="noopener noreferrer">
                              {t(`www.blocket.se`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Buy Sell House`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.hemnet.se" target="_blank" rel="noopener noreferrer">
                              {t(`www.hemnet.se`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Furniture`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.ikea.se" target="_blank" rel="noopener noreferrer">
                              {t(`www.ikea.se`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Residence Permit`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.migrationsverket.se" target="_blank" rel="noopener noreferrer">
                              {t(`www.migrationsverket.se`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Foreign Educational Document evaluation`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.uhr.se" target="_blank" rel="noopener noreferrer">
                              {t(`www.Uhr.se`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Applying for Study in Sweden-English`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.universityadmisisons.se" target="_blank" rel="noopener noreferrer">
                              {t(`www.universityadmisisons.se`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Apply for study in Sweden-Swedish`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.antagning.se" target="_blank" rel="noopener noreferrer">
                              {t(`https://www.antagning.se`)}
                            </a>
                          </div>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.utbyten.se" target="_blank" rel="noopener noreferrer">
                              {t(`https://www.utbyten.se`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`PHD Search`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.euraxess.se" target="_blank" rel="noopener noreferrer">
                              {t(`https://www.euraxess.se`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Apply for Children’s Playgroup and School`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://malmo.se/…/Utbildning-och-forskola/Forskola.html" target="_blank" rel="noopener noreferrer">
                              {t(`https://malmo.se/…/Utbildning-och-forskola/Forskola.html`)}
                            </a>
                          </div>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://malmo.se/…/Utbildni…/Utbildningar-for-vuxna.html" target="_blank" rel="noopener noreferrer">
                              {t(`https://malmo.se/…/Utbildni…/Utbildningar-for-vuxna.html`)}
                            </a>
                          </div>
                        </li>

                        <li className=" ">
                          <p className=" m-0 tw-text-gray tw-font-semibold">{t(`Social Rights`.replace(/\s+/g, ' ').trim())}</p>
                          <div className=" tw-py-2">
                            <a className=" tw-font-normal" href="https://www.forsakringskassan.se" target="_blank" rel="noopener noreferrer">
                              {t(`https://www.forsakringskassan.se`)}
                            </a>
                          </div>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>

              <Sidebar />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>);
};

export default New_In_sweden;
