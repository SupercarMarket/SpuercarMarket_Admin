import React from "react";
import { Button } from "../../../styles/buttonStyles";
import Select from "../../../commons/Select";
import DateRangePicker from "../DateRangePicker/DateRangePicker";
import RadioBtn from "../../../commons/RadioBtn";
import CheckBoxGroup from "../../../commons/CheckBoxGroup";

import { SearchBoxWrapper, Form } from "./MemberSearch.styled";

const selectOptions = [
  { value: "all", name: "전체" },
  { value: "userSeq", name: "회원번호" },
  { value: "userId", name: "아이디" },
  { value: "userName", name: "이름" },
  { value: "userNickName", name: "닉네임" },
  { value: "userPhone", name: "전화번호" },
  { value: "userEmail", name: "이메일" },
];

const classOptions = [
  { value: "0", name: "전체" },
  { value: "1", name: "일반" },
  { value: "2", name: "딜러" },
];

const ratingOptions = [
  { value: "1", name: "브론즈" },
  { value: "2", name: "실버" },
  { value: "3", name: "골드" },
  { value: "4", name: "플레티넘" },
  { value: "5", name: "다이아" },
];

type MemberSearchProps = {
  selectFilter: string;
  setSelectFilter: Function;
  searchText: string;
  setSearchText: Function;
  isEntireDate: boolean;
  setIsEntireDate: Function;
  startDate: Date;
  setStartDate: Function;
  endDate: Date;
  setEndDate: Function;
  selectClass: string;
  setSelectClass: Function;
  selectRating: string[];
  setSelectRating: Function;
};

function MemberSearchForm({
  selectFilter,
  setSelectFilter,
  searchText,
  setSearchText,
  isEntireDate,
  setIsEntireDate,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  selectClass,
  setSelectClass,
  selectRating,
  setSelectRating,
}: MemberSearchProps) {
  // const [selectFilter, setSelectFilter] = useState("all");
  // const [searchText, setSearchText] = useState("");
  // const [isEntireDate, setIsEntireDate] = useState(true);
  // const [startDate, setStartDate] = useState(new Date(new Date().setMonth(new Date().getMonth() - 1)));
  // const [endDate, setEndDate] = useState(new Date());
  // const [selectRole, setSelectRole] = useState("0");
  // const [selectClass, setSelectClass] = useState<string[]>([]);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectFilter !== "all") {
      console.log(`Filter: ${selectFilter}`);
    }
    if (searchText !== "") {
      console.log(`Text: ${searchText}`);
    }
    if (!isEntireDate) {
      console.log(`startDate: ${startDate}`);
      console.log(`endDate: ${endDate}`);
    }
    if (selectClass !== "0") {
      console.log(`selectClass: ${selectClass}`);
    }
    if (selectRating.length !== 0 && selectRating.length !== ratingOptions.length) {
      console.log(`selectRating: ${selectRating}`);
    }
    console.log("request!");
  };

  const handleInit = () => {
    setSelectFilter("all");
    setSearchText("");
    setIsEntireDate(true);
    setStartDate(new Date(new Date().setMonth(new Date().getMonth() - 1)));
    setEndDate(new Date());
    setSelectClass("0");
    setSelectRating([]);
  };

  return (
    <SearchBoxWrapper>
      <Form onSubmit={handleSubmit}>
        <div className="element">
          <div className="title">검색어</div>
          <div className="content">
            <div style={{ width: "134px" }}>
              <Select optionData={selectOptions} value={selectFilter} setValue={setSelectFilter} />
            </div>
            <input className="textBox" placeholder="검색어를 입력해주세요." value={searchText} onChange={handleTextChange}></input>
          </div>
        </div>
        <div className="element">
          <div className="title">가입일자</div>
          <div className="content">
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px" }}>
              <input type="checkbox" onChange={() => setIsEntireDate(!isEntireDate)} checked={isEntireDate} />
              <span>전체</span>
            </div>
            <DateRangePicker startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} disabled={isEntireDate} />
          </div>
        </div>
        <div className="element">
          <div className="title">Role</div>
          <div className="content">
            <RadioBtn optionData={classOptions} value={selectClass} setValue={setSelectClass} />
          </div>
        </div>
        <div className="element">
          <div className="title">회원등급</div>
          <div className="content">
            <CheckBoxGroup optionData={ratingOptions} checkedList={selectRating} setCheckedList={setSelectRating} />
          </div>
        </div>
        <div className="element" style={{ justifyContent: "center" }}>
          <Button className="brown" type="submit" style={{ width: "120px", height: "44px" }}>
            검색
          </Button>
          <Button type="reset" onClick={handleInit} style={{ width: "120px", height: "44px" }}>
            초기화
          </Button>
        </div>
      </Form>
    </SearchBoxWrapper>
  );
}

export default MemberSearchForm;
