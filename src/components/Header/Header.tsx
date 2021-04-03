import { Menu, MenuTheme } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import img from '../../assets/images/img.png';
import { useTranslation } from 'react-i18next';
import { DownloadOutlined } from '@ant-design/icons';

interface Props {
  darkState: string;
  setDarkState: React.Dispatch<React.SetStateAction<string>>;
}

export const MyHeader = ({ darkState, setDarkState }: Props) => {
  const { t, i18n } = useTranslation('portfolio');

  const downloadTxtFile = () => {
    const link = document.createElement('a');
    link.href = '/downloadFiles/cv.pdf';
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [selectedKeys, setSelectedKeys] = useState(['']);

  const onMenuClick = (key: string) => {
    setSelectedKeys([key]);
    if (key === '1') {
      downloadTxtFile();
    } else if (key === '2') {
      i18n.changeLanguage(i18n.language === 'fr-FR' ? 'en-US' : 'fr-FR');
    } else if (key === '3') {
      setDarkState(darkState === 'light' ? 'dark' : 'light');
    }
  };

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
        <Menu
          theme={darkState as MenuTheme}
          mode="horizontal"
          selectedKeys={selectedKeys}
          onMouseLeave={() => setSelectedKeys([''])}
          onClick={(e: { key: any }) => onMenuClick(e.key)}>
          {/*<Menu.Item key="1">Linkedin</Menu.Item> */}
          <Menu.Item icon={<DownloadOutlined />} key="1">
            CV
          </Menu.Item>
          <Menu.Item key="2">{t('englishFrench')}</Menu.Item>
          <Menu.Item key="3">{darkState}</Menu.Item>
        </Menu>
      </Header>
    </>
  );
};
