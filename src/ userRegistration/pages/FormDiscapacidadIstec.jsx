import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "../css/formGeneral.css";

import { useNavigate } from "react-router-dom";

export function FormDiscapacidadIstec() {
  const [formData, setFormData] = useState({
    emergencias: {
      id_ci: "",
      nombre_contacto: "",
      contacto_emergencia: "",
    },
    discapacidad: {
      id_ci: "",
      nro_carnet: "",
      tipo_discapacidad: "",
      porcentaje_discapacidad: "",
    },
  });

  // const [errorMessage, setErrorMessage] = useState("");
  // const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   const [section, field] = name.split(".");

    //   setFormData({
    //     ...formData,
    //     [section]: {
    //       ...formData[section],
    //       [field]: value,
    //     },
    //   });
    // };

    //   const validateForm = () => {
    //     const requiredFields = [
    //       "emergencias.nombre_contacto",
    //       "emergencias.contacto_emergencia",
    //     ];

    //     for (let field of requiredFields) {
    //       const [section, fieldName] = field.split(".");
    //       if (!formData[section][fieldName]) {
    //         alert("Los campos de emergencia son obligatorios");
    //         setIsFormValid(false);
    //         return false;
    //       }
    //     }

    //     setErrorMessage("");
    //     setIsFormValid(true);
    //     return true;
    //   };

    const handleSubmit = async (e) => {
      e.preventDefault();

      navigate("/hola");

      //     if (!validateForm()) {
      //       return;
      //     }

      //     console.log("Datos del formulario:", formData);

      //     try {
      //       let response;

      //       if (
      //         formData.discapacidad.nro_carnet ||
      //         formData.discapacidad.tipo_discapacidad ||
      //         formData.discapacidad.porcentaje_discapacidad
      //       ) {
      //         response = await fetch("http://127.0.0.1:8000/api/Discapacidad2", {
      //           method: "POST",
      //           headers: {
      //             "Content-Type": "application/json",
      //           },
      //           body: JSON.stringify(formData.discapacidad),
      //         });
      //       }

      //       if (
      //         formData.emergencias.nombre_contacto &&
      //         formData.emergencias.contacto_emergencia
      //       ) {
      //         response = await fetch("http://127.0.0.1:8000/api/Emergencia2", {
      //           method: "POST",
      //           headers: {
      //             "Content-Type": "application/json",
      //           },
      //           body: JSON.stringify(formData.emergencias),
      //         });
      //       }

      //       if (!response.ok) {
      //         throw new Error(`Error en la solicitud: ${response.status}`);
      //       }

      //       const data = await response.json();
      //       console.log("Datos enviados:", data);
      //       navigate("/pucematriculacion", { state: { ci: formData.id_ci } });
      //     } catch (error) {
      //       console.error("Error al enviar los datos:", error);
      //     }
      //   };

      return (
        <div className="container">
          <img src={logo} alt="Logo ISTEC" className="logo" />
          <h1 className="text-xl font-semibold mt-6">Discapacidad</h1>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <form onSubmit={handleSubmit} className="formulario">
            <div className="form-row">
              <div className="form-group left-group">
                <label htmlFor="discapacidad.porcentaje_discapacidad">
                  Porcentaje Discapacidad:
                </label>
                <input
                  type="number"
                  id="discapacidad.porcentaje_discapacidad"
                  name="discapacidad.porcentaje_discapacidad"
                  value={formData.discapacidad.porcentaje_discapacidad}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group right-group">
                <label htmlFor="emergencias.nombre_contacto">
                  Nombre del Contacto:
                </label>
                <input
                  type="text"
                  id="emergencias.nombre_contacto"
                  name="emergencias.nombre_contacto"
                  value={formData.emergencias.nombre_contacto}
                  onChange={soloLetras} // Usamos la función soloLetras
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group left-group">
                <label htmlFor="discapacidad.nro_carnet">
                  Número de Carnet:
                </label>
                <input
                  type="number"
                  id="discapacidad.nro_carnet"
                  name="discapacidad.nro_carnet"
                  value={formData.discapacidad.nro_carnet}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group right-group">
                <label htmlFor="emergencias.contacto_emergencia">
                  Número de Contacto:
                </label>
                <input
                  type="number"
                  id="emergencias.contacto_emergencia"
                  name="emergencias.contacto_emergencia"
                  value={formData.emergencias.contacto_emergencia}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* <div className="form-row">
          <div className="form-group left-group">
            <label htmlFor="discapacidad.tipo_discapacidad">Tipo de Discapacidad:</label>
            <input
              type="text"
              id="discapacidad.tipo_discapacidad"
              name="discapacidad.tipo_discapacidad"
              value={formData.discapacidad.tipo_discapacidad}
              onChange={soloLetras} // Usamos la función soloLetras
            />
           </div>
          <div className="form-group">
          </div>
        </div>   */}

            <div className="form-row">
              <label htmlFor="discapacidad.tipo_discapacidad">
                Tipo de Discapacidad:
              </label>
              <select
                id="discapacidad.tipo_discapacidad"
                name="discapacidad.tipo_discapacidad"
                value={formData.discapacidad.tipo_discapacidad}
                onChange={handleChange}
              >
                <option value="">Seleccione una Opción</option>
                <option value="discapacidad_fisica">Discapacidad fisica</option>
                <option value="discapacidad_itelectual">
                  Discapacidad itelectual
                </option>
                <option value="discapacidad_mental">Discapacidad mental</option>
                <option value="discapacidad_sensorial">
                  Discapacidad sensorial
                </option>
                <option value="discapacidad_auditiva">
                  Discapacidad auditiva
                </option>
                <option value="discapacidad_visual">Discapacidad visual</option>
              </select>
            </div>

            <div className="button-group">
              <button type="submit">Guardar</button>
            </div>
          </form>
        </div>
      );
    };
  };
}
