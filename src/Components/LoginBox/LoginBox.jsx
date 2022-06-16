import {
  TitleL,
  DivInptL,
  FormL,
  TitleLoginL,
  LabelL,
  InputL,
  ButtonSubmitL,
  BtnRegisterL,
} from "./LBLandscape.jsx";
import {
    TitleP,
    DivInptP,
    FormP,
    TitleLoginP,
    LabelP,
    InputP,
    ButtonSubmitP,
    BtnRegisterP,
} from "./PBPortait.jsx";

export default function LoginBox({ device }) {
  return (
    <>
      {device === true ? (
        <>
          <TitleL>Kenzie Hub</TitleL>
          <DivInptL>
            <FormL onSubmit={(event) => event.preventDefault()}>
              <TitleLoginL>Login</TitleLoginL>
              <LabelL>Email</LabelL>
              <InputL type="email" placeholder="Enter your email" />
              <LabelL>Senha</LabelL>
              <InputL type="password" placeholder="Enter your password" />
              <ButtonSubmitL>Entrar</ButtonSubmitL>
            </FormL>
            <LabelL>Ainda não possui um conta?</LabelL>
            <BtnRegisterL>Cadastre-se</BtnRegisterL>
          </DivInptL>
        </>
      ) : (
        <>
          <TitleP>Kenzie Hub</TitleP>
          <DivInptP>
            <FormP onSubmit={(event) => event.preventDefault()}>
              <TitleLoginP>Login</TitleLoginP>
              <LabelP>Email</LabelP>
              <InputP type="email" placeholder="Enter your email" />
              <LabelP>Senha</LabelP>
              <InputP type="password" placeholder="Enter your password" />
              <ButtonSubmitP>Entrar</ButtonSubmitP>
            </FormP>
            <LabelP>Ainda não possui um conta?</LabelP>
            <BtnRegisterP>Cadastre-se</BtnRegisterP>
          </DivInptP>
        </>
      )}
    </>
  );
}