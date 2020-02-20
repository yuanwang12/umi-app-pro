/*
 * @filename: 
 * @Date: 2020-02-20 11:33:26
 * @Author: wangYuan  <yuan.wang07@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2020, Hand
 */
import React, { useState } from 'react';
import { Menu, Icon, Switch } from 'antd';

const { SubMenu } = Menu;

export default function MenuList() {
    const [mode, setMode] = useState('vertical');
    const [theme, setTheme] = useState('light');
    /**
     * 更改菜单排列模式
     * @param {Boolean} value true/false
     */
    const changeMode = value => {
        setMode(value ? 'inline' : 'vertical');
    };

    /**
     * 更改菜单背景主题
     * @param {Boolean} value true/false
     */
    const changeTheme = value => {
        setTheme(value ? 'dark' : 'light');
    };
    return (
        <div>
            <Switch onChange={changeMode} /> 切换菜单
        <span className="ant-divider" style={{ margin: '0 1em' }} />
            <Switch onChange={changeTheme} /> 切换主题
        <br />
            <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={['sub1']}
                defaultOpenKeys={[]}
                mode={mode}
                theme={theme}
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="book" />
                            <span>前端课程</span>
                        </span>
                    }
                >
                    <Menu.Item key="3">前端小白入门</Menu.Item>
                    <SubMenu key="sub1-2" title="JS+CSS+HTML">
                        <Menu.Item key="5">JavaScript入门教程</Menu.Item>
                        <Menu.Item key="6">JavaScript高级教程</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="book" />
                            <span>后端课程</span>
                        </span>
                    }
                >
                    <Menu.Item key="7">SpringMVC入门</Menu.Item>
                    <Menu.Item key="8">区块链进阶</Menu.Item>
                    <Menu.Item key="9">Rids缓存解读</Menu.Item>
                    <Menu.Item key="10">MySql数据库入门</Menu.Item>
                </SubMenu>
                 <Menu.Item key="1">
                    <Icon type="book" />
                    美术
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="book" />
                    中国各朝代历史解读
                </Menu.Item>
            </Menu>
        </div>
    )
}
