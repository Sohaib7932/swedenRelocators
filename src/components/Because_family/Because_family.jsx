/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from 'react';
import first_image from '../../assets/images/Front-relocation.png';
import second_image from '../../assets/images/Second-relocation.png';
import Hero from '../../assets/images/hero.png';
import third_image from '../../assets/images/business-development-directions.png';
import fourth_image from '../../assets/images/man-searching-air-ticket-for-summer-travel.png';
import fifth_image from '../../assets/images/My-Documents.png';
import six_image from '../../assets/images/house-building.png';
import seven_image from '../../assets/images/bank-manager-talking.png';
import eight_image from '../../assets/images/child-care.png';
import nine_image from '../../assets/images/work-essentials.png';
import deals from '../../assets/images/real-estate-agent-sold-house-and-deal-confirmed.png';
import Button from '../Button';
import Why_choose_us from '../Why_choose_us';
import choose from '../../assets/images/office-meetings.png';
import { fadeIn, imageVariants, staggerContainer, zoomIn } from '../../utils/motion';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const Because_family = () => {


  const { t } = useTranslation();

  const containerVariants = staggerContainer(0.1, 0.1);
  const servicesData = [
    {
      id: 'service1',
      title: t('EU RESIDENCE CARD'),
      subtitle: t('Family Reunification'),
      text: t(''),
      textTwo: t(''),
      description: [
        t('In the European Union (EU), the right to family reunification is protected by the EU’s Charter of Fundamental Rights. The EU has established a common set of rules for family reunification for third-country nationals (non-EU citizens) who are living in an EU Member State. These rules are set out in the Family Reunification Directive (2003/86/EC).'),
        t('According to the Directive, the EU Member States must facilitate the reunification of third-country nationals with their spouse and minor children in their territory. The EU Member States have some discretion in determining the conditions for family reunification, but in general, the process must be efficient, transparent, and non-discriminatory.'),
        t('The third-country national must be legally resident in an EU Member State and must be able to support his or her family members financially and provide them with adequate accommodation. The family members must also not be a threat to public security or public health.'),
      ],
      link: '/family-reunification',
      image: first_image,
      component: null,
      btnText: t('Read More!'),
    },
    {
      id: 'service2',
      title: t('SOFTWARE BASE SOLUTION'),
      subtitle: t('Apply Online Now'),
      text: t(''),
      textTwo: t(''),
      description: [
        t('In the European Union (EU), the right to family reunification is protected by the EU’s Charter of Fundamental Rights. The EU has established a common set of rules for family reunification for third-country nationals (non-EU citizens) who are living in an EU Member State. These rules are set out in the Family Reunification Directive (2003/86/EC).'),
        t('According to the Directive, the EU Member States must facilitate the reunification of third-country nationals with their spouse and minor children in their territory. The EU Member States have some discretion in determining the conditions for family reunification, but in general, the process must be efficient, transparent, and non-discriminatory.'),
        t('The third-country national must be legally resident in an EU Member State and must be able to support his or her family members financially and provide them with adequate accommodation. The family members must also not be a threat to public security or public health.'),
      ],
      link: '/family-reunification',
      image: Hero,
      component: null,
      btnText: t('Read More!'),
    },
    {
      id: 'service3',
      title: t('COMPLETE ONLINE PORTAL & APP BASE SOLUTION'),
      subtitle: t('Relocating To') +  '<strong>' + t('Sweden?') + '</strong>',
      text: t(''),
      textTwo: t(''),
      description: [
        t('Moving abroad is an exciting yet stressful task. People migrate to different countries because of many reasons. People move to other countries to pursue better job opportunities, better education systems, better living standards, health systems, or due to their Family ties.'),
        t('We provide a wide range of services to individuals, families, and companies to relocate their employees to Sweden'),
        t('Visa and immigration services: We can assist with the application process for various types of visas, including work visas, student visas, and family reunification visas. They can also provide guidance on immigration laws and regulations, and help with the documentation required for the application process.'),
      ],
      link: '/personnumer-sweden',
      image: second_image,
      component: null,
      btnText: t('Read More!'),
    },
    {
      id: 'service4',
      title: t('STEP-BY-STEP ASSISTANCE'),
      subtitle: t('Departure-Arrival') +  '<strong>' + ' '+ t('Services') + '</strong>',
      text: t(''),
      textTwo: t(''),
      description: [
       '<strong>'+  t('Housing and accommodation services:') + '</strong>' +  t('We can help find suitable housing for the individual or family, including rental properties or purchasing a home. They can also provide advice on local neighborhoods and the cost of living in the new country.'),
       '<strong>'+ t('School and education services:') + '</strong>' + t('For families with children, we assist with the enrollment process for local schools, and provide information on educational systems and curriculums.'),
        '<strong>' + t('Cultural and language services:') + '</strong>' + t('We can provide information and resources on the culture, customs, and language of the new country, and may offer language classes or cultural training.'),
       '<strong>' +  t('Legal services:') + '</strong>' + t('We can help with the legal aspects of the move, such as tax and financial advice, and can provide guidance on local laws and regulations.'),
        '<strong>' + t('Logistics services:') + '</strong>' + t('We can help with the physical aspect of the move, including packing and shipping household goods, customs clearance, and transportation.'),
       '<strong>' +  t('Settling-in services:') + '</strong>' + t('We can provide assistance to help you to settle into your new home and surroundings, such as setting up utilities, arranging for home cleaning, or arranging for a handyman.'),
      ],
      link: '/family-reunification',
      image: fourth_image,
      component: null,
      btnText: t('Read More!'),
    },
    {
      id: 'service5',
      title: t('WORK PERMIT & EXTENSIONS'),
      subtitle: t('Applying For') + '<strong>' + t('Work Permit?') + '</strong>',
      text: t('We will help you with preparing permit applications'),
      textTwo: t(''),
      description: [
        t('Whether you are a Swedish company or a foreign employer who is facing problems with working permits inside Sweden we have easy solutions for you. You won’t be wasting enough time on how to apply for a Swedish work permit. We will do it for you easily and conveniently. You will not have to wait for 12 months in case of incorrect or incomplete applications. Our company will do it for you in good time. Download our app and discuss your case directly with our team.'),
      ],
      image: fifth_image,
      component: null,
      link: '/work-permit',
      btnText: t('Read More!'),
    },
    {
      id: 'service6',
      title: t('BUSINESS & INVESTMENT SOLUTIONS'),
      subtitle: t('Business') +'<strong> ' + t('In Sweden') + '</strong>',
      text: t('If you are planning to invest in Sweden, you might need to apply for the residence permit'),
      textTwo: t(''),
      description: [
        t('We have a complete solution for all your problems while starting a new business or opening a franchise of your existing business in Sweden. Our company will deliver the service of providing the resident permit that will align with your plan easily. You will need a detailed plan for your business, a bank statement that shows that you have enough capital to invest in your business along with other enough funds to show that you can support your family and yourself while staying in Sweden during the first two years. Don’t forget to use our Assessment tool to find out more.'),
      ],
      image: deals,
      component: null,
      link: '/invest',
      btnText: t('Read More!'),
    },
    {
      id: 'service7',
      title: t('EOR & Payroll Services'),
      subtitle: t('EOR &') + '<br/><strong> ' + t('Payroll Services') + '</strong>',
      text: t(''),
      textTwo: t('How Payroll Services Work:'),
      description: [
        t('Welcome to Sweden Relocators, your reliable partner for seamless global expansion. Our advanced Employer of Record (EOR) services simplify the process of growing your workforce internationally, helping you overcome common challenges with ease.'),
        t('How Payroll Services Work:'),
        '<strong>' + t('1.EOR Services:') + '</strong>',
        '<strong>' +t('Global Expansion Made Simple:') + '</strong>' + " " + t('With our EOR solutions, we manage all aspects of employment, including compliance with local laws, employee contracts, and payroll, allowing you to focus on your business operations without the administrative burden.'),
        '<strong>' + t('2.Payroll Services:') + '</strong>' ,
        '<strong>' + t('Accurate Salary Processing:') + '</strong>' + " " + t('We ensure timely and precise salary payments for your employees, considering all deductions, benefits, and tax obligations, thereby maintaining payroll accuracy.'),
        '<strong>' + t('Tax Compliance:') + '</strong>' + " " + t('Our experts are well-versed in the latest tax regulations and ensure that your operations stay compliant, helping you avoid fines and penalties.'),
        '<strong>' + t('Benefit Administration:') + '</strong>' + " " + t('We take care of administering employee benefits, from healthcare to retirement plans, ensuring that the process is efficient for both you and your employees'),
      ],
      link: '/eorpayroll',
      image: nine_image,
      component: null,
      btnText: t('Read More!'),
    },
    {
      id: 'service8',
      title: t('Why Choose Us'),
      subtitle: t('Experienced Team Provide') + '<strong><br/> '+ t('RELOCATION SERVICES') + '</strong>',
      text: t(''),
      textTwo: t(''),
      description: [t('We are here to provide you complete Relocation Services, including Housing, Kids School, Visa Services, Registration for Social Benefits, Language School, Integration activities etc.')],
      image: choose,
      link: '/services',
      component: <Why_choose_us />,
      btnText: t('Read More!'),
    },
    {
      id: 'service9',
      title: t('INSTANT HOUSING SOLUTIONS'),
      subtitle: t('Home Loans &')  + '<strong><br/>' + t('Secure Home Rental Solutions') + '</strong>',
      text: t(''),
      textTwo: t(''),
      description: [
        t('The first crucial step when relocating to Sweden is the right home for you and your family. We provide instant housing solutions with our housing partner companies. You can find the apartment or rent out your apartment by providing information on our Housing Solutions page.'),
      ],
      image: six_image,
      link: '/housing',
      component: null,
      btnText: t('Read More!'),
    },
    {
      id: 'service10',
      title: t('PROFESSIONAL LEGAL SERVICES BY LAWYERS'),
      subtitle: t('We Can Provide Lawyers For') + ' <strong><br/>' + t('Legal Issues') + '</strong>',
      text: t(''),
      textTwo: t(''),
      description: [
        t('The universe in which people live is full of actions and decisions considered as right and wrong. Legal services are defined as services related to government laws or legal issues such as providing legal advice, filing a case, defending against criminal charges, etc., which lawyers provided. We are working with different individuals lawyers and law firms where they can provide you solutions to your ongoing issues.'),
      ],
      image: seven_image,
      component: null,
      link: '/register',
      btnText: t('Send Request'),
    },
    {
      id: 'service11',
      title: t('AU-PAIR SERVICES FOR NORDIC FAMILIES'),
      subtitle: t('Solutions For Host Families') + ' & <strong><br/>' + t('AU Pair') + '</strong>',
      text: t(''),
      textTwo: t(''),
      description: [
        t('An Au Pair is a young person living abroad with a Host Family and taking care of the children in exchange for accommodation and pocket money.'),
        t('The Au Pair program is an international cultural exchange that gives the possibility to young people to spend some time abroad, learn more about a different culture, improve their skills in a foreign language in exchange for help with duties related to childcare. The term “au pair” from French means “on equal terms”, signifying that Au Pair and Host Family treat each other as equals.'),
      ],
      image: eight_image,
      component: null,
      link: '/register',
      btnText: t('Send Request'),
    },
  ];

  return (
    <section id="services" className="tw-bg-[#f5faff]">
      <div className="container">
        <div className="tw-grid tw-grid-cols-1 tw-gap-10 tw-w-[100%] tw-pb-10">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0; // Check if the index is even
            return (
              <>
                <div className=" md:tw-flex tw-gap-10 tw-items-center tw-max-w-[100%] tw-flex-wrap md:tw-flex-nowrap  md:tw-flex-row-reverse xs:tw-hidden tw-overflow-hidden" key={index}>
                  {isEven ? (
                    <>
                      <div className="tw-w-full">
                        <motion.img animate={imageVariants} src={service.image} alt="" />
                      </div>
                      <div className="tw-w-full">
                        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="title-header">
                          <span>{service.title}</span>
                          <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="!tw-text-black">
                            <h2 dangerouslySetInnerHTML={{ __html: service.subtitle }}></h2>
                          </motion.div>
                        </motion.div>
                        {service.text && (
                          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                            <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className="  tw-text-gray-dark tw-pt-2 tw-font-semibold tw-text-lg">
                              {service.text}
                            </motion.p>
                          </motion.div>
                        )}

                        {service.description.map((desc, i) => {
                          const isSpecialText = desc.includes('How Payroll Services Work:');
                          return (
                            <>
                              <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className={isSpecialText ? 'tw-text-gray-dark tw-m-0 tw-pt-0 tw-font-semibold tw-text-lg tw-mb-2' : 'tw-text-gray tw-text-justify  tw-mb-2'}
                                key={i}
                              >
                                <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} dangerouslySetInnerHTML={{ __html: desc }}></motion.p>
                              </motion.div>
                            </>
                          );
                        })}
                        {service.component && service.component}
                        <Link to={`${service.link}`}>
                          <Button label={service.btnText} className={'btn-indigo tw-mt-8'} />
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="tw-w-full">
                        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="title-header">
                          <span>{service.title}</span>
                          <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="!tw-text-black">
                            <h2 dangerouslySetInnerHTML={{ __html: service.subtitle }}></h2>
                          </motion.div>
                        </motion.div>
                        {service.text && (
                          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                            <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className="  tw-text-gray-dark tw-pt-2 tw-font-semibold tw-text-lg">
                              {service.text}
                            </motion.p>
                          </motion.div>
                        )}

                        {service.description.map((desc, i) => {
                          const isSpecialText = desc.includes('How Payroll Services Work:');
                          return (
                            <>
                              <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className={isSpecialText ? 'tw-text-gray-dark tw-m-0 tw-pt-0 tw-font-semibold tw-text-lg tw-mb-2' : 'tw-text-gray tw-text-justify  tw-mb-2'}
                                key={i}
                              >
                                <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} dangerouslySetInnerHTML={{ __html: desc }}></motion.p>
                              </motion.div>
                            </>
                          );
                        })}
                        {service.component && service.component}
                        <Link to={`${service.link}`}>
                          <Button label={service.btnText} className={'btn-indigo tw-mt-8'} />
                        </Link>
                      </div>
                      <div className="tw-w-full">
                        <motion.img animate={imageVariants} src={service.image} alt="" />
                      </div>
                    </>
                  )}
                </div>
                <div className="sm:tw-flex tw-gap-10 tw-items-center tw-max-w-[100%]  tw-flex-col md:tw-hidden" key={index}>
                  <div className="tw-w-full">
                    <motion.img animate={imageVariants} src={service.image} alt="" />
                  </div>
                  <div className="tw-w-full">
                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="title-header">
                      <span>{service.title}</span>
                      <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="!tw-text-black">
                        <h2 dangerouslySetInnerHTML={{ __html: service.subtitle }}></h2>
                      </motion.div>
                    </motion.div>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                      <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className="  tw-text-gray-dark tw-pt-2 tw-font-semibold tw-text-lg">
                        {service.text}
                      </motion.p>
                    </motion.div>

                    {service.description.map((desc, i) => {
                      const isSpecialText = desc.includes('How Payroll Services Work:');
                      return (
                        <>
                          <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className={isSpecialText ? 'tw-text-gray-dark tw-m-0 tw-pt-0 tw-font-semibold tw-text-lg tw-mb-2' : 'tw-text-gray tw-text-justify  tw-mb-2'}
                            key={i}
                          >
                            <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} dangerouslySetInnerHTML={{ __html: desc }}></motion.p>
                          </motion.div>
                        </>
                      );
                    })}
                    {service.component && service.component}
                    <Link to={`${service.link}`}>
                      <Button label={service.btnText} className={'btn-indigo tw-mt-8'} />
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Because_family;
