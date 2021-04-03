import React from 'react';
import { useTranslation } from 'react-i18next';

export const Technical = () => {
  const { t } = useTranslation('portfolio');
  return (
    <>
      <a className="anchor" id="technicalSkills"></a>
      <h3>{t('Technical skills')}</h3>
    </>
  );
};
