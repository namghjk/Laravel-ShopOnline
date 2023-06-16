import React, { FC, useState } from "react";
import { Button, Image, message, Typography } from "antd";
import styles from "./Product.module.scss";
import Book2 from "../../../../Image/Book2.webp";
import DogFood from "../../../../Image/DogFood1.png";
import CartApi from "../../../../Api/CartApi";
import { formatNumber } from "../../../../Styles/global";
import { Data } from "iconsax-react";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

interface IProduct {
  id?: string;
  thumbnail?: string;
  des?: string;
  price?: number;
  categoryId?: string;
  name?: string;
  slug?: number;
}

// const onFinish = async (value: any) => {
//   const data = await UpdateApi.changeUserInfor(
//     value.username,
//     value.name,
//     value.password
//   );
//   console.log(data);
// };

const Product: FC<IProduct> = (props) => {
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
          preview={true}
          style={{
            height: "260px",
            width: "260px",
            objectFit: "cover",
            overflow: "hidden !important",
          }}
        />
      </div>
      <div className={styles.TextContainer}>
        <div style={{ paddingTop: "10px" }}>
          <Link to={`/ProductDetail?slug=${props.slug}`}>
            {" "}
            <Title className={styles.Title}>{props.name}</Title>
          </Link>
          <Text style={{ fontSize: "15px", color: "brown" }}>
            {" "}
            Giá bán:
            {formatNumber(props.price)} vnd
          </Text>
        </div>
      </div>
      <Button className={styles.Button} onClick={onclick}>
        Add cart
      </Button>
    </div>
  );
};

export default Product;
