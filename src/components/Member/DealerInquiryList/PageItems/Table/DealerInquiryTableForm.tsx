import React from "react";
import DealerInquiryTableBodyForm from "./Body/DealerInquiryTableBodyForm";
import { DealerInquiryTable } from "./DealerInquiryTable.styled";
import DealerInquiryTableHeaderForm from "./Header/DealerInquiryTableHeaderForm";

export type DealerInquiryTableProps = {
    offset: number;
    postsPerPage: number;
    totalContentsCount: number;
    registerDealerHandler: Function;
};

function DealerInquiryTableForm({ offset, postsPerPage, totalContentsCount, registerDealerHandler }: DealerInquiryTableProps) {
    return (
        <DealerInquiryTable>
            <DealerInquiryTableHeaderForm />
            <DealerInquiryTableBodyForm offset={offset} postsPerPage={postsPerPage} totalContentsCount={totalContentsCount} registerDealerHandler={registerDealerHandler} />
        </DealerInquiryTable>
    );
}

export default DealerInquiryTableForm;
