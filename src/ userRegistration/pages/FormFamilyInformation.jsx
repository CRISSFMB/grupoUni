import React, { useEffect, useState } from "react";
import logo from "../../assets/log.png"; // Importa el logo
import "../css/formGeneral.css";

import { useNavigate, useLocation } from "react-router-dom"; // Importa useNavigate para redirección

function FormFamilyInformation() {
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
    familiar_bono: "",
    hijos: "",
    nivel_formacion_madre: "",
    nivel_formacion_padre: "",
    miembros_hogar: "",
    Padre_o_Madre_soltera: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showAdditionalQuestions, setShowAdditionalQuestions] = useState(false); // Nuevo estado

  const navigate = useNavigate(); // Inicializa useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    const validateForm = () => {
      const requiredFields = [
        "hijos",
        "nivel_formacion_madre",
        "nivel_formacion_padre",
        "miembros_hogar",
        "Padre_o_Madre_soltera",
      ];

      for (let field of requiredFields) {
        if (!formData[field]) {
          alert("Todos los campos son obligatorios");
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

    if (!validateForm()) {
      return;
    }

    // console.log("Datos del formulario:", formData);

    // navigate("/formDiscapacidad");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/Familia2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const data = await response.json();
      console.log("Estudiante creado:", data);
      navigate("/formDiscapacidad", { state: { ci: formData.id_ci, eleccionquintil } });
    } catch (error) {
      console.error("Error al crear estudiante:", error);
    }
  };

  return (
    <div className="container2">
      <img src={logo} alt="Logo ISTEC" className="log" /> {/* Añadir logo */}
      <h1 className="text-xl font-semibold mt-6">Informacion Familiar</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="datos formulario">
        <div className="form-row">
          <div className="ml8 form-group left-group">
            <label htmlFor="hijos">Hijos:</label>
            <input
              type="number"
              id="hijos"
              name="hijos"
              value={formData.hijos}
              onChange={handleChange}
              placeholder="0"
            />
          </div>

          <div className="form-group right-group">
            <label htmlFor="nivel_formacion_padre">
              Nivel Formación Padre:
            </label>
            <select
              id="nivel_formacion_padre"
              name="nivel_formacion_padre"
              value={formData.nivel_formacion_padre}
              className="long-select"
              onChange={handleChange}
            >
              <option value="">Seleccione una Opción</option>
              <option value="Estudio Basico">Estudio Básico</option>
              <option value="Estudio Basico Incompleto">
                Estudio Básico Incompleto
              </option>
              <option value="Bachillerato">Bachillerato</option>
              <option value="Bachillerato Incompleto">
                Bachillerato Incompleto
              </option>
              <option value="Estudio Superior">Estudio Superior</option>
              <option value="Estudio Superior Incompleto">
                Estudio Superior Incompleto
              </option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="ml8 form-group left-group">
            <label htmlFor="miembros_hogar">Miembros del Hogar:</label>
            <input
              type="number"
              id="miembros_hogar"
              name="miembros_hogar"
              value={formData.miembros_hogar}
              onChange={handleChange}
              placeholder="1"
            />
          </div>

          <div className="form-group right-group">
            <label htmlFor="nivel_formacion_madre">
              Nivel Formación Madre:
            </label>
            <select
              id="nivel_formacion_madre"
              name="nivel_formacion_madre"
              value={formData.nivel_formacion_madre}
              className="long-select"
              onChange={handleChange}
            >
              <option value="">Seleccione una Opción</option>
              <option value="Estudio Basico">Estudio Básico</option>
              <option value="Estudio Basico Incompleto">
                Estudio Básico Incompleto
              </option>
              <option value="Bachillerato">Bachillerato</option>
              <option value="Bachillerato Incompleto">
                Bachillerato Incompleto
              </option>
              <option value="Estudio Superior">Estudio Superior</option>
              <option value="Estudio Superior Incompleto">
                Estudio Superior Incompleto
              </option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="ml8 form-group left-group">
            <label htmlFor="familiar_bono">Bono Familiar($):</label>
            <input
              type="number"
              id="familiar_bono"
              name="familiar_bono"
              value={formData.familiar_bono}
              onChange={handleChange}
              placeholder="Opcional"
            />
          </div>

          <div className="form-group right-group">
            <label htmlFor="Padre_o_Madre_soltera">
              Madre o Padre Soltero:
            </label>
            <select
              id="Padre_o_Madre_soltera"
              name="Padre_o_Madre_soltera"
              value={formData.Padre_o_Madre_soltera}
              onChange={handleChange}
            >
              <option value="">Seleccione una Opción {"     "} </option>
              <option value="si">Sí </option>
              <option value="no">No </option>
            </select>
          </div>
        </div>

        <div className="button-group">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default FormFamilyInformation;
