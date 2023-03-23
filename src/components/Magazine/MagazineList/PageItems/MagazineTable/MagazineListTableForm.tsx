import React from "react";

import MemberTableHeaderForm from "./Header/MagazineListTableHeaderForm";
import MemberTableBodyForm from "./Body/MagazineListTableBodyForm";
import { MemberTable } from "./MagazineListTableForm.styled";

export type MagazineListTableProps = {
    offset: number;
    postsPerPage: number;
    totalContentsCount: number;
    hideButtonOnClickHandler: Function;
    unhideButtonOnClickHandler: Function;
    deleteButtonOnClickHandler: Function;
};

function MagazineListTableForm({ offset, postsPerPage, totalContentsCount, hideButtonOnClickHandler, unhideButtonOnClickHandler, deleteButtonOnClickHandler }: MagazineListTableProps) {
    return (
        <MemberTable>
            <MemberTableHeaderForm />
            <MemberTableBodyForm
                offset={offset}
                postsPerPage={postsPerPage}
                totalContentsCount={totalContentsCount}
                hideButtonOnClickHandler={hideButtonOnClickHandler}
                unhideButtonOnClickHandler={unhideButtonOnClickHandler}
                deleteButtonOnClickHandler={deleteButtonOnClickHandler}
            />
        </MemberTable>
    );
}

export default MagazineListTableForm;
