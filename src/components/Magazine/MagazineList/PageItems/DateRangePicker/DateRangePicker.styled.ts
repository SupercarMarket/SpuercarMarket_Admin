import styled, { createGlobalStyle } from "styled-components";

const CalendarWrapper = styled.div`
    padding: 0px;
    display: flex;
    flex-direction: row;
    position: relative;

    .icon {
        border-left: 1px solid #c3c3c7;
        padding: 10px;
        height: 44px;
        width: 44px;
        position: absolute;
        right: 0px;
        pointer-events: none;
    }
`;

const DatePickerWrapperStyles = createGlobalStyle`
  .datePicker {
    width: 240px !important;
    
    input {
      width: 240px;
      height: 44px;
      padding: 0px 0px 0px 20px;
      background: #ffffff;
      border: 1px solid #c3c3c7;
    }
  }
`;

export { CalendarWrapper, DatePickerWrapperStyles };
