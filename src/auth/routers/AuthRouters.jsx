import React from "react";
import HomeAdmin from "../pages/loginAdminPage/HomeAdmin";
import { Route, Routes } from "react-router-dom";
import InicioAdm from "../pages/AdminPage/InicioAdm";

const AuthRouters = () => {
  return (
    <Routes>
      <Route path="/login" element={<HomeAdmin />} />
      <Route path="/*" element={<InicioAdm />} />
    </Routes>
  );
};

export default AuthRouters;
