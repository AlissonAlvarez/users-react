import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { FaSearch } from "react-icons/fa";

const SearchStyle = styled.div`
  position: absolute;
  display: flex;
  margin-top: 45vh;
`;

const Search = ({ searchData, setSearchData }) => (
  <SearchStyle>
    <Input
      value={searchData}
      onChange={(e) => setSearchData(e.target.value)}
      placeholder="Buscar usuarios..."
    />
    <Button onClick={() => setSearchData("")}>
      <FaSearch />
    </Button>
  </SearchStyle>
);

export default React.memo(Search);
