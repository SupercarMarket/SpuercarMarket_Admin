import React from 'react'
import {AdvertisementMainTableWrapper, AdvertisementTable} from "./AdvertisementMainTableForm.styled";
import TableHeaderForm from './Header/TableHeaderForm';
import TableBodyForm from './Body/TableBodyForm';
import {AdvertisementPropsType} from "../../../../../types/AdvertisementType";

const AdvertisementMainTableForm = ( { offset, postsPerPage, totalContentsCount } : AdvertisementPropsType ) => {
  return (
    <AdvertisementMainTableWrapper>
      <AdvertisementTable>
        <TableHeaderForm />
        <TableBodyForm
          offset={offset}
          postsPerPage={postsPerPage}
          totalContentsCount={totalContentsCount}
        />
      </AdvertisementTable>
    </AdvertisementMainTableWrapper>
  );
}

export default AdvertisementMainTableForm