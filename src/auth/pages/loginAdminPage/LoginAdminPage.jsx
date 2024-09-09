import { Navigate, useNavigate } from "react-router-dom";
import "../css/LoginAdmin.css";

const LoginAdminPage = () => {
  const navigate = useNavigate();
  const handleSubmitLogin = (e) => {
    e.preventDefault();

    window.open("https://juansolis.netlify.app/", "_blank");
  };
  return (
    <div className="login">
      <h1>LOGINADMIN</h1>
      <form onSubmit={handleSubmitLogin}>
        <input type="email" />
        <input type="password" />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginAdminPage;
