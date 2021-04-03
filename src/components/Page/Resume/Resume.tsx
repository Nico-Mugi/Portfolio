import React from 'react';
import { useTranslation } from 'react-i18next';
import { Education } from './Education';
import { Experiences } from './Experiences';

export const Resume = () => {
  const { t } = useTranslation('portfolio');
  return (
    <>
      <h2>{t('Resume')}</h2>
      <Experiences />
      <Education />
    </>
  );
};
