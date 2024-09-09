import React from "react";
import "./BtnAdmin.css";
import { useNavigate } from "react-router-dom";

const BtnAdmin = () => {
  const navigate = useNavigate();

  const hanldeBtnAdmin = () => {
    navigate("/login");
  };
  return (
    <button onClick={hanldeBtnAdmin} className="btnAdmin">
      Solo personal autorizado
    </button>
  );
};

export default BtnAdmin;
