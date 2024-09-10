import React from "react";

import { Route, Routes } from "react-router-dom";
import InicioAdm from "../pages/AdminPage/InicioAdm";

const AuthRouters = () => {
  return (
    <Routes>
      <Route path="/*" element={<InicioAdm />} />
    </Routes>
  );
};
export default AuthRouters;
