import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const Body = styled.div`
  max-width: 960px;
  margin: 0 auto 50px auto;
`;

export const Title = styled(Typography)`
  font-weight: 400 !important;
  font-size: 2.5rem !important;
  letter-spacing: -0.03em !important;
  line-height: 1.1 !important;
  color: #364a63 !important;
`;

export const SubTitle = styled(Typography)`
  font-size: 1.09375rem !important;
  font-weight: 400 !important;
  color: #526484 !important;
  line-height: 1.65 !important;
  margin-top: 15px !important;
  margin-bottom: 20px !important;
`;

export const Type = styled(Typography)`
  font-size: 11px !important;
  line-height: 1.2 !important;
  letter-spacing: 0.2em !important;
  text-transform: uppercase !important;
  font-weight: 700 !important;
  color: #8094ae !important;
`;

export const Grey = styled.div`
  background-color: #f5f6fa;
  margin-top: 15px;
  text-align: center;
  padding: 30px 0;
`;

export const Logo = styled(Typography)`
  display: flex !important;
  color: #526484 !important;
  font-weight: 600 !important;
  font-size: 25px !important;
  justify-content: center !important;
`;

export const SubLogo = styled(Typography)`
  display: flex !important;
  color: #868aff !important;
  font-weight: 600 !important;
  font-size: 25px !important;
  margin-left: 3px !important;
`;

export const White = styled.div`
  background-color: #fff;
  margin: 20px auto 0 auto;
  padding: 2.75rem;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #8094ae;
  max-width: 600px;
  text-align: left;
`;
