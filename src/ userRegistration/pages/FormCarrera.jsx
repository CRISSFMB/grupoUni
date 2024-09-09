import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import log from "../../assets/log.png";
import "../css/formGeneral.css";
import { useNavigate } from "react-router-dom";

function FormCarrera() {
  const location = useLocation();
  const { eleccionquintil, universidad } = location.state || {};
  console.log("Universidad:", universidad);
  console.log("Eleccion del quintil:", eleccionquintil);

  const [dataCarrera, setDataCarrera] = useState([]);

  const getDataCarrera = async () => {
    const url = `http://127.0.0.1:8000/api/MostrarMalla/${universidad}`;

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    console.log(response);
  };

  useEffect(() => {
    getDataCarrera();
  }, [universidad]);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id_carrera: "",
    carrera: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (validateForm()) {
    //   console.log("Datos del formulario:", formData);
    //   setErrorMessage("¡Formulario completado correctamente! Puede continuar.");
    navigate("/formMatricula"); //Siempre tiene que haber un /
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
      <img src={log} alt="Logo PUCE" className="log" />
      <h1>Carrera:</h1>

      {/* Formulario para la selección de carrera */}
      <form onSubmit={handleSubmit} className="formulario1">
        <div className="form-row">
          <label htmlFor="carrera">Carrera a Seguir:</label>
          <select
            name="carrera"
            value={formData.carrera}
            onChange={handleChange}
          >
            <option value="">Seleccione una carrera</option>
            {dataCarrera.map((item, index) => (
              <option key={index} value={item.nombrecarrera}>
                {item.nombrecarrera}
              </option>
            ))}
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
