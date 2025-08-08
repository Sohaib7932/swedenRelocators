import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/happy-family-on-shopping.png";
import banner2 from "../../assets/images/removebg-preview.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";

import Sidebar from "../../components/ScrollableBar";

import Header from "../../components/Header_New/Header";
import { useTranslation } from 'react-i18next';

import ep1 from "../../assets/iconscout/ep1.png";
import ep2 from "../../assets/iconscout/ep2.png";

const EEAPermits = () => {
  const { t , i18n} = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const language = i18n.language;
  const isleftlangue = language === 'ur';

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("EEA Permits")}
        regularText={t(
          "Navigate EEA permits with ease. Our expertise ensures a smooth application process for your stay within the European Economic Area."
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
                    <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`EEA`.replace(/\s+/g, ' ').trim())}</span>
                  <h2 className="tw-text-left">
                    <strong>{t(`Family Permit`.replace(/\s+/g, ' ').trim())}</strong>
                  </h2>
                  <br />

                  <p className=" tw-text-gray">{t(`Any EU citizen getting a residence in the UK according to
                    the EU rules, can bring their family with them. The EEA
                    permit allows the family member to work in the UK. The
                    permit is valid for only 6 months.`.replace(/\s+/g, ' ').trim())}</p>

                  <div className="row tw-flex tw-items-center tw-mb-6">
                    <div className="col-md-6">
                      <div className="row ">
                        <div className="col-md-10 tw-mx-auto">
                          <img src={ep1} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className=" tw-text-gray">{t(`You can get refused when entering the UK without a
                        permit. You can apply for the EU card which is valid for
                        5 years, once you are in the UK. The residence card
                        makes it easier for a person to work in the UK. However,
                        The extended family has to apply for a residence card.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>
                  </div>

                  <div>
                    <br />

                    <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`HOW TO QUALIFY FOR THE`.replace(/\s+/g, ' ').trim())}</span>
                    <h2 className="tw-text-left">
                      <strong>{t(`EEA Family Permit`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <p className=" tw-text-gray">{t(`You can apply for an EEA permit if you are a family member
                      of an EU citizen or a Swiss citizen. You can stay in Uk
                      for more than 3 months if your EU family member sponsors
                      you or has a permanent residence in the UK. It is also
                      possible when your EU family member is working, studying,
                      or running a business. Although you should have complete
                      health insurance.`.replace(/\s+/g, ' ').trim())}</p>
                  </div>
                  <div>
                    <div>
                      <br />

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`WHO IS A`.replace(/\s+/g, ' ').trim())}</span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Family Member`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray ">{t(`You must be the EEA citizen’s spouse or civil partner,
                        or the child or grandchild under 21 of the EU national
                        or his spouse/civil partner. Dependent parents,
                        grandparents, children or grandchildren over 21 (of the
                        EU national or his spouse) can be taken as family at any
                        age if they can prove to be financially dependant on the
                        EU sponsor.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div>
                      <br />

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`EXTENDED`.replace(/\s+/g, ' ').trim())}</span>

                      <h2 className="tw-text-left">
                        <strong>{t(`Family Member`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray ">{t(`It is also possible to apply as an extended family
                        member of the EU national. It can be, for example, an
                        unmarried partner who has been in a relationship with
                        the EU citizen and has, in general, lived with him/her
                        for at least 2 years, brother, sister, aunt, uncle,
                        cousin, or niece.`.replace(/\s+/g, ' ').trim())}</p>
                      <p className=" tw-text-gray ">{t(`Except for unmarried partners, all other extended family
                        members must prove to be or have been dependent on the
                        EU citizen or being a member of their household. The
                        extended family member can also have to prove.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div>
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`DERIVATIVE`.replace(/\s+/g, ' ').trim())}</span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Right Of Residence`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray ">{t(`It is possible to apply for an EEA Family Permit if you
                        have a derivative right of residence.`.replace(/\s+/g, ' ').trim())}</p>
                      <p className=" tw-text-black  tw-font-medium ">{t(`You will have a derivative right of residence if you
                        are:`.replace(/\s+/g, ' ').trim())}</p>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`The primary caretaker of an EEA child in the UK, and
                            financially independent.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`A child of an EEA former worker and you are
                            currently in education in the UK.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`The primary caretaker of a child of an EEA former
                            worker. This child is currently in education in the
                            UK.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`A primary caretaker of a British child.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>

                        <li className=" tw-flex  tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`The primary caretaker of a British dependent adult;
                            or`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <GoTriangleRight className=" tw-text-blue" />
                          <p className=" m-0 tw-text-gray">{t(`A child of a primary caretaker who qualifies through
                            one of these categories.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <p className=" m-0 tw-text-gray">{t(`The Home Office defines the primary caretaker as someone
                        who has the responsibility for the day-to-day care of
                        the person. This includes decision-making about
                        education, health, and finance.`.replace(/\s+/g, ' ').trim())}</p>
                      <p className=" m-0 tw-text-gray">{t(`The primary caretaker must be a family member or the
                        legal guardian. This person can be the main caretaker or
                        can share the responsibility with someone else. You must
                        fulfill very strict requirements to qualify under this
                        route.`.replace(/\s+/g, ' ').trim())}</p>

                      <div className="row">
                        <div className="col-md-7 tw-mx-auto">
                          <img src={ep2} alt="" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <br />
                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`RETAINED`.replace(/\s+/g, ' ').trim())}</span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Right Of Residence`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />
                      <p className=" tw-text-gray ">{t(`One can apply for an EEA Family Permit if you previously
                        had a right to reside in the UK as the family member of
                        an EEA national who either had a permanent right of
                        residence in the UK or was a worker, student,
                        self-employed person, self-sufficient person or someone
                        looking for work in the UK.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>

                    <div>
                      <br />

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`YOU CAN RECEIVE A RETAINED`.replace(/\s+/g, ' ').trim())}</span>
                      <h2 className="tw-text-left">
                        <strong>{t(`Right Of Residence In One Of The Following Ways`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`Your marriage or civil partnership to that person
                            has ended due to a divorce, annulment or
                            dissolution.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`The person died, and you have lived in the UK for at
                            least one year before their death.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`You are the child of an EEA national who has died or
                            left the UK. Or you are the child of their spouse or
                            civil partner, or former spouse or civil partner,
                            and you were in education when that person left the
                            UK or died, and you continue to be in education.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`You are the parent and have custody, of a child who
                            has a retained right of residence because they are
                            in education in the UK.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <br />

                      <span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2">
                        {" "}
                        <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`SPECIFIC REQUIREMENTS`.replace(/\s+/g, ' ').trim())}</span>
                      <h2 className="tw-text-left">
                        <strong>{t(`In Cases Of Divorces`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />

                      <p className=" tw-text-gray">{t(`It is only possible to apply if you were in the UK as
                        the EEA national’s family member on the date the
                        divorce/civil partnership was ended and one of the
                        following applies;`.replace(/\s+/g, ' ').trim())}</p>

                      <ul className=" tw-p-0 tw-pt-4">
                        <li className=" tw-flex tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`The civil partnership or marriage lasted 3 years
                            before legal proceedings began. The couple lived in
                            the UK for at least 1 year before the divorce,
                            annulment or dissolution was finalized.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`You have custody of a child of the relevant EEA
                            national.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex tw-items-center tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`You have access rights to the child of the relevant
                            EEA national. The judge ordered access to the child
                            in the UK, and the child is younger than 18 years of
                            age.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`You, or a family member, have been a victim of
                            domestic violence during the marriage or civil
                            partnership.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`Any other particularly difficult circumstances that
                            will justify the retaining right of residence.`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                        <li className=" tw-flex  tw-gap-3">
                          <div>
                            <GoTriangleRight className=" tw-text-blue" />
                          </div>
                          <p className=" m-0 tw-text-gray">{t(`Indefinite Leave to Remain in the UK and the EEA
                            Family Permit`.replace(/\s+/g, ' ').trim())}</p>
                        </li>
                      </ul>

                      <p className=" tw-text-gray">{t(`After spending five years in the UK, from the first date
                        of entry, with the EEA family visa, it is possible to
                        apply for Indefinite Leave to Remain in the UK. It is
                        important though to note that the EU citizen must
                        fulfill the requirements throughout the 5-year period.`.replace(/\s+/g, ' ').trim())}</p>
                      <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">
                      <h5 className="tw-text-center tw-text-black tw-pt-4" style = {{fontSize: '1.2em'}}>
                          <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                            {t('Sign Up Today!')}{" "}
                          </strong>
                        
                        </h5>
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

export default EEAPermits;
