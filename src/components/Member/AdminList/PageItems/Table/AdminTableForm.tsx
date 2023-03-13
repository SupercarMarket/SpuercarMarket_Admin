import React from "react";
import AdminTableBodyForm from "./Body/AdminTableBodyForm";
import AdminTableHeaderForm from "./Header/AdminTableHeaderForm";

export type AdminTableProps = {
    offset: number;
    postsPerPage: number;
    totalContentsCount: number;
};

function AdminTableForm({ offset, postsPerPage, totalContentsCount }: AdminTableProps) {
    return (
        <div className="table">
            <table>
                <AdminTableHeaderForm />
                <AdminTableBodyForm offset={offset} postsPerPage={postsPerPage} totalContentsCount={totalContentsCount} />
            </table>
        </div>
    );
}

export default AdminTableForm;
