import styled from "styled-components";
import devices from "../../Assets/Devices/Devices";

export const BtnEdit = styled.button`
  @media ${devices.mobileSS} {
    width: 70%;
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

export const BtnDelete = styled.button`
  @media ${devices.mobileSS} {
    width: 20%;
    background: #868E96;
    border: 1px solid #868E96;
    border-radius: 5px;
    padding: 1.5vh 0;
    font-family: Inter;
    color: white;
    margin: 2vh 0 0 0;
  }
  :active {
    background: #343B41;
  }
  :hover {
    background: #343B41;
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