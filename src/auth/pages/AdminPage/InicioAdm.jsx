import React, { useState } from "react";
import Navbar from "../../componentes/Nav/Navbar";

const InicioAdm = () => {
  const [nombreCarrera, setNombreCarrera] = useState("");
  const [universidad, setUniversidad] = useState("");
  const [error, setError] = useState("");

  const handleSubmitCrear = (e) => {
    e.preventDefault();

    if (!nombreCarrera || !universidad) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setError("");
    // Aquí podrías implementar la lógica para crear una nueva carrera
    console.log("Creando carrera:", nombreCarrera, "en", universidad);

    // Limpiar los campos después de la creación
    setNombreCarrera("");
    setUniversidad("");
  };

  return (
    <div className="crear-carrera">
      <Navbar />
      <h1>Crear Nueva Carrera</h1>
      <div className="carrera-box"> {/* Caja que envuelve el formulario */}
        <form onSubmit={handleSubmitCrear}>
          <input
            type="text"
            placeholder="Nombre de la Carrera"
            value={nombreCarrera}
            onChange={(e) => setNombreCarrera(e.target.value)}
            required // Añadir required para validación
          />
          <input
            type="text"
            placeholder="Universidad"
            value={universidad}
            onChange={(e) => setUniversidad(e.target.value)}
            required // Añadir required para validación
          />
          <button type="submit">Crear</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Mostrar error */}
      </div>
    </div>
  );
};

export default InicioAdm;
