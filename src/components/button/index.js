import React from "react";
import { Button } from "./styles";

const ButtonComponent = ({ label, color, onClick, type, margin }) => {
  return (
    <Button
      variant="outlined"
      color={color}
      onClick={onClick}
      type={type}
      margin={margin}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
