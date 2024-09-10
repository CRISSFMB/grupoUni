// src/pages/Istec.jsx
import React from "react";
import Navbar from "../../componentes/Nav/Navbar";

function Istec() {
  return (
    <div className="istec">
      <Navbar />
      <div className="header">
        <h1>Carreras de ISTEC</h1>
        <div className="buttons">
          <button className="update-button">Actualizar</button>
          <button className="report-button">Reportes</button>
        </div>
      </div>
      <div className="carrera-list">
        <h2>Lista de Carreras</h2>
        <ul>
          <li>Carrera 1</li>
          <li>Carrera 2</li>
          <li>Carrera 3</li>
          {/* Aquí puedes agregar más carreras */}
        </ul>
      </div>
    </div>
  );
}

export default Istec;
