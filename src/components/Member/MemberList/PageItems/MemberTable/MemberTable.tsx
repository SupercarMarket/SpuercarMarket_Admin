import React from "react";

import MemberTableHeaderForm from "./Header/MemberTableHeaderForm";
import MemberTableBodyForm from "./Body/MemberTableBodyForm";
import { MemberTable } from "./MemberTable.styled";

export type MemberTableProps = {
    offset: number;
    postsPerPage: number;
    totalContentsCount: number;
    banMemberHandler: Function;
    unbanMemberHandler: Function;
};

function MemberTableForm({ offset, postsPerPage, totalContentsCount, banMemberHandler, unbanMemberHandler }: MemberTableProps) {
    return (
        <MemberTable>
            <MemberTableHeaderForm />
            <MemberTableBodyForm offset={offset} postsPerPage={postsPerPage} totalContentsCount={totalContentsCount} banMemberHandler={banMemberHandler} unbanMemberHandler={unbanMemberHandler} />
        </MemberTable>
    );
}

export default MemberTableForm;
