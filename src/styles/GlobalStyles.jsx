import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  outline: none;  
  font-family: "Poppins"; 
}

html, body {
  width:100%;
  background-color: #ffffff;
  overflow-x: hidden;
}

a{
    color: inherit;
}
`
export default GlobalStyles;