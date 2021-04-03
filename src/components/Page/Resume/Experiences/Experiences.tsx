import { Timeline } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Experiences = () => {
  const { t } = useTranslation('portfolio');
  return (
    <>
      <a className="anchor" id="experiences"></a>
      <h3>{t('Experiences')}</h3>
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </>
  );
};
