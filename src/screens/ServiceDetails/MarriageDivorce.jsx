import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/family-time-at-home.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import Header from "../../components/Header_New/Header";
import { useTranslation } from 'react-i18next';
import Sidebar from "../../components/ScrollableBar";


import md1 from "../../assets/iconscout/md1.png";
import md2 from "../../assets/iconscout/md2.png";
import md3 from "../../assets/iconscout/md3.png";
import md4 from "../../assets/iconscout/md4.png";
import md5 from "../../assets/iconscout/md5.png";

const MarriageDivorce = () => {
  const { t , i18n} = useTranslation();
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
      title: "Direct Citizenship     ",
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
      title: "Golden Visa      ",
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
        highlightText={t("Marriage & Divorce")}
        regularText={t(
          "Understand your rights and navigate the legal aspects of marriage and divorce in the EU with our comprehensive support."
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
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Requirements and Process`)}</span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`Getting Married in Sweden`)}</strong>
                    </h2>
                    <br />
                    <p className="tw-text-gray">{t(`Marriage in Sweden is an attractive option for both
                      residents and non-residents, thanks to the country’s
                      welcoming legal environment and clear processes. Sweden
                      Relocators provides comprehensive marriage assistance,
                      guiding you through every step and ensuring that all legal
                      requirements are met, making your journey to marriage in
                      Sweden as seamless as possible.`)}</p>

                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Key Requirements
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`For Marriage in Sweden`)}</strong>
                    </h2>

                    <br />

                    <ul className="tw-p-0 ">
                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-text-black">{t(`Application for Marriage License
                                (Hindersprövning):`)}</strong>{" "}
                              Hindersprövning is a mandatory examination process
                              conducted by the Swedish Tax Agency (Skatteverket)
                              to ensure there are no legal obstacles to the
                              marriage. Couples must submit this application,
                              which verifies that both parties are legally
                              eligible to marry. Swedish law prohibits marriage
                              between close relatives or anyone already married.
                              Once approved, Skatteverket issues a certificate
                              that confirms you are free to marry. This
                              certificate is valid for four months from the date
                              of issuance and must be submitted to the officiant
                              before the ceremony.
                              <p>
                                <br />
                              </p>
                            </p>
                          </li>
                        </div>

                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-9 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={md1}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Identification Requirements:`)}</strong> Both
                          parties must provide a valid form of identification,
                          such as a passport or national ID card. Foreign
                          nationals should be prepared to show additional proof
                          of identity if required. If either party is not a
                          Swedish resident, they may need a certificate of no
                          impediment from their home country. Our legal team
                          will help you verify and obtain all necessary
                          documents.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Proof of Civil Status:`)}</strong> If you or your
                          partner have been married before, you’ll need to
                          provide proof of divorce or a death certificate of a
                          deceased spouse. These documents may need to be
                          translated into Swedish or English if issued in
                          another language. Sweden Relocators can arrange
                          certified translations for any foreign documents
                          required for the application.
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Special Permissions:`)}</strong> If either
                          partner is under 18, Swedish law requires a special
                          permission, which is rarely granted. Sweden Relocators
                          can advise on any exceptional cases requiring
                          permission and assist in navigating the legal
                          requirements.
                        </p>
                      </li>
                    </ul>

                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Step-by-Step Guide
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`The Marriage Process`)}</strong>
                    </h2>

                    <br />

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Step 1: Apply for Hindersprövning (Marriage
                            License):`)}</strong>{" "}
                          The first step to getting married in Sweden is to
                          apply for a Hindersprövning certificate from
                          Skatteverket. This application ensures that there are
                          no legal barriers to the marriage and confirms your
                          eligibility to wed.
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Step 2: Choose Your Marriage Ceremony Type:`)}</strong>{" "}
                          In Sweden, you can choose between a civil ceremony and
                          a religious ceremony. Both types are legally
                          recognized, but the process and location may vary.
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Step 3: Submit Documents to the Officiant:`)}</strong>{" "}
                          You must submit your Hindersprövning certificate and
                          proof of identity to the officiant before the marriage
                          ceremony. Our team coordinates with officiants to
                          ensure all required documents are in order, avoiding
                          last-minute complications.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Step 4: Marriage Ceremony:`)}</strong> On the day
                          of the ceremony, you’ll need two witnesses who are at
                          least 18 years old. If you’re traveling from abroad,
                          we can assist in arranging witnesses if needed. The
                          ceremony itself is typically brief and can be
                          customized according to your preferences, especially
                          in the case of civil weddings.
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <div className="row tw-flex tw-items-center">
                        <div className="col-md-6">
                          <li>
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-text-black">{t(`Step 5: Registration of Marriage:`)}</strong>{" "}
                              Once the marriage ceremony is completed, it must
                              be registered with Skatteverket to be legally
                              recognized in Sweden. Our team ensures that all
                              paperwork is promptly filed so that your marriage
                              is officially registered without delay. If you or
                              your partner are foreign nationals, we’ll also
                              advise on any additional steps required to
                              register your marriage in your home country.
                            </p>
                          </li>
                        </div>

                        <div className="col-md-6">
                          <div className="row ">
                            <div className="col-md-9 tw-mx-auto">
                              <motion.img
                                animate={imageVariants}
                                className=" tw-w-full"
                                src={md2}
                                alt=""
                                style={{ maxWidth: "450px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                  <div>
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Additional Services and Legal Support for Marriage in
                      Sweden`)}</span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`Prenuptial Agreements`)}</strong>
                    </h2>
                    <br />
                    <p className="tw-text-gray">{t(`Sweden operates under a marital property regime where all
                      assets acquired during the marriage are typically
                      considered joint property unless otherwise agreed upon. If
                      you and your partner wish to maintain separate ownership
                      of certain assets, a prenuptial agreement is essential.`)}</p>
                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Drafting and Legal Advice:`)}</strong> Our
                          lawyers can assist in drafting a prenuptial agreement
                          that meets Swedish legal standards and protects both
                          parties' assets and financial interests.
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Property Rights and Financial Planning:`)}</strong>{" "}
                          We provide guidance on asset division, ensuring that
                          each party’s rights are upheld in case of separation.
                        </p>
                      </li>
                    </ul>

                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Translation and
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`Verification of Foreign Documents`)}</strong>
                    </h2>

                    <br />
                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <p className="tw-text-gray">{t(`If either partner is a foreign national, it’s likely
                          that certain documents will need to be translated into
                          Swedish or English. Sweden Relocators facilitates the
                          translation and notarization of all foreign documents,
                          ensuring they meet Swedish legal requirements.`)}</p>
                      </div>

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={md3}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Certified Translations:`)}</strong> We work with
                          certified translators to provide official translations
                          accepted by Swedish authorities.
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Document Verification:`)}</strong> Our legal team
                          reviews all documentation for accuracy, ensuring that
                          the marriage process proceeds smoothly.
                        </p>
                      </li>
                    </ul>

                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Post-Marriage
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`Support`)}</strong>
                    </h2>

                    <br />

                    <p className="tw-text-gray">{t(`For foreign nationals, additional steps may be required
                      after marriage to comply with Swedish residency laws. We
                      provide post-marriage services such as:`)}</p>

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={md4}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul className="tw-p-0 ">
                          <li className="tw-flex tw-items-center tw-gap-3">
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-text-black">{t(`Residence Permit Guidance:`)}</strong> For
                              non-EU spouses, we assist with residence permit
                              applications and help you understand your rights
                              and obligations under Swedish immigration laws.
                            </p>
                          </li>
                          <li>
                            <p className="m-0 tw-text-gray">
                              <strong className="tw-text-black">{t(`Registration of Marriage Abroad:`)}</strong>{" "}
                              If required, we can assist in registering your
                              marriage in your home country, ensuring legal
                              recognition both in Sweden and abroad.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <br />

                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Divorce Assistance in Sweden
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">
                        Expert Legal Support for a Smooth Transition{" "}
                      </strong>
                    </h2>

                    <br />

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <p className="tw-text-gray">{t(`While planning a marriage is an exciting milestone,
                          circumstances can sometimes change. If you are facing
                          a separation or divorce in Sweden, our experienced
                          family lawyers at Sweden Relocators offer sensitive
                          and professional assistance to guide you through this
                          process. Divorce in Sweden is straightforward and
                          operates under a no-fault principle, but there are
                          still specific legal requirements, especially if
                          children or shared assets are involved.`)}</p>
                      </div>

                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-9 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={md5}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Filing for Divorce:`)}</strong> Guidance through
                          the application process for mutual or single-party
                          divorce, including support with required documents.
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Division of Assets:`)}</strong> Assistance with
                          fair division of marital assets, taking into account
                          any prenuptial agreements or shared property.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Child Custody and Support Arrangements:`)}</strong>{" "}
                          Support in establishing child custody and child
                          support arrangements that prioritize the welfare of
                          your children.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Spousal Support and Maintenance:`)}</strong>{" "}
                          Guidance on determining whether spousal support is
                          necessary, and assistance with negotiations.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                    </ul>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Why Choose Sweden Relocators
                    </span>
                    <h2 className="tw-text-left">
                      <strong className="tw-text-black">{t(`For Marriage and Divorce Assistance in Sweden?`)}</strong>
                    </h2>
                    <br />

                    <ul className="tw-p-0 ">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Experienced Family Lawyers:`)}</strong> Our team
                          includes skilled family law specialists who understand
                          the specific nuances of marriage and divorce law in
                          Sweden.
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Personalized Support:`)}</strong> We know every
                          situation is unique. We offer tailored solutions to
                          meet your individual needs, whether planning a
                          marriage or undergoing a divorce.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Clear and Transparent Process:`)}</strong> We
                          provide full transparency regarding legal procedures,
                          timelines, and costs so that you are fully informed.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Efficient Document Handling:`)}</strong> From
                          gathering required documents to filing applications,
                          our team ensures that every detail is handled with
                          precision, saving you time and reducing stress.
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className="tw-text-black">{t(`Confidentiality and Sensitivity:`)}</strong> We
                          prioritize confidentiality and provide a compassionate
                          approach to help you through sensitive transitions.
                        </p>
                      </li>
                    </ul>
                    <br />

                    <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center">
                    <h5 className="tw-text-center tw-pt-4" style = {{fontSize: '1.2em'}}>
                        <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                          {t('Sign Up Today!')}{" "}
                        </strong>
                                              </h5>
                    </Link>
                    <br />
                    <p className="tw-text-gray">{t(`Sign up today and simplify your journey! Whether you're
                      seeking assistance with relocation, permits, visas, legal
                      processes, or settling into a new life, we're here to
                      help. Our comprehensive services cover everything from
                      work and study opportunities to family reunifications,
                      business support, and much more. Let us guide you every
                      step of the way—start your seamless experience now!`)}</p>
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

export default MarriageDivorce;
