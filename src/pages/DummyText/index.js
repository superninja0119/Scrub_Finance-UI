import React from "react";
import CustomBtn from "../../components/BtnComponent";
import {
  HomeOut,
  HomeBody,
  SubText,
  HomeBack,
  UnLockBtn,
  LockImg,
  DummyText,
} from "./dummy.style";

export default function DummyContainer() {
  return (
    <HomeOut>
      <HomeBack />
      <HomeBody>
        <LockImg src="img/lock.png" alt="" draggable="false" />
        <DummyText>Simply Dummy Text</DummyText>
        <SubText>
          Do Your Own Research Before Investing. Investing Is Risky And May
          Result In Monetary Loss. LION Is Beta Software And May Contain Bugs.
          By Using LION, You Agree
        </SubText>
        <UnLockBtn>
          <CustomBtn
            width="180px"
            height="50px"
            text="UNLOCK"
            clickFunc={() => console.log("click unlock button")}
          />
        </UnLockBtn>
      </HomeBody>
    </HomeOut>
  );
}
