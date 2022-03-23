import React from "react";
import { TiWarning } from "react-icons/ti";
import CustomBtn from "../../components/BtnComponent";
import {
  HomeOut,
  HomeBody,
  WarningPart,
  Text,
  WarIcon,
  LionCardsOut,
  LionCard,
  CardImg,
  SubText,
  CardTitle,
  CardMoney,
  SVNCards,
  ZAPBtn,
  HomeBack,
  TokenLabelPart,
  TokenLabel,
  WithdrawBtn,
  WCard,
  SwiperContainer,
  WhiteCards,
} from "./scrub.style";
export default function HomeContainer() {
  return (
    <HomeOut>
      <HomeBack>Scrub</HomeBack>
      <HomeBody>
        <SwiperContainer>
          <WhiteCards>
            <WCard width="180px">
              <span>Next Epoch</span>
              <span className="nospan">3:00:48</span>
            </WCard>
            <WCard width="180px">
              <span>Current Epoch</span>
              <span className="nospan">229</span>
            </WCard>
            <WCard width="230px">
              <span>LION Price (TWAP)</span>
              <span className="nospan">0.3757</span>
            </WCard>
            <WCard width="370px">
              <span>APR | Daily | Epoch</span>
              <span className="nospan">5756.49% | 15.77% | 3.94%</span>
            </WCard>
            <WCard width="230px">
              <span>TIGER Price (TWAP)</span>
              <span className="nospan">12979</span>
            </WCard>
          </WhiteCards>
        </SwiperContainer>
        <WarningPart>
          <WarIcon>
            <TiWarning className="warnIcon" />
          </WarIcon>
          <Text>
            Do Your Own Research Before Investing. Investing Is Risky And May
            Result In Monetary Loss. LION Is Beta Software And May Contain Bugs.
            By Using LION, You Agree That The LION Team Is Not Responsible For
            Any Financial Losses From Investing In LION.
          </Text>
        </WarningPart>
        <TokenLabelPart>
          <TokenLabel>Tokens</TokenLabel>
          <WithdrawBtn>
            <CustomBtn
              width="100%"
              height="50px"
              text="CLAIM AND WITHDRAW"
              clickFunc={() => console.log("click withdraw button")}
            />
          </WithdrawBtn>
        </TokenLabelPart>
        <LionCardsOut>
          <SVNCards>
            <LionCard>
              <CardImg src="img/img1.png" alt="" />
              <SubText>LION Earned</SubText>
              <CardTitle>0.0000000000</CardTitle>
              <CardMoney>[$0.000]</CardMoney>
              <ZAPBtn>
                <CustomBtn
                  width="200px"
                  height="50px"
                  text="CLAIM"
                  clickFunc={() => console.log("click approve button")}
                />
              </ZAPBtn>
            </LionCard>
            <LionCard>
              <CardImg src="img/img2.png" alt="" />
              <SubText>TIGER Earned</SubText>
              <CardTitle>0.0000000000</CardTitle>
              <CardMoney>[$0.000]</CardMoney>
              <ZAPBtn>
                <CustomBtn
                  width="200px"
                  height="50px"
                  text="APPROVE"
                  clickFunc={() => console.log("click approve button")}
                />
              </ZAPBtn>
            </LionCard>
            <LionCard>
              <CardImg src="img/img3.png" alt="" />
              <SubText>Bear Earned</SubText>
              <CardTitle>0.0000000000</CardTitle>
              <CardMoney>[$0.000]</CardMoney>
              <ZAPBtn>
                <CustomBtn
                  width="200px"
                  height="50px"
                  text="APPROVE"
                  clickFunc={() => console.log("click approve button")}
                />
              </ZAPBtn>
            </LionCard>
          </SVNCards>
        </LionCardsOut>
      </HomeBody>
    </HomeOut>
  );
}
