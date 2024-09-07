import { Route, Routes } from "react-router-dom";
import LoginAdminPage from "../auth/pages/loginAdminPage/LoginAdminPage";
import UserRegistrationRouter from "../ userRegistration/routes/userRegistrationRouter";

const AppRouter = () => (
  <div className="center">
    <Routes>
      <Route path="login" element={<LoginAdminPage />} />
      <Route path="/*" element={<UserRegistrationRouter />} />
    </Routes>
  </div>
);

export default AppRouter;
