import "../css/formGeneral.css";
import React, { useEffect, useState } from "react";
import logo from "../../assets/log.png";
import { useNavigate, useLocation } from "react-router-dom";

function PersonalIncomeIstec() {
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
    bono: "",
    empleo_ingresos: "",
    ingresos_propios: "",
    ingresos_madre: "",
    ingresos_padre: "",
    ingresos_conyugue: "",
    ingresos_otros: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    const validateForm = () => {
      const requiredFields = ["ingresos_propios", "empleo_ingresos"];

      for (let field of requiredFields) {
        if (!formData[field]) {
          setErrorMessage("Todos los campos obligatorios deben ser llenados.");
          return false;
        }
      }

      setErrorMessage("");
      return true;
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

      if (!validateForm()) {
        return;
      }

    // console.log("Datos del formulario:", formData);
    // navigate("/formFamilyInformation");

      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/Ingresar/Ingreso",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        console.log("Estudiante creado:", data);
        navigate("/formFamilyInformation", { state: { ci: formData.id_ci, eleccionquintil } });
      } catch (error) {
        console.error("Error al crear estudiante:", error);
      }
  };

  return (
    <div className="container2">
      <img src={logo} alt="Logo ISTEC" className="log" />
      <h1 className="text-xl font-semibold mt-6">Ingresos Personales</h1>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-row">
          <div className="form-group right-group">
            <label htmlFor="ingresos_mensuales">Ingresos Propios ($):</label>
            <input
              type="number"
              id="ingresos_propios"
              name="ingresos_propios"
              value={formData.ingresos_propios}
              onChange={handleChange}
            />
          </div>

          <div className="form-group right-group">
            <label htmlFor="empleo_ingresos">¿En qué emplea sus ingresos?:</label>
            <select
              id="empleo_ingresos"
              name="empleo_ingresos"
              value={formData.empleo_ingresos}
              onChange={handleChange}
            >
              <option value="">Seleccione una Opción</option>
              <option value="Financiar sus Estudios">Financiar sus Estudios </option>
              <option value="Para mantemer su hogar">Para mantemer su hogar</option>
              <option value="Gastos Personales">Gastos Personales</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group left-group">
            <label htmlFor="bono">Bono ($):</label>
            <input
              type="number"
              id="bono"
              name="bono"
              value={formData.bono}
              onChange={handleChange}
              placeholder="Opcional"
            />
          </div>
          <div className="form-group right-group">
            <label htmlFor="ingresos_mensuales">
              Ingresos De la Madre ($):
            </label>
            <input
              type="number"
              id="ingresos_madre"
              name="ingresos_madre"
              value={formData.ingresos_madre}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group left-group">
            <label htmlFor="bono">Ingresos del Conyunge ($):</label>
            <input
              type="number"
              id="ingresos_conyugue"
              name="ingresos_conyugue"
              value={formData.ingresos_conyugue}
              onChange={handleChange}
              placeholder="Opcional"
            />
          </div>
          <div className="form-group right-group">
            <label htmlFor="ingresos_mensuales">Ingresos Del Padre ($):</label>
            <input
              type="number"
              id="ingresos_padre"
              name="ingresos_padre"
              value={formData.ingresos_padre}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group left-group">
            <label htmlFor="bono">Otros Ingresos ($):</label>
            <input
              type="number"
              id="ingresos_otros"
              name="ingresos_otros"
              value={formData.ingresos_otros}
              onChange={handleChange}
              placeholder="Opcional"
            />
          </div>

          <div className="form-group left-group"></div>
        </div>

        <div className="button-group">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default PersonalIncomeIstec;
