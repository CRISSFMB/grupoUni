import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navegacion">
        <ul className="navegacion__list">
          <li>
            <Link to="/HomeAdmin/carrera">Inicio</Link>
          </li>
          <li>
            <Link to="/HomeAdmin/istec">Istec</Link>
          </li>
          <li>
            <Link to="/HomeAdmin/puce">Puce</Link>
          </li>
          <li>
            <Link to="/HomeAdmin/bienestar">Bienestar</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
