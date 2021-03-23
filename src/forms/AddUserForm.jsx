import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, firstname: "", lastname: "", email: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.firstname || !user.lastname) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
        <div className="form-group">
            <label>First Name</label>
            <input
                className="form-control"
                type="text"
                name="firstname"
                value={user.firstname}
                onChange={handleInputChange}
                required
            />
        </div>
        <div className="form-group">
            <label>Last Name</label>
            <input
                className="form-control"
                type="text"
                name="lastname"
                value={user.lastname}
                onChange={handleInputChange}
                required
            />
        </div>
        <div className="form-group">
            <label>E-mail</label>
            <input
                className="form-control"
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                required
            />
        </div>
        <button className="btn btn-success">Add New User</button>
    </form>
  );
};

export default AddUserForm;
