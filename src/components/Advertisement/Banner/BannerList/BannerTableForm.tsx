import BannerTableHeaderForm from "./BannerTableHeaderForm";
import { TableWrapper, Table } from "./BannerTableForm.styled";
import BannerTableBodyForm from "./BannerTableBodyForm";
const BannerTableForm = ({
    list,
    checked,
    setChecked,
    checkAll,
    deleteBanner,
    setType,
}: any) => {
    return (
        <TableWrapper>
            <Table>
                <BannerTableHeaderForm
                    checkAll={checkAll}
                    setType={setType}
                ></BannerTableHeaderForm>
                <BannerTableBodyForm
                    deleteBanner={deleteBanner}
                    list={list}
                    checked={checked}
                    setChecked={setChecked}
                ></BannerTableBodyForm>
            </Table>
        </TableWrapper>
    );
};

export default BannerTableForm;
