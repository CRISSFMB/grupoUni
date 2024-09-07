import { Form, Navigate, Route, Routes } from "react-router-dom";
import HomePagesRegister from "../pages/HomePageRegister";
import FormCarrera from "../pages/FormCarrera";
import FormMatricula from "../pages/FormMatricula";
import FormPersonalData from "../pages/FormPersonalData";
import FormPersonalAdresse from "../pages/FormPersonalAdresse";
import FormGeneralInfo from "../pages/FormGeneralInfo";

const UserRegistrationRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePagesRegister />} />
      <Route path="formCarrera" element={<FormCarrera />} />
      <Route path="formCarrera/formMatricula" element={<FormMatricula />} />
      <Route
        path="/formCarrera/formMatricula/formPersonalData"
        element={<FormPersonalData />}
      />
      <Route path="formPersonalAdresse" element={<FormPersonalAdresse />} />
      <Route path="formGeneralInfo" element={<FormGeneralInfo />} />
    </Routes>
  );
};

export default UserRegistrationRouter;
