import styled from "styled-components";
import { Button as Btn } from "@material-ui/core";

export const Button = styled(Btn)`
  width: 100% !important;
  font-family: "Roboto", sans-serif !important;
  padding: 0.6875rem 1.5rem !important;
  font-size: 0.9375rem !important;
  line-height: 1.25rem !important;
  border-radius: 5px !important;
  margin: ${(props) => (props.margin ? props.margin : null)} !important;
`;
