import React from "react";
import HomeAdmin from "../pages/loginAdminPage/HomeAdmin";
import { Route, Routes } from "react-router-dom";

const AuthRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/login/HomeAdmin/*" element={<HomeAdmin />} />

      {/* aqui van todas las rutas de el admin */}
      {/* aqui van todas las rutas de el admin */}
      {/* aqui van todas las rutas de el admin */}
      {/* aqui van todas las rutas de el admin */}
      {/* aqui van todas las rutas de el admin */}
      {/* aqui van todas las rutas de el admin */}
      {/* aqui van todas las rutas de el admin */}
      {/* aqui van todas las rutas de el admin */}
    </Routes>
  );
};

export default AuthRouters;
