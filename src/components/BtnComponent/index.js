import React from "react";
import Button from "@material-ui/core/Button";
import { CusBtn } from "./btn.style";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsLightningChargeFill } from "react-icons/bs";

export default function BtnContainer({
  width,
  height,
  text,
  clickFunc,
  bgColor = "#ff8718",
  disabled = false,
  family = "ChakraBold",
  radius = "12px",
  fontsize = "18px",
  borderbottom = true,
}) {
  return (
    <CusBtn
      width={width}
      height={height}
      bgColor={bgColor}
      radius={radius}
      family={family}
      fontsize={fontsize}
      borderbottom={borderbottom}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => clickFunc()}
        disabled={disabled}
      >
        {text === "plus" && <AiOutlinePlus />}
        {text === "minus" && <AiOutlineMinus />}
        {text === "lightning" && <BsLightningChargeFill />}
        {text !== "plus" && text !== "minus" && text !== "lightning" && text}
      </Button>
    </CusBtn>
  );
}
