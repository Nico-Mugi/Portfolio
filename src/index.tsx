import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import { MyHeader } from './components/Header';
import { Page } from './components/Page';
import { MyMenu } from './components/Menu';
import { Footer } from './components/Footer';
import 'antd/dist/antd.css';
import 'antd/dist/antd.dark.css';
import { Layout } from 'antd';
import * as i18nService from './services/i18n';

const App = () => {
  const [darkState, setDarkState] = useState('dark');
  const [menuSize, setMenuSize] = useState(250);
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <MyHeader darkState={darkState} setDarkState={setDarkState} />
        <Layout style={{ minHeight: '90vh', marginTop: '10vh' }}>
          <MyMenu darkState={darkState} setMenuSize={setMenuSize} />
          <Layout
            style={{
              width: 'calc(100vh - ' + menuSize + 'px)',
              marginLeft: menuSize,
              transition: 'all 0.2s',
              textAlign: 'center',
            }}>
            <Page />
            <Footer />
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

i18nService.init();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
