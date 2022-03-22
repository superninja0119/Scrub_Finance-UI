import React from "react";
import CustomBtn from "../../components/BtnComponent";
import {
  HomeOut,
  HomeBody,
  HomeBack,
  TopText,
  CardRow,
  RowLeft,
  RowMiddle,
  Rows,
  MiddleTop,
  CardOneImgPart,
  CardOneImg,
  OneText,
  ArrowImg,
  CardImgPartOut,
  PurText,
  ApproveBtn,
} from "./bond.style";

export default function HomeContainer() {
  return (
    <HomeOut>
      <HomeBack>Bonds</HomeBack>
      <HomeBody>
        <TopText>Earn Premiums Upon Redemption</TopText>
        <Rows>
          <CardRow>
            <RowLeft>
              <CardImgPartOut>
                <CardOneImgPart>
                  <CardOneImg src="img/img1.png" alt=" " />
                  <OneText>LION</OneText>
                </CardOneImgPart>
                <ArrowImg src="img/BondsArrow.png" alt="" />
                <CardOneImgPart>
                  <CardOneImg src="img/img4.png" alt=" " />
                  <OneText>LBOND</OneText>
                </CardOneImgPart>
              </CardImgPartOut>
              <PurText>2345.789 LBOND Is Available For Purchase.</PurText>
              <ApproveBtn>
                <CustomBtn
                  width="100%"
                  height="50px"
                  text="APPROVE LION"
                  clickFunc={() => console.log("click approve lion button")}
                />
              </ApproveBtn>
            </RowLeft>
            <RowMiddle>
              <MiddleTop>
                LION = 0.3765 SVN
                <br />
                <span>Last - Hour TWAP Price</span>
              </MiddleTop>
              <MiddleTop>
                LBOND = 0.386 SVN
                <br />
                <span>Current Price : ( 20 LION )</span>
              </MiddleTop>
            </RowMiddle>
            <RowLeft>
              <CardImgPartOut>
                <CardOneImgPart>
                  <CardOneImg src="img/img1.png" alt=" " />
                  <OneText>LBOND</OneText>
                </CardOneImgPart>
                <ArrowImg src="img/BondsArrow.png" alt="" />
                <CardOneImgPart>
                  <CardOneImg src="img/img4.png" alt=" " />
                  <OneText>LION</OneText>
                </CardOneImgPart>
              </CardImgPartOut>
              <PurText>2345.789 LBOND Is Available For Purchase.</PurText>
              <ApproveBtn>
                <CustomBtn
                  width="100%"
                  height="50px"
                  text="APPROVE LION"
                  clickFunc={() => console.log("click approve lion button")}
                />
              </ApproveBtn>
            </RowLeft>
          </CardRow>
          <CardRow>
            <RowLeft>
              <CardImgPartOut>
                <CardOneImgPart>
                  <CardOneImg src="img/img1.png" alt=" " />
                  <OneText>Bear</OneText>
                </CardOneImgPart>
                <ArrowImg src="img/BondsArrow.png" alt="" />
                <CardOneImgPart>
                  <CardOneImg src="img/img4.png" alt=" " />
                  <OneText>BBOND</OneText>
                </CardOneImgPart>
              </CardImgPartOut>
              <PurText>2345.789 LBOND Is Available For Purchase.</PurText>
              <ApproveBtn>
                <CustomBtn
                  width="100%"
                  height="50px"
                  text="APPROVE LION"
                  clickFunc={() => console.log("click approve lion button")}
                />
              </ApproveBtn>
            </RowLeft>
            <RowMiddle>
              <MiddleTop>
                BEAR = 0.3765 SVN
                <br />
                <span>Last - Hour TWAP Price</span>
              </MiddleTop>
              <MiddleTop>
                LBOND = 0.386 SVN
                <br />
                <span>Current Price : ( 20 LION )</span>
              </MiddleTop>
            </RowMiddle>
            <RowLeft>
              <CardImgPartOut>
                <CardOneImgPart>
                  <CardOneImg src="img/img1.png" alt=" " />
                  <OneText>BBOND</OneText>
                </CardOneImgPart>
                <ArrowImg src="img/BondsArrow.png" alt="" />
                <CardOneImgPart>
                  <CardOneImg src="img/img4.png" alt=" " />
                  <OneText>BEAR</OneText>
                </CardOneImgPart>
              </CardImgPartOut>
              <PurText>2345.789 LBOND Is Available For Purchase.</PurText>
              <ApproveBtn>
                <CustomBtn
                  width="100%"
                  height="50px"
                  text="APPROVE LION"
                  clickFunc={() => console.log("click approve lion button")}
                />
              </ApproveBtn>
            </RowLeft>
          </CardRow>
        </Rows>
      </HomeBody>
    </HomeOut>
  );
}
