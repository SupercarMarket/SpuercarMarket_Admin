import React from 'react'
import {useDetectOutSideHandler} from "hooks/DropDown/useDropDownHooks";
import {MonthDisableOptionItem, MonthOptionItem} from "./AdvertisementEditTableForm.styled";
import {DropDownItemMap, MonthDropDownPropsType} from "../../../../../types/DropDownType";


const MonthDropDownForm = ({category, LiOnClick, monthResList}: MonthDropDownPropsType) => {
    const {changeDropDownTitleFn} = useDetectOutSideHandler({
        initState: false,
        title: category
    });

    return (
        <>
            {DropDownItemMap[
                category
                ].map((item) => {
                return (
                    monthResList.includes(item.name)
                        ?
                        <MonthDisableOptionItem key={item.name}>
                            {item.name}
                        </MonthDisableOptionItem>
                        :
                        <MonthOptionItem
                            key={item.name}
                            onClick={(
                                event
                            ) => {
                                changeDropDownTitleFn(
                                    item.name
                                );
                                LiOnClick(
                                    event
                                );
                            }}
                        >
                            {item.name}
                        </MonthOptionItem>
                );
            })}
        </>
    );
}

export default MonthDropDownForm;