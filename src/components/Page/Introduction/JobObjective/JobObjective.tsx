import React from 'react';
import { useTranslation } from 'react-i18next';

export const JobObjective = () => {
  const { t } = useTranslation('portfolio');
  return (
    <>
      <a className="anchor" id="jobObjectives"></a>
      <h3>{t('Job objective')}</h3>
    </>
  );
};
