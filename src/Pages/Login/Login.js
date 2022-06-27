import LoginBox from "../../Components/LoginBox/LoginBox";
import { Navigate } from "react-router-dom";

export default function Login({ authenticated, setAuthenticated }) {
  return (
    <>
      {authenticated && <Navigate to="/Home" />}

      <LoginBox
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
    </>
  );
}
