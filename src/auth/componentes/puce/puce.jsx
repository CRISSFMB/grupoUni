import "./puce.css";

function Puce() {
  return (
    <div className="puce">
      <div className="header">
        <h1>Carreras de PUCE</h1>
        <div className="buttons">
          <button className="update-button">Actualizar</button>
          <button className="report-button">Reportes</button>
        </div>
      </div>
      <div className="carrera-list">
        <h2>Lista de Carreras</h2>
        <ul>
          <li>Carrera A</li>
          <li>Carrera B</li>
          <li>Carrera C</li>
          {/* Aquí puedes agregar más carreras */}
        </ul>
      </div>
    </div>
  );
}

export default Puce;
