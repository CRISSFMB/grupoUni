import React from "react";
import HomeAdmin from "../pages/loginAdminPage/HomeAdmin";
import { Route, Routes } from "react-router-dom";

const AuthRouters = () => {
  return (
    <Routes>
      <Route path="/login" element={<HomeAdmin />} />
    </Routes>
  );
};

export default AuthRouters;
