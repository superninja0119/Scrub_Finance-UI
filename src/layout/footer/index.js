import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaTelegramPlane, FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import {
  Land,
  LandOut,
  SocialIcons,
  BackImg,
  BottomOut,
  Tabs,
  Tab,
  Left,
} from "./footer.style";

export default function FooterContainer() {
  return (
    <Land>
      <BackImg src="img/footer_effect.png" alt="" />
      <Tabs>
        <Tab>HOME</Tab>
        <Tab>TIGER FARMS</Tab>
        <Tab>SCRUB</Tab>
        <Tab>BONDS</Tab>
        <Tab>DOCS</Tab>
        <Tab>MY WALLET</Tab>
      </Tabs>
      <BottomOut>
        <LandOut>
          <Left>Copyright@Scrub Finance 2022</Left>
          <SocialIcons>
            <FaTwitter className="socialIcon" />
            <FaTelegramPlane className="socialIcon" />
            <FaGithub className="socialIcon" />
            <BsDiscord className="socialIcon" />
          </SocialIcons>
        </LandOut>
      </BottomOut>
    </Land>
  );
}
