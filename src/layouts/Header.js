/*
 * @filename: 
 * @Date: 2020-02-17 14:43:34
 * @Author: wangYuan  <yuan.wang07@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2020, Hand
 */
import React from 'react';
import { Menu, Dropdown, Icon, Affix } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';

import './index.scss';

const MenuItem = Menu.Item;

const Header = ({ location }) => {
    const menu = (
        <Menu>
          <Menu.Item key="1">
                <Icon type="user" />
                课程表
          </Menu.Item>
            <Menu.Item key="2">
                <Icon type="user" />
                全部订单
          </Menu.Item>
            <Menu.Item key="3">
                <Icon type="user" />
                个人信息
          </Menu.Item>
            <Menu.Item key="3">
                <Icon type="user" />
                退出登录
          </Menu.Item>
        </Menu>
    );
    return (
        <Affix offsetTop={0}>
            <div className="header">
                <div className="header-index-inner">
                    <a className="logo" href="/" title="大明课堂"></a>
                    <Menu className="menu" mode="horizontal" theme="light" selectedKeys={[location.pathname]}>
                        <MenuItem key="/">
                            <Link to="/">首页</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/class">课程</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/teacher">老师</Link>
                        </MenuItem>
                    </Menu>
                    <div className="user">
                        <Dropdown overlay={menu}>
                            <div className="drop-menu">
                                <div className="Avatar" title="当前用户: 汪渊"></div>
                                <div className="username" title="拥抱天空的唯一1995">拥抱天空的唯一1995</div>
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </Affix>
    );
}
export default withRouter(Header);

