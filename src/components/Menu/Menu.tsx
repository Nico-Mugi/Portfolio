import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import menuStyle from './menu.module.scss';
import { Layout, Menu, MenuTheme } from 'antd';
import { MailOutlined, createFromIconfontCN } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import Link from 'antd/lib/typography/Link';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2448006_k3hbwppe0qn.js'],
});

const { Sider } = Layout;

const { SubMenu } = Menu;

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

interface Props {
  darkState: string;
  setMenuSize: React.Dispatch<React.SetStateAction<number>>;
}

export const MyMenu = ({ darkState, setMenuSize }: Props) => {
  const { t } = useTranslation('portfolio');
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const [collapsed, setCollapsed] = useState(false);

  const [menuState, setMenuState] = useState('1');

  const menuWidth = [80, 250];

  const onOpenChange = (keys: any[]) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const onCollapse = () => {
    setMenuSize(collapsed ? menuWidth[1] : menuWidth[0]);
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        breakpoint="lg"
        width={menuWidth[1]}
        collapsedWidth={menuWidth[0]}
        style={{ position: 'fixed', height: '90vh' }}>
        <Menu
          onClick={(e: { key: any }) => setMenuState(e.key)}
          theme={darkState as MenuTheme}
          defaultOpenKeys={['sub1']}
          selectedKeys={[menuState]}
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}>
          <SubMenu
            key="sub1"
            icon={<IconFont type="icon-home" />}
            title={t('Introduction')}>
            <Menu.Item
              key="1"
              icon={<IconFont type="icon-Darts1" />}
              onClick={() => window.location.replace('/#jobObjective')}>
              {t('Job objective')}
            </Menu.Item>
            <Menu.Item key="2" icon={<IconFont type="icon-Basket-Ball" />}>
              {t('Personal interests')}
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<IconFont type="icon-paper" />}
            title={t('Resume')}>
            <Menu.Item
              key="3"
              icon={<IconFont type="icon-gongzuojingyan" />}
              onClick={() => window.location.replace('/#experiences')}>
              {t('Experiences')}
            </Menu.Item>
            <Menu.Item key="4" icon={<IconFont type="icon-jiaoyujingli" />}>
              {t('Education & qualifications')}
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            icon={<IconFont type="icon-chart" />}
            title={t('Skills')}>
            <Menu.Item key="5" icon={<IconFont type="icon-Programming" />}>
              {t('Technical skills')}
            </Menu.Item>
            <Menu.Item key="6" icon={<IconFont type="icon-language-solid" />}>
              {t('Languages')}
            </Menu.Item>
            <Menu.Item key="7" icon={<IconFont type="icon-human-handsup" />}>
              {t('Personal skills')}
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            icon={<IconFont type="icon-xiangmujingyan" />}
            title={t('Projects')}>
            <Menu.Item key="8" icon={<IconFont type="icon-dot-net" />}>
              .NET
            </Menu.Item>
            <Menu.Item key="9" icon={<IconFont type="icon-game" />}>
              Games
            </Menu.Item>
            <Menu.Item key="10" icon={<IconFont type="icon-React" />}>
              React
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="sub5" icon={<MailOutlined />}>
            {t('Contact')}
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};
