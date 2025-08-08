import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const {t} = useTranslation();


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
          title: "Relocate to Sweden",
          description:
            "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
          icons: (
            <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>
          ),
    
          Link: "/personnumer-sweden",
        },
        {
          id: 4,
          title: "Relocate to Denmark",
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
          title: "Marriage & Divorce",
          description:
            "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ",
          icons: (
            <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>
          ),
          Link: "/marriage-divorce",
        },
        {
          id: 13,
          title: "Company Registration",
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
          title: "Citizenship",
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
          title: "Golden Visa",
          description:
            "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
          icons: (
            <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
          ),
          Link: "/golden-visa-greece-portugal",
        },
        {
          id: 21,
          title: "Logistics",
          description:
            "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
          icons: (
            <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
          ),
          Link: "/logistics",
        },

        
      ];
  const [isSticky, setIsSticky] = useState(false);
  const [topOffset, setTopOffset] = useState("30%");

  useEffect(() => {
    const updateTopOffset = () => {
      if (window.innerWidth < 1700 && window.innerWidth > 1600) {
        setTopOffset("-105%");
      } else if (window.innerWidth < 1600 && window.innerWidth > 1400) {
        setTopOffset("-105%");
      } else if (window.innerWidth > 1800) {
        setTopOffset("-40%");
      } else if (window.innerWidth < 1400 && window.innerWidth > 1000) {
        setTopOffset("-160%");
      } else if (window.innerWidth < 900) {
        setTopOffset("-350%");
      } else {
        setTopOffset("-105%");
      }
    };
    updateTopOffset();

    window.addEventListener("resize", updateTopOffset);

    const handleScroll = () => {
      setIsSticky(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateTopOffset);
    };
  }, []);

  return (
    <div
      className="col-md-4 tw-pt-16 tw-bg-[#F5FAFF]"
      style={{ position: "relative" }}
    >
      <div
        className={`md:tw-pr-[40%] 2xl:tw-pr-[50%] tw-pr-4`}
        style={{
          position: isSticky ? "sticky" : "static", // Apply sticky only if isSticky is true
          top: isSticky ? topOffset : "auto", 
          paddingBottom: '20px'// Only apply top offset when sticky
        }}
      >
        <ul className="tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
          {data?.map((item, index) => {
            return (
              <Link
                key={index}
                to={`${item?.Link}`}
                className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white"
              >
                <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                  {t(item?.title)}
                </p>
                <GoTriangleRight className="tw-text-gray" />
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
