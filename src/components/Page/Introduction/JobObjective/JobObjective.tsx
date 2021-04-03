import React from 'react';
import { useTranslation } from 'react-i18next';

export const JobObjective = () => {
  const { t } = useTranslation('portfolio');
  return (
    <>
      <h3>{t('Job objective')}</h3>
    </>
  );
};
