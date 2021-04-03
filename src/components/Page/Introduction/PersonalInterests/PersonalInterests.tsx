import React from 'react';
import { useTranslation } from 'react-i18next';

export const PersonalInterests = () => {
  const { t } = useTranslation('portfolio');
  return (
    <>
      <a className="anchor" id="personalInterests"></a>
      <h3>{t('Personal interests')}</h3>
    </>
  );
};
