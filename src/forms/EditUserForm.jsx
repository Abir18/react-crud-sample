import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
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
        <button className="btn btn-success mx-3">Update</button>
        <button
            onClick={() => props.setEditing(false)}
            className="btn btn-danger"
        >
            Close
        </button>
    </form>
  );
};

export default EditUserForm;
