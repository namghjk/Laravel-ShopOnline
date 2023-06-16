import React, { useEffect, useState } from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { Button, Input, Typography, Form, message } from "antd";
import styles from "./Login.module.scss";
import authAPI from "../../Api/AuthApi";

import { primaryColor, secondaryColor } from "../../Styles/global";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const Token = localStorage.getItem("userToken");
    console.log(Token);
    if (Token) {
      setIsLogin(true);
    }
    if (Token) {
      navigate(-1);
    }
  }, []);

  const onFinish = async (value: any) => {
    const data = await authAPI.login(value.username, value.password);
    console.log(data);
    if (data.data.code === 200) {
      message.info(data.data.message);
      setTimeout(() => {
        localStorage.setItem("userToken", data.data.data.access_token);
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div className={styles.SignUpContainer}>
      <Form onFinish={onFinish} name="logIn" layout="vertical">
        <div className={styles.TextContainer}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Title style={{ fontSize: "48px" }}>Đăng nhập</Title>
          </div>
          <div style={{ paddingLeft: "80px" }}>
            <Text style={{ fontSize: "18px" }}>
              Theo dõi đơn hàng & liên hệ với shop
            </Text>
          </div>
        </div>
        <div>
          <div className={styles.InputContainer}>
            <Form.Item
              required={false}
              label={<Text>Tên tài khoản</Text>}
              name="username"
              rules={[
                { required: true, message: "Xin hãy nhập tên tài khoản!" },
              ]}
            >
              <Input style={{ borderRadius: "0", height: "48px" }} />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              required={false}
              label={<Text>Mật khẩu</Text>}
              name="password"
              rules={[{ required: true, message: "Xin hãy nhập mật khẩu!" }]}
            >
              <Input.Password style={{ borderRadius: "0", height: "48px" }} />
            </Form.Item>
          </div>
          <div className={styles.ButtonContainer}>
            <div style={{ paddingBottom: "16px" }}>
              <Button
                style={{ height: "48px", width: "100%" }}
                htmlType="submit"
              >
                Đăng nhập
              </Button>
            </div>
            <div>
              <Button
                type="text"
                style={{ height: "48px", width: "100%", paddingTop: "20px" }}
              >
                Quên mật khẩu?
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
