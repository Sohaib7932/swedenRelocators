import React from 'react'
import Header from '../../components/Header_New/Header'
import ServiceSlider from '../../components/ServiceSlider'
import FeatureSection from '../../components/ServiceFeatured'
import SkillSection from '../../components/ServiceSkillSection'
import ServiceCat from '../../components/ServiceCAT'
import Footer from '../../components/Footer/Footer'
import TestimonialSection from '../../components/ServiceTestimonial'
import IntroductionSection from '../../components/ServiceIntroduction'
import BlogSection from '../../components/ServiceBlog'

const index = () => {
  return (
    <div>

      <Header />
      <div style={{ marginTop: '100px' }}></div>

      <ServiceSlider />
      <FeatureSection />
      <SkillSection/>
      <ServiceCat />
      {/* <TestimonialSection/>
      <IntroductionSection/>
      <BlogSection/> */}
      <Footer/>
    </div>
  )
}

export default index