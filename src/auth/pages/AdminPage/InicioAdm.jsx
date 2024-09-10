import Navbar from "../../componentes/Nav/Navbar";
import { Route, Routes } from "react-router-dom";
import CrearCarrera from "../../componentes/CrearCarrera/CrearCarrera";
import Istec from "../../componentes/istec/Istec";
import Puce from "../../componentes/puce/puce";
import Bienestar from "../../componentes/bienestar/bienestar";

import "./inicioAdm.css";
const InicioAdm = () => {
  return (
    <div className="InicioAdmin">
      <Navbar />
      <div className="ContendAdminPage">
        <Routes>
          <Route path="/carrera" element={<CrearCarrera />} />
          <Route path="/istec" element={<Istec />} />
          <Route path="/puce" element={<Puce />} />
          <Route path="/bienestar" element={<Bienestar />} />
        </Routes>
      </div>
    </div>
  );
};

export default InicioAdm;
