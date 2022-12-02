import { Field, ErrorMessage } from "formik";
import React from "react";
import {
  Input,
  InputContainer,
  InputLabel,
  ErrorMessageStyled,
} from "./InputFormStyle";

const InputForm = ({ children, htmlFor, type, id, placeholder, name }) => {
  return (
    <InputContainer>
      <Input type={type} id={id} placeholder={placeholder} />
      <InputLabel htmlFor={htmlFor}>{children} </InputLabel>
    </InputContainer>
  );
};

export default InputForm;
