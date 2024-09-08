import "../css/homePageRegister.css";

import { useNavigate } from "react-router-dom";
import BienvenidoHome from "../components/homeComponents/BienvenidoHome";
import { useEffect, useState } from "react";
import SolicitudBeca from "../components/homeComponents/SolicitudBeca";

import logo from "../../assets/istec2.png";
import puce from "../../assets/PE.png"; // Imagen izquierda
import istec from "../../assets/logo-istec.png"; // Imagen derecha

function HomePageRegister() {
  const [mostrarBienvenido, setMostrarBienvenido] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarBienvenido(false);
    }, 5000); // Cambiar después de 5 segundos (5000 milisegundos)

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, []);

  const navigate = useNavigate();

  const handleLeftImageClick = () => {
    navigate("homePucePerro");
  };

  const handleRightImageClick = () => {
    navigate("formCarrera");
  };
  return (
    <>
      {/* <Carrousel /> */}

      {mostrarBienvenido ? (
        <BienvenidoHome />
      ) : (
        <div className="container1">
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
      )}
    </>
  );
}

export default HomePageRegister;
