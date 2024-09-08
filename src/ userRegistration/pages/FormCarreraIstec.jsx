import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "../css/formGeneral.css";

import { useNavigate } from "react-router-dom";

function FormCarreraistec() {
  const [dataCarrera, setdataCarrera] = useState([]);
  const getDataCarrera = async () => {
    try {
      const url = "http://127.0.0.1:8000/api/MostrarMalla";
      const response = await fetch(url);
      const data = await response.json();

      const carrerasDataApi = data.map((carrera) => {
        return {
          id_malla: carrera.id_malla,
          mallacurricular: carrera.mallacurricular,
          nombrecarrera: carrera.nombrecarrera,
          universidad: carrera.universidad,
        };
      });

      setdataCarrera(carrerasDataApi);
    } catch (error) {
      console.log("error");
    }
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

  // const validateForm = () => {
  //   if (!formData.nom_carrera) {
  //     alert("Debe seleccionar una carrera");
  //     return false;
  //   }

  //   setErrorMessage("");
  //   return true;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (validateForm()) {
    //   console.log("Datos del formulario:", formData);
    //   setErrorMessage("¡Formulario completado correctamente! Puede continuar.");
    navigate("formMatriculaIs");
    //   console.log(formData);
    // }

    // if (validateForm()) {
    //   console.log("Datos del formulario:", formData);
    //   setErrorMessage("¡Formulario completado correctamente! Puede continuar.");
    //   console.log(formData);
    // }
  };

  return (
    <div className="container">
      {/* Muestra el logo en el formulario */}
      <img src={logo} alt="Logo PUCE" className="log" />
      <h1>Carrera:</h1>

      {/* Formulario para la selección de carrera */}

      <form onSubmit={handleSubmit} className="formulario1">
      <div className="form-row">
          <label htmlFor="carrera">Carrera a Seguir:</label>
          <select
            id="carrera"
            name="carrera"
            value={formData.carrera}
            onChange={handleChange}
          >
            <option value="">Seleccione una carrera</option>
            <option value="TECNOLOGIA SUPERIOR EN ADMINISTRACION">Tecnología Superior en Administración</option>
            <option value="TECNOLOGIA EN PROCESAMIENTO DE ALIMENTOS">Tecnología en Procesamiento de Alimentos</option>
            <option value="TECNOLOGIA SUPERIOR EN AGROFORESTERIA">Tecnología Superior en Agroforestería</option>
            <option value="TECNOLOGIA EN ENFERMERIA">Tecnología en Enfermería</option>
            <option value="TECNOLOGIA EN CONSTRUCCION">Tecnología en Construcción</option>
            <option value="TECNOLOGIA SUPERIOR EN GASTRONOMIA">Tecnología Superior en Gastronomía</option>
            <option value="TECNOLOGIA SUPERIOR EN DESARROLLO DE SOFTWARE">Tecnología Superior en Desarrollo de Software</option>
            <option value="TECNOLOGIA SUPERIOR EN ELECTROMECANICA EN AUTOMOTRIZ">Tecnología Superior en Electromecánica en Automotriz</option>
          </select>
        </div>


        <div className="button-group">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default FormCarreraistec;
