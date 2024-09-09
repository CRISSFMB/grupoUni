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

  const getDataCarrera = () => {
    if (!universidad) return; // Evita la petición si no hay universidad

    // Reemplazar la universidad en la URL
    const url = `http://127.0.0.1:8000/api/MostrarMalla/${universidad}`;
    
    fetch(url , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        // Verificar si la respuesta es exitosa
        if (!response.ok) {
          throw new Error(`Error en la respuesta: ${response.status} ${response.statusText}`);
        }
        return response.json(); // Parsear la respuesta como JSON
      })
      .then((data) => {
        // Asegurarse de que data sea un array antes de mapear
        if (!Array.isArray(data)) {
          throw new Error('La respuesta no es un array.');
        }

        const carrerasDataApi = data.map((carrera) => ({
          id_malla: carrera.id_malla,
          mallacurricular: carrera.mallacurricular,
          nombrecarrera: carrera.nombrecarrera,
          universidad: carrera.universidad,
        }));

        setDataCarrera(carrerasDataApi);
      })
      .catch((error) => {
        console.log("Error al obtener los datos:", error.message);
      });
  };

  useEffect(() => {
    getDataCarrera(); // Llama a la función cuando se monta el componente
  }, [universidad]); // Escucha los cambios en la variable universidad

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
    // Navega a la siguiente página después de la selección
    navigate("formMatricula", { state: { carrera: formData.carrera, universidad } });
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
