import React from "react";
import { TableWrapper, Wrapper } from "./AdvertisementEditForm.styled";

import AdvertisementEditTableForm from "./edit/AdvertisementEditTable/AdvertisementEditTableForm";
import { useAppSelector } from "../../../store/rootReducer";

const AdvertisementEditForm = () => {
  const { isLoading } = useAppSelector((state) => state.AdvertisementSlice);
  return (
    <>
      <Wrapper>
        {isLoading ? (
          <div>조회 중입니다.</div>
        ) : (
          <>
            <TableWrapper>
              <AdvertisementEditTableForm />
            </TableWrapper>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default AdvertisementEditForm;
