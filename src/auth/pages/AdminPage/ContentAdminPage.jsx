import React from "react";
import "./ContendAdminPage.css";
import CrearCarrera from "../../componentes/CrearCarrera/CrearCarrera";
import { Route, Routes } from "react-router-dom";

const ContentAdminPage = () => {
  return (
    <div className="ContendAdminPage">
      <CrearCarrera />
      <Istec />
    </div>
  );
};

export default ContentAdminPage;
