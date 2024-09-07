import React, { useState } from "react";
import log from "../../assets/log.png";
import "../css/formGeneral.css";

import { useNavigate } from "react-router-dom";

function FormCarrera() {
  const [formData, setFormData] = useState({
    id_carrera:"",
    carrera: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para validar el formulario antes del envío
  const validateForm = () => {
    // Verifica si el campo de carrera tiene un valor
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
      console.log("Datos del formulario:", formData); // Muestra los datos del formulario en la consola
      setErrorMessage("¡Formulario completado correctamente! Puede continuar.");
      navigate("formMatricula");
      console.log(formData);
    }
  };

  return (
    <div className="container">
      {/* Muestra el logo en el formulario */}
      <img src={log} alt="Logo ISTEC" className="log" />
      <h1 h1>Carrera:</h1>

      {/* Formulario para la selección de carrera */}
      <form onSubmit={handleSubmit} className="formulario1">
        <div className="form-row1">
          <label htmlFor="nom_carrera">Carrera a Seguir:</label>
          <select
            id="nom_carrera"
            name="nom_carrera"
            value={formData.nom_carrera}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una Carrera</option>
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
