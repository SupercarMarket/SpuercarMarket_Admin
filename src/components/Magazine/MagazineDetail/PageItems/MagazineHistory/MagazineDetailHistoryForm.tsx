import React, { useState, useEffect } from "react";
import { getMagazineHistory } from "redux/modules/MagazineListSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";

import { ExpandArrow, HistoryTitle } from "./MagazineDetailHistoryForm.styled";

function MagazineDetailHistoryForm({ brdSeq }: { brdSeq: string }) {
    const [isShowHistory, setIsShowHistory] = useState(false);
    const { isHistoryLoading } = useAppSelector((state) => state.MagazineListSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        // dispatch(getMagazineHistory({ brdSeq: brdSeq as string }));
    }, [brdSeq, dispatch]);

    return (
        <>
            <HistoryTitle onClick={() => setIsShowHistory(!isShowHistory)}>
                <span>관리 히스토리&nbsp;&nbsp;</span>
                <ExpandArrow isClicked={isShowHistory} />
            </HistoryTitle>
            {isShowHistory && <>{!isHistoryLoading ? <>히스토리 내용</> : <div>조회중입니다.</div>}</>}
        </>
    );
}

export default MagazineDetailHistoryForm;
