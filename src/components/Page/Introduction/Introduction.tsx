import React from 'react';
import { useTranslation } from 'react-i18next';
import { JobObjective } from './JobObjective';
import { PersonalInterests } from './PersonalInterests';

export const Introduction = () => {
  const { t } = useTranslation('portfolio');
  return (
    <>
      <h2 id="jobObjective">{t('Introduction')}</h2>
      <JobObjective />
      <PersonalInterests />
    </>
  );
};
