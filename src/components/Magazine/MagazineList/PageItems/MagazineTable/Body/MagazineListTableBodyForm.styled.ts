import styled from "styled-components";
import { Button } from "components/Common/Button/ButtonForm.styled";
import BlackCheckBox from "assets/black_checkbox.svg";

export const MagazineListTableBody = styled.tbody`
  height: 80px;

  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.body_14};
  line-height: 150%;

  color: ${({ theme }) => theme.colors.greyScale_6};
`;

export const MagazineListTableBodyRowSpan = styled.td`
  height: 80px;
  text-align: center;

  text-align: center;
  vertical-align: middle;
  border: 1px solid ${({ theme }) => theme.colors.greyScale_3};
`;

export const MagazineListTableBodyClamp = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* ellipsis line */
  -webkit-box-orient: vertical;
`;

export const MagazineListTableBodyNoSpan = styled.td.attrs({})`
  text-align: center;
  vertical-align: middle;
  border: 1px solid ${({ theme }) => theme.colors.greyScale_3};
`;

export const MagazineListTableBodyButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.greyScale_1};
  color: ${({ theme }) => theme.colors.greyScale_6};

  text-align: center;
  vertical-align: middle;
  border: 1px solid ${({ theme }) => theme.colors.greyScale_4};
`;

export const MagazineListCheckBoxWrapper = styled.div`
  /* inline-block 사이에 공백이 생기게 되는데, parent 태그에 font-size: 0를 적용하면 해결 */
  /* &+label의 display를 block으로 바꾸면 font-size 주석처리 해도 됨 */
  font-size: 0;
  /* inline-block 끼리 높이가 안맞을 때 상위 공백이 생기게 되는데 vertical-align: top을 적용하면 해결 */
  /* vertical-align: top; */
`;

export const MagazineListInputCheckBox = styled.input.attrs({
  type: "checkbox",
})`
  display: none;
  /* + 연산 : 바로 옆 태그를 참조 */
  /* 체크 된 상태 CSS */
  & + label {
    cursor: pointer;
    position: relative;

    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2px solid #1e1e20;
    border-radius: 4px;
    vertical-align: middle;
  }

  &:checked + label {
    width: 18px;
    height: 18px;
    background-image: url(${BlackCheckBox});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:disabled + label {
    border: 2px solid #c3c3c7;
  }
`;

export const MagazineLiseLabelCheckBox = styled.label``;
