import React from "react";

const UserTable = (props) => (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>FIRST NAME</th>
        <th>LAST NAME</th>
        <th>E-MAIL</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      {props.performSearch().length > 0 ? (
        props.performSearch().map((user) => (
          <tr key={Math.random()}>
            <td>{user.id}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="btn btn-success"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-danger mx-3"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
