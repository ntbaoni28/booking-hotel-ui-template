import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import { LOGIN_PAGE, REGISTRATION_PAGE } from 'settings/constant';

const AuthMenu = ({ className }) => {
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink to={LOGIN_PAGE}>Đăng nhập</NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={REGISTRATION_PAGE}>Đăng ký</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default AuthMenu;
