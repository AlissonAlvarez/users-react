import React from "react";
import styled from "styled-components";

const TextStyle = styled.p`
  color: #000;
  font-size: 13px;
  font-weight: bold;
`;

const Text = ({ children }) => 
  <TextStyle>
    {children}
  </TextStyle>;

export default React.memo(Text);
