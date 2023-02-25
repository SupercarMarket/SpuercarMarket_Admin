import React, { useState } from "react";

import Select from "../../../commons/Select";

import { Form, SearchIconButton } from "./SearchForm.styled";
import { ReactComponent as SearchIcon } from "assets/search.svg";

const selectOptions = [
  { value: "all", name: "전체" },
  { value: "comName", name: "상사명" },
  { value: "comPhone", name: "상사 전화번호" },
  { value: "comAddress", name: "상사 주소" },
  { value: "guildName", name: "조합명" },
  { value: "dlrNum", name: "사원증 번호" },
];

type searchFormProps = {
  selectFilter: string;
  setSelectFilter: Function;
  searchText: string;
  setSearchText: Function;
  getDealerInquiryData: Function;
};

function SearchForm({ selectFilter, setSelectFilter, searchText, setSearchText, getDealerInquiryData }: searchFormProps) {
  // const [selectFilter, setSelectFilter] = useState("all");
  const [searchTextTmp, setSearchTextTmp] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTextTmp(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchText(searchTextTmp);
    if (searchText !== "") {
      getDealerInquiryData();
      if (selectFilter !== "all") {
        console.log(`Filter: ${selectFilter}`);
      }
      if (searchText !== "") {
        console.log(`Text: ${searchText}`);
      }
      console.log("request!");
      setSearchTextTmp("");
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Select optionData={selectOptions} value={selectFilter} setValue={setSelectFilter} />
        <input className="textBox" placeholder="검색어를 입력해주세요." value={searchText} onChange={handleTextChange}></input>
        <SearchIconButton type="submit">
          <SearchIcon />
        </SearchIconButton>
      </Form>
    </div>
  );
}

export default SearchForm;
