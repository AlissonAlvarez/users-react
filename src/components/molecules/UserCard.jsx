import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";

const UserCardStyle = styled.div`
  display: flex;
  width: 30vw;
  height: 15vh;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 10px 1px #0000008b;
  cursor: pointer;

  &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.1);
    background-color: #0065fd89;
    box-shadow: none;
  }

  img {
    display: flex;
    margin: auto;
    border-radius: 50%;
    margin-top: 1rem;
    box-shadow: 2px 2px 10px 1px #0000008b;
  }

  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    text-align: center;
  }
`;

const DataStyle = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 769px) {
    width: 100%;
    text-align: center;
  }
`;

const UserCard = ({ user }) => (
  <UserCardStyle>
    <img
      src={user.picture.medium}
      alt={`${user.name.first} ${user.name.last}`}
    />
    <DataStyle>
      <Text>
        {user.name.first} {user.name.last}
      </Text>
      <Text>{user.email}</Text>
    </DataStyle>
  </UserCardStyle>
);

export default React.memo(UserCard);
