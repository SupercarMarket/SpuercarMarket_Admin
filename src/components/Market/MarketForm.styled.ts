import styled from "styled-components";
import { Button } from "../Common/Button/ButtonForm.styled";
import BlackCheckBox from "../../assets/black_checkbox.svg"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width : 100%;
    padding : 40px 40px;
`;

export const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
`;

export const TopLeftWrapper = styled.div`
    display: flex;
    gap: 20px;
    z-index : 1;
`;

export const TopRightWrapper = styled.div`
    display: flex;
    gap : 9px;
`;

export const TopHideButton = styled( Button )<{}>``

export const TotalTopButton = styled( Button )<{}>`
    cursor : default;
    background-color: ${({theme}) => theme.colors.greyScale_3 };
    color : ${({theme}) => theme.colors.greyScale_5 };
`;

export const TableWrapper = styled.div`
    width : 100%;
    margin-left : auto;
    margin-right : auto;
`;

export const MarketTable = styled.table`
    /* table-layout: fixed; */
`;

export const MarketTableHeader = styled.thead`
    height : 80px;

    font-weight: ${({theme}) => theme.fontWeight.normal };
    font-size: ${({theme}) => theme.fontSize.body_14};
    line-height: 150%;

    color: ${({ theme }) => theme.colors.greyScale_6 };
`;

export const MarketTableHeaderRowSpan = styled.th.attrs({ rowSpan : 2 })<{ text : string }>`
    width : ${ ({text}) => ( ( text === "" ) && '80px' ) || ( ( text === "제목" ) && '400px' || '160px' ) };
`;

export const MarketTableHeaderNoSpan = styled.th.attrs({ })`
    width: 160px;
`;

export const MarketTableBody = styled.tbody`
    height : 80px;

    font-weight: ${({theme}) => theme.fontWeight.normal };
    font-size: ${({theme}) => theme.fontSize.body_14};
    line-height: 150%;

    color: ${({ theme }) => theme.colors.greyScale_6 };
`;

export const MarketTableBodyRowSpan = styled.td.attrs({ rowSpan : 2 })< {index : number} >`
    text-align: ${({ index }) => index === 3 ? "left" : "center" };
    padding : ${({ index }) => index === 3 && "19px 16px" };
`;

export const MarketTableBodyClamp = styled.div`
    overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2; /* ellipsis line */
	-webkit-box-orient: vertical;
`;

export const MarketTableBodyNoSpan = styled.td.attrs({ })``;

export const MarketTableBodyButton = styled( Button )`
    background-color: ${({theme}) => theme.colors.greyScale_3 };
    color : ${({theme}) => theme.colors.greyScale_5 };
`;

export const MarketCheckBoxWrapper = styled.div`
  /* inline-block 사이에 공백이 생기게 되는데, parent 태그에 font-size: 0를 적용하면 해결 */
  /* &+label의 display를 block으로 바꾸면 font-size 주석처리 해도 됨 */
  font-size:0;
  /* inline-block 끼리 높이가 안맞을 때 상위 공백이 생기게 되는데 vertical-align: top을 적용하면 해결 */
  /* vertical-align: top; */
`;

export const MarketInputCheckBox = styled.input.attrs({ type : "checkbox" } )`
  display: none;
  /* + 연산 : 바로 옆 태그를 참조 */
  /* 체크 된 상태 CSS */ 
  &+label{
    cursor: pointer;
    position: relative;

    display:inline-block;
    width:18px;
    height:18px;
    border:2px solid #1E1E20;
    border-radius: 4px;
    vertical-align: middle;
  }
  
  &:checked+label{
    width: 18px;
    height:18px;
    background-image: url(${BlackCheckBox});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const MarketLabelCheckBox = styled.label``;