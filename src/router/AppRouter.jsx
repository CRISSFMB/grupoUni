import LoginAdminPage from "../auth/pages/loginAdminPage/LoginAdminPage";
import UserRegistrationRouter from "../ userRegistration/routes/UserRegistrationRouter";
import { Route, Routes } from "react-router-dom";
import InicioAdm from "../auth/pages/AdminPage/InicioAdm";

const AppRouter = () => (
  <div className="container">
    <Routes>
      <Route path="login" element={<LoginAdminPage />} />
      <Route path="HomeAdmin/*" element={<InicioAdm />} />
      <Route path="/*" element={<UserRegistrationRouter />} />
    </Routes>
  </div>
);

export default AppRouter;
