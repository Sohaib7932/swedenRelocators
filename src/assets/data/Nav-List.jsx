/* eslint-disable no-unused-vars */
import { FaQuestion } from 'react-icons/fa';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { TbHomeSearch } from 'react-icons/tb';
import { MdBusinessCenter } from 'react-icons/md';
import { MdFamilyRestroom } from 'react-icons/md';
import { GiEuropeanFlag } from 'react-icons/gi';
import { PiStudent } from 'react-icons/pi';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { CgWorkAlt } from 'react-icons/cg';
import { MdDensitySmall } from 'react-icons/md';
import { FaBox } from "react-icons/fa";
import { MdMapsHomeWork } from 'react-icons/md';
import { GoLaw } from 'react-icons/go';
import { RiGlobalLine } from 'react-icons/ri';
import { GiArchiveRegister } from 'react-icons/gi';
import { LuNetwork } from 'react-icons/lu';
import { CgSweden } from 'react-icons/cg';
import { TbMapPin2 } from 'react-icons/tb';
import { TfiWrite } from 'react-icons/tfi';
import { HiMiniBuildingOffice2 } from 'react-icons/hi2';
import { FaAddressCard } from 'react-icons/fa6';
import { VscPreview } from 'react-icons/vsc';
import { GiIdCard } from 'react-icons/gi';
import { RiParentLine } from 'react-icons/ri';
import { HiMiniDocumentText } from 'react-icons/hi2';
import { RiFileList3Fill } from 'react-icons/ri';

