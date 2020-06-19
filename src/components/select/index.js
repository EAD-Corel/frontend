import React from "react";
import { Label, Flex, SubLabel, Input } from "./styles";

const SelectComponent = ({
  label,
  subLabel,
  name,
  value,
  onChange,
  placeholder,
  inputRef,
  type,
  required,
  children,
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
      >
        {children}
      </Input>
    </>
  );
};

export default SelectComponent;
