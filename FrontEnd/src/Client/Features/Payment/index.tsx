import React, { FC } from "react";
import styles from "./Payment.module.scss";
import { Button, Checkbox, Image, Typography } from "antd";
import payment from "../../Image/payment.png";
import { LeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Payment = () => {
  return (
    <div className={styles.PaymentContainer}>
      <div className={styles.leftContainer}>
        <div>
          <Title>PAYMENT</Title>
        </div>
        <div className={styles.SelectionContainer}>
          <div
            className={styles.checkContainer}
            style={{ borderBottom: "0px" }}
          >
            <div style={{ paddingLeft: "12px" }}>
              <Checkbox />
              <Text
                style={{
                  paddingLeft: "21px",
                  fontSize: "18px",
                  fontStyle: "medium",
                }}
              >
                Cash on delivery
              </Text>
            </div>
          </div>
          <div className={styles.checkContainer}>
            <div style={{ paddingLeft: "12px" }}>
              <Checkbox />
              <Text
                style={{
                  paddingLeft: "21px",
                  fontSize: "18px",
                  fontStyle: "medium",
                }}
              >
                Napas
              </Text>
            </div>
          </div>
          <div className={styles.checkContainer}>
            <div style={{ paddingLeft: "12px" }}>
              <Checkbox />
              <Text
                style={{
                  paddingLeft: "21px",
                  fontSize: "18px",
                  fontStyle: "medium",
                }}
              >
                Paypal
              </Text>
            </div>
          </div>
          <div
            className={styles.checkContainer}
            style={{ borderRadius: "0", borderBottom: "1px solid #c4c4c4 " }}
          >
            <div style={{ paddingLeft: "12px" }}>
              <Checkbox />
              <Text
                style={{
                  paddingLeft: "21px",
                  fontSize: "18px",
                  fontStyle: "medium",
                }}
              >
                Debit / Credit Card
              </Text>
            </div>
          </div>
        </div>
        <div className={styles.ButtonContainer}>
          <div style={{ paddingTop: "8px" }}>
            <Button type="text">
              <LeftOutlined />
              Go back to checkout
            </Button>
          </div>
          <div>
            <Button
              style={{
                height: "45px",
                width: "270px",
                fontSize: "24px",
                fontStyle: "Bold",
              }}
            >
              PAY
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={payment}
          style={{ height: "481px", width: "680px", objectFit: "cover" }}
          preview={false}
        ></Image>
      </div>
    </div>
  );
};

export default Payment;
