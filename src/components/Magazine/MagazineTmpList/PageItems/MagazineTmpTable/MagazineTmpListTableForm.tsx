import React from "react";

import MagazineTmpListHeaderForm from "./Header/MagazineTmpListTableHeaderForm";
import MagazineTmpListBodyForm from "./Body/MagazineTmpListTableBodyForm";
import { MagazineTmpListTable } from "./MagazineTmpListTableForm.styled";

export type MagazineListTableProps = {
    offset: number;
    postsPerPage: number;
    totalContentsCount: number;
    deleteButtonOnClickHandler: Function;
};

function MagazineTmpListTableForm({ offset, postsPerPage, totalContentsCount, deleteButtonOnClickHandler }: MagazineListTableProps) {
    return (
        <MagazineTmpListTable>
            <MagazineTmpListHeaderForm />
            <MagazineTmpListBodyForm offset={offset} postsPerPage={postsPerPage} totalContentsCount={totalContentsCount} deleteButtonOnClickHandler={deleteButtonOnClickHandler} />
        </MagazineTmpListTable>
    );
}

export default MagazineTmpListTableForm;
