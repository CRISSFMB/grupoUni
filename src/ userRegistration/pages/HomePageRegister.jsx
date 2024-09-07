import logo from "../../assets/istec2.png";
import puce from "../../assets/PE.png"; // Imagen izquierda
import istec from "../../assets/logo-istec.png"; // Imagen derecha

import "../css/homePageRegister.css";

import { useNavigate } from "react-router-dom";

function HomePageRegister() {
  const navigate = useNavigate();

  const handleLeftImageClick = () => {
    navigate("formCarrera");
  };

  const handleRightImageClick = () => {
    navigate("/isteccarrera");
  };

  return (
    <div className="container1">
      <img src={logo} alt="Logo ISTEC" className="logo" />
      <div className="image-group1">
        <img
          src={puce}
          alt="Imagen Izquierda"
          className="side-image1"
          onClick={handleLeftImageClick}
        />
        <img
          src={istec}
          alt="Imagen Derecha"
          className="side-image1"
          onClick={handleRightImageClick}
        />
      </div>
    </div>
  );
}

export default HomePageRegister;
