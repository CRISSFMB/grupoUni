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
import PersonalIncome from "../pages/PersonalIncome";
import FormFamilyInformation from "../pages/FormFamilyInformation";
import FormDiscapacidad from "../pages/FormDiscapacidad";

const UserRegistrationRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePagesRegister />} />

      {/* carrera */}
      <Route path="formCarrera" element={<FormCarrera />} />

      {/* matricula */}
      <Route path="formCarrera/formMatricula" element={<FormMatricula />} />

      {/* datos personales */}
      <Route
        path="/formCarrera/formMatricula/formPersonalData"
        element={<FormPersonalData />}
      />
      {/* residencia o direccion */}
      <Route path="formPersonalAdresse" element={<FormPersonalAdresse />} />

      {/* informacion general */}
      <Route path="formGeneralInfo" element={<FormGeneralInfo />} />

      {/* informacion salud */}
      <Route
        path="/formGeneralInfo/FormHealthInformation"
        element={<FormHealtInformation />}
      />

      {/* servicios */}
      <Route
        path="/formGeneralInfo/FormHealthInformation/formInstitutionalServices"
        element={<FormInstitutionalServices />}
      />

      {/* estudios personales */}
      <Route
        path="/formGeneralInfo/FormHealthInformation/formInstitutionalServices/formPersonalStudies"
        element={<FormPersonalStudies />}
      />

      {/* ingresosPersonales */}

      <Route
        path="/formGeneralInfo/FormHealthInformation/formInstitutionalServices/formPersonalStudies/personalIncome"
        element={<PersonalIncome />}
      />

      {/* familyInfomation */}
      <Route
        path="/formGeneralInfo/FormHealthInformation/formInstitutionalServices/formPersonalStudies/personalIncome/formFamilyInformation"
        element={<FormFamilyInformation />}
      />

      {/* formDiscapacidad */}
      <Route
        path="/formGeneralInfo/FormHealthInformation/formInstitutionalServices/formPersonalStudies/personalIncome/formFamilyInformation/formDiscapacidad"
        element={<FormDiscapacidad />}
      />
    </Routes>
  );
};

export default UserRegistrationRouter;
