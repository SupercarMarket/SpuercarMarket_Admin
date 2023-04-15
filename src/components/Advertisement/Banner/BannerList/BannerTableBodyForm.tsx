import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import {
    LabelCheckBox,
    InputCheckBox,
    CheckBoxWrapper,
    TableBody,
    TableBodyRowSpan,
    TableBodyButton,
} from "./BannerTableBodyForm.styled";
import { log } from "console";

interface List {
    seq: number;
    order: number;
    title: string;
    type: string;
    image_url: string;
    url: string;
    image_name: string;
}
interface Props {
    checked: number[];
    setChecked: (v: number[]) => void;
    list: any;
    deleteBanner: (v: number[]) => void;
}

const BannerTableBodyForm = ({
    checked,
    setChecked,
    list,
    deleteBanner,
}: Props) => {
    const inputCheckTypeRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const DetailOnClickHandler = (seq: number) => {
        navigate(`/banner/${seq}`);
    };

    const inputCheckOnChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>,
        seq: number
    ) => {
        console.log("check", event.target.checked);

        if (event.target.checked) {
            setChecked([...checked, seq]);
        } else {
            const newChecked = checked.filter((v) => v !== seq);
            setChecked(newChecked);
        }
        // userCheckBoxClickHandler( parseInt(  event.target.id ), event.target.checked );
    };
    const deleteOnClickHandler = async (seq: number) => {
        deleteBanner([seq]);
    };
    const isChecked = (itemSeq: number) => {
        console.log("isChecked");

        return checked.find((seq) => seq === itemSeq) ? true : false;
    };

    return (
        <TableBody>
            {list.map((item: List, index: number) => {
                return (
                    <React.Fragment key={item.seq}>
                        <tr onClick={() => DetailOnClickHandler(item.seq)}>
                            <TableBodyRowSpan
                                rowSpan={2}
                                onClick={(event) => {
                                    event.stopPropagation();
                                }}
                            >
                                <CheckBoxWrapper>
                                    <InputCheckBox
                                        id={item.seq.toString()}
                                        ref={inputCheckTypeRef}
                                        onChange={(event) => {
                                            inputCheckOnChangeHandler(
                                                event,
                                                item.seq
                                            );
                                        }}
                                        checked={isChecked(item.seq)}
                                    />
                                    <LabelCheckBox
                                        htmlFor={item.seq.toString()}
                                    />
                                </CheckBoxWrapper>
                            </TableBodyRowSpan>

                            <TableBodyRowSpan rowSpan={2}>
                                {item.order}
                            </TableBodyRowSpan>

                            <TableBodyRowSpan rowSpan={2}>
                                {item.title}
                            </TableBodyRowSpan>

                            <TableBodyRowSpan rowSpan={2}>
                                {item.type}
                            </TableBodyRowSpan>

                            <TableBodyRowSpan>
                                {item.image_url}
                            </TableBodyRowSpan>

                            <TableBodyRowSpan
                                rowSpan={2}
                                onClick={(event) => {
                                    event.stopPropagation();
                                }}
                            >
                                <TableBodyButton
                                    onClick={() =>
                                        deleteOnClickHandler(item.seq)
                                    }
                                >
                                    삭제
                                </TableBodyButton>
                            </TableBodyRowSpan>
                        </tr>
                        <tr onClick={() => DetailOnClickHandler(item.seq)}>
                            <TableBodyRowSpan>
                                {item.image_name}
                            </TableBodyRowSpan>
                        </tr>
                    </React.Fragment>
                );
            })}
        </TableBody>
    );
};

export default BannerTableBodyForm;
