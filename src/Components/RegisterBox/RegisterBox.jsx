import {
  DivMain,
  DivInpt,
  Form,
  TitleLogin,
  Label,
  Input,
  ButtonSubmit,
} from "../LoginBox/LBStyle.jsx";
import { Header, Title, BtnBack, Select, Option, LabelSub } from "./RBStyle";
import { Link } from "react-router-dom";

export default function RegisterBox() {
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
          <Form onSubmit={(event) => event.preventDefault()}>
            <TitleLogin>Crie sua conta</TitleLogin>
            <LabelSub>Rapido e grátis, vamos nessa</LabelSub>
            <Label>Nome</Label>
            <Input placeholder="Digite seu nome"></Input>
            <Label>Email</Label>
            <Input placeholder="Digite seu email"></Input>
            <Label>Senha</Label>
            <Input placeholder="Digite seu senha"></Input>
            <Label>Confirmar senha</Label>
            <Input placeholder="Digite seu senha novamente"></Input>
            <Label>Bio</Label>
            <Input placeholder="Fale sobre você"></Input>
            <Label>Contato</Label>
            <Input placeholder="Opção de contato"></Input>
            <Label>Selecionar módulo</Label>
            <Select>
              <Option>Primero módulo</Option>
              <Option>Segundo módulo</Option>
              <Option>Terceiro módulo</Option>
              <Option>Quarto módulo</Option>
            </Select>
            <ButtonSubmit>Cadastrar</ButtonSubmit>
          </Form>
        </DivInpt>
      </DivMain>
    </>
  );
}
