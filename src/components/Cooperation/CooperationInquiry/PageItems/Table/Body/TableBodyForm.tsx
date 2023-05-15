import React from "react";
import {
  Tbody,
  BodyButton,
  BodyContent,
  CheckBoxWrapper,
  InputCheckBox,
  LabelCheckBox,
} from "./TableBodyForm.styled";
import { CooperationPropsType } from "../../../../../../types/CooperationType";
import { useAppSelector } from "../../../../../../store/rootReducer";

const TableBodyForm = ({
  offset,
  postsPerPage,
  totalContentsCount,
}: CooperationPropsType) => {
  const { inquiryList, checkList } = useAppSelector(
    (state) => state.CooperationSlice
  );
  return (
    <Tbody>
      {inquiryList.map((item, index) => {
        return (
          <>
            {/*<tr key={index}>*/}
            <BodyContent rowSpan={2}>
              <CheckBoxWrapper>
                <InputCheckBox id="checkbox_body" />
                <LabelCheckBox htmlFor="checkbox_body" />
              </CheckBoxWrapper>
            </BodyContent>
            <BodyContent colSpan={2}>{item.companyName}</BodyContent>
            <BodyContent>{item.category}</BodyContent>
            <BodyContent>
              평일 {item.workingTime.split("-")[0]}:00 ~
              {item.workingTime.split("-")[1]}:00
            </BodyContent>
            <BodyContent>{item.wiredNumber}</BodyContent>
            <BodyContent rowSpan={2}>
              <BodyButton>업체 등록</BodyButton>
            </BodyContent>
            {/*</tr>*/}
            <tr>
              <BodyContent>{item.representative}</BodyContent>
              <BodyContent>{item.address}</BodyContent>
              <BodyContent>{item.treatedItem}</BodyContent>
              <BodyContent>{item.website}</BodyContent>
              <BodyContent>{item.phoneNumber}</BodyContent>
            </tr>
          </>
        );
      })}
    </Tbody>
  );
};

export default TableBodyForm;
