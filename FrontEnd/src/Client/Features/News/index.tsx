import { Button, Image, Input, Typography } from "antd";
import React from "react";
import Anh1 from "../../Image/123.jpg";
import Fahasa1 from "../../Image/Fahasa1.jpeg";
import styles from "./News.module.scss";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Translate } from "iconsax-react";

const { Text, Title } = Typography;

const News = () => {
  return (
    <div>
      <div className={styles.HeaderContainer}>
        <div className={styles.ImageContainer}></div>
        <div className={styles.TextContainer}>
          <Title>Blog title heading will go here</Title>
          <Text>
            1cspkbyiuwbecibwivbeiuvbniewbviwbvcikhjwqbvchijqbvchiqbchiqbchjikqbvchkqb
            hjcqvgjsbnkvbuiwdbcvhjkasdbhjksdb vhjds
          </Text>
        </div>
      </div>
      <div className={styles.MainContainer}>
        <div>
          <div className={styles.IconContainer}>
            <FacebookOutlined
              style={{ fontSize: "24px", paddingRight: "5px" }}
            />
            <InstagramOutlined
              style={{ fontSize: "24px", paddingRight: "5px" }}
            />
            <TwitterOutlined
              style={{ fontSize: "24px", paddingRight: "5px" }}
            />
            <LinkedinOutlined style={{ fontSize: "24px" }} />
          </div>
          <div>
            <div>
              <Title>Introduction</Title>
            </div>
            <div>
              <Text style={{ fontStyle: "italic" }}>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis.
                Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                Mauris posuere vulputate arcu amet, vitae nisi, tellus
                tincidunt. At feugiat sapien varius id.
              </Text>
              <br />
              <Text>
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                volutpat mollis at volutpat lectus velit, sed auctor. Porttitor
                fames arcu quis fusce augue enim. Quis at habitant diam at.
                Suscipit tristique risus, at donec. In turpis vel et quam
                imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
              </Text>
            </div>
          </div>
        </div>
        <div className={styles.MainImage}>
          <Image
            src={Anh1}
            style={{ height: "400px", width: "100%" }}
            preview={false}
          />
          <div className={styles.imageDescriptionWrapper}>
            <div className={styles.imageDescriptionBorder}></div>
            <Text style={{ fontStyle: "italic" }}>Image caption goes here</Text>
          </div>
        </div>
        <div>
          <Title style={{ fontSize: "20px" }}>
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
            odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada
            fringilla.
          </Title>
          <div style={{ paddingBottom: "36px" }}>
            <Text>
              Collaboratively deploy intuitive partnerships whereas customized
              e-markets. Energistically maintain performance based strategic
              theme areas whereas just in time methodologies. Phosfluorescently
              drive functionalized intellectual capital and.
            </Text>
          </div>
          <div className={styles.imageDescriptionWrapper}>
            <div className={styles.imageDescriptionBorder}></div>
            <Text style={{ fontStyle: "italic" }}>
              "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus."
            </Text>
          </div>
          <div style={{ paddingTop: "32px" }}>
            <Text>
              Tristique odio senectus nam posuere ornare leo metus, ultricies.
              Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
              Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
              suscipit accumsan. Cursus viverra aenean magna risus elementum
              faucibus molestie pellentesque. Arcu ultricies sed mauris
              vestibulum.
            </Text>
          </div>
        </div>
        <div>
          <div style={{ padding: "24px 0" }}>
            <Title style={{ fontSize: "32px" }}>Conclusion</Title>
          </div>
          <div style={{ paddingBottom: "16px" }}>
            <Text>
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse.
            </Text>
          </div>
          <div style={{ paddingBottom: "16px" }}>
            <Text>
              Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
              condimentum mi massa. In tincidunt pharetra consectetur sed duis
              facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
              dictum eget nibh tortor commodo cursus.
            </Text>
          </div>
          <div style={{ paddingBottom: "16px" }}>
            <Text>
              Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
              aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
              id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
              dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
              tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere
              gravida enim posuere cursus diam.
            </Text>
          </div>
        </div>
        <div></div>
      </div>
      <div className={styles.FooterContainer}>
        <div>
          <Text style={{ fontSize: "18px" }}>
            Enter your email to receive the latest information and promotions.
          </Text>
        </div>
        <div className={styles.ButtonContainer}>
          <div>
            <Input
              placeholder="Enter your email"
              style={{ width: "370px", borderRadius: 0, height: "48px" }}
            ></Input>
          </div>
          <div style={{ paddingLeft: "16px" }}>
            <Button
              type="primary"
              style={{
                height: "48px",
                width: "119px",
              }}
            >
              Subcribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
