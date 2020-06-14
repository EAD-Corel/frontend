import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const Main = styled.div`
  border: 1px solid #dbdfea;
  background-color: #fff;
`;

export const Body = styled.div`
  padding: 20px;
`;

export const Title = styled(Typography)`
  margin-bottom: 0.75rem !important;
  font-size: 1.25rem !important;
  font-weight: 700 !important;
  line-height: 1.1 !important;
  color: #364a63 !important;
`;

export const Text = styled(Typography)`
  font-size: 0.875rem !important;
  font-weight: 400 !important;
  line-height: 1.65 !important;
  color: #526484 !important;
  text-align: left !important;
`;

export const SessionBtn = styled.div`
  width: 40%;
  margin-top: 18px;
`;
