import {EtcInquiryListPropsType} from "../../../../../types/EtcInquiryList";
import { TableWrapper, EtcInquiryTable } from "./EtcInquiryTableForm.styled";
import EtcInquiryTableHeaderForm from "./Header/EtcInquiryTableHeaderForm";
import EtcInquiryTableBodyForm from "./Body/EtcInquiryTableBodyForm";

const EtcInquiryTableForm = ({
     offset,
     postsPerPage,
     totalContentsCount,
 }: EtcInquiryListPropsType) => {

    return (
        <TableWrapper>
            <EtcInquiryTable>
                <EtcInquiryTableHeaderForm />
                <EtcInquiryTableBodyForm offset={offset} postsPerPage={postsPerPage} totalContentsCount={totalContentsCount} />
            </EtcInquiryTable>
        </TableWrapper>
    );
};
export default EtcInquiryTableForm