import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { MdClose } from "react-icons/md";
import Banner_Page from "../../components/Common/Banner_Page";
import { LiaAngleRightSolid } from "react-icons/lia";





import Header from "../../components/Header_New/Header";
import { useTranslation } from 'react-i18next';


import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";

import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import Tabs from "../../components/Tabs";
import VideoPlayer from "../../components/videoPlayer";

const Gallery = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const allProduct = [
    "https://swedenrelocators.se/videos/01-Download%20the%20App-%20AR.mp4",
    "https://swedenrelocators.se/videos/01-Download%20the%20App-%20AR.mp4",
    "https://swedenrelocators.se/videos/03-How%20to%20Log%20in-%20AR.mp4",
    "https://swedenrelocators.se/videos/04-Appointment-AR.mp4",
    "https://swedenrelocators.se/videos/05-Application%20status-AR.mp4",
    "https://swedenrelocators.se/videos/05-Application%20status-AR.mp4",
  ];
  const { t } = useTranslation();

  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? allProduct?.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === allProduct?.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurr(index);
  };

  const [isModalSlider, setIsModalSlider] = useState(false);

  const openSlider = () => {
    setIsModalSlider(true);
  };

  const closeSlider = () => {
    setIsModalSlider(false);
  };

  const data = [
    {
      id: 1,
      title: "Asylum",
      description:
        "You have to be in Sweden or on the Swedish border in order to apply for asylum.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-home"></i>
      ),
      Link:'/asylum'
    },
    {
      id: 2,
      title: "Family Reunification",
      description:
        "Family reunification is a recognized reason for the immigration of family members to a country.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>
      ),
      Link:'/family-reunification'
    },
    {
      id: 3,
      title: "Personnummer Sweden",
      description:
        "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>
      ),

      Link:'/personnumer-sweden'
      
    },
    {
      id: 4,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>
      ),
      Link:'/cpr-number-denmark'
      
    },
    {
      id: 5,
      title: "Work Permit",
      description:
        "Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>
      ),
      Link:'/work-permit'
    },
    {
      id: 5,
      title: "Business Permit",
      description:
        "Swedish business culture is open and innovative, and starting a business there is relatively simple        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>
      ),

      Link:'/business-permit'
    
    },
    {
      id: 6,
      title: "Business Visit",
      description:
        "Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>
      ),
      
      Link:'/business-visit'
    },
    {
      id: 7,
      title: "Citizenship",
      description:
        "When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>
      ),
      Link:'/citizenship'
      
    
    },
    {
      id: 8,
      title: "Study in EU",
      description:
        "If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>
      ),
      Link:'/study-in-eu'
      
    },
    {
      id: 9,
      title: "Global Visit Visas",
      description:
        "For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>
      ),
      Link:'/global-visit-visas'
    },
    {
      id: 10,
      title: "EEA Permits",
      description:
        "Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>
      ),
      Link:'/eea-permits'
    },
    {
      id: 11,
      title: "Parents EU Permit",
      description:
        "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>
      ),
      Link:'/parents-eu-permit'
    },
    {
      id: 12,
      title: "Marriage & Divorce      ",
      description:
        "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>
      ),
      Link:'/marriage-divorce'
    },
    {
      id: 13,
      title: "Company Registration      ",
      description:
        "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link:'/company-registration'
    },
    {
      id: 14,
      title: "House & Offices",
      description:
        "we offer you an easy and painless solution where you can get a place to live without any worries.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link:'/house-offices'
    },
    {
      id: 15,
      title: "Appeal Cases",
      description:
        "Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>
      ),
      Link:'/appeal-cases'
    },
    {
      id: 16,
      title: "EU Citizens Relocation",
      description:
        "Family reunification means that a family that has been split up can apply to be allowed to live together.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>
      ),
      Link:'/eu-family-reunification'
    },
    {
      id: 17,
      title: "Investment",
      description:
        "There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>
      ),
      Link:'/investment'
    },
    {
      id: 18,
      title: "Direct Citizenship by Investments      ",
      description:
        "citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>
      ),
      Link:'/direct-citizenship-by-investments'
    },
    {
      id: 19,
      title: "Permanent Residence",
      description:
        "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>
      ),
      Link:'/permanent-residence'
    },
    {
      id: 20,
      title: "Golden Visa (Greece - Portugal)      ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
      Link:'/golden-visa-greece-portugal'
    },
  ];

  const [language,setLanguage] = useState("english");
  const tabData = [
    {
      title: "Introduction",
      content: (
        <>
          <div className=" tw-grid  tw-gap-2 tw-grid-cols-1 md:tw-grid-cols-2">
            <div>
              <VideoPlayer src="https://swedenrelocators.se/videos/Business%20intro.mp4" />
            </div>

            <div>
              <VideoPlayer src="https://swedenrelocators.se/videos/Software%20Introduction%20Ny.mp4" />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Foreign Language",
      content: (
        <>
          <div className=" tw-grid  tw-gap-2 tw-grid-cols-1 md:tw-grid-cols-2">
            <div>
              <VideoPlayer src="https://swedenrelocators.se/videos/Family%20Discussion%20at%20the%20Table.mp4" />
            </div>

          
          </div>
        </>
      ),
    },
    {
      title: "Tutorial App-Portal",
      content: (
        <>


        <div className=" tw-flex tw-gap-8 tw-mb-4 tw-justify-center">
          <button onClick={()=>setLanguage('english')} className={` ${language==="english"?"tw-bg-blue tw-text-white ":"tw-bg-white tw-text-gray "} tw-px-5 border tw-py-2 tw-rounded-md`}>English</button>
          <button onClick={()=>setLanguage('arabic')} className={` ${language==="arabic"?"tw-bg-blue tw-text-white ":"tw-bg-white tw-text-gray "} tw-px-5 border tw-py-2 tw-rounded-md`}>Arabic </button>
          
        </div>

        {language==="english"?( <div className=" tw-grid  tw-gap-2 tw-grid-cols-1 md:tw-grid-cols-2">
            <div>
              <VideoPlayer src="https://swedenrelocators.se/videos/01-Download%20the%20App-%20English.mp4" />
            </div>

            <div>
              <VideoPlayer src="https://swedenrelocators.se/videos/02-How%20to%20signup-English.mp4" />
            </div>
            <div>
              <VideoPlayer src="https://swedenrelocators.se/videos/03-How%20to%20Log%20in-%20English.mp4" />
            </div>
            <div>
              <VideoPlayer src="https://swedenrelocators.se/videos/04-Appointment-English.mp4" />
            </div>
            <div>
              <VideoPlayer src="https://swedenrelocators.se/videos/05-Application%20status-English.mp4" />
            </div>
            <div>
              <VideoPlayer src="https://swedenrelocators.se/videos/06-Assessment-English.mp4" />
            </div>
            <div>
              <VideoPlayer src="https://swedenrelocators.se/videos/07-Business%20investment-English.mp4" />
            </div>
            <div>
              <VideoPlayer src="https://swedenrelocators.se/videos/08-Upload%20Doc-English.mp4" />
            </div>
           
          </div>):(
             <div className=" tw-grid  tw-gap-2 tw-grid-cols-1 md:tw-grid-cols-2">
             <div>
               <VideoPlayer src="https://swedenrelocators.se/videos/01-Download%20the%20App-%20AR.mp4" />
             </div>
 
             <div>
               <VideoPlayer src="https://swedenrelocators.se/videos/02-How%20to%20signup-AR.mp4" />
             </div>
             <div>
               <VideoPlayer src="https://swedenrelocators.se/videos/03-How%20to%20Log%20in-%20AR.mp4"/>
             </div>
             <div>
               <VideoPlayer src="https://swedenrelocators.se/videos/04-Appointment-AR.mp4" />
             </div>
             <div>
               <VideoPlayer src="https://swedenrelocators.se/videos/05-Application%20status-AR.mp4" />
             </div>
             <div>
               <VideoPlayer src="https://swedenrelocators.se/videos/06-Assessment-AR.mp4" />
             </div>
             <div>
               <VideoPlayer src="https://swedenrelocators.se/videos/07-Business%20investment-English.mp4" />
             </div>
             <div>
               <VideoPlayer src="https://swedenrelocators.se/videos/08-Upload%20Doc-AR.mp4" />
             </div>
             <div>
               <VideoPlayer src="https://swedenrelocators.se/videos/09-messages-AR.mp4" />
             </div>
           </div>
          )}
         
        </>
      ),
    },
  ];
  const defaultTab = "Introduction";

  return (
    <>
      <Header />
      <Banner_Page 
  highlightText={t("Gallery")} 
  regularText={t("Capture the Moments – Explore Our Stunning Gallery.")} 
  backgroundImage={homeBgImage} 
/>
      <section className=" tw-bg-[#F5FAFF] tw-rounded-2xl ">
        <div className="container-fluid tw-rounded-2xl  ">
          <div className="row g-5  tw-shadow-2xl">
            <div className="col-md-8  tw-rounded-2xl tw-shadow-2xl  tw-py-10 tw-bg-white">
              <div className=" tw-relative 2xl:tw-pl-[21.5%] md:tw-pl-[14.5%] tw-pl-3 tw-pr-[3.5%]">
                <Tabs tabs={tabData} defaultTab={defaultTab} />
              </div>

            </div>

            <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
              <div className="  md:tw-pr-[40%]  2xl:tw-pr-[50%] tw-pr-4">
                <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
                  {data?.map((item, index) => {
                    return (
                      <Link
                        to={`${item?.Link}`}
                        className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white"
                      >
                        <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                          {item?.title}
                        </p>
                        <GoTriangleRight className="tw-text-gray" />
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        className={" tw-w-full h-[90vh] bg-transparent"}
        isOpen={isModalSlider}
        onClose={closeSlider}
      >
        {/* Modal Content */}
        <div className="">
          <div className=" tw-mx-auto">
            <div className="tw-overflow-hidden tw-w-full  tw-h-[75vh] tw-relative">
              <div
                className="  tw-transition-transform tw-ease-out tw-duration-500 tw-h-screen	"
                style={{ transform: `tw-translateX(-${curr * 100}%)` }}
              >
                {allProduct?.map((image, i) => {
                  return (
                    <div className="tw-flex-none tw-w-full tw-h-full">
                      <img
                        src={image}
                        alt=""
                        className="tw-w-full  tw-cursor-pointer tw-h-full tw-object-contain"
                      />
                    </div>
                  );
                })}
              </div>

              <button
                onClick={prev}
                className=" tw-w-12 tw-h-16 tw-shadow  tw-absolute tw-left-0 tw-top-56 tw-flex  tw-justify-center tw-items-center tw-bg-white/80 tw-text-gray-800 hover:tw-bg-white"
              >
                <TfiAngleLeft size={20} className="" />
              </button>
              <button
                onClick={next}
                className=" tw-w-12 tw-h-16  tw-absolute tw-right-0 tw-top-56 tw-flex tw-justify-center tw-items-center tw-shadow tw-bg-white/80 tw-text-gray-800 hover:tw-bg-white"
              >
                <TfiAngleRight size={20} />
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className=" tw-p-4 tw-absolute -tw-top-4  tw-right-0 tw-flex tw-justify-between tw-items-center">
          <MdClose
            className="  tw-text-white"
            onClick={() => setIsModalSlider(false)}
            size={25}
          />
        </div>
      </Modal>

      <Footer />
    </>
  );
};

export default Gallery;
