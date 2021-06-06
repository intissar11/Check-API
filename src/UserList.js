import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
const UserList = () => {
  const [listOfUSer, setListOfUSer] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        setListOfUSer(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {listOfUSer.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default UserList;
