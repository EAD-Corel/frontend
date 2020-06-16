import React from "react";
import { Body, Title, SubTitle } from "./styles";

const WarningComponent = ({ title, subtitle }) => {
  return (
    <Body>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Body>
  );
};

export default WarningComponent;
