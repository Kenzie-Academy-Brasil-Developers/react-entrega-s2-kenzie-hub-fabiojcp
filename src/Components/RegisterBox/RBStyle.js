import styled from "styled-components";
import devices from "../../Assets/Devices/Devices";

export const Header = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 85vw;
    margin: 5vh 7.5vw 3vh 7.5vw;
  }
  @media ${devices.tabletS} {
    width: 40%;
    margin: 5vh 30% 3vh 30%;
  }
`;

export const Title = styled.p`
  @media ${devices.mobileSS} {
    color: #ff577f;
    font-weight: 800;
    font-size: 5vw;
  }
  @media ${devices.tabletS} {
    font-size: 3vw;
  }
`;

export const BtnBack = styled.button`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #212529;
    border-radius: 4px;
    color: #F8F9FA;
    border: none;
    padding: 1vh 3vw;
    text-decoration: none;
  }
  @media ${devices.tabletS} {
    padding: 1vh 2vw;
  }
  :hover {
    background: #212535;
  }
`;

export const Select = styled.select`
  @media ${devices.mobileSS} {
    background-color: #343b41;
    color: #868e96;
    border: 1px solid transparent;
    width: 100%;
    height: 6vh;
    border-radius: 5px;
    font-size: 3vw;
    padding: 1vh 0 1vh 4%;
    margin: 0 0 4vh 0;
    overflow-y: scroll;
  }
  ::placeholder {
    color: #868e96;
  }
  :focus-visible {
    border: 1px solid #f8f9fa;
  }
  @media ${devices.tabletS} {
    font-size: 1.5vw;
    margin-bottom: 4%;
  }
`;

export const Option = styled.option`
  @media ${devices.mobileSS} {
    background-color: #343b41;
    color: #f8f9fa;
    border: 1px solid transparent;
    width: 96%;
    height: 4vh;
    border-radius: 5px;
    font-size: 3vw;
    padding: 0.5vh 0 0.5vh 4%;
    margin: 0 0 4vh 0;
  }
  ::placeholder {
    color: #868e96;
  }
  :focus-visible {
    border: 1px solid #f8f9fa;
  }
`;

export const LabelSub = styled.p`
  @media ${devices.mobileSS} {
    color: #868e96;
    width: 100%;
    font-size: 3vw;
    margin-bottom: 2%;
    text-align: center;
    margin: 0 0 2vh 0;
  }
  @media ${devices.tabletS} {
    font-size: 2vw;
    margin-bottom: 4%;
  }
`