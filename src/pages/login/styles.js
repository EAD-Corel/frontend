import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { AiFillHeart } from "react-icons/ai";
import { FiCoffee } from "react-icons/fi";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  width: 420px;
  text-align: left;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Logo = styled(Typography)`
  display: flex !important;
  color: #2b3748 !important;
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

export const Title = styled(Typography)`
  font-size: 1.25rem !important;
  margin-bottom: 0.5rem !important;
  font-weight: 700 !important;
  line-height: 1.1 !important;
  color: #364a63 !important;
  margin-top: 30px !important;
`;

export const SubTitle = styled(Typography)`
  color: #526484 !important;
  font-size: 0.875rem !important;
  font-weight: 400 !important;
  line-height: 1.65 !important;
  margin-bottom: 27px !important;
`;

export const Spacing = styled.div`
  margin-bottom: 20px;
`;

export const Account = styled(Typography)`
  padding-top: 1.5rem !important;
  font-size: 0.875rem !important;
  font-weight: 400 !important;
  line-height: 1.65 !important;
  color: #868aff !important;
  cursor: pointer;
`;

export const Copy = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.65;
  color: #868aff;
  text-align: left;
  margin-top: 50px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Icon1 = styled(AiFillHeart)`
  color: red;
  font-size: 0.875rem;
  margin: 4px 3px 0 3px;
`;

export const Icon2 = styled(FiCoffee)`
  color: #797676;
  font-size: 0.875rem;
  margin: 4px 3px 0 3px;
`;
