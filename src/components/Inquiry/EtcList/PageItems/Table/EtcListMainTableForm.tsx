import React from 'react'
import { EtcListMainTableWrapper, EtcListTable } from "./EtcListMainTableForm.styled";
import TableHeaderForm from './Header/TableHeaderForm';
import TableBodyForm from './Body/TableBodyForm';
import { InquiryPropsType } from "../../../../../types/InquiryType";

const EtcListMainTableForm = ( { offset, postsPerPage, totalContentsCount } : InquiryPropsType ) => {
  return (
    <EtcListMainTableWrapper>
      <EtcListTable>
        <TableHeaderForm />
        <TableBodyForm
          offset={offset}
          postsPerPage={postsPerPage}
          totalContentsCount={totalContentsCount}
        />
      </EtcListTable>
    </EtcListMainTableWrapper>
  );
}

export default EtcListMainTableForm