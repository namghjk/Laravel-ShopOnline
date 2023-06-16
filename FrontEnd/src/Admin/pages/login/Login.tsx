import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { history } from '../../utils/common';

import { login } from '../../store/action/UserAction';
import { useUserState, useUserDispatch } from '../../store/context/UserContext';

// Styles
import style from './login.module.scss';
import classNames from 'classnames/bind';

// Componets
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';

// Icons

interface LoginModel {
    username: string;
    password: string;
}

const cx = classNames.bind(style);
function Login() {
    const navigate = useNavigate();
    let userDispatch = useUserDispatch();
    let userState = useUserState();
    const [isLoading, setIsloading] = useState(false);

    const handleLogin = async (value: LoginModel) => {
        userDispatch(await login(setIsloading, { username: value.username, password: value.password }));
    };

    useEffect(() => {
        if (userState.currentUser.message && userState.isAuthenticated) {
            // navigate('/admin/dashboard');
            window.location.reload();
            // sendNotification(userState.currentUser.message, 'success');
        } else if (userState.currentUser.message && !userState.isAuthenticated) {
            sendNotification(userState.currentUser.message, 'error');
        }
    }, [userState.currentUser]);

    return (
        <div className={cx('wrapper')}>
            <CustomToast />
            <Row align="middle" justify="center" className={cx('login-row')}>
                <Col className="gutter-row" xs={{ span: 20 }} lg={{ span: 6 }}>
                    <div className={cx('login-form')}>
                        <div className={cx('title')}>
                            <h3>Đăng nhập</h3>
                        </div>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 24 }}
                            initialValues={{ remember: true }}
                            autoComplete="off"
                            onFinish={handleLogin}
                        >
                            <Form.Item name="username" rules={[{ required: true, message: 'Chưa nhập tài khoản!' }]}>
                                <Input placeholder="Tài khoản" className={cx('form-input')} />
                            </Form.Item>

                            <Form.Item name="password" rules={[{ required: true, message: 'Chưa nhập mật khẩu!' }]}>
                                <Input.Password className={cx('form-input')} placeholder="Mật khẩu" />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 24 }}>
                                <Checkbox>Nhớ mật khẩu</Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 24 }}>
                                <Button
                                    type="primary"
                                    style={{ background: '#5e72e4', borderColor: '#5e72e4' }}
                                    className={cx('btn')}
                                    htmlType="submit"
                                    // onClick={handleLogin}
                                    loading={isLoading}
                                >
                                    đăng nhập
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Login;
