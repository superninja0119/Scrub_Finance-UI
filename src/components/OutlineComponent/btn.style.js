import styled from "styled-components";

export const CusBtn = styled.div`
  .MuiButton-outlined {
    color: #fff;
    transition: all 0.3s ease-in-out;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-family: Chakra;
    font-size: 13px;
    :hover {
      background-color: rgba(255, 255, 255, 0.2) !important;
    }
  }
`;
