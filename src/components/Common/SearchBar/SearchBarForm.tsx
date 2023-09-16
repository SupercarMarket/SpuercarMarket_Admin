import React, { useState, useRef } from "react";
import {
  SearchBarWrapper,
  SearchBarInput,
  SearchBarIcon,
} from "./SearchBarForm.styled";
import { SearchBarProps } from "../../../types/SearchBarType";

const SearchBarForm = ( { SearchBarInputRef, SearchBarOnClick, SearchBarInputOnKeyDown } : SearchBarProps ) => {
  

  return (
    <SearchBarWrapper>
      <SearchBarInput ref={SearchBarInputRef} onKeyDown={ event => {SearchBarInputOnKeyDown( event )} }/>
      <SearchBarIcon onClick={SearchBarOnClick} />
    </SearchBarWrapper>
  );
};

export default SearchBarForm;
