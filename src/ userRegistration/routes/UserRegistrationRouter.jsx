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
import HomePucePerro from "../pages/HomePucePerro";

{/* Rutas ISTEC */}
import FormCarreraistec from "../pages/FormCarreraIstec";
import FormMatriculaIstec from "../pages/FormMatriculaIstec";
import FormPersonalDataIstec from "../pages/FormPersonalDataIstec";
import FormPersonalAdresseIstec from "../pages/FormPersonalAdresseIstec";
import FormGeneralInfoIstec from "../pages/FormGeneralInfoIstec";
import FormHealtInformationIstec from "../pages/FormHealthInformationIstec";
import FormInstitutionalServicesIstec from "../pages/FormInstitutionalServicesIstec";
import FormPersonalStudiesIstec from "../pages/FormPersonalStudiesIstec";
import PersonalIncomeIstec from "../pages/PersonalIncomeIstec";
import FormFamilyInformationistec from "../pages/FormFamilyInformationIstec";
import FormDiscapacidadIstec from "../pages/FormDiscapacidadIstec";

const UserRegistrationRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePagesRegister />} />

      {/* Rutas de PUCE */}

      <Route path="/homePucePerro" element={<HomePucePerro />} />
      <Route path="/homePucePerro/formCarrera" element={<FormCarrera />} />
      {/* matricula */}
      <Route
        path="/homePucePerro/formCarrera/formMatricula"
        element={<FormMatricula />}
      />
      {/* datos personales */}
      <Route
        path="/homePucePerro/formCarrera/formMatricula/formPersonalData"
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
        
      {/* Rutas de ISTEC */} 

      <Route path="/formCarreraIs" element={<FormCarreraistec />} />
      {/* matricula */}
      <Route
        path="/formCarreraIs/formMatriculaIs"
        element={<FormMatriculaIstec/>}
      />
      {/* datos personales */}
      <Route
        path="/formCarreraIs/formMatriculaIs/formPersonalDataIs"
        element={<FormPersonalDataIstec/>}
      />
      {/* residencia o direccion */}
      <Route path="formPersonalAdresseIs" element={<FormPersonalAdresseIstec />} />
      {/* informacion general */}
      <Route path="formGeneralInfoIs" element={<FormGeneralInfoIstec />} />
      {/* informacion salud */}
      <Route
        path="/formGeneralInfoIs/FormHealthInformationIs"
        element={<FormHealtInformationIstec/>}
      />
      {/* servicios */}
      <Route
        path="/formGeneralInfoIs/FormHealthInformationIs/formInstitutionalServicesIs"
        element={<FormInstitutionalServicesIstec />}
        />
      {/* estudios personales */}
      <Route
        path="/formGeneralInfoIs/FormHealthInformationIs/formInstitutionalServicesIs/formPersonalStudiesIs"
        element={<FormPersonalStudiesIstec />}
        />
      {/* ingresosPersonales */}
      <Route
        path="/formGeneralInfoIs/FormHealthInformationIs/formInstitutionalServicesIs/formPersonalStudiesIs/personalIncomeIs"
        element={<PersonalIncomeIstec />}
        />
      {/* familyInfomation */}
      <Route 
        path="/formGeneralInfoIs/FormHealthInformationIs/formInstitutionalServicesIs/formPersonalStudiesIs/personalIncomeIs/formFamilyInformationIs" 
        element={<FormFamilyInformationistec />}
      />
      {/* formDiscapacidad */}
      <Route
        path="/formGeneralInfoIs/FormHealthInformationIs/formInstitutionalServicesIs/formPersonalStudiesIs/personalIncomeIs/formFamilyInformationIs/formDiscapacidadIs"
        element={<FormDiscapacidadIstec/>}
      />


    </Routes>
  );
};

export default UserRegistrationRouter;
