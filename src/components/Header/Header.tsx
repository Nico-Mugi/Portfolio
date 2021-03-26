import { Menu, MenuTheme, Switch } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import img from '../../assets/images/img.png';
import { useTranslation } from 'react-i18next';

interface Props {
  darkState: string;
  setDarkState: React.Dispatch<React.SetStateAction<string>>;
}

export const MyHeader = ({ darkState, setDarkState }: Props) => {
  const { t, i18n } = useTranslation('portfolio');
  return (
    <>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100vw',
          height: '10vh',
          padding: 0,
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <div style={{ display: 'flex', minWidth: '200px', color: 'white' }}>
          <img src={img} />
          <p>Nicolas Thouvenin</p>
        </div>
        <Menu theme={darkState as MenuTheme} mode="horizontal">
          <Menu.Item key="1">Download CV</Menu.Item>
          <Menu.Item onClick={() => i18n.changeLanguage('fr')} key="2">
            {t('Welcome to React')}English
          </Menu.Item>
          <Menu.Item
            onClick={() =>
              setDarkState(darkState === 'light' ? 'dark' : 'light')
            }
            key="3">
            {darkState}
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};
