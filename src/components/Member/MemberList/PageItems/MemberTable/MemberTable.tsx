import React from "react";

import MemberTableHeaderForm from "./Header/MemberTableHeaderForm";
import MemberTableBodyForm from "./Body/MemberTableBodyForm";

export type MemberTableProps = {
    offset: number;
    postsPerPage: number;
    totalContentsCount: number;
    banMemberHandler: Function;
    unbanMemberHandler: Function;
};

function MemberTable({ offset, postsPerPage, totalContentsCount, banMemberHandler, unbanMemberHandler }: MemberTableProps) {
    return (
        <div className="table">
            <table>
                <MemberTableHeaderForm />
                <MemberTableBodyForm offset={offset} postsPerPage={postsPerPage} totalContentsCount={totalContentsCount} banMemberHandler={banMemberHandler} unbanMemberHandler={unbanMemberHandler} />
            </table>
        </div>
    );
}

export default MemberTable;
