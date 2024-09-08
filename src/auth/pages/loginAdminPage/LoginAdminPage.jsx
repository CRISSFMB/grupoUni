import { Navigate, useNavigate } from "react-router-dom";

const LoginAdminPage = () => {
  const navigate = useNavigate();
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    navigate("HomeAdmin");
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
