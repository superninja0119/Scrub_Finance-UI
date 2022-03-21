import React from "react";
import CustomBtn from "../BtnComponent";
import {
  ZapModal,
  ZapModalBody,
  CloseBtn,
  ZapTitle,
  SelectBottomLabel,
  CusInputPart,
  CusInput,
  MaxBtn,
  GoBtn,
  ZapBack,
} from "./confirm.style";
import { MdClose } from "react-icons/md";

export default function ConfirmContainer({ visible, changevalue, closeFunc }) {
  return (
    <>
      {visible && (
        <ZapModal>
          <ZapModalBody>
            <CloseBtn>
              <MdClose
                onClick={() => closeFunc(false)}
                className="closeclass"
              />
            </CloseBtn>
            <ZapTitle>Deposit LION-SVN LP</ZapTitle>
            <CusInputPart>
              <CusInput
                placeholder="45.782"
                type="number"
                onChange={(e) => changevalue(e.target.value)}
              />
              <MaxBtn>
                <CustomBtn
                  width="100px"
                  height="40px"
                  text="Max"
                  clickFunc={() => console.log("click max button")}
                />
              </MaxBtn>
            </CusInputPart>
            <SelectBottomLabel>
              45.782 LION-SVN LP <span>Avaliable</span>
            </SelectBottomLabel>
            <GoBtn>
              <CustomBtn
                width="100%"
                height="50px"
                text="Confirm"
                clickFunc={() => console.log("click confirm button")}
              />
            </GoBtn>
          </ZapModalBody>
          <ZapBack onClick={() => closeFunc(false)} />
        </ZapModal>
      )}
    </>
  );
}
