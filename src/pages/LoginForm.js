/*
 * @filename: 
 * @Date: 2020-02-18 15:34:17
 * @Author: wangYuan  <yuan.wang07@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2020, Hand
 */
import React, { Component } from 'react'
import { Form, Row, Col, Modal, Input, Button, Icon } from 'antd';
import { Bind } from 'lodash-decorators';
import withRouter from 'umi/withRouter';

import style from './index.scss';
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

@Form.create({fieldNameProp: null}) // 绑定form表单的装饰器
class FilterForm extends Component {
    constructor(props) {
        super(props);
        props.onRef(this);
        this.state = {
            loading: false,
            visible: false, // 控制登录弹窗是否弹出
        };
    }

    /**
     * 关闭弹窗
     */
    @Bind()
    handleCancel(){
        const { onCloseModal } = this.props;
        onCloseModal();
    }

    /**
     * 确认登录
     */
    @Bind()
    handleOk(){
        const { onLogin } = this.props;
        onLogin();
    }

    render() {
        const { visible=false, loading, form: { getFieldDecorator = {} } } = this.props;
        return (
            <Modal
                visible={visible}
                title="登录"
                onCancel={this.handleCancel}
                footer={null}
            >
                <Form>
                    <Row>
                        <Col>
                            <FormItem {...formItemLayout} label="账号">
                                {getFieldDecorator('username', {
                                    initialValue: undefined,
                                    rules: [
                                        {
                                            required: true,
                                            message: '账号不能为空',
                                        },
                                    ],
                                })(<Input prefix={<Icon type="user"  style={{ color: 'rgba(0,0,0,.25)' }} />} allowClear placeholder="支持手机号/邮箱/手机密码'" />)}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormItem {...formItemLayout} label="密码">
                                {getFieldDecorator('password', {
                                    initialValue: undefined,
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空',
                                        },
                                    ],
                                })(<Input prefix={<Icon type="lock"  style={{ color: 'rgba(0,0,0,.25)' }} />} allowClear type="password" placeholder="密码" />)}
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
                <div className={style['submit']}>
                    <Button type="primary" loading={loading} onClick={this.handleOk} block>登录</Button>
                </div>
            </Modal>
        )
    }
}

export default withRouter(FilterForm);

