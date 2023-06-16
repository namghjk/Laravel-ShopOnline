import React from "react";
import { Button, Typography } from "antd";
import {
  BellOutlined,
  EditOutlined,
  LockOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styles from "./SideBar.module.scss";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const SideBar = () => {
  const onClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className={styles.SideBarContainer}>
      <div>
        <Title style={{ fontSize: "30px" }}>Cài đặt</Title>
      </div>
      <div className={styles.ButtonContainer} style={{ paddingTop: "59px" }}>
        <Link
          to="/Setting/EditProfile"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div style={{ paddingTop: "7px" }}>
            <EditOutlined style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div style={{ paddingLeft: "25px" }}>
            <Text style={{ fontSize: "24px", color: "grey" }}>
              Chỉnh sửa trang cá nhân
            </Text>
          </div>
        </Link>
      </div>
      <div className={styles.ButtonContainer}>
        <Link
          to="/Setting/OrderHistory"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div style={{ paddingTop: "7px" }}>
            <BellOutlined style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div style={{ paddingLeft: "25px" }}>
            <Text style={{ fontSize: "24px", color: "grey" }}>
              Lịch sử đặt hàng
            </Text>
          </div>
        </Link>
      </div>
      <div className={styles.ButtonContainer}>
        <Link
          to="/Setting/Security"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div style={{ paddingTop: "7px" }}>
            <LockOutlined style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div style={{ paddingLeft: "25px" }}>
            <Text style={{ fontSize: "24px", color: "grey" }}>
              Đổi mật khẩu
            </Text>
          </div>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginRight: "30px",
        }}
      >
        <Button
          type="primary"
          style={{ fontSize: "20px", height: "40px" }}
          onClick={onClick}
        >
          Đăng xuất
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
