import React, { useMemo } from "react";
import { Main, Body } from "./styles";
import { Slide } from "@material-ui/core";

const AlertComponent = ({ severity, message, open, close }) => {
  useMemo(() => {
    if (open) {
      setTimeout(() => {
        close();
      }, 6000);
    }
    // eslint-disable-next-line
  }, [open]);

  return (
    <Slide in={open}>
      <Main>
        <Body variant="filled" severity={severity}>
          {message}
        </Body>
      </Main>
    </Slide>
  );
};

export default AlertComponent;
