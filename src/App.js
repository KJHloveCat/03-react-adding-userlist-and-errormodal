import { useState } from "react";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UsersList";

function App() {
  const [userList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, id) => {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={userList}></UserList>
    </>
  );
}

export default App;
