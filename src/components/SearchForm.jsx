import React from "react";
import { useState } from "react";
import UserCardList from "./UserCardList";
import UserCard from "./UserCard";

const SearchForm = (props) => {
  const [inputUsername, setInputUsername] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const handleClick = () => {
    fetch(`http://localhost:8000/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(inputUsername);
        let foundUser = data.find((file) => file.user.login === inputUsername);
        console.log(foundUser);
        setSelectedUser(foundUser);
      })
      .catch((err) => {
        console.log("unable to fetch");
      });
  };
  return (
    <div>
      <label>Input here:</label>
      <input onChange={(e) => setInputUsername(e.target.value)}></input>
      <button onClick={handleClick}>Submit</button>
      <UserCardList selectedUser={selectedUser} />
      <UserCard selectedUser={selectedUser} />
    </div>
  );
};

export default SearchForm;
