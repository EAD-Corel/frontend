import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const Header = styled.div`
  margin-top: 20px;
`;

export const Title = styled(Typography)`
  font-size: 1.75rem !important;
  font-weight: 700 !important;
  line-height: 1.1 !important;
  color: #364a63 !important;
  margin-bottom: 0.5rem !important;
`;

export const SubTitle = styled(Typography)`
  font-size: 0.875rem !important;
  font-weight: 400 !important;
  line-height: 1.65 !important;
  color: #8094ae !important;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SessionBtn = styled.div`
  width: 140px;
  margin: 10px 5px 10px 0;
`;

export const MarginTop = styled.div`
  margin-top: 50px;
`;

export const Flex = styled.div`
  display: flex;
`;

export const SessionProgress = styled.div`
  padding: 26px 0 0 0;
  max-width: 95%;
`;

export const PercentProgress = styled.p`
  color: #8094ae !important;
`;
