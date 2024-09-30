import React from "react";
import styled from "styled-components";
import Search from "../molecules/Search";
import UserList from "../organisms/UserList";
import Banner from "../../assets/banner.png";

const Header = styled.div`
  display: flex;
  justify-content: center;
  min-height: 65vh;
  background: linear-gradient(rgba(29, 81, 211, 0.75), rgba(5, 7, 12, 0.75)),
    url(${Banner}) no-repeat center;
  background-size: cover;
  background-position: top;
`;

const Title = styled.h1`
  position: absolute;
  margin-top: 25vh;
  color: antiquewhite;
  font-size: 5rem;
  text-shadow: 0.1em 0.1em 0.05em #0000008b;
`;

const MainTemplate = ({ searchData, setSearchData, users }) => (
  <div>
    <Header>
      <Title>Directorio</Title>
      <Search searchData={searchData} setSearchData={setSearchData} />
    </Header>
    <UserList users={users} />
  </div>
);

export default MainTemplate;
