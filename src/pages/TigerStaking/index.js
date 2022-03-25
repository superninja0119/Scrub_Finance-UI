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
  WarnOut,
  WhiteCards,
  WCard,
  WhiteOut,
} from "./staking.style";

export default function HomeContainer() {
  return (
    <HomeOut>
      <HomeBack>Earn TIGER By Staking LION-SVN-LP</HomeBack>
      <HomeBody>
        <WhiteOut>
          <WhiteCards>
            <WCard>
              <span>APR</span>
              <span className="nospan">438.93%</span>
            </WCard>
            <WCard>
              <span>Daily APR</span>
              <span className="nospan">1.20%</span>
            </WCard>
            <WCard>
              <span>TVL</span>
              <span className="nospan">$34567.90</span>
            </WCard>
          </WhiteCards>
        </WhiteOut>
        <WarnOut>
          <WarningPart>
            <WarIcon>
              <TiWarning className="warnIcon" />
            </WarIcon>
            <Text>There is a 1.5% Withdrawl fee on LP Unstaked</Text>
          </WarningPart>
        </WarnOut>
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
                  clickFunc={() => console.log("click claim button")}
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
          </SVNCards>
        </LionCardsOut>
      </HomeBody>
    </HomeOut>
  );
}
