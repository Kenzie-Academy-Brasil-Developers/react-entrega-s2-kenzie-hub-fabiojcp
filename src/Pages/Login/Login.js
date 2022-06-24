import LoginBox from "../../Components/LoginBox/LoginBox";

export default function Login({ authenticated, setAuthenticated }) {
  return (
    <LoginBox
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
    />
  );
}
