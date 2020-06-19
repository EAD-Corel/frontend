import styled from "styled-components";
import { Modal, Typography } from "@material-ui/core";
import { IoMdClose } from "react-icons/io";

export const Body = styled(Modal)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

export const Content = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 60%;
`;

export const Header = styled.div`
  display: flex;
  border-bottom: 1px solid #dbdfea;
  padding: 1rem 1.5rem;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  width: 90%;
`;

export const Title = styled(Typography)`
  font-size: 1.25rem !important;
  color: #364a63 !important;
  font-weight: 700 !important;
`;

export const IconClose = styled(IoMdClose)`
  font-size: 1.25rem !important;
  color: #364a63 !important;
  display: flex !important;
  justify-content: flex-end !important;
  margin-top: 5px;
  cursor: pointer;
`;

export const Main = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
`;
