import styled from "styled-components";
import { Button } from "components/Common/Button/ButtonForm.styled";

export const DealerInquiryTableBody = styled.tbody`
    height: 80px;

    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.fontSize.body_14};
    line-height: 150%;

    color: ${({ theme }) => theme.colors.greyScale_6};
`;

export const DealerInquiryTableBodyRowSpan = styled.td`
    height: 80px;
    text-align: center;

    text-align: center;
    vertical-align: middle;
    border: 1px solid ${({ theme }) => theme.colors.greyScale_3};
`;

export const DealerInquiryTableBodyClamp = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* ellipsis line */
    -webkit-box-orient: vertical;
`;

export const DealerInquiryTableBodyNoSpan = styled.td.attrs({})`
    height: 40px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid ${({ theme }) => theme.colors.greyScale_3};
`;

export const DealerInquiryTableBodyButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.greyScale_1};
    color: ${({ theme }) => theme.colors.greyScale_6};

    text-align: center;
    vertical-align: middle;
    border: 1px solid ${({ theme }) => theme.colors.greyScale_4};
`;

export const DealerInquiryTableImage = styled.img`
    width: auto;
    max-width: 140px;
    height: 80px;
    margin: 0 auto;
    padding: 10px;
    display: block;
    overflow: hidden;
`;
