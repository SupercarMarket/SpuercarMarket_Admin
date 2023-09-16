import React from "react";

import MagazineTableHeaderForm from "./Header/MagazineListTableHeaderForm";
import MagazineTableBodyForm from "./Body/MagazineListTableBodyForm";
import { MagazineTable } from "./MagazineListTableForm.styled";

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
        <MagazineTable>
            <MagazineTableHeaderForm />
            <MagazineTableBodyForm
                offset={offset}
                postsPerPage={postsPerPage}
                totalContentsCount={totalContentsCount}
                hideButtonOnClickHandler={hideButtonOnClickHandler}
                unhideButtonOnClickHandler={unhideButtonOnClickHandler}
                deleteButtonOnClickHandler={deleteButtonOnClickHandler}
            />
        </MagazineTable>
    );
}

export default MagazineListTableForm;
