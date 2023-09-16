import React from 'react'
import { CooperationMainTableWrapper, CooperationTable } from "./CooperationInquiryMainTableForm.styled";
import TableHeaderForm from './Header/TableHeaderForm';
import TableBodyForm from './Body/TableBodyForm';
import { CooperationPropsType } from "../../../../../types/CooperationType";

const CooperationInquiryMainTableForm = ( { offset, postsPerPage, totalContentsCount } : CooperationPropsType ) => {
  return (
    <CooperationMainTableWrapper>
      <CooperationTable>
        <TableHeaderForm />
        <TableBodyForm
          offset={offset}
          postsPerPage={postsPerPage}
          totalContentsCount={totalContentsCount}
        />
      </CooperationTable>
    </CooperationMainTableWrapper>
  );
}

export default CooperationInquiryMainTableForm;