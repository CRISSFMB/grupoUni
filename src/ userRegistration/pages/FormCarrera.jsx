import React, { useEffect, useState } from "react";
import log from "../../assets/log.png";
import "../css/formGeneral.css";

import { Outlet, useNavigate } from "react-router-dom";

function FormCarrera() {
  const getDataCarrera = async () => {
    const url = "/SubMalla";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log("enviando");
  };

  useEffect(() => {
    getDataCarrera();
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id_carrera: "",
    carrera: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.nom_carrera) {
      alert("Debe seleccionar una carrera");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Datos del formulario:", formData);
      setErrorMessage("¡Formulario completado correctamente! Puede continuar.");
      navigate("formMatricula");
      console.log(formData);
    }
  };

  return (
    <div className="container">
      <img src={log} alt="Logo ISTEC" className="log" />
      <h1 h1>Carrera:</h1>

      {/* Muestra el logo en el formulario */}
      <img src={log} alt="Logo PUCE" className="logo" />
      <h1>Carrera:</h1>

      {/* Formulario para la selección de carrera */}

      <form onSubmit={handleSubmit} className="formulario1">
        <div className="form-row">
          <label htmlFor="nom_carrera">Carrera a Seguir:</label>
          <select
            id="nom_carrera"
            name="nom_carrera"
            value={formData.nom_carrera}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una carrera</option>
            <option value="MEDICINA GENERAL">Medicina General</option>
            <option value="INGENIERIA AGRICOLA">Ingeniería Agrícola</option>
            <option value="LICENCIATURA EN ADMINISTRACION DE EMPRESAS">
              Licenciatura en Administración de Empresas
            </option>
            <option value="LICENCIATURA EN ENFERMERIA">
              Licenciatura en Enfermería
            </option>
            <option value="INTERPRETE DE LENGUAS AMAZONICAS">
              Intérprete de Lenguas Amazónicas
            </option>
            <option value="MEDICINA VETERINARIA">Medicina Veterinaria</option>
          </select>
        </div>

        <div className="button-group">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default FormCarrera;
