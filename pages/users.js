import React from "react";
import User from "../components/user";

const UserList = ({ users }) => {
  return (
    <div>
      <h1>List of User</h1>

      {users.map((item, index) => {
        return (
          <div key={item.id}>
            <User user={item} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
