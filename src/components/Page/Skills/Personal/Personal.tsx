import React from 'react';
import { useTranslation } from 'react-i18next';

export const Personal = () => {
  const { t } = useTranslation('portfolio');
  return (
    <>
      <h3>{t('Personal skills')}</h3>
    </>
  );
};
