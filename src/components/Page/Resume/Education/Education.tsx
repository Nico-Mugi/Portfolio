import { Timeline } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Education = () => {
  const { t } = useTranslation('portfolio');
  return (
    <>
      <a className="anchor" id="education"></a>
      <h3 style={{ background: '#fff' }}>{t('Education & qualifications')}</h3>
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </>
  );
};
