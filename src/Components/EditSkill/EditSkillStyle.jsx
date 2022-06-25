import styled from "styled-components";
import devices from "../../Assets/Devices/Devices";

export const BtnEdit = styled.button`
  @media ${devices.mobileSS} {
  }
`;

export const BtnDelete = styled.button`
  @media ${devices.mobileSS} {
  }
`;

export const DivBtns = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2vh 0;
  }
` 