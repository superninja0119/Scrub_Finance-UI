import React, { useState } from "react";
import { TiWarning } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import CustomBtn from "../../components/BtnComponent";
import OutlineBtn from "../../components/OutlineComponent";
import EarnedModal from "../../components/TigerEarnedComponent";
import {
  HomeOut,
  HomeImg,
  HomeBody,
  Title,
  List,
  Lists,
  Num,
  WarningPart,
  Text,
  WarIcon,
  TotalText,
  ADDBtn,
  ADDBtns,
  BuyBtns,
  LionCardsOut,
  BuyBtn,
  BuyLeft,
  BuyRight,
  TotalNumber,
  LionCards,
  LionCard,
  CardImg,
  SubText,
  CardTitle,
  CardMoney,
  CardTbl,
  CardTblLabel,
  SVNCards,
  CardTopDiv,
  ZAPBtn,
  ZapModal,
  ZapBack,
  ZapModalBody,
  ZapTitle,
  ZapWarning,
  SelectLabel,
  CusSelect,
  SelectBottomLabel,
  CusInput,
  CusInputPart,
  MaxBtn,
  Zap,
  ZapTop,
  ZapText,
  GoBtn,
  CloseBtn,
} from "./home.style";

export default function HomeContainer() {
  const [zapflag, setZapflag] = useState(false);
  const ChangeZapFlag = () => {
    setZapflag(true);
  };
  return (
    <HomeOut>
      <HomeImg />
      <HomeBody>
        <Title>Welcome to Scrub Finance</Title>
        <Lists>
          <List bb={true}>
            <Num>01</Num>LION Pegged to the price of 1 SVN via Seigniorage
          </List>
          <List bb={true}>
            <Num>02</Num>BEAR Pegged to the Price of 1 MSHARE via Seigniorage
          </List>
          <List bb={true}>
            <Num>03</Num>Stake your Lion-SVN LP and Bear-Mshare LP Tokens
          </List>
          <List bb={false}>
            <Num>04</Num>To Maximize profits, Stake your TIGER in SCRUB to Earn
            more LION and BEAR!
          </List>
        </Lists>
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
        <TotalText>Total Value Locked</TotalText>
        <TotalNumber>
          <span />
          $37,056
          <span />
        </TotalNumber>
        <ADDBtns>
          <ADDBtn>
            <CustomBtn
              width="100%"
              height="40px"
              family="Chakra"
              fontsize="14px"
              text="ADD LION - SVN LP"
              clickFunc={() => console.log("click svn-lp button")}
            />
          </ADDBtn>
          <ADDBtn>
            <CustomBtn
              width="100%"
              height="40px"
              family="Chakra"
              text="ADD TIGER - SVN LP"
              fontsize="14px"
              clickFunc={() => console.log("click svn-lp button")}
            />
          </ADDBtn>
          <ADDBtn>
            <CustomBtn
              width="100%"
              height="40px"
              fontsize="14px"
              family="Chakra"
              text="ADD BEAR - MSHARE LP"
              clickFunc={() => console.log("click svn-lp button")}
            />
          </ADDBtn>
          <ADDBtn>
            <CustomBtn
              width="100%"
              height="40px"
              family="Chakra"
              fontsize="14px"
              text="ADD TIGER - MSHARE LP"
              clickFunc={() => console.log("click svn-lp button")}
            />
          </ADDBtn>
        </ADDBtns>
        <BuyBtns>
          <BuyLeft>
            <BuyBtn>
              <OutlineBtn
                width="100%"
                height="40px"
                text="BUY LION"
                clickFunc={() => console.log("click buy lion button")}
              />
            </BuyBtn>
            <BuyBtn>
              <OutlineBtn
                width="100%"
                height="40px"
                text="BUY TIGER"
                clickFunc={() => console.log("click buy tiger button")}
              />
            </BuyBtn>
            <BuyBtn>
              <OutlineBtn
                width="100%"
                height="40px"
                text="BUY BEAR"
                clickFunc={() => console.log("click buy bear button")}
              />
            </BuyBtn>
          </BuyLeft>
          <BuyRight>
            <BuyBtn>
              <OutlineBtn
                width="100%"
                height="40px"
                text="LION CHAT"
                clickFunc={() => console.log("click buy bear button")}
              />
            </BuyBtn>
            <BuyBtn>
              <OutlineBtn
                width="100%"
                height="40px"
                text="TIGER CHAT"
                clickFunc={() => console.log("click tiger chat button")}
              />
            </BuyBtn>
            <BuyBtn>
              <OutlineBtn
                width="100%"
                height="40px"
                text="BEAR CHAT"
                clickFunc={() => console.log("click bear chat button")}
              />
            </BuyBtn>
          </BuyRight>
        </BuyBtns>
        <LionCardsOut>
          <LionCards>
            <LionCard>
              <CardImg src="img/img1.png" alt="" />
              <SubText>LION Earned</SubText>
              <CardTitle>0.0000000000</CardTitle>
              <CardMoney>[$0.000]</CardMoney>
              <CardTbl>
                <CardTblLabel>
                  <span>Maket Cap</span>$56,456,456,56
                </CardTblLabel>
                <CardTblLabel>
                  <span>Circulating Supply</span>$56,456,56
                </CardTblLabel>
                <CardTblLabel>
                  <span>Total Supply</span>$456,56
                </CardTblLabel>
              </CardTbl>
            </LionCard>
            <LionCard>
              <CardImg src="img/img2.png" alt="" />
              <SubText>LION Earned</SubText>
              <CardTitle>0.0000000000</CardTitle>
              <CardMoney>[$0.000]</CardMoney>
              <CardTbl>
                <CardTblLabel>
                  <span>Maket Cap</span>$56,456,456,56
                </CardTblLabel>
                <CardTblLabel>
                  <span>Circulating Supply</span>$56,456,56
                </CardTblLabel>
                <CardTblLabel>
                  <span>Total Supply</span>$456,56
                </CardTblLabel>
              </CardTbl>
            </LionCard>
            <LionCard>
              <CardImg src="img/img3.png" alt="" />
              <SubText>LION Earned</SubText>
              <CardTitle>0.0000000000</CardTitle>
              <CardMoney>[$0.000]</CardMoney>
              <CardTbl>
                <CardTblLabel>
                  <span>Maket Cap</span>$56,456,456,56
                </CardTblLabel>
                <CardTblLabel>
                  <span>Circulating Supply</span>$56,456,56
                </CardTblLabel>
                <CardTblLabel>
                  <span>Total Supply</span>$456,56
                </CardTblLabel>
              </CardTbl>
            </LionCard>
          </LionCards>
        </LionCardsOut>
        <LionCardsOut>
          <SVNCards>
            <LionCard>
              <CardTopDiv />
              <CardImg src="img/img1-1.png" alt="" />
              <SubText>LION - SVN Mad Meerkat LPv</SubText>
              <CardTitle>1.4120 LION / 0.89 SVN</CardTitle>
              <CardMoney>[$3.35]</CardMoney>
              <CardTbl>
                <CardTblLabel>
                  <span>Liquidity</span>$56,456,456,56
                </CardTblLabel>
                <CardTblLabel>
                  <span>Total Supply</span>$56,456,56
                </CardTblLabel>
              </CardTbl>
              <ZAPBtn>
                <CustomBtn
                  width="200px"
                  height="50px"
                  text="ZAP IN!"
                  clickFunc={() => ChangeZapFlag()}
                />
              </ZAPBtn>
            </LionCard>
            <LionCard>
              <CardTopDiv />
              <CardImg src="img/img2-1.png" alt="" />
              <SubText>Tiger - SVN Mad Meerkat LP</SubText>
              <CardTitle>0.07 Tiger / 19.75 SVN</CardTitle>
              <CardMoney>[$3.35]</CardMoney>
              <CardTbl>
                <CardTblLabel>
                  <span>Liquidity</span>$56,456,456,56
                </CardTblLabel>
                <CardTblLabel>
                  <span>Total Supply</span>$56,456,56
                </CardTblLabel>
              </CardTbl>
              <ZAPBtn>
                <CustomBtn
                  width="200px"
                  height="50px"
                  text="ZAP IN!"
                  clickFunc={() => ChangeZapFlag()}
                />
              </ZAPBtn>
            </LionCard>
            <LionCard>
              <CardTopDiv />
              <CardImg src="img/img3-1.png" alt="" />
              <SubText>Bear - SVN Mad Meerkat LP</SubText>
              <CardTitle>0.07 Tiger / 19.75 SVN</CardTitle>
              <CardMoney>[$3.35]</CardMoney>
              <CardTbl>
                <CardTblLabel>
                  <span>Liquidity</span>$56,456,456,56
                </CardTblLabel>
                <CardTblLabel>
                  <span>Total Supply</span>$56,456,56
                </CardTblLabel>
              </CardTbl>
              <ZAPBtn>
                <CustomBtn
                  width="200px"
                  height="50px"
                  text="ZAP IN!"
                  clickFunc={() => ChangeZapFlag()}
                />
              </ZAPBtn>
            </LionCard>
          </SVNCards>
        </LionCardsOut>
      </HomeBody>
      {zapflag && (
        <ZapModal>
          <ZapModalBody>
            <CloseBtn>
              <MdClose
                onClick={() => setZapflag(false)}
                className="closeclass"
              />
            </CloseBtn>
            <ZapTitle>Zap Into TIGER-SVN-LP</ZapTitle>
            <ZapWarning>
              <IoIosWarning className="warnMessage" />
              Beta feature use at your risk!
            </ZapWarning>
            <SelectLabel>Select assest to zap with</SelectLabel>
            <CusSelect>
              <option>SVN</option>
            </CusSelect>
            <SelectBottomLabel>0.0000 FTM Avaliable</SelectBottomLabel>
            <CusInputPart>
              <CusInput placeholder="45.782" type="number" />
              <MaxBtn>
                <CustomBtn
                  width="100px"
                  height="40px"
                  text="Max"
                  clickFunc={() => console.log("click max button")}
                />
              </MaxBtn>
            </CusInputPart>
            <Zap>
              <ZapTop>Zap Estimation</ZapTop>
              <ZapText>
                <span>TIGER-SVN-LP :</span>
                <span>12 (5 TIGER / 7 SVN)</span>
              </ZapText>
            </Zap>
            <GoBtn>
              <CustomBtn
                width="100%"
                height="50px"
                text="Lets Go"
                clickFunc={() => console.log("click lets go button")}
              />
            </GoBtn>
          </ZapModalBody>
          <ZapBack onClick={() => setZapflag(false)} />
        </ZapModal>
      )}
      <EarnedModal />
    </HomeOut>
  );
}
