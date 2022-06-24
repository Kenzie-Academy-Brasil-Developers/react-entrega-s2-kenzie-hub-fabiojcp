import RegisterBox from "../../Components/RegisterBox/RegisterBox";

export default function Register({ authenticated, setAuthenticated }) {
  return (
    <RegisterBox
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
    />
  );
}
