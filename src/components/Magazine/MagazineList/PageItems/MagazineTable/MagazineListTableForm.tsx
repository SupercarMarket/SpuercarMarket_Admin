import React from "react";

import MemberTableHeaderForm from "./Header/MagazineListTableHeaderForm";
import MemberTableBodyForm from "./Body/MagazineListTableBodyForm";
import { MemberTable } from "./MagazineListTableForm.styled";

export type MemberTableProps = {
    offset: number;
    postsPerPage: number;
    totalContentsCount: number;
    banMemberHandler: Function;
    unbanMemberHandler: Function;
};

function MagazineListTableForm({ offset, postsPerPage, totalContentsCount, banMemberHandler, unbanMemberHandler }: MemberTableProps) {
    return (
        <MemberTable>
            <MemberTableHeaderForm />
            <MemberTableBodyForm offset={offset} postsPerPage={postsPerPage} totalContentsCount={totalContentsCount} banMemberHandler={banMemberHandler} unbanMemberHandler={unbanMemberHandler} />
        </MemberTable>
    );
}

export default MagazineListTableForm;
