import React, {Fragment, useRef} from "react";
import {
    AdvertisementTableBodyRowSpan,
    BodyButton,
    BodyContent,
    CheckBoxWrapper,
    InputCheckBox,
    LabelCheckBox,
    Tbody,
} from "./TableBodyForm.styled";

import {AdvertisementPropsType,} from "../../../../../../types/AdvertisementType";
import {AdvertisementAction, setAdvertisementComplete} from "redux/modules/AdvertisementSlice";
import {useAppDispatch, useAppSelector} from "store/rootReducer";
import {useNavigate} from "react-router";

const TableBodyForm = ({}: AdvertisementPropsType) => {
    const inputCheckTypeRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    // const [isPage, setIsPage] = useState<number>(0);
    const {list,checkList} = useAppSelector((state) => state.AdvertisementSlice);


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

    const closeAdvertisementHandler = (id: number, viewStatus:boolean) =>{
        if (!viewStatus) return;
        dispatch(setAdvertisementComplete({checkList: [id]}));

    }

    // 제휴업체 디테일로 넘어가기
    const AdvertisementDetailOnClickHandler = (brdSeq: number) => {
        navigate(`/advertisementlist/${brdSeq}`);
    };

    return (
        <Tbody key={"advertisemet-uuid"}>
            {list.map((item, index) => {
                return (
                    <Fragment key={item.id}>
                        <tr onClick={() => AdvertisementDetailOnClickHandler(item.id)}>
                            <BodyContent rowSpan={2}>
                                <CheckBoxWrapper>
                                    <InputCheckBox
                                        id={item.id.toString()}
                                        ref={inputCheckTypeRef}
                                        onClick={inputCheckOnClickHandler}
                                        onChange={(event) => {
                                            inputCheckOnChangeHandler(event);
                                        }}
                                        checked={checkList.includes(item.id) ? true : false}
                                    />
                                    <LabelCheckBox htmlFor={item.id.toString()}/>
                                </CheckBoxWrapper>
                            </BodyContent>
                            <BodyContent rowSpan={2}>
                                {" "}
                                {String(item.id.toString()).padStart(7, "0")}
                            </BodyContent>
                            <BodyContent>{item.adTitle}</BodyContent>
                            {/*<BodyContent>{TypeOfBusiness[item.category]}</BodyContent>*/}
                            <BodyContent rowSpan={2}>{item.adPosition}</BodyContent>
                            <BodyContent>{item.url}</BodyContent>
                            <BodyContent rowSpan={2}>{item.viewDate} </BodyContent>
                            <BodyContent rowSpan={2}>{item.pricePerMonth} 원</BodyContent>
                            <BodyContent rowSpan={2}>{item.viewStatus ? "진행 중" : "종료"}</BodyContent>
                            <AdvertisementTableBodyRowSpan rowSpan={2}>
                                {item.viewStatus ? (
                                    <BodyButton onClick={() => closeAdvertisementHandler(item.id, item.viewStatus)}>종료</BodyButton>
                                ) : (
                                    <BodyButton >종료됨</BodyButton>
                                )}
                            </AdvertisementTableBodyRowSpan>
                        </tr>
                        <tr onClick={() => AdvertisementDetailOnClickHandler(item.id)}>
                            <BodyContent>{item.adType}</BodyContent>
                            <BodyContent>{item.imageName}</BodyContent>
                            {/*<BodyContent rowSpan={2} >*/}
                            {/*  <BodyButton>숨기기</BodyButton>*/}
                            {/*</BodyContent>*/}
                            {/*<BodyContent>{item.treatedItem}</BodyContent>*/}
                            {/*<BodyContent style={{ cursor: "pointer" }}>*/}
                            {/*  <a href={item.website}>{item.website}</a>*/}
                            {/*</BodyContent>*/}
                            {/*<BodyContent>{item.phoneNumber}</BodyContent>*/}
                        </tr>
                    </Fragment>
                );
            })}
        </Tbody>
    );
};

export default TableBodyForm;
