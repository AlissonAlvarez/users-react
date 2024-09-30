import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.9rem 1.5rem;
  border-radius: 0.2rem;
  background-color: #e95906;
  color: #fff;
  font-size: 18px;
  transition: all 0.2s ease;
  cursor: pointer;
`;

const Button = ({ children, onClick }) => (
  <ButtonStyle onClick={onClick}>
    {children}
  </ButtonStyle>
);

export default React.memo(Button);
