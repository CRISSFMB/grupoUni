import { Route, Routes } from "react-router-dom";
import LoginAdminPage from "../auth/pages/loginAdminPage/LoginAdminPage";
import UserRegistrationRouter from "../userRegistration/routes/UserRegistrationRouter";
import AuthRouters from "../auth/routers/AuthRouters";

const AppRouter = () => (
  <div className="center">
    <Routes>
      <Route path="login" element={<LoginAdminPage />} />
      <Route path="/login/HomeAdmin" element={<AuthRouters />} />
      <Route path="/*" element={<UserRegistrationRouter />} />
    </Routes>
  </div>
);

export default AppRouter;
