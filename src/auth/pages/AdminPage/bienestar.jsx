import React, { useState } from "react";
import Navbar from "../../componentes/Nav/Navbar";

function Bienestar() {
  // Ejemplo de estudiantes
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: "Juan Pérez", carrera: "Ingeniería", fechaInscripcion: "2023-09-01" },
    { id: 2, nombre: "Ana Gómez", carrera: "Medicina", fechaInscripcion: "2023-09-02" },
    { id: 3, nombre: "Luis López", carrera: "Arquitectura", fechaInscripcion: "2023-09-03" },
  ]);

  const [orden, setOrden] = useState("fecha"); // "fecha" o "carrera"

  const ordenarEstudiantes = () => {
    return [...estudiantes].sort((a, b) => {
      if (orden === "fecha") {
        return new Date(a.fechaInscripcion) - new Date(b.fechaInscripcion);
      } else {
        return a.carrera.localeCompare(b.carrera);
      }
    });
  };

  return (
    <div>
      <Navbar />
      <h1>Bienestar Estudiantil</h1>
      <div>
        <label>
          Ordenar por:
          <select onChange={(e) => setOrden(e.target.value)}>
            <option value="fecha">Fecha de Inscripción</option>
            <option value="carrera">Carrera</option>
          </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Carrera</th>
            <th>Fecha de Inscripción</th>
          </tr>
        </thead>
        <tbody>
          {ordenarEstudiantes().map((estudiante) => (
            <tr key={estudiante.id}>
              <td>{estudiante.id}</td>
              <td>{estudiante.nombre}</td>
              <td>{estudiante.carrera}</td>
              <td>{estudiante.fechaInscripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Bienestar;
