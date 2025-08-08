import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Header/Navbar';
import OurSkills from '../../components/OurSkills';
import Blog from '../../components/Blog';
import Visitor from '../../components/Visitor';
import Why_choose_us from '../../components/Why_choose_us';
import Because_family from '../../components/Because_family/Because_family';
import Header from '../../components/Header_New/Header';

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { i18n } = useTranslation();

  // Check if the current language is RTL
  const isRTL = i18n.language === 'ur'; // Adjust language code as needed

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'rtl' : ''}>
        <OurSkills />
      </div>
      <Because_family />
      <Visitor />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
