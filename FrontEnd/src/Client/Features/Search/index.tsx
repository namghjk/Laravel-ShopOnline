import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Typography,
  Pagination,
  Tag,
  Button,
  Dropdown,
  Select,
  Spin,
} from "antd";
import SideBar from "./Components/Sidebar";
import styles from "./Search.module.scss";
import Product from "./Components/Product/Product";
import ProductApi from "../../Api/ProductApi";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import CategoryApi from "../../Api/CategoryApi";

const { Title, Text } = Typography;

const SearchPage = () => {
  const [data, setData] = useState<any[]>();
  const [SeachData, setSearchData] = useState<any[]>();
  const [isLoading, setLoading] = useState(false);
  const { search } = useLocation();
  const values = queryString.parse(search);

  console.log(values);
  useEffect(() => {
    const getAllProduct = async () => {
      const AllProduct = await (await ProductApi.getAllProduct()).data.data;
      setData(AllProduct);
    };
    getAllProduct();
  }, []);

  useEffect(() => {
    const getSearchProduct = async () => {
      setLoading(true);
      const SearchProduct = await CategoryApi.searchApi(
        values.keyword,
        values.maxprice,
        values.minprice,
        values.id !== "null" ? [values.id] : [],
        values.sort
      );

      setSearchData(SearchProduct.data.data);
      setLoading(false);
    };
    getSearchProduct();
  }, []);

  const [maxPrice, setmaxPrice] = useState<number>();
  const [minPrice, setminPrice] = useState<number>();
  const [category, setcategory] = useState<string[]>([]);
  const [sort, setsort] = useState("null");
  useEffect(() => {
    const searchCate = async () => {
      setLoading(true);
      const data = await (
        await CategoryApi.searchApi("", null, null, category, sort)
      ).data.data;
      console.log(category);
      setSearchData(data);
      setLoading(false);
    };
    searchCate();
  }, [category, sort]);

  const handleChange = (value: string) => {
    setsort(value);
  };

  console.log(SeachData);
  return (
    <div className={styles.Container}>
      <div className={styles.MainContainer}>
        <div style={{ width: "238px" }}>
          <SideBar category={category} setCategory={setcategory} />
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
          <div className={styles.ContextContainer}>
            <div className={styles.TagContainer}>
              {/* <Tag
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                width: "80px",
                height: "35px",
              }}
            >
              Tag X
            </Tag> */}
              <Select
                onChange={handleChange}
                defaultValue="null"
                options={[
                  { label: "Sắp xếp theo", value: "null" },
                  { label: "Giá: Tăng dần", value: "ASC" },
                  { label: "Giá: Giảm dần", value: "DESC" },
                ]}
                style={{ width: "200px" }}
              ></Select>
            </div>
            <div className={styles.ProductContainer}>
              <div className={styles.Product}>
                <Row gutter={48}>
                  {SeachData?.map((item) => (
                    <Col span={8} style={{ marginBottom: "15px" }}>
                      <Product
                        id={item.id}
                        thumbnail={item.thumbnail}
                        des={item.description}
                        price={item.price}
                        categoryId={item.category_id}
                        name={item.name}
                        slug={item.slug}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
              <div className={styles.Product}>
                <Row gutter={48}></Row>
              </div>
              <div className={styles.PaginationContainer}>
                <Pagination defaultCurrent={1} total={40} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
