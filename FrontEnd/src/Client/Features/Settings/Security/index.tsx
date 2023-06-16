import { Button, Col, Form, Image, Input, Row, Select, Typography } from "antd";
import React from "react";
import styles from "./Security.module.scss";
import payment from "../../../Image/payment.png";
import { secondaryColor } from "../../../Styles/global";
import UpdateApi from "../../../Api/UpdateUser";

const { Title, Text } = Typography;

const onFinish = async (value: any) => {
  const data = await UpdateApi.changePassword(
    value.old_password,
    value.new_password,
    value.confirm_password
  );
  window.location.reload();
  console.log(data);
};
const Security = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.HeaderContainer}>
        <Title style={{ fontSize: "38" }}>Security</Title>
      </div>
      <Form layout="vertical" onFinish={onFinish}>
        <Row style={{ paddingTop: "39px" }}>
          <Col span={24}>
            <Form.Item
              name="old_password"
              label={
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    paddingBottom: "0px",
                  }}
                >
                  Password
                </span>
              }
            >
              <Input.Password style={{ height: "50px" }} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="new_password"
              label={
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    paddingBottom: "0px",
                  }}
                >
                  New Password
                </span>
              }
            >
              <Input.Password style={{ height: "50px" }} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="confirm_password"
              label={
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    paddingBottom: "0px",
                  }}
                >
                  Confirm Password
                </span>
              }
            >
              <Input.Password style={{ height: "50px" }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16} style={{ paddingTop: "39px" }}>
          <Col>
            <Button
              style={{
                width: "130px",
                height: "40px",
                backgroundColor: secondaryColor,
                borderColor: "black",
                color: "black",
                fontSize: "20px",
              }}
            >
              Cancel
            </Button>
          </Col>
          <Col>
            <Button
              style={{ width: "130px", height: "40px", fontSize: "20px" }}
              type="primary"
              htmlType="submit"
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Security;
