import styled from "styled-components";

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #344357;
  line-height: 1.65;
`;

export const SubLabel = styled.p`
  color: #6576ff;
  font-size: 0.75rem;
  text-align: right;
  line-height: 1;
  border: none;
  background: transparent;
  transition: all 0.3s ease;
  white-space: nowrap;
  cursor: pointer;
`;

export const Input = styled.select`
  width: 95%;
  height: 42px;
  padding: 0.6875rem 1rem;
  font-size: 0.9375rem;
  line-height: 1.25rem;
  border-radius: 5px;
  font-weight: 400;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dbdfea;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-top: 5px;

  &:focus {
    border: 1px solid #6576ff;
  }

  @media (max-width: 768px) {
    width: 88%;
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
