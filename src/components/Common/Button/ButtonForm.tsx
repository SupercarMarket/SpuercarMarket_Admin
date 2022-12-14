import React from 'react'
import { Button } from "./ButtonForm.styled";

import { ButtonPropsType } from "../../../types/ButtonType";

const ButtonForm = ({ text } : ButtonPropsType ) => {
  return (
    <Button>{text}</Button>
  )
}

export default ButtonForm;