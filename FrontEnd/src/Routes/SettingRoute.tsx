import { Col, Row } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import OrderHistory from "../Client/Features/Settings/OrderHistory";
import SideBar from "../Client/Features/Settings/Components/SideBar/SideBar";
import EditProfile from "../Client/Features/Settings/EditProfile";
import Security from "../Client/Features/Settings/Security";

const SettingRoute = () => {
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "240px" }}>
      <Row>
        {/* sidbar */}
        <Col span={5}>
          <SideBar></SideBar>
        </Col>
        {/* main contet */}
        <Col span={19}>
          <Routes>
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/Security" element={<Security />} />
            <Route path="/OrderHistory" element={<OrderHistory />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
};

export default SettingRoute;
