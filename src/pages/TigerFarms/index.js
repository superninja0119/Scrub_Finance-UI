import React from "react";
import CustomBtn from "../../components/BtnComponent";
import {
  HomeOut,
  HomeBack,
  HomeBody,
  LionCardsOut,
  LionCards,
  LionCard,
  CardImg,
  SubText,
  CardTitle,
  TopBtn,
  ZAPBtn,
} from "./tigerfarms.style";

export default function HomeContainer() {
  return (
    <HomeOut>
      <HomeBack>TIGER Farms</HomeBack>
      <HomeBody>
        <TopBtn>TIGER Incentoves Have Started! Good Luck!</TopBtn>
        <LionCardsOut>
          <LionCards>
            <LionCard>
              <CardImg src="img/img2.png" alt="" />
              <SubText>LION-SVN-LP</SubText>
              <CardTitle>
                Deposit LION-SVN-LP
                <br />
                Earn TIGER
              </CardTitle>
              <ZAPBtn>
                <CustomBtn
                  width="200px"
                  height="50px"
                  text="STAKE"
                  clickFunc={() => console.log("click stake button")}
                />
              </ZAPBtn>
            </LionCard>
            <LionCard>
              <CardImg src="img/img4.png" alt="" />
              <SubText>LION-SVN-LP</SubText>
              <CardTitle>
                Deposit LION-SVN-LP
                <br />
                Earn TIGER
              </CardTitle>
              <ZAPBtn>
                <CustomBtn
                  width="200px"
                  height="50px"
                  text="STAKE"
                  clickFunc={() => console.log("click stake button")}
                />
              </ZAPBtn>
            </LionCard>
            <LionCard>
              <CardImg src="img/img3.png" alt="" />
              <SubText>LION-SVN-LP</SubText>
              <CardTitle>
                Deposit Bear-MSHARE-LP
                <br />
                Earn Tiger
              </CardTitle>
              <ZAPBtn>
                <CustomBtn
                  width="200px"
                  height="50px"
                  text="STAKE"
                  clickFunc={() => console.log("click stake button")}
                />
              </ZAPBtn>
            </LionCard>
            <LionCard>
              <CardImg src="img/img4.png" alt="" />
              <SubText>LION-SVN-LP</SubText>
              <CardTitle>
                Deposit Bear-MSHARE-LP
                <br />
                Earn Tiger
              </CardTitle>
              <ZAPBtn>
                <CustomBtn
                  width="200px"
                  height="50px"
                  text="STAKE"
                  clickFunc={() => console.log("click stake button")}
                />
              </ZAPBtn>
            </LionCard>
          </LionCards>
        </LionCardsOut>
      </HomeBody>
    </HomeOut>
  );
}
