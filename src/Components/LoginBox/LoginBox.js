import {
  DivMain,
  Title,
  DivInpt,
  Form,
  TitleLogin,
  Label,
  Input,
  ButtonSubmit,
  LabelSub,
  BtnRegister,
  DivErros,
  Span,
} from "./LBStyle.js";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Assets/CSS/style.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Api from "../../Services/Api.js";
import devices from "../../Assets/Devices/Devices.jsx";

export default function LoginBox({ authenticated, setAuthenticated }) {
  let navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório!").email("Email inválido"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Senha obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [type, setType] = useState("password");

  const passwordType = () => {
    type === "password" ? setType("text") : setType("password");
  };

  const toastStyle = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: 1,
  };

  function onSubmitFunction(data) {
    Api.post("sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        toast.success("Login feito com sucesso", toastStyle);
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));
        setAuthenticated(true);
        navigate("../Home", { replace: true });
      })
      .catch((err) =>
        toast.error("Confira todos os campos, você é cadastrado?", toastStyle)
      );
  }

  errors.email !== undefined && toast.error(errors.email.message, toastStyle);

  errors.password !== undefined &&
    toast.error(errors.password.message, toastStyle);

  return (
    <>
      <DivMain>
        <Title>Kenzie Hub</Title>
        <DivInpt>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <TitleLogin>Login</TitleLogin>
            <Label>Email</Label>
            <Input
              {...register("email")}
              name="email"
              placeholder="Enter your email"
              error={errors.email?.message}
            ></Input>
            <Label>Senha</Label>
            <div>
              <Input
                {...register("password")}
                name="password"
                type={type}
                placeholder="Enter your password"
                error={errors.password?.message}
              ></Input>
              {type === "password" ? (
                <EyeFilled
                  style={{
                    "@media (min-width: 0px)": {
                      position: "absolute",
                      marginLeft: "60%",
                      marginTop: "-7.8vh",
                      color: "black",
                      cursor: "pointer",
                    },
                    "@media (min-width: 540px)": {
                      marginLeft: "60%",
                      marginTop: "-6.8vh",
                    },
                  }}
                  onClick={passwordType}
                />
              ) : (
                <EyeInvisibleFilled
                  style={{
                    "@media (min-width: 0px)": {
                      position: "absolute",
                      marginLeft: "60%",
                      marginTop: "-6.8vh",
                      color: "black",
                      cursor: "pointer",
                    },
                    "@media (min-width: 540px)": {
                      marginLeft: "60%",
                      marginTop: "-6.8vh",
                    },
                  }}
                  onClick={passwordType}
                />
              )}
            </div>
            <ButtonSubmit onClick={handleSubmit(onSubmitFunction)}>
              Entrar
            </ButtonSubmit>
          </Form>
          <LabelSub>Ainda não possui um conta?</LabelSub>
          <Link to={"/Register"} className="LBLink">
            <BtnRegister>Cadastre-se</BtnRegister>
          </Link>
        </DivInpt>
      </DivMain>
      <ToastContainer />
    </>
  );
}
