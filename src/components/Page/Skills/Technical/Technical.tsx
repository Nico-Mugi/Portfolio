import React from 'react';
import { useTranslation } from 'react-i18next';

export const Technical = () => {
  const { t } = useTranslation('portfolio');
  return (
    <>
      <h3>{t('Technical skills')}</h3>
    </>
  );
};
