import React, { useEffect, useState } from "react";
import { Button, Typography, Space, Table, Tag, Pagination, Spin } from "antd";
import styles from "./OrderDetail.module.scss";
import type { ColumnsType } from "antd/es/table";
import OrderApi from "../../../Api/OrderApi";
import moment from "moment";
import { formatNumber } from "../../../Styles/global";

const { Title, Text } = Typography;

//Table

interface OrderProduct {
  id: string;
  created_at: Date;
  status: string;
  total_pay: number;
}

interface DataType {
  key: string;
  ProductName: string;
  Date: string;
  Amount: string;
  Price: number;
}

const OrderHistory = () => {
  const [data, setData] = useState<OrderProduct[]>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getOrder = async () => {
      setLoading(true);
      const order = await (await OrderApi.getListOrder()).data;
      setData(order.data);
      console.log(data);
      setLoading(false);
    };
    getOrder();
  }, []);

  // // data
  // const data: OrderProduct[] = [];

  const columns: ColumnsType<OrderProduct> = [
    {
      title: "ProductName",
      dataIndex: "ProductName",
      key: "id",
      render: (_, { id }) => <div>{id}</div>,
    },
    {
      title: " Date",
      dataIndex: "Date",
      key: "create_at",
      render: (_, { created_at }) => (
        <div>{moment(created_at).format("DD/MM/YYYY HH:mm:ss")}</div>
      ),
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "total_pay",
      render: (_, { total_pay }) => <div>{formatNumber(total_pay)} vnd</div>,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "status",
      render: (_, { status }) => <div>{status}</div>,
    },
  ];

  return (
    <div className={styles.Container}>
      <div style={{ paddingBottom: "50px" }}>
        <Title>Lịch sử mua hàng</Title>
      </div>
      <div className={styles.ContentContainer}>
        <div className={styles.TableHeader}>
          <div style={{ paddingBottom: "24px" }}>
            <div>
              <Title style={{ fontSize: "20px" }}>Lịch sử mua hàng</Title>
            </div>
          </div>
        </div>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
              width: "100%",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <div>
            <Table columns={columns} dataSource={data} pagination={false} />
          </div>
        )}
      </div>
      <div className={styles.PaginationContainer}>
        <Pagination defaultCurrent={1} total={40}></Pagination>
      </div>
    </div>
  );
};

export default OrderHistory;
