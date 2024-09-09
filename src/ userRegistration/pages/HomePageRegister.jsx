import "../css/homePageRegister.css";
import { useNavigate } from "react-router-dom";
import BienvenidoHome from "../components/homeComponents/BienvenidoHome";
import { useEffect, useState } from "react";
import SolicitudBeca from "../components/homeComponents/SolicitudBeca";

import logo from "../../assets/istec2.png";
import PUCE from "../../assets/PE.png"; // Imagen izquierda
import ISTEC from "../../assets/logo-istec.png"; // Imagen derecha

function HomePageRegister() {
  const [mostrarBienvenido, setMostrarBienvenido] = useState(true);
  const [universidad, setUniversidad] = useState(""); // Variable para la universidad seleccionada
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarBienvenido(false);
    }, 5000); // Cambiar después de 5 segundos (5000 milisegundos)

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, []);

  const handleLeftImageClick = () => {
    setUniversidad("PUCE"); // Almacenar "PUCE" cuando se haga clic en la imagen de la izquierda
    navigate("homePucePerro", { state: { universidad: "PUCE" } }); // Pasar la variable a la siguiente página
  };

  const handleRightImageClick = () => {
    setUniversidad("ISTEC"); // Almacenar "ISTEC" cuando se haga clic en la imagen de la derecha
    navigate("formCarreraIs", { state: { universidad: "ISTEC" } }); // Pasar la variable a la siguiente página
  };

  return (
    <>
      {mostrarBienvenido ? (
        <BienvenidoHome />
      ) : (
        <div className="container1">
          <div className="image-group1">
            <img
              src={PUCE}
              alt="Imagen Izquierda"
              className="side-image1"
              onClick={handleLeftImageClick}
            />
            <img
              src={ISTEC}
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
