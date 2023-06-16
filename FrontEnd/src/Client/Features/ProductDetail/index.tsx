import React, { useEffect, useState } from "react";
import styles from "./ProductDetail.module.scss";
import {
  Breadcrumb,
  Button,
  Col,
  Image,
  message,
  Row,
  Spin,
  Typography,
} from "antd";
import DogFood1 from "../../Image/DogFood1.png";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import ProductApi from "../../Api/ProductApi";
import { formatNumber } from "../../Styles/global";
import CartApi from "../../Api/CartApi";

const { Title, Text } = Typography;

const ProductDetail = () => {
  const { search } = useLocation();
  const values = queryString.parse(search);

  console.log(search);

  const [data, setdata] = useState<any>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getDetail = async () => {
      setLoading(true);
      const detail = await (
        await ProductApi.getProductDetail(values.slug)
      ).data.data;
      setdata(detail);
      console.log(detail);
      setLoading(false);
    };

    getDetail();
  }, []);

  const onclick = async () => {
    const quantity = 1;
    if (data?.id) {
      const data2 = await CartApi.AddProductToCart(data?.id, quantity);
      console.log(data2);
      message.info(data2.data.message);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <div className={styles.Container}>
          <div className={styles.ContainerDetail}>
            <div className={styles.Detail}>
              <div></div>
              <div>
                <Title
                  style={{
                    fontSize: "40px",
                    margin: "0",
                    marginBottom: "30px",
                  }}
                >
                  {data?.name}
                </Title>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Title
                  style={{
                    fontSize: "30px",
                    margin: " 0 30px",
                    color: "brown",
                  }}
                >
                  Giá bán: {formatNumber(data?.price)} vnd
                </Title>
              </div>
              <div className={styles.ButtonContainer}>
                <div style={{ paddingBottom: "16px" }}>
                  <Button
                    style={{
                      width: "332px",
                      height: "48px",
                      marginTop: "10px",
                    }}
                    onClick={onclick}
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              </div>
              <div>
                <Title>Mô tả sản phẩm </Title>
                <Text>{data?.description}</Text>
              </div>
            </div>
            <div
              style={{ width: "488px", height: "490px", alignSelf: "center" }}
            >
              <Image
                src={`https://petshop-api.huukhuongit.com/${data?.thumbnail}`}
                preview={false}
                style={{ width: "100%", height: "100%" }}
                rootClassName={styles.Image}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
