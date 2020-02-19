/*
 * @filename: 
 * @Date: 2020-02-16 17:41:21
 * @Author: wangYuan  <yuan.wang07@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2020, Hand
 */
import React from 'react';
import { Layout } from 'antd';

import Header from './Header';
import Footer from './Footer';
import './index.scss';

const { Content } = Layout;

function BasicLayout({ children, location }) {
  // 全局登录
  // if (location.pathname === '/login') {
  //   return children;
  // }
  return (
    <Layout className="basic-layout">
      <Header />
      <Content className="content">{children}</Content>
      <Footer />
    </Layout>
  );
}

export default BasicLayout;
