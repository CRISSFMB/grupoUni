import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/istec2.png";
import puce from "../../../assets/PE.png"; // Imagen izquierda
import istec from "../../../assets/logo-istec.png"; // Imagen derecha
import Button from "../buttons/Button";
import "./SolicitudBeca.css";

const SolicitudBeca = () => {
  const location = useLocation();
  const { universidad } = location.state || {};
  console.log("Universidad:", universidad);

  const [formData, setFormData] = useState({
    universidad: universidad || "",
  });

  const [eleccionquintil, setEleccionquintil] = useState("");
  const navigate = useNavigate();

  const handleRightImageClick = () => {
    setEleccionquintil("NO");
    navigate("formCarrera", { state: { eleccionquintil: "NO", universidad: formData.universidad } });
  };
  
  const handleLeftImageClick = () => {
    setEleccionquintil("SI");
    navigate("formCarrera", { state: { eleccionquintil: "SI", universidad: formData.universidad } });
  };

  return (
    <>
      <div className="button-container">
        <Button onClick={handleLeftImageClick}>SI</Button>
        <Button onClick={handleRightImageClick}>NO</Button>
      </div>
      <div className="SolicitudBeca"></div>
    </>
  );
};

export default SolicitudBeca;
