import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/iconscout/relocate2.png";
import banner2 from "../../assets/iconscout/relocate1.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import Sidebar from "../../components/ScrollableBar";


import { useTranslation } from 'react-i18next';
import Header from "../../components/Header_New/Header";

const EUCitizensRelocation = () => {
  const { t, i18n } = useTranslation();
  const isleftlangue = i18n.language === 'ur';
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("EU Citizens Relocation")}
        regularText={t(
          "Relocate within the EU effortlessly. Our expert team makes your transition smooth and compliant with EU regulations."
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
                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                    WHAT IS
                  </span>
                  <h2>
                    <strong>{t(`Family Reunification?`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>

                  <p className=" tw-text-gray">{t(`Family reunification means that a family that has been split
                    up can apply to be allowed to live together in Sweden with
                    the person who has been granted a permanent residence
                    permit, EU citizenship or a three-year residence permit as a
                    refugee.`.replace(/\s+/g, ' ').trim())}</p>

                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`EU CITIZEN`.replace(/\s+/g, ' ').trim())}</span>
                  <h2>
                    <strong>{t(`Family Members`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>

                  <p className=" tw-text-gray">{t(`As a family member of an EU/EEA citizen exercising their
                    right of free movement,you can get a visa through a
                    facilitated process to travel with your family member or to
                    join him/her in Sweden.`.replace(/\s+/g, ' ').trim())}</p>

                  <p className=" tw-text-gray tw-font-medium">{t(`Family members are:`.replace(/\s+/g, ' ').trim())}</p>

                  <ul className=" tw-p-0 tw-pt-4">
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">{t(`Spouse/partner/common law spouse`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">{t(`The direct descendants (children) who are under the age
                        of 21 or are dependents, and those of the spouse or
                        partner.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">{t(`The dependent direct relatives in the ascending line
                        (e.g. parents) and those of the spouse or partner.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">{t(`You can apply for a short-stay Schengen visa (type
                        C-Joining a Family Member) which will permit you to
                        enter Sweden and the Schengen area.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>

                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">{t(`Once in Sweden you should apply for a residence card for
                        a family member of a EU/EEA citizen within three months
                        for a Residence Card of a family member of a EU/EEA
                        citizen.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                  </ul>

                  <div className="row">
                    <div className="col-md-10 tw-mx-auto">
                      <img
                        src={banner}
                        alt=""
                        className="tw-justify-self-center"
                        style={{ maxWidth: "450px" }}
                      />
                    </div>
                  </div>

                  <div>
                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`FAMILY`.replace(/\s+/g, ' ').trim())}</span>
                    <h2>
                      <strong>{t(`Reunification For Refugees`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>

                    <p className=" tw-text-gray">{t(`If a person receives a permanent residence permit as a
                      refugee or as an individual who needs subsidiary
                      protection, then you may have the right to invite your
                      family to that country. Family reunification is a step
                      towards the settlement of refugees to live with their
                      families.`.replace(/\s+/g, ' ').trim())}</p>
                    <p className=" tw-text-gray">{t(`The person who wants to invite his family to the country
                      he is residing should have enough income resources to
                      provide financial support to the family and a standard
                      house to live in.`.replace(/\s+/g, ' ').trim())}</p>
                    <p className=" tw-text-gray">{t(`The possibilities for your family to live with you in
                      Sweden if you have a temporary residence as a refugee or
                      as a person needing subsidiary protection is governed by
                      different things.`.replace(/\s+/g, ' ').trim())}</p>

                    <p className=" tw-text-gray tw-font-medium">{t(`Some of the important points regarding residence permits
                      are listed below:`.replace(/\s+/g, ' ').trim())}</p>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">{t(`Valid Residence Permit`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">{t(`Family Application`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">{t(`Permanent Residence Permit`.replace(/\s+/g, ' ').trim())}</p>
                      </li>
                    </ul>
                    <p className=" tw-text-gray">{t(`Once the above-mentioned procedure is done and you have a
                      fair chance for receiving the permanent residency status
                      in Sweden, then the application of your family is checked
                      for further requirements.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-10 tw-mx-auto">
                          <img
                            src={banner2}
                            className="tw-justify-self-center"
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`WHO CAN`.replace(/\s+/g, ' ').trim())}</span>
                      <h2>
                        <strong>{t(`Move With You?`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>

                      <p className=" tw-text-gray">{t(`Only your immediate family members can move with you if
                        you have a temporary residence permit. Your immediate
                        family members mean your spouse, children under the age
                        of 18, registered partners, and cohabiting partners.
                        Other family members and children who are above 18 are
                        not eligible to move to Sweden or the EU on your behalf
                        while you have a temporary residence permit. If you are
                        under the age of 18, then your parents are counted as
                        your immediate family members.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>
                  </div>

                  <p className=" tw-text-gray">{t(`In case you have a permanent residence permit or you are
                    planning to get married to a person in Sweden, then that
                    person can apply on your behalf for the residence permit.
                    Persons other than your immediate family members like
                    parents or siblings can also move to Sweden with you.`.replace(/\s+/g, ' ').trim())}</p>

                  <span>{t(`AN`.replace(/\s+/g, ' ').trim())}</span>
                  <h2>
                    <strong>{t(`Identification`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>

                  <p className=" tw-text-gray">{t(`You must always be able to identify yourself.`.replace(/\s+/g, ' ').trim())}</p>

                  <ul className=" tw-p-0 tw-pt-4">
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">{t(`You can identify yourself with a valid Swedish
                        identification document, such as a passport, a national
                        identity card or a BankID. You can also identify
                        yourself with a Swedish driving license.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">{t(`If you do not have Swedish identification documents, you
                        can identify yourself with a valid foreign passport or
                        other photographic identification document that shows
                        your citizenship. This must be issued by an authority or
                        some other authorised issuer. Note that the bank may
                        request that you also present other documents.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <li className=" tw-flex  tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">{t(`If you do not have valid identity documents, you must
                        prove who you are and your citizenship by means of other
                        documents from an independent and reliable source.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                  </ul>

                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`FOREIGN`.replace(/\s+/g, ' ').trim())}</span>
                  <h2>
                    <strong>{t(`Students`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>

                  <p className=" tw-text-gray">{t(`If you are a foreign student, you must always be able to
                    identify yourself as above.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-black tw-font-medium">{t(`You also need:`.replace(/\s+/g, ' ').trim())}</p>

                  <ul className=" tw-p-0 tw-pt-4">
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">{t(`A residence permit or a visa (does not apply to EU
                        citizens).`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <div>
                        <GoTriangleRight className=" tw-text-blue" />
                      </div>
                      <p className=" m-0 tw-text-gray">{t(`If you do not have Swedish identification documents, you
                        can identify yourself with a valid foreign passport or
                        other photographic identification document that shows
                        your citizenship. This must be issued by an authority or
                        some other authorised issuer. Note that the bank may
                        request that you also present other documents.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">{t(`An admission decision confirmation from your university,
                        showing the duration of your studies.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                  </ul>

                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`IN CERTAIN CASES`.replace(/\s+/g, ' ').trim())}</span>
                  <h2>
                    <strong>{t(`The Bank Can Refuse You To Open An Account`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>

                  <ul className=" tw-p-0 tw-pt-4">
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">{t(`The bank cannot identify you in a sufficiently secure
                        manner.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">{t(`The bank determines that the reason you provided for
                        wanting to open an account is inadequate.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">{t(`The bank, by opening an account, would be acting in
                        breach of a legal regulation or directive.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                  </ul>

                  <p className=" tw-text-gray">{t(`The bank may also refuse you an account if you have
                    previously acted dishonestly towards the bank.`.replace(/\s+/g, ' ').trim())}</p>

                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`BEAR`.replace(/\s+/g, ' ').trim())}</span>
                  <h2>
                    <strong>{t(`In Mind That…`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>

                  <ul className=" tw-p-0 tw-pt-4">
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">{t(`You must be able to understand the bank’s questions and
                        answer them.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">{t(`You must also be able to understand the information that
                        the bank gives you.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">{t(`If you need someone to translate for you, you should
                        bring such a person with you to the meeting with the
                        bank.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">{t(`The bank will ask you where your money is being sent
                        from.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">{t(`Your account and other bank services may not be used by
                        anyone else unless an agreement for this is held with
                        the bank.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                    <li className=" tw-flex tw-items-center tw-gap-3">
                      <GoTriangleRight className=" tw-text-blue" />
                      <p className=" m-0 tw-text-gray">{t(`The bank may ask you additional questions or stipulate
                        other requirements.`.replace(/\s+/g, ' ').trim())}</p>
                    </li>
                  </ul>

                  <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                    {" "}
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`DRIVING`.replace(/\s+/g, ' ').trim())}</span>
                  <h2>
                    <strong>{t(`License`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>

                  <p className=" tw-text-gray tw-font-medium">{t(`If you have a driving license which was issued in an EU
                    country is valid throughout your stay in Sweden. You can
                    even exchange your driving license to Swedish license if you
                    have permanent residence.`.replace(/\s+/g, ' ').trim())}</p>
                  <p className=" tw-text-gray tw-font-medium">{t(`A driving license that was issued in non-EEA countries
                    (excluding Switzerland and Japan) is valid for a maximum of
                    one year in Sweden. It cannot be exchanged to Swedish
                    license and If you want to continue driving in Sweden you
                    will have to complete the risk education, and theory and
                    practical examinations.`.replace(/\s+/g, ' ').trim())}</p>

               <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">
                      <h7 className="tw-text-center tw-text-black tw-pt-4" style = {{fontSize: '1em'}}>
                            <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                              {t('Sign Up Today!')}{" "}
                            </strong>
                           
                          </h7>
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

export default EUCitizensRelocation;
