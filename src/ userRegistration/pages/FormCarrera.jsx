import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import log from "../../assets/log.png";
import "../css/formGeneral.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FormCarrera() {
  const location = useLocation();
  const { eleccionquintil, universidad } = location.state || {};
  console.log("Universidad:", universidad);
  console.log("Elección del quintil:", eleccionquintil);

  const [dataCarrera, setDataCarrera] = useState([]);

  const getDataCarrera = async () => {
    const url = `http://127.0.0.1:8000/api/MostrarCarreras/${universidad}`;

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      // Asignar los datos recibidos al estado
      if (response.data && Array.isArray(response.data)) {
        const carrerasDataApi = response.data.map((carrera) => ({
          id_carrera: carrera.id_carrera,
          nombrecarrera: carrera.nombrecarrera,
        }));
        setDataCarrera(carrerasDataApi);
      } else {
        console.error("Datos de respuesta inválidos.");
      }
    } catch (error) {
      console.log("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    if (universidad) {
      getDataCarrera();
    }
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

    // Navegar al formulario de matrícula pasando el quintil y la carrera seleccionada
    navigate("/formMatricula", {
      state: { carrera: formData.carrera, eleccionquintil },
    });
  };

  return (
    <div className="container2">
      {/* Muestra el logo en el formulario */}
      <img src={log} alt="Logo PUCE" className="log" />
      <h1>Carrera:</h1>

      {/* Formulario para la selección de carrera */}
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <label htmlFor="carrera">Carrera a Seguir:</label>
          <select
            name="carrera"
            value={formData.carrera}
            onChange={handleChange}
          >
            <option value="">Seleccione una carrera</option>
            {dataCarrera.map((item) => (
              <option key={item.id_carrera} value={item.nombrecarrera}>
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