export const servicesChildLinks = [
  {
    id: 1,
    title: 'Asylum',
    description: 'You have to be in Sweden or on the Swedish border in order to apply for asylum.',
    icons: <MdMapsHomeWork color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/asylum',
  },
  {
    id: 2,
    title: 'Family Reunification',
    description: 'Family reunification is a recognized reason for the immigration of family members to a country.',
    icons: <MdFamilyRestroom color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/family-reunification',
  },
  {
    id: 3,
    title: 'Relocate to Sweden',
    description: 'The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.',
    icons: <CgSweden color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,

    Link: '/personnumer-sweden',
  },
  {
    id: 4,
    title: 'Relocate to Denmark',
    description: 'CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ',
    icons: <GiIdCard color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/cpr-number-denmark',
  },
  {
    id: 5,
    title: 'Work Permit',
    description: 'Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ',
    icons: <CgWorkAlt color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/work-permit',
  },
  {
    id: 5,
    title: 'Business Permit',
    description: 'Swedish business culture is open and innovative, and starting a business there is relatively simple        ',
    icons: <MdBusinessCenter color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,

    Link: '/business-permit',
  },
  {
    id: 6,
    title: 'Business Visit',
    description: 'Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ',
    icons: <TbMapPin2 color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,

    Link: '/business-visit',
  },
  {
    id: 7,
    title: 'Citizenship',
    description: 'When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ',
    icons: <FaAddressCard color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/citizenship',
  },
  {
    id: 8,
    title: 'Study in EU',
    description: 'If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ',
    icons: <PiStudent color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/study-in-eu',
  },
  {
    id: 9,
    title: 'Global Visit Visas',
    description: 'For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ',
    icons: <RiGlobalLine color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/global-visit-visas',
  },

  {
    id: 11,
    title: 'Parents EU Permit',
    description: 'Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ',
    icons: <RiParentLine color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/parents-eu-permit',
  },
  {
    id: 0,
    title: 'Logistics',
    description: 'Streamline your move with our comprehensive logistics solutions, ensuring a hassle-free relocation experience.        ',
    icons: <FaBox color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/logistics',
  },
  {
    id: 13,
    title: 'Company Registration',
    description: 'If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ',
    icons: <GiArchiveRegister color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/company-registration',
  },
  {
    id: 14,
    title: 'EOR & Payroll',
    description: 'we offer you an easy and painless solution where you can get eor and payroll.',
    icons: <HiMiniBuildingOffice2 color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/eorpayroll',
  },
  {
    id: 15,
    title: 'Appeal Cases',
    description: 'Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.',
    icons: <GoLaw color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/appeal-cases',
  },
  {
    id: 16,
    title: 'EU Citizens Relocation',
    description: 'Family reunification means that a family that has been split up can apply to be allowed to live together.        ',
    icons: <GiEuropeanFlag color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/eu-family-reunification',
  },
  {
    id: 17,
    title: 'Investment',
    description: 'There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ',
    icons: <LuNetwork color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/investment',
  },
  {
    id: 18,
    title: 'Direct Citizenship',
    description: 'citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ',
    icons: <HiMiniDocumentText color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/direct-citizenship-by-investments',
  },
  {
    id: 19,
    title: 'Permanent Residence',
    description: 'If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ',
    icons: <TfiWrite color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/permanent-residence',
  },
  {
    id: 20,
    title: 'Golden Visa ',
    description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ',
    icons: <RiFileList3Fill color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/golden-visa-greece-portugal',
  },
];
export const housingChildLinks = [
  // {
  //   id: 1,
  //   title: 'How It Works',
  //   description: 'Get to know how to the housing process works.',
  //   icons: <FaQuestion color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
  //   Link: '/housing',
  // },
  {
    id: 2,
    title: 'Available Housing',
    description: 'Go through all the housing listed.',
    icons: <MdOutlineEventAvailable color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/available_housing',
  },
  {
    id: 3,
    title: 'List your property',
    description: 'If youre looking to rent out your house.',
    icons: <MdOutlineBedroomParent color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/rent_out_your_housing',
  },
  {
    id: 4,
    title: 'Looking For Housing',
    description: 'If you are looking for housing.',
    icons: <TbHomeSearch color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/looking_for_housing',
  },
];
export const assessmentChidldLinks = [
  {
    id: 1,
    title: 'Business Visa',
    description: 'A business visa allows individuals to enter a foreign country for business-related activities, such as meetings, conferences, and negotiations, without engaging in long-term employment.',
    icons: <MdBusinessCenter color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/businessvisaassessment',
  },
  {
    id: 2,
    title: 'Family Reunification',
    description: 'A family reunification visa enables family members to join a relative residing legally in a foreign country, facilitating the reuniting of close family units across borders.',
    icons: <MdFamilyRestroom color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/family_reunification_assessment',
  },
  {
    id: 3,
    title: 'Long Term EU Status',
    description: 'A Long-Term EU Residence Permit grants non-EU nationals the right to live, work, and move freely within an EU country, offering a stable residence status with certain EU-wide mobility rights.',
    icons: <GiEuropeanFlag color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/long_term_eu_status_assessment',
  },
  {
    id: 4,
    title: 'Student Visa',
    description: 'A student visa allows individuals to reside in a foreign country for educational purposes, enabling them to enroll in academic or vocational programs.',
    icons: <PiStudent color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/student_assessments',
  },
  {
    id: 5,
    title: 'Visit Visa',
    description: 'A visit visa permits short-term travel to a foreign country for tourism, family visits, or non-business purposes, typically with a limited duration of stay.',
    icons: <IoDocumentTextOutline color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/visit_visa',
  },
  {
    id: 6,
    title: 'Work Permit',
    description: 'A work permit authorizes individuals to work legally in a foreign country, usually sponsored by an employer, for a specified job and time period.',
    icons: <CgWorkAlt color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/work_permit',
  },
  {
    id: 7,
    title: 'All Assessments',
    description: 'View all available assessments.',
    icons: <MdDensitySmall color="#fff" className="tw-text-[28px] tw-text-white tw-mb-0" />,
    Link: '/assessment',
  },
];

export const NavItems = [
  // {
  //   id: 0,
  //   name: 'Home',
  //   url: '/',
  // },
  {
    id: 0,
    name: 'New in Sweden',
    url: '/new_in_sweden',
  },
  {
    id: 1, // This could be a common ID for the Services dropdown
    name: 'Services',
    url: '/services',
    childLinks: servicesChildLinks,
  },
  {
    id: 2,
    name: 'About Us',
    url: '/about_us',
  },
  {
    id: 3,
    name: 'Housing',
    url: '/housing',
    childLinks: housingChildLinks,
  },
  {
    id: 4,
    name: 'Assessment',
    url: '/assessment',
    childLinks: assessmentChidldLinks,
  },
  {
    id: 5,
    name: 'Contact Us',
    url: '/contact_us',
  },
];
