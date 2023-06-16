import React, { FC } from "react";
import { Button, Image, message, Typography } from "antd";
import DogFood from "../../../../Image/DogFood1.png";
import styles from "./Product.module.scss";
import { formatNumber } from "../../../../Styles/global";
import CartApi from "../../../../Api/CartApi";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

interface HighlightProduct {
  id?: string;
  name?: string;
  thumbnail?: string;
  price?: number;
  slug?: number;
}

const ProductHighlightItem: FC<HighlightProduct> = (props) => {
  const onclick = async () => {
    const quantity = 1;
    if (props.id) {
      const data = await CartApi.AddProductToCart(props.id, quantity);
      console.log(data);
      message.info(data.data.message);
    }
  };
  return (
    <div className={styles.Product}>
      <div>
        <Image
          src={`https://petshop-api.huukhuongit.com/${props.thumbnail}`}
          preview={false}
          style={{
            height: "400.328px",
            width: "400.328px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.TextContainer}>
        <Link to={`/ProductDetail?slug=${props.slug}`}>
          {" "}
          <Title className={styles.Title}>{props.name}</Title>
        </Link>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <Text
              className={styles.Price}
              style={{ fontSize: "20px", color: "brown" }}
            >
              {" "}
              Giá bán: {formatNumber(props.price)} vnd
            </Text>
          </div>
        </div>
      </div>
      <Button block className={styles.Button} onClick={onclick}>
        Thêm vào giỏ hàng
      </Button>
    </div>
  );
};

export default ProductHighlightItem;
