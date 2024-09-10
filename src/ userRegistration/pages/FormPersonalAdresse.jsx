import React, { useState, useEffect } from "react"; 
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/log.png";
import "../css/formGeneral.css";

const FormPersonalAdresse = () => {
  const location = useLocation();
  const { ci, eleccionquintil } = location.state || {}; 

  // Hook para imprimir información al cargar el componente
  useEffect(() => {
    if (eleccionquintil || ci) {
      console.log("Elección del quintil:", eleccionquintil);
      console.log("CI recibido:", ci);
    }
  }, [eleccionquintil, ci]);

  // Estado para el formulario
  const [formData, setFormData] = useState({
    id_ci: ci || "",
    provincia: "",
    canton: "",
    barrio_recinto: "",
    parroquia: "",
    sector: "",
  });

  // Estado para mensajes de error
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Maneja cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validación del formulario
  const validateForm = () => {
    const requiredFields = ["provincia", "canton", "barrio_recinto", "parroquia", "sector"];

    for (let field of requiredFields) {
      if (!formData[field]) {
        alert("Todos los campos son obligatorios");
        return false; 
      }
    }

    setErrorMessage("");
    return true; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Datos del formulario:", formData);

      try {
        // Envío de datos del estudiante
        const responseEstudiante = await fetch("http://127.0.0.1:8000/api/Ingresar/Residencia", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!responseEstudiante.ok) {
          throw new Error(`Error Estudiante: ${responseEstudiante.status}`);
        }

        const estudianteData = await responseEstudiante.json();
        console.log("Estudiante creado:", estudianteData);


        // Navegación a la siguiente página
        setErrorMessage("¡Formulario completado correctamente! Puede continuar.");
        navigate("/formGeneralInfo", { state: { ci: formData.id_ci, eleccionquintil } });
      } catch (error) {
        console.error("Error al enviar los datos:", error);
        setErrorMessage("Error al enviar los datos. Por favor, intente nuevamente.");
      }
    }
  };

  

  return (
    <div className="container2">
      <img src={logo} alt="Logo ISTEC" className="log" />
      <h1 className="text-xl font-semibold mt-6">Residencia:</h1>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <div className="form-group left-group">
            <label htmlFor="barrio_recinto">Barrio/Recinto:</label>
            <input
              type="text"
              id="barrio_recinto"
              name="barrio_recinto"
              value={formData.barrio_recinto}
              onChange={handleChange}
            />
          </div>

          <div className="form-group right-group">
            <label htmlFor="sector">Sector:</label>
            <select
              id="sector"
              name="sector"
              value={formData.sector}
              onChange={handleChange}
            >
              <option value="">Seleccione</option>
              <option value="Urbano">Urbano</option>
              <option value="Rural">Rural</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group left-group">
            <label htmlFor="parroquia">Parroquia:</label>
            <input
              type="text"
              id="parroquia"
              name="parroquia"
              value={formData.parroquia}
              onChange={handleChange}
            />
          </div>

          <div className="form-group right-group">
            <label htmlFor="canton">Cantón:</label>
            <select
              id="canton"
              name="canton"
              value={formData.canton}
              onChange={handleChange}
            >
              <option value="">Seleccione</option>
              <option value="cuyabeno">Cuyabeno</option>
              <option value="gonzalopizarro">Gonzalo Pizarro</option>
              <option value="lagoagrio">Lago Agrio</option>
              <option value="putumayo">Putumayo</option>
              <option value="shushufinfi">Shushufinfi</option>
              <option value="noamazonico">No Amazónico</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="provincia">Provincia:</label>
            <input
              type="text"
              id="provincia"
              name="provincia"
              value={formData.provincia}
              onChange={handleChange}
            />
          </div>
          <div className="form-group"></div>
        </div>
        <div className="button-group">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default FormPersonalAdresse;
