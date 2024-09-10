import { Route, Routes } from "react-router-dom";
import LoginAdminPage from "../auth/pages/loginAdminPage/LoginAdminPage";
import UserRegistrationRouter from "../ userRegistration/routes/UserRegistrationRouter";
import AuthRouters from "../auth/routers/AuthRouters";
import Bienestar from "../auth/pages/AdminPage/bienestar";
import Istec from "../auth/pages/AdminPage/istec";
import Puce from "../auth/pages/AdminPage/puce";

const AppRouter = () => (
  <div className="center">
    <Routes>
      <Route path="login" element={<LoginAdminPage />} />
      <Route path="/login/HomeAdmin" element={<AuthRouters />} />
      <Route path="/*" element={<UserRegistrationRouter />} />
      <Route path="/login/HomeAdmin/bienestar" element={<Bienestar />} />
      <Route path="/login/HomeAdmin/istec" element={<Istec />} />
      <Route path="/login/HomeAdmin/puce" element={<Puce />} />
    </Routes>
  </div>
);

export default AppRouter;
