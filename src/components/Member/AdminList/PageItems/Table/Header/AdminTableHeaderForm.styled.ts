import styled from "styled-components";

export const AdminTableHeader = styled.thead`
    height: 40px;

    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.fontSize.body_14};
    line-height: 150%;

    color: ${({ theme }) => theme.colors.greyScale_6};
`;

export const AdminTableHeaderRowSpan = styled.th`
    width: 160px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid ${({ theme }) => theme.colors.greyScale_3};

    background-color: ${({ theme }) => theme.colors.greyScale_2};
`;
