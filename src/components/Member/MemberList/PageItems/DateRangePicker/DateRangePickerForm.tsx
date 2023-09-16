import React from "react";
import ReactDatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { ReactComponent as Calendar } from "assets/calendar.svg";
import { CalendarWrapper, DatePickerWrapperStyles } from "./DateRangePicker.styled";

import "react-datepicker/dist/react-datepicker.css";

type DateRangePickerProps = {
    startDate: Date;
    setStartDate: Function;
    endDate: Date;
    setEndDate: Function;
    disabled: boolean;
};

function DateRangePickerForm({ startDate, setStartDate, endDate, setEndDate, disabled }: DateRangePickerProps) {
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

export default DateRangePickerForm;
