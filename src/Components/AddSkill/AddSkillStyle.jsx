import styled, { keyframes } from "styled-components";
import devices from "../../Assets/Devices/Devices";

const animation = keyframes`
    from{
        opacity: 0;
        transform: scale(0.6);
        box-shadow: none
    }
    to{
        opacity: 1;
        transform: scale(1);
        box-shadow: 0 0 5000px 5000px #ffffff16;
    }
`;

export const DivMain = styled.div`
  animation: ${animation} 1s;
  @media ${devices.mobileSS} {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: 20vh 5vw 0 5vw;
    padding: 0 0 2vh 0;
    background: #212529;
    border-radius: 4px;
    font-family: Inter;
    color: #f8f9fa;
    box-shadow: 0 0 5000px 5000px #ffffff16;
    z-index: 2;
  }
  @media ${devices.tabletS} {
    width: 60vw;
    margin: 20vh 20vw 0 20vw;
  }
`;

export const Header = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #343b41;
    padding: 2vh 5%;
    width: 90%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

export const HeaderTitle = styled.p`
  @media ${devices.mobileSS} {
    font-weight: 700;
    font-size: 4.5vw;
  }
  @media ${devices.tabletS} {
    font-weight: 700;
    font-size: 2.5vw;
  }
`;

export const BtnClose = styled.button`
  @media ${devices.mobileSS} {
    background: #343b41;
    border: none;
    color: #f8f9fa;
  }
  &:hover {
    filter: invert(0.1);
  }
`;

export const Form = styled.form`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 5%;
    width: 90%;
  }

`;

export const Label = styled.label`
  @media ${devices.mobileSS} {
    margin: 2vh 0;
    font-weight: 400;
    font-size: 4vw;
  }
  @media ${devices.tabletS} {
    font-weight: 700;
    font-size: 2vw;
  }
`;

export const Input = styled.input`
  @media ${devices.mobileSS} {
    background: #343b41;
    border: 1px solid #343b41;
    border-radius: 4px;
    color: #f8f9fa;
    padding-left: 2%;
    width: 98%;
  }
`;

export const Select = styled.select`
  @media ${devices.mobileSS} {
    width: 100%;
    background: #343b41;
    border: 1px solid #343b41;
    border-radius: 4px;
    color: #868e96;
    font-family: Inter;
    margin: 0 0 1vh 0;
  }
  @media ${devices.tabletS} {
    font-size: 2vw;
  }
`;

export const Option = styled.option`
  @media ${devices.mobileSS} {
    color: #f8f9fa;
  }
`;

export const BtnAdd = styled.button`
  @media ${devices.mobileSS} {
    width: 100%;
    background: #ff427e;
    border: 1px solid #ff427f;
    border-radius: 5px;
    padding: 1.5vh 0;
    font-family: Inter;
    color: white;
    margin: 2vh 0 0 0;
  }
  :active {
    background: #ff577f;
  }
  :hover {
    background: #ff577f;
  }
`;
