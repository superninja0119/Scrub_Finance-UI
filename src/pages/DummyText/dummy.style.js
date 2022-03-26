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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SubText = styled.div`
  font-size: 20px;
  margin: 25px 0 0;
  color: rgba(255, 255, 255, 0.5);
  width: 770px;
  font-family: Chakra;
  text-align: center;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;
export const UnLockBtn = styled.div`
  margin: 70px 0 150px;
`;
export const LockImg = styled.img`
  margin-top: 100px;
  @media screen and (max-width: 480px) {
    width: 80px;
  }
`;
export const DummyText = styled.div`
  font-family: ChakraBold;
  color: #fff;
  font-size: 60px;
  @media screen and (max-width: 640px) {
    font-size: 45px;
  }
  @media screen and (max-width: 480px) {
    font-size: 35px;
  }
`;
