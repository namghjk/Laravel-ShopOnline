import React from "react";
import styles from "./Footer.module.scss";
import { Col, Image, Row, Typography, Divider, Button } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Text } = Typography;

const Footer = () => {
  return (
    <footer>
      <div className={styles.containerContext}>
        <div className={styles.detailContainer}>
          <Image
            className={styles.logo}
            width={216}
            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/logo/fahasa_logo.png"
            preview={false}
          />
          <div className={styles.addressContainer}>
            <Text strong>Địa chỉ: </Text>

            <Text>123 Nguyễn Huệ, Quận 1, Tphcm</Text>
          </div>
          <div className={styles.contactContainer}>
            <Text strong>Contact: Mr Khuong</Text>
            <br />
            <Text>phone: 094522744</Text>
            <br />
            <Text>mail: </Text>
          </div>
        </div>
      </div>
      <div className={styles.SocialLink}>
        <FacebookOutlined
          style={{
            fontSize: "24px",
            paddingRight: "5px",
          }}
        />
        <InstagramOutlined style={{ fontSize: "24px", paddingRight: "5px" }} />
        <TwitterOutlined style={{ fontSize: "24px", paddingRight: "5px" }} />
        <LinkedinOutlined style={{ fontSize: "24px" }} />
      </div>
      <div style={{ padding: " 0 64px" }}>
        <Divider
          style={{
            backgroundColor: "Black",
            fontSize: "10px",
          }}
        />
      </div>
      <div className={styles.containerCopyRight}>
        <div>All right reserved.</div>
        <div>
          <Link
            to=""
            style={{ textDecorationLine: "underline", paddingRight: "24px" }}
          >
            Privacy Policy
          </Link>
          <Link to="" style={{ textDecorationLine: "underline" }}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
