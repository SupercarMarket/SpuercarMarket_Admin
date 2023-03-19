import React from "react";
import AdminTableBodyForm from "./Body/AdminTableBodyForm";
import AdminTableHeaderForm from "./Header/AdminTableHeaderForm";

import { AdminTable } from "./AdminTableForm.styled";

export type AdminTableProps = {
    offset: number;
    postsPerPage: number;
    totalContentsCount: number;
};

function AdminTableForm({ offset, postsPerPage, totalContentsCount }: AdminTableProps) {
    return (
        <AdminTable>
            <AdminTableHeaderForm />
            <AdminTableBodyForm offset={offset} postsPerPage={postsPerPage} totalContentsCount={totalContentsCount} />
        </AdminTable>
    );
}

export default AdminTableForm;
