import React, { useEffect, useState, FC } from "react";
import { Image, Dropdown, Menu, Input } from "antd";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../Image/logo2.webp";
import Button from "antd-button-color";
import { AudioOutlined, DownOutlined, SmileOutlined } from "@ant-design/icons";
import { primaryColor } from "../../Styles/global";
import {
  BellOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CategoryApi from "../../Api/CategoryApi";

const onSearch = (value: string) => console.log(value);

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

interface MyMenu {
  id: string;
  name: string;
  slug: string;
  childrens: Children[];
}

interface Children {
  id: string;
  name: string;
  slug: string;
}

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [menuData, setMenuData] = useState<MyMenu[]>();

  useEffect(() => {
    const Token = localStorage.getItem("userToken");
    if (Token) {
      setIsLogin(true);
    }
  }, []);

  useEffect(() => {
    const getMenu = async () => {
      const menu = await (await CategoryApi.getMenu()).data.data;
      setMenuData(menu);
    };
    getMenu();
  }, []);

  const [dataSearch, setDataSearch] = useState("");
  const onSearch = async () => {
    setTimeout(() => {
      window.location.href = `/Search?id=${null}&&max_price=${null}&&min_price=${null}&&keyword=${dataSearch}&&sort=${null}`;
    }, 3000);
  };

  return (
    <nav className={styles.nav} style={{ backgroundColor: primaryColor }}>
      <div>
        <Link to="/">
          <Image
            className={styles.logo}
            width={216}
            style={{ marginTop: "13px" }}
            src="https://dogilypetshop.vn/wp-content/uploads/2020/09/dogily-logo.png"
            preview={false}
          />
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.linkContainer}>
          {menuData?.map((item) => (
            <div key={item.id}>
              {item.childrens.length > 0 ? (
                <Dropdown
                  overlay={
                    <Menu
                      items={item.childrens?.map((ChildrenItem) => {
                        return {
                          label: (
                            <a
                              href={`/Search?id=${
                                ChildrenItem.id
                              }&&max_price=${null}&&min_price=${null}&&keyword=${""}&&sort=${null}`}
                            >
                              {ChildrenItem.name}
                            </a>
                          ),
                          key: "0",
                        };
                      })}
                    />
                  }
                >
                  <a
                    className={styles.navLink}
                    href={`/Search?id=${
                      item.id
                    }&&max_price=${null}&&min_price=${null}&&keyword=${""}&&sort=${null}`}
                  >
                    {item.name} <DownOutlined />
                  </a>
                </Dropdown>
              ) : (
                <a
                  className={styles.navLink}
                  href={`/Search?id=${
                    item.id
                  }&&max_price=${null}&&min_price=${null}&&keyword=${""}&&sort=${null}`}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <Search
            size="large"
            placeholder="Nhập vào đây để tìm kiếm"
            className={styles.searchInput}
            onChange={(e) => {
              setDataSearch(e.target.value);
            }}
            onSearch={onSearch}
          />
        </div>
        <div style={{ width: "120px" }}>
          {isLogin ? (
            <div className={styles.iconContainer}>
              <div>
                <Link to="/Setting/EditProfile" style={{ color: "black" }}>
                  <UserOutlined style={{ fontSize: "22px" }} />
                </Link>
              </div>
              <div>
                <Link to="" style={{ color: "black" }}>
                  <BellOutlined style={{ fontSize: "22px" }} />
                </Link>
              </div>
              <div>
                <Link to="/Cart" style={{ color: "black" }}>
                  <ShoppingCartOutlined style={{ fontSize: "22px" }} />
                </Link>
              </div>
            </div>
          ) : (
            <Link to={"/Auth/Login"}>
              <Button
                type="primary"
                style={{
                  backgroundColor: "#FF3D00",
                  borderColor: "black",
                  width: "88px",
                  height: "40px",
                }}
              >
                Sign in
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
