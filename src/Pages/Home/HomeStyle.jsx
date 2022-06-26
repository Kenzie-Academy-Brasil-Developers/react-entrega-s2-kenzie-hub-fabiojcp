import styled from "styled-components";
import devices from "../../Assets/Devices/Devices";

export const Header = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 94vw;
    margin: 3vh 3vw 2vh 3vw;
  }
  @media ${devices.tabletS} {
    width: 60vw;
    margin: 3vh 20vw 2vh 20vw;
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
  @media ${devices.laptop} {
font-size: 2vw;
  }
  :hover {
    background: #868E96;
  }
`;