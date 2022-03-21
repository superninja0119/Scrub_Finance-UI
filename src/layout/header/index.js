import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTwitter, FaTelegramPlane, FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import CustomBtn from "../../components/BtnComponent";
import {
  Land,
  LandOut,
  LogoImg,
  SocialIcons,
  Tabs,
  Tab,
  WalletBtn,
  ResTabs,
  ZapBack,
  ZapModal,
  ZapModalBody,
  CloseBtn,
  WalletTitle,
  Items,
  Item,
  ItemImg,
  ItemNumber,
  ItemName,
} from "./header.style";

export default function LandContainer() {
  const [target, setTarget] = useState(1);
  const [resflag, setresflag] = useState(false);
  const [walletflag, setWalletflag] = useState(false);
  const Changeresflag = () => {
    setresflag(!resflag);
  };
  const ChangeTab = (e) => {
    setTarget(e);
    Changeresflag();
  };
  const WalletFlag = () => {
    setWalletflag(true);
  };
  return (
    <Land>
      <LandOut>
        <Link to="/">
          <LogoImg src="img/logo.png" alt="" draggable={false} />
        </Link>
        <Tabs>
          <Link to="/">
            <Tab active={target === 1 && true} onClick={() => ChangeTab(1)}>
              HOME
            </Tab>
          </Link>
          <Link to="/tiger-farms">
            <Tab active={target === 2 && true} onClick={() => ChangeTab(2)}>
              TIGER FARMS
            </Tab>
          </Link>
          <Link to="/scrub">
            <Tab active={target === 3 && true} onClick={() => ChangeTab(3)}>
              SCRUB
            </Tab>
          </Link>
          <Link to="/bonds">
            <Tab active={target === 4 && true} onClick={() => ChangeTab(4)}>
              BONDS
            </Tab>
          </Link>
          <Link to="/docs">
            <Tab active={target === 5 && true} onClick={() => ChangeTab(5)}>
              DOCS
            </Tab>
          </Link>
          <WalletBtn>
            <CustomBtn
              width="130px"
              height="50px"
              text="MY WALLET"
              clickFunc={() => WalletFlag()}
            />
          </WalletBtn>
        </Tabs>
        {!resflag ? (
          <FaBars className="ResbarIcon" onClick={() => Changeresflag()} />
        ) : (
          <MdClose
            className="ResbarIcon"
            onClick={() => Changeresflag(false)}
          />
        )}
        {resflag && (
          <ResTabs>
            <Link to="/">
              <Tab active={target === 1 && true} onClick={() => ChangeTab(1)}>
                HOME
              </Tab>
            </Link>
            <Link to="/tiger-farms">
              <Tab active={target === 2 && true} onClick={() => ChangeTab(2)}>
                TIGER FARMS
              </Tab>
            </Link>
            <Link to="/scrub">
              <Tab active={target === 3 && true} onClick={() => ChangeTab(3)}>
                SCRUB
              </Tab>
            </Link>
            <Link to="/bonds">
              <Tab active={target === 4 && true} onClick={() => ChangeTab(4)}>
                BONDS
              </Tab>
            </Link>
            <Link to="/docs">
              <Tab active={target === 5 && true} onClick={() => ChangeTab(5)}>
                DOCS
              </Tab>
            </Link>
            <WalletBtn>
              <CustomBtn
                width="100%"
                height="50px"
                text="MY WALLET"
                clickFunc={() => WalletFlag()}
              />
            </WalletBtn>
            <SocialIcons>
              <FaTwitter className="socialIcon" />
              <FaTelegramPlane className="socialIcon" />
              <FaGithub className="socialIcon" />
              <BsDiscord className="socialIcon" />
            </SocialIcons>
          </ResTabs>
        )}
      </LandOut>
      {walletflag && (
        <ZapModal>
          <ZapModalBody>
            <CloseBtn>
              <MdClose
                onClick={() => setWalletflag(false)}
                className="closeclass"
              />
            </CloseBtn>
            <WalletTitle>My Wallet</WalletTitle>
            <Items>
              <Item>
                <ItemImg src="img/img1-1.png" alt="" />
                <ItemNumber>67.9275</ItemNumber>
                <ItemName>LION Avaliable</ItemName>
              </Item>
              <Item>
                <ItemImg src="img/img2-1.png" alt="" />
                <ItemNumber>42.9723</ItemNumber>
                <ItemName>TIGER Avaliable</ItemName>
              </Item>
              <Item>
                <ItemImg src="img/img3-1.png" alt="" />
                <ItemNumber>63.4212</ItemNumber>
                <ItemName>BEAR Avaliable</ItemName>
              </Item>
            </Items>
          </ZapModalBody>
          <ZapBack onClick={() => setWalletflag(false)} />
        </ZapModal>
      )}
    </Land>
  );
}
