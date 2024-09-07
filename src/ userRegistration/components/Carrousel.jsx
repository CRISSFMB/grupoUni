import React from "react";
import "./Carrousel.css";

import istecLogoCarrouse from "../../assetsCarrousel/logo-istec.png";
import puceLogoCarrouse from "../../assetsCarrousel/logo-puce.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carrousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-zU96KfUwQhW6h7ktgYuIgqa15CTuk4ofA&s",
    "https://4.bp.blogspot.com/-VnrxI882W64/XLdOr6qbt-I/AAAAAAAABHU/CFEvTVLjp24qugeHnXO3S1AlBQwED8ElACK4BGAYYCw/s1600/PORTADA.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1NacFuK8cIK4YHI8L6jp6Jy__5IJEvqu-uQ&s",
  ];

  return (
    <div className="app-container">
      {/* Carrusel de imágenes */}
      <div style={{ width: "600px", margin: "0 auto" }}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`slide-${index}`} style={{ width: "100%" }} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Sección de logos */}
      <section className="logo-section">
        <img
          src={istecLogoCarrouse}
          alt="ISTEC Logo"
          className="logo"
          onClick={() => handleClick("ISTEC")}
          style={{ cursor: "pointer" }}
        />
        <img
          src={puceLogoCarrouse}
          alt="PUCE Logo"
          className="logo"
          onClick={() => handleClick("PUCE")}
          style={{ cursor: "pointer" }}
        />
      </section>
    </div>
  );
}

export default Carrousel;
