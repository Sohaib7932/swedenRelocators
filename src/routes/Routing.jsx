import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register/Register';
import Home from '../screens/home/page';
import GoTop from '../components/GoTop';
import Testimonials from '../screens/testimonials';
import ContactUs from '../screens/contactUs';
import Set_up_your_account from '../screens/auth/register/Set_up_your_account';
import Book_your_appointment from '../screens/book_your_appointment/Book_your_appointment';
import Assessment from '../screens/assessment/Assessment';
import AboutUs from '../screens/aboutUs';
import New_In_sweden from '../screens/newInSweden';
import Services from '../screens/services';
import FAQs from '../screens/FAQs';
import Blogs from '../screens/blogs';
import BlogDetails from '../screens/blogDetails';
import Assessment_register from '../screens/assessment_register';
import Gallery from '../screens/gallery';
import Terms_conditions from '../screens/terms_conditions';
import PrivacyPolicy from '../screens/privacyPolicy';
import Rent_out_your_housing from '../screens/rent_out_your_housing';
import ServiceDetails from '../screens/ServiceDetails/asylum';
import Looking_for_housing from '../screens/Looking_for_housing';
import { useEffect } from 'react';
import Housing from '../screens/Housing';
import Available_housing from '../screens/Available_housing';
import PageNotFound from '../screens/pageNotFound';
import Property_Details from '../screens/property_details/Property_Details';
import FamilyRenuification from '../screens/ServiceDetails/FamilyReunification';
import PersonnumerSweden from '../screens/ServiceDetails/PersonnummerSweden';
import CPRNumberDenmark from '../screens/ServiceDetails/CPRNumberDenmark';
import BusinessPermit from '../screens/ServiceDetails/BusinessPermit';
import Citizenship from '../screens/ServiceDetails/Citizenship';
import StudyInEu from '../screens/ServiceDetails/StudyInEu';
import GlobalVisitVisas from '../screens/ServiceDetails/GlobalVisitVisas';
import EEAPermits from '../screens/ServiceDetails/EEAPermits';
import ParentsEUPermit from '../screens/ServiceDetails/ParentsEUPermit';
import MarriageDivorce from '../screens/ServiceDetails/MarriageDivorce';
import CompanyRegistration from '../screens/ServiceDetails/CompanyRegistration';
import HouseOffices from '../screens/ServiceDetails/HouseOffices';
import AppealCases from '../screens/ServiceDetails/AppealCases';
import EUCitizensRelocation from '../screens/ServiceDetails/EUCitizensRelocation';
import Investment from '../screens/ServiceDetails/Investment';
import DirectCitizenship from '../screens/ServiceDetails/DirectCitizenship';
import PermanentResidence from '../screens/ServiceDetails/PermanentResidence';
import GoldenVisa from '../screens/ServiceDetails/GoldenVisa';
import BusinessVisit from '../screens/ServiceDetails/BusinessVisit';
import WorkPermit from '../screens/ServiceDetails/WorkPermit';
import Family_reunification_assessment from '../screens/assessment_register/Family_reunification_assessment';
import Long_term_eu_status_assessment from '../screens/assessment_register/Long_term_eu_status_assessment';
import Visit_visa from '../screens/assessment_register/Visit_visa';
import Work_permit from '../screens/assessment_register/Work_permit';
import Student_assessments from '../screens/assessment_register/Student_assessments';
import { useSelector } from 'react-redux';
import Backdrop from '../components/Backdrop/Backdrop';
import EORPayroll from '../screens/ServiceDetails/eorpayroll';
import Logistics from '../screens/ServiceDetails/logistics';
const Routing = () => {
  // const ScrollToTop = () => {
  //   const location = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [location]);

  //   return null;
  // };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isBackDropTrue = useSelector((state) => state.dropBackDropReducer.isDropBackDropTrue);
  return (
    <div>
      {/* <Backdrop isBackDropTrue={isBackDropTrue} /> */}
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/new_in_sweden" element={<New_In_sweden />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/eorpayroll" element={<EORPayroll />} />
          <Route path="/set_up_your_account" element={<Set_up_your_account />} />
          <Route path="/book_your_appointment" element={<Book_your_appointment />} />
          <Route path="/rent_out_your_housing" element={<Rent_out_your_housing />} />
          <Route path="/looking_for_housing" element={<Looking_for_housing />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/businessvisaassessment" element={<Assessment_register />} />
          <Route path="/family_reunification_assessment" element={<Family_reunification_assessment />} />
          <Route path="/long_term_eu_status_assessment" element={<Long_term_eu_status_assessment />} />
          <Route path="/visit_visa" element={<Visit_visa />} />
          <Route path="/Work_permit" element={<Work_permit />} />
          <Route path="/student_assessments" element={<Student_assessments />} />
          <Route path="/services" element={<Services />} />
          <Route path="/asylum" element={<AppealCases />} />
          <Route path="/family-reunification" element={<FamilyRenuification />} />
          <Route path="/personnumer-sweden" element={<PersonnumerSweden />} />
          <Route path="/cpr-number-denmark" element={<CPRNumberDenmark />} />
          <Route path="/work-permit" element={<WorkPermit />} />
          <Route path="/business-permit" element={<BusinessPermit />} />
          <Route path="/business-visit" element={<BusinessVisit />} />
          <Route path="/citizenship" element={<Citizenship />} />
          <Route path="/study-in-eu" element={<StudyInEu />} />
          <Route path="/global-visit-visas" element={<GoldenVisa />} />
          <Route path="/eea-permits" element={<EEAPermits />} />
          <Route path="/parents-eu-permit" element={<ParentsEUPermit />} />
          <Route path="/marriage-divorce" element={<MarriageDivorce />} />
          <Route path="/company-registration" element={<CompanyRegistration />} />
          <Route path="/house-offices" element={<HouseOffices />} />
          <Route path="/appeal-cases" element={<ServiceDetails />} />
          <Route path="/eu-family-reunification" element={<EUCitizensRelocation />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/direct-citizenship-by-investments" element={<DirectCitizenship />} />
          <Route path="/permanent-residence" element={<PermanentResidence />} />
          <Route path="/golden-visa-greece-portugal" element={<GlobalVisitVisas />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog_details/5-things-to-keep-in-mind-if-you-are-relocating-to-sweden" element={<BlogDetails />} />
          <Route path="/blog_details/a-guide-about-student-fee-and-admissions-in-sweden" element={<BlogDetails />} />
          <Route path="/blog_details/how-to-build-a-successful-start-up-in-sweden" element={<BlogDetails />} />
          <Route path="/blog_details/work-permit-in-sweden-complete-guide" element={<BlogDetails />} />
          <Route path="/blog_details/why-you-should-plan-moving-out-of-sweden" element={<BlogDetails />} />
          <Route path="/blog_details/immigrating-to-sweden-what-you-need-to-know" element={<BlogDetails />} />
          <Route path="/blog_details/business-challenges-for-expatriates-in-sweden" element={<BlogDetails />} />
          <Route path="/blog_details/why-you-shouldnt-be-afraid-of-visiting-sweden" element={<BlogDetails />} />
          <Route path="/blog_details/6-best-small-business-ideas-in-sweden" element={<BlogDetails />} />
          <Route path="/blog_details/5-common-problems-faced-by-immigrants-in-sweden" element={<BlogDetails />} />
          <Route path="/blog_details/6-reasons-why-sweden-is-an-ideal-place-to-study" element={<BlogDetails />} />
          <Route path="/blog_details/places-to-visit-in-sweden" element={<BlogDetails />} />
          <Route path="/blog_details/swedish-visit-visa-requirements" element={<BlogDetails />} />
          <Route path="/blog_details/:id" element={<BlogDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/terms_conditions" element={<Terms_conditions />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/housing" element={<Housing />} />
          <Route path="/property_details" element={<Property_Details />} />
          <Route path="/available_housing" element={<Available_housing />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <GoTop />
      </BrowserRouter>
    </div>
  );
};
export default Routing;
