import styled from "styled-components";

export const Land = styled.div`
  width: 100vw;
  border-bottom: 2px solid #ff8718;
  height: 80px;
  background-color: #5e1e0c;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 100;
  @media screen and (max-width: 830px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;
export const LandOut = styled.div`
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1410px) {
    width: 100%;
  }
`;

export const LogoImg = styled.img`
  @media screen and (max-width: 1500px) {
    margin-left: 30px;
  }
`;
export const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  @media screen and (max-width: 830px) {
    display: none;
  }
`;
export const Tab = styled.div`
  font-style: normal;
  font-family: Chakra;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  line-height: 33px;
  text-align: center;
  color: ${(props) => (props.active ? "#ff8718" : "#FFFFFF")};
`;
export const WalletBtn = styled.div`
  @media screen and (max-width: 1500px) {
    margin-right: 30px;
  }
  @media screen and (max-width: 830px) {
    width: 80%;
    margin-right: 0;
  }
`;
export const SocialIcons = styled.div`
  gap: 50px;
  display: none;
  .socialIcon {
    color: #fff;
    cursor: pointer;
    font-size: 30px;
  }
  @media screen and (max-width: 830px) {
    display: flex;
  }
`;
export const ResTabs = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 80px;
  gap: 30px;
  padding: 30px 0;
  background-color: #5e1e0c;
  @media screen and (max-width: 830px) {
    display: flex;
    align-items: center;
  }
`;

export const ZapModal = styled.div`
  font-family: Chakra;
`;

export const ZapBack = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ZapModalBody = styled.div`
  z-index: 105;
  background-color: #fff;
  position: fixed;
  padding: 20px 25px 40px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  border-radius: 10px;
  height: fit-content;
  @media screen and (max-width: 500px) {
    padding: 20px 15px 40px;
  }
`;

export const CloseBtn = styled.div`
  width: 100%;
  display: flex;
  font-family: ChakraBold;
  font-size: 25px;
  justify-content: flex-end;
  .closeclass {
    cursor: pointer;
  }
`;
export const WalletTitle = styled.div`
  font-family: ChakraBold;
  color: #000;
  font-size: 22px;
  margin: 0 0 25px;
`;
export const Items = styled.div`
  display: flex;
  gap: 50px;
  @media screen and (max-width: 500px) {
    gap: 15px;
  }
`;
export const Item = styled.div``;
export const ItemImg = styled.img`
  width: 100px;
  @media screen and (max-width: 500px) {
    width: 70px;
  }
`;
export const ItemNumber = styled.div`
  font-family: ChakraBold;
  font-size: 20px;
  color: #5e1e0c;
`;
export const ItemName = styled.div`
  color: #ffb802;
  font-family: ChakraBold;
  line-height: 16px;
  @media screen and (max-width: 500px) {
    width: 90px;
  }
`;
