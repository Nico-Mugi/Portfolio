import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from './Languages';
import { Personal } from './Personal';
import { Technical } from './Technical';

export const Skills = () => {
  const { t } = useTranslation('portfolio');
  return (
    <>
      <h2>{t('Skills')}</h2>
      <Technical />
      <Languages />
      <Personal />
    </>
  );
};
