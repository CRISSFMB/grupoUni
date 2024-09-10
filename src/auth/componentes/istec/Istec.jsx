import "./istec.css";

function Istec() {
  return (
    <div className="istec">
      <div className="header">
        <h1>Carreras de ISTEC</h1>
        <div className="buttons">
          <button className="update-button">Actualizar</button>
          <button className="report-button">Reportes</button>
        </div>
      </div>
      <div className="carrera-list">
        <h2>Lista de Carreras</h2>
        <ul>
          <li>Carrera 1</li>
          <li>Carrera 2</li>
          <li>Carrera 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Istec;
