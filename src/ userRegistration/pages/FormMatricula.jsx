import React, { useState, useEffect } from "react";
import logo from "../../assets/log.png";
import "../css/formGeneral.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function FormMatricula() {
  const navigate = useNavigate();
  const location = useLocation();

  // Obtener las variables eleccionquintil y carrera desde la ubicación
  const { eleccionquintil, carrera } = location.state || {};

  // Mostrar eleccionquintil y carrera en la consola al cargar el componente
  useEffect(() => {
    if (eleccionquintil || carrera) {
      console.log("Elección del quintil:", eleccionquintil);
      console.log("Nombre de la carrera:", carrera);
    }
  }, [eleccionquintil, carrera]);

  const [formData, setFormData] = useState({
    ci: "", // Inicializa con el valor de ci recibido o vacío
    nombres: "",
    apellidos: "",
    edad: "",
    celular: "",
    numero_telefonico: "",
    matricula_cancelada: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value, // Actualiza correctamente el valor del campo
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      "ci",
      "nombres",
      "apellidos",
      "edad",
      "celular",
      "numero_telefonico",
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        setErrorMessage("Todos los campos son obligatorios");
        setIsFormValid(false);
        return false;
      }
    }

    setErrorMessage("");
    setIsFormValid(true);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Datos del formulario:", formData);

      try {
        // Envío de datos del estudiante usando axios
        const responseEstudiante = await axios.post(
          "http://127.0.0.1:8000/api/Ingresar/estudiante",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const estudianteData = responseEstudiante.data;
        console.log("Estudiante creado:", estudianteData);

        // Navegación a la siguiente página pasando el CI
        setErrorMessage(
          "¡Formulario completado correctamente! Puede continuar."
        );
        navigate("/formPersonalData", {
          state: { id_ci: formData.ci, carrera, eleccionquintil },
        });
      } catch (error) {
        console.error("Error al enviar los datos:", error);
        setErrorMessage(
          "Error al enviar los datos. Por favor, intente nuevamente."
        );
      }
    }
  };

  return (
    <div className="container2">
      <img src={logo} alt="Logo ISTEC" className="log" />
      <h1>SOLICITUD DE MATRÍCULA</h1>
      <h2 className="text-xl font-semibold mt-6">Datos Personales:</h2>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombres">Nombres:</label>
            <input
              type="text"
              id="nombres"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="apellidos">Apellidos:</label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="numero_telefonico">Teléfono:</label>
            <input
              type="number"
              id="numero_telefonico"
              name="numero_telefonico"
              value={formData.numero_telefonico}
              onChange={handleChange}
              className="phone-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="celular">Celular:</label>
            <input
              type="number"
              id="celular"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              className="phone-input"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="ci">Cédula:</label>
            <input
              type="number"
              id="ci"
              name="ci"
              value={formData.ci}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="edad">Fecha de nacimiento:</label>
            <input
              type="date"
              id="edad"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="button-group">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default FormMatricula;
