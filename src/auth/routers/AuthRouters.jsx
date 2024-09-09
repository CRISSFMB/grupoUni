import React from "react";
import HomeAdmin from "../pages/loginAdminPage/HomeAdmin";
import { Route, Routes } from "react-router-dom";
import Istec from "../componentes/paginas/istec";
import Bienestar from "../componentes/paginas/bienestar";
import Puce from "../componentes/paginas/puce";

const AuthRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/login/HomeAdmin/*" element={<HomeAdmin />} />
      <Route path="/istec" element={<Istec />} />
      <Route path="/bienestar" element={<Bienestar />} />
      <Route path="/puce" element={<Puce />} />
    </Routes>
  );
};

export default AuthRouters;
