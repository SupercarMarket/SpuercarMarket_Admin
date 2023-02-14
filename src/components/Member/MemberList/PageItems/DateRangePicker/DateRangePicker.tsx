import React from "react";
import ReactDatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import styled, { createGlobalStyle } from "styled-components";
import { ReactComponent as Calendar } from "assets/calendar.svg";

import "react-datepicker/dist/react-datepicker.css";

type DateRangePickerProps = {
  startDate: Date;
  setStartDate: Function;
  endDate: Date;
  setEndDate: Function;
  disabled: boolean;
};

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

function DateRangePicker({ startDate, setStartDate, endDate, setEndDate, disabled }: DateRangePickerProps) {
  return (
    <React.Fragment>
      <CalendarWrapper>
        <ReactDatePicker
          wrapperClassName="datePicker "
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          maxDate={new Date()}
          dateFormat="yyyy.MM.dd"
          locale={ko}
          disabled={disabled}
        />
        <div className="icon">
          <Calendar />
        </div>
      </CalendarWrapper>
      <span> ~ </span>
      <CalendarWrapper>
        <ReactDatePicker
          wrapperClassName="datePicker"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          maxDate={new Date()}
          dateFormat="yyyy.MM.dd"
          locale={ko}
          disabled={disabled}
        />
        <div className="icon">
          <Calendar />
        </div>
      </CalendarWrapper>
      <DatePickerWrapperStyles />
    </React.Fragment>
  );
}

export default DateRangePicker;
