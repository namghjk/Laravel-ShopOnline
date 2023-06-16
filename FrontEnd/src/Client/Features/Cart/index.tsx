import React, { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import {
  Typography,
  Row,
  Col,
  Checkbox,
  Image,
  InputNumber,
  Button,
  Spin,
} from "antd";
import DogFood1 from "../../Image/DogFood1.png";
import { CloseOutlined } from "@ant-design/icons";
import CartApi from "../../Api/CartApi";
import Product from "./Components/Product";
import { formatNumber } from "../../Styles/global";

const { Text, Title } = Typography;

const Cart = () => {
  const [isOrder, setIsOrder] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>();
  const getCartList = async () => {
    setLoading(true);
    const CartList = await (await CartApi.getCartList()).data.data;
    setData(CartList);
    setLoading(false);
  };
  useEffect(() => {
    getCartList();
  }, []);

  console.log(data);

  const onClickOrder = () => {
    if (!isOrder) {
      return;
    }
  };

  return (
    <div className={styles.CartContainer}>
      <div style={{ paddingBottom: "172px" }}>
        <div>
          <Title
            style={{
              fontSize: "48px",
              paddingBottom: "58px",
              paddingTop: "96px",
            }}
          >
            Cart
          </Title>
        </div>
        {isLoading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Spin size="large" />
          </div>
        ) : (
          <div>
            <Row style={{ paddingBottom: "15px" }}>
              <div style={{ width: "100%" }}>
                {data?.map((item, index) => {
                  if (item.product.deleted_at && isOrder) {
                    setIsOrder(false);
                  }
                  return (
                    <Product
                      key={index}
                      id={item.product.id}
                      thumbnail={item.product.thumbnail}
                      price={item.product.price_sale}
                      name={item.product.name}
                      quantity={item.quantity}
                      deleted_at={item.product.deleted_at}
                      getCartList={getCartList}
                    />
                  );
                })}
              </div>
            </Row>
          </div>
        )}
        <div className={styles.PayContainer}>
          <div>
            <Title style={{ fontSize: "30px" }}>Tổng cộng:</Title>
          </div>
          <div>
            <Title style={{ fontSize: "30px" }}>
              {formatNumber(
                data?.map((item) => item.price_sale).reduce((a, b) => a + b)
              )}{" "}
              vnd
            </Title>
          </div>
          <div>
            <Button
              style={{ width: "101px", height: "40px" }}
              disabled={!isOrder}
              onClick={onClickOrder}
              href="/Order"
            >
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.RelativeProduct}>
        <div style={{ paddingBottom: "43px" }}>
          <Title>Relative Product</Title>
        </div>
      </div>
    </div>
  );
};

export default Cart;
