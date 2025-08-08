/* eslint-disable no-unused-vars */
import React from 'react';
import choose from '../../assets/images/office-meetings.png';
import Button from '../Button';
import { fadeIn, imageVariants, staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Why_choose_us = () => {
  const containerVariants = staggerContainer(0.1, 0.1);
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-[#f5faff]">
        <div className="tw-flex tw-items-center tw-justify-between">
          <p className="tw-text-primary tw-font-medium tw-text-md m-0">
            {t('Business Permit')}
          </p>
          <p className="tw-pr-4 tw-text-primary m-0 tw-font-medium tw-text-lg">94%</p>
        </div>
        <div className="tw-w-full tw-bg-gray-light tw-h-2 mb-6 mt-2">
          <div className="tw-bg-blue tw-h-2" style={{ width: '94%' }} />
        </div>

        <div className="tw-flex tw-mt-6 tw-items-center tw-justify-between">
          <p className="tw-text-primary tw-font-medium tw-text-md m-0">
            {t('Work Permit')}
          </p>
          <p className="tw-pr-4 tw-text-primary m-0 tw-font-medium tw-text-lg">98%</p>
        </div>
        <div className="tw-w-full tw-bg-gray-light tw-h-2 mb-6 mt-2">
          <div className="tw-bg-blue tw-h-2" style={{ width: '98%' }} />
        </div>

        <div className="tw-flex tw-mt-6 tw-items-center tw-justify-between">
          <p className="tw-text-primary tw-font-medium tw-text-md m-0">
            {t('Family Reunification')}
          </p>
          <p className="tw-pr-4 tw-text-primary m-0 tw-font-medium tw-text-lg">100%</p>
        </div>
        <div className="tw-w-full tw-bg-gray-light tw-h-2 mb-6 mt-2">
          <div className="tw-bg-blue tw-h-2" style={{ width: '100%' }} />
        </div>

        <div className="tw-flex tw-mt-6 tw-items-center tw-justify-between">
          <p className="tw-text-primary tw-font-medium tw-text-md m-0">
            {t('Study in Sweden')}
          </p>
          <p className="tw-pr-4 tw-text-primary m-0 tw-font-medium tw-text-lg">98%</p>
        </div>
        <div className="tw-w-full tw-bg-gray-light tw-h-2 mb-6 mt-2">
          <div className="tw-bg-blue tw-h-2" style={{ width: '98%' }} />
        </div>

        <div className="tw-flex tw-mt-6 tw-items-center tw-justify-between">
          <p className="tw-text-primary tw-font-medium tw-text-md m-0">
            {t('Long Term EU Resident')}
          </p>
          <p className="tw-pr-4 tw-text-primary m-0 tw-font-medium tw-text-lg">99%</p>
        </div>
        <div className="tw-w-full tw-bg-gray-light tw-h-2 mb-6 mt-2">
          <div className="tw-bg-blue tw-h-2" style={{ width: '99%' }} />
        </div>
      </div>
    </>
  );
};

export default Why_choose_us;
