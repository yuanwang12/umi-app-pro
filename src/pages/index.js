/**
 * title: 首页
 */

/*
 * @filename: 
 * @Date: 2020-02-16 17:41:21   
 * @Author: wangYuan  <yuan.wang07@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2020, Hand
 */
import React, { useState } from 'react';
import { Button, notification, Layout } from 'antd';

import LoginForm from './LoginForm';
import MenuList from './MenuList';
import styles from './index.scss';
import { fetchLogin } from '../services/api';

const { Content } = Layout;

export default function () {
  const [visible, setVisible] = useState(false);
  const [loginForm, setLoginForm] = useState({});
  const [loading, setLoading] = useState(false);
  /**
   * 首页登录
   */
  const handleLogin = () => {
    setVisible(true);
  }

  /**
   * 关闭登录弹窗
   */
  const handleCloseModal = () => {
    setVisible(false);
  }

  /**
   * 登录校验
   */
  const handleCheckLogin = () => {
    loginForm.validateFields((err, value) => {
      if (!err) {
        setLoading(true);
        debugger
        fetchLogin({ value, setLoading, setVisible })
          .then(res => {
            setLoading(false);
            if (res.status === 200) {
              setVisible(false);
              notification.success({
                duration: 2,
                message: '提示',
                description:
                  '登录成功',
              });
            } else {
              notification.warning({
                duration: 2,
                message: '提示',
                description:
                  '请求失败',
              });
            }
          }).catch(err => {
            notification.warning({
              duration: 2,
              message: '提示',
              description: '请求失败',
            })
          })
      }
    })
  }

  const filterFormProps = {
    visible: visible,
    loading: loading,
    onRef: (node) => {
      setLoginForm(node.props.form);
    }, // 绑定form表单
    onLogin: handleCheckLogin, // 登录校验
    onCloseModal: handleCloseModal, // 取消登录
  };
  return (
    <React.Fragment>
      <div className={styles['menu-list']}>
        <MenuList />
      </div>
      <Content>
        <div className={styles.normal}>
          <div className={styles.welcome} />
          <ul className={styles.list}>
            <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
            <li>
              <a href="https://umijs.org/guide/getting-started.html">
                Getting Started
            </a>
            </li>
          </ul>
        </div>
        <div className={styles['login-wrap']}>
          <div className={styles['login']}>
            <p>跟进你的学习状态</p>
            <div className={styles['login-img']}></div>
          </div>
          <Button className={styles['login-button']} type="primary" onClick={handleLogin} block>登录</Button>
        </div>
        <LoginForm {...filterFormProps} />
      </Content>
    </React.Fragment>
  );
}
