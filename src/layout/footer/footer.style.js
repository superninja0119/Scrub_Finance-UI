import styled from "styled-components";

export const Land = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  @media screen and (max-width: 550px) {
    margin-bottom: 0;
  }
`;
export const LandOut = styled.div`
  width: 1440px;
  display: flex;
  font-family: Chakra;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1410px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;
export const BottomOut = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 45px;
  background-color: #101010;
  @media screen and (max-width: 550px) {
    height: fit-content;
    padding: 20px 0;
  }
`;
export const BackImg = styled.img`
  /* width: 100vw; */
  object-fit: cover;
  /* border: 1px solid red; */
  /* height: 150px; */
`;
export const Tabs = styled.div`
  display: flex;
  align-items: center;
  column-gap: 35px;
  width: 100%;
  background-color: #151515;
  padding: 20px;
  justify-content: center;
  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
    row-gap: 15px;
  }
`;
export const Tab = styled.div`
  font-style: normal;
  font-family: Chakra;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  line-height: 33px;
  text-align: center;
  @media screen and (max-width: 650px) {
    width: 112px;
    text-align: left;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  .socialIcon {
    transition: all 0.3s ease-in-out;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    font-size: 25px;
  }
  .socialIcon:hover {
    color: #fff;
  }
  @media screen and (max-width: 1500px) {
    margin-right: 30px;
  }
  @media screen and (max-width: 550px) {
    margin-right: 0;
  }
`;
export const Left = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 17px;
  @media screen and (max-width: 1500px) {
    margin-left: 30px;
  }
  @media screen and (max-width: 550px) {
    margin-left: 0;
    order: 2;
    margin-top: 20px;
  }
`;
