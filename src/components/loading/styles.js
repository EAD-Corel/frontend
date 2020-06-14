import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Progress = styled(CircularProgress)`
  margin: 0 auto;
`;
