import React from 'react';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation('portfolio');
  return (
    <>
      <h2>{t('Projects')}</h2>
    </>
  );
};
