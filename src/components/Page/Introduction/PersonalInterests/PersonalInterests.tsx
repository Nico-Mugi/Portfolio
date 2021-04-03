import React from 'react';
import { useTranslation } from 'react-i18next';

export const PersonalInterests = () => {
  const { t } = useTranslation('portfolio');
  return (
    <>
      <h3>{t('Personal interests')}</h3>
    </>
  );
};
