import styled from "styled-components";

export const HomeOut = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeBack = styled.div`
  background: url("img/tiger-farms-back.png") no-repeat;
  background-position: center;
  background-size: cover;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
  font-family: ChakraBold;
  font-size: 60px;
  @media screen and (max-width: 550px) {
    font-size: 45px;
  }
`;
export const HomeBody = styled.div`
  width: 1440px;
  position: relative;
  margin-bottom: 120px;
  @media screen and (max-width: 1480px) {
    padding: 0 20px;
    width: 100%;
  }
`;
export const LionCardsOut = styled.div`
  width: 100%;
  @media screen and (max-width: 1130px) {
    overflow-x: auto;
  }
`;
export const CardRow = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: center;
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;
export const RowLeft = styled.div`
  background-color: #191919;
  position: relative;
  border-radius: 10px;
  width: 100%;
`;
export const WalletBtn = styled.div`
  width: 179px;
  margin-top: 15px;
  @media screen and (max-width: 500px) {
    margin-top: 5px;
    width: 100%;
    .MuiButton-containedPrimary {
      font-size: 14px;
    }
  }
`;
export const CCard = styled.div`
  width: 550px;
  @media screen and (max-width: 1170px) {
    width: 100%;
  }
`;
export const CText = styled.div`
  font-family: Chakra;
  color: #fff;
  font-size: 20px;
  margin: 70px 0 20px;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
export const DropPart = styled.div`
  position: relative;
  display: flex;
  border-radius: 10px 10px 0 0;
  background-color: #262626;
  padding: 40px;
  height: 120px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    padding: 40px 20px;
  }
`;
export const DropItem = styled.div`
  background-color: #c5a376;
  width: 35px;
  cursor: pointer;
  height: 35px;
  border-radius: 5px;
  font-size: 20px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoImg = styled.img``;
export const FinishText = styled.div`
  color: #fff;
  font-family: Chakra;
  position: absolute;
  bottom: -13px;
  left: 33px;
  background-color: #c5a376;
  padding: 2px 20px;
  width: fit-content;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    left: 12px;
  }
`;
export const CardMain = styled.div`
  padding: 40px;
  @media screen and (max-width: 500px) {
    padding: 40px 20px;
  }
`;
export const BearText = styled.div`
  font-family: Chakra;
  font-size: 16px;
  color: #fff;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
export const WalletPart = styled.div`
  background-color: #262626;
  width: 100%;
  margin-top: 20px;
  display: flex;
  border-radius: 10px;
  padding: 30px;
  align-items: center;
  @media screen and (max-width: 500px) {
    padding: 20px 10px;
    justify-content: center;
  }
`;
export const QuestionImg = styled.img`
  @media screen and (max-width: 500px) {
    width: 60px;
  }
`;
export const WalletR = styled.div`
  font-family: Chakra;
  color: #fff;
  margin-left: 30px;
  font-size: 18px;
  @media screen and (max-width: 500px) {
    font-size: 13px;
    margin-left: 10px;
  }
`;
export const CardFooter = styled.div`
  color: #bca586;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: ChakraBold;
  border-top: 2px solid #000;
  font-size: 16px;
  padding-top: 20px;
  width: 100%;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
export const Lists = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 40px;
`;
export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-family: Chakra;
  .label {
    font-size: 16px;
    @media screen and (max-width: 500px) {
      font-size: 13px;
    }
  }
  .number {
    font-size: 18px;
    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
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
  width: 500px;
  position: fixed;
  padding: 20px 25px 40px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  height: fit-content;
  @media screen and (max-width: 540px) {
    width: 90%;
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
  padding: 0 50px;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 430px) {
    padding: 0 20px;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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
  margin-top: 20px;
  line-height: 25px;
  @media screen and (max-width: 430px) {
    font-size: 17px;
  }
`;
export const FooterPart = styled.div`
  border-top: 2px solid #d2d2d2;
  padding-top: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FooterText = styled.div`
  color: #000;
  font-family: ChakraBold;
  font-size: 18px;
`;
export const Btn = styled.div`
  margin-top: 15px;
`;
