import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  width: 100vh;
  padding: 1%;
  border-radius: 0.2rem;
  background-color: antiquewhite;

  @media screen and (max-width: 769px) {
    width: 20rem;
    text-align: center;
  }
`;

const Input = ({ value, onChange, placeholder }) => (
  <InputStyle
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  ></InputStyle>
);

export default React.memo(Input);
