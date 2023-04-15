import React from 'react'
import {AdvertisementInquiryMainTableWrapper, AdvertisementInquiryTable} from "./AdvertisementInquiryMainTableForm.styled";
import TableHeaderForm from './Header/TableHeaderForm';
import TableBodyForm from './Body/TableBodyForm';
import {AdvertisementPropsType} from "../../../../../types/AdvertisementType";

const AdvertisementInquiryMainTableForm = ( { offset, postsPerPage, totalContentsCount } : AdvertisementPropsType ) => {
  return (
    <AdvertisementInquiryMainTableWrapper>
      <AdvertisementInquiryTable>
        <TableHeaderForm />
        <TableBodyForm
          offset={offset}
          postsPerPage={postsPerPage}
          totalContentsCount={totalContentsCount}
        />
      </AdvertisementInquiryTable>
    </AdvertisementInquiryMainTableWrapper>
  );
}

export default AdvertisementInquiryMainTableForm