import React, { useState, useRef, useEffect } from 'react'
import { DropDownPropsType, DropDownItemMap } from "../../../types/DropDownType";
import { Wrapper, Selecter, SelecterArrow, OptionWrapper, OptionItem } from "./DropDownForm.styeld";

import { useDetectOutSideHandler } from "../../../hooks/DropDown/useDropDownHooks";

const DropDownForm = ( { category } : DropDownPropsType ) => {
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

export default DropDownForm;