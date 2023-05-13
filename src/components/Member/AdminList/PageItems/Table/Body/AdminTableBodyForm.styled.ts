import styled from "styled-components";
import { Button } from "components/Common/Button/ButtonForm.styled";

export const AdminTableBody = styled.tbody`
  height: 116px;

  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.body_14};
  line-height: 100%;

  color: ${({ theme }) => theme.colors.greyScale_6};
`;

export const AdminTableBodyRowSpan = styled.td`
  height: 116px;
  text-align: center;

  text-align: center;
  vertical-align: middle;
  border: 1px solid ${({ theme }) => theme.colors.greyScale_3};
`;

export const AdminTableProfileImg = styled.img`
  margin-top: 8px;
  //margin-bottom: 8px;
  margin-left: 38.89px;
  width: 100px;
  height: 100px;

  background: #d9d9d9;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const AdminTableBodyClamp = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* ellipsis line */
  -webkit-box-orient: vertical;
`;

export const AdminTableBodyNoSpan = styled.td.attrs({})`
  text-align: center;
  vertical-align: middle;
  border: 1px solid ${({ theme }) => theme.colors.greyScale_3};
`;

export const AdminTableBodyButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.greyScale_1};
  color: ${({ theme }) => theme.colors.greyScale_6};

  text-align: center;
  vertical-align: middle;
  border: 1px solid ${({ theme }) => theme.colors.greyScale_4};
`;
