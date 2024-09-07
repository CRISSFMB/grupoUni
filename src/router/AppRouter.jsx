import { Route, Routes } from "react-router-dom";
import LoginAdminPage from "../auth/pages/loginAdminPage/LoginAdminPage";
import UserRegistrationRouter from "../ userRegistration/routes/UserRegistrationRouter";

const AppRouter = () => (
  <div className="container">
    <Routes>
      <Route path="login" element={<LoginAdminPage />} />
      <Route path="/*" element={<UserRegistrationRouter />} />
    </Routes>
  </div>
);

export default AppRouter;
