import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const Title = styled(Typography)`
  text-align: center !important;
  font-weight: 400 !important;
  color: #364a63 !important;
  font-size: 2.5rem !important;
  letter-spacing: -0.03em !important;
  margin-bottom: 15px !important;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
`;

export const Body = styled.div`
  margin: 0 auto;
  max-width: 900px;
  margin-bottom: 90px;
`;

export const Description = styled(Typography)`
  text-align: center !important;
  font-size: 0.875rem !important;
  font-weight: 400 !important;
  line-height: 1.65 !important;
  color: #526484 !important;
  margin-top: 30px !important;
`;

export const ImageInfo = styled.img`
  width: 100px;
`;
