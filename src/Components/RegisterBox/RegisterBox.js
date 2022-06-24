import {
  DivMain,
  DivInpt,
  Form,
  TitleLogin,
  Label,
  Input,
  ButtonSubmit,
} from "../LoginBox/LBStyle.js";
import { Header, Title, BtnBack, Select, Option, LabelSub } from "./RBStyle";
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
import PasswordStrengthBar from "react-password-strength-bar";

export default function RegisterBox({ authenticated, setAuthenticated }) {
  let navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório!"),
    email: yup.string().email("Email inválido").required("Email obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Senha obrigatória!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem")
      .required("Confirmação de senha obrigatória!"),
    bio: yup.string().required("Bio obrigatória!"),
    contact: yup.string().required("Contato obrigatório!"),
    course_module: yup.string().required("Campo obrigatório!"),
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

  function onSubmitFunction({
    name,
    email,
    password,
    course_module,
    contact,
    bio,
  }) {
    const user = { name, email, password, course_module, contact, bio };

    Api.post("users", user)
      .then((response) => {
        toast.success("Conta criada com sucesso", toastStyle);
        Api
        .post("sessions", { email: email, password: password })
        .then(
          (response) => {
            const { token, user } = response.data;
            localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify(user));
            setAuthenticated(true);
            navigate("../Home", { replace: true });
          }
        );
      })
      .catch((err) =>
        toast.error("Erro ao criar usuário, verifique os dados", toastStyle)
      );
  }

  errors.name !== undefined && toast.error(errors.name.message, toastStyle);
  errors.email !== undefined && toast.error(errors.email.message, toastStyle);
  errors.password !== undefined &&
    toast.error(errors.password.message, toastStyle);
  errors.passwordConfirm !== undefined &&
    toast.error(errors.passwordConfirm.message, toastStyle);
  errors.bio !== undefined && toast.error(errors.bio.message, toastStyle);
  errors.contact !== undefined &&
    toast.error(errors.contact.message, toastStyle);
  errors.course_module !== undefined &&
    toast.error(errors.course_module.message, toastStyle);

  const [password, setPassword] = useState("");
  return (
    <>
      <Header>
        <Title>Kenzie Hub</Title>
        <Link to={"/"}>
          <BtnBack>Voltar</BtnBack>
        </Link>
      </Header>
      <DivMain>
        <DivInpt>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <TitleLogin>Crie sua conta</TitleLogin>
            <LabelSub>Rapido e grátis, vamos nessa</LabelSub>
            <Label>Nome</Label>
            <Input
              placeholder="Digite seu nome"
              {...register("name")}
              name="name"
              error={errors.name?.message}
            ></Input>
            <Label>Email</Label>
            <Input
              placeholder="Digite seu email"
              {...register("email")}
              name="email"
              error={errors.email?.message}
            ></Input>
            <Label>Senha</Label>
            <div>
              <Input
                placeholder="Digite seu senha"
                {...register("password")}
                name="password"
                error={errors.password?.message}
                value={password}
                onChange={(event) => setPassword(`${event.target.value}`)}
              ></Input>
              {type === "password" ? (
                <EyeFilled
                  style={{
                    position: "absolute",
                    marginLeft: "60%",
                    marginTop: "-7.8vh",
                    color: "white",
                    cursor: "pointer",
                  }}
                  size="1.4em"
                  onClick={passwordType}
                />
              ) : (
                <EyeInvisibleFilled
                  style={{
                    position: "absolute",
                    marginLeft: "60%",
                    marginTop: "-7.8vh",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={passwordType}
                />
              )}
              <PasswordStrengthBar
                password={password}
                className="PasswordStrengthBar"
                style={{ margin: "-3vh 0 2vh 0" }}
              />
            </div>
            <Label>Confirmar senha</Label>
            <div>
              <Input
                placeholder="Digite seu senha novamente"
                {...register("passwordConfirm")}
                name="passwordConfirm"
                error={errors.passwordConfirm?.message}
              ></Input>
              {type === "password" ? (
                <EyeFilled
                  style={{
                    position: "absolute",
                    marginLeft: "60%",
                    marginTop: "-7.8vh",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={passwordType}
                />
              ) : (
                <EyeInvisibleFilled
                  style={{
                    position: "absolute",
                    marginLeft: "60%",
                    marginTop: "-7.8vh",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={passwordType}
                />
              )}
            </div>
            <Label>Bio</Label>
            <Input
              placeholder="Fale sobre você"
              {...register("bio")}
              name="bio"
              error={errors.bio?.message}
            ></Input>
            <Label>Contato</Label>
            <Input
              placeholder="Opção de contato"
              {...register("contact")}
              name="contact"
              error={errors.contact?.message}
            ></Input>
            <Label>Selecionar módulo</Label>
            <Select {...register("course_module")} type="select">
              <Option>Primeiro módulo (Introdução ao Frontend)</Option>
              <Option>Segundo módulo (Frontend Avançado)</Option>
              <Option>Terceiro módulo (Introdução ao Backend)</Option>
              <Option>Quarto módulo (Backend Avançado)</Option>
            </Select>
            <ButtonSubmit
              type="submit"
              onClick={handleSubmit(onSubmitFunction)}
            >
              Cadastrar
            </ButtonSubmit>
          </Form>
        </DivInpt>
      </DivMain>
      <ToastContainer />
    </>
  );
}

/*
bio: "sei lá"
contact: "11930151064"
course_module: "Primeiro módulo (Introdução ao Frontend)"
created_at: "2022-06-24T06:12:16.451Z"
email: "fabio50019@gmail.com"
id: "07ce8aa6-9774-4c37-8cf3-f8bb9c28bf25"
name: "Fábio José Casanova Penteado"
updated_at: "2022-06-24T06:12:16.451Z"
*/
