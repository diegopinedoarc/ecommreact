import React from "react";
import { Input, InputContainer, InputLabel } from "./InputFormStyle";

const InputForm = ({ children, htmlFor, type, id, placeholder }) => {
  return (
    <InputContainer>
      <Input type={type} id={id} placeholder={placeholder} />
      <InputLabel htmlFor={htmlFor}>{children} </InputLabel>
    </InputContainer>
  );
};

export default InputForm;
