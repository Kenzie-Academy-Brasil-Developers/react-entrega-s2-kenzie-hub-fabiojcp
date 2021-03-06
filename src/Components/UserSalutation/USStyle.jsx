import styled from "styled-components";
import devices from "../../Assets/Devices/Devices";
//DivMain, Title, Text

export const DivMain = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 94vw;
    padding: 5vh 3vw;
    color: white;
    font-family: Inter;
    border-top: 1px solid #212529;
    border-bottom: 1px solid #212529;
  }
  @media ${devices.tabletS} {
    width: 60vw;
    padding: 5vh 20vw;
    flex-direction: row;
  }
`;

export const Title = styled.div`
  @media ${devices.mobileSS} {
    font-size: 4.5vw;
    margin: 0 0 2vh 0;
    font-weight: 700;
  }
  @media ${devices.tabletS} {
    font-size: 2.5vw;
  }
`;

export const Text = styled.div`
  @media ${devices.mobileSS} {
    font-size: 3.2vw;
    font-weight: 400;
  }
  @media ${devices.tabletS} {
    font-size: 1.5vw;
  }
`;