import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const Body = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 15px 0 rgba(31, 43, 58, 0.1);
  border-left: 4px solid #6576ff;
  line-height: 1.5;
  padding: 15px;
  margin-bottom: 15px;
`;

export const Title = styled(Typography)`
  font-size: 1.05rem !important;
  font-weight: 700 !important;
  line-height: 1.1 !important;
  color: #364a63 !important;
  margin-bottom: 0.5rem !important;
`;

export const SubTitle = styled(Typography)`
  color: #526484 !important;
  line-height: 1.5 !important;
  font-size: 0.875rem !important;
  font-weight: 400 !important;
  color: #364a63 !important;
`;
