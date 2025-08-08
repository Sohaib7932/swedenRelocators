import Button from '../Button';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { Link } from 'react-router-dom';
import VideoPlayer from '../videoPlayer';

import { useTranslation } from 'react-i18next';

const Hero = () => {
  const containerVariants = staggerContainer(0.1, 0.1);

  const { t, language } = useTranslation();
  const isleftlangue = language === 'ur';

  return (
    <section className="tw-relative tw-bg-homeHero tw-bg-no-repeat tw-bg-bottom tw-bg-cover tw-h-auto tw-pt-0 tw-pb-0 xl:tw-pt-10 xl:tw-pb-24">

      <div className="tw-hidden xl:tw-block tw-absolute tw-left-[400px] tw-top-[150px] tw-z-20">
        <img src="/src/assets/images/slides/slider-02.png" alt="" />
      </div>
      <div className="tw-relative container md:tw-pt-40 tw-pt-20 tw-z-30">
        <div className="row tw-items-center g-4 md:tw-pt-20 tw-pt-20">
          <div className="col-md-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.h6
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="tw-text-gray tw-uppercase tw-flex tw-gap-2"
              >
                <p className="tw-w-5 tw-h-0.5 tw-mt-3 tw-bg-blue" />
                {t("Relocation & Immigration Solutions for Individuals, Families, Employees, and Companies")}
              </motion.h6>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.h1
                variants={fadeIn('up', 'tween', 0.4, 1)}
                className="tw-leading-[60px] tw-text-5xl tw-font-normal"
              >
                <strong className="tw-text-blue">{t("Relocate To Sweden")}</strong> <br />
                {t("With an Expert Advise")}
              </motion.h1>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.p
                variants={fadeIn('up', 'tween', 0.6, 2)}
                className="tw-text-gray"
              >
                {t("We offer complete relocation services to our worldwide clients including residence & work permits, home finding, school pre-search, integration, and setting-in services.")}
              </motion.p>
            </motion.div>
            <div className="tw-flex sm:tw-flex-row tw-flex-col tw-gap-5 tw-pt-5">
              <Link to={'/services'}>
                <Button className={'btn-warning'} label={t('Our Services')} />
              </Link>
              <Link to={'/book_your_appointment'}>
                <Button className={'btn-indigo'} label={t('Book an Appointment!')} />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <VideoPlayer src="https://swedenrelocators.se/videos/hero_video.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
