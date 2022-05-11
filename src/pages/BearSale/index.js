import React, { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import CustomBtn from "../../components/BtnComponent";
import {
  HomeOut,
  HomeBody,
  HomeBack,
  CardRow,
  RowLeft,
  CCard,
  CText,
  DropPart,
  DropItem,
  LogoImg,
  FinishText,
  CardMain,
  BearText,
  WalletPart,
  QuestionImg,
  WalletR,
  WalletBtn,
  Lists,
  ListItem,
  CardFooter,
  ZapModal,
  ZapModalBody,
  CloseBtn,
  WalletTitle,
  Items,
  Item,
  ItemImg,
  ItemNumber,
  FooterPart,
  FooterText,
  Btn,
  ZapBack,
} from "./bearsale.style";

export default function HomeContainer() {
  const [walletflag, setwalletflag] = useState(false);
  const ChangeWalletFlag = () => {
    setwalletflag(true);
  };
  return (
    <HomeOut>
      <HomeBack>BEAR SALE</HomeBack>
      <HomeBody>
        <CardRow>
          <CCard>
            <CText>CONTRIBUTE LION</CText>
            <RowLeft>
              <DropPart>
                <LogoImg src="img/logo.png" alt="" />
                <DropItem>
                  <MdKeyboardArrowUp className="dropIcon" />
                </DropItem>
                <FinishText>Finished</FinishText>
              </DropPart>
              <CardMain>
                <BearText>
                  BEAR Is An Algorithmic Token Pegged To The Price Of MSHARE.
                  BEAR Acts To Deepen The Liquidity Pool Of MSHARE And Works To
                  Support The Entire Savanna And Scrub Ecosystem In This Way.
                </BearText>
                <WalletPart>
                  <QuestionImg
                    src="img/question.png"
                    alt=""
                    draggable="false"
                  />
                  <WalletR>
                    You did not participate in this sale
                    <WalletBtn>
                      <CustomBtn
                        width="100%"
                        height="40px"
                        fontsize="16px"
                        text="CONNECT WALLET"
                        clickFunc={() => ChangeWalletFlag()}
                      />
                    </WalletBtn>
                  </WalletR>
                </WalletPart>
                <Lists>
                  <ListItem>
                    <span className="label">Addtional Fee</span>
                    <span className="number">0%</span>
                  </ListItem>
                  <ListItem>
                    <span className="label">Total Committed</span>
                    <span className="number">~$58,318,332 (10231.29%)</span>
                  </ListItem>
                  <ListItem>
                    <span className="label">Funds to raise</span>
                    <span className="number">300,000 SVN</span>
                  </ListItem>
                  <ListItem>
                    <span className="label">Price per LION</span>
                    <span className="number">1 SVN</span>
                  </ListItem>
                </Lists>
                <CardFooter>
                  <span>
                    Learn more about Scrub Finance (LION) <BsBoxArrowUpRight />
                  </span>
                  <span>
                    Scrub Finance (LION) Project Site <BsBoxArrowUpRight />
                  </span>
                </CardFooter>
              </CardMain>
            </RowLeft>
          </CCard>
          <CCard>
            <CText>CONTRIBUTE MSHARE</CText>
            <RowLeft>
              <DropPart>
                <LogoImg src="img/logo.png" alt="" />
                <DropItem>
                  <MdKeyboardArrowUp className="dropIcon" />
                </DropItem>
                <FinishText>Finished</FinishText>
              </DropPart>
              <CardMain>
                <BearText>
                  BEAR Is An Algorithmic Token Pegged To The Price Of MSHARE.
                  BEAR Acts To Deepen The Liquidity Pool Of MSHARE And Works To
                  Support The Entire Savanna And Scrub Ecosystem In This Way.
                </BearText>
                <WalletPart>
                  <QuestionImg
                    src="img/question.png"
                    alt=""
                    draggable="false"
                  />
                  <WalletR>
                    You did not participate in this sale
                    <WalletBtn>
                      <CustomBtn
                        width="100%"
                        height="40px"
                        fontsize="16px"
                        text="CONNECT WALLET"
                        clickFunc={() => ChangeWalletFlag()}
                      />
                    </WalletBtn>
                  </WalletR>
                </WalletPart>
                <Lists>
                  <ListItem>
                    <span className="label">Addtional Fee</span>
                    <span className="number">0%</span>
                  </ListItem>
                  <ListItem>
                    <span className="label">Total Committed</span>
                    <span className="number">~$58,318,332 (10231.29%)</span>
                  </ListItem>
                  <ListItem>
                    <span className="label">Funds to raise</span>
                    <span className="number">300,000 SVN</span>
                  </ListItem>
                  <ListItem>
                    <span className="label">Price per LION</span>
                    <span className="number">1 SVN</span>
                  </ListItem>
                </Lists>
                <CardFooter>
                  <span>
                    Learn more about Scrub Finance (LION) <BsBoxArrowUpRight />
                  </span>
                  <span>
                    Scrub Finance (LION) Project Site <BsBoxArrowUpRight />
                  </span>
                </CardFooter>
              </CardMain>
            </RowLeft>
          </CCard>
        </CardRow>
      </HomeBody>
      {walletflag && (
        <ZapModal>
          <ZapModalBody>
            <CloseBtn>
              <MdClose
                onClick={() => setwalletflag(false)}
                className="closeclass"
              />
            </CloseBtn>
            <WalletTitle>Connect Wallet</WalletTitle>
            <Items>
              <Item>
                <ItemImg src="img/metamask.png" alt="" />
                <ItemNumber>Metamask</ItemNumber>
              </Item>
              <Item>
                <ItemImg src="img/crypto.png" alt="" />
                <ItemNumber>
                  Crypto.com Defi
                  <br />
                  Wallet
                </ItemNumber>
              </Item>
            </Items>
            <FooterPart>
              <FooterText>Haven't got a crypto wallet yet?</FooterText>
              <Btn>
                <CustomBtn
                  width="254px"
                  height="50px"
                  fontsize="16px"
                  text="LEARN HOW TO CONNECT"
                  clickFunc={() => console.log("click connect button")}
                />
              </Btn>
            </FooterPart>
          </ZapModalBody>
          <ZapBack onClick={() => setwalletflag(false)} />
        </ZapModal>
      )}
    </HomeOut>
  );
}
