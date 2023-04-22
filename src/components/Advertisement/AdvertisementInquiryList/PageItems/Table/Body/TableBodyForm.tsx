import React, {Fragment, useRef} from "react";
import {
    AdvertisementInquiryTableBodyButton,
    AdvertisementTableBodyRowSpan,
    BodyContent,
    CheckBoxWrapper,
    InputCheckBox,
    LabelCheckBox,
    Tbody,
} from "./TableBodyForm.styled";

import {AdvertisementPropsType,} from "../../../../../../types/AdvertisementType";
import {AdvertisementAction, setAdvertisementProgress} from "redux/modules/AdvertisementSlice";
import {useAppDispatch, useAppSelector} from "store/rootReducer";
import {useNavigate} from "react-router";

interface List {
    adSeq: number;
    userSeq: number;
    id: string;
    name: string;
    nickname: string;
    phone: string;
    email: string;
    title: string;
    contents: string;
    confirm: string;
    link: string;
}

const TableBodyForm = ({}: AdvertisementPropsType) => {
    const inputCheckTypeRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    // const [isPage, setIsPage] = useState<number>(0);
    const {inquiryList, checkList} = useAppSelector((state) => state.AdvertisementSlice);

    // console.log(inquiryList)

    // 항목 체크 박스 셋업
    const userCheckBoxClickHandler = (brdSeq: number, isChecked: boolean) => {
        dispatch(
            AdvertisementAction.setAdvertisementListEachChecked({brdSeq, isChecked})
        );
    };

    const inputCheckOnClickHandler = () => {
        console.log(inputCheckTypeRef.current?.checked);
    };

    const inputCheckOnChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        userCheckBoxClickHandler(parseInt(event.target.id), event.target.checked);
    };

    // 제휴업체 문의 디테일로 넘어가기
    const AdvertisementInquiryDetailOnClickHandler = (brdSeq: number) => {
        navigate(`/advertisementlist/inquiry/${brdSeq}`);
    };
    const progressOnClickHandler = (brdSeq: number, confirm: string) => {
        if (confirm == 'Y'|| confirm =='N') return;
        dispatch(setAdvertisementProgress({checkList: [brdSeq]}));
    }

    return (
        <Tbody key={"advertisemetInquiry-uuid"}>
            {inquiryList.map((item:List, index) => {
                return (
                    <Fragment key={item.adSeq}>
                        <tr onClick={() => AdvertisementInquiryDetailOnClickHandler(item.adSeq)}>
                            <BodyContent rowSpan={2}>
                                <CheckBoxWrapper>
                                    <InputCheckBox
                                        id={item.adSeq.toString()}
                                        ref={inputCheckTypeRef}
                                        onClick={inputCheckOnClickHandler}
                                        onChange={(event) => {
                                            inputCheckOnChangeHandler(event);
                                        }}
                                        checked={!!checkList.includes(item.adSeq)}
                                    />
                                    <LabelCheckBox htmlFor={item.adSeq.toString()}/>
                                </CheckBoxWrapper>
                            </BodyContent>
                            <BodyContent rowSpan={2}>
                                {" "}
                                {String(item.adSeq.toString()).padStart(7, "0")}
                            </BodyContent>
                            <BodyContent colSpan={2}>{item.id}</BodyContent>
                            {/*<BodyContent>{TypeOfBusiness[item.category]}</BodyContent>*/}
                            <BodyContent>{item.phone}</BodyContent>
                            <BodyContent>{item.title}</BodyContent>

                            <AdvertisementTableBodyRowSpan rowSpan={2}
                                                           onClick={(event) => {
                                                               event.stopPropagation()
                                                           }}>
                                <AdvertisementInquiryTableBodyButton progress={item.confirm}
                                                                     onClick={() => progressOnClickHandler(item.adSeq, item.confirm)}>
                                    {{
                                        'Y': "완료",
                                        'N': "반려",
                                        'R': "대기중"
                                    }[item.confirm]
                                    }
                                </AdvertisementInquiryTableBodyButton>
                            </AdvertisementTableBodyRowSpan>
                        </tr>
                        <tr onClick={() => AdvertisementInquiryDetailOnClickHandler(item.adSeq)}>
                            <BodyContent>{item.name}</BodyContent>
                            <BodyContent>{item.nickname}</BodyContent>
                            <BodyContent>{item.email}</BodyContent>
                            <BodyContent>{item.contents}</BodyContent>
                        </tr>
                    </Fragment>
                );
            })}
        </Tbody>
    );
};

export default TableBodyForm;
