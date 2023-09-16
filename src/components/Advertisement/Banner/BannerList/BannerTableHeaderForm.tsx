import React, { useState, useRef } from "react";
import {
    TableHeader,
    TableHeaderRowSpan,
    CheckBoxWrapper,
    InputCheckBox,
    LabelCheckBox,
} from "./BannerTableHeaderForm.styled";
import SmallDropDownForm from "components/Common/DropDown/TableHeaderDropDownForm";
import { BannerListDropDownMap } from "types/DropDownType";

interface Props {
    checkAll: (isAllCheck: boolean) => void,
    setType :(v:string) => void;
}
const BannerTableHeaderForm = ({ checkAll, setType }: Props) => {
    const [allChecked, setAllChecked] = useState<boolean>(false);
    const DropDownTitleRef = useRef<HTMLSpanElement>(null);

    const allCheckBoxClickHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setAllChecked(event.target.checked);
        if (event.target.checked) {
            checkAll(true);
        } else {
            checkAll(false);
        }
    };

    // DropDown이 눌릴 때 textContent 값 가져오기
    const LiOnClickHandler = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
        console.log(BannerListDropDownMap[
            event.currentTarget.textContent as string
        ]);
        
        setType(BannerListDropDownMap[
                    event.currentTarget.textContent as string
                ]);
        // Lifilter =
        //     EtcInquiryListDropDownMap[
        //         event.currentTarget.textContent as string
        //     ];
        // dispatch(
        //     EtcInquiryAction.setEtcInquiryListFilter({ filter: Lifilter })
        // );
    };
    return (
        <TableHeader>
            <tr>
                <TableHeaderRowSpan rowSpan={2} style={{ width: "80px" }}>
                    <CheckBoxWrapper>
                        <InputCheckBox
                            id="header_check"
                            onChange={(event) => allCheckBoxClickHandler(event)}
                            checked={allChecked}
                        />
                        <LabelCheckBox htmlFor="header_check" />
                    </CheckBoxWrapper>
                </TableHeaderRowSpan>
                <TableHeaderRowSpan rowSpan={2}>순서</TableHeaderRowSpan>
                <TableHeaderRowSpan rowSpan={2} style={{ width: "480px" }}>
                    배너명
                </TableHeaderRowSpan>
                <TableHeaderRowSpan rowSpan={2}>
                    버전
                    <br />
                    <SmallDropDownForm
                        category={"banner_list"}
                        LiOnClick={(event) => LiOnClickHandler(event)}
                        titleRef={DropDownTitleRef}
                    ></SmallDropDownForm>
                </TableHeaderRowSpan>
                <TableHeaderRowSpan style={{ width: "560px" }}>
                    URL
                </TableHeaderRowSpan>
                <TableHeaderRowSpan rowSpan={2}>삭제</TableHeaderRowSpan>
            </tr>
            <tr>
                <TableHeaderRowSpan style={{ width: "560px" }}>
                    이미지
                </TableHeaderRowSpan>
            </tr>
        </TableHeader>
    );
};

export default BannerTableHeaderForm;
