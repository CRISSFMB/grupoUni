import React, { useEffect, useState } from "react";
import log from "../../assets/log.png"; 
import "../css/formGeneral.css";
import { useNavigate, useLocation } from "react-router-dom"; 

const FormGeneralInfo = () => {
  const location = useLocation();
  const { ci, eleccionquintil } = location.state || {}; 
  useEffect(() => {
    if (eleccionquintil || ci) {
      console.log("Elección del quintil:", eleccionquintil);
      console.log("CI recibido:", ci);
    }
  }, [eleccionquintil, ci]);

  const [formData, setFormData] = useState({
    id_ci: ci || "",
    cargo: "",
    telefono_trabajo: "",
    ocupacion: "",
    origen_recursos: "",
    lugar_trabajo: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const requiredFields = ["origen_recursos"];

    for (let field of requiredFields) {
      if (!formData[field]) {
        alert("!Obligatorio llenar el campo Origenes de Recursos!");
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
        const response = await fetch(
          "http://127.0.0.1:8000/api/Info_general/Ingresar",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error(`Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Estudiante creado:", data);

        // Redirige a la siguiente página solo si el envío fue exitoso
        setErrorMessage(
          "¡Formulario completado correctamente! Puede continuar."
        );
        navigate("/FormHealthInformation", { state: { ci: formData.id_ci, eleccionquintil } });
      } catch (error) {
        console.error("Error al crear estudiante:", error);
        setErrorMessage(
          "Error al enviar los datos. Por favor, intente nuevamente."
        );
      }
    }

    // navigate("/FormHealthInformation");
  };
  return (
    <div className="container2">
      <img src={log} alt="Logo PUCE" className="log" /> {/* Logo */}
      <h1 className="text-xl font-semibold mt-6">Información General:</h1>
      <h3>
        En caso de no estar trabajando, deje estos campos o secciones en blanco.
      </h3>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="formulario">
        {/* Primera fila */}
        <div className="form-row">
          <div className="form-group left-group">
            <label htmlFor="lugar_trabajo">Lugar de trabajo:</label>
            <input
              type="text"
              id="lugar_trabajo"
              name="lugar_trabajo"
              value={formData.lugar_trabajo}
              onChange={handleChange}
            />
          </div>
          {/* <div className="form-group right-group">
        <label htmlFor="origen_recursos">Origen de Recursos:</label>
        <input
          type=""
          id="origen_recursos"
          name="origen_recursos"
          value={formData.origen_recursos}
          onChange={handleChange}
          placeholder="¡Obligatorio!"
        />
      </div> */}
          <div className="form-group right-group">
            <label htmlFor="origen_recursos">Origen de Recursos:</label>
            <select
              id="origen_recursos"
              name="origen_recursos"
              value={formData.origen_recursos}
              onChange={handleChange}
            >
              <option value="recursos_propios">Recursos propios</option>
              <option value="padres_tutores">Padres tutores</option>
              <option value="pareja_sentimental">Pareja sentimental</option>
              <option value="hermanos">Hermanos</option>
              <option value="otros_miembros_hogar">
                Otros miembros del hogar
              </option>
              <option value="otros_familiares">Otros familiares</option>
              <option value="becas_estudio">Becas de estudio</option>
              <option value="credito_educativo">Credito educativo</option>
            </select>
          </div>
        </div>

        {/* Segunda fila */}
        <div className="form-row">
          <div className="form-group left-group">
            <label htmlFor="ocupacion">Ocupación:</label>
            <input
              type="text"
              id="ocupacion"
              name="ocupacion"
              value={formData.ocupacion}
              onChange={handleChange}
            />
          </div>
          <div className="form-group right-group">
            <label htmlFor="cargo">Cargo:</label>
            <input
              type="text"
              id="cargo"
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Tercera fila */}
        <div className="form-row">
          <div className="form-group left-group">
            <label htmlFor="telefono_trabajo">Teléfono de Trabajo:</label>
            <input
              type="text"
              id="telefono_trabajo"
              name="telefono_trabajo"
              value={formData.telefono_trabajo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group right-group">
            {/* Espacio vacío en la segunda columna */}
          </div>
        </div>

        <div className="button-group">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default FormGeneralInfo;
