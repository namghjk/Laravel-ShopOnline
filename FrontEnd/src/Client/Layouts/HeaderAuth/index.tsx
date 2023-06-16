import { Button, Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderAuth.module.scss";

const HeaderAuth = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.Container}>
        <div>
          <Image
            className={styles.logo}
            width={216}
            src="https://dogilypetshop.vn/wp-content/uploads/2020/09/dogily-logo.png"
            style={{ marginTop: "13px" }}
            preview={false}
          />
        </div>
        <div className={styles.ButtonContainer}>
          <div>
            {" "}
            <Link to="/Auth/SignUp">
              <Button type="text" style={{ paddingRight: "5px" }}>
                Bạn chưa có tài khoản? Đăng ký ngay
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderAuth;
