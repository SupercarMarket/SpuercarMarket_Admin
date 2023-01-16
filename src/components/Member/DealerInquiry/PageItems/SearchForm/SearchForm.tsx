import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../styles/buttonStyles";
import Select from "../../../commons/Select";

const SearchBoxWrapper = styled.div`
  display: flex;
`;

const selectOptions = [
  { value: "all", name: "전체" },
  { value: "companyName", name: "상사명" },
  { value: "companyPhone", name: "상사 전화번호" },
  { value: "companyAddress", name: "상사 주소" },
  { value: "unionName", name: "조합명" },
  { value: "idCardNumber", name: "사원증 번호" },
];

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #c3c3c7;

  .element {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 24px;
    height: 44px;

    .title {
      width: 128px;
      display: flex;
      align-items: center;
    }

    .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      gap: 24px;
    }
  }

  input.textBox {
    padding: 0px 20px;

    width: 360px;
    height: 44px;

    background: #ffffff;
    border: 1px solid #c3c3c7;
    border-radius: 4px;
  }
`;

function SearchForm() {
  const [selectFilter, setSelectFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

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
    console.log("request!");
  };

  const handleInit = () => {
    setSelectFilter("all");
    setSearchText("");
  };

  return (
    <SearchBoxWrapper>
      <Form onSubmit={handleSubmit}>
        <div className="element">
          <div className="title">검색어</div>
          <div className="content">
            <Select optionData={selectOptions} value={selectFilter} setValue={setSelectFilter} />
            <input className="textBox" placeholder="검색어를 입력해주세요." value={searchText} onChange={handleTextChange}></input>
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

export default SearchForm;
