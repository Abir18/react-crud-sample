import React, { useState, Fragment } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import SearchPanel from "./forms/SearchPanel";
import UserTable from "./tables/UserTable";

const App = () => {
  // Data
  const usersData = [
    {
      id: 1,
      firstname: "John",
      lastname: "Doe",
      email: "joh.doe@gmail.com",
    },
    {
      id: 2,
      firstname: "Douglas",
      lastname: "Witt",
      email: "douglas.witt@gmail.com",
    },
    {
      id: 3,
      firstname: "Matthew",
      lastname: "Lamberson",
      email: "matthew.lamberson@gmail.com",
    },
  ];

  const initialFormState = { id: null, firstname: "", lastname: "", email: "" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    });
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const performSearch = () => {
    return users.filter(
      (user) =>
        user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="container">
      <SearchPanel handleSearch={handleSearch} searchTerm={searchTerm} />
      <div className="">
        <UserTable
          users={users}
          editRow={editRow}
          deleteUser={deleteUser}
          performSearch={performSearch}
        />
      </div>
      <div className="">
        {editing ? (
          <Fragment>
            <h2>Update User</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </Fragment>
        ) : (
          <Fragment>
            <h2>Add User</h2>
            <AddUserForm addUser={addUser} />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default App;
