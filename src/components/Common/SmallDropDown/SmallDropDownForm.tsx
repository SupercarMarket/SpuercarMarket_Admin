import React from 'react'
import { DropDownPropsType, DropDownItemMap } from "../../../types/DropDownType";
import { Wrapper, Selecter, SelecterArrow, OptionWrapper, OptionItem } from "./SmallDropDownForm.styled";

import { useDetectOutSideHandler } from "../../../hooks/DropDown/useDropDownHooks";

const SmallDropDownForm = ( { category } : DropDownPropsType ) => {
  const { isOpen, isTitle, ref, openDropDownFn, changeDropDownTitleFn } = useDetectOutSideHandler( { initState : false, title : category } );

  return (
    <Wrapper ref={ ref }>
      <Selecter
        onClick={ () =>  openDropDownFn( isOpen ) }
      >
        {isTitle}
      </Selecter>
      <SelecterArrow />
      <OptionWrapper isClicked={ isOpen }>
        {DropDownItemMap[category].map((item) => {
          return (
            <OptionItem
              key={item.name}
              onClick={() => {
                changeDropDownTitleFn( item.name );
              }}
            >
              {item.name}
            </OptionItem>
          );
        })}
      </OptionWrapper>
    </Wrapper>
  );
}

export default SmallDropDownForm;