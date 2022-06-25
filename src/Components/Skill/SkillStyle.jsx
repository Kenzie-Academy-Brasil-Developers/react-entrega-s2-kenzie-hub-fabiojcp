import styled from "styled-components";
import devices from "../../Assets/Devices/Devices";

export const DivMain = styled.div`
  @media ${devices.mobileSS} {
    font-family: Inter;
    color: #F8F9FA;
    padding: 1vh 4%;
    width: 92%;
    background: #121214;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
  }
`;

export const Title = styled.p`
  @media ${devices.mobileSS} {
    font-weight: 700;
    font-size: 4.3vw;
  }
`;

export const Status = styled.p`
  @media ${devices.mobileSS} {
    font-weight: 200;
    font-size: 3.8vw;
  }
`;
