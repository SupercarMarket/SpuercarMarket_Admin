import React from "react";

import MagazineInquiryListTableBodyForm from "./Body/MagazineInquiryListTableBodyForm";
import MagazineInquiryListTableHeaderForm from "./Header/MagazineInquiryListTableHeaderForm";
import { MagazineInquiryListTable } from "./MagazineInquiryListTableForm.styled";

function MagazineInquiryListTableForm() {
  return (
    <MagazineInquiryListTable>
      <MagazineInquiryListTableHeaderForm />
      <MagazineInquiryListTableBodyForm />
    </MagazineInquiryListTable>
  );
}

export default MagazineInquiryListTableForm;
