import styled, { keyframes } from "styled-components";
import devices from "../../Assets/Devices/Devices";

const animation = keyframes`
    from{
        opacity: 0;
        transform: scale(0.6)
    }
    to{
        opacity: 1;
        transform: scale(1)
    }
`;

export const DivMain = styled.div`
  animation: ${animation} 1s;
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5vh;
  }
`;

export const Title = styled.p`
  @media ${devices.mobileSS} {
    color: #ff577f;
    font-weight: 800;
    font-size: 5vw;
    margin: 10vh 0 4vh 0;
  }
`;

export const DivInpt = styled.div`
  @media ${devices.mobileSS} {
    background: #212529;
    width: 85vw;
    border-radius: 10px;
    box-shadow: 0px 0px 40px -10px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6vh 0;
  }
`;

export const Form = styled.form`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
`;

export const TitleLogin = styled.p`
  @media ${devices.mobileSS} {
    font-weight: 700;
    color: #f8f9fa;
    font-size: 3.5vw;
    margin: 0 0 10% 0;
  }
`;

export const Label = styled.label`
  @media ${devices.mobileSS} {
    color: #f8f9fa;
    width: 100%;
    font-size: 3vw;
    margin-bottom: 2%;
    display: flex;
    align-items: flex-start;
    margin: 0 0 2vh 0;
  }
`;

export const Input = styled.input`
  @media ${devices.mobileSS} {
    background-color: #343b41;
    color: #f8f9fa;
    border: 1px solid transparent;
    width: 96%;
    height: 4vh;
    border-radius: 5px;
    font-size: 3vw;
    padding: 1vh 0 1vh 4%;
    margin: 0 0 4vh 0;
  }
  ::placeholder {
    color: #868e96;
  }
  :focus-visible {
    border: 1px solid #f8f9fa;
  }
`;

export const ButtonSubmit = styled.button`
  @media ${devices.mobileSS} {
    width: 100%;
    background: #ff427f;
    border: 1px solid #ff427f;
    border-radius: 5px;
    padding: 1.5vh 0;
    font-family: Inter;
    color: white;
  }
  :active {
    background: #ff577f;
  }
`;

export const LabelSub = styled.label`
  @media ${devices.mobileSS} {
    color: #868e96;
    width: 100%;
    font-size: 3vw;
    margin-bottom: 2%;
    text-align: center;
    margin: 5vh 0 5vh 0;
  }
`;

export const BtnRegister = styled.button`
  @media ${devices.mobileSS} {
    width: 80%;
    background: #868e96;
    border: 1px solid #868e96;
    border-radius: 5px;
    padding: 1.5vh 0;
    font-family: Inter;
    color: white;
  }
  :active {
    background: #343b41;
    border: 1px solid #343b41;
  }
`;


export const DivErros = styled.div`
  position: fixed;
  right: 10vw;
  top: 2vh;
  width: 30%;
  display: flex;
  justify-content: flex-end
`

export const Span = styled.p`
border: 2px solid red;
border-radius: 5%;
padding: 0.5vh;
background-color: #624385;
`