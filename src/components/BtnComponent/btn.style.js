import styled from "styled-components";

export const CusBtn = styled.div`
  .MuiButton-containedPrimary {
    background-color: ${(props) => props.bgColor} !important;
    border-radius: ${(props) => props.radius} !important;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border: solid transparent;
    border-width: 0 0 4px;
    color: #ffffff;
    cursor: pointer;
    font-family: ${(props) => props.family} !important;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.fontsize};
    transition: all 0.3s ease-in-out;
    transform: translateZ(0);
    padding: 0 !important;
    border-bottom: ${(props) =>
      props.borderbottom && "4px solid #b35600"} !important;
    :hover {
      background-color: #e66f00 !important;
    }
  }
`;
