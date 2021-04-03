import React from 'react';
import { Introduction } from './Introduction';
import { Resume } from './Resume';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';

export const Page = () => {
  return (
    <>
      <Layout>
        <Content>
          <div className="site-layout-content">
            <Introduction />
          </div>
        </Content>
        <Content>
          <div className="site-layout-content">
            <Resume />
          </div>
        </Content>
        <Content>
          <div className="site-layout-content">
            <Skills />
          </div>
        </Content>
        <Content>
          <div className="site-layout-content">
            <Projects />
          </div>
        </Content>
      </Layout>
    </>
  );
};
