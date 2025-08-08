import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// Import blog images from assets/blogs directory
import blog1 from '../../assets/blogs/1.png';
import blog2 from '../../assets/blogs/2.png';
import blog3 from '../../assets/blogs/3.png';
import blog4 from '../../assets/blogs/4.png';
import blog5 from '../../assets/blogs/5.png';
import blog6 from '../../assets/blogs/6.png';
import blog7 from '../../assets/blogs/7.png';
import blog8 from '../../assets/blogs/8.jpg';
import blog9 from '../../assets/blogs/9.jpg';
import blog10 from '../../assets/blogs/10.png';
import blog11 from '../../assets/blogs/11.jpg';
import blog12 from '../../assets/blogs/12.jpg';
import blog13 from '../../assets/blogs/13.jpg';
import blog14 from '../../assets/blogs/14.jpg';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner_Page from '../../components/Common/Banner_Page';
import { LiaAngleRightSolid } from 'react-icons/lia';
import profile from '../../assets/images/profile.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { GoTriangleRight } from 'react-icons/go';
import Sidebar from "../../components/ScrollableBar";
import homeBgImage from "../../assets/images/bg-image/col-bgimage-1.png";
import Header from '../../components/Header_New/Header';
import { useTranslation } from 'react-i18next';

const BlogDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  // Handle slug-based URL - treat the slug as blog ID 1
  const blogId = id === "5-things-to-keep-in-mind-if-you-are-relocating-to-sweden" ? "1" : 
                 id === "a-guide-about-student-fee-and-admissions-in-sweden" ? "3" :
                 id === "how-to-build-a-successful-start-up-in-sweden" ? "4" :
                 id === "work-permit-in-sweden-complete-guide" ? "5" :
                 id === "why-you-should-plan-moving-out-of-sweden" ? "6" :
                 id === "immigrating-to-sweden-what-you-need-to-know" ? "7" :
                 id === "business-challenges-for-expatriates-in-sweden" ? "8" :
                 id === "why-you-shouldnt-be-afraid-of-visiting-sweden" ? "9" :
                 id === "6-best-small-business-ideas-in-sweden" ? "10" :
                 id === "5-common-problems-faced-by-immigrants-in-sweden" ? "11" :
                 id === "6-reasons-why-sweden-is-an-ideal-place-to-study" ? "12" :
                 id === "places-to-visit-in-sweden" ? "13" :
                 id === "swedish-visit-visa-requirements" ? "14" : id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to get the correct blog image based on blog ID
  const getBlogImage = (id) => {
    const imageMap = {
      "1": blog1,
      "2": blog2,
      "3": blog3,
      "4": blog4,
      "5": blog5,
      "6": blog6,
      "7": blog7,
      "8": blog8,
      "9": blog9,
      "10": blog10,
      "11": blog11,
      "12": blog12,
      "13": blog13,
      "14": blog14
    };
    return imageMap[id] || blog1; // fallback to blog1 if ID not found
  };

  const titleMap = {
    "1": "5 Things To Keep In Mind If You Are Relocating To Sweden",
    "3": "A Guide About Student Fee And Admissions In Sweden",
    "4": "How To Build A Successful Start-Up In Sweden",
    "5": "Work Permit In Sweden - Complete Guide",
    "6": "Why You Should Plan Moving Out Of Sweden",
    "7": "Immigrating To Sweden - What You Need To Know",
    "8": "Business Challenges For Expatriates In Sweden",
    "9": "Why You Shouldn't Be Afraid Of Visiting Sweden",
    "10": "6 Best Small Business Ideas In Sweden",
    "11": "5 Common Problems Faced By Immigrants In Sweden",
    "12": "6 Reasons Why Sweden Is An Ideal Place To Study",
    "13": "Places To Visit In Sweden",
    "14": "Swedish Visit Visa Requirements"
  };

  return (
    <>
      <Header />

      <Banner_Page
        highlightText={t('Blogs')}
        regularText={t(titleMap[blogId] || "5 Swedish Foods You Must Try")}
        backgroundImage={homeBgImage}
      />
      <section className="">
        <div className="container-fluid ">
          <div className="row g-5">
            <div className="col-md-8    tw-py-10 tw-bg-white">
              <div className="row tw-pt-6   md:tw-pl-32 tw-pl-3 ">
                <div className="col-lg-12">
                  {/* featured-imagebox-post */}
                  <div className=" tw-shadow-lg">
                    <div className=" tw-relative">
                      <img className="img-fluid tw-mx-auto" src={getBlogImage(blogId)} alt={t("image")} />
                      <div className="    tw-bg-blue tw-w-20   tw-flex tw-justify-center tw-items-center tw-h-20 tw-rounded-md tw-absolute tw-top-0 tw-right-0">
                        <div>
                          <strong className=" tw-text-white tw-m-0 tw-uppercase tw-text-2xl">06</strong>
                          <p className=" tw-text-white  tw-m-0">JUL</p>
                        </div>
                      </div>
                    </div>
                    <div className=" tw-p-4">
                      {blogId === "1" ? (
                        <>
                          <p className=" tw-text-gray">
                            {t("Starting a new life overseas can be a mix of different feelings. If you are planning to visit Sweden or relocating to Sweden, then you should do a lot of research beforehand to adjust to this place easily. There are a few societal norms that are purely Swedish and Swedes are much concerned about them. One of the biggest differences you might see is that you have to keep your plastic bags with you, you have to take off your shoes while entering someone's house, you have to squeeze out a lot of food items from tubes like toothpaste and much more.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Cultural and societal differences can lead to some problems for newbies in Sweden, but knowing these basic ones can help you to easily go through the process:")}
                          </p>
                          
                          <p className=" tw-text-gray  tw-font-semibold">{t("Swedes love their coffee and food")}</p>
                          <p className=" tw-text-gray">
                            {t("Swedes love their unique food items and coffee. They have a unique tradition knows as fika to foster the coffee drinking where friends and family members are invited to drink coffee or tea along with some sweet dishes on the table. Most Swedes will enjoy one fika a day as they like it as an opportunity to bond with others.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("There are so many traditional and unique dishes to tantalise your taste buds. Besides their world-famous IKEA meatballs, they have raggmunk, gravad latex, köttbullar, kanellbullar, Lussekatter, pepparkakor, chokladbollar, and much more.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Get your personnummer")}</p>
                          <p className=" tw-text-gray">
                            {t("It is the national identification number between ten to twelve digits and is widely used to identify individuals in Sweden. This ten or twelve-digit number is a way of unlocking the life in Sweden. You need this number for almost everything like getting help from jobcentre, getting the phone contract, applying for healthcare or unemployment benefits, and even getting loyalty or discount card from your favorite brands.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Getting a job offer before moving to Sweden is the best way to get the personnumer automatically and you will be entitled to all the benefits. Except for this, you will have to prove that you are working or studying in Sweden and have enough savings to support yourself for a while in order to get the personnumer.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Be informal with names")}</p>
                          <p className=" tw-text-gray">
                            {t("Swedish aren't that much formal with the names or titles as others. They will call you by your first name be it your university or college professor, your doctor, your advisor or anyone, and they will expect the same from you during the conversation. That's the basic standard in Sweden and regardless of the job title or position in the firm, people call each other by their first name. However, there are some exceptions to this rule as well. If you will be in a courtroom, or in front of any political figure, or meet someone from the Swedish royal family, then you have to be pretty careful about the titles.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("It can be quite lonely")}</p>
                          <p className=" tw-text-gray">
                            {t("Sweden can be the toughest place to make friends and Stockholm is rated badly in terms of friendliness. But there are other ways to make friends. Swedes know that it can be difficult to meet people so they have clubs and sports teams to join where you can meet new people and can make good terms with them. You have to find the relevant club according to your interests and can meet a lot of people there.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Traditions galore")}</p>
                          <p className=" tw-text-gray">
                            {t("Every country has its unique traditions and festivities that set them apart from others and so does Sweden. Swedes celebrate Christmas, Midsommer, Santa Lucia (13 December), Kräftskiva (8 August), Valborg (30 April). These traditions have their own unique colors and provide a great opportunity to learn and enjoy the Swedish traditions.")}
                          </p>
                        </>
                      ) : blogId === "3" ? (
                        <>
                          <p className=" tw-text-gray">
                            {t("How expensive it can be to study in Sweden? If you are looking for the answer to this question, then you have to go through the whole blog to get the details on every aspect you need to know about.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("It has been unanimously reported by many surveys that Swedish universities have one of the most supportive and top-notch higher education centers of excellence. Higher education in Sweden is among the best in the world. The Nordic country is well-known for its excellent education system that focuses more on individual and group studies rather than just delivering lectures. Freedom to learn and the sense of responsibility are the key factors for the development of a student. The number of international students who are enrolled in Swedish universities and colleges is increasing day by day. If you want to be one of those, then you first know about the cost of study and admission procedures as well as the cost of living in Sweden.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Application fees in Sweden")}</p>
                          <p className=" tw-text-gray">
                            {t("Students who want to apply in any program in Swedish colleges and universities are required to pay an application fee. The application fee and tuition fee are applicable for the students who are not a citizen of Switzerland, EU, EEA, or Nordic country and are planning to study at Bachelors or Masters level in Swede. This fee usually costs around 900 SEK and is paid online while applying for the admissions.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("The tuition fee varies widely among different universities in Sweden and even among different programs of the same university. The tuition fee usually costs somewhere between 75,000-250,000 SEK per year. However, business and architect programs are the most expensive programs in Sweden.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("You need to pay the application fee while applying for admission and is usually non-refundable non-transferable. Students have to pay the tuition fee as soon as their application is accepted by the university or the college and they have made the offer. The application of your residence permit will not be processed by the Migration Agency if they don't receive the notification from the university about receiving the tuition fee.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Cost of Living")}</p>
                          <p className=" tw-text-gray">
                            {t("According to the findings of a survey, the average expense for a student in Sweden is around 8,370 SEK per month. This cost varies according to your location, your lifestyle, and your personal preferences. It can be around SEK 12,000 in Gothenburg and Stockholm and can be as low as SEK 7,500 in Lund.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("The best option to start looking for accommodation will be your university or the college. You may get the related information there or the management may refer you to the organizations that deal with student halls or dormitories. Dormitories are the best option for the students to live in as they will meet lots of local and international students there and the prices are low (2,500-5000 SEK per month). Besides this, you can also look for sharing an apartment with other students.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Food costs are also high in Sweden and you should expect to pay around SEK 2,000 per month for the food. This too depends upon your eating habits. You can save your money by buying groceries from a cheap supermarket and cook the food by yourself.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Besides this, you will have to pay for transport if you are living far away from your university or college. Students will have to purchase the related textbooks and they should plan the budget accordingly.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("No doubt, Sweden is a beautiful place full of natural beauty and is ranked among one of the top countries to provide high-quality education to the students. The costs are according to the standards and also depends upon your preferences and lifestyle. Students have to plan the budget and should estimate the lump sum cost of the study before applying to any country.")}
                          </p>
                        </>
                      ) : blogId === "4" ? (
                        <>
                          <p className=" tw-text-gray">
                            {t("Sweden is known as the land of start-ups because the economic conditions of the country are detrimental to entrepreneurship. Swedish business culture is open and innovative, and starting a business there is relatively simple. Thus, Sweden excels in promoting the formation of ambitious start-ups on an unexpected level. After Silicon Valley, Stockholm is known for producing the second-highest revenues from tech companies per capita.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Being the tech and innovation hub, there is a high survival rate for start-ups in Sweden with relatively fast growth. However, you can face some difficulties in understanding the business culture and the procedures for operating a business in Sweden. Following are some useful tips to build a successful start-up in Sweden:")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Have a strong and clear vision")}</p>
                          <p className=" tw-text-gray">
                            {t("The first step, of course, is to have a clear vision that what you want to do and how will you do it. Entrepreneurs spent weeks, months, or even years on brainstorming and polishing the idea they want to invest in. Your vision should be crystal clear and you should do the homework before digging into the market.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Search for a suitable and innovative business idea and it shouldn't be ground-breaking in all aspects. You can work on improving something and come up with a better version of already existing service or product. Swedes are more attracted to innovation and so does their business market. Your vision and core values should be grounded in the business idea.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Benefit from business culture")}</p>
                          <p className=" tw-text-gray">
                            {t("Compared with many other cultures, the Swedish business culture is more relaxed and casual. There isn't too much bureaucracy and the country is quite free from corruption. You will be inspired much by working in this much relaxed and informal culture. You will learn a lot will build many fruitful business relationships. These cultural reforms can be beneficial for you as an entrepreneur in Sweden.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Besides this, the Swedish government has made it a lot easier for people to borrow money from public or private lenders. Swedish are informal about names and being an expat, you should do the same. In short, the business culture, here in Sweden, is much favourable for new business opportunities.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Swedish consensus culture")}</p>
                          <p className=" tw-text-gray">
                            {t("Swedish organizations are flat in structure and the employees are highly satisfied. Swedes learn to collaborate with others from an early age and they like to work in teams. Teams in Swedish business culture are a bit agile and work autonomously. If you are new to Sweden, then this might feel a bit confusing and irritating. You might feel like we talk a lot and don't make any decision but it actually is a part of Swedish consensus culture. Swedes like decisions to be based on wide agreements or collective opinions.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Sweden is among the high-ranking gender-equal countries in the world. You should hire a legal assistant to handle your legal affairs.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Be passionate")}</p>
                          <p className=" tw-text-gray">
                            {t("Stockholm is a very cliquey place and starting a business here can be both difficult and easy. It is advisable that you should do the proper research before taking any big step and stay passionate about your aim. Being an entrepreneur, you should equip yourself with passion, good-will, and ambitions. Don't lose hope if you come across any hurdles in the process and keep ongoing.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Building a successful start-up is not a cup of tea no matter what the culture and business ethics are. However, it is relatively easy to start a business in Sweden due to the economic conditions and innovative culture of the country. By following the above-mentioned simple yet useful steps, the chances for probable success can increase for entrepreneurs.")}
                          </p>
                        </>
                      ) : blogId === "5" ? (
                        <>
                          <p className=" tw-text-gray">
                            {t("Are you planning to move to Sweden for work? Everyone wants to look for better opportunities to earn a standard living for themselves and their families. As Sweden is known for its strong and growing economy, people are attracted to migrate to Sweden to find better jobs.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("If you are moving from the EU, then you are entitled to work in Sweden without a permit and your family can join you as long as you have the right to of residence in Sweden. Citizens of countries outside the EU need to apply for a work permit if they want to migrate to Sweden to look for jobs. You have to follow a step by step to get a Swedish work permit and we are here to guide you thoroughly in this regard.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Apply for a work permit")}</p>
                          <p className=" tw-text-gray">
                            {t("First thing first, you need to apply for a work permit and should know the basic rules and regulations. Citizens of Australia, Chile, Argentina, South Korea, New Zealand, and Hong Kong can apply for a holiday working visa for one year. For employment that is for less than three months, citizens of certain countries should have both a valid visa and a work permit. It is to be noted that employees of some specific domains might be exempt from the regulations of work permit.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Requirements for permit")}</p>
                          <p className=" tw-text-gray">
                            {t("To obtain the work permit for Sweden, you should have an employment offer from any Swedish employer. While applying online, you will be given instructions about how to fill the application form and the required documents you should send along with the application form.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("You must have an official job letter from a Swedish employer and the job must:")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Be advertised in the EU/EEA newspaper for at least ten days Have terms that comply with those set by the Swedish collective agreement Pay a minimum salary or wage rate of SEK 13,000 before tax Besides this, you must have a valid passport in your home country or the country you are currently residing in.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("The application processes")}</p>
                          <p className=" tw-text-gray">
                            {t("You must apply for the work permit long before your date of joining as you must have a work permit for getting the visa. In some exceptional cases, you can apply for a work permit from Sweden if you are already in the country. You will need these documents for sending the application form which are:")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Letter of employment approved by the relevant trade union Complete and rightly filled application form Copies of the passport showing the personal data and validity date The proof of permission of living in other countries by your home country's government (usually available on the passport) The application fees Compile these documents and submit the application online or by hand in your closest Swedish embassy. The migration agency, will then, consider your application and will check the details. The provided details of the person are checked for authenticity and then they will give you an estimated waiting time.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("The process of applying for a work permit for Sweden seems quite simple and is transparent. The applicant will be informed by the migration agency about the application status from time to time or you can check the details online. Besides this, you will also need to apply for the extension of your work permit time to time after the expiry of the current permit and the process is quite similar to this one. If you apply for the extension well before the expiry date of your work permit, then you will be allowed to keep on working in the country till the decision.")}
                          </p>
                        </>
                      ) : blogId === "6" ? (
                        <>
                          <p className=" tw-text-gray">
                            {t("Relocation is a lofty decision to make on part of an individual more or so, and on a family too. Relocation brings about the obvious challenges that a human might face in a foreign land. At times even relocating to a city might seem a gigantic change than changing your country code too. If all fails and despite all efforts, you have trouble accommodating yourself and your family, you might need to plan a relocation. And here is why you should plan moving out of Sweden in unpropitious times.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Unfriendly Environment")}</p>
                          <p className=" tw-text-gray">
                            {t("Have you made friends yet? The statistics say you haven't. Many local surveys point out this disturbing lack of friendliness on the locals' part. Despite high standards of living in Sweden expats fail to feel at home in this Scandinavian country. Home to many luxuries and beautiful coastal cities in the country, however, fails to make foreigners feel at home. With the people distant and seemingly unfriendly, they give a cold shoulder to immigrants.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("\"I made two mistakes going to Stockholm, I went alone and I went in November\"")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Says a student who traveled there. No man is an island and certainly in this country of islands, one must have a hard time surviving alone.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Dark Dreary Winters")}</p>
                          <p className=" tw-text-gray">
                            {t("Winters, well a short cool winter season who doesn't appreciate that. But when it gets too long it gets hard to bear by the day. The sunsets at 3 pm. An extraordinarily short day! How many of us have found ourselves longing for the sun in the mild winters back home? But in Sweden, you must survive the winters and do so without the sun peeking at you from time to time for respite. The grey colored skies and too short days do not help and it makes the atmosphere gloom stricken, deprived of energy for even daily chores.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Taxes Take a Toll on You!")}</p>
                          <p className=" tw-text-gray">
                            {t("Even if one manages to secure a high paying job, that taxation demands that you give much of your hard-earned money to the government. Sweden is one of the richest countries as per GDP production but most of it goes as taxes. Proud owner of many International businesses Sweden sure sounds attractive but the home of the luxurious\" Volvo cars\" takes a toll on your income.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("To Rent or To Buy?")}</p>
                          <p className=" tw-text-gray">
                            {t("Moved to Sweden? Bet you had a hard time finding a place to live. This explains the reputation of simple furniture and minimal decorative sense. Rents in Sweden are sky-high, gobbling up to 30 % of one's salary. It might even be a luxury to afford a decent place on rent. The policy of short rental contracts will have you moving from one place to another before you find a permanent residence. People need to wait for years before they can afford decent housing. If you want to spend your hard-earned money on improving your lifestyle you might consider a relocation so you may afford a decent residence and focus on bigger things in life.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Satisfied with Your Work?")}</p>
                          <p className=" tw-text-gray">
                            {t("The first barrier you might have faced in Sweden is the language. And even after you have mastered the Swedish language it is only self-explanatory that the corporations prefer Swedish people who have a better grasp on Swedish ways of working and most importantly are native speakers of the language. Most of the foreigners in Sweden are forced to work at restaurants and bars. The education saturation demands extraordinary skills from a foreigner for him to be able to replace the natives at high-quality jobs.")}
                          </p>
                        </>
                      ) : blogId === "7" ? (
                        <>
                          <p className=" tw-text-gray">
                            {t("Relocating or immigrating is a life-changing process. You need adaptations you find yourself being molded in certain ways. Sweden is a Scandinavian nation. A land home to many beautiful natural scenes, coastal cities and beautifully changing seasons. Visiting Sweden is for sure a great trip but immigrating to Sweden demands that you prepare and brace yourself for a practical journey. Here is what you need to know.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("For visiting Sweden, you do require a visa if you are not part of the European Union. Visit freely if you are. However, you need to find a permanent abode and spend five years to gain Swedish citizenship.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Where to live")}</p>
                          <p className=" tw-text-gray">
                            {t("Most people in Sweden resort to finding a permanent residence than renting a house. Permanent residence may seem like a time-consuming thing, but in the long run, it benefits you. Higher than usual rents and unreliable contracts take a toll on your pocket. If you are planning to stay for a longer duration you are advised to find a permanent abode. Students may find room in Universities. It is however advised that you gather information and experiences of expatriates living here and try to find a most suitable home.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Where to work")}</p>
                          <p className=" tw-text-gray">
                            {t("Sweden offers an expansive and wealthy job market. Though if you are a non-European Union citizen you will need a work permit. Salaries are high and they usually do the job of paying for the basic facilities. But as some immigrants would share their experience of tough times finding work, and complain that expats are never prioritized for primary jobs. As a youngster, you may want to start by doing an internship to make you accustomed to the Swedish way of working and help you excel in practical fields")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Are you a student?")}</p>
                          <p className=" tw-text-gray">
                            {t("So, have you decided to come to Sweden for studies or you have had to migrate because of your father's job? Fortunately, you can study using English as the medium. So, you don't have to worry about the tedious task of learning the language. Swedish universities are free for students from EU citizens. But if you come from outside the European Union you may face difficulties.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Brace yourself for a new winter experience")}</p>
                          <p className=" tw-text-gray">
                            {t("Winters in this near arctic country are unfortunately not so pleasant. The winter days are so short that gloom sets in and you find yourself longing for the sun. Winters are rather dreary and dismal. But on the brighter aspect, they are beautiful with the snow-covered lands and picturesque beauty. The days of gloom are not long they melt into a beautiful spring Season. So, buy yourself warm clothes before you step into the country.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Swedish culture")}</p>
                          <p className=" tw-text-gray">
                            {t("Swedish people may not seem very friendly at first. They are not as socially outgoing as you might hope. But once they get to know you, they are soft-spoken and polite people. So, you may have a hard time making friends when you are new in Sweden. But once you master the language and accent, of course, you will be easily incorporated into the Swedish way of life.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Also, get used to a lot of Swedish meatballs and remember Swedes love their coffee, perhaps an effect of the ice-cold winters!")}
                          </p>
                        </>
                      ) : blogId === "8" ? (
                        <>
                          <p className=" tw-text-gray">
                            {t("Expatriates in Sweden sure have to work hard to be one of the Swedes and starting a business is one of the challenges they may have to face. Competing with natives who have a grip on the Swedish way of life and are fluent in the language are sure to be in the lead when it comes to owning and running a business. They have contacts, and thus information about the legalities and the dangers of certain steps you might want to take when you start a business.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("High Taxes!")}</p>
                          <p className=" tw-text-gray">
                            {t("Sweden sure is notorious for high tax rates. Although the Swedish government has reduced tax rates and taken measures such as allowing leaves to youngsters who want to practice entrepreneurship. But tax rates nonetheless remain high in this welfare state. An expatriate who has a little knowledge about taxing formalities and is not well versed in the Swedish way of work may face sudden failure owing to these complications. As a No European Union citizen, you need to register with the tax agencies and go through a lot of formalities before you set up. Businesses may become difficult for outsiders in such scenarios.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Legal formalities")}</p>
                          <p className=" tw-text-gray">
                            {t("Hire staff in Sweden but do it legally! For the laborer rights in Sweden make it compulsory for the employer to provide the laborers according to the law. Fortunately, if you are from the EU you can easily establish a business. But if an outsider you need a work permit and residence permit to stay and work in Sweden. Although it is not essential to register your business it secures the name of your business. Working your way through lawyers and contracts is not an easy task. And doing so in a foreign country, you are in for a hard day!")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Lack of working Capital")}</p>
                          <p className=" tw-text-gray">
                            {t("Finding sufficient capital in Sweden may be a fantasy. Owing to high tax rates and tax paid health and education having sufficient capital and stored money is often not feasible for an aspiring businessman. Starting a business as a sole trader, you should expect tough times ahead and brace yourself for some time of non-profit business. In a trading partnership, you may not need so much capital but responsibility for all debts land on you and your partner. A common mistake made is financing your business at the cost of your household finances. Not being able to pay bills and afford basic needs leads to obvious failure in both cases. Getting a loan may sound a great idea. But again, for a foreigner no loans without sufficient security. Of course, it is a long-term procedure to be able to own enough you can mortgage against some loan.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Problem in leads generation")}</p>
                          <p className=" tw-text-gray">
                            {t("If you are planning a business in Sweden, leads generation holds immense importance. Generating lead can be tough for a new businessman and more so for an expatriate working in Sweden. Not knowing the language, not being able to assess the Swedish mindset counts. For the Swedish work on trimmed lines and venturing for new ideas may be a little unorthodox for some. Not all foreigners are popular with the natives. And building the trust and companionship it takes for a successful business Venture takes you through narrow alleys.")}
                          </p>
                        </>
                      ) : blogId === "9" ? (
                        <>
                          <p className=" tw-text-gray">
                            {t("Visiting Sweden may not be the hot pick for a holiday as compared to the other Western countries but it is the country where you can deal with lesser crowd and take your time to see all the beautiful landmarks. Afterall a holiday is all about giving yourself more relaxation. Swedes are known for their friendliness and tolerance. The country is considered to be one of the happiest and the safest amongst the other European countries, with less crime. If you have always been in awe of the Northern Lights, then the plan to visit Sweden has to be on your to-do list. This Scandinavian country has much more than this to offer and it becomes really hard for us to narrow down the list of reasons to visit Sweden. Anyhow, we are giving it a try and we hope knowing about these top 6 reasons will worth your time.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Experience the Hospitality")}</p>
                          <p className=" tw-text-gray">
                            {t("What we have concluded so far from online surveys is that Sweden has got one of the most tolerant and friendliest locals across the globe. In the past, there might have been rumors about their bad reputation in treating foreigners but now Swedes are on the way of becoming a prosperous nation. They take pride in serving the visitors and impress them by their hospitality. Bygone are the days when they were considered rude and introvert. According to a report by The Telegraph, they are now on 14th rank all over the world in Tolerance Index. Woah! That is such a moment of relief for all of us who were suspicious and couldn't add Sweden in our bucket list.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Since Winter is Coming So Why Not the Sports")}</p>
                          <p className=" tw-text-gray">
                            {t("Sweden has got all the colours. No matter whether you are a summer lover or a sucker for winter it has so much to offer. We can say that Sweden can be considered as a heaven for all the winter hustle especially the sports. From alpine skiing to snowboarding you can enjoy a wide range of outdoor activities, full of thrill and fun.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("A Blend of Urban Bustle and Country Side Panorama")}</p>
                          <p className=" tw-text-gray">
                            {t("Apart from historic buildings and churches, Swedish cities have got all the essentials of what we call an urban life hustle and bustle. From the capital city of Stockholm to the 5th largest Nordic city Gothenburg there are amusement parks all across the country. Liseberg, Grona Lund, and many other parks are attracting thousands of local and international visitors each year. And this is one side of the story, like other Scandinavian countries Sweden is blessed with wide landscapes, mesmerizing national parks and a spectacular panorama of green lush fields.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Roam freely and feel the Swedish Vibes")}</p>
                          <p className=" tw-text-gray">
                            {t("Here we will advise you to give a shut-up call to all those who keep on labeling Sweden as a dangerous and not-so-easy going country for visitors. Believe me, it is an incredible place where you can roam freely from one corner of the country to another. You may need to beware of pickpockets but that is quite an obvious thing to take care of. Right? We all do that even at the airport checkouts that are considered safest of all. If you are an avid traveler, you can easily manage this and it won't trouble you much.")}
                          </p>
                        </>
                      ) : blogId === "10" ? (
                        <>
                          <p className=" tw-text-gray">
                            {t("Would you like to start a profitable business as a foreigner in Sweden? If so, here are six of Sweden's best small business ideas & investment opportunities that will generate you a handsome amount.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Home Rental Business")}</p>
                          <p className=" tw-text-gray">
                            {t("There is always a space of Home-Property rental business in Sweden.A rental property business is a venture through which an investor will purchase and manage one or more income-producing properties. These properties can have one or more units that are leased out to tenants in exchange for monthly rental fees. Investors can have an effective rental plan without having to directly manage these properties; property management companies can be hired to carry out the duties often associated with landlords, such as rent collection and maintenance.It could be the idea if you are going to start a business with a partner or if you can invest in property or house by yourself and later rent-out as secure regular income. Subletting through AirBnb is quite profitable in big cities as well.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Start Boat Rental Business")}</p>
                          <p className=" tw-text-gray">
                            {t("Ironically, with a few small boats, you can start this business. With the building of the Göta Canal in the 19th century, Sweden's vast waterway connectivity throughout the south was utilized, shortening the possible gap between the Baltic Sea south of Norrköping and Göteborg by using the lake and river network to facilitate the canal. This shows that a boat rental service in Sweden is expected to be successful.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Sweater and Cardigan Knitting Business")}</p>
                          <p className=" tw-text-gray">
                            {t("Given its northern latitude, most of Sweden has a temperate climate with four distinct seasons and mild temperatures throughout the year.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("With the exception of the mountains, the country as a whole has a July average temperature between 15 ° C (59 ° F) and 17.5 ° C (63.5 ° F) (2.5 degrees Celsius difference), whereas the average January temperatures range from freezing point to below −15 ° C (5 ° F) along the Finnish border (15 degrees Celsius difference).")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("A sweater and cardigan knitting company is an ideal start-up business in Sweden with this kind of freezing weather. An entrepreneur who wants to start a sweater and cardigan knitting company can start their own label on a small scale from home and serve a niche market such as schools and neighborhood families.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Start a Sawmill Cottage Business")}</p>
                          <p className=" tw-text-gray">
                            {t("Sawmill cottage business is yet another small-scale, highly thriving business in Sweden and prospects for newbies to enter the industry. This company is perfect in Sweden as it is distinguished by a large wealth of trees and shrubs in some regions of the country. The beech is the most dominant tree, but also smaller forests may form oak.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Hornbeam, oak, spindle, yew, alder buckthorn, blackthorn, aspen, European rowan, Swedish whitebeam, juniper, European holly, ivy, dogwood, goat willow, larch, bird cherry, wild cherry, maple, ash, alder along creeks, and in sandy soil, birch compete with pine.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Open a Language School")}</p>
                          <p className=" tw-text-gray">
                            {t("Opening a language school that teaches foreign languages, sign language, and second language English is an effective small-scale language that can start in Sweden.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("While Sweden's official language is Swedish, but in varying degrees, depending largely on the level of contact with English, most Swedes, particularly those born after the Second World War, understand and speak English because of trade links, the popularity of overseas travel, the strong Anglo-American presence and the practice of subtitling rather than dubbing foreign television shows and films, and the relative similarities between the two languages, making it easier to learn English. Eighty-nine percent of Swedes reported the ability to speak English in a 2005 Eurobarometer survey.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Start Concierge Medical Practice Business")}</p>
                          <p className=" tw-text-gray">
                            {t("A person seeking care, first visits a doctor's appointment clinic and may then be referred by the clinic doctor to a physician who, in turn, may prescribe either in-patient or out-patient treatment or an alternative for elective care. Healthcare is regulated by Sweden's 21 landsting and is funded primarily by premiums, with patient nominal fees.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("It shows that a medical concierge company in Sweden is expected to succeed. Concierge medical practice is a medical business that gives space to a unique relationship between a patient and a physician in which the patient pays an annual fee or what is known as retainer-ship can be called retainer medicine as well.")}
                          </p>
                        </>
                      ) : blogId === "11" ? (
                        <>
                          <p className=" tw-text-gray">
                            {t("Sweden is undoubtedly a fascinating country that is enriched in natural beauty, culture, cool climate, and a fine economy, that attracts immigrants from all across the globe. Some migrate to Sweden for studies, some plan their visit to Sweden for business, others are interested in having a work permit to seek jobs and many come on an EU family visa for paying a visit to this paradise on Earth. As interesting as it seems, this country is enriched in employment, tourism and studies but we should also keep an eye on the hindrance that can be caused while migrating to the country for any of these causes. Some of the common barriers to immigration in the country include")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Education Employment Climate VISA and residence Expenses")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Education")}</p>
                          <p className=" tw-text-gray">
                            {t("You may think that English would be widely used as a means of communication in the country from the fact that it is a developed country. It is essentially not the case in Sweden. You will have to face many barriers to effective communication. As a student, you may find it difficult to make friends because of the cross-cultural barriers. Students from all across the globe migrate to the country for education including a large number of students from Africa.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Employment")}</p>
                          <p className=" tw-text-gray">
                            {t("The country has developed over the decades and offers great employment opportunities to the residents. This statement is true, but its only one side of the canvass. Sweden offers job opportunities to its nationals so that they may secure their employment career. On the other hand, more than 37% of immigrants fail to find proper employment in Sweden. Those immigrants who are employed are compelled to work at a relatively low salary which ultimately causes an increase in the GDP of the country and a point to ponder for the immigrants.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Climate")}</p>
                          <p className=" tw-text-gray">
                            {t("A cool climate, snowfall, and captivating sceneries catch the attention of the migrants, but it is not as captivating in the real world. Sweden has comparatively long winters with less sunlight penetrating into the country. For the immigrants who have other problems including residence, work opportunities and language problems, cold and long winters can have adverse effects. Winters last for the most part of the year making it difficult for immigrants who come from countries like Africa, Nigeria, and others.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Visa and Residence")}</p>
                          <p className=" tw-text-gray">
                            {t("Sweden is deporting many of the immigrants in the country because of the population saturation. You should be well aware that getting an EU visa is not a difficult task, but finding the accommodation certainly is. Immigrants face a drastic shortage of residence is the major cities such as Stockholm and they are left with no other options to either bear the cold or get a residence at elevated costs. So, if you are about to get your VISA approved for the country, make sure you would also have to face a residence issue along with others such as unemployment.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Expenses")}</p>
                          <p className=" tw-text-gray">
                            {t("You will find a considerable difference is the prices of products and services in Sweden as compared to your homeland. You may find the prices of food about two folds high in the country. If you are planning to stay in the country, you should prepare yourself for a high monthly budget. The only option to cope up with this situation is to plan effectively and distribute your budget accordingly, to minimize the extensive inflation in the country.")}
                          </p>
                        </>
                      ) : blogId === "12" ? (
                        <>
                          <p className=" tw-text-gray">
                            {t("If you are thinking about studying abroad, then visit Sweden. You probably want to know why Sweden is considered as a great destination. Let me notify you, Sweden has a fascinating history and culture, global businesses, delicious food, and welcoming people; and is also well known for its world-class academic opportunities that rank among the top 100 in the world.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Following are 6 reasons why Sweden is considered an ideal place to study:")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Vision Enhancement of One's Mind")}</p>
                          <p className=" tw-text-gray">
                            {t("Study in Sweden let you think independently and critically. It will enhance your ability to question the state of affairs by accessing information, seeking new perspectives and coming up with well-informed judgments. Because of the informal and non-hierarchical nature of Swedish society, you will be able to think creatively. Where everyone is urged to bestow their ideas and opinions. This independence of mind and letting everyone's voice heard are the reasons why Sweden ranks among the world's most innovative nations.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Rich Swedish History")}</p>
                          <p className=" tw-text-gray">
                            {t("Sweden has contributed a lot to the history books, and many museums allow free entrance on a daily basis or on specially marked days throughout the year.  Swedish History Museum, the largest museum in Sweden; where millions of visitors and students come to see Sweden's foremost gold and silver treasures, and incomparable medieval art.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Language Proficiency:")}</p>
                          <p className=" tw-text-gray">
                            {t("Using Swedish, a rich and beautiful native language; in 2017, Swedes ranked second in the world for skills in English as an official language. As the world is getting more independent and businesses seek to extend the national and linguistic boundaries, Sweden offers a marvelous location to learn and develop your English language skills. But knowing and trying to learn a little bit of Swedish language will make much easier to open your mind to your new cultural surroundings.  Also, Sweden is a car-free country with an extensive network of buses, trains, subways, trams, boats, planes, and many more that can take you anywhere you want to go.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Malmö, A Coastal City")}</p>
                          <p className=" tw-text-gray">
                            {t("Malmö is among the top cities in Sweden having a free business environment and also a good place to live with outrageous rankings in housing, healthcare, and environmental quality. The University of Malmo founded in 1998, attracts above 15,000 students every year. It's not only a global city but also a commercial hub in the South of Sweden, as part of the Öresund region. The city has attracted a wide variety of companies in the technology sector (for example bio, medical, environmental, information and communication), as well as digital media, transports, financial services, business, leisure, entertainment, and constructions. And, most importantly, the cost of an apartment in Malmo is in the 139th place of all 248 Teleport cities.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Studying and Working in Sweden")}</p>
                          <p className=" tw-text-gray">
                            {t("International students can comfortably get Sweden work permit. Unlike other countries, there's no legal limit to the number of hours international students can work during their studies. After the completion of studies, you can apply to extend your residence permit to look for work for up to six months. (But for that learning Swedish is necessary – it's often a job's requirement.)")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("EU Citizen's Right:")}</p>
                          <p className=" tw-text-gray">
                            {t("Unless you are a citizen of a neighboring Nordic country, every foreigner will need to contemplate the different types of Swedish visas. When applying for a Swedish visa, you are not allowed to be in the country. This largely related to non-EU/EEA citizens and citizens of Sweden; because citizens with EU/EEA family visa Sweden have the rights of residence in Sweden and therefore can shift to the country with or without a job. However, they will need to start the Swedish visa application process if they plan to continue their stay in a country for a long time.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("If you are thinking about relocation Sweden; want to study abroad and also interesting in traveling, then Swedes are waiting for you. They are very friendly and like traveling very much. They are habitually open to know about a new culture and also interested in hearing about international experiences.")}
                          </p>
                        </>
                      ) : blogId === "13" ? (
                        <>
                          <p className=" tw-text-gray">
                            {t("Sweden is known all over the world for many things: cars like Saab and Volvo, music group ABBA, pickled herring, and IKEA's DIY megastore. It is just as popular for its beautiful scenery, picturesque fishing villages, being the land of the reindeer and endless summer heat.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Sweden is lined with colorful wooden buildings, traditional huts, cathedral and stone fortresses, and some pretty innovative contemporary architecture.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Stockholm")}</p>
                          <p className=" tw-text-gray">
                            {t("Stockholm, a beautiful city on 14 islands, as the capital of Sweden and the largest city in Scandinavia, has a lot to do with it. The annual Nobel Prize is awarded in Stockholm, which was established in the 13th century. The Vasa Museum, dedicated to a warship of the 17th century that sunk on its maiden journey, is the most visited museum in Scandinavia. Stockholm is better for your budget than other Scandinavian towns, offering free access to 15 museums like Swedish Heritage, Medieval Museum, Royal Armoury, and Skokloster Castle.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("The Royal Palace, Modern Art Museum and City Hall should also not be missed.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Gotland")}</p>
                          <p className=" tw-text-gray">
                            {t("As the largest island in Sweden, completely surrounded by the Baltic Sea, you would think that fishing would be the main industry on the island. It's not that. Among the main sectors are forestry, tourism and information technology. The island is one of the most popular tourist destinations in Sweden. Sun seekers like it because during the year it has more sunshine than any other location in Sweden. Visby, the island's only port, is a beautiful walled Hanseatic city that has retained most of its historic buildings and townscape. There are about 100 medieval churches on the island as well as numerous prehistoric sites.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Gothenburg")}</p>
                          <p className=" tw-text-gray">
                            {t("Gothenburg, located on the western coast of Sweden, is a green city dotted with numerous parks of all sizes. Many of the parks date back to the 19th century, including Kungsparken, a park that surrounds the canal that surrounds the city center.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("If you're more interested in amusement parks, head to Liseberg, which has more rides than any other amusement park in Scandinavia. The largest port city in Scandinavia, Gothenburg is also home to the largest film festival in the region, as well as numerous music festivals throughout the year. Hungry, huh? Try a Haga Bulle, a large cinnamon roll in Haga, a district known for its picturesque wooden houses.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Swedish Lapland")}</p>
                          <p className=" tw-text-gray">
                            {t("If you're looking for a wilderness experience, there's no better place to visit than the Swedish Lapland in Sweden. Located well north above the Arctic Circle, where summer shines around the clock. Lapland is for canoes, climbers and wildlife viewers. The Swedish Lapland is inhabited by the hardy, native Sami. Who lives in vast forests and barren tundra.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("A good way to experience the area is to drive the 359-km (223-mile) long Wilderness Way from the canoeing center at Stromsund to the terminus at Vilhelmina, a church town, through Fatmomakke, where you can see traditional wooden huts. Winter tourists can purchase reindeer hides at Jokkmokk, the center of Sami's life.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Uppsala")}</p>
                          <p className=" tw-text-gray">
                            {t("Uppsala, situated 70 km (44 miles) north of Stockholm, has been the religious center of Sweden since the 12th century. Before Christianity, Uppsala was renowned for the temples of the Norse gods. The cathedral of Uppsala, the seat of the archbishop of Sweden, is the largest cathedral in Scandinavia. Education is also important here, with Uppsala University, which was founded in 1477, making it one of the oldest colleges in Scandinavia. The River Fyris flows through the area, with the medieval portion situated west of the river. Both the Cathedral and the Uppsala Castle dominate the skyline. The botanist of the eighteenth century Carl Linnaeus lived in Uppsala, so check out the botanical garden next to the castle.")}
                          </p>
                        </>
                      ) : blogId === "14" ? (
                        <>
                          <p className=" tw-text-gray">
                            {t("It's very tricky to get a visit visa for many countries. Each has its respective rules and regulations. In this particular blog, we will guide you on what the Swedish embassy would be looking for before granting you a visa!")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Have you visited any other country before?")}</p>
                          <p className=" tw-text-gray">
                            {t("This point is pretty basic but integral. The authorities at embassies would firstly want to make sure that you have the integrity to not overstay in another country or cause any other issue. Safety comes first after all.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("If you have visa approval stamps of let's say USA or UK already, then this leaves a very good impression. It makes you seem trustworthy.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Invitation is a plus")}</p>
                          <p className=" tw-text-gray">
                            {t("Secondly, for visit visas, you'll be required to show a formal invitation from the person in Sweden you intend to visit. Whether it be a family member or business associate, you will have to request them to write a bit about their selves and why they feel that your visa should get approved.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("A valid passport")}</p>
                          <p className=" tw-text-gray">
                            {t("The Swedish agency prefers that you have a passport that is valid for a minimum of 3 months after your visa has expired. This point is pretty understandable, to be honest. It's for your good. Imagine having your passport expired while still in Sweden. It can create many problems for you especially if you wish to visit another country straight from there.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("So, make sure that your passport is valid before applying for a visa. If it is not, get it renewed first.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Money for your keep and the journey home")}</p>
                          <p className=" tw-text-gray">
                            {t("This criterion is pretty understandable too and is a criterion for numerous countries. Without money, you'd be completely stuck in Sweden. Even if you have a family member there who can give you a roof to stay under and warm food and stuff, it still would be wise to have enough in your bank and travel bag. If not for shopping or tourism purposes, do keep some in case of emergencies. Many things can go wrong while you are in another country. Plus, it might not be easy getting a job there during your worst-case scenario stay there. So be careful!")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Individual medical travel insurance")}</p>
                          <p className=" tw-text-gray">
                            {t("Have asthma?  Heart issues? Diabetes? An injury? Well, it would be pretty inconvenient if you suddenly have serious health issues there, right?")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("Medical insurance helps cover the cost for emergencies like heart attacks or a car accident there perhaps. The insurance should cover costs of at least 30k Euro and should be valid in all Swedish countries. You would also have to submit the medical insurance documents while applying for them to keep in their records.")}
                          </p>

                          <p className=" tw-text-gray  tw-font-semibold">{t("Describe the purpose of your visit")}</p>
                          <p className=" tw-text-gray">
                            {t("This seems pretty basic but doesn't take it lightly. Write a detailed note of why you are applying, whose place will you be staying at, for how long do you wish to stay, why do you wish to go to Sweden from amongst all countries and so on. This is for them to be reassured that you won't overstay or try anything shady or fishy.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("It'll also be wise if you mention personal details of the person/family members you'll be staying at. They'll probably dig into their history anyway so it's better to write about it yourself.")}
                          </p>
                          <p className=" tw-text-gray">
                            {t("If you keep these points in mind, it wouldn't be likely that your visa application would be rejected. However, they aren't satisfied and do end up rejecting, you can read up on the appealing process and present your case to get an approval.")}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className=" tw-text-gray">
                            {t("Are you planning to visit Sweden in the near future? Sweden has scrumptious and unique dishes and recipes that you must try while you visit. Swedish food is more than just fish, coffee, or meatballs. With a diet rich in proteins, whole grains, and omega-3, Swedish food has been hailed for its amazing health benefits. Being a visitor or foreigner, it can be difficult for you to find the food items and places in Sweden as most of the people eat at home. The restaurant culture in Sweden is much more different than in other countries. If you want to try some traditional and finger-licking Swedish food, then you must look for these 5 delicious dishes from Sweden:")}
                          </p>
                          <div>
                            <p className=" tw-text-gray  tw-font-semibold">{t("1. Herring/Sill")}</p>
                            <p className=" tw-text-gray">
                              {t("This will be the dish that you will either love or hate depending upon your taste buds. There are a lot of varieties of sills and you can even eat pickled or fried herrings. Pickled Swedish herring is a classic Swedish dish derived from the times when preserving was the only way to get through the winter months. It is now an important part of all three basic traditional celebrations; Christmas, Easter, and off-course midsummer/midsummer.")}
                            </p>
                            <p className=" tw-text-gray">
                              {t("The pickling juice used to cook herring is made from vinegar, salt, spices, and water. No matter what type of herring you will see in the menu, it will be generally served with boiled potato, finely chopped chives, and gräddfil.")}
                            </p>

                            <p className=" tw-text-gray">
                              {t("The pickling juice used to cook herring is made from vinegar, salt, spices, and water. No matter what type of herring you will see in the menu, it will be generally served with boiled potato, finely chopped chives, and gräddfil.")}
                            </p>

                            <p className=" tw-text-gray  tw-font-semibold">{t("2. Falukorv")}</p>
                            <p className=" tw-text-gray">
                              {t("This dish is a firm favorite among kids of all ages across Sweden. Falukorv's origin can be traced back to the sixteenth century when Falu copper mines used horse and ox skin to make strong ropes to pullover the copper ores. At first, the meat was simply salted and smoked to make this dish. When the Germans came into the mines, then Swedes learn to make sausage out of meat. Now falukorv is made out of meat and pork by boiling it, frying it, roasting it in cream or grilling it. This is served with rice, mashed potatoes or macaroni depending upon your choice.")}
                            </p>

                            <p className=" tw-text-gray  tw-font-semibold">{t("3. Kroppkakor")}</p>
                            <p className=" tw-text-gray">
                              {t("Hearty mashed potato dumplings with mushroom fillings are known as kroppkakor. There are many different versions of kroppkakor all over the country and have different names. Potatoes and flour are mixed and then wrapped by the dough and pork. Potatoes can be used either raw or boiled depending upon your choice. These are most commonly served with melted butter, double cream, different sauces, and milk.")}
                            </p>

                            <p className=" tw-text-gray  tw-font-semibold">{t("4. Raggmunk")}</p>
                            <p className=" tw-text-gray">
                              {t("Raggmunk is the name of a Swedish dish made of potato pancakes. These pancakes, however, cannot be cooked using new potatoes as these potatoes don't contain enough starch to hold the pancake together. This dish is mostly cooked in winters so this is not an issue. The butterier and crispier the pancake is around the edges, the better it will be in taste. The trick to this is not to spread the batter too thinly. If you will add some diced onion in it, then it will be called \"French\" potato pancake.")}
                            </p>

                            <p className=" tw-text-gray  tw-font-semibold">{t("5. Crayfish")}</p>
                            <p className=" tw-text-gray">
                              {t("August in Sweden is known for the Crayfish season and people host crayfish parties with amazing décor. Get stuck in, rip off the claws and suck out the delicious juices. The crayfish are usually boiled in a brine bath with a lot of spices and crown dill. All you need then is Västerbotten cheese pie, soft bread, cold beer, snaps, crispbread and you're good to go!")}
                            </p>
                            <p className=" tw-text-gray">
                              {t("As the month of August start, the shops are full of all kind of crayfish from different countries but Swedes prefer the Swedish signal crayfish. Besides this, both Chinese and Turkish crayfish are also good.")}
                            </p>
                          </div>
                        </>
                      )}
                      <hr className=" tw-border-gray" />

                      <div className=" tw-flex tw-items-center  tw-justify-between">
                        <div>
                          <Button label={t('Visa')} className={' tw-bg-[#F5FAFF] tw-py-1 tw-rounded-sm  hover:tw-bg-blue hover:tw-text-white border tw-border-gray'} />
                        </div>
                        <div>
                          <ul className=" tw-flex tw-gap-4">
                            <li className="  tw-flex tw-justify-center hover:tw-bg-blue hover:tw-border-blue hover:tw-text-white tw-items-center tw-border-gray-dark tw-border tw-h-8 tw-w-8 tw-rounded-full">
                              <Link to="https://www.facebook.com/Swedenrelocators/">
                                <FaFacebookF className="  tw-text-gray-dark" />
                              </Link>
                            </li>
                            <li className="  tw-flex tw-justify-center hover:tw-bg-blue hover:tw-border-blue hover:tw-text-white tw-items-center tw-border-gray-dark tw-border tw-h-8 tw-w-8 tw-rounded-full">
                              <Link to="https://twitter.com/swedenrelocator">
                                <FaTwitter className="  tw-text-gray-dark" />
                              </Link>
                            </li>
                            <li className="  tw-flex tw-justify-center hover:tw-bg-blue hover:tw-border-blue hover:tw-text-white tw-items-center tw-border-gray-dark tw-border tw-h-8 tw-w-8 tw-rounded-full">
                              <Link to="https://www.instagram.com/sweden_relocators/">
                                <FaInstagram className="  tw-text-gray-dark" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* featured-imagebox-post end*/}
                </div>
              </div>
            </div>

            <Sidebar />
        
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetails;
