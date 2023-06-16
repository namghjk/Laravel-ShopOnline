import React from "react";
import { Button, Form, Input, message, Typography } from "antd";
import styles from "./SignUp.module.scss";
import { GoogleOutlined } from "@ant-design/icons";
import authAPI from "../../Api/AuthApi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

const SignUp = () => {
  const navigate = useNavigate();
  const onFinish = async (value: any) => {
    if (value.password == value.confirm_password) {
      const data = await authAPI.register(
        value.name,
        value.username,
        value.password
      );
      message.info(data.data.message);
      setTimeout(() => {
        localStorage.setItem("userToken", data.data.data.access_token);
        navigate("/Auth/Login");
      }, 3000);
      console.log(data);
    } else {
      message.info("Mật khẩu không khớp");
    }
  };
  return (
    <div className={styles.SignUpContainer}>
      <Form onFinish={onFinish} name="SignUp">
        <div className={styles.TextContainer}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Title style={{ fontSize: "48px" }}>Đăng ký</Title>
          </div>
          <div style={{ paddingLeft: "80px" }}>
            <Text style={{ fontSize: "18px" }}>
              Đăng ký để nhận được nhiều ưu đại
            </Text>
          </div>
        </div>
        <div>
          <div className={styles.InputContainer}>
            <div style={{ paddingBottom: "8px" }}>
              <Text>Tên</Text>
            </div>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Xin hãy điền tên vào !" }]}
            >
              <Input style={{ borderRadius: "0", height: "48px" }} />
            </Form.Item>
          </div>
          <div className={styles.InputContainer}>
            <div style={{ paddingBottom: "8px" }}>
              <Text>Tên người dùng</Text>
            </div>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Xin hãy điền tên tài khoản vào!" },
              ]}
            >
              <Input style={{ borderRadius: "0", height: "48px" }} />
            </Form.Item>
          </div>
          <div>
            <div style={{ paddingBottom: "8px" }}>
              <Text>Mật khẩu</Text>
            </div>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Xin hãy điền mật khẩu vào!" },
              ]}
            >
              <Input.Password style={{ borderRadius: "0", height: "48px" }} />
            </Form.Item>
          </div>
          <div>
            <div style={{ paddingBottom: "8px" }}>
              <Text>Nhập lại mật khẩu</Text>
            </div>
            <Form.Item name="confirm_password">
              <Input.Password style={{ borderRadius: "0", height: "48px" }} />
            </Form.Item>
          </div>
          <div className={styles.ButtonContainer}>
            <div style={{ paddingBottom: "16px" }}>
              <Button
                style={{ height: "48px", width: "100%" }}
                htmlType="submit"
              >
                Đăng ký
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Link
                to="/Auth/Login"
                style={{ fontSize: "20px", color: "black" }}
              >
                Bạn đã có tài khoản? Quay về trang đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
