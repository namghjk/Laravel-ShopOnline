import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Client/Auth/Login";
import SignUp from "../Client/Auth/SignUp";

import HeaderAuth from "../Client/Layouts/HeaderAuth";

const AuthRoute = () => {
  return (
    <div>
      <HeaderAuth />
      <main style={{ minHeight: "calc(100vh - 72px)" }}>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </main>
    </div>
  );
};

export default AuthRoute;
