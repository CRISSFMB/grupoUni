import { Form, Navigate, Route, Routes } from "react-router-dom";
import HomePagesRegister from "../pages/HomePageRegister";
import FormCarrera from "../pages/FormCarrera";
import FormMatricula from "../pages/FormMatricula";
import FormPersonalData from "../pages/FormPersonalData";
import FormPersonalAdresse from "../pages/FormPersonalAdresse";
import FormGeneralInfo from "../pages/FormGeneralInfo";
import FormHealtInformation from "../pages/FormHealthInformation";
import FormInstitutionalServices from "../pages/FormInstitutionalServices";
import FormPersonalStudies from "../pages/FormPersonalStudies";

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
      <Route
        path="/formGeneralInfo/FormHealthInformation"
        element={<FormHealtInformation />}
      />
      <Route
        path="/formGeneralInfo/FormHealthInformation/formInstitutionalServices"
        element={<FormInstitutionalServices />}
      />
      <Route
        path="/formGeneralInfo/FormHealthInformation/formInstitutionalServices/formPersonalStudies"
        element={<FormPersonalStudies />}
      />
    </Routes>
  );
};

export default UserRegistrationRouter;
