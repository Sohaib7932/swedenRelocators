import React, { useEffect, useState } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";

import { useTranslation } from 'react-i18next';

import Header from '../../components/Header_New/Header';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Banner_Page
        highlightText={t("Privacy Policy")}
        regularText={t(
          "Your Privacy Matters – Explore Our Policies for Transparency and Trust."
        )}
        backgroundImage={homeBgImage}
      />

      <section className=" tw-mt-12">
        <div className="container tw-pb-5 tw-text-justify">
          <div className="row">
            <div className="col-md-12">
              <h3>{t(`Who we are`.replace(/\s+/g, ' ').trim())}</h3>
              <p className=" tw-text-gray">{t(`Our website address is www.swedenrelocators.se`.replace(/\s+/g, ' ').trim())}</p>
              <p className=" tw-text-gray">{t(`We periodically update this Privacy Policy and it’s the client’s responsibility to check our updated terms. Last Update: 2022-09-01`.replace(/\s+/g, ' ').trim())}</p>
              <p className=" tw-text-gray">{t(`SWEDEN RELOCATORS is committed to protecting your privacy. This Privacy Policy applies to our websites www.swedenrelocators.se and www.futureconcerns.se and our mobile app available on App Store/Play store, our online clients portal,
                and our Subscription Service (the Subscription Service), available on our website. This Privacy Policy governs our data collection, processing, and usage practices. It also describes your choices regarding the use, access, and
                correction of your personal information. By using the Websites or the Subscription Service, you consent to the data practices described in this Privacy Policy. If you do not agree with the data practices described in this Privacy
                Policy, you should not use the Websites or the Subscription Service.`.replace(/\s+/g, ' ').trim())}</p>

              <h3>{t(`1- Private Policy`.replace(/\s+/g, ' ').trim())}</h3>
              <p className=" tw-text-gray m-0">
                <strong>{t(`1.1- Changes to this Privacy Policy`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`We may update this Privacy Policy from time to time by posting a new version online. You should check this page occasionally to review any changes. This helps you to always be aware of what information we collect, how we use it, and
                under what circumstances if any, it is disclosed. Your continued use of the Websites, the Subscription Service, and/or continued provision of Personal Information to us will be subject to the terms of the then-current Privacy Policy.`.replace(/\s+/g, ' ').trim())}</p>
              <p className=" tw-text-gray m-0">
                <strong>{t(`1.2- Contact Us`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`If you have any questions about this Privacy Policy or our treatment of the information you provide us, please write to us by email at support@swedenrelocators.seor by mail to SWEDEN RELOCATORS, Sallerupsvägen 28D 212 18 Malmö,
                Sweden, Subject: Private Privacy.`.replace(/\s+/g, ' ').trim())}</p>

              <h3 className=" tw-py-2 tw-text-gray-dark">{t(`2- The data we collect`.replace(/\s+/g, ' ').trim())}</h3>
              <p className=" tw-text-gray m-0">
                <strong>{t(`2.1- When You Visit our websites`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`You are free to explore the Websites without providing any Personal Information about yourself. When you visit the Websites or register for the Subscription Service, we request that you provide Personal Information about yourself, and
                we collect Navigational Information.`.replace(/\s+/g, ' ').trim())}</p>
              <p className=" tw-text-gray m-0">
                <strong>{t(`2.2- Third-Party Advertising`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`Not Applicable`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`2.3- Personal Information`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`This refers to any information that you voluntarily submit to us and that identifies you personally, including contact information, such as your name, e-mail address, company name, address, phone number, and other information about
                yourself or your business. Personal Information can also include information about any transactions, both free and paid, that you enter on the Websites, and information about you that is available on the internet, such as from
                Facebook, LinkedIn, Twitter, and Google, or publicly available information that we acquire from service providers.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`2.4- Navigational Information`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`This refers to information about your computer and your visits to this website such as your IP address, geographical location, browser type, referral source, length of visit, and pages viewed.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`2.5- Payment Information`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`We collect and process payment information from you when you subscribe to the Subscription Service, including credit card numbers and billing information, using third-party PCI-compliant service providers. Except for this, we do not
                collect Sensitive Information from you.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`2.6- Information About Minors`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`The Websites are not intended for or targeted at children under 16, and we do not knowingly or intentionally collect information about children under 16. If you believe that we have collected information about a child under 16, please
                contact us at support@swedenrelocators.se, so that we may delete the information. The client can provide information about minors when required for immigration and relocation purposes.`.replace(/\s+/g, ' ').trim())}</p>

              <h3 className="tw-text-left tw-py-2 tw-text-gray-dark">{t(`3- How We Use the Information We Collect`.replace(/\s+/g, ' ').trim())}</h3>
              <p className=" tw-text-gray m-0">
                <strong>{t(`3.1- Compliance with Our Privacy Policy`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`We use the information we collect only in compliance with this Privacy Policy.`.replace(/\s+/g, ' ').trim())}</p>
              <p className=" tw-text-gray m-0">
                <strong>{t(`3.2- We Never Sell Personal Information`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`We will never sell your Personal Information to any third party.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`3.3- Use of Personal Information`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`In addition to the uses identified elsewhere in this Privacy Policy, we may use your Personal Information to (a) improve your browsing experience by personalizing the Websites and improving the Subscription Service; (b) send
                information to you that we think may be of interest to you by post, email, or other means; (c) send you marketing communications relating to our business, and (d) provide other companies with statistical information about our users —
                but this information will not be used to identify any individual user.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">{t(`We use the information collected through our Subscription Service by our customers for the following purposes: (a) to provide the Subscription Service (which may include the detection, prevention, and resolution of security and
                technical issues); (b) to respond to customer support requests, and (c) otherwise to fulfill the obligations under the Customer Terms of Service.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`3.4- Use of Navigational Information`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`We use Navigational Information to operate and improve the Websites and the Subscription Service. We may also use Navigational Information alone or in combination with Personal Information to provide you with personalized information
                about SWEDEN RELOCATORS AB.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`3.5- Customer Testimonials and Comments`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`We post customer testimonials and comments on our websites, which may contain Personal Information. We obtain each customer’s consent via email prior to posting the customer’s name and testimonial.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`3.6- Use of Credit Card Information`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`If you give us credit card information, we use it solely to check your financial qualifications and collect payment from you. We use a third-party service provider to manage credit card processing. This service provider is not
                permitted to store, retain, or use the information you provide except for the sole purpose of credit card processing on our behalf.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`3.7- Service Providers`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`We employ other companies and people to provide services to visitors to our Websites, our customers, and users of the Subscription Service and may need to share your information with them to provide information, products, or services
                to you.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`3.8- Security of your Personal Information`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`We use a variety of security technologies and procedures to help protect your Personal Information from unauthorized access, use, or disclosure. We secure the Personal Information you provide on computer servers in a controlled,
                secure environment, protected from unauthorized access, use or disclosure. When sensitive Personal Information (such as a credit card number and/or geo-location data) is collected on our Websites and/or transmitted to other websites,
                it is protected through the use of encryption, such as the Secure Socket Layer (SSL) protocol.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`3.9- Social Media Features`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`Our Websites include Social Media Features, such as the Facebook Like button, and Widgets, such as the Share This button or interactive mini-programs that run on our sites. These features may collect your IP address, and which page
                you are visiting on our sites, and may set a cookie to enable the feature to function properly. Social Media Features and Widgets are either hosted by a third party or hosted directly on our Websites. This Privacy Policy does not
                apply to these features. Your interactions with these features are governed by the privacy policy and other policies of the companies providing them.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`3.10- External Websites`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`Our websites provide links to other websites. We do not control and are not responsible for, the content or practices of these other websites. Our provision of such links does not constitute our endorsement of these other websites,
                their content, their owners, or their practices. This Privacy Policy does not apply to these other websites, which are subject to any privacy and other policies they may have.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`3.11- Public Forums`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`We offer publicly accessible message boards, blogs, and community forums. Please keep in mind that if you directly disclose any information through our public message boards, blogs, or forums, this information may be collected and
                used by others. We will correct or delete any information you have posted on the Websites if you so request, as described in “Opting Out and Unsubscribing” below.`.replace(/\s+/g, ' ').trim())}</p>
              <p className=" tw-text-gray m-0">
                <strong>{t(`3.12- Retention of Personal Information`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`We retain the Personal Information that you provide us as long as we consider it potentially useful in contacting you about the Subscription Service or our other services, or as needed to comply with our legal obligations, resolve
                disputes and enforce our agreements, and then we securely delete the information. We will delete this information from the servers at an earlier date if you so request, as described in “Opting Out and Unsubscribing” below. If you
                provide information to our customers as part of their use of the Subscription Service, our customers decide how long to retain the personal information they collect from you. If a customer terminates its use of the Subscription
                Service, then we will provide the customer with access to all information stored for the customer by the Subscription Service, including any Personal Information provided by you, for export by the customer according to our agreement
                with our customer. After termination, we may, unless legally prohibited, delete all customer information, including your Personal Information, from the Subscription Service.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`3.13- International Transfer of Information`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`To facilitate our global operations, we may transfer and access Personal Information from around the world, including the United States. This Privacy Policy shall apply even if we transfer Personal Information to other countries.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`3.14- Corporate Events`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`If we (or our assets) are acquired by another company, whether by merger, acquisition, bankruptcy, or otherwise, that company would receive all information gathered by SWEDEN RELOCATORS AB on the Websites and the Subscription Service.
                In this event, you will be notified via email and/or a prominent notice on our website, of any change in ownership, uses of your Personal Information, and choices you may have regarding your Personal Information.`.replace(/\s+/g, ' ').trim())}</p>
              <p className=" tw-text-gray m-0">
                <strong>{t(`3.15- Compelled Disclosure`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`We reserve the right to use or disclose your Personal Information if required by law or if we reasonably believe that use or disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate
                fraud, or comply with a law, court order, or legal process.`.replace(/\s+/g, ' ').trim())}</p>

              <h3 className="tw-text-left tw-py-2 tw-text-gray-dark">{t(`4- Payment and Subscriptions`.replace(/\s+/g, ' ').trim())}</h3>
              <p className=" tw-text-gray m-0">
                <strong>{t(`4.1- The Subscription Service`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`Our online Subscription Service allows any person that uses it (our customers and NIM.MERSION itself) to store information on our servers where visitors can learn more about the company, download content, and provide their contact
                information and other demographic information, and documentation. This information, which is stored and managed on our service provider’s servers, is then used so that the visitors can be contacted about their interest in the
                company’s goods or services and interact with the company. The company provides the Subscription Service to our customers, and we use it on our websites for our own marketing.`.replace(/\s+/g, ' ').trim())}</p>
              <p className=" tw-text-gray m-0">
                <strong>{t(`4.2- Client Portal`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`We use our own server to store information and documents of the clients. We and clients both save information on client profiles available on our web portal and app with the permission of the client and the client is responsible for
                User Credentials (Username-Password). We are using the best available tools to protect clients’ information and data. We don’t use any private information for any purpose except the purpose of clients’ signed power of attorney.
                Information that we collect and manage using the Subscription Service for our own marketing belongs to us and is used, disclosed, and protected according to this Privacy Policy.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`4.3- Housing Solutions`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`Our customers use the Subscription Service to list rental properties on web pages that people can visit to learn more about their properties. The company does not control the content of these web pages or the types of information that
                our customers may choose to collect or manage using the Subscription Service. That information belongs to them and is used, disclosed, and protected by them according to their privacy policies and is not subject to this Privacy
                Policy. SWEDEN RELOCATORS processes our customers’ information as they direct and in accordance with our agreements with our customers, and we store it on our service provider’s servers, but we do not have control over its collection
                or management. We have no direct relationship with individuals who provide Personal Information to our customers. The company acknowledges that you have the right to access your Personal Information. Our customer’s control and are
                responsible for correcting, deleting, or updating information they have collected from you using the Subscription Service. If requested to remove data, we will respond within a reasonable timeframe. We may work with our customers to
                help them provide notice to their visitors about their data collection, processing, and usage. Our agreements with our customers prohibit them from using the Subscription Service to collect, manage, or process Sensitive Information.
                We are not responsible for our customers’ use of the information they collect on the Subscription Service.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">{t(`SWEDEN RELOCATORS collects information under the direction of its customers and has no direct relationship with the individuals whose Personal Information it processes. If you are a customer of one of our customers and would no longer
                like to be contacted by one of our customers that use our Subscription Service, please contact the customer that you interact with directly. We may transfer Personal Information to companies that help us provide our service. Transfers
                to subsequent third parties are covered by the service agreements with our customers.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`4.3.1- Customers Support`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`Our customers use the Subscription Service to access content such as webinars, education materials, and immigration information. This content is subject to this privacy policy.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">{t(`We use the information collected through our Subscription Service by our customers for the following purposes: (a) to provide the Subscription Service (which may include the detection, prevention, and resolution of security and
                technical issues); (b) to respond to customer support requests; and (c) otherwise to fulfill the obligations under the Customer Terms of Service.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`4.4- Sensitive Information`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`This refers to credit or debit card numbers, personal financial account information, Social Security numbers, passport numbers, driver’s license numbers or similar personal identifiers, racial or ethnic origin, physical or mental
                health condition or information, or other employment, financial or health information.`.replace(/\s+/g, ' ').trim())}</p>

              <h3 className="tw-text-left tw-py-2 tw-text-gray-dark">{t(`5- Opting Out and Unsubscribing`.replace(/\s+/g, ' ').trim())}</h3>
              <p className=" tw-text-gray m-0">
                <strong>{t(`5.1- Reviewing, Correcting, and Removing Your Personal Information`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`Upon request company will provide you with information about whether we hold any of your Personal Information. If you provide us with your Personal Information, you have the following rights with respect to that information:`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">{t(`To exercise any of these rights, please contact us at support@swedenrelocators.se or by mail to SWEDEN RELOCATORS, Sallerupsvägen 28D 212 18 Malmö Sweden. Subject: Private Privacy. We will respond to your request to change, correct,
                or delete your information within a reasonable timeframe and notify you of the action we have taken.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`5.2- Anti-Spam Policy`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`Our Acceptable Use Policy, among other things, prohibits the use of the Subscription Service to send unsolicited commercial emails in violation of applicable laws and requires the inclusion in every email sent using the Subscription
                Service of an “opt-out” mechanism and other required information. We require all of our customers to agree to adhere to the Acceptable Use Policy at all times, and any violations of the Acceptable Use Policy by a customer can result
                in immediate suspension or termination of the Subscription Service.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`5.3- Anti-Spam Policy`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`You may unsubscribe from our marketing communications by clicking on the “unsubscribe” link located at the bottom of our e-mails, by sending us an email at support@swedenrelocators.se, or by sending us postal mail to SWEDEN
                RELOCATORS, Sallerupsvägen 28D 212 18 Malmö Sweden, Subject: Private Privacy. Customers can receive regular emails regarding their services, unsubscribing can stop all future emails.`.replace(/\s+/g, ' ').trim())}</p>

              <h3 className=" tw-py-2 tw-text-gray-dark">{t(`6- Navigational Information`.replace(/\s+/g, ' ').trim())}</h3>
              <p className=" tw-text-gray m-0">
                <strong>{t(`6.1- Cookies`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`SWEDEN RELOCATORS and its partners use cookies or similar technologies to analyze trends, administer the website, track users’ movements around the website, and gather demographic information about our user base as a whole.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">{t(`We use “cookies” to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a Web server. Cookies are not used to run programs or deliver viruses to your computer. Cookies are uniquely
                assigned to you, and can only be read by a Web server in the domain that issued the cookie to you. One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web
                server that you have returned to a specific page. For example, if you personalize pages on our Websites, or register for the Subscription Service, a cookie helps us to recall your specific information on subsequent visits. When you
                return to the same Website, the information you previously provided can be retrieved, so you can easily use the customized features.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">{t(`You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able
                to fully experience the interactive features of the Service or Websites you visit. SWEDEN RELOCATORS keeps track of the Websites and pages you visit within the company, in order to determine what portion of the company Website or
                Subscription Service is the most popular or most used. This data is used to deliver customized content and promotions within the NIM.MERSION Website and Subscription Service to customers whose behavior indicates that they are
                interested in a particular subject area.`.replace(/\s+/g, ' ').trim())}</p>
              <p className=" tw-text-gray m-0">
                <strong>{t(`6.2- Log Files`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`We may collect demographic information, such as your ZIP code, age, gender, preferences, interests, and favorites using log files that are not associated with your name or other personal information. There is also information about
                your computer hardware and software that is automatically collected by us. This information can include your IP address, browser type, domain names, internet service provider (ISP), the files viewed on our site (e.g., HTML pages,
                graphics, etc.), operating system, clickstream data, access times, and referring website addresses. This information is used by the company for the operation of the Subscription Service, to maintain the quality of the Subscription
                Service, and to provide general statistics regarding the use of the Company Website. For these purposes, we do link this automatically-collected data to Personal Information such as name, email address, address, and phone number.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`6.3- Clear Gifs-Web Beacons/Web Bugs`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`We employ a software technology called clear gifs (a.k.a. Web Beacons/Web Bugs), that helps us better manage the Website and Subscription Service by informing us what content is effective. Clear gifs are tiny graphics with a unique
                identifier, similar in function to cookies, and are used to track the online movements of Web users. In contrast to cookies, which are stored on a user’s computer hard drive, clear gifs are embedded invisibly on Web pages or in emails
                and are about the size of the period at the end of this sentence. We use clear gifs in our HTML-based emails to let us know which emails have been opened by recipients. This allows us to gauge the effectiveness of certain
                communications and the effectiveness of our marketing campaigns. We tie the information gathered by clear gifs in emails to our customers’ Personal Information. If you would like to opt out of these emails, please see “Opting Out and
                Unsubscribing”.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`6.4- Navigational Information Collected by Our Customers`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`Our customers can use the tools we provide, as well as tools provided by third parties, to collect Navigational Information when you visit their web pages on the Subscription Service. SWEDEN RELOCATORS does not control our customers’
                use of these tools, nor do we control the information they collect or how they use it.`.replace(/\s+/g, ' ').trim())}</p>

              <p className=" tw-text-gray m-0">
                <strong>{t(`6.5- Single Sign-On`.replace(/\s+/g, ' ').trim())}</strong>
              </p>
              <p className=" tw-text-gray m-0">{t(`If you use a Single Sign-on (SSO) service like your Google account to access services, the service will authenticate your identity and provide you the option to share certain personal information with us such as your name and email
                address to pre-populate our sign-up form. Such services may give you the option to post information about your activities on this Web site to your profile page to share with others within your network.`.replace(/\s+/g, ' ').trim())}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
