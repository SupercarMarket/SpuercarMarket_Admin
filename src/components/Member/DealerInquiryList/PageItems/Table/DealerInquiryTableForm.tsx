import React from "react";
import DealerInquiryTableBodyForm from "./Body/DealerInquiryTableBodyForm";
import DealerInquiryTableHeaderForm from "./Header/DealerInquiryTableHeaderForm";

export type DealerInquiryTableProps = {
    offset: number;
    postsPerPage: number;
    totalContentsCount: number;
    registerDealerHandler: Function;
};

function DealerInquiryTableForm({ offset, postsPerPage, totalContentsCount, registerDealerHandler }: DealerInquiryTableProps) {
    return (
        <div className="table">
            <table>
                <DealerInquiryTableHeaderForm />
                <DealerInquiryTableBodyForm offset={offset} postsPerPage={postsPerPage} totalContentsCount={totalContentsCount} registerDealerHandler={registerDealerHandler} />
            </table>
        </div>
    );
}

export default DealerInquiryTableForm;
