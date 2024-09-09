import React from "react";
import "./HomeAdmin.css";
import { Link } from "react-router-dom";

const HomeAdmin = () => {
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
};

export default HomeAdmin;
