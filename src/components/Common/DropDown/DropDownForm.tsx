import React, { useState } from 'react'
import { Wrapper, Selecter, SelecterArrow, OptionWrapper, OptionItem } from "./DropDownForm.styeld";

import { DropDownPropsType, DropDownSelecterMap, DropDownItemMap } from "../../../types/DropDownType";


const DropDownForm = ( { category } : DropDownPropsType ) => {
  const [ isClicked, setIsClicked ] = useState<boolean>( false );

  return (
    <Wrapper>
      <Selecter onClick={() => setIsClicked( !isClicked ) }>{ DropDownSelecterMap[category].name }</Selecter>
      <SelecterArrow />
      <OptionWrapper isClicked={ isClicked }>
        { DropDownItemMap[ category ].map( item => {
          return (
            <OptionItem key={item.name} >{item.name}</OptionItem>
          )})}
      </OptionWrapper>
    </Wrapper>
  )
}

export default DropDownForm;