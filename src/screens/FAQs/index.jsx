import React, { useEffect, useState } from 'react';
import Banner_Page from '../../components/Common/Banner_Page';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { GoTriangleRight } from 'react-icons/go';
import Accordion from '../../components/Accordion/Accordion';
import Input from '../../components/Input2';
import Button from '../../components/Button';
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import Header from '../../components/Header_New/Header';


const FAQs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: 'What is a Visa?',
      data: 'A Visa is an authorization issued by the representative of the Government of a country permitting a person, not resident in that country, to enter its boundaries.',
      isOpen: false,
    },
    {
      key: 2,
      title: 'How do I know if I need a visa?',
      data: 'Depending on your purpose of travel, you can visit our website to check the eligibility.',
      isOpen: false,
    },
    {
      key: 3,
      title: 'Is the visa valid for Sweden only?',
      data: 'The Embassy of Sweden issues visas for Sweden and for the other Schengen states. The Schengen visa issued by the Embassy of Sweden gives access to 26 Schengen countries in total. However, the Schengen Visa applications will only be accepted by The Sweden Visa Application Centre if Sweden is the country of maximum stay. Should the duration of the stay be the same in several Schengen States, Sweden must be the first point of entry if making an application at the Sweden Visa Application Centre.          ',
      isOpen: false,
    },
    {
      key: 4,
      title: "What type of services 'SWEDEN RELOCATORS AB' provides to their clients?",
      data: 'SWEDEN RELOCATORS AB is a Relocation Services Provider Company that deals with all sorts of legal relocations to Sweden. The company was established in 2015 and offers fully Integrated Relocation Solutions for international corporations and their employees and Families. The company offers quality guidance, and effective advice and provides information to its clients to settle down in the country. We provide solutions within Destination Services, Global Mobility Services, Immigration Services, Move Management, Intercultural Communication, Invest in Sweden, Property Management, and IT Solutions.  In Additional Services Expats Home Rentals, EU Residence Permits, Family Permits, and Global Visa Applications Registering a new business or branch of an existing business, Import & Export to or from Europe.          ',
      isOpen: false,
    },
    {
      key: 5,
      title: "Is 'SWEDEN RELOCATORS AB' registered company?",
      data: 'Yes. We are registered as a company in Sweden with a branch office in Glostrup Denmark. We are registered for Legal Public Assistance (Offentliga Biträden) and we are a supplier member of EURA (European Relocation Association) and IIA (International Immigration Association).          ',
      isOpen: false,
    },
    {
      key: 6,
      title: 'How to Sign Up on your website and why its important?',
      data: 'You must have a valid email ID to sign up on our website. We collect basic information to avoid spam accounts. It is important to get registered as we want to know whom we are communicating with and we are in the process to implement Digital IDs to log in like BankID for Sweden and NemID/MittID for Denmark to make the sign-in and sign-up process fast and smooth.          ',
      isOpen: false,
    },
    {
      key: 7,
      title: 'What is Assessment and why everyone has to do that?',
      data: 'We made this assessment tool to make sure that you are eligible for your desired Visa or residence permit. At the end of your assessment process, you would receive your Result. Positive-Negative-Not Sure which gives us a better image for further proceeding.          ',
      isOpen: false,
    },
    {
      key: 8,
      title: 'How can I use the assessment tool?',
      data: 'On our website, you can find an Assessment button which leads you to the page of assessment, where you can do a self-assessment for your desired relocation route.          ',
      isOpen: false,
    },
    {
      key: 9,
      title: 'Do you have any office here in Copenhagen,Denmark?',
      data: 'Yes, Every Friday we are available in Smedeland 7 1. Sal 2600 Glostrup, Denmark, you can book online appointment.          If you want to sell your car, you can list it on our website and you will get its best value. Along with advertising your car, we can also help you navigate through the entire',
      isOpen: false,
    },
    {
      key: 10,
      title: 'Do I need to pay any fee for consultation?',
      data: 'Yes, We charge a one-time appointment fee of 1000 Kr which we might adjust once you choose any of our services.          ',
      isOpen: false,
    },
    {
      key: 11,
      title: 'How can I sign up ?',
      data: 'On the https://swedenrelocators.se/ top right corner, you can find the Signup and My Page options. Once you signed up you can click on My Page to log in. You can download the app to make the signup process quick.',
      isOpen: false,
    },
    {
      key: 12,
      title: 'What are the documents required for a Sweden Visa?',
      data: 'Depends on what type of Visa, Residence permit you are applying for. You can visit Assessment to find out more.          ',
      isOpen: false,
    },
    {
      key: 13,
      title: 'I am living in Denmark and I want to move to Sweden I don’t know where to start?',
      data: 'We are quite transparent in our process, we already designed a page called New In Sweden where we provide step-by-step information for those who want to do it by themself.  If you choose us,then we can provide you with complete assistance to relocate to Sweden, from Housing, Registration, Residence Permit, Bank Accounts, Health, School, Language, and other sorts of documentation and assistance that you required when you moved.',

      isOpen: false,
    },
    {
      key: 14,
      title: 'How do I submit my application for my wife and children’s?',
      data: 'We are quite transparent in our process, we already designed a page called New In Sweden where we provide step-by-step information for those who want to do it by themself.  If you choose us,then we can provide you with complete assistance to relocate to Sweden, from Housing, Registration, Residence Permit, Bank Accounts, Health, School, Language, and other sorts of documentation and assistance that you required when you moved.',

      isOpen: false,
    },
    {
      key: 15,
      title: 'My wife visa has been refused twice, and I want to make an appeal and looking for lawyer?',
      data: 'For appeal you don’t specifically need a lawyer, we can do an appeal as well. If you need a lawyer just fill out the form available on our website under “I need a Lawyer” and we will forward you to the Lawyer.      ',

      isOpen: false,
    },
    {
      key: 16,
      title: 'Can I apply for my husband visa as we recently got married in India and I am Danish Citizen?',
      data: 'Yes, All you need to do is to signup and book an appointment with us. You are eligible for the First free appointment so write us through “Message” on your portal to request a promo code.      ',

      isOpen: false,
    },
    {
      key: 17,
      title: 'I have Long-Term or Permanent Residence permit from Italy, can I move to Sweden?',
      data: 'Yes, If you have a permanent residence permit from any EU country except (Denmark, England, Ireland) you are eligible to move to Sweden and can work. You can use an Assessment tool to find out your eligibility.      ',

      isOpen: false,
    },
    {
      key: 18,
      title: 'I am planning to get married in Sweden with my partner, but I don’t know about the rules?',
      data: 'Sign up and write us through the “Message “section on the portal. We need to collect some basic information and then you can book an appointment for a detailed session.      ',

      isOpen: false,
    },
    {
      key: 19,
      title: 'I tried to sign up but did not received any activation email?',
      data: 'It’s a very common issue we are facing right now, Kindly check your Junk or Spam email if you did not receive an email in your inbox. You can send us an email to Support@swedenrelocators.set if you are not able to log in or contact the office at 0046 723276276.      ',

      isOpen: false,
    },
    {
      key: 20,
      title: 'Can you help me about the housing in Sweden; I want to move to Sweden with my family?',
      data: 'See the available apartment section on our website or app and if your required housing solution is not available there then you are always welcome to leave a query. You can rent out your apartment through us.      ',

      isOpen: false,
    },
    {
      key: 21,
      title: 'I am looking to setup business in Sweden; can you help me out in documentation process?',
      data: 'Yes, Please make sure you have used the assessment tool and checked the available options on the portal under Business Section. For more, you can book an appointment.      ',

      isOpen: false,
    },
    {
      key: 22,
      title: 'I want to rent out my apartment but why should I rent out my apartment through your company?',
      data: 'If you will rent out your apartment through us, we will offer you the commission that we get from tenants. We can manage the first connections between landlord and potential tenant(s), and then organize a meeting in order to let you meet in person. We will help you with the rental contract, and we are available for any basic questions or doubt that you may have when renting your property. We will make sure that things are according to agreements when tenants left the apartment.      ',

      isOpen: false,
    },
    {
      key: 23,
      title: 'I moved to Sweden from Denmark around 10 years ago but now I want to move back and selling my apartment, are you interested to buy?',
      data: 'In Sweden, Officially Property brokers can sell the properties and we are working with them so we can help you to sell your apartment/villas.      ',

      isOpen: false,
    },
    {
      key: 24,
      title: 'I want to move with my family to Sweden from Ireland and looking for complete relocation consulting until my kids starts school?',
      data: 'First, you have to sign up and you are eligible to book one free appointment. We have to get a lot of information in that session to find a proper route for your relocation process.      ',

      isOpen: false,
    },
    {
      key: 25,
      title: 'I want to study in Sweden, my friend got scholarship last year through your services, can I?',
      data: 'You are always welcome to contact us regarding your admission process, but you have to make an assessment first and come up with your assessment number when you contacted us. The scholarship is really depending on your previous educational background.      ',

      isOpen: false,
    },
    {
      key: 26,
      title: 'What if I do not have all the documents?',
      data: 'If your application is not accompanied by the documents that are recommended by the Embassy of Sweden, or the Migration Board, incomplete applications may lead to processing delays or rejection.      ',

      isOpen: false,
    },
    {
      key: 27,
      title: 'I am looking to setup business in Sweden; can you help me out in documentation process?',
      data: 'Yes. Please make sure that you have made the self-assessment on our website and see if a “Business” section on our portal is relevant to you.',

      isOpen: false,
    },
    {
      key: 28,
      title: 'Can you help in Company registration process and if yes how long it will take to register company in Sweden?',
      data: 'Yes, In Sweden we have different types of companies so processing time is vary depending on what kind of company you are looking to start. Sign Up and make an appointment for further assistance.',

      isOpen: false,
    },
    {
      key: 29,
      title: 'I am looking an office or Temporary address for company registration?',
      data: 'We can provide you co-working space if that is your question.',

      isOpen: false,
    },
    {
      key: 30,
      title: 'Where can I find my payment invoice?',
      data: 'On your portal, you can find the section called *Payments*. You can directly pay with your debit credit card or download the invoice and pay with the Bankgiro number and write your invoice number in the message section.      ',

      isOpen: false,
    },
    {
      key: 31,
      title: 'What is Complete IT solution for business?',
      data: 'As I saw on your website. Nowadays every business needs a modern shape, like website, Software, mobile apps, etc. We develop everything for your business and provide you with complete IT solutions.      ',

      isOpen: false,
    },
    {
      key: 32,
      title: 'I have got contract from my company where I am currently working, and now want to apply for Work permit, can you make my application?',
      data: 'Yes, we can take care of the complete process. For more, we will recommend you to use our assessment tool first and then book an appointment.      ',

      isOpen: false,
    },
    {
      key: 33,
      title: 'I need to apply for my citizenship for Sweden; can I come to you and how much it will cost?',
      data: 'Yes, you are always welcome. On your portal under the “Service Charges” section you can find the price list.      ',

      isOpen: false,
    },
    {
      key: 34,
      title: 'I am running my IT company in India can i open a branch office in Sweden?',
      data: 'Yes, You Can. Get an appointment for details informations.      ',

      isOpen: false,
    },
    {
      key: 35,
      title: 'How E-Visa Services Works?',
      data: 'In the first step, we must find out whether you are eligible for E-Visa through the Assessment tool. Not all country citizens can get E-Visas. If you are eligible for E-Visa, you can simply write to us in the message section on your portal If you want to apply through the embassy for Schengen or any other visit visa then we can prepare a complete file that you can download from your portal or we send it to you via DHL.      ',

      isOpen: false,
    },
    {
      key: 36,
      title: 'Where can I see the service charges?',
      data: 'Log in to My Page and you will find the service charges section on your left bottom where you can see the prices. Prices are only available for those who already booked an appointment or have an access promo code.      ',

      isOpen: false,
    },
    {
      key: 37,
      title: 'How can I upload my documents',
      data: 'Log in to My Page and you will find the service charges section on your left bottom where you can see the prices. Prices are only available for those who already booked an appointment or have an access promo code.      ',

      isOpen: false,
    },
    {
      key: 38,
      title: 'I am EU citizen how can i get ETA-ESTA for USA,CANADA, AUSTRALIA?',
      data: 'It’s very simple. If you are an EU citizen then Choose your visiting country for ETA-ESTA and fill out our simple ETA form available on their official websites. If you want us to help kindly book an appointment and we will do it for you.      ',

      isOpen: false,
    },
    {
      key: 39,
      title: 'We are Danish company and want to send our employees to india for business trip. Can you prepare visa applications?',
      data: 'Yes, For most EU citizens this visa or online so you just need to provide us with information and we will do it on the company’s behalf. You can provide us with details under the Message Section on My Page.      ',

      isOpen: false,
    },
    {
      key: 40,
      title: 'I am living outside of Europe and want to apply for UK, USA, Canada, visit visas?',
      data: 'Yes, we can help you to make an application for visit visas globally, you must have a stable income to apply for the visa. Check the self-assessment tool available on our website. You don’t need to visit us in our office just provide all the information’s under via the Message section and upload the documents on your portal. We prepare your file and you can download it from our Online Portal, or we can post it to you anywhere in the world.      ',

      isOpen: false,
    },
    {
      key: 41,
      title: 'Do you provide consulting for immigration to CANADA, AUS, NEW ZEALAND?',
      data: 'Yes, we have recently started these services. For more information you can contact us via email.      ',

      isOpen: false,
    },
    {
      key: 42,
      title: 'I have already signed up on your website and now want to upload my documents but it’s not working?',
      data: 'We don’t allow everyone to upload the documents. If you already booked an appointment with us then you can upload the documents. In other cases, if there is a potential client we provide him/her with a promo code that the client needs to use to unlock the Document Section.      ',

      isOpen: false,
    },
    {
      key: 43,
      title: 'Can I pay on behalf of my cousin as transferring money from Pakistan to Sweden cost a lot?',
      data: 'Once we create the invoice you find bank details on that, so anyone can pay the invoice to write the Invoice number before the due date. Once we got the payment for a specific invoice number we will mark it as paid on your portal.      ',

      isOpen: false,
    },
    {
      key: 44,
      title: 'Can you promote/introduce our product in Europe?',
      data: 'Yes, You can Sign Up and fill out the query form under the Business section on the portal. (Import-Export Services)      ',

      isOpen: false,
    },
    {
      key: 45,
      title: 'Can we book appointment via telephone?',
      data: 'You can call the office between 10:00 AM to 4:00 Pm Swedish Standard Time to book an appointment. But we will ask you to book it online. In some cases, people are not well aware of computers and can’t do it online they can call us and book an appointment. Remember! if you did not appear at the appointment time you will get an invoice at home. For more see our Terms and Conditions Section.      ',

      isOpen: false,
    },
    {
      key: 46,
      title: 'I booked an appointment online and already paid but now i want to change it. Can i?',
      data: 'Yes, every time when you booked an appointment you will receive a confirmation email where you can find the link Manage Appointment, or you can log in to our website and go to appointments and manage your appointment. Remember you can’t reschedule the appointment for the same day.      ',

      isOpen: false,
    },
    {
      key: 47,
      title: 'I made an appointment through mobile app and paid online, but did not received any confirmation email?',
      data: 'In that case, you must check your spam or junk folder, or you can log in through the browser and see if you can find your appointment invoice under the Appointment section. You can write to Customer Support through the Message section or can contact directly to the office on 0046 723 276276      ',

      isOpen: false,
    },
    {
      key: 48,
      title: 'Can you provide management services regarding my investment?',
      data: 'Log in to My Page and see the Business section. Otherwise, you can book an appointment.      ',

      isOpen: false,
    },
    {
      key: 49,
      title: 'How can I see my visa status?',
      data: 'If you are our ongoing client which means your application is under process, then we always update your application status at least once a month. Please see the “Application Status” on My Page.      ',

      isOpen: false,
    },
    {
      key: 50,
      title: 'Where can I see the list of available apartments?',
      data: 'You can always see the available apartment, and houses list on our website https://swedenrelocators.se/pages/housing you even can rent out your apartment through us.      ',

      isOpen: false,
    },
    {
      key: 51,
      title: 'Where can I send query for Housing?',
      data: 'On Housing solution, you will find all the sections to send us queries. If you are looking for housing, or want to rent out your place fill out the query forms.      ',

      isOpen: false,
    },
    {
      key: 52,
      title: 'How can I become a Partner ?',
      data: 'We have started a partner program for different immigration experts who covers different countries’ immigration services. You can sign up as a partner through the website. We already prepared an online portal which we explain once you are onboard with us.      ',

      isOpen: false,
    },
    {
      key: 53,
      title: 'How AU Pair services work?',
      data: 'We provide services to Host Families to Find the right AU Pair and AU Pair to find the right Host family. All they need to do is to provide us with information through the AU Pair Section available on our website.      ',

      isOpen: false,
    },
    {
      key: 54,
      title: 'I am looking for different Lawyers for different services do i need to fill forms twice?',
      data: 'Yes. If you are looking for 2 different lawyers’ services in different fields of the profession then you need to send a query twice.      ',

      isOpen: false,
    },
    {
      key: 55,
      title: 'How can I contact you ?',
      data: 'You can reach out to us through the user portal or by the given numbers 00467237276276 0046102146276 or info@swedenrelocators.se      ',

      isOpen: false,
    },
    {
      key: 56,
      title: 'Does FAQs not able to answer your questions?',
      data: 'Send an email and ask support@swedenrelocators.se ',

      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  return (
    <>
      <Header />
      <Banner_Page
        highlightText={("FAQs")}
        regularText={(
          "Got Questions? We’ve Got Answers – Explore Our FAQs."
        )}
        backgroundImage={homeBgImage}
      />

      <section className=" tw-mt-12">
        <div className="container tw-pb-5">
          <div className="row g-5">
            <div className="col-md-7">
              <div>
                <span>WHAT WE OFFER</span>
                <h2>
                  Do You Have <strong className=" tw-text-blue">Questions ?</strong>{' '}
                </h2>
              </div>
              <div className=" tw-pt-5">
                {accordions.map((accordion) => (
                  <Accordion key={accordion.key} title={accordion.title} data={accordion.data} isOpen={accordion.isOpen} toggleAccordion={() => toggleAccordion(accordion.key)} />
                ))}
              </div>
            </div>
            <div className="col-md-5">
              <div className="  tw-bg-gray-dark tw-rounded-lg tw-p-10">
                <h2 className=" tw-text-4xl text-white tw-text-white">
                  Can't <strong>Find</strong> The <strong>Answers ?</strong>
                </h2>
                <form className=" tw-pt-2">
                  <div className="row g-2">
                    <div className="col-md-12">
                      <Input placeholder={'Your Name'} label={'Your Name'}  className={' tw-bg-white  tw-p-3.5 tw-rounded  tw-w-full'} />
                    </div>
                    <div className="col-md-12">
                      <Input placeholder={'Email Id'} label={'Email'}  className={' tw-bg-white tw-p-3.5 tw-rounded  tw-w-full'} />
                    </div>
                    <div className="col-md-12">
                      <Input placeholder={'Cell phone'} label={'Cellphone'} className={' tw-bg-white tw-p-3.5 tw-rounded  tw-w-full'} />
                    </div>
                    <div className="col-md-12 tw-pt-2">
                      <textarea rows={6} className="  tw-w-full  tw-outline-none tw-bg-white tw-rounded  tw-p-3.5 " placeholder="Message"></textarea>
                    </div>
                    <div className="col-md-12">
                      <Button label={'Submit Request'} className={' tw-rounded-full  tw-bg-blue tw-text-white tw-w-full tw-py-3'} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FAQs;
