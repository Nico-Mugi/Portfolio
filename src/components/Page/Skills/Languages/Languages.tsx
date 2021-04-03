import React from 'react';
import { useTranslation } from 'react-i18next';

export const Languages = () => {
  const { t } = useTranslation('portfolio');
  return (
    <>
      <a className="anchor" id="languages"></a>
      <h3>{t('Languages')}</h3>
    </>
  );
};
