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
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1450px) {
    padding: 0 20px;
    width: 100%;
  }
`;
export const LionCardsOut = styled.div`
  margin-bottom: 120px;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  max-width: 1123px;
  @media screen and (max-width: 1150px) {
    overflow-x: auto;
    width: 100%;
  }
`;
export const LionCards = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 1123px;
  @media screen and (max-width: 1150px) {
    width: 100%;
    flex-wrap: nowrap;
  }
`;
export const LionCard = styled.div`
  background-color: #191919;
  font-family: Chakra;
  border-radius: 10px;
  position: relative;
  display: flex;
  /* padding: 50px 20px 30px; */
  flex-direction: column;
  color: #fff;
  align-items: center;
  max-width: 360.03px;
  min-width: 360.03px;
`;
export const CardImg = styled.img`
  z-index: 2;
  margin-top: 30px;
`;
export const SubText = styled.div`
  font-size: 18px;
  margin: 20px 0 0;
`;
export const CardTitle = styled.div`
  font-family: ChakraBold;
  font-size: 22px;
  margin-top: 15px;
  line-height: 25px;
  text-align: center;
`;
export const TopBtn = styled.div`
  width: 1123px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ChakraBold;
  font-size: 17px;
  background-color: #08d75b;
  border-radius: 10px;
  @media screen and (max-width: 1150px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    font-size: 14px;
  }
`;

export const ZAPBtn = styled.div`
  margin: 30px 0 50px;
`;
