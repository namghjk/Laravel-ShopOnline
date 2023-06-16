import {
  Avatar,
  Button,
  Col,
  Form,
  Image,
  Input,
  Row,
  Select,
  Typography,
  Divider,
  notification,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import styles from "./EditProfile.module.scss";
import { secondaryColor } from "../../../Styles/global";
import UpdateApi from "../../../Api/UpdateUser";
import userInforApi from "../../../Api/UserInforApi";
import { useForm } from "antd/lib/form/Form";

const { Title, Text } = Typography;

const EditProfile = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatar, setAvatar] = useState("");
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [avatarImage, setAvatarImage] = useState<any>(null);
  const [form] = useForm();
  useEffect(() => {
    const getuserInfor = async () => {
      setIsLoading(true);
      const userInfor = await (await userInforApi.getInfor()).data.data;
      setData(userInfor);
      form.setFieldsValue({
        name: userInfor.name,
        username: userInfor.username,
      });
      setAvatar("https://petshop-api.huukhuongit.com/" + userInfor.avatar);
      setIsLoading(false);
    };
    getuserInfor();
  }, []);

  const onFinish = async (value: any) => {
    setIsLoading(true);
    const data = await UpdateApi.changeUserInfor(
      value.username,
      value.name,
      value.password
    );
    console.log(data);
    message.info(data.data.message);
    setIsLoading(false);
  };

  const handleUploadFile = async (e: any) => {
    const formData = new FormData();
    formData.append("avatar", avatarImage);
    await userInforApi.updateAvatar(formData);
  };

  const handleOnchangeUploadInput = (e: any) => {
    setAvatarImage(e.target.files[0]);
    const avatar = e.target.files[0];
    const review = URL.createObjectURL(avatar);
    setAvatarUrl(review);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.HeaderContainer}>
        <div>
          <Title style={{ fontSize: "38" }}>Chỉnh sửa trang cá nhân</Title>
        </div>
        <div>
          <Avatar
            src={avatarUrl ? avatarUrl : avatar}
            style={{
              width: "115px",
              height: "108px",
              borderRadius: "13px",
            }}
          ></Avatar>
          <input
            type="file"
            // value={avatarImage}
            onChange={handleOnchangeUploadInput}
          />
          <Button onClick={handleUploadFile}>submit avatar</Button>
        </div>
      </div>
      <Form
        layout="vertical"
        onFinish={onFinish}
        form={form}
        disabled={isLoading}
      >
        <Row style={{ paddingTop: "39px" }}>
          <Col span={24}>
            <Form.Item
              label={
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    paddingBottom: "0px",
                  }}
                >
                  Full Name
                </span>
              }
            >
              <Form.Item name="name">
                <Input style={{ height: "50px", fontSize: "18px" }} />
              </Form.Item>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label={
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    paddingBottom: "0px",
                  }}
                >
                  UserName
                </span>
              }
            >
              <Form.Item name="username">
                <Input style={{ height: "50px", fontSize: "18px" }} />
              </Form.Item>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="password"
              required={false}
              rules={[
                {
                  required: true,
                  message: "Please input your password to change information !",
                },
              ]}
              label={
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    paddingBottom: "0px",
                  }}
                >
                  Password
                </span>
              }
            >
              <Input.Password style={{ height: "50px", fontSize: "18px" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} style={{ paddingTop: "39px" }}>
          <Col>
            <Button
              style={{
                width: "130px",
                height: "40px",
                backgroundColor: secondaryColor,
                borderColor: "black",
                color: "black",
              }}
            >
              Cancel
            </Button>
          </Col>
          <Col>
            <Button
              style={{ width: "130px", height: "40px" }}
              type="primary"
              htmlType="submit"
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EditProfile;
