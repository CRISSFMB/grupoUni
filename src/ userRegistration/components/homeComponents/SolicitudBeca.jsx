import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";
import "./SolicitudBeca.css";

const SolicitudBeca = () => {
  const navigate = useNavigate();
  const handleLeftImageClick = () => {
    navigate("formCarrera");
  };
  return (
    <>
      <Button onClick={handleLeftImageClick}>SI</Button>
      <div className="SolicitudBeca"></div>;
    </>
  );
};

export default SolicitudBeca;
