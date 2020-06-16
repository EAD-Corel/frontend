import React from "react";
import { Label, Flex, SubLabel, Input } from "./styles";

const InputComponent = ({
  label,
  subLabel,
  name,
  value,
  onChange,
  placeholder,
  inputRef,
  type,
  required,
}) => {
  return (
    <>
      <Flex>
        <Label>{label}</Label>
        <SubLabel>{subLabel}</SubLabel>
      </Flex>
      <Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputRef={inputRef}
        required={required}
      />
    </>
  );
};

export default InputComponent;
