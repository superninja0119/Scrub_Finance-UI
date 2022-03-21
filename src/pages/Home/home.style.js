import styled from "styled-components";

export const HomeOut = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HomeImg = styled.div`
  height: 298px;
  width: 100%;
  background: url("img/mainback.png") no-repeat;
  background-position: center;
  background-size: cover;
`;
export const HomeBody = styled.div`
  width: 1440px;
  @media screen and (max-width: 1450px) {
    padding: 0 20px;
    width: 100%;
  }
`;
export const Title = styled.div`
  font-family: ChakraBold;
  font-size: 80px;
  margin-top: 30px;
  width: 550px;
  line-height: 75px;
  color: #fff;
  @media screen and (max-width: 590px) {
    font-size: 45px;
    width: 100%;
    line-height: 50px;
  }
`;
export const LionCardsOut = styled.div`
  @media screen and (max-width: 1130px) {
    overflow-x: auto;
  }
`;
export const TotalNumber = styled.div`
  font-family: ChakraBold;
  font-size: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  gap: 40px;
  span {
    width: 100%;
    border-top: 1px solid #2d2d2d;
    @media screen and (max-width: 420px) {
      display: none;
    }
  }
`;
export const List = styled.div`
  color: #fff;
  font-family: Chakra;
  font-size: 20px;
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  border-bottom: ${(props) => props.bb && "2px solid #070707"};
  @media screen and (max-width: 590px) {
    font-size: 18px;
  }
`;
export const Lists = styled.div`
  margin-top: 100px;
  padding: 15px 30px;
  border-radius: 10px;
  display: flex;
  background-color: #191919;
  flex-direction: column;
  row-gap: 10px;
  @media screen and (max-width: 590px) {
    margin-top: 50px;
  }
`;
export const Num = styled.div`
  width: 30px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-family: Chakra;
  font-size: 23px;
  margin-right: 20px;
`;
export const WarningPart = styled.div`
  display: flex;
  margin-top: 70px;
  .warnIcon {
    color: yellow;
    font-size: 35px;
    margin-right: 15px;
  }
  color: rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 590px) {
    margin-top: 40px;
  }
`;
export const Text = styled.div`
  width: 1000px;
  font-family: Chakra;
`;
export const WarIcon = styled.div`
  margin-left: 25px;
  display: flex;
`;
export const TotalText = styled.div`
  color: #ff8718;
  font-family: Chakra;
  font-size: 23px;
  width: 100%;
  text-align: center;
  margin-top: 100px;
`;
export const ADDBtn = styled.div`
  width: 180px;
  height: 40px;
  @media screen and (max-width: 420px) {
    width: 160px;
    .MuiButton-containedPrimary {
      font-size: 12px;
    }
  }
`;
export const ADDBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 80px;
  @media screen and (max-width: 860px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 420px) {
    gap: 10px;
  }
`;
export const BuyBtns = styled.div`
  display: flex;
  margin-top: 20px;
  @media screen and (max-width: 860px) {
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
  }
  @media screen and (max-width: 420px) {
    flex-direction: row;
    gap: 10px;
  }
`;
export const BuyBtn = styled.div`
  width: 110px;
  @media screen and (max-width: 420px) {
    width: 160px;
  }
`;
export const BuyLeft = styled.div`
  width: 50%;
  padding-right: 20px;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  border-right: 1px solid rgba(255, 255, 255, 0.7);
  @media screen and (max-width: 860px) {
    border-right: none;
    padding-right: 0;
    width: 100%;
    justify-content: center;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;
export const BuyRight = styled.div`
  width: 50%;
  padding-left: 20px;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 860px) {
    padding-left: 0;
    width: 100%;
    justify-content: center;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;
export const LionCards = styled.div`
  display: flex;
  margin-top: 70px;
  justify-content: center;
  gap: 25px;
  @media screen and (max-width: 1120px) {
    width: fit-content;
  }
`;
export const LionCard = styled.div`
  background-color: #191919;
  width: 100%;
  font-family: Chakra;
  border-radius: 10px;
  position: relative;
  display: flex;
  width: fit-content;
  padding: 50px 20px;
  flex-direction: column;
  color: #fff;
  align-items: center;
`;
export const CardImg = styled.img`
  z-index: 2;
`;
export const SubText = styled.div`
  font-size: 20px;
  margin: 15px 0 0;
`;
export const CardTitle = styled.div`
  font-family: ChakraBold;
  font-size: 25px;
`;
export const CardMoney = styled.div`
  font-size: 18px;
`;
export const CardTbl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
`;
export const CardTblLabel = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  span {
    margin-right: 20px;
    width: 143px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 17px;
  }
`;
export const SVNCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 80px 0 120px;
  @media screen and (max-width: 1120px) {
    width: fit-content;
  }
`;
export const CardTopDiv = styled.div`
  background-color: #262626;
  height: 125px;
  border-radius: 10px 10px 0 0;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
export const ZAPBtn = styled.div`
  margin-top: 50px;
`;
export const ZapModal = styled.div`
  font-family: Chakra;
`;

export const ZapBack = styled.div`
  position: fixed;
  /* width: 100vw; */
  /* height: 100vh; */
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
  width: 500px;
  border-radius: 10px;
  height: fit-content;
  @media screen and (max-width: 520px) {
    width: 90%;
  }
`;

export const ZapTitle = styled.div`
  font-size: 23px;
  font-family: ChakraBold;
  margin-bottom: 30px;
`;

export const ZapWarning = styled.div`
  width: 100%;
  font-family: ChakraBold;
  display: flex;
  justify-content: center;
  font-size: 13px;
  padding: 10px 0;
  border-radius: 5px;
  background-color: #ffeca7;
  .warnMessage {
    color: #350a00;
    font-size: 15px;
    margin-top: 1px;
    margin-right: 5px;
  }
`;

export const SelectLabel = styled.div`
  width: 100%;
  text-align: left;
  font-size: 13px;
  font-family: ChakraBold;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const CusSelect = styled.select`
  width: 100%;
  height: 50px;
  font-family: ChakraBold;
  border-radius: 10px;
  border: 1px solid #694b48;
  border-bottom: 3px solid #694b48;
  padding-left: 20px;
  :focus,
  :active {
    outline: none;
  }
`;

export const SelectBottomLabel = styled.div`
  width: 100%;
  text-align: right;
  font-size: 13px;
  font-family: ChakraBold;
  margin: 5px 0 20px;
`;
export const CusInputPart = styled.div`
  width: 100%;
  height: 50px;
  font-family: ChakraBold;
  border-radius: 10px;
  border: 1px solid #694b48;
  border-bottom: 3px solid #694b48;
  padding-left: 20px;
  padding-right: 5px;
  display: flex;
  align-items: center;
`;
export const CusInput = styled.input`
  width: 100%;
  border: none;
  height: 95%;
  font-size: 16px;
  :focus,
  :active {
    outline: none;
  }
`;

export const MaxBtn = styled.div`
  min-width: 100px;
  margin-left: 15px;
`;
export const Zap = styled.div`
  width: 100%;
  background-color: #ebebeb;
  padding: 20px;
  font-family: ChakraBold;
  border-radius: 10px;
  text-align: left;
  margin-top: 30px;
  @media screen and (max-width: 400px) {
    padding: 20px 10px;
  }
`;
export const ZapTop = styled.div`
  color: #ff8718;
`;
export const ZapText = styled.div`
  margin-top: 20px;
  color: #350802;
  font-family: ChakraBold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const GoBtn = styled.div`
  width: 100%;
  margin-top: 30px;
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
