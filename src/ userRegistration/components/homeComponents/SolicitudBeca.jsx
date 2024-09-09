import { useNavigate } from "react-router-dom";
import logo from "../../../assets/istec2.png";
import puce from "../../../assets/PE.png"; // Imagen izquierda
import istec from "../../../assets/logo-istec.png"; // Imagen derecha
import Button from "../buttons/Button";
import "./SolicitudBeca.css";

const SolicitudBeca = () => {
  const navigate = useNavigate();

  const handleRightImageClick = () => {
    navigate("/formCarrera");
  };
  const handleLeftImageClick = () => {
    navigate("/formCarrera");
  };

  return (
    <>
      <div className="button-container">
        <Button onClick={handleLeftImageClick}>SI</Button>
        <Button onClick={handleLeftImageClick}>NO</Button>
      </div>
      <div className="SolicitudBeca"></div>;
    </>
  );
};

export default SolicitudBeca;
