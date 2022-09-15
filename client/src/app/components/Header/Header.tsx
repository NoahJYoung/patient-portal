import React from 'react';
import {
  Avatar,
  Layout,
  Menu,
  Dropdown,
} from 'antd';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { UserOutlined } from '@ant-design/icons';

import { dropdownMenuItems, mainMenuItems } from './helpers';
import logo from './assets/logo.png';

import styles from './Header.module.scss';

const { Header: AntDHeader } = Layout;

const dropdownMenu = (
  <Menu>{dropdownMenuItems.map(item => <Menu.Item><Link to={item.to}>{item.name}</Link></Menu.Item>)}</Menu>
);

const mainMenu = mainMenuItems.map(item => (
  {
    key: item.key,
    label: <NavLink to={item.key}>{item.label}</NavLink>,
  }
));

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <AntDHeader className={styles.headerContainer}>
      <img
        src={logo}
        alt="Patient Portal Logo"
        className={styles.logo}
      />
      <Menu
        className={styles.menu}
        theme="dark"
        mode="horizontal"
        items={mainMenu}
        selectedKeys={[pathname]}
      />
      <Dropdown overlay={dropdownMenu}>
        <Avatar
          size={64}
          icon={<UserOutlined />}
          className="avatar"
        />
      </Dropdown>
    </AntDHeader>
  );
};
