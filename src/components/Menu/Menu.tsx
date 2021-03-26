import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import menuStyle from './menu.module.scss';
import { Layout, Menu, MenuTheme } from 'antd';
import {
  MailOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;

const { SubMenu } = Menu;

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

interface Props {
  darkState: string;
}

export const MyMenu = ({ darkState }: Props) => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const [collapsed, setCollapsed] = useState(false);

  const [menuState, setMenuState] = useState('1');

  const onOpenChange = (keys: any[]) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        breakpoint="lg"
        style={{ textAlign: 'center' }}>
        <Menu
          onClick={(e: { key: any }) => setMenuState(e.key)}
          theme={darkState as MenuTheme}
          defaultOpenKeys={['sub1']}
          selectedKeys={[menuState]}
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Introduction">
            <Menu.Item key="1">Job Objectives</Menu.Item>
            <Menu.Item key="2">Personal Interests</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<MailOutlined />} title="Resume">
            <Menu.Item key="3">Experiences</Menu.Item>
            <Menu.Item key="4">Education &amp; Qualifications</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<MailOutlined />} title="Skills">
            <Menu.Item key="5">Technical skills</Menu.Item>
            <Menu.Item key="6">Languages</Menu.Item>
            <Menu.Item key="7">Personal and managing skills</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<MailOutlined />} title="Projects">
            <Menu.Item key="8">.NET</Menu.Item>
            <Menu.Item key="9">Games</Menu.Item>
            <Menu.Item key="10">React</Menu.Item>
          </SubMenu>
          <Menu.Item key="sub5" icon={<MailOutlined />}>
            Contact
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};
