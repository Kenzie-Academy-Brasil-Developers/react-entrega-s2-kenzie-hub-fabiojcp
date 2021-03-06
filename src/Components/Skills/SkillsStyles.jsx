import styled from "styled-components";
import devices from "../../Assets/Devices/Devices";

export const DivMain = styled.div`
  @media ${devices.mobileSS} {
    font-family: Inter;
    color: #f8f9fa;
    padding: 2vh 3vw;
    width: 94vw;
  }
  @media ${devices.tabletS} {
    width: 60vw;
    margin: 2vh 20vw 10vh 20vw;
    padding: 0;
  }
`;

export const Header = styled.div`
  @media ${devices.mobileSS} {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media ${devices.tabletS} {

  }
`;

export const Title = styled.p`
  @media ${devices.mobileSS} {
    font-weight: 600;
    font-size: 4.3vw;
  }
  @media ${devices.tabletS} {
    font-size: 2.5vw;
}
`;

export const BtnAdd = styled.button`
  @media ${devices.mobileSS} {
    background: #212529;
    border-radius: 4px;
    border: none;
    color: #ffffff;
    font-size: 6vw;
  }
  @media ${devices.tabletS} {
    font-size: 3vw;
}
  &:hover {
    background: #343b41;
    border: none;
  }
  &:active {
    background: #4a535c;
    border: none;
  }
`;

export const DivSkills = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 88vw;
    border-radius: 4px;
    gap: 2vh;
    padding: 2vh 3vw;
    background: #212529;
    margin: 2vh 0 2vh 0;
  }
  @media ${devices.tabletS} {
    font-size: 3vw;
    width: 54vw;
}
`;
