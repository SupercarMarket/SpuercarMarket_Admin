import React from 'react'
import TableHeaderForm from './Header/TableHeaderForm';
import TableBodyForm from './Body/TableBodyForm';
import { AdvertisementListTable, AdvertisementListTableWrapper } from "./AdvertisementListForm.styled";
// type
import { AdvertisementPopsType } from "../../../../../types/AdvertisementType";

const AdvertisementListTableForm = ( { offset, postsPerPage, totalContentsCount } : AdvertisementPopsType ) => {
  return (
    <AdvertisementListTableWrapper>
      <AdvertisementListTable>
        <TableHeaderForm />
        <TableBodyForm
          offset={offset}
          postsPerPage={postsPerPage}
          totalContentsCount={totalContentsCount}
        />
      </AdvertisementListTable>
    </AdvertisementListTableWrapper>
  );
}

export default AdvertisementListTableForm