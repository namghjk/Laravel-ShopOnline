import { Checkbox, Typography, Image, InputNumber, Button } from "antd";
import React, { FC, useState } from "react";
import styles from "./Product.module.scss";
import DogFood1 from "../../../../Image/DogFood1.png";
import { CloseOutlined } from "@ant-design/icons";

import { ArrowFunction } from "typescript";
import CartApi from "../../../Api/CartApi";
import { formatNumber } from "../../../Styles/global";
const { Text, Title } = Typography;

interface IProduct {
  id?: string;
  thumbnail?: string;
  price?: number;
  name?: string;
  quantity?: number;
}

const Product: FC<IProduct> = (props) => {
  return (
    <div className={styles.Container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingRight: "80px",
        }}
      >
        <div>
          <Image
            src={`https://petshop-api.huukhuongit.com/${props.thumbnail}`}
            style={{
              width: "160px",
              height: "105px",
              objectFit: "cover",
              marginLeft: "10px",
            }}
            preview={false}
          />
        </div>
        <div
          className="flexCenter"
          style={{ paddingLeft: "24px", width: "200px" }}
        >
          <Text>{props.name}</Text>
        </div>
      </div>

      <div className="flexCenter">
        <InputNumber
          disabled={true}
          min={1}
          max={10}
          defaultValue={props.quantity}
        />
      </div>
      <div className="flexCenter">
        <Text
          style={{
            fontSize: "25px",
            whiteSpace: "nowrap",
            paddingLeft: "20px",
          }}
        >
          {formatNumber(props.price)} vnd
        </Text>
      </div>
    </div>
  );
};

export default Product;
