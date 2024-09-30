import React from "react";
import styled from "styled-components";
import UserCard from "../molecules/UserCard";

const UserListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 10fr);
  gap: 1rem;
  margin-top: 2rem;
  margin-left: 2rem;

  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const UserList = ({ users }) => (
  <UserListStyle>
    {users.map((user) => (
      <UserCard key={user.login.uuid} user={user} />
    ))}
  </UserListStyle>
);

export default React.memo(UserList);
