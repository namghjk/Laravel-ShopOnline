import React from "react";
import { Button, Typography, Space, Table, Tag, Pagination } from "antd";
import styles from "./OrderDetail.module.scss";
import type { ColumnsType } from "antd/es/table";

const { Title, Text } = Typography;

//Table

interface DataType {
  key: string;
  ProductName: string;

  Amount: string;
  Price: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "ProductName",
    dataIndex: "ProductName",
    key: "productName",
    width: "60%",
  },

  {
    title: "Amount",
    dataIndex: "Amount",
    key: "amount",
    width: "20%",
  },
  {
    title: "Price",
    dataIndex: "Price",
    key: "price",
    width: "20%",
  },
];

// data
const data: DataType[] = [
  {
    key: "1",
    ProductName: "Làm đĩ",

    Amount: "10",
    Price: 100000,
  },
  {
    key: "2",
    ProductName: "Làm đĩ",

    Amount: "10",
    Price: 100000,
  },
  {
    key: "3",
    ProductName: "Làm đĩ",

    Amount: "10",
    Price: 100000,
  },
  {
    key: "4",
    ProductName: "Làm đĩ",

    Amount: "10",
    Price: 100000,
  },
  {
    key: "5",
    ProductName: "Làm đĩ",

    Amount: "10",
    Price: 100000,
  },
];

const OrderDetail = () => {
  return (
    <div className={styles.Container}>
      <div style={{ paddingBottom: "100px" }}>
        <Title>Order Detail</Title>
      </div>
      <div className={styles.ContentContainer}>
        <div className={styles.TableHeader}>
          <div style={{ paddingBottom: "24px" }}>
            <div>
              <Title style={{ fontSize: "20px" }}>OrderDetail</Title>
            </div>
            <div>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </div>
          </div>
          <div style={{ paddingTop: "0" }}>
            <Button>Print</Button>
            <Button>Reorder</Button>
          </div>
        </div>
        <div>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
      <div className={styles.PaginationContainer}>
        <Pagination defaultCurrent={1} total={40}></Pagination>
      </div>
    </div>
  );
};

export default OrderDetail;
