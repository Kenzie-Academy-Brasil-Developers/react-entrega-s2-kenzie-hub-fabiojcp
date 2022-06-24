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
} from "./LBStyle.jsx";
import { Link } from "react-router-dom";

export default function LoginBox({ device }) {
  return (
    <>
        <DivMain>
          <Title>Kenzie Hub</Title>
          <DivInpt>
            <Form onSubmit={(event) => event.preventDefault()}>
              <TitleLogin>Login</TitleLogin>
              <Label>Email</Label>
              <Input placeholder="Enter your email"></Input>
              <Label>Senha</Label>
              <Input type="password" placeholder="Enter your password"></Input>
              <ButtonSubmit>Entrar</ButtonSubmit>
            </Form>
            <LabelSub>Ainda não possui um conta?</LabelSub>
            <Link to={"/Register"} class="LBLink">
            <BtnRegister>Cadastre-se</BtnRegister>
            </Link>
          </DivInpt>
        </DivMain>
    </>
  );
}