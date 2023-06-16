import { Button, Checkbox, Divider, Typography } from "antd";
import React, { FC, useEffect, useState } from "react";
import CategoryApi from "../../../../Api/CategoryApi";
import styles from "./Sidebar.module.scss";

const { Title, Text } = Typography;

interface cate {
  category: string[];
  setCategory: React.Dispatch<React.SetStateAction<string[]>>;
}

const SideBar: FC<cate> = (props) => {
  const [data, setdata] = useState<any[]>();

  useEffect(() => {
    const getCate = async () => {
      const cate = (await CategoryApi.getCategory()).data.data;
      console.log(cate);
      setdata(cate);
    };
    getCate();
  }, []);

  const CheckboxChange = (id: string) => {
    props.setCategory((b) => {
      const isCheck = props.category?.includes(id);
      if (isCheck) {
        return b.filter((c: any) => c !== id);
      } else {
        return [...b, id];
      }
    });
  };
  return (
    <div className={styles.Container}>
      <div>
        <div className={styles.FilterContainer1}>
          <Title style={{ fontSize: "18px", marginBottom: 0 }}>Filters</Title>
        </div>
        <div>
          <Text>Showing 0 of 100</Text>
        </div>
        <div className={styles.Filter1}>
          <div>All</div>
          {data?.map((item) => (
            <div className="">
              <Checkbox
                onChange={(e) => CheckboxChange(item.id)}
                checked={props.category.includes(item.id)}
              >
                <Text className={styles.text}>{item.name}</Text>
              </Checkbox>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider
          style={{
            backgroundColor: "Black",
            fontSize: "10px",
            width: "100px",
          }}
        />
      </div>
    </div>
  );
};

export default SideBar;
