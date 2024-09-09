import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navegacion">
        <ul>
          <li>
            <Link to="/istec">Istec</Link>
          </li>
          <li>
            <Link to="/puce">Puce</Link>
          </li>
          <li>
            <Link to="/bienestar">Bienestar</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
