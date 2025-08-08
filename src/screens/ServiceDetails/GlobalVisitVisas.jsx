import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/man-searching-air-ticket-for-summer-travel.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from 'react-i18next';
import Header from "../../components/Header_New/Header";
import Sidebar from "../../components/ScrollableBar";


import gv1 from "../../assets/iconscout/gv1.png";
import gv2 from "../../assets/iconscout/gv2.png";
import gv3 from "../../assets/iconscout/gv3.png";
import gv4 from "../../assets/iconscout/gv4.png";

const GlobalVisitVisas = () => {
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
      title: "Golden Visa ",
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
        highlightText={t("Golden Visa (Greece - Potugal)")}
        regularText={t(
          "Travel with confidence. We provide guidance for global visit visas tailored to your destination and needs."
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
                <div className="  2xl:tw-pl-[21.3%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                  <div>
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Greece and Portugal`.replace(/\s+/g, ' ').trim())}</span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`Your Pathway to European Residency`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br></br>
                    <p className="tw-text-gray">{t(`Golden Visa programs in Greece and Portugal provide a
                      unique opportunity for non-EU investors to secure
                      residency in these countries through investment. These
                      programs allow investors and their families to enjoy the
                      many benefits of European residency, including visa-free
                      travel within the Schengen Zone, access to quality
                      education and healthcare, and, after a certain period,
                      eligibility for citizenship. Here’s a comprehensive guide
                      to both programs, designed to help you make an informed
                      decision about investing in Greece or Portugal.`.replace(/\s+/g, ' ').trim())}</p>
                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Greece
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`Golden Visa Program`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    <br />

                    <ul className="tw-p-0 ">
                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-9 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={gv1}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-text-black">{t(`Why Choose Greece?`.replace(/\s+/g, ' ').trim())}</strong> Greece, with
                              its rich historical legacy, Mediterranean climate,
                              and vibrant culture, has become one of the most
                              desirable locations for investors seeking
                              residency in Europe. The Golden Visa program in
                              Greece is one of the most accessible and
                              affordable in Europe, requiring a minimum
                              investment of €250,000. This program offers not
                              only a gateway to the European Union but also the
                              potential to enjoy Greece’s cosmopolitan cities,
                              pristine beaches, and high quality of life.
                              <p>
                                <br />
                              </p>
                            </p>
                          </li>
                        </div>
                      </div>
                      <strong className="tw-text-black">{t(`Key Benefits of the Greece Golden Visa:`.replace(/\s+/g, ' ').trim())}</strong>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-gray">{t(`Investment Options for the Greek Golden Visa:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                          <br />
                          The primary route for obtaining a Greek Golden Visa is
                          through real estate investment, with a minimum
                          required amount of €250,000. Eligible investments
                          include:
                          <ul className="tw-pl-0">
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              Real Estate: Purchase residential or commercial
                              property, or a plot of land for construction.
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              Property Lease: Enter into a 10-year lease
                              agreement for hotel accommodation or furnished
                              tourist residences.
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              Other potential options include capital
                              contributions to Greek businesses and investments
                              in government bonds or stocks, though real estate
                              remains the most popular route.
                            </li>
                          </ul>
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Portugal
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`Golden Visa Program`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Why Choose Portugal?`.replace(/\s+/g, ' ').trim())}</strong><br/> Portugal offers
                          a high standard of living, a mild climate, excellent
                          infrastructure, and a strong, stable economy, making
                          it one of Europe’s top destinations for residency by
                          investment. The Golden Visa program is renowned for
                          its flexibility and its pathway to European
                          citizenship. With a minimum investment of €280,000, it
                          provides access to the Schengen Zone, quality
                          healthcare, education, and the opportunity to become a
                          Portuguese citizen after five years.
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Key Benefits of the Portugal Golden Visa:`.replace(/\s+/g, ' ').trim())}</strong>
                          <ul className="tw-pl-0">
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              Flexible Investment Amount: Options start from
                              €280,000, depending on type and location of the
                              investment.
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              Residency for Family Members: Includes spouse,
                              children under 18, dependent children over 18 (if
                              financially dependent), and parents in the same
                              application.
                            </li>
                            <div className="row tw-flex tw-items-center">
                              <div className="col-md-6">
                                <div className="row ">
                                  <div className="col-md-9 tw-mx-auto">
                                    <motion.img
                                      animate={imageVariants}
                                      className=" tw-w-full"
                                      src={gv3}
                                      alt=""
                                      style={{ maxWidth: "450px" }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <li className=" tw-flex  tw-gap-3">
                                  <div>
                                    <GoTriangleRight className=" tw-text-blue" />
                                  </div>
                                  Pathway to Citizenship: Apply for citizenship
                                  after five years without renouncing existing
                                  citizenships.
                                </li>
                                <li className=" tw-flex  tw-gap-3">
                                  <div>
                                    <GoTriangleRight className=" tw-text-blue" />
                                  </div>
                                  Low Minimum Stay Requirement: Only requires an
                                  average of 7 days per year in Portugal.
                                </li>
                              </div>
                            </div>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              Visa-Free Schengen Travel: Grants visa-free access
                              to all Schengen countries.
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              High Quality of Life: Portugal ranks high for
                              safety, healthcare, education, and quality of
                              life, ideal for families and retirees.
                            </li>
                          </ul>

                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Investment Options for the Portuguese Golden Visa:`.replace(/\s+/g, ' ').trim())}</strong>
                          <ul className="tw-pl-0">
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              Real Estate Investment:
                              <br />
                              €500,000: Minimum investment in real estate
                              anywhere in Portugal.
                              <br />
                              €350,000: Investment in properties older than 30
                              years or in urban renewal areas.
                              <br />{t(`€280,000: Investment in low-density areas.`.replace(/\s+/g, ' ').trim())}</li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              Capital Transfer: €1 million for bank deposits or
                              other investments.
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              Business Investment: €350,000 for job-creating
                              businesses or €250,000 for cultural heritage.
                            </li>
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              Fund Investment: €500,000 in approved investment
                              funds.
                            </li>
                          </ul>
                        </p>
                      </li>
                    </ul>
                    <div>
                      <br />

                      <span className="tw-flex tw-items-center tw-gap-2">
                        <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Steps to`.replace(/\s+/g, ' ').trim())}</span>
                      <h2 className="tw-text-left">
                        <strong className="tw-text-black">{t(`Apply for a Golden Visa`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>

                      <br />
                      <p className="tw-text-gray">{t(`Applying for a Golden Visa involves several important
                        steps to ensure a smooth and successful process. Here’s
                        what to expect:`.replace(/\s+/g, ' ').trim())}</p>

                      <strong className="m-0 tw-text-black">{t(`Consultation and Investment Selection`.replace(/\s+/g, ' ').trim())}</strong>

                      <ul className="tw-p-0 ">
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className="m-0 tw-text-gray">
                            <>Decide on the investment option:</>{t(`Work with
                            professional advisors to choose the investment that
                            aligns with your financial goals and lifestyle.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>

                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className="m-0 tw-text-gray">
                            <>Document Preparation and Due Diligence:</>{t(`Collect
                            necessary documents, such as proof of funds,
                            background checks, and identification.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <div className="row tw-flex tw-items-center">
                          <div className="col-md-6">
                            <div className="row ">
                              <div className="col-md-9 tw-mx-auto">
                                <motion.img
                                  animate={imageVariants}
                                  className=" tw-w-full"
                                  src={gv4}
                                  alt=""
                                  style={{ maxWidth: "450px" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className="m-0 tw-text-gray">
                                <>Investment Completion:</>{t(`Finalize your chosen
                                investment (e.g., real estate purchase or
                                capital transfer).`.replace(/\s+/g, ' ').trim())}</p>
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className="m-0 tw-text-gray">
                                <>Application Submission:</>{t(`Submit the Golden
                                Visa application through the official government
                                channels.`.replace(/\s+/g, ' ').trim())}</p>
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className="m-0 tw-text-gray">
                                <>Biometric Appointment:</>{t(`Schedule and attend
                                an appointment for biometric data collection to
                                complete the residency process.`.replace(/\s+/g, ' ').trim())}</p>
                            </li>

                            <li className=" tw-flex  tw-gap-3">
                              <div>
                                <GoTriangleRight className=" tw-text-blue" />
                              </div>
                              <p className="m-0 tw-text-gray">
                                <>Residence Permit Issuance:</>{t(`Once approved,
                                receive your Golden Visa residence permit.`.replace(/\s+/g, ' ').trim())}</p>
                            </li>
                          </div>
                        </div>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className="m-0 tw-text-gray">
                            <>Renewal and Maintenance:</>{t(`Both Greece and
                            Portugal require periodic renewals and maintaining
                            minimum residency to keep the permit active.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <br />
                      <span className=" tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                        Additional Considerations
                      </span>
                      <h2 className="tw-text-left">
                        <strong className="tw-text-black">{t(`For Investors`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />

                      <ul className="tw-p-0 ">
                        <li className="tw-flex tw-items-center tw-gap-3">
                          <p className="m-0 tw-text-gray">
                            <strong className="tw-text-black">{t(`Tax Benefits and Planning:`.replace(/\s+/g, ' ').trim())}</strong>
                            <br /> Greece and Portugal both offer tax advantages
                            for foreign residents. Portugal’s Non-Habitual
                            Resident (NHR) program is especially appealing, with
                            significant tax breaks for up to 10 years on foreign
                            income and some local income exemptions.
                            <p>
                              <br />
                            </p>
                          </p>
                        </li>

                        <li>
                          <p className="m-0 tw-text-gray">
                            <strong className="tw-text-black">{t(`Healthcare and Education:`.replace(/\s+/g, ' ').trim())}</strong> <br />
                            Both countries provide high-quality healthcare and
                            educational options. Portugal stands out for its
                            international and private schools with English
                            programs, while Greece offers international
                            schooling primarily in Athens.
                            <p>
                              <br />
                            </p>
                          </p>
                        </li>

                        <li>
                          <p className="m-0 tw-text-gray">
                            <strong className="tw-text-black">{t(`Lifestyle and Language:`.replace(/\s+/g, ' ').trim())}</strong>
                            <br /> Greece is known for its rich cultural
                            heritage, Mediterranean climate, and active social
                            life. Basic Greek can be beneficial, though English
                            is commonly used in tourist and business settings.
                            Portugal, with its scenic beauty and mild weather,
                            offers a relaxed lifestyle where English is widely
                            spoken, especially in urban centers.
                            <p>
                              <br />
                            </p>
                          </p>
                        </li>
                      </ul>

                      <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">
                      <h7 className="tw-text-center tw-text-black tw-pt-4" style = {{fontSize: '1em'}}>
                            <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                              {t('Sign Up Today!')}{" "}
                            </strong>
                          
                          </h7>
                        </Link>
                      <br />
                      <p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether you're
                        seeking assistance with relocation, permits, visas,
                        legal processes, or settling into a new life, we're here
                        to help. Our comprehensive services cover everything
                        from work and study opportunities to family
                        reunifications, business support, and much more. Let us
                        guide you every step of the way—start your seamless
                        experience now!`.replace(/\s+/g, ' ').trim())}</p>
                    </div>
                  </div>
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

export default GlobalVisitVisas;
