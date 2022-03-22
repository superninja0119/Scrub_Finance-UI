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
export const TopText = styled.div`
  font-family: Chakra;
  color: #fff;
  margin: 50px 0 30px;
  font-size: 23px;
  @media screen and (max-width: 1130px) {
    text-align: center;
  }
  @media screen and (max-width: 430px) {
    font-size: 20px;
  }
`;
export const Rows = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 120px;
  @media screen and (max-width: 1130px) {
    row-gap: 50px;
  }
`;
export const CardRow = styled.div`
  display: flex;
  column-gap: 20px;
  @media screen and (max-width: 1130px) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const RowLeft = styled.div`
  padding: 30px 20px;
  background-color: #191919;
  border-radius: 10px;
  width: 100%;
`;
export const RowMiddle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  @media screen and (max-width: 1130px) {
    row-gap: 10px;
  }
`;
export const MiddleTop = styled.div`
  font-family: Chakra;
  width: 100%;
  font-size: 25px;
  background-color: #191919;
  border-radius: 10px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  span {
    font-size: 18px;
    color: #ff8718;
  }
  @media screen and (max-width: 1130px) {
    padding: 10px 0;
  }
  @media screen and (max-width: 430px) {
    font-size: 20px;
    span {
      font-size: 16px;
    }
  }
`;
export const CardOneImgPart = styled.div`
  text-align: center;
`;
export const CardOneImg = styled.img`
  width: 150px;
  @media screen and (max-width: 430px) {
    width: 120px;
  }
`;
export const OneText = styled.div`
  font-family: Chakra;
  margin-top: 30px;
  color: #fff;
  font-size: 20px;
`;
export const CardImgPartOut = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const ArrowImg = styled.img`
  margin-top: 60px;
  @media screen and (max-width: 430px) {
    margin-top: 50px;
  }
`;
export const PurText = styled.div`
  background-color: #232323;
  color: #fff;
  padding: 7px;
  text-align: center;
  width: 100%;
  border-radius: 10px;
  font-family: Chakra;
  font-size: 16px;
  margin: 30px 0;
  @media screen and (max-width: 430px) {
    font-size: 14px;
  }
`;
export const ApproveBtn = styled.div``;
