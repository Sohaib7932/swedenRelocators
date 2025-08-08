import React, { useEffect, useState } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import { useTranslation } from "react-i18next";

import Header from "../../components/Header_New/Header";
const Terms_conditions = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Terms & Conditions")}
        regularText={t(
          "Understand Your Rights – Review Our Terms and Conditions Today."
        )}
        backgroundImage={homeBgImage}
      />

      <section className=" tw-mt-12">
        <div className="container tw-pb-5 tw-text-justify">
          <div className="row">
            <div className="col-md-12">
              <h5>{t(`1. Team and Services`.replace(/\s+/g, ' ').trim())}</h5>

              <p className=" tw-pt-3 tw-text-gray m-0">
                <strong>{t(`1.1`.replace(/\s+/g, ' ').trim())}</strong>{t(` We work in teams to offer you the
                expertise and resources required for each assigned application.
                At the beginning of an assignment, we usually agree on the scope
                of desired services as well as the people who will work with
                your application. The scope can then be changed, increased, or
                decreased and we may need to change people in the team.`.replace(/\s+/g, ' ').trim())}
              </p>
              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`1.2`.replace(/\s+/g, ' ').trim())}</strong>{t(` In order to develop personal
                relationships and our understanding of Relocation activities
                with clients, the advisor is appointed as customer support.
                Customer support has the overall responsibility for our services
                to you. There will also be one adviser responsible for our work
                in each individual application on the backend. This may be
                advisory advice on what you will get on your client portal.`.replace(/\s+/g, ' ').trim())}
              </p>
              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`1.3`.replace(/\s+/g, ' ').trim())}</strong> {t(`According to the assigned
                application there is an agreement with the current legal entity
                within SWEDEN RELOCATORS AB & our partner program consultant. We
                accept your application as an assignment for the company and not
                for an individual adviser. This also applies if there is the
                express or implied intention that the work will be performed by
                one or more specific persons. All company advisors and other
                persons employed or hired by the company on partner programs are
                covered by these terms and these persons shall under no
                circumstances have any individual liability towards you unless
                otherwise provided by mandatory law.`.replace(/\s+/g, ' ').trim())}
              </p>
              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`1.4`.replace(/\s+/g, ' ').trim())}</strong>{t(` In accordance with these terms, all
                issues within a business statement shall be deemed to be an end
                assignment, even if it involves several related companies,
                handled by different teams within the company or outside of the
                company. There are no guarantees we provided for any sort of
                application and assignment by any means for positive decisions.
                We as individuals and teams work hard on your application and
                assignment to get success in a positive direction. It is the
                client’s choice whether he/she is satisfied with our experience
                and wants to get our services under defined conditions.`.replace(/\s+/g, ' ').trim())}
              </p>

              <hr className=" tw-border-gray" />

              <h5>{t(`2. ARRANGEMENTS AND COSTS`.replace(/\s+/g, ' ').trim())}</h5>

              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`2.1`.replace(/\s+/g, ' ').trim())}</strong>{t(` We strive to provide services for
                attractive fees, we will provide you with an estimate of our fee
                at the start of the assignment or application and, depending on
                the nature of the assignment, we can also agree on a single
                budget or another fee arrangement. For a different type of
                Relocations services, we have a fixed fee that clients have to
                pay when they signed the Power of Attorney with the company. We
                are not providing any kind of guarantees to our clients as our
                job is to provide you right assistance. Even due to a lack of
                documents or false documentation if your application is rejected
                by the authorities we will cost the client a regular application
                fee. We do have our online portal where you can see the service
                charges for your desired assignment. Sign up on our website and
                see the section Service charges.`.replace(/\s+/g, ' ').trim())}
              </p>
              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`2.2`.replace(/\s+/g, ' ').trim())}</strong> {t(`If we do not agree on a fixed
                application otherwise, our fees will be determined on the basis
                of a number of factors such as (i) time, (ii) the skill and
                experience required by the assignment, (iii) the values that the
                assignment relates to, (iv) any risks for the company, ( v) time
                pressure and (vi) achieved results.`.replace(/\s+/g, ' ').trim())}
              </p>
              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`2.3`.replace(/\s+/g, ' ').trim())}</strong> {t(`In addition to our fees, travel and
                other expenses may be charged. Normally, the client will limit
                his expenses and wants to charge us in the same application
                area, but wants to add other services too, so we may be charged
                extra on top of the already paid invoice.`.replace(/\s+/g, ' ').trim())}
              </p>

              <hr className=" tw-border-gray" />

              <h5>{t(`3. INVOICING`.replace(/\s+/g, ' ').trim())}</h5>

              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`3.1`.replace(/\s+/g, ' ').trim())}</strong> {t(`One-time invoices for assignments or
                applications are a good way to keep you informed about the fees
                that have arisen and to avoid negative surprises at the end of
                the given assignment. The invoice will be created on the day
                when the client signed the Fullmakt(Power of Attorney) so in
                that case, whatever decision you have to take, take it before
                signing the Power of Attorney.`.replace(/\s+/g, ' ').trim())}
              </p>
              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`3.2`.replace(/\s+/g, ' ').trim())}</strong> {t(`For those clients who choose the
                complete relocation package with multiple services we do have a
                special invoice and in that case they can pay us in 2 different
                installments.`.replace(/\s+/g, ' ').trim())}
              </p>
              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`3.3`.replace(/\s+/g, ' ').trim())}</strong>{t(`In some cases, we will request
                advance payment before starting the process. Those clients who
                are availing our services from outside of Sweden. The total
                amount of our fee for the assignment can become higher or lower
                than the advance amount if you added any extra services where we
                consume more time and effort.`.replace(/\s+/g, ' ').trim())}
              </p>

              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`3.4`.replace(/\s+/g, ' ').trim())}</strong>{t(`At The latest you have to pay the
                invoice is 30 days after the invoice date. Then after one
                reminder invoice was forwarded to our partner Inkasso company.
                The first invoice will be issued from the company and you can
                see it under your ” Payment” section on My Page. All other
                invoices will be issued through, Visma or Profina.`.replace(/\s+/g, ' ').trim())}
              </p>
              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`3.5`.replace(/\s+/g, ' ').trim())}</strong>{t(`We will not charge a late payment for
                invoices issued by Sweden RELOCATORS AB but our economical
                partner companies will according to the applicable interest rate
                under the Swedish Interest Act.`.replace(/\s+/g, ' ').trim())}
              </p>

              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`3.6`.replace(/\s+/g, ' ').trim())}</strong>{t(`You can find all your documents,
                communications, and queries, along with invoices on your online
                portal My Page. Make sure you signed up on our website to get
                access to the portal.`.replace(/\s+/g, ' ').trim())}
              </p>

              <hr className=" tw-border-gray" />

              <h5>{t(`4. IDENTIFICATION OF CUSTOMERS`.replace(/\s+/g, ' ').trim())}</h5>

              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`4.1`.replace(/\s+/g, ' ').trim())}</strong> {t(`For certain assignments, we must
                collect and maintain satisfactory evidence of the identity of
                the applicant. Therefore, we may ask you to provide us with your
                identity documentary identity and/or your company and/or any
                other person who is involved on your behalf. New customers may
                also be asked for references.`.replace(/\s+/g, ' ').trim())}
              </p>
              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`4.2`.replace(/\s+/g, ' ').trim())}</strong> {t(`For Family relocation services we
                will keep all the family documents, which we might need in the
                future to communicate to the authorities on your behalf.`.replace(/\s+/g, ' ').trim())}
              </p>
              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`4.3`.replace(/\s+/g, ' ').trim())}</strong>{t(`On our online portal you can upload
                all the relevant documents which we required in your application
                process. Once you uploaded you can delete that, and if you need
                to delete any document you have to tell the document’s number to
                the office and they will remove it from the backend.`.replace(/\s+/g, ' ').trim())}
              </p>

              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`4.4`.replace(/\s+/g, ' ').trim())}</strong>{t(`We will only provide ongoing
                assignment or application information to the person who has
                signed the Fullmakt(Power of Attorney) or his/her spouse in some
                cases. We always update the application status for all ongoing
                applications and we will recommend you to please check your
                online portal.`.replace(/\s+/g, ' ').trim())}
              </p>

              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`4.5`.replace(/\s+/g, ' ').trim())}</strong>{t(`According to the new GDPR law we
                inform each client that we are going to keep your data,
                information, documents until your assignment is completed. You
                can even delete your profile and all the given information data
                will be disappeared in 72 Hours. You can even request us to
                delete your data but keep the profile for the latest updates.`.replace(/\s+/g, ' ').trim())}
              </p>

              <hr className=" tw-border-gray" />

              <h5>{t(`5. ADVICE`.replace(/\s+/g, ' ').trim())}</h5>

              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`5.1`.replace(/\s+/g, ' ').trim())}</strong> {t(`When we advise you so it is specific
                to your assignment and the facts and background information we
                collected from you. Therefore, you cannot rely on the advice of
                another mission or use it for purposes other than the one for
                which it was submitted.`.replace(/\s+/g, ' ').trim())}
              </p>
              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`5.2`.replace(/\s+/g, ' ').trim())}</strong>{t(`Our advisors can only advise on the
                business conditions in real-time, Policies laws can be changed
                at any time by sudden or planned interruption, amendments so the
                company or individual or partner will be not responsible for any
                advice which has been given in the past.`.replace(/\s+/g, ' ').trim())}
              </p>
              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`5.3`.replace(/\s+/g, ' ').trim())}</strong>{t(`We will not record any audio video
                during the advising, like during the appointment session, and
                it’s strictly prohibited. If we found any sort of audio/video
                clip or any other pieces of information which been taken without
                our knowledge company will take immediate action under the
                defined section in Laws. In some cases, if you need it for a
                specific purpose you need written approval from the company.`.replace(/\s+/g, ' ').trim())}
              </p>

              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`5.4`.replace(/\s+/g, ' ').trim())}</strong>{t(`We are not lawyers but consultants
                and can advise you according to available information on the
                governmental website of Sweden, Denmark. We do use law firms if
                required.`.replace(/\s+/g, ' ').trim())}
              </p>

              <hr className=" tw-border-gray" />

              <h5>{t(`6. LIMTATION OF LIABLITY`.replace(/\s+/g, ' ').trim())}</h5>

              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`6.1`.replace(/\s+/g, ' ').trim())}</strong> {t(`In addition to the limitations of
                liability set out in 6.2 and 6.3, we may apply special liability
                limitations for certain types of assignments. Such limitation of
                liability is given to you at the beginning of an application or
                for a specific assignment.`.replace(/\s+/g, ' ').trim())}
              </p>
              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`6.2`.replace(/\s+/g, ' ').trim())}</strong>{t(`Once we got the Power of
                Attorney(Fullmakt) we suppose to communicate on your behalf, you
                are not allowed to communicate yourself further without
                informing us. In that case, we will charge our fee as usual and
                will not be responsible for any further proceedings.`.replace(/\s+/g, ' ').trim())}
              </p>
              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`6.3`.replace(/\s+/g, ' ').trim())}</strong>{t(`We advise our clients according to
                their current circumstances. We are not responsible for any
                changes made after that date by the Government authorities. (5.1
                Laws, Policies)`.replace(/\s+/g, ' ').trim())}
              </p>

              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`6.4`.replace(/\s+/g, ' ').trim())}</strong>{t(`We would not be answerable to any
                other person except the client who signed the Power of Attorney
                with SWEDEN RELOCATORS AB. We will not be responsible for the
                stipulated dates being met or for any of your work being
                completed within the suggested time frames, or because we have
                not been able to start or continue our work due to circumstances
                beyond our control.`.replace(/\s+/g, ' ').trim())}
              </p>

              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`6.4`.replace(/\s+/g, ' ').trim())}</strong>{t(`We would not be answerable to any
                other person except the client who signed the Power of Attorney
                with SWEDEN RELOCATORS AB. We will not be responsible for the
                stipulated dates being met or for any of your work being
                completed within the suggested time frames, or because we have
                not been able to start or continue our work due to circumstances
                beyond our control.`.replace(/\s+/g, ' ').trim())}
              </p>

              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`6.5`.replace(/\s+/g, ' ').trim())}</strong>{t(`No time frame will be provided by us,
                We tell you what waiting time will be mentioned on the
                authority’s website. According to administration laws, all
                decisions must be made within 6 months but it can be more
                time-taking as well.`.replace(/\s+/g, ' ').trim())}
              </p>

              <p className=" tw-text-gray m-0 tw-pt-3">
                <strong>{t(`6.6`.replace(/\s+/g, ' ').trim())}</strong>{t(`We are using an online portal and
                using an international server for the database storage, we have
                already made all the security features active for your uploaded,
                documents, and information on the portal. In any case of a
                hacking attempt or losing the documents company will be not
                responsible for anything.`.replace(/\s+/g, ' ').trim())}
              </p>

              <hr className=" tw-border-gray" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Terms_conditions;
