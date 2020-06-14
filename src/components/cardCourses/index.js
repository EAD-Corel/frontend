import React from "react";
import Image from "material-ui-image";
import { Main, Body, Title, Text, SessionBtn } from "./styles";
import Empty from "../../assets/images/empty.png";
import Button from "../../components/button";

const CardCoursesComponent = ({ image, name, text }) => {
  return (
    <Main>
      <Image disableSpinner src={image ? image : Empty} aspectRatio={16 / 8} />
      <Body>
        <Title>{name}</Title>
        <Text>{text}</Text>
        <SessionBtn>
          <Button label="Acessar" color="primary" />
        </SessionBtn>
      </Body>
    </Main>
  );
};

export default CardCoursesComponent;
