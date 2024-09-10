import React, { useState, useEffect } from "react"; // Agregado useEffect
import logo from "../../assets/log.png";
import "../css/formGeneral.css";
import { useNavigate, useLocation } from "react-router-dom";

function FormPersonalData() {
  const location = useLocation();
  const { ci, eleccionquintil, carrera } = location.state || {};

  useEffect(() => {
    if (eleccionquintil || carrera || ci) {
      console.log("Elección del quintil:", eleccionquintil);
      console.log("Nombre de la carrera:", carrera);
      console.log("CI recibido:", ci);
    }
  }, [eleccionquintil, carrera, ci]);

  const [formData, setFormData] = useState({
    Datos_estudiante: {
      id_ci: ci || "",
      etnia: "",
      estado_civil: "",
      pueblo_nacionalidad: "",
      provincia_nacimiento: "",
      sexo: "",
      nacionalidad: "",
      canton_nacimiento: "",
    },
    Carrera: {
      id_ci: ci || "",
      nom_carrera: carrera || "", 
    },
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      Datos_estudiante: {
        ...prevFormData.Datos_estudiante,
        [name]: value,
      },
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      "etnia",
      "estado_civil",
      "sexo",
      "provincia_nacimiento",
      "nacionalidad",
      "canton_nacimiento",
    ];

    for (let field of requiredFields) {
      if (!formData.Datos_estudiante[field]) {
        setErrorMessage("Todos los campos obligatorios deben estar llenos.");
        setIsFormValid(false);
        return false;
      }
    }

    setErrorMessage(""); // Restablecer mensaje de error si el formulario es válido
    setIsFormValid(true);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Datos del formulario:", formData);

      try {
        // Envío de datos del estudiante
        const responseEstudiante = await fetch("http://127.0.0.1:8000/api/datos/Ingresar/Estudiante", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData.Datos_estudiante),
        });

        if (!responseEstudiante.ok) {
          throw new Error(`Error Estudiante: ${responseEstudiante.status}`);
        }

        const estudianteData = await responseEstudiante.json();
        console.log("Estudiante creado:", estudianteData);

        // Envío de datos de la carrera
        const responseCarrera = await fetch("http://127.0.0.1:8000/api/SuDCarrera", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData.Carrera),
        });

        if (!responseCarrera.ok) {
          throw new Error(`Error Carrera: ${responseCarrera.status}`);
        }

        const carreraData = await responseCarrera.json();
        console.log("Carrera asignada:", carreraData);

        // Navegación a la siguiente página
        setErrorMessage("¡Formulario completado correctamente! Puede continuar.");
        navigate("/formPersonalAdresse", { state: { ci: formData.Datos_estudiante.id_ci, eleccionquintil } });
      } catch (error) {
        console.error("Error al enviar los datos:", error);
        setErrorMessage("Error al enviar los datos. Por favor, intente nuevamente.");
      }
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo ISTEC" className="log" />
      <h1 className="text-xl font-semibold mt-6">Datos Personales:</h1>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="datos formulario">
        <div className="form-row">
          <div className="form-group left-group">
            <label htmlFor="pueblo_nacionalidad">Pueblo Nacionalidad:</label>
            <input
              type="text"
              id="pueblo_nacionalidad"
              name="pueblo_nacionalidad"
              value={formData.Datos_estudiante.pueblo_nacionalidad}
              onChange={handleChange}
              placeholder="Opcional"
            />
          </div>

          <div className="form-group right-group">
            <label htmlFor="etnia">Etnia:</label>
            <select
              id="etnia"
              name="etnia"
              value={formData.Datos_estudiante.etnia}
              onChange={handleChange}
            >
              <option value="">Seleccione una Opción</option>
              <option value="kichwa">Kichwa</option>
              <option value="awa">Awa</option>
              <option value="chachi">Chachi</option>
              <option value="epera">Epera</option>
              <option value="tsachila">Tsachila</option>
              <option value="achuar">Achuar</option>
              <option value="cofan">Cofan</option>
              <option value="secoya">Secoya</option>
              <option value="shiwiar">Shiwiar</option>
              <option value="shuar">Shuar</option>
              <option value="waorani">Waorani</option>
              <option value="sapara">Sapara</option>
              <option value="andoa">Andoa</option>
              <option value="siona">Siona</option>
              <option value="siokopae">Siokopae</option>
              <option value="otro">Otro/a</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group left-group">
            <label htmlFor="canton_nacimiento">Cantón Nacimiento:</label>
            <input
              type="text"
              id="canton_nacimiento"
              name="canton_nacimiento"
              value={formData.Datos_estudiante.canton_nacimiento}
              onChange={handleChange}
            />
          </div>

          <div className="form-group right-group">
            <label htmlFor="sexo">Sexo:</label>
            <select
              id="sexo"
              name="sexo"
              value={formData.Datos_estudiante.sexo}
              onChange={handleChange}
            >
              <option value="">Seleccione una Opción</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group left-group">
            <label htmlFor="nacionalidad">Nacionalidad:</label>
            <input
              type="text"
              id="nacionalidad"
              name="nacionalidad"
              value={formData.Datos_estudiante.nacionalidad}
              onChange={handleChange}
            />
          </div>

          <div className="form-group right-group">
            <label htmlFor="estado_civil">Estado Civil:</label>
            <select
              id="estado_civil"
              name="estado_civil"
              value={formData.Datos_estudiante.estado_civil}
              onChange={handleChange}
            >
              <option value="">Seleccione una Opción</option>
              <option value="soltero">Soltero/a</option>
              <option value="casado">Casado/a</option>
              <option value="divorciado">Divorciado/a</option>
              <option value="viudo">Viudo/a</option>
              <option value="unionlibre">Unión Libre</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group left-group">
            <label htmlFor="provincia_nacimiento">Provincia Nacimiento:</label>
            <input
              type="text"
              id="provincia_nacimiento"
              name="provincia_nacimiento"
              value={formData.Datos_estudiante.provincia_nacimiento}
              onChange={handleChange}
            />
          </div>
          <div className="form-group right-group"></div>
        </div>

        <div className="button-group">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default FormPersonalData;
