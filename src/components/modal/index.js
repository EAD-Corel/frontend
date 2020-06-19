import React from "react";
import { Body, Content, Header, Title, IconClose, Main, Right } from "./styles";
import { Slide } from "@material-ui/core";

const Modal = ({ open, close, title, children }) => {
  return (
    <Body open={open} onClose={close}>
      <Slide direction="down" in={open} mountOnEnter unmountOnExit>
        <Content>
          <Header>
            <Title>{title}</Title>
            <Right>
              <IconClose onClick={() => close()} />
            </Right>
          </Header>
          <Main>{children}</Main>
        </Content>
      </Slide>
    </Body>
  );
};

export default Modal;
