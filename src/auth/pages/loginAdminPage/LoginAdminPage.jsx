import { Navigate, useNavigate } from "react-router-dom";
import "../css/LoginAdmin.css";

import React, { useState } from "react";

const LoginAdminPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    if (email !== "istecgrupo@gmail.com" || password !== "istecgrupo") {
      setError("Credenciales incorrectas. Intenta de nuevo.");
      return;
    }

    setError("");

    window.open("https://juansolis.netlify.app/", "_blank");
  };

  // asd
  return (
    <div className="login">
      <h1>ISTECADMIN</h1>
      <form onSubmit={handleSubmitLogin}>
        <input
          type="email"
          placeholder="nombre admin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password admin"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LoginAdminPage;
