import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navegacion">
        <ul>
          <li>
            <Link to="/login/HomeAdmin">Inicio</Link>
          </li>
          <li>
            <Link to="/login/HomeAdmin/istec">Istec</Link>
          </li>
          <li>
            <Link to="/login/HomeAdmin/puce">Puce</Link>
          </li>
          <li>
            <Link to="/login/HomeAdmin/bienestar">Bienestar</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
