import { Image, Typography, Row, Col, Spin } from "antd";
import React, { useEffect, useState } from "react";

import styles from "./Home.module.scss";
import ProductHighlightItem from "./Components/Highlight/ProductHighlightItem";

import ProductApi from "../../Api/ProductApi";

const { Title, Text } = Typography;

const Home = () => {
  const [isLoading, setisLoading] = useState(false);
  const [dataHighlightProduct, setDataHighlightProduct] = useState<any[]>();

  useEffect(() => {
    const getHighlightProduct = async () => {
      setisLoading(true);
      const HighlightProduct = await (
        await ProductApi.getHighlightProduct()
      ).data.data;
      setDataHighlightProduct(HighlightProduct);
      setisLoading(false);
    };
    getHighlightProduct();
  }, []);

  console.log(dataHighlightProduct);

  return (
    <div className={styles.homeContainer}>
      {/* <div className={styles.sliderContainer}>
        <Carousel autoplay>
          {dataBanner?.map((item) => (
            <div key={item.id}>
              <h3 className={styles.contentStyle}>
                <Image
                  src={"https://petshop-api.huukhuongit.com/" + item.image_url}
                  preview={false}
                  style={{ objectFit: "fill" }}
                  width="100%"
                />
              </h3>
            </div>
          ))}
        </Carousel>
      </div> */}

      <div className={styles.introductionContainer}>
        <div className={styles.titleContainer}>
          <Title className={styles.title}>
            Welcome to <br />{" "}
            <Image
              style={{ height: "100px" }}
              preview={false}
              src="https://dogilypetshop.vn/wp-content/uploads/2020/09/dogily-logo.png"
            ></Image>
          </Title>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.descriptionText}>
            Dogily là chuỗi pet shop thú cưng Đồ dùng cho chó – Đồ dùng cho mèo
            tại Hà Nội, TP.HCM, Đà Nẵng và Hải Phòng với hệ thống nhiều chi
            nhánh cửa hàng thú cưng chuyên cung cấp đồ dùng, quần áo, thức ăn,
            sữa tắm, chuồng, vòng cổ xích và các phụ kiện cho Chó cảnh, Mèo
            cảnh, Cá cảnh. Cùng nhiều bài viết chia sẻ kinh nghiệm chăm sóc Thỏ
            cảnh, Chuột cảnh, Sóc cảnh, Chim cảnh, Bò sát cảnh hàng đầu tại Việt
            Nam. Địa chỉ nhận tắm spa, chăm sóc, cắt tỉa lông và trông giữ thú
            cưng chuyên nghiệp. Với chất lượng dịch vụ tốt nhất luôn được khách
            hàng tin tưởng sẽ là điểm đến lý tưởng và tuyệt vời dành cho vật
            nuôi.``
          </div>
        </div>
      </div>
      <div className={styles.hightlightContainer}>
        <div className={styles.ProductTitle}>
          <Title>Sản phẩm nổi bật</Title>
        </div>
        <div className={styles.productContainer}>
          {isLoading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Spin size="large" />
            </div>
          ) : (
            <Row gutter={48} style={{ paddingTop: "10px" }}>
              {dataHighlightProduct?.map((item, index) => (
                <Col span={8}>
                  <ProductHighlightItem
                    key={index}
                    id={item.id}
                    thumbnail={item.thumbnail}
                    price={item.price}
                    name={item.name}
                    slug={item.slug}
                  />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
