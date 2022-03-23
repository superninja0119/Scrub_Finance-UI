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
  width: 1080px;
  margin-top: 70px;
  position: relative;
  @media screen and (max-width: 1100px) {
    padding: 0 20px;
    width: 100%;
  }
  @media screen and (max-width: 590px) {
    margin-top: 40px;
  }
`;
export const LionCardsOut = styled.div`
  width: 100%;
  @media screen and (max-width: 1130px) {
    overflow-x: auto;
  }
`;
export const WarningPart = styled.div`
  display: flex;
  margin-top: 40px;
  .warnIcon {
    color: yellow;
    font-size: 35px;
    margin-right: 15px;
  }
  color: rgba(255, 255, 255, 0.5);
`;
export const Text = styled.div`
  width: 1000px;
  font-family: Chakra;
`;
export const WarIcon = styled.div`
  display: flex;
`;
export const LionCard = styled.div`
  background-color: #191919;
  width: 100%;
  font-family: Chakra;
  border-radius: 10px;
  position: relative;
  display: flex;
  width: 343.03px;
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
  margin: 25px 0 0;
`;
export const CardTitle = styled.div`
  font-family: ChakraBold;
  font-size: 25px;
  margin-top: 20px;
`;
export const CardMoney = styled.div`
  font-size: 18px;
`;
export const SVNCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  width: 100%;
  margin: 20px 0 120px;
  @media screen and (max-width: 1120px) {
    width: fit-content;
  }
`;
export const ZAPBtn = styled.div`
  margin-top: 50px;
`;
export const TokenLabelPart = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
  justify-content: space-between;
`;

export const TokenLabel = styled.div`
  font-family: ChakraBold;
  color: #fff;
  font-size: 25px;
`;

export const WithdrawBtn = styled.div`
  width: 230px;
  @media screen and (max-width: 500px) {
    width: 180px;
    .MuiButton-containedPrimary {
      font-size: 14px;
    }
  }
`;
export const WCard = styled.div`
  background-color: #f8e3b4;
  border: solid transparent;
  border-radius: 12px;
  border-width: 0 0 4px;
  height: 100px;
  padding: 0 0 0 25px;
  text-align: left;
  width: ${(props) => props.width};
  cursor: pointer;
  font-family: Chakra;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 17px;
  transform: translateZ(0);
  .nospan {
    color: #000;
    font-size: 25px;
    font-weight: bold;
  }
  span {
    color: #c4722f;
  }
  ::after {
    content: "";
    background-clip: padding-box;
    background-color: #fff;
    border: solid transparent;
    border-radius: 12px;
    border-width: 0 0 7px;
    bottom: -4px;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
  @media screen and (max-width: 750px) {
    min-width: 220px;
  }
`;
export const SwiperContainer = styled.div`
  width: 100%;
  overflow: auto;
`;
export const WhiteCards = styled.div`
  display: flex;
  column-gap: 20px;
  width: fit-content;
  @media screen and (max-width: 750px) {
    width: fit-content;
  }
`;
