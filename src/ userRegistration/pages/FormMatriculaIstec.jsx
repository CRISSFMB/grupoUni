import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "../css/formGeneral.css";
import { useNavigate } from "react-router-dom";

function FormMatriculaIstec() {
  const [formData, setFormData] = useState({
    ci: "",
    nombres: "",
    matricula_cancelada: "",
    apellidos: "",
    edad: "",
    celular: "",
    numero_telefonico: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validar el formulario antes del envío
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

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (validateForm()) {
    //   console.log("Datos del formulario:", formData); // Muestra los datos del formulario en la consola

    //   try {
    //     const response = await fetch(
    //       "http://127.0.0.1:8000/api/Ingresar/estudiante",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formData),
    //       }
    //     );

    //     if (!response.ok) {
    //       throw new Error(`Status: ${response.status}`);
    //     }

    //     const data = await response.json();
    //     console.log("Estudiante creado:", data);

    //     // Redirige a la siguiente página solo si el envío fue exitoso
    //     setErrorMessage(
    //       "¡Formulario completado correctamente! Puede continuar."
    //     );
    //     navigate("/formulariopuce2", { state: { ci: formData.ci } });
    //   } catch (error) {
    //     console.error("Error al crear estudiante:", error);
    //     setErrorMessage(
    //       "Error al enviar los datos. Por favor, intente nuevamente."
    //     );
    //   }
    // }

    navigate("/formPersonalDataIs");

    console.log(formData);
  };

  return (
    <div className="form-row-istec ">
      <img src={logo} alt="Logo ISTEC" className="logo" />
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
              type="text"
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
              type="text"
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
              type="text"
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

export default FormMatriculaIstec;
