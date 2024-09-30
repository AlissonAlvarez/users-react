import React, { useState, useEffect, useMemo, useCallback } from "react";
import MainTemplate from "../templates/MainTemplate";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const filterUsers = useMemo(() => {
    return users.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      const email = user.email.toLowerCase();
      const searchDataLower = searchData.toLowerCase();

      return (
        fullName.includes(searchDataLower) ||
        email.includes(searchDataLower) ||
        user.name.first.toLowerCase().includes(searchDataLower) ||
        user.name.last.toLowerCase().includes(searchDataLower)
      );
    });
  }, [searchData, users]);

  const handleSearchDataChange = useCallback((term) => {
    setSearchData(term);
  }, []);

  return (
    <MainTemplate
      searchData={searchData}
      setSearchData={handleSearchDataChange}
      users={filterUsers}
    />
  );
};

export default UsersPage;
