import React, { useState, useEffect } from "react";
import { getMagazineHistory } from "redux/modules/MagazineListSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";

import { ExpandArrow, HistoryElement, HistoryTitle } from "./MagazineDetailHistoryForm.styled";

function MagazineDetailHistoryForm({ brdSeq }: { brdSeq: string }) {
    const [isShowHistory, setIsShowHistory] = useState(false);
    const { isHistoryLoading, editHistory } = useAppSelector((state) => state.MagazineListSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getMagazineHistory({ brdSeq: brdSeq as string }));
    }, [brdSeq, dispatch]);

    return (
        <>
            <HistoryTitle onClick={() => setIsShowHistory(!isShowHistory)}>
                <span>관리 히스토리&nbsp;&nbsp;</span>
                <ExpandArrow isClicked={isShowHistory} />
            </HistoryTitle>
            {isShowHistory && (
                <>
                    {!isHistoryLoading ? (
                        <>
                            {editHistory.map((el, index) => (
                                <HistoryElement key={index}>
                                    {el.date} 에 {el.nickname} 님이 {el.contents}했습니다.
                                </HistoryElement>
                            ))}
                        </>
                    ) : (
                        <div>조회중입니다.</div>
                    )}
                </>
            )}
        </>
    );
}

export default MagazineDetailHistoryForm;
