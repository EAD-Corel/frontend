import React from "react";
import { Title, SubTitle } from "./styles";

const TitleComponent = ({ title, subTitle }) => {
  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </>
  );
};

export default TitleComponent;
