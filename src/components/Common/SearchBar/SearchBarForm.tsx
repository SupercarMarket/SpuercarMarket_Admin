import React, { useState } from "react";
import {
  SearchBarWrapper,
  SearchBarInput,
  SearchBarIcon,
} from "./SearchBarForm.styled";

const SearchBarForm = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const inputOnchangeHandler = ( event : React.ChangeEvent<HTMLInputElement> ) => {
    if( event.target.value ){
        setIsFocus( true );
    }else{
        setIsFocus( false );
    }
  }

  return (
    <SearchBarWrapper>
      <SearchBarInput onChange={ event => inputOnchangeHandler( event )} />
      <SearchBarIcon isFocus={ isFocus } />
    </SearchBarWrapper>
  );
};

export default SearchBarForm;
