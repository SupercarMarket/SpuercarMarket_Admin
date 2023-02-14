import React from "react";
import { Button } from "../../../styles/buttonStyles";
import { HeaderDiv } from "./DealerTableHeader.styled";

type UserHeaderProps = {
  registerRequest: number;
};

function DealerTableHeaderForm({ registerRequest }: UserHeaderProps) {
  return (
    <HeaderDiv>
      <Button style={{ height: "44px" }} disabled>
        신규 등록 문의 {registerRequest}건
      </Button>
    </HeaderDiv>
  );
}

export default DealerTableHeaderForm;
