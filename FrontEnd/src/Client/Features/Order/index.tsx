import React, { useEffect, useState } from "react";
import {
  Typography,
  Row,
  Col,
  Image,
  Checkbox,
  Button,
  InputNumber,
  Form,
  Input,
  Select,
  Modal,
  message,
  Spin,
} from "antd";
import styles from "./Order.module.scss";
import { Link } from "react-router-dom";
import LocationApi from "../../Api/LocationApi";
import { useForm } from "antd/lib/form/Form";
import Product from "./Components/Product";
import CartApi from "../../Api/CartApi";
import addressApi from "../../Api/AddressApi";
import { CloseOutlined } from "@ant-design/icons";
import OrderApi from "../../Api/OrderApi";

const { TextArea } = Input;
const { Title, Text } = Typography;

const Order = () => {
  const [provice, setProvices] = useState<any[] | null>(null);
  const [district, setDistrict] = useState<any[] | null>(null);
  const [ward, setWard] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);

  const [address, setAddress] = useState<any[]>();
  const [addressSelected, setAddressSelected] = useState<any>();

  useEffect(() => {
    getAddress();
  }, []);

  const [isloading, setisLoading] = useState(false);

  const getAddress = async () => {
    setisLoading(true);
    const address = (await addressApi.getAddress()).data.data;
    setAddress(address);
    setisLoading(false);
    if (address.length > 0) {
      setAddressSelected(address[0]);
    } else {
      setAddressSelected(undefined);
    }
  };

  const [form] = useForm();

  const [data, setData] = useState<any[]>();

  useEffect(() => {
    const getCartList = async () => {
      setisLoading(true);
      const CartList = await (await CartApi.getCartList()).data.data;
      setData(CartList);
      setisLoading(false);
    };
    getCartList();
  }, []);
  console.log(data);

  useEffect(() => {
    const getProvicesData = async () => {
      setLoading(true);
      const data = await LocationApi.getProvice();
      setProvices(data.data.data);
      setLoading(false);
    };
    getProvicesData();
  }, []);

  useEffect(() => {
    const getDistrictData = async () => {
      const proviceData = await form.getFieldValue("provice");
      if (proviceData) {
        const data = await LocationApi.getDistrict(proviceData as number);
        setDistrict(data.data.data);
      }
    };

    getDistrictData();
  }, [provice]);

  useEffect(() => {
    const getWardData = async () => {
      const districtData = await form.getFieldValue("district");
      if (districtData) {
        const data = await LocationApi.getWards(districtData as number);
        setWard(data.data.data);
        console.log(data.data);
      }
    };

    getWardData();
  }, [district]);

  const handleOnChangeProvice = async (data: any) => {
    const proviceData = await form.getFieldValue("provice");
    if (proviceData) {
      const data = await LocationApi.getDistrict(proviceData as number);
      setDistrict(data.data.data);
    }
  };

  const handleOnChangeDistrict = async (data: any) => {
    const districtData = await form.getFieldValue("district");
    if (districtData) {
      const data = await LocationApi.getDistrict(districtData as number);
      setDistrict(data.data.data);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModelOpen1, setIsModalOpen1] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModal1 = () => {
    getAddress();
    setIsModalOpen1(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleOk1 = async (value: any) => {
    const data = await addressApi.addAddress(
      form.getFieldValue("phone_number"),
      form.getFieldValue("provice"),
      form.getFieldValue("district"),
      form.getFieldValue("ward"),
      form.getFieldValue("detail_address")
    );
    console.log(data);
    message.config(data.data.message);
    getAddress();
    setIsModalOpen1(false);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  const onClickSetAddress = (item: any) => {
    setAddressSelected(item);
    setIsModalOpen(false);
  };

  const addNewAddressClick = () => {
    setIsModalOpen(false);
    setIsModalOpen1(true);
  };

  const onClickDelete = async (item: any) => {
    const data = await addressApi.deleteAddress(item);
    message.info(data.data.message);
    console.log(data);
    getAddress();
  };

  const [note, setNote] = useState("");

  const hanldeOrder = async () => {
    const order = await OrderApi.addOrder(addressSelected.id, note, data);
    console.log(order);
    message.info(order.data.message);
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  return (
    <div className={styles.OderContainer}>
      {isloading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <div className={styles.ContentContainer}>
          <div className={styles.ProductContainer}>
            {data?.map((item, index) => (
              <Row style={{ paddingBottom: "15px" }}>
                <Col span={8}>
                  <Product
                    key={index}
                    id={item.product.id}
                    thumbnail={item.product.thumbnail}
                    price={item.product.price}
                    name={item.product.name}
                    quantity={item.quantity}
                  />
                </Col>
              </Row>
            ))}
          </div>
          <div className={styles.InputContainer}>
            {address?.length == 0 && addressSelected == undefined ? (
              <div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        backgroundColor: "#ff7043",
                        marginBottom: "15px",
                        height: "100px",
                        width: "300px",
                        justifyContent: "center",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ alignItems: "center", display: "flex" }}>
                        <Text
                          onClick={showModal}
                          style={{ marginRight: "10px", cursor: "pointer" }}
                        >
                          Thêm địa chỉ mới
                        </Text>
                      </div>
                    </div>
                    <Modal
                      title="Basic Modal"
                      open={isModalOpen}
                      onCancel={handleCancel}
                      forceRender
                      footer={[
                        <Button
                          type="primary"
                          htmlType="submit"
                          onClick={handleOk1}
                        >
                          Thêm địa chỉ
                        </Button>,
                      ]}
                    >
                      <Form layout="vertical" form={form} onFinish={handleOk1}>
                        <Row gutter={24}>
                          <Col span={24}>
                            <Form.Item
                              label="Số điện thoại *"
                              name="phone_number"
                            >
                              <Input
                                size="large"
                                placeholder="Nhập số điện thoại"
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={24}>
                          <Col span={24}>
                            <Form.Item name="provice" label="Thành phố/Tỉnh*">
                              <Select
                                loading={loading}
                                size="large"
                                onChange={handleOnChangeProvice}
                                placeholder="Chọn thành phố"
                              >
                                {provice?.map((item) => (
                                  <Select.Option value={item.id}>
                                    {item.name}
                                  </Select.Option>
                                ))}
                              </Select>
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={24}>
                          <Col span={24}>
                            <Form.Item label="Quận/Huyện*" name="district">
                              <Select
                                loading={loading}
                                size="large"
                                onChange={handleOnChangeDistrict}
                                placeholder="Chọn quận/huyện"
                              >
                                {district?.map((item) => (
                                  <Select.Option value={item.id}>
                                    {item.name}
                                  </Select.Option>
                                ))}
                              </Select>
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={24}>
                            <Form.Item label="Phường/Xã*" name="ward">
                              <Select
                                loading={loading}
                                size="large"
                                placeholder="Chọn phường/xã"
                              >
                                {ward?.map((item) => (
                                  <Select.Option value={item.id}>
                                    {item.name}
                                  </Select.Option>
                                ))}
                              </Select>
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={24}>
                            <Form.Item label="Địa chỉ*" name="detail_address">
                              <Input
                                size="large"
                                placeholder="Nhập địa chỉ cụ thể"
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Form>
                    </Modal>
                    ;
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      backgroundColor: "#ff7043",
                      marginBottom: "15px",
                      height: "100px",
                      width: "300px",
                      justifyContent: "space-between",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ marginLeft: "10px" }}>
                        {addressSelected?.phone_number}
                      </Text>
                      <Text style={{ marginLeft: "10px" }}>
                        {addressSelected?.title}
                      </Text>
                      <div style={{ marginLeft: "10px" }}>
                        <Text>{addressSelected?.detail_address}</Text>
                      </div>
                    </div>

                    <div style={{ alignItems: "center", display: "flex" }}>
                      <Text
                        onClick={showModal}
                        style={{ marginRight: "10px", cursor: "pointer" }}
                      >
                        Chọn địa chỉ
                      </Text>
                    </div>
                  </div>
                  <Modal
                    title="Danh sách địa chỉ"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                      <Button
                        key="add"
                        type="primary"
                        onClick={addNewAddressClick}
                      >
                        Thêm địa chỉ mới
                      </Button>,
                    ]}
                  >
                    {address?.map((item) => (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          backgroundColor: "#ff7043",
                          marginBottom: "15px",
                          height: "100px",
                          width: "300px",
                          justifyContent: "space-between",
                          borderRadius: "10px",
                          cursor: "pointer",
                        }}
                        key={item.id}
                        onClick={() => onClickSetAddress(item)}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Text style={{ marginLeft: "10px" }}>
                            {item.phone_number}
                          </Text>
                          <Text style={{ marginLeft: "10px" }}>
                            {item.title}
                          </Text>
                          <div style={{ marginLeft: "10px" }}>
                            <Text>{item.detail_address}</Text>
                          </div>
                        </div>
                        <div
                          style={{
                            justifyContent: "center",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Button
                            shape="circle"
                            onClick={() => onClickDelete(item.id)}
                            icon={<CloseOutlined />}
                            style={{ marginRight: "10px" }}
                          />
                        </div>
                      </div>
                    ))}
                  </Modal>
                  <Modal
                    title="Basic Modal"
                    open={isModelOpen1}
                    onCancel={handleCancel1}
                    forceRender
                    footer={[
                      <Button
                        type="primary"
                        htmlType="submit"
                        onClick={handleOk1}
                      >
                        Thêm địa chỉ
                      </Button>,
                    ]}
                  >
                    <Form layout="vertical" form={form} onFinish={handleOk1}>
                      <Row gutter={24}>
                        <Col span={24}>
                          <Form.Item
                            label="Số điện thoại *"
                            name="phone_number"
                          >
                            <Input
                              size="large"
                              placeholder="Nhập số điện thoại"
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={24}>
                        <Col span={24}>
                          <Form.Item name="provice" label="Thành phố/Tỉnh*">
                            <Select
                              loading={loading}
                              size="large"
                              onChange={handleOnChangeProvice}
                              placeholder="Chọn thành phố/tỉnh"
                            >
                              {provice?.map((item) => (
                                <Select.Option value={item.id}>
                                  {item.name}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={24}>
                        <Col span={24}>
                          <Form.Item label="Quận/Huyện*" name="district">
                            <Select
                              loading={loading}
                              size="large"
                              onChange={handleOnChangeDistrict}
                              placeholder="Chọn quận/huyện"
                            >
                              {district?.map((item) => (
                                <Select.Option value={item.id}>
                                  {item.name}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <Form.Item label="Phường/Xã*" name="ward">
                            <Select
                              loading={loading}
                              size="large"
                              placeholder="Chọn phường/xã"
                            >
                              {ward?.map((item) => (
                                <Select.Option value={item.id}>
                                  {item.name}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <Form.Item label="Địa chỉ*" name="detail_address">
                            <Input
                              size="large"
                              placeholder="Nhập địa chỉ cụ thể"
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </Modal>
                </div>
              </div>
            )}

            <div>
              <Title>Note</Title>
              <div>
                <TextArea
                  style={{ height: "180px", textAlign: "match-parent" }}
                  placeholder="Nhập thêm ghi chú..."
                  rows={4}
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                ></TextArea>
              </div>
            </div>

            <div style={{ paddingTop: "10px" }}>
              <Button
                style={{ width: "88px", height: "48px" }}
                onClick={hanldeOrder}
              >
                Order
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
