import React from 'react'
import { Title } from "./PageTItle.styled";

import { TitlePropsType } from "../../../types/PageTitleType";

const PageTitle = ( { title } : TitlePropsType ) => {
  return (
    <Title title={title}/>
  )
}

export default PageTitle;