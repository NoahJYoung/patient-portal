import React from 'react';
import {
  Avatar,
  Layout,
  Menu,
  Typography,
} from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

import { UserOutlined } from '@ant-design/icons';

import logo from './assets/logo.png';

import styles from './Header.module.scss';

const { Header: AntDHeader } = Layout;
const { Title } = Typography;

const items = [
  {
    key: '/',
    label: <NavLink to="/">Home</NavLink>,
  },
  {
    key: '/patients',
    label: <NavLink to="/patients">Patients</NavLink>,
  },
];

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
        items={items}
        selectedKeys={[pathname]}
      />
      <Avatar
        size={64}
        icon={<UserOutlined />}
        className="avatar"
      />
    </AntDHeader>
  );
};
