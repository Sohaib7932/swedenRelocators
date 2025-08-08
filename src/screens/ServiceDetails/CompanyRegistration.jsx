import React, { useEffect } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/online-contract-signing.png";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { imageVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import Sidebar from "../../components/ScrollableBar";


import { useTranslation } from 'react-i18next';
import Header from "../../components/Header_New/Header";

import cr1 from "../../assets/iconscout/cr1.png";
import cr2 from "../../assets/iconscout/cr2.png";

const CompanyRegistration = () => {
  const { t , i18n} = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const isleftlangue = i18n.language === 'ur';

  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Company Registration")}
        regularText={t(
          "Start your business in Sweden with confidence. We guide you through the company registration process for a smooth start."
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
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Comprehensive Guide to`.replace(/\s+/g, ' ').trim())}</span>
                    <h2 className="tw-text-left">
                      <strong className ='tw-text-black'>{t(`Company Registration in Sweden`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />
                    <p className="tw-text-gray">{t(`Setting up a business in Sweden offers access to one of
                      Europe’s most stable economies, a supportive business
                      culture, and a highly skilled workforce. Company
                      registration is an essential step for anyone planning to
                      operate a business in Sweden, as it legally establishes
                      the company and allows it to engage in business
                      activities, enter contracts, and access essential
                      services.`.replace(/\s+/g, ' ').trim())}</p>
                    <p className="tw-text-gray">{t(`This guide covers the various types of companies in
                      Sweden, the pros and cons of each, and why and when
                      company registration is necessary.`.replace(/\s+/g, ' ').trim())}</p>

                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      Why
                    </span>
                    <h2 className="tw-text-left">
                      <strong className ='tw-text-black'>{t(`is Company Registration Important?`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Legal Recognition:`.replace(/\s+/g, ' ').trim())}</strong>
                          <br /> {t(`Registering your company gives it legal status
                          in Sweden, allowing it to enter contracts, open bank
                          accounts, and conduct business legally.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Tax Compliance:`.replace(/\s+/g, ' ').trim())}</strong>
                          <br />{t(`Registered companies are eligible to apply for
                          VAT registration and must comply with Swedish tax
                          regulations, enabling transparent financial
                          operations.`.replace(/\s+/g, ' ').trim())}</p>
                        <p>
                          <br />
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Access to Benefits:`.replace(/\s+/g, ' ').trim())}</strong>
                          <br /> {t(`Registered companies can benefit from
                          government incentives, tax deductions, and access to
                          loans and financing from Swedish financial
                          institutions.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Credibility and Trust:`.replace(/\s+/g, ' ').trim())}</strong>
                          <br /> {t(`Registered companies are more trusted by
                          customers, suppliers, and partners, as they
                          demonstrate a commitment to legal compliance and
                          transparency.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Limited Liability:`.replace(/\s+/g, ' ').trim())}</strong>
                          <br /> {t(`Certain company types, like limited companies
                          (Aktiebolag), provide limited liability protection,
                          shielding the owner’s personal assets from business
                          debts and obligations.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="row tw-flex tw-items-center">
                    <div className="col-md-6">
                      <div className="row ">
                        <div className="col-md-12 tw-mx-auto">
                          <motion.img
                            animate={imageVariants}
                            className=" tw-w-full"
                            src={cr1}
                            alt=""
                            style={{ maxWidth: "450px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <br />
                      <span className="tw-flex tw-items-center tw-gap-2">
                        <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Setting up`.replace(/\s+/g, ' ').trim())}</span>
                      <h2 className="tw-text-left">
                        <strong className ='tw-text-black'>{t(`Your Business in Sweden`.replace(/\s+/g, ' ').trim())}</strong>
                      </h2>
                      <br />
                      <p className="tw-text-gray">{t(`Setting up a business in Sweden offers access to one of
                        Europe’s most stable economies, a supportive business
                        culture, and a highly skilled workforce. Company
                        registration is an essential step for anyone planning to
                        operate a business in Sweden, as it legally establishes
                        the company and allows it to engage in business
                        activities, enter contracts, and access essential
                        services. This guide covers the various types of
                        companies in Sweden, the pros and cons of each, and why
                        and when company registration is necessary.`.replace(/\s+/g, ' ').trim())}</p>
                    </div>
                  </div>
                  <div>
                    <br />

                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Types of`.replace(/\s+/g, ' ').trim())}</span>
                    <h2 className="tw-text-left">
                      <strong className ='tw-text-black'>{t(`Companies in Sweden`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />
                    <p className="tw-text-gray">{t(`Sweden offers several types of business structures, each
                      with specific advantages, disadvantages, and requirements.
                      The right structure depends on your business goals, scale,
                      and risk tolerance.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="tw-text-black">{t(`1. Sole Trader (Enskild Firma)`.replace(/\s+/g, ' ').trim())}</strong>

                    <p className="tw-text-gray">{t(`A sole trader business is owned and managed by an
                      individual, making it the simplest business form in
                      Sweden. It is ideal for freelancers, consultants, and
                      small businesses with minimal capital requirements.`.replace(/\s+/g, ' ').trim())}</p>
                    <p className="tw-text-gray">{t(`Advantages:`.replace(/\s+/g, ' ').trim())}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Simple to set up and maintain.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Full control over business decisions.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Lower administrative and regulatory requirements.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Profits are taxed as personal income, which can simplify
                        tax filing.`.replace(/\s+/g, ' ').trim())}
                      </li>
                    </ul>
                    <p className="tw-text-gray">{t(`Disadvantages:`.replace(/\s+/g, ' ').trim())}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Unlimited liability: The owner is personally liable for
                        all business debts and obligations.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Limited access to capital: Often restricted to personal
                        funds or small loans.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`May lack credibility for large clients or investors
                        compared to incorporated entities.`.replace(/\s+/g, ' ').trim())}
                      </li>
                    </ul>
                    <p className="tw-text-gray">
                      <strong className ='tw-text-gray'>{t(`When to Register:`.replace(/\s+/g, ' ').trim())}</strong>
                      <br />{t(`Ideal for individuals starting a small business or
                      working as freelancers. Registration is generally
                      recommended if you intend to trade under a business name
                      or need a VAT number.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="tw-text-black">{t(`2. Limited Company (Aktiebolag or AB)`.replace(/\s+/g, ' ').trim())}</strong>

                    <p className="tw-text-gray">{t(`A limited company (AB) is a separate legal entity from its
                      shareholders, offering limited liability protection. This
                      is the most popular structure for start-ups, small
                      businesses, and large corporations alike.`.replace(/\s+/g, ' ').trim())}</p>
                    <p className="tw-text-gray">{t(`Advantages:`.replace(/\s+/g, ' ').trim())}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Limited liability: Shareholders are not personally
                        liable for business debts beyond their investment.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Easier to attract investors: Credibility and potential
                        for issuing shares.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Flexibility in growth: Suitable for businesses with
                        plans to expand or seek external funding.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Tax benefits: Company profits are taxed at a corporate
                        rate, which can be more favorable for larger earnings.`.replace(/\s+/g, ' ').trim())}
                      </li>
                    </ul>
                    <p className="tw-text-gray">{t(`Disadvantages:`.replace(/\s+/g, ' ').trim())}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Higher initial capital requirement: Minimum share
                        capital of SEK 25,000.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` More complex administration: Requires annual reports,
                        board meetings, and compliance with corporate
                        regulations.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Shareholder obligations: Shareholders have specific
                        responsibilities, such as attending annual general
                        meetings and approving financial statements.`.replace(/\s+/g, ' ').trim())}
                      </li>
                    </ul>
                    <p className="tw-text-gray">
                      <strong className ='tw-text-gray'>{t(`When to Register:`.replace(/\s+/g, ' ').trim())}</strong>
                      <br />{t(`Registering a limited company is ideal when seeking
                      external investments, minimizing personal risk, or
                      planning to grow the business significantly. It is also a
                      suitable structure if you need to protect your personal
                      assets.`.replace(/\s+/g, ' ').trim())}</p>

                    <strong className="tw-text-black">{t(`3. Trading Partnership (Handelsbolag)`.replace(/\s+/g, ' ').trim())}</strong>

                    <p className="tw-text-gray">{t(`A trading partnership is a business owned by two or more
                      individuals. Each partner shares equal responsibility for
                      the business’s debts and obligations unless agreed
                      otherwise.`.replace(/\s+/g, ' ').trim())}</p>
                    <p className="tw-text-gray">{t(`Advantages:`.replace(/\s+/g, ' ').trim())}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Simple to establish with minimal initial capital.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Shared decision-making and responsibility among
                        partners.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Profits are taxed as personal income, which can be
                        favorable depending on income level.`.replace(/\s+/g, ' ').trim())}
                      </li>
                    </ul>
                    <p className="tw-text-gray">{t(`Disadvantages:`.replace(/\s+/g, ' ').trim())}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Unlimited liability: Partners are jointly and
                        individually liable for business debts.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Shared risk: One partner’s decisions can impact the
                        financial obligations of others.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Potential for disputes: Without a clear partnership
                        agreement, disagreements can disrupt the business.`.replace(/\s+/g, ' ').trim())}
                      </li>
                    </ul>
                    <p className="tw-text-gray">
                      <strong className ='tw-text-gray'>{t(`When to Register:`.replace(/\s+/g, ' ').trim())}</strong> {t(`A trading partnership
                      is suitable for two or more individuals who wish to
                      collaborate on a business with shared control. Registering
                      is important to establish legal recognition and define
                      each partner’s roles and liabilities.`.replace(/\s+/g, ' ').trim())}
                    </p>

                    <strong className="tw-text-black">{t(`4. Limited Partnership (Kommanditbolag)`.replace(/\s+/g, ' ').trim())}</strong>

                    <p className="tw-text-gray">{t(`A limited partnership includes both general and limited
                      partners. General partners have full control and unlimited
                      liability, while limited partners have limited liability
                      and typically no involvement in management.`.replace(/\s+/g, ' ').trim())}</p>
                    <p className="tw-text-gray">{t(`Advantages:`.replace(/\s+/g, ' ').trim())}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Flexibility: Allows for different levels of involvement
                        and risk among partners.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Limited liability for silent partners: Reduced financial
                        risk for limited partners.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Clear roles: Defined responsibilities for general and
                        limited partners.`.replace(/\s+/g, ' ').trim())}
                      </li>
                    </ul>
                    <p className="tw-text-gray">{t(`Disadvantages:`.replace(/\s+/g, ' ').trim())}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Unlimited liability for general partners: Risk for those
                        with active control over business operations.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Shared control: Requires a strong partnership agreement
                        to prevent disputes.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Profits taxed as personal income: Can be less favorable
                        for high-revenue businesses.`.replace(/\s+/g, ' ').trim())}
                      </li>
                    </ul>
                    <p className="tw-text-gray">
                      <strong className ='tw-text-gray'>{t(`When to Register:`.replace(/\s+/g, ' ').trim())}</strong> {t(`A limited partnership
                      is best for businesses with multiple partners where one or
                      more partners wish to limit their financial risk.
                      Registering establishes legal definitions of roles and
                      responsibilities, helping to prevent disputes.`.replace(/\s+/g, ' ').trim())}
                    </p>

                    <strong className="tw-text-black">{t(`5. Economic Association (Ekonomisk Förening)`.replace(/\s+/g, ' ').trim())}</strong>

                    <p className="tw-text-gray">{t(`An economic association is a cooperative entity formed by
                      at least three members who collaborate to promote shared
                      economic interests, such as housing cooperatives or joint
                      ventures.`.replace(/\s+/g, ' ').trim())}</p>
                    <p className="tw-text-gray">{t(`Advantages:`.replace(/\s+/g, ' ').trim())}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Shared benefits and risk: Members share profits and
                        responsibilities.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Limited liability for members: Members are not
                        personally liable beyond their contributions.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Flexibility for cooperatives: Ideal for community-driven
                        projects and joint ventures.`.replace(/\s+/g, ' ').trim())}
                      </li>
                    </ul>
                    <p className="tw-text-gray">{t(`Disadvantages:`.replace(/\s+/g, ' ').trim())}</p>
                    <ul className="tw-pl-0">
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Minimum member requirement: Must have at least three
                        members, which can limit flexibility.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                        {t(`Administrative requirements: Requires annual reports,
                        member meetings, and compliance with cooperative
                        regulations.`.replace(/\s+/g, ' ').trim())}
                      </li>
                      <li className=" tw-flex tw-text-gray  tw-gap-3">
                        <div>
                          <GoTriangleRight className=" tw-text-blue" />
                        </div>
                       {t(` Potential conflict`.replace(/\s+/g, ' ').trim())}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`The Company Registration Process in Sweden`.replace(/\s+/g, ' ').trim())}</span>
                    <h2 className="tw-text-left">
                      <strong className ='tw-text-black'>{t(`Step-by-Step Guide`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <div className="row tw-flex tw-items-center">
                      <div className="col-md-6">
                        <div className="row ">
                          <div className="col-md-12 tw-mx-auto">
                            <motion.img
                              animate={imageVariants}
                              className=" tw-w-full"
                              src={cr2}
                              alt=""
                              style={{ maxWidth: "450px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <p className="tw-text-gray">{t(`Setting up a company in Sweden involves several key
                          steps to ensure compliance with local regulations.
                          First, choose your business structure, such as a
                          limited liability company (AB) or sole proprietorship.
                          Register your business with the Swedish Companies
                          Registration Office (Bolagsverket) and obtain a
                          Swedish tax ID (organisationsnummer) from the Swedish
                          Tax Agency (Skatteverket). Depending on your business,
                          you may also need to register for VAT and social
                          security contributions. After registration, open a
                          corporate bank account and ensure compliance with
                          Swedish labor laws and business practices. These steps
                          ensure your company operates legally and efficiently
                          in Sweden.`.replace(/\s+/g, ' ').trim())}</p>
                      </div>
                    </div>

                    <strong className="m-0 tw-text-black">{t(`Step 1: Choose the Business Structure`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                         {t(`Assess the advantages, disadvantages, and legal
                          requirements of different structures to choose the
                          best fit for your business goals and risk tolerance.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Step 2: Register the Company Name`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          {t(`Ensure the chosen name adheres to Swedish conventions
                          and is distinct from existing businesses.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Step 3: File for Registration`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          {t(`Submit necessary forms and documents to Bolagsverket,
                          including founder identification, proof of share
                          capital, and articles of association.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Step 4: Apply for Tax Registration`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          {t(`Register with Skatteverket for VAT, employer taxes,
                          and other obligations post-registration.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Step 5: Apply for Necessary Permits`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          {t(`Secure any required permits relevant to your sector,
                          such as those for food services or construction.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>

                    <strong className="m-0 tw-text-black">{t(`Step 6: Open a Business Bank Account`.replace(/\s+/g, ' ').trim())}</strong>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          {t(`Establish an account with a Swedish bank using
                          registration documents and VAT number to manage
                          finances and transactions.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>
                    <br />

                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Our`.replace(/\s+/g, ' ').trim())}</span>
                    <h2 className="tw-text-left">
                      <strong className ='tw-text-black'>{t(`Services Include:`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Business Structure Advisory:`.replace(/\s+/g, ' ').trim())}</strong> {t(`Expert
                          guidance on selecting the most suitable structure for
                          your business.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Registration Assistance:`.replace(/\s+/g, ' ').trim())}</strong> {t(`Full
                          management of the application and documentation
                          process with Bolagsverket and Skatteverket.`.replace(/\s+/g, ' ').trim())}
                        </p>
                        <p>
                          <br />
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Tax Registration and Compliance:`.replace(/\s+/g, ' ').trim())}</strong>{" "}
                          {t(`Support with VAT and tax filings to maintain legal
                          compliance.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Permit Application:`.replace(/\s+/g, ' ').trim())}</strong> {t(`Assistance with
                          obtaining any necessary permits specific to your
                          industry.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                      <li>
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Ongoing Support:`.replace(/\s+/g, ' ').trim())}</strong> {t(`Continued advisory
                          and administrative help as your business grows.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>
                    <br />
                    <span className="tw-flex tw-items-center tw-gap-2">
                      <p className="tw-m-0 tw-w-[15px] tw-h-[1px] tw-bg-[#c2c2d3]"></p>{t(`Why Choose Sweden Relocators?`.replace(/\s+/g, ' ').trim())}</span>
                    <h2 className="tw-text-left">
                      <strong className ='tw-text-black'>{t(`Trusted Expertise`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray">{t(`Choose Sweden Relocators for a seamless, personalized, and
                      efficient company registration experience in Sweden.`.replace(/\s+/g, ' ').trim())}</p>

                    <ul className="tw-p-0 tw-pl-0">
                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Experienced Team:`.replace(/\s+/g, ' ').trim())}</strong> {t(`Our specialists are
                          knowledgeable in Swedish corporate law and business
                          practices.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`All-In-One Service:`.replace(/\s+/g, ' ').trim())}</strong> {t(`From document
                          preparation to travel arrangements and follow-up, we
                          manage every step of the application.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Simplified Future Applications:`.replace(/\s+/g, ' ').trim())}</strong>{t(` Your
                          data remains securely stored, allowing you to apply
                          for visas to other countries with minimal additional
                          input, streamlining subsequent applications.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>

                      <li className="tw-flex tw-items-center tw-gap-3">
                        <p className="m-0 tw-text-gray">
                          <strong className ='tw-text-black'>{t(`Real-Time Tracking and Updates:`.replace(/\s+/g, ' ').trim())}</strong>{t(` Our
                          portal and app keep you updated at every stage, so
                          you’re always informed on the progress of your
                          application.`.replace(/\s+/g, ' ').trim())}
                          <p>
                            <br />
                          </p>
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <br />
                    <span className=" tw-flex tw-items-center tw-gap-2">
                      {" "}
                      <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p>{" "}
                      {t(`Apply for`.replace(/\s+/g, ' ').trim())}
                    </span>
                    <h2 className="tw-text-left">
                      <strong className ='tw-text-black'>{t(`Your Global Visit Visa Today`.replace(/\s+/g, ' ').trim())}</strong>
                    </h2>
                    <br />

                    <p className="tw-text-gray tw-pl-0">{t(`With Sweden Relocators, applying for a visit visa to any
                      country has never been easier. Simply sign up on our
                      portal or download our app to start the process. From the
                      UK to the USA, Canada, Australia, New Zealand, and beyond,
                      we provide a full-service solution, managing every aspect
                      of your visa application and ensuring a smooth experience.
                      Let Sweden Relocators handle the details, so you can focus
                      on planning your journey.`.replace(/\s+/g, ' ').trim())}</p>
                    <Link to="https://pages.nordicrelocators.com/presignup" className="tw-text-center tw-pt-4">
                    <h5 className="tw-text-center tw-pt-4" style = {{fontSize: '1.2em'}}>
                        <strong className="tw-border tw-text-white tw-bg-primary tw-border-black tw-rounded-lg tw-px-2 tw-py-1 tw-inline-block">
                          {t(`Sign Up  Today!`.replace(/\s+/g, ' ').trim())}{" "}
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
                      step of the way—start your seamless experience now!`.replace(/\s+/g, ' ').trim())}</p>
                  </div>
                </div>{" "}
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

export default CompanyRegistration;
