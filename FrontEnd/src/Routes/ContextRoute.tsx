import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Client/Features/Cart";
import Home from "../Client/Features/Home";
import News from "../Client/Features/News";
import Order from "../Client/Features/Order";
import OrderDetail from "../Client/Features/OrderDetail";
import OrderHistory from "../Client/Features/Settings/OrderHistory";
import Payment from "../Client/Features/Payment";
import ProductDetail from "../Client/Features/ProductDetail";
import SearchPage from "../Client/Features/Search";
import Footer from "../Client/Layouts/Footer";
import Header from "../Client/Layouts/Header";
import { PrivateRoute } from "./AdminRoute";
import RequireRoute from "./RequireRoute";
import SettingRoute from "./SettingRoute";

const ContextRoute = () => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "calc(100vh - 72px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route
            path="/OrderDetail"
            element={
              <RequireRoute>
                <OrderDetail />
              </RequireRoute>
            }
          />
          <Route
            path="/Payment"
            element={
              <RequireRoute>
                <Payment />
              </RequireRoute>
            }
          />
          <Route
            path="/Order"
            element={
              <RequireRoute>
                <Order />
              </RequireRoute>
            }
          />
          <Route
            path="/Cart"
            element={
              <RequireRoute>
                <Cart />
              </RequireRoute>
            }
          />
          <Route
            path="/Setting/*"
            element={
              <RequireRoute>
                <SettingRoute />
              </RequireRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default ContextRoute;
