import {
  Checkbox,
  Typography,
  Image,
  InputNumber,
  Button,
  message,
} from "antd";
import React, { FC, useState } from "react";
import styles from "./Product.module.scss";
import DogFood1 from "../../../../Image/DogFood1.png";
import { CloseOutlined } from "@ant-design/icons";
import { formatNumber } from "../../../../Styles/global";
import CartApi from "../../../../Api/CartApi";
import { ArrowFunction } from "typescript";
const { Text, Title } = Typography;

interface IProduct {
  id?: string;
  thumbnail?: string;
  price?: number;
  name?: string;
  quantity?: number;
  deleted_at?: Date;
  getCartList: () => void;
}

const Product: FC<IProduct> = (props) => {
  const [loading, isLoading] = useState(false);

  const onChangeQuantity = async (value: number | null) => {
    if (props.id && value) {
      isLoading(true);
      const data = await CartApi.UpdateProductQuantity(props.id, value);
      isLoading(false);
      console.log(data);
    }
  };

  const onClickDelete = async () => {
    if (props.id) {
      isLoading(true);
      const data = await CartApi.DeleteProductFromCart(props.id);
      message.info(data.data.message);
      isLoading(false);
      console.log(data);
      await props.getCartList();
    }
  };

  return (
    <div
      style={{
        backgroundColor: props.deleted_at ? "#CCC" : "#FFF",
        position: "relative",
      }}
    >
      <div className={styles.Container}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingRight: "300px",
            flex: 1,
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
          <div className="flexCenter" style={{ paddingLeft: "24px" }}>
            <Text>{props.name}</Text>
          </div>
        </div>
        <div className="flexCenter" style={{ paddingRight: "100px" }}>
          <InputNumber
            disabled={loading}
            min={1}
            max={10}
            defaultValue={props.quantity}
            onChange={onChangeQuantity}
          />
        </div>
        <div className="flexCenter">
          <Text
            style={{
              fontSize: "25px",
              whiteSpace: "nowrap",
              width: "100px",
              right: "20px",
            }}
          >
            {formatNumber(props.price)} vnd
          </Text>
        </div>
        {props.deleted_at ? (
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              right: "0px",
              bottom: "0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "red",
            }}
          >
            San pham k ton tai
          </div>
        ) : null}
        <div
          className="flexCenter"
          style={{ marginLeft: "30px", width: "100px" }}
        >
          <Button
            shape="circle"
            onClick={onClickDelete}
            icon={<CloseOutlined />}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
